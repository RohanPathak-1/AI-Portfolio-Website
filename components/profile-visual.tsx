import { BarChart3, Lightbulb, Search, Sparkles } from "lucide-react";

export function ProfileVisual({ small = false }: { small?: boolean }) {
  return (
    <div className={`profile-visual ${small ? "small" : ""}`} role="img" aria-label="AI-powered business growth visual for Rohan Pathak">
      <div className="profile-grid" aria-hidden="true" />
      <div className="profile-photo-placeholder">
        <div className="portrait-shape"><span>RP</span></div>
        <p>AI-Powered Growth</p>
        <small>Strategy · Leads · Automation</small>
      </div>
      <div className="floating-chip chip-one"><Sparkles size={15} /> AI-enabled</div>
      <div className="floating-chip chip-two"><Search size={15} /> Discover</div>
      <div className="floating-icon icon-one"><BarChart3 /></div>
      <div className="floating-icon icon-two"><Lightbulb /></div>
    </div>
  );
}
