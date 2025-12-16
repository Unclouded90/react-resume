import "./ExperiencePanel.css";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type ExperiencePanelProps = {
  onExpand?: () => void;
  t: (k: I18nKey) => string;
};

export function ExperiencePanel({ onExpand, t }: ExperiencePanelProps) {
  return (
    <div className="experience-panel">
      <h2 className="experience-heading">{t(K.ui.experience)}</h2>

      <div className="experience-card" onClick={onExpand}>
        <div className="experience-main">
          <h3 className="experience-position">{t(K.jobs.eufinity.title)}</h3>
          <p className="experience-company">{t(K.jobs.eufinity.companyName)}</p>
        </div>
        <div className="experience-side">
          <p className="experience-dates">{t(K.jobs.eufinity.dates)}</p>
        </div>
      </div>
    </div>
  );
}
