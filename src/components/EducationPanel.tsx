import './EducationPanel.css';
import { ExpandLink } from './ExpandLink.tsx';

type EducationPanelProps = {
    onExpand?: () => void;
};

export function EducationPanel({ onExpand }: EducationPanelProps) {
    return (
        <div className="education-panel">
            <h2 className="education-heading">Education</h2>

            <div className="education-card">
                <div className="education-card-header">
                    <div>
                        <h3 className="education-degree">
                            Bachelor&apos;s Degree in Biomedical Engineering
                        </h3>
                        <p className="education-institution">
                            UTAD
                        </p>
                    </div>
                    <ExpandLink
                        label="Expand"
                        onClick={onExpand}
                    />
                    <div className="education-meta-right">
                        <p className="education-dates">Oct 2020 – Jul 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
