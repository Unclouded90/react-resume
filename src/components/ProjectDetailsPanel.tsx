import './CenteredPanel.css';
import { useState } from 'react';

export type ProjectDetailsPanelProps = {
    title: string;
    subtitle?: string;
    description?: string;
    tech?: string[];
    githubUrl?: string;
    extraDetails?: string[];
};

export function ProjectDetailsPanel({
    title,
    subtitle,
    description,
    tech = [],
    githubUrl,
    extraDetails = [],
}: ProjectDetailsPanelProps) {
    const [showMore, setShowMore] = useState(false);

    const hasExtraDetails = Array.isArray(extraDetails)
        ? extraDetails.length > 0
        : !!extraDetails;

    return (
        <div className="centered-panel experience-panel">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">{title}</h2>
                {subtitle && (
                    <p className="exp-company-dates">
                        <span className="exp-company">{subtitle}</span>
                    </p>
                )}
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="exp-header-link"
                    >
                        GitHub ↗
                    </a>
                )}
            </div>

            {description && (
                <div className="exp-card">
                    <h3 className="exp-section-title">Description</h3>
                    {description && <p className="exp-text">{description}</p>}
                    {hasExtraDetails && !showMore && (
                        <button
                            className="exp-toggle-btn"
                            onClick={() => setShowMore(true)}
                            type="button"
                        >
                            Read more...
                        </button>
                    )}
                </div>
            )}

            {hasExtraDetails && showMore && (
                <div className="exp-card exp-card--extra">
                    {Array.isArray(extraDetails) ? (
                        <ul className="exp-list">
                            {extraDetails.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="exp-text">{extraDetails}</p>
                    )}

                    <button
                        className="exp-toggle-btn exp-toggle-btn--hide"
                        onClick={() => setShowMore(false)}
                        type="button"
                    >
                        Hide details
                    </button>
                </div>
            )}

            {(tech.length > 0) && (
                <div className="exp-card exp-card--tech">
                    {tech.length > 0 && (
                        <>
                            <h3 className="exp-section-title">Tech</h3>
                            <p className="exp-text">
                                {tech.join(', ')}
                            </p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
