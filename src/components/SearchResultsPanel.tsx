import "./SearchResultsPanel.css";
import { IconBadge } from "./IconBadge";
import type { TechId } from "../data/TechData";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiCplusplus,
    SiHtml5,
    SiAngular,
    SiNodedotjs,
    SiNestjs,
    SiPostgresql,
    SiSequelize,
    SiTypeorm,
    SiDocker,
    SiGit,
    SiReact,
    SiMongodb,
    SiCss3,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

type TFn = (k: I18nKey) => string;

type SearchResult =
    | {
        kind: "tech-group";
        id: string;
        title: string;
        techIds: TechId[];
    }
    | {
        kind: "project";
        id: number;
        title: string;
        subtitle?: string;
        snippet: string;
    }
    | {
        kind: "experience";
        id: number;
        title: string;
        subtitle: string;
        snippet: string;
    }
    | {
        kind: "certificate";
        id: number;
        title: string;
        subtitle?: string;
        snippet: string;
    }
    | {
        kind: "education";
        title: string;
        subtitle?: string;
        snippet: string;
    }
    | {
        kind: "empty";
    };


type Props = {
    query: string;
    results: SearchResult[];
    onTechClick: (id: TechId) => void;
    onOpenProject: (id: number) => void;
    onOpenExperience: (id: number) => void;
    onOpenCertificate: (id: number) => void;
    onOpenEducation: () => void;
    t: TFn;
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
        case "Python":
            return <SiPython />;
        case "C#":
            return <TbBrandCSharp />;

        case "Node.js":
            return <SiNodedotjs />;
        case "NestJS":
            return <SiNestjs />;

        case "TypeORM":
            return <SiTypeorm />;
        case "Sequelize.js":
            return <SiSequelize />;

        case "Docker":
            return <SiDocker />;
        case "Git":
            return <SiGit />;

        case "Angular":
            return <SiAngular />;
        case "React":
            return <SiReact />;
        case "HTML":
            return <SiHtml5 />;
        case "CSS":
            return <SiCss3 />;

        case "PostgreSQL":
            return <SiPostgresql />;
        case "MS SQL Server":
            return <DiMsqlServer />;
        case "MongoDB":
            return <SiMongodb />;
        default:
            return null;
    }
}

export function SearchResultsPanel({
    query,
    results,
    onTechClick,
    onOpenProject,
    onOpenExperience,
    onOpenCertificate,
    onOpenEducation,
    t,
}: Props) {
    return (
        <div className="search-panel">
            <h2 className="search-panel__title">
                {t(K.search.title)} for &quot;{query.trim()}&quot;
            </h2>


            {results.map((r) => {
                if (r.kind === "empty") {
                    return (
                        <p key="empty" className="search-empty">
                            {t(K.search.noResults)}
                        </p>
                    );
                }

                if (r.kind === "tech-group") {
                    return (
                        <div key={`tech-${r.id}`} className="search-card search-card--tech">
                            <h3 className="search-card__title">{r.title}</h3>

                            <div className="tech-badge-row tech-badge-row--detail">
                                {r.techIds.map((techName) => {
                                    const icon = getTechIcon(techName);
                                    if (!icon) return null;

                                    return (
                                        <IconBadge
                                            key={techName}
                                            icon={icon}
                                            label={techName}
                                            onClick={() => onTechClick(techName)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                }

                if (r.kind === "project") {
                    return (
                        <button
                            key={`project-${r.id}`}
                            type="button"
                            className="search-maincard"
                            onClick={() => onOpenProject(r.id)}
                        >
                            <div className="search-maincard__left">
                                <div className="search-maincard__title">{r.title}</div>
                                {r.subtitle && <div className="search-maincard__subtitle">{r.subtitle}</div>}
                            </div>

                            <div className="search-maincard__right">
                                <div className="search-maincard__tag">{t(K.ui.personalProjects)}</div>
                            </div>
                        </button>
                    );
                }

                if (r.kind === "experience") {
                    return (
                        <button
                            key={`experience-${r.id}`}
                            type="button"
                            className="search-maincard"
                            onClick={() => onOpenExperience(r.id)}
                        >
                            <div className="search-maincard__left">
                                <div className="search-maincard__title">{r.title}</div>
                                <div className="search-maincard__subtitle">{r.subtitle}</div>
                            </div>

                            <div className="search-maincard__right">
                                <div className="search-maincard__tag">{t(K.ui.experience)}</div>
                            </div>
                        </button>
                    );
                }

                if (r.kind === "certificate") {
                    return (
                        <button
                            key={`certificate-${r.id}`}
                            type="button"
                            className="search-maincard"
                            onClick={() => onOpenCertificate(r.id)}
                        >
                            <div className="search-maincard__left">
                                <div className="search-maincard__title">{r.title}</div>
                                {r.subtitle && <div className="search-maincard__subtitle">{r.subtitle}</div>}
                            </div>

                            <div className="search-maincard__right">
                                <div className="search-maincard__tag">{t(K.ui.certificates)}</div>
                            </div>
                        </button>
                    );
                }

                if (r.kind === "education") {
                    return (
                        <button
                            key="education"
                            type="button"
                            className="search-maincard"
                            onClick={onOpenEducation}
                        >
                            <div className="search-maincard__left">
                                <div className="search-maincard__title">{r.title}</div>
                                {r.subtitle && <div className="search-maincard__subtitle">{r.subtitle}</div>}
                            </div>

                            <div className="search-maincard__right">
                                <div className="search-maincard__tag">{t(K.educations.title)}</div>
                            </div>
                        </button>
                    );
                }

                return null;
            })}
        </div>
    );
}

