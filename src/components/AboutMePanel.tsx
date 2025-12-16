import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";
import "./CenteredPanel.css";

type AboutMePanelProps = {
  t: (k: I18nKey) => string;
};

export function AboutMePanel({ t }: AboutMePanelProps) {
  return (
    <div className="centered-panel experience-panel">
      <div className="exp-card exp-card--header">
        <h2 className="exp-position">{t(K.about.title)}</h2>

        <p className="exp-company-dates">{t(K.about.tagline)}</p>

        <p className="exp-company-dates">
          <strong>{t(K.about.languagesLabel)}</strong> {t(K.about.languagesValue)}
        </p>
      </div>

      <div className="exp-card">
        <h3 className="exp-section-title">{t(K.about.whoTitle)}</h3>

        <p className="exp-text">{t(K.about.whoP1)}</p>
        <p className="exp-text">{t(K.about.whoP2)}</p>
        <p className="exp-text">{t(K.about.whoP3)}</p>
      </div>

      <div className="exp-card">
        <h3 className="exp-section-title">{t(K.about.hobbiesTitle)}</h3>

        <p className="exp-text">{t(K.about.hobbies)}</p>
      </div>

      <div className="exp-card">
        <p className="exp-text">{t(K.about.more)}</p>
      </div>
    </div>
  );
}
