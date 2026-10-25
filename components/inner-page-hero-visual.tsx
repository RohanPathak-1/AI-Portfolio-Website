import {
  BarChart3,
  BookOpen,
  Bot,
  CalendarCheck2,
  Compass,
  FileText,
  Handshake,
  Lightbulb,
  Megaphone,
  MessageCircle,
  PenLine,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type HeroVisualVariant = "about" | "services" | "blog" | "contact";

const visualConfig: Record<HeroVisualVariant, { core: LucideIcon; nodes: LucideIcon[] }> = {
  about: { core: UserRoundCheck, nodes: [Sparkles, Compass, TrendingUp] },
  services: { core: Bot, nodes: [Search, Target, Megaphone, FileText, BarChart3, Workflow] },
  blog: { core: PenLine, nodes: [FileText, Lightbulb, BookOpen] },
  contact: { core: Handshake, nodes: [MessageCircle, CalendarCheck2, Send] },
};

export function InnerPageHeroVisual({ variant }: { variant: HeroVisualVariant }) {
  const { core: CoreIcon, nodes } = visualConfig[variant];

  return (
    <div className={`page-hero-visual page-hero-visual-${variant}`} aria-hidden="true">
      <span className="hero-visual-orbit hero-visual-orbit-outer" />
      <span className="hero-visual-orbit hero-visual-orbit-inner" />
      <span className="hero-visual-path" />
      <span className="hero-visual-core"><CoreIcon /></span>
      {nodes.map((Icon, index) => (
        <span className={`hero-visual-node hero-visual-node-${index + 1}`} key={index}><Icon /></span>
      ))}
    </div>
  );
}
