import Image from "next/image";
import { BarChart3, Lightbulb, Search, Sparkles } from "lucide-react";

type ProfileVisualProps = {
  small?: boolean;
  variant: "hero" | "about";
  priority?: boolean;
};

const profilePhotos = {
  hero: {
    src: "/images/hero-profile.png",
    alt: "Rohan Pathak — AI Marketing Expert",
  },
  about: {
    src: "/images/about-profile.png",
    alt: "Professional portrait of Rohan Pathak",
  },
} as const;

export function ProfileVisual({ small = false, variant, priority = false }: ProfileVisualProps) {
  const photo = profilePhotos[variant];

  return (
    <div className={`profile-visual ${small ? "small" : ""}`}>
      <Image
        className={`profile-photo profile-photo-${variant}`}
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(max-width: 980px) min(100vw - 40px, 620px), 46vw"
      />
      <div className="profile-grid" aria-hidden="true" />
      <div className="floating-chip chip-one"><Sparkles size={15} /> AI-enabled</div>
      <div className="floating-chip chip-two"><Search size={15} /> Discover</div>
      <div className="floating-icon icon-one"><BarChart3 /></div>
      <div className="floating-icon icon-two"><Lightbulb /></div>
    </div>
  );
}
