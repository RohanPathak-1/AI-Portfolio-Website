import { and, count, eq, gte } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/db";
import { contactInquiries } from "@/db/schema";

const schema = z.object({
  fullName: z.string().trim().min(2).max(100), businessName: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(180), service: z.string().trim().max(140).optional().or(z.literal("")),
  message: z.string().trim().min(20).max(4000), companyFax: z.string().max(0), locale: z.enum(["en", "ne"]).default("en"),
  submittedAt: z.number().int().positive(),
});

const copy = {
  en: { invalid: "Please review the highlighted fields and try again.", unavailable: "Messages cannot currently be submitted. Please try again later.", rate: "Too many messages were submitted from this connection. Please try again later." },
  ne: { invalid: "कृपया दिइएको जानकारी जाँचेर फेरि प्रयास गर्नुहोस्।", unavailable: "हाल सन्देश पठाउने सुविधा उपलब्ध छैन। कृपया पछि फेरि प्रयास गर्नुहोस्।", rate: "यस कनेक्सनबाट धेरै सन्देश पठाइएको छ। कृपया पछि फेरि प्रयास गर्नुहोस्।" },
} as const;

async function fingerprint(request: Request) {
  const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const agent = request.headers.get("user-agent") ?? "unknown";
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${ip}|${agent}`));
  return Array.from(new Uint8Array(bytes)).slice(0, 16).map((value) => value.toString(16).padStart(2, "0")).join("");
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) return NextResponse.json({ code: "invalid" }, { status: 413 });
  let input: unknown;
  try { input = await request.json(); } catch { return NextResponse.json({ code: "invalid" }, { status: 400 }); }
  const locale = typeof input === "object" && input && "locale" in input && input.locale === "ne" ? "ne" : "en";
  const result = schema.safeParse(input);
  if (!result.success) return NextResponse.json({ code: "invalid", message: copy[locale].invalid, issues: result.error.flatten().fieldErrors }, { status: 400 });
  if (Date.now() - result.data.submittedAt < 1_500) return NextResponse.json({ code: "invalid", message: copy[locale].invalid }, { status: 400 });
  try {
    const db = getDb();
    const visitor = await fingerprint(request);
    const recent = await db.select({ value: count() }).from(contactInquiries).where(and(eq(contactInquiries.fingerprint, visitor), gte(contactInquiries.createdAt, Date.now() - 60 * 60 * 1000)));
    if ((recent[0]?.value ?? 0) >= 5) return NextResponse.json({ code: "rate_limited", message: copy[locale].rate }, { status: 429 });
    await db.insert(contactInquiries).values({
      id: crypto.randomUUID(), fullName: result.data.fullName, email: result.data.email,
      businessName: result.data.businessName || null, service: result.data.service || null, message: result.data.message,
      locale, fingerprint: visitor, createdAt: Date.now(),
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ code: "unavailable", message: copy[locale].unavailable }, { status: 503 });
  }
}
