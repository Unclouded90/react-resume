import './ExperiencePanel.css';

type ExperiencePanelProps = {
    onExpand?: () => void;
};

export function ExperiencePanel({ onExpand }: ExperiencePanelProps) {
    return (
        <div className="experience-panel">
            <h2 className="experience-heading">Experience</h2>

            <div className="experience-card" onClick={onExpand}>
                <div className="experience-main">
                    <h3 className="experience-position">Full Stack Software Developer</h3>
                    <p className="experience-company">Eufinity Solutions</p>
                </div>
                <div className="experience-side">
                    <p className="experience-dates">Apr 2024 – Present</p>
                </div>
            </div>
        </div>
    );
}

