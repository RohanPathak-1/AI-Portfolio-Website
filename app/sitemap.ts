import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap():MetadataRoute.Sitemap{
  const routes=["","/about","/services","/blog","/contact","/privacy","/terms"].map(path=>({url:`${siteConfig.websiteUrl}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.7}));
  return [...routes,...blogPosts.map(post=>({url:`${siteConfig.websiteUrl}/blog/${post.slug}`,lastModified:new Date(`${post.publishedAt}T00:00:00`),changeFrequency:"monthly" as const,priority:.75}))];
}
