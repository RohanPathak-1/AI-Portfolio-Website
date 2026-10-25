import { parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js";

// Active Nepal mobile ranges, last reviewed 2026-10-25.
// Sources: NTA National Numbering Allocation Plan
// (https://nta.gov.np/uploads/contents/National%20Numbering%20Allocation%20Plan.pdf)
// and Ncell's official 971 allocation announcement
// (https://www.ncell.com.np/en/about/media-room/press-release/ncell-begins-issuing-new-mobile-numbers-starting-with-971).
// Former Smart Telecom and UTL allocations are intentionally excluded because
// NTA has cancelled those operators' licences.
export const NEPAL_ACTIVE_MOBILE_PREFIXES = [
  "970", "971", "974", "975", "976",
  "980", "981", "982", "984", "985", "986",
] as const;

const nepalMobilePrefixes = new Set<string>(NEPAL_ACTIVE_MOBILE_PREFIXES);

export function normalizeWhatsApp(value: string, selectedCountry: CountryCode) {
  const input = value.trim();
  if (!input) return null;

  try {
    const phone = input.startsWith("+")
      ? parsePhoneNumberFromString(input)
      : parsePhoneNumberFromString(input, selectedCountry);

    if (!phone?.isValid()) return null;

    if (selectedCountry === "NP" || phone.country === "NP") {
      if (phone.country !== "NP") return null;
      const nationalNumber = phone.nationalNumber;
      if (nationalNumber.length !== 10 || !nepalMobilePrefixes.has(nationalNumber.slice(0, 3))) return null;
    }

    return phone.number;
  } catch {
    return null;
  }
}
