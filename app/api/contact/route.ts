import { NextResponse } from "next/server";
import { z } from "zod";

const schema=z.object({fullName:z.string().trim().min(2).max(100),businessName:z.string().trim().max(120).optional().or(z.literal("")),email:z.string().email().max(180),website:z.string().url().max(300).optional().or(z.literal("")),service:z.string().trim().max(140).optional().or(z.literal("")),message:z.string().trim().min(20).max(4000),companyFax:z.string().max(0)});

export async function POST(request:Request){
  const contentLength=Number(request.headers.get("content-length")||0);if(contentLength>12_000)return NextResponse.json({message:"This message is too large."},{status:413});
  let input:unknown;try{input=await request.json();}catch{return NextResponse.json({message:"The submitted message was not valid JSON."},{status:400});}
  const result=schema.safeParse(input);if(!result.success)return NextResponse.json({message:"Please review the highlighted fields and try again.",issues:result.error.flatten().fieldErrors},{status:400});
  const endpoint=process.env.CONTACT_FORM_ENDPOINT;
  if(!endpoint)return NextResponse.json({message:"Message delivery is not configured yet. Add CONTACT_FORM_ENDPOINT in the hosting environment, or connect a booking calendar before launch."},{status:503});
  try{const upstream=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...result.data,companyFax:undefined,source:"Rohan Pathak AI Marketing Portfolio"})});if(!upstream.ok)throw new Error(`Upstream returned ${upstream.status}`);return NextResponse.json({message:"Thank you—your message was sent successfully. I’ll be in touch soon."});}catch{ return NextResponse.json({message:"The delivery service is temporarily unavailable. Please try again later."},{status:502}); }
}
