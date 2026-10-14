import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link className="brand-mark" href="/" aria-label={`${siteConfig.name} home`}>
      <span className="brand-symbol" aria-hidden="true">
        <img src="/rohan-pathak-logo.png" alt="" />
      </span>
      <span>
        <strong>{siteConfig.name}</strong>
        <small>{siteConfig.title}</small>
      </span>
    </Link>
  );
}
