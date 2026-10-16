"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import { FormEvent, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "./language-provider";

type Fields = { fullName: string; businessName: string; email: string; whatsappNumber: string; service: string; message: string; companyFax: string };
const initial: Fields = { fullName: "", businessName: "", email: "", whatsappNumber: "", service: "", message: "", companyFax: "" };

function normalizeWhatsApp(value: string, country: CountryCode) {
  const input = value.trim();
  if (!input) return null;
  try {
    const phone = input.startsWith("+") ? parsePhoneNumberFromString(input) : parsePhoneNumberFromString(input, country);
    return phone?.isValid() ? phone.number : null;
  } catch {
    return null;
  }
}

export function ContactForm() {
  const { locale, t } = useLanguage();
  const [fields, setFields] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: "success" | "activation" | "error"; message?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryCode>("NP");
  const startedAt = useRef(0);
  const submitting = useRef(false);
  const countryNames = new Intl.DisplayNames([locale], { type: "region" });
  const countries = getCountries()
    .map((code) => ({ code, name: countryNames.of(code) ?? code, callingCode: getCountryCallingCode(code) }))
    .sort((a, b) => a.name.localeCompare(b.name, locale));
  useEffect(() => { startedAt.current = Date.now(); }, []);
  function update(name: keyof Fields, value: string) { setFields((current) => ({ ...current, [name]: value })); setErrors((current) => ({ ...current, [name]: "" })); }
  function validate() {
    const next: Record<string, string> = {};
    if (fields.fullName.trim().length < 2) next.fullName = t("form.nameError");
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = t("form.emailError");
    if (!fields.whatsappNumber.trim()) next.whatsappNumber = t("form.whatsappRequired");
    else if (!normalizeWhatsApp(fields.whatsappNumber, country)) next.whatsappNumber = t("form.whatsappInvalid");
    if (fields.message.trim().length < 20) next.message = t("form.messageError");
    return next;
  }
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (submitting.current) return;
    setStatus(null); const next = validate(); setErrors(next); if (Object.keys(next).length) return;
    const whatsappNumber = normalizeWhatsApp(fields.whatsappNumber, country);
    if (!whatsappNumber) return;
    submitting.current = true;
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fields.fullName,
          email: fields.email,
          whatsapp_number: whatsappNumber,
          businessName: fields.businessName,
          service: fields.service,
          message: fields.message,
          companyFax: fields.companyFax,
          locale,
          submittedAt: startedAt.current,
        }),
      });
      const result = await response.json() as { code?: string; message?: string };
      if (result.code === "activation_required") {
        setStatus({ type: "activation", message: result.message });
        return;
      }
      if (!response.ok) throw new Error(result.message || (result.code === "unavailable" ? t("form.unavailable") : t("form.failure")));
      setStatus({ type: "success" }); setFields(initial); startedAt.current = Date.now();
    } catch (error) { setStatus({ type: "error", message: error instanceof Error ? error.message : t("form.failure") }); }
    finally { submitting.current = false; setLoading(false); }
  }

  if (status?.type === "success") return <section className="contact-success" role="status" aria-live="polite">
    <CheckCircle2 aria-hidden="true" /><h2>{t("form.successTitle")}</h2><p>{t("form.successCopy")}</p><a className="button" href="/">{t("common.backHome")}</a>
  </section>;

  return <form className="contact-form" onSubmit={submit} noValidate>
    <h2>{t("form.title")}</h2><p>{t("form.copy")}</p><div className="form-grid">
      <div className="field"><label htmlFor="fullName">{t("form.name")}</label><input id="fullName" required autoComplete="name" value={fields.fullName} onChange={(e) => update("fullName", e.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} />{errors.fullName && <span id="fullName-error" className="field-error">{errors.fullName}</span>}</div>
      <div className="field"><label htmlFor="email">{t("form.email")}</label><input id="email" required type="email" autoComplete="email" value={fields.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</div>
      <fieldset className="field full whatsapp-field" aria-describedby={`whatsapp-helper${errors.whatsappNumber ? " whatsapp-error" : ""}`}>
        <legend>{t("form.whatsapp")}</legend>
        <div className="whatsapp-inputs">
          <label className="sr-only" htmlFor="whatsappCountry">{t("form.whatsappCountry")}</label>
          <select id="whatsappCountry" autoComplete="country" value={country} onChange={(e) => { setCountry(e.target.value as CountryCode); setErrors((current) => ({ ...current, whatsappNumber: "" })); }}>
            {countries.map(({ code, name, callingCode }) => <option key={code} value={code}>{name} (+{callingCode})</option>)}
          </select>
          <label className="sr-only" htmlFor="whatsappNumber">{t("form.whatsappPhone")}</label>
          <input id="whatsappNumber" required type="tel" inputMode="tel" autoComplete="tel-national" value={fields.whatsappNumber} onChange={(e) => update("whatsappNumber", e.target.value)} aria-invalid={Boolean(errors.whatsappNumber)} placeholder={country === "NP" ? "98XXXXXXXX" : t("form.whatsappPlaceholder")} />
        </div>
        <span id="whatsapp-helper" className="field-help">{t("form.whatsappHelp")}</span>
        {errors.whatsappNumber && <span id="whatsapp-error" className="field-error" role="alert">{errors.whatsappNumber}</span>}
      </fieldset>
      <div className="field full"><label htmlFor="businessName">{t("form.business")}</label><input id="businessName" autoComplete="organization" value={fields.businessName} onChange={(e) => update("businessName", e.target.value)} /></div>
      <div className="field full"><label htmlFor="service">{t("form.help")}</label><select id="service" value={fields.service} onChange={(e) => update("service", e.target.value)}><option value="">{t("form.unsure")}</option>{siteConfig.services.map((service, index) => <option key={service.slug} value={service.title}>{t(`service.${index + 1}.title`)}</option>)}</select></div>
      <div className="field full"><label htmlFor="inquiryMessage">{t("form.message")}</label><textarea id="inquiryMessage" required value={fields.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="companyFax">{t("form.honeypot")}</label><input id="companyFax" tabIndex={-1} autoComplete="off" value={fields.companyFax} onChange={(e) => update("companyFax", e.target.value)} /></div>
    </div><p className="form-hint">{t("form.hint")}</p>
    {status?.type === "activation" && <p className="form-status activation" role="status" aria-live="polite">{status.message}</p>}
    {status?.type === "error" && <p className="form-status error" role="alert">{status.message || t("form.failure")}</p>}
    <button className="button" type="submit" disabled={loading}>{loading ? <><LoaderCircle className="spin" size={17} /> {t("form.sending")}</> : <>{t("form.send")} <Send size={16} /></>}</button>
  </form>;
}
