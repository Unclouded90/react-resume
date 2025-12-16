import "./EducationPanel.css";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type EducationPanelProps = {
    onExpand?: () => void;
    t: (k: I18nKey) => string;
};

export function EducationPanel({ onExpand, t }: EducationPanelProps) {
    return (
        <div className="education-panel">
            <h2 className="education-heading">{t(K.educations.title)}</h2>

            <div className="education-card" onClick={onExpand}>
                <div className="education-card-header">
                    <div>
                        <h3 className="education-degree">{t(K.educations.degreeTitle)}</h3>
                        <p className="education-institution">UTAD</p>
                    </div>
                </div>

                <div className="education-meta-right">
                    <p className="education-dates">{t(K.educations.dates)}</p>
                </div>
            </div>
        </div>
    );
}
