import "./ProjectPanel.css";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type Certificate = {
    id: number;
    title: string;
    subtitle?: string;
};

type CertificatePanelProps = {
    certificates: Certificate[];
    onCertificateClick: (certificate: Certificate) => void;
    onViewAllClick?: () => void;
    title?: string;
    t: (k: I18nKey) => string;
};

export function CertificatePanel({
    certificates,
    onCertificateClick,
    onViewAllClick,
    title,
    t,
}: CertificatePanelProps) {
    return (
        <div className="projects-panel">
            <div className="projects-panel-header-row">
                <h2 className="projects-heading">{title ?? t(K.certificates.title)}</h2>

                {onViewAllClick && (
                    <button
                        type="button"
                        className="projects-view-all-btn"
                        onClick={onViewAllClick}
                    >
                        {t(K.ui.viewAll)} →
                    </button>
                )}
            </div>

            <div className="projects-grid">
                {certificates.map((certificate) => (
                    <div
                        key={certificate.id}
                        className="project-card"
                        onClick={() => onCertificateClick(certificate)}
                    >
                        <h3 className="project-title">{certificate.title}</h3>
                        {certificate.subtitle && (
                            <p className="project-subtitle">{certificate.subtitle}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
