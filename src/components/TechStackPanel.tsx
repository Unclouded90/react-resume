import {
    SiTypescript,
    SiCplusplus,
    SiAngular,
    SiNodedotjs,
    SiNestjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiReact,
    SiSequelize,
    SiTypeorm,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import "./TechStackPanel.css";
import { IconBadge } from "./IconBadge";
import { type TechId } from "../data/TechData";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type TechStackPanelProps = {
    onExpand?: () => void;
    onTechClick?: (id: TechId) => void;
    t: (k: I18nKey) => string;
};

export function TechStackPanel({ onExpand, onTechClick, t }: TechStackPanelProps) {
    return (
        <div className="tech-panel">
            <div className="tech-panel-header-row">
                <h2 className="tech-panel-title">{t(K.tech.title)}</h2>

                {onExpand && (
                    <button
                        type="button"
                        className="tech-view-all-btn"
                        onClick={onExpand}
                    >
                        {t(K.ui.viewAll)} →
                    </button>
                )}
            </div>

            <div className="tech-card-grid">
                <div className="tech-card">
                    <h3 className="tech-card-heading">{t(K.tech.languages)}</h3>
                    <div className="tech-badge-row">
                        <IconBadge
                            icon={<SiTypescript />}
                            label="TypeScript"
                            onClick={onTechClick ? () => onTechClick("TypeScript") : undefined}
                        />
                        <IconBadge
                            icon={<SiCplusplus />}
                            label="C++"
                            onClick={onTechClick ? () => onTechClick("C++") : undefined}
                        />
                    </div>
                </div>

                <div className="tech-card">
                    <h3 className="tech-card-heading">Backend</h3>
                    <div className="tech-badge-row">
                        <IconBadge
                            icon={<SiNodedotjs />}
                            label="Node.js"
                            onClick={onTechClick ? () => onTechClick("Node.js") : undefined}
                        />
                        <IconBadge
                            icon={<SiNestjs />}
                            label="NestJS"
                            onClick={onTechClick ? () => onTechClick("NestJS") : undefined}
                        />
                    </div>
                </div>

                <div className="tech-card">
                    <h3 className="tech-card-heading">Frontend</h3>
                    <div className="tech-badge-row">
                        <IconBadge
                            icon={<SiAngular />}
                            label="Angular"
                            onClick={onTechClick ? () => onTechClick("Angular") : undefined}
                        />
                        <IconBadge
                            icon={<SiReact />}
                            label="React"
                            onClick={onTechClick ? () => onTechClick("React") : undefined}
                        />
                    </div>
                </div>

                <div className="tech-card">
                    <h3 className="tech-card-heading">ORMs</h3>
                    <div className="tech-badge-row">
                        <IconBadge
                            icon={<SiTypeorm />}
                            label="TypeORM"
                            onClick={onTechClick ? () => onTechClick("TypeORM") : undefined}
                        />
                        <IconBadge
                            icon={<SiSequelize />}
                            label="Sequelize.js"
                            onClick={onTechClick ? () => onTechClick("Sequelize.js") : undefined}
                        />
                    </div>
                </div>

                <div className="tech-card">
                    <h3 className="tech-card-heading">{t(K.tech.databases)}</h3>
                    <div className="tech-badge-row">
                        <IconBadge
                            icon={<SiPostgresql />}
                            label="PostgreSQL"
                            onClick={onTechClick ? () => onTechClick("PostgreSQL") : undefined}
                        />
                        <IconBadge
                            icon={<DiMsqlServer />}
                            label="MS SQL Server"
                            onClick={onTechClick ? () => onTechClick("MS SQL Server") : undefined}
                        />
                    </div>
                </div>

                <div className="tech-card">
                    <h3 className="tech-card-heading">DevOps</h3>
                    <div className="tech-badge-row">
                        <IconBadge
                            icon={<SiDocker />}
                            label="Docker"
                            onClick={onTechClick ? () => onTechClick("Docker") : undefined}
                        />
                        <IconBadge
                            icon={<SiGit />}
                            label="Git"
                            onClick={onTechClick ? () => onTechClick("Git") : undefined}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
