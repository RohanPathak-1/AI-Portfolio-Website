"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "./language-provider";

type Fields = { fullName: string; businessName: string; email: string; service: string; message: string; companyFax: string };
const initial: Fields = { fullName: "", businessName: "", email: "", service: "", message: "", companyFax: "" };

export function ContactForm() {
  const { locale, t } = useLanguage();
  const [fields, setFields] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const startedAt = useRef(0);
  useEffect(() => { startedAt.current = Date.now(); }, []);
  function update(name: keyof Fields, value: string) { setFields((current) => ({ ...current, [name]: value })); setErrors((current) => ({ ...current, [name]: "" })); }
  function validate() { const next: Record<string, string> = {}; if (fields.fullName.trim().length < 2) next.fullName = t("form.nameError"); if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = t("form.emailError"); if (fields.message.trim().length < 20) next.message = t("form.messageError"); return next; }
  async function submit(event: FormEvent) {
    event.preventDefault(); setStatus(null); const next = validate(); setErrors(next); if (Object.keys(next).length) return;
    setLoading(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...fields, locale, submittedAt: startedAt.current }) });
      const result = await response.json() as { code?: string; message?: string };
      if (!response.ok) throw new Error(result.message || (result.code === "unavailable" ? t("form.unavailable") : t("form.failure")));
      setStatus({ type: "success" }); setFields(initial); startedAt.current = Date.now();
    } catch (error) { setStatus({ type: "error", message: error instanceof Error ? error.message : t("form.failure") }); }
    finally { setLoading(false); }
  }

  if (status?.type === "success") return <section className="contact-success" role="status" aria-live="polite">
    <CheckCircle2 aria-hidden="true" /><h2>{t("form.successTitle")}</h2><p>{t("form.successCopy")}</p><a className="button" href="/">{t("common.backHome")}</a>
  </section>;

  return <form className="contact-form" onSubmit={submit} noValidate>
    <h2>{t("form.title")}</h2><p>{t("form.copy")}</p><div className="form-grid">
      <div className="field"><label htmlFor="fullName">{t("form.name")}</label><input id="fullName" required autoComplete="name" value={fields.fullName} onChange={(e) => update("fullName", e.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} />{errors.fullName && <span id="fullName-error" className="field-error">{errors.fullName}</span>}</div>
      <div className="field"><label htmlFor="email">{t("form.email")}</label><input id="email" required type="email" autoComplete="email" value={fields.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</div>
      <div className="field full"><label htmlFor="businessName">{t("form.business")}</label><input id="businessName" autoComplete="organization" value={fields.businessName} onChange={(e) => update("businessName", e.target.value)} /></div>
      <div className="field full"><label htmlFor="service">{t("form.help")}</label><select id="service" value={fields.service} onChange={(e) => update("service", e.target.value)}><option value="">{t("form.unsure")}</option>{siteConfig.services.map((service, index) => <option key={service.slug} value={service.title}>{t(`service.${index + 1}.title`)}</option>)}</select></div>
      <div className="field full"><label htmlFor="inquiryMessage">{t("form.message")}</label><textarea id="inquiryMessage" required value={fields.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="companyFax">{t("form.honeypot")}</label><input id="companyFax" tabIndex={-1} autoComplete="off" value={fields.companyFax} onChange={(e) => update("companyFax", e.target.value)} /></div>
    </div><p className="form-hint">{t("form.hint")}</p>
    {status?.type === "error" && <p className="form-status error" role="alert">{status.message || t("form.failure")}</p>}
    <button className="button" type="submit" disabled={loading}>{loading ? <><LoaderCircle className="spin" size={17} /> {t("form.sending")}</> : <>{t("form.send")} <Send size={16} /></>}</button>
  </form>;
}
