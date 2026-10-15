import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/language-provider";

export const metadata: Metadata={title:"Terms of Use",description:"Terms for using the Rohan Pathak AI Marketing Expert website."};
export default function TermsPage(){return <article className="legal-page"><div className="breadcrumb"><Link href="/"><T id="common.home" /></Link><span>/</span><span><T id="terms.title" /></span></div><h1><T id="terms.title" /></h1><p className="legal-note"><strong><T id="terms.noteLabel" /></strong> <T id="terms.note" /></p><h2><T id="terms.purposeTitle" /></h2><p><T id="terms.purpose" /></p><h2><T id="terms.relationshipTitle" /></h2><p><T id="terms.relationship" /></p><h2><T id="terms.ipTitle" /></h2><p><T id="terms.ip" /></p><h2><T id="terms.externalTitle" /></h2><p><T id="terms.external" /></p><h2><T id="terms.limitTitle" /></h2><p><T id="terms.limit" /></p><h2><T id="terms.contactTitle" /></h2><p><T id="terms.contact" /></p></article>}
