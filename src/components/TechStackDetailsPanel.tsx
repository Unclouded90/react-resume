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
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type TechStackDetailsPanelProps = {
  onTechClick?: (id: TechId) => void;
  t: (k: I18nKey) => string;
};

export function TechStackDetailsPanel({ onTechClick, t }: TechStackDetailsPanelProps) {
    return (
        <div className="centered-panel experience-panel">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">{t(K.tech.title)}</h2>
            </div>

            <div className="exp-card tech-detail-card">
                <div className="tech-section">
                    <h3>{t(K.tech.languages)}</h3>
                    <div className="tech-badge-row tech-badge-row--detail tech-badge-row--languages">
                        <IconBadge icon={<SiTypescript />} label="TypeScript" onClick={() => onTechClick?.("TypeScript")} />
                        <IconBadge icon={<SiCplusplus />} label="C++" onClick={() => onTechClick?.("C++")} />
                        <IconBadge icon={<SiJavascript />} label="JavaScript" onClick={() => onTechClick?.("JavaScript")} />
                        <IconBadge icon={<FaJava />} label="Java" onClick={() => onTechClick?.("Java")} />
                        <IconBadge icon={<SiPython />} label="Python" onClick={() => onTechClick?.("Python")} />
                        <IconBadge icon={<TbBrandCSharp />} label="C#" onClick={() => onTechClick?.("C#")} />
                    </div>
                </div>
            </div>

            <div className="tech-detail-grid">
                <div className="tech-detail-column">
                    <div className="exp-card tech-detail-card tech-detail-card--backend">
                        <div className="tech-section">
                            <h3>Backend</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiNodedotjs />} label="Node.js" onClick={() => onTechClick?.("Node.js")} />
                                <IconBadge icon={<SiNestjs />} label="NestJS" onClick={() => onTechClick?.("NestJS")} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card tech-detail-card--orms">
                        <div className="tech-section">
                            <h3>ORMs</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiTypeorm />} label="TypeORM" onClick={() => onTechClick?.("TypeORM")} />
                                <IconBadge icon={<SiSequelize />} label="Sequelize.js" onClick={() => onTechClick?.("Sequelize.js")} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card tech-detail-card--devops">
                        <div className="tech-section">
                            <h3>DevOps</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiDocker />} label="Docker" onClick={() => onTechClick?.("Docker")} />
                                <IconBadge icon={<SiGit />} label="Git" onClick={() => onTechClick?.("Git")} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tech-detail-column">
                    <div className="exp-card tech-detail-card tech-detail-card--frontend">
                        <div className="tech-section">
                            <h3>Frontend</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiAngular />} label="Angular" onClick={() => onTechClick?.("Angular")} />
                                <IconBadge icon={<SiReact />} label="React" onClick={() => onTechClick?.("React")} />
                                <IconBadge icon={<SiHtml5 />} label="HTML" onClick={() => onTechClick?.("HTML")} />
                                <IconBadge icon={<SiCss3 />} label="CSS" onClick={() => onTechClick?.("CSS")} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card tech-detail-card--databases">
                        <div className="tech-section">
                            <h3>{t(K.tech.databases)}</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiPostgresql />} label="PostgreSQL" onClick={() => onTechClick?.("PostgreSQL")} />
                                <IconBadge icon={<DiMsqlServer />} label="MS SQL Server" onClick={() => onTechClick?.("MS SQL Server")} />
                                <IconBadge icon={<SiMongodb />} label="MongoDB" onClick={() => onTechClick?.("MongoDB")} />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card tech-detail-card--otherskills">
                        <div className="tech-section">
                            <h3>{t(K.tech.other)}</h3>
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
                                    onClick={() => onTechClick?.("ETL")}
                                />
                                <IconBadge
                                    icon={<MdSupportAgent />}
                                    label="Technical Support"
                                    onClick={() => onTechClick?.("Technical Support")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
