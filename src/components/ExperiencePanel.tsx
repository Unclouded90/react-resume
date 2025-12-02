import './ExperiencePanel.css';

type ExperiencePanelProps = {
    onExpand?: () => void;
};

export function ExperiencePanel({ onExpand }: ExperiencePanelProps) {
    return (
        <div className="experience-panel">
            <h2 className="experience-heading">Experience</h2>

            <div className="experience-card">
                <div className="experience-card-header">
                    <div>
                        <h3 className="experience-position">Full Stack Software Developer</h3>
                        <p className="experience-company">Eufinity Solutions</p>
                    </div>

                    <div className="experience-meta-right">
                        <p className="experience-dates">Apr 2024 – Present</p>
                        <p className="experience-location">Braga – Portugal</p>
                    </div>
                </div>
                {onExpand && (
                    <button
                        type="button"
                        className="card-expand-link"
                        onClick={(e) => {
                            e.stopPropagation();
                            onExpand();
                        }}
                    >
                        <span>Expand</span>
                        <span className="card-expand-link-arrow">→</span>
                    </button>
                )}
            </div>
        </div>
    );
}
