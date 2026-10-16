import { NextResponse } from "next/server";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";
import { buildFormSubmitPayload, classifyFormSubmitResponse, type FormSubmitResponse } from "@/lib/formsubmit";

const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/rohanpathak2020@gmail.com";
const FORM_SUBMIT_SUBJECT = "New Website Inquiry — Rohan Pathak Portfolio";

const schema = z.object({
  fullName: z.string().trim().min(2).max(100), businessName: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(180), service: z.string().trim().max(140).optional().or(z.literal("")),
  whatsapp_number: z.string().trim().refine((value) => value.startsWith("+") && isValidPhoneNumber(value), "Invalid international WhatsApp number").transform((value) => parsePhoneNumber(value).number),
  message: z.string().trim().min(20).max(4000), companyFax: z.string().max(0), locale: z.enum(["en", "ne"]).default("en"),
  submittedAt: z.number().int().positive(),
});

const copy = {
  en: {
    invalid: "Please review the highlighted fields and try again.",
    unavailable: "Sorry, your message couldn't be sent right now. Please try again.",
    activation: "Email delivery is awaiting FormSubmit activation. Please try again after activation is complete.",
  },
  ne: {
    invalid: "कृपया दिइएको जानकारी जाँचेर फेरि प्रयास गर्नुहोस्।",
    unavailable: "माफ गर्नुहोस्, अहिले तपाईंको सन्देश पठाउन सकिएन। कृपया फेरि प्रयास गर्नुहोस्।",
    activation: "इमेल पठाउने सुविधा FormSubmit मा सक्रिय हुन बाँकी छ। सक्रिय भएपछि कृपया फेरि प्रयास गर्नुहोस्।",
  },
} as const;

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
    const submission = buildFormSubmitPayload({
      fullName: result.data.fullName,
      email: result.data.email,
      whatsappNumber: result.data.whatsapp_number,
      businessName: result.data.businessName,
      service: result.data.service,
      message: result.data.message,
    }, FORM_SUBMIT_SUBJECT);

    const requestOrigin = new URL(request.url).origin;
    const incomingReferer = request.headers.get("referer");
    let pageUrl = new URL("/contact", requestOrigin).toString();
    if (incomingReferer) {
      try {
        const refererUrl = new URL(incomingReferer);
        if (refererUrl.origin === requestOrigin) pageUrl = refererUrl.toString();
      } catch {
        // Keep the trusted contact-page fallback for malformed referrers.
      }
    }

    const upstream = await fetch(FORM_SUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: requestOrigin,
        Referer: pageUrl,
      },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(12_000),
    });
    const provider = await upstream.json().catch(() => null) as FormSubmitResponse | null;
    const providerStatus = classifyFormSubmitResponse(upstream.ok, provider);
    if (providerStatus === "activation_required") {
      return NextResponse.json({ code: "activation_required", message: copy[locale].activation }, { status: 409 });
    }
    if (providerStatus !== "accepted") return NextResponse.json({ code: "provider_error", message: copy[locale].unavailable }, { status: 502 });
    return NextResponse.json({ ok: true, acceptedBy: "FormSubmit" }, { status: 201 });
  } catch {
    return NextResponse.json({ code: "unavailable", message: copy[locale].unavailable }, { status: 502 });
  }
}
