"use client";

import { LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";

type Fields = { fullName:string; businessName:string; email:string; website:string; service:string; message:string; companyFax:string };
const initial:Fields={fullName:"",businessName:"",email:"",website:"",service:"",message:"",companyFax:""};

export function ContactForm(){
  const [fields,setFields]=useState(initial); const [errors,setErrors]=useState<Record<string,string>>({}); const [status,setStatus]=useState<{type:"success"|"error";message:string}|null>(null); const [loading,setLoading]=useState(false);
  function update(name:keyof Fields,value:string){setFields(current=>({...current,[name]:value}));setErrors(current=>({...current,[name]:""}));}
  function validate(){const next:Record<string,string>={};if(fields.fullName.trim().length<2)next.fullName="Please enter your full name.";if(!/^\S+@\S+\.\S+$/.test(fields.email))next.email="Please enter a valid email address.";if(fields.message.trim().length<20)next.message="Please share at least 20 characters so I can understand your needs.";if(fields.website&&!/^https?:\/\//i.test(fields.website))next.website="Please include https:// or http:// in the URL.";return next;}
  async function submit(event:FormEvent){event.preventDefault();setStatus(null);const next=validate();setErrors(next);if(Object.keys(next).length)return;setLoading(true);try{const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fields)});const result=await response.json() as {message?:string};if(!response.ok)throw new Error(result.message||"Your message could not be sent.");setStatus({type:"success",message:result.message||"Your message has been sent."});setFields(initial);}catch(error){setStatus({type:"error",message:error instanceof Error?error.message:"Your message could not be sent."});}finally{setLoading(false);}}
  return <form className="contact-form" onSubmit={submit} noValidate><h2>Send a Message</h2><p>Tell me a little about your business, and I’ll get back to you.</p><div className="form-grid">
    <div className="field"><label htmlFor="fullName">Your Name *</label><input id="fullName" autoComplete="name" value={fields.fullName} onChange={e=>update("fullName",e.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName?"fullName-error":undefined}/>{errors.fullName&&<span id="fullName-error" className="field-error">{errors.fullName}</span>}</div>
    <div className="field"><label htmlFor="email">Email Address *</label><input id="email" type="email" autoComplete="email" value={fields.email} onChange={e=>update("email",e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email?"email-error":undefined}/>{errors.email&&<span id="email-error" className="field-error">{errors.email}</span>}</div>
    <div className="field full"><label htmlFor="businessName">Business Name</label><input id="businessName" autoComplete="organization" value={fields.businessName} onChange={e=>update("businessName",e.target.value)}/></div>
    <div className="field full"><label htmlFor="service">What Do You Need Help With?</label><select id="service" value={fields.service} onChange={e=>update("service",e.target.value)}><option value="">Not sure yet</option>{siteConfig.services.map(service=><option key={service.slug} value={service.title}>{service.title}</option>)}</select></div>
    <div className="field full"><label htmlFor="inquiryMessage">Your Message *</label><textarea id="inquiryMessage" value={fields.message} onChange={e=>update("message",e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message?"message-error":undefined}/>{errors.message&&<span id="message-error" className="field-error">{errors.message}</span>}</div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="companyFax">Leave this field empty</label><input id="companyFax" tabIndex={-1} autoComplete="off" value={fields.companyFax} onChange={e=>update("companyFax",e.target.value)}/></div>
  </div><p className="form-hint">Your information is used only to respond to this inquiry.</p>{status&&<p className={`form-status ${status.type}`} role="status">{status.message}</p>}<button className="button" type="submit" disabled={loading}>{loading?<><LoaderCircle className="spin" size={17}/> Sending…</>:<>Send Message <Send size={16}/></>}</button></form>;
}
