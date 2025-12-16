import "./HeaderPanel.css";
import { IconBadge } from "./IconBadge.tsx";
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type HeaderPanelProps = {
  onExpand: () => void;
  t: (k: I18nKey) => string;
};

export function HeaderPanel({ onExpand, t }: HeaderPanelProps) {
  return (
    <div className="header-panel-container">
      <div className="header-name">
        <p>Mauro Fernandes</p>
      </div>

      <div className="header-job">
        <p>{t(K.jobs.eufinity.title)}</p>
      </div>

      <div className="header-location">
        <p>Vila Real, Portugal</p>
      </div>

      <div className="about-me-row">
        <button className="cv-button" onClick={onExpand}>
          {t(K.about.title)}
        </button>
      </div>

      <img className="header-photo" src="/picCV.jpeg" alt="Profile Picture" />

      <div className="header-actions" onClick={(e) => e.stopPropagation()}>
        <div className="header-icon-row">
          <IconBadge
            icon={<SiGmail />}
            label="Email"
            href="mailto:mauro.f3rnandes@gmail.com"
          />
          <IconBadge
            icon={<SiGithub />}
            label="GitHub"
            href="https://github.com/Unclouded90"
          />
          <IconBadge
            icon={<SiLinkedin />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/maurof3rnandes"
          />
        </div>
      </div>

      <div className="cv-button-row">
        <a href="/Mauro_Fernandes_CV.pdf" download className="cv-button">
          {t(K.ui.downloadResume)}
        </a>
      </div>
    </div>
  );
}
