import type { TechInfo } from "../data/TechData";
import "./TechMiniCard.css";

type TechMiniCardProps = {
  tech: TechInfo;
  onClose: () => void;
};

export function TechMiniCard({ tech, onClose }: TechMiniCardProps) {
  return (
    <div className="tech-mini-overlay" onClick={onClose}>
      <div
        className="tech-mini-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="tech-mini-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="tech-mini-title">{tech.title}</h3>

        <div className="tech-mini-level">
          <span
            className={
              "tech-level-badge tech-level-badge--" + tech.level
            }
          >
            {tech.levelLabel}
          </span>
        </div>

        <p className="tech-mini-text">{tech.description}</p>
      </div>
    </div>
  );
}
