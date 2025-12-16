import { useState } from "react";
import {
    SiTypescript,
    SiReact,
    SiNestjs,
    SiPostgresql,
    SiTypeorm,
    SiDocker,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
    SiMongodb,
    SiCplusplus,
    SiVite,
    SiGit,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

import "./CenteredPanel.css";
import "./TechStackPanel.css";
import { IconBadge } from "./IconBadge";
import { techInfoById, type TechId, type TechInfoData } from "../data/TechData";

export type ProjectDetailsPanelProps = {
    title: string;
    subtitle?: string;
    description?: string;
    tech?: string[];
    githubUrl?: string;
    extraDetails?: string[];
};

function getTechIcon(name: string) {
    switch (name) {
        case "JavaScript":
            return <SiJavascript />;
        case "TypeScript":
            return <SiTypescript />;
        case "React":
            return <SiReact />;
        case "NestJS":
            return <SiNestjs />;
        case "PostgreSQL":
            return <SiPostgresql />;
        case "TypeORM":
            return <SiTypeorm />;
        case "Docker":
            return <SiDocker />;
        case "HTML":
            return <SiHtml5 />;
        case "CSS":
            return <SiCss3 />;
        case "Vite":
            return <SiVite />;
        case "Git":
            return <SiGit />;
        case "Java":
            return <FaJava />;
        case "C++":
            return <SiCplusplus />;
        case "C#":
            return <TbBrandCSharp />;
        case "Python":
            return <SiPython />;
        case "MongoDB":
            return <SiMongodb />;
        case "MS SQL Server":
            return <DiMsqlServer />;
        default:
            return null;
    }
}

export function ProjectDetailsPanel({
    title,
    subtitle,
    description,
    tech = [],
    githubUrl,
    extraDetails = [],
}: ProjectDetailsPanelProps) {
    const [showMore, setShowMore] = useState(false);
    const [activeTech, setActiveTech] = useState<TechInfoData | null>(null);

    const hasExtraDetails = Array.isArray(extraDetails)
        ? extraDetails.length > 0
        : !!extraDetails;

    const handleTechClick = (id: TechId) => {
        const info = techInfoById[id];
        if (info) setActiveTech(info);
    };

    const closeMiniCard = () => setActiveTech(null);

    return (
        <div className="centered-panel experience-panel tech-detail-root">
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
                    <p className="exp-text">{description}</p>

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

            {tech.length > 0 && (
                <div className="exp-card exp-card--tech">
                    <h3 className="exp-section-title">Tech</h3>
                    <div className="tech-badge-row">
                        {tech.map((t) => {
                            const icon = getTechIcon(t);
                            if (!icon) return null;

                            return (
                                <IconBadge
                                    key={t}
                                    icon={icon}
                                    label={t}
                                    onClick={() => handleTechClick(t as TechId)}
                                />
                            );
                        })}
                    </div>
                </div>
            )}

            {activeTech && (
                <div className="tech-mini-overlay" onClick={closeMiniCard}>
                    <div
                        className="tech-mini-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="tech-mini-close"
                            onClick={closeMiniCard}
                        >
                            ✕
                        </button>

                        <h3 className="tech-mini-title">{activeTech.title}</h3>

                        <div className="tech-mini-level">
                            <span
                                className={
                                    "tech-level-badge tech-level-badge--" + activeTech.level
                                }
                            >
                                {activeTech.levelLabel}
                            </span>
                        </div>

                        <p className="tech-mini-text">{activeTech.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
