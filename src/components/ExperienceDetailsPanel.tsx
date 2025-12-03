import type { ReactNode } from 'react';
import './CenteredPanel.css';

export type ExperienceDetailsPanelProps = {
    title: string;
    company: ReactNode;
    dates: string;
    description: string;
    bullets?: string[];
    tech?: string[];
};

export function ExperienceDetailsPanel({
    title,
    company,
    dates,
    description,
    bullets = [],
    tech = [],
}: ExperienceDetailsPanelProps) {
    return (
        <div className="centered-panel experience-panel">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">{title}</h2>
                <p className="exp-company-dates">
                    <span className="exp-company">{company}</span>
                    <span className="exp-separator"> • </span>
                    <span className="exp-dates">{dates}</span>
                </p>
            </div>

            <div className="exp-card">
                <h3 className="exp-section-title">Description</h3>
                <p className="exp-text">{description}</p>

                {bullets.length > 0 && (
                    <ul className="exp-list">
                        {bullets.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>

            {tech.length > 0 && (
                <div className="exp-card exp-card--tech">
                    <h3 className="exp-section-title">Tech</h3>
                    <p className="exp-text exp-tech-text">
                        {tech.join(', ')}
                    </p>
                </div>
            )}
        </div>
    );
}
