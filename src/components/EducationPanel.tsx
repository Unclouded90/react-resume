import './EducationPanel.css';

type EducationPanelProps = {
    onExpand?: () => void;
};

export function EducationPanel({ onExpand }: EducationPanelProps) {
    return (
        <div className="education-panel">
            <h2 className="education-heading">Education</h2>

            <div className="education-card" onClick={onExpand}>
                <div className="education-card-header">
                    <div>
                        <h3 className="education-degree">
                            Bachelor&apos;s Degree in Biomedical Engineering
                        </h3>
                        <p className="education-institution">
                            UTAD
                        </p>
                    </div>

                </div>
                <div className="education-meta-right">
                    <p className="education-dates">Oct 2020 – Jul 2023</p>
                </div>
            </div>
        </div>
    );
}
