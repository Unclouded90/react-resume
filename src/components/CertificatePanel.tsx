import './ProjectPanel.css';

type Certificate = {
    id: number;
    title: string;
    subtitle?: string;
};

type CertificatePanelProps = {
    certificates: Certificate[];
    onCertificateClick: (certificate: Certificate) => void;
};

export function CertificatePanel({
    certificates,
    onCertificateClick,
}: CertificatePanelProps) {
    return (
        <div className="projects-panel">
            <h2 className="projects-heading">Certificates</h2>

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
