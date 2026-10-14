import { BarChart3, Lightbulb, Search, Sparkles } from "lucide-react";

export function ProfileVisual({ small = false }: { small?: boolean }) {
  return (
    <div className={`profile-visual ${small ? "small" : ""}`} role="img" aria-label="Professional headshot placeholder for Rohan Pathak">
      <div className="profile-grid" aria-hidden="true" />
      <div className="profile-photo-placeholder">
        <div className="portrait-shape"><span>RP</span></div>
        <p>Professional headshot</p>
        <small>Replace in site configuration</small>
      </div>
      <div className="floating-chip chip-one"><Sparkles size={15} /> AI-enabled</div>
      <div className="floating-chip chip-two"><Search size={15} /> Discover</div>
      <div className="floating-icon icon-one"><BarChart3 /></div>
      <div className="floating-icon icon-two"><Lightbulb /></div>
    </div>
  );
}
