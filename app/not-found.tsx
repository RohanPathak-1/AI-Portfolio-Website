import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { T } from "@/components/language-provider";

export default function NotFound(){return <section className="page-hero" style={{minHeight:"70vh",display:"grid",placeItems:"center"}}><div className="container" style={{textAlign:"center"}}><div className="eyebrow"><T id="notFound.label" /></div><h1 style={{marginInline:"auto"}}><T id="notFound.title" /></h1><p style={{marginInline:"auto"}}><T id="notFound.copy" /></p><Link className="button" style={{marginTop:"1.5rem"}} href="/"><ArrowLeft size={17}/> <T id="notFound.back" /></Link></div></section>}
