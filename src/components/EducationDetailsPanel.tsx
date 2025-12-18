import { SiPython } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

import "./CenteredPanel.css";
import "./TechStackPanel.css";
import { IconBadge } from "./IconBadge";
import type { TechId } from "../data/TechData";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type EducationDetailsPanelProps = {
    onTechClick?: (id: TechId) => void;
    t: (k: I18nKey) => string;
};

export function EducationDetailsPanel({ onTechClick, t }: EducationDetailsPanelProps) {
    return (
        <div className="centered-panel experience-panel tech-detail-root">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">
                    {t(K.educations.degreeTitle)}
                </h2>
                <p className="exp-company-dates">
                    <span className="exp-company">UTAD</span>
                    <span className="exp-separator"> • </span>
                    <span className="exp-dates">{t(K.educations.dates)}</span>
                </p>
            </div>

            <div className="exp-card">
                <h3 className="exp-section-title">{t(K.ui.description)}</h3>
                <p className="exp-text">{t(K.educations.description)}</p>

                <ul className="exp-list">
                    <li>
                        <b>{t(K.educations.projectLabel)}</b> {t(K.educations.projectValue)}
                    </li>
                </ul>
            </div>

            <div className="exp-card exp-card--tech">
                <h3 className="exp-section-title">{t(K.educations.highlights)}</h3>
                <p className="exp-text">
                    <li>{t(K.educations.highlightDescription)}</li>
                </p>
            </div>

            <div className="exp-card exp-card--tech">
                <h3 className="exp-section-title">{t(K.exp.tech)}</h3>
                <div className="tech-badge-row">
                    <IconBadge
                        icon={<SiPython />}
                        label="Python"
                        onClick={onTechClick ? () => onTechClick("Python") : undefined}
                    />
                    <IconBadge
                        icon={<DiMsqlServer />}
                        label="MS SQL Server"
                        onClick={onTechClick ? () => onTechClick("MS SQL Server") : undefined}
                    />
                </div>
            </div>
        </div>
    );
}
