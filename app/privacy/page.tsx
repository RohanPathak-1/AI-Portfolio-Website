import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/language-provider";

export const metadata: Metadata={title:"Privacy Policy",description:"Privacy information for the Rohan Pathak AI Marketing Expert website.",robots:{index:true,follow:true}};
export default function PrivacyPage(){return <article className="legal-page"><div className="breadcrumb"><Link href="/"><T id="common.home" /></Link><span>/</span><span><T id="privacy.title" /></span></div><h1><T id="privacy.title" /></h1><p className="legal-note"><strong><T id="privacy.noteLabel" /></strong> <T id="privacy.note" /></p><h2><T id="privacy.infoTitle" /></h2><p><T id="privacy.info" /></p><h2><T id="privacy.useTitle" /></h2><p><T id="privacy.use" /></p><h2><T id="privacy.providersTitle" /></h2><p><T id="privacy.providers" /></p><h2><T id="privacy.retentionTitle" /></h2><p><T id="privacy.retention" /></p><h2><T id="privacy.choicesTitle" /></h2><p><T id="privacy.choices" /></p><h2><T id="privacy.updatesTitle" /></h2><p><T id="privacy.updates" /></p></article>}
