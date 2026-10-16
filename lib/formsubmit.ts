export type FormSubmitResponse = { success?: boolean | string; message?: string; error?: string };

type Inquiry = {
  fullName: string;
  email: string;
  whatsappNumber: string;
  businessName?: string;
  service?: string;
  message: string;
};

export function buildFormSubmitPayload(inquiry: Inquiry, subject: string, formUrl: string) {
  return {
    _subject: subject,
    _template: "table",
    _replyto: inquiry.email,
    _honey: "",
    _url: formUrl,
    "Inquiry Type": "NEW WEBSITE CONTACT INQUIRY",
    "Customer Name": inquiry.fullName,
    "Customer Email": inquiry.email,
    "WhatsApp Number": inquiry.whatsappNumber,
    "Business Name": inquiry.businessName || "Not provided",
    "Service Interested In": inquiry.service || "Not selected",
    "Customer Message": inquiry.message,
  };
}

export function classifyFormSubmitResponse(responseOk: boolean, payload: FormSubmitResponse | null) {
  const providerText = [typeof payload?.success === "string" ? payload.success : "", payload?.message, payload?.error].filter(Boolean).join(" ");
  if (/activat|confirm(?:ation)?\s+(?:your\s+)?email|email\s+confirm/i.test(providerText)) return "activation_required" as const;
  if (responseOk && (payload?.success === true || payload?.success === "true")) return "accepted" as const;
  return "rejected" as const;
}
