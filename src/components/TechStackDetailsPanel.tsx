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
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { MdSupportAgent } from "react-icons/md";
import "./TechStackPanel.css";
import ETL from "../images/etl.png";
import { IconBadge } from "./IconBadge";

export function TechStackDetailsPanel() {
    return (
        <div className="centered-panel experience-panel">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">Tech Stack</h2>
            </div>

            <div className="exp-card tech-detail-card">
                <div className="tech-section">
                    <h3>Languages</h3>
                    <div className="tech-badge-row tech-badge-row--detail">
                        <IconBadge icon={<SiTypescript />} label="TypeScript" />
                        <IconBadge icon={<SiCplusplus />} label="C++" />
                        <IconBadge icon={<SiJavascript />} label="JavaScript" />
                        <IconBadge icon={<FaJava />} label="Java" />
                        <IconBadge icon={<SiPython />} label="Python" />
                        <IconBadge icon={<TbBrandCSharp />} label="C#" />
                    </div>
                </div>
            </div>

            <div className="tech-detail-grid">
                <div className="tech-detail-column">
                    <div className="exp-card tech-detail-card">
                        <div className="tech-section">
                            <h3>Backend</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiNodedotjs />} label="Node.js" />
                                <IconBadge icon={<SiNestjs />} label="NestJS" />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card">
                        <div className="tech-section">
                            <h3>ORMs</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiTypeorm />} label="TypeORM" />
                                <IconBadge icon={<SiSequelize />} label="Sequelize.js" />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card">
                        <div className="tech-section">
                            <h3>DevOps</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiDocker />} label="Docker" />
                                <IconBadge icon={<SiGit />} label="Git" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tech-detail-column">
                    <div className="exp-card tech-detail-card">
                        <div className="tech-section">
                            <h3>Frontend</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiAngular />} label="Angular" />
                                <IconBadge icon={<SiReact />} label="React" />
                                <IconBadge icon={<SiHtml5 />} label="HTML" />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card">
                        <div className="tech-section">
                            <h3>Databases</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge icon={<SiPostgresql />} label="PostgreSQL" />
                                <IconBadge icon={<DiMsqlServer />} label="MS SQL Server" />
                                <IconBadge icon={<SiMongodb />} label="MongoDB" />
                            </div>
                        </div>
                    </div>

                    <div className="exp-card tech-detail-card">
                        <div className="tech-section">
                            <h3>Other Skills</h3>
                            <div className="tech-badge-row tech-badge-row--detail">
                                <IconBadge
                                    icon={
                                        <img
                                            src={ETL}
                                            alt="ETL"
                                            className="tech-custom-icon"
                                        />
                                    }
                                    label="ETL"
                                />
                                <IconBadge
                                    icon={<MdSupportAgent />}
                                    label="Technical Support"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
