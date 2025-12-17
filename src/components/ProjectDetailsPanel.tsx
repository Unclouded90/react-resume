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
import type { TechId, TechInfoData } from "../data/TechData";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";
import { TechMiniCard } from "./TechMiniCard";

export type ProjectDetailsPanelProps = {
    title: string;
    subtitle?: string;
    description?: string;
    tech?: string[];
    githubUrl?: string;
    extraDetails?: string[];
};

type ProjectDetailsPanelI18nProps = {
    t: (k: I18nKey) => string;
};

function getTechIcon(name: string) {
    switch (name) {
        case "JavaScript": return <SiJavascript />;
        case "TypeScript": return <SiTypescript />;
        case "React": return <SiReact />;
        case "NestJS": return <SiNestjs />;
        case "PostgreSQL": return <SiPostgresql />;
        case "TypeORM": return <SiTypeorm />;
        case "Docker": return <SiDocker />;
        case "HTML": return <SiHtml5 />;
        case "CSS": return <SiCss3 />;
        case "Vite": return <SiVite />;
        case "Git": return <SiGit />;
        case "Java": return <FaJava />;
        case "C++": return <SiCplusplus />;
        case "C#": return <TbBrandCSharp />;
        case "Python": return <SiPython />;
        case "MongoDB": return <SiMongodb />;
        case "MS SQL Server": return <DiMsqlServer />;
        default: return null;
    }
}

export function ProjectDetailsPanel({
    title,
    subtitle,
    description,
    tech = [],
    githubUrl,
    extraDetails = [],
    t,
}: ProjectDetailsPanelProps & ProjectDetailsPanelI18nProps) {
    const [showMore, setShowMore] = useState(false);
    const [activeTech, setActiveTech] = useState<TechInfoData | null>(null);

    const hasExtraDetails = extraDetails.length > 0;

    const handleTechClick = (id: TechId) => {
        setActiveTech(null);
        import("../data/TechData").then(({ techInfoById }) => {
            setActiveTech(techInfoById[id]);
        });
    };

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
                        Github ↗
                    </a>
                )}
            </div>

            {description && (
                <div className="exp-card">
                    <h3 className="exp-section-title">{t(K.ui.description)}</h3>
                    <p className="exp-text">{description}</p>

                    {hasExtraDetails && !showMore && (
                        <button
                            className="exp-toggle-btn"
                            onClick={() => setShowMore(true)}
                            type="button"
                        >
                            {t(K.projects.readMore)}
                        </button>
                    )}
                </div>
            )}

            {hasExtraDetails && showMore && (
                <div className="exp-card exp-card--extra">
                    <ul className="exp-list">
                        {extraDetails.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <button
                        className="exp-toggle-btn exp-toggle-btn--hide"
                        onClick={() => setShowMore(false)}
                        type="button"
                    >
                        {t(K.projects.hideDetails)}
                    </button>
                </div>
            )}

            {tech.length > 0 && (
                <div className="exp-card exp-card--tech">
                    <h3 className="exp-section-title">{t(K.exp.tech)}</h3>

                    <div className="tech-badge-row">
                        {tech.map((name) => {
                            const icon = getTechIcon(name);
                            if (!icon) return null;

                            return (
                                <IconBadge
                                    key={name}
                                    icon={icon}
                                    label={name}
                                    onClick={() => handleTechClick(name as TechId)}
                                />
                            );
                        })}
                    </div>
                </div>
            )}

            {activeTech && (
                <TechMiniCard
                    tech={activeTech}
                    t={t}
                    onClose={() => setActiveTech(null)}
                />
            )}
        </div>
    );
}
