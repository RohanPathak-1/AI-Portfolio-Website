export type FormSubmitResponse = { success?: boolean | string; message?: string; error?: string };

type Inquiry = {
  fullName: string;
  email: string;
  whatsappNumber: string;
  businessName?: string;
  service?: string;
  message: string;
};

export function buildFormSubmitPayload(inquiry: Inquiry, subject: string) {
  const submission = new FormData();
  submission.set("_subject", subject);
  submission.set("_template", "table");
  submission.set("_replyto", inquiry.email);
  submission.set("_honey", "");
  submission.set("Inquiry Type", "NEW WEBSITE CONTACT INQUIRY");
  submission.set("Customer Name", inquiry.fullName);
  submission.set("Customer Email", inquiry.email);
  submission.set("WhatsApp Number", inquiry.whatsappNumber);
  submission.set("Business Name", inquiry.businessName || "Not provided");
  submission.set("Service Interested In", inquiry.service || "Not selected");
  submission.set("Customer Message", inquiry.message);
  return submission;
}

export function classifyFormSubmitResponse(responseOk: boolean, payload: FormSubmitResponse | null) {
  const providerText = [payload?.message, payload?.error].filter(Boolean).join(" ");
  if (/activat|confirm(?:ation)?\s+(?:your\s+)?email|email\s+confirm/i.test(providerText)) return "activation_required" as const;
  if (responseOk && (payload?.success === true || payload?.success === "true")) return "accepted" as const;
  return "rejected" as const;
}
