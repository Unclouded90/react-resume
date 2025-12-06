import './ProjectPanel.css';

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
};

export function CertificatePanel({
    certificates,
    onCertificateClick,
    onViewAllClick,
    title = "Certificates",
}: CertificatePanelProps) {
    return (
        <div className="projects-panel">
            <div className="projects-panel-header-row">
                <h2 className="projects-heading">{title}</h2>

                {onViewAllClick && (
                    <button
                        type="button"
                        className="projects-view-all-btn"
                        onClick={onViewAllClick}
                    >
                        View all
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
