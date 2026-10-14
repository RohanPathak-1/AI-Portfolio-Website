import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound(){return <section className="page-hero" style={{minHeight:"70vh",display:"grid",placeItems:"center"}}><div className="container" style={{textAlign:"center"}}><div className="eyebrow">404 · Page not found</div><h1 style={{marginInline:"auto"}}>This page is off the marketing map.</h1><p style={{marginInline:"auto"}}>The link may be outdated, but your next step is easy.</p><Link className="button" style={{marginTop:"1.5rem"}} href="/"><ArrowLeft size={17}/> Return to the homepage</Link></div></section>}
