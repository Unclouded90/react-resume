import './ExperiencePanel.css';
import { ExpandLink } from './ExpandLink.tsx';

type ExperiencePanelProps = {
    onExpand?: () => void;
};

export function ExperiencePanel({ onExpand }: ExperiencePanelProps) {
    return (
        <div className="experience-panel">
            <h2 className="experience-heading">Experience</h2>

            <div className="experience-card">
                <div className="experience-main">
                    <h3 className="experience-position">Full Stack Software Developer</h3>
                    <p className="experience-company">Eufinity Solutions</p>
                </div>
                <div className="experience-side">
                    <ExpandLink
                        label="Expand"
                        onClick={onExpand}
                        className="experience-expand-link"
                    />
                    <p className="experience-dates">Apr 2024 – Present</p>
                </div>
            </div>
        </div>
    );
}

