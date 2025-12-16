import {
    SiJavascript,
    SiTypescript,
    SiCplusplus,
    SiAngular,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { MdSupportAgent } from "react-icons/md";

import "./CenteredPanel.css";
import "./TechStackPanel.css";
import { IconBadge } from "./IconBadge";
import type { TechId } from "../data/TechData";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

export type ExperienceDetailsPanelProps = {
    title: string;
    companyName: string;
    companyUrl?: string;
    dates: string;
    description: string;
    bullets?: string[];
    tech?: string[];
    onTechClick?: (id: TechId) => void;
};

export type ExperienceDetailsPanelI18nProps = {
    t: (k: I18nKey) => string;
};

function getTechIcon(name: string) {
    switch (name) {
        case "TypeScript":
            return <SiTypescript />;
        case "C++":
            return <SiCplusplus />;
        case "JavaScript":
            return <SiJavascript />;
        case "Java":
            return <FaJava />;
        case "Node.js":
            return <SiNodedotjs />;
        case "Angular":
            return <SiAngular />;
        case "PostgreSQL":
            return <SiPostgresql />;
        case "MS SQL Server":
            return <DiMsqlServer />;
        case "MongoDB":
            return <SiMongodb />;
        case "Git":
            return <SiGit />;
        case "ETL":
            return (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5708/5708950.png"
                    alt="ETL"
                    className="tech-custom-icon"
                />
            );
        case "Technical Support":
            return <MdSupportAgent />;
        default:
            return null;
    }
}

export function ExperienceDetailsPanel({
    title,
    companyName,
    companyUrl,
    dates,
    description,
    bullets = [],
    tech = [],
    onTechClick,
    t,
}: ExperienceDetailsPanelProps & ExperienceDetailsPanelI18nProps) {
    return (
        <div className="centered-panel experience-panel tech-detail-root">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">{title}</h2>
                <p className="exp-company-dates">
                    <span className="exp-company">
                        {companyUrl ? (
                            <a
                                href={companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="exp-company-link"
                            >
                                {companyName}
                            </a>
                        ) : (
                            companyName
                        )}
                    </span>
                    <span className="exp-separator">•</span>
                    <span className="exp-dates">{dates}</span>
                </p>
            </div>

            <div className="exp-card">
                <h3 className="exp-section-title">{t(K.exp.roleOverview)}</h3>
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
                    <h3 className="exp-section-title">{t(K.exp.tech)}</h3>
                    <div className="tech-badge-row">
                        {tech.map((techName) => {
                            const icon = getTechIcon(techName);
                            if (!icon) return null;

                            return (
                                <IconBadge
                                    key={techName}
                                    icon={icon}
                                    label={techName}
                                    onClick={
                                        onTechClick ? () => onTechClick(techName as TechId) : undefined
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
