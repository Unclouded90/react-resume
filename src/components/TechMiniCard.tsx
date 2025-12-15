import type { TechInfoData } from "../data/TechData";
import { K, type I18nKey } from "../i18n/keys";
import type { ProficiencyLevel } from "../data/TechData";
import "./TechMiniCard.css";

const levelKeyByLevel: Record<ProficiencyLevel, I18nKey> = {
  basic: K.ui.levels.basic,
  intermediate: K.ui.levels.intermediate,
  advanced: K.ui.levels.advanced,
};


type TechMiniCardProps = {
  tech: TechInfoData;
  t: (k: I18nKey) => string;
  onClose: () => void;
};

export function TechMiniCard({ tech, t, onClose }: TechMiniCardProps) {
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

        <h3 className="tech-mini-title">{t(tech.titleKey)}</h3>

        <div className="tech-mini-level">
          <span
            className={
              "tech-level-badge tech-level-badge--" + tech.level
            }
          >
            {t(levelKeyByLevel[tech.level])}
          </span>
        </div>

        <p className="tech-mini-text">{t(tech.descriptionKey)}</p>
      </div>
    </div>
  );
}
