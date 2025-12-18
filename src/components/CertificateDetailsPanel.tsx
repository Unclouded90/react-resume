import "./CenteredPanel.css";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

export type CertificateDetailsPanelProps = {
    title: string;
    subtitle?: string;
    description?: string;
    tools?: string[];
};

type CertificateDetailsPanelI18nProps = {
    t: (k: I18nKey) => string;
};

function splitIntoTwoColumns(items: string[]) {
    const midpoint = Math.ceil(items.length / 2);
    return [items.slice(0, midpoint), items.slice(midpoint)];
}

export function CertificateDetailsPanel({
    title,
    subtitle,
    description,
    tools = [],
    t,
}: CertificateDetailsPanelProps & CertificateDetailsPanelI18nProps) {
    return (
        <div className="centered-panel experience-panel">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">{title}</h2>

                {subtitle && (
                    <p className="exp-company-dates">
                        <span className="exp-company">{subtitle}</span>
                    </p>
                )}
            </div>

            {description && (
                <div className="exp-card">
                    <h3 className="exp-section-title">{t(K.ui.description)}</h3>
                    <p className="exp-text">{description}</p>
                </div>
            )}

            {tools.length > 0 && (
                <div className="exp-card exp-card--tech">
                    <h3 className="exp-section-title">{t(K.certificates.tools)}</h3>

                    {(() => {
                        const [left, right] = splitIntoTwoColumns(tools);
                        return (
                            <div className="tech-columns">
                                <ul className="tech-column">
                                    {left.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <ul className="tech-column">
                                    {right.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })()}
                </div>
            )}
        </div>
    );
}
