import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link className="brand-mark" href="/" aria-label={`${siteConfig.name} home`}>
      <span className="brand-symbol" aria-hidden="true">RP</span>
      <span>
        <strong>{siteConfig.name}</strong>
        <small>{siteConfig.title}</small>
      </span>
    </Link>
  );
}
