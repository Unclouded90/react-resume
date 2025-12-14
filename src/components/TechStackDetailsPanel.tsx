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
import { MdSupportAgent } from "react-icons/md";
import "./TechStackPanel.css";
import { IconBadge } from "./IconBadge";
import type { TechId } from "../data/TechData";

type TechStackDetailsPanelProps = {
    onTechClick?: (id: TechId) => void;
};

export function TechStackDetailsPanel({ onTechClick }: TechStackDetailsPanelProps) {
    return (
        <div className="centered-panel experience-panel">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">Tech Stack</h2>
            </div>

            <div className="exp-card tech-detail-card">
                <div className="tech-section">
                    <h3>Languages</h3>
                    <div className="tech-badge-row tech-badge-row--detail tech-badge-row--languages">
                        <IconBadge icon={<SiTypescript />} label="TypeScript" onClick={onTechClick ? () => onTechClick("TypeScript") : undefined} />
                        <IconBadge icon={<SiCplusplus />} label="C++" onClick={onTechClick ? () => onTechClick("C++") : undefined} />
                        <IconBadge icon={<SiJavascript />} label="JavaScript" onClick={onTechClick ? () => onTechClick("JavaScript") : undefined} />
                        <IconBadge icon={<FaJava />} label="Java" onClick={onTechClick ? () => onTechClick("Java") : undefined} />
                        <IconBadge icon={<SiPython />} label="Python" onClick={onTechClick ? () => onTechClick("Python") : undefined} />
                        <IconBadge icon={<TbBrandCSharp />} label="C#" onClick={onTechClick ? () => onTechClick("C#") : undefined} />
                    </div>
                </div>
            </div>

            <div className="tech-detail-grid">
                <div className="tech-detail-column">
                    <div className="exp-card tech-detail-card  tech-detail-card--backend">
                        <div className="tech-section">
                            <h3>Backend</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiNodedotjs />} label="Node.js" onClick={onTechClick ? () => onTechClick("Node.js") : undefined} />
                                <IconBadge icon={<SiNestjs />} label="NestJS" onClick={onTechClick ? () => onTechClick("NestJS") : undefined} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card  tech-detail-card--orms">
                        <div className="tech-section">
                            <h3>ORMs</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiTypeorm />} label="TypeORM" onClick={onTechClick ? () => onTechClick("TypeORM") : undefined} />
                                <IconBadge icon={<SiSequelize />} label="Sequelize.js" onClick={onTechClick ? () => onTechClick("Sequelize.js") : undefined} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card  tech-detail-card--devops">
                        <div className="tech-section">
                            <h3>DevOps</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiDocker />} label="Docker" onClick={onTechClick ? () => onTechClick("Docker") : undefined} />
                                <IconBadge icon={<SiGit />} label="Git" onClick={onTechClick ? () => onTechClick("Git") : undefined} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tech-detail-column">
                    <div className="exp-card tech-detail-card  tech-detail-card--frontend">
                        <div className="tech-section">
                            <h3>Frontend</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiAngular />} label="Angular" onClick={onTechClick ? () => onTechClick("Angular") : undefined} />
                                <IconBadge icon={<SiReact />} label="React" onClick={onTechClick ? () => onTechClick("React") : undefined} />
                                <IconBadge icon={<SiHtml5 />} label="HTML" onClick={onTechClick ? () => onTechClick("HTML") : undefined} />
                                <IconBadge icon={<SiCss3 />} label="CSS" onClick={onTechClick ? () => onTechClick("CSS") : undefined} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card  tech-detail-card--databases">
                        <div className="tech-section">
                            <h3>Databases</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiPostgresql />} label="PostgreSQL" onClick={onTechClick ? () => onTechClick("PostgreSQL") : undefined} />
                                <IconBadge icon={<DiMsqlServer />} label="MS SQL Server" onClick={onTechClick ? () => onTechClick("MS SQL Server") : undefined} />
                                <IconBadge icon={<SiMongodb />} label="MongoDB" onClick={onTechClick ? () => onTechClick("MongoDB") : undefined} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card  tech-detail-card--otherskills">
                        <div className="tech-section">
                            <h3>Other Skills</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge
                                    icon={
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/5708/5708950.png"
                                            alt="ETL"
                                            className="tech-custom-icon"
                                        />
                                    }
                                    label="ETL"
                                    onClick={onTechClick ? () => onTechClick("ETL") : undefined}
                                />
                                <IconBadge
                                    icon={<MdSupportAgent />}
                                    label="Technical Support"
                                    onClick={onTechClick ? () => onTechClick("Technical Support") : undefined}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
