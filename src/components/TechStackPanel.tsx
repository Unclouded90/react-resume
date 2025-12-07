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
  
  type TechStackPanelProps = {
    onExpand?: () => void;
  };
  
  export function TechStackPanel({ onExpand }: TechStackPanelProps) {
    return (
      <div className="tech-panel">
        <div className="tech-panel-header-row">
          <h2 className="tech-panel-title">Tech Stack</h2>
  
          {onExpand && (
            <button
              type="button"
              className="tech-view-all-btn"
              onClick={onExpand}
            >
              View all
            </button>
          )}
        </div>
  
        <div className="tech-card-grid">
          <div className="tech-card">
            <h3 className="tech-card-heading">Languages</h3>
            <div className="tech-badge-row">
              <IconBadge icon={<SiTypescript />} label="TypeScript" />
              <IconBadge icon={<SiCplusplus />} label="C++" />
            </div>
          </div>
  
          <div className="tech-card">
            <h3 className="tech-card-heading">Backend</h3>
            <div className="tech-badge-row">
              <IconBadge icon={<SiNodedotjs />} label="Node.js" />
              <IconBadge icon={<SiNestjs />} label="NestJS" />
            </div>
          </div>
  
          <div className="tech-card">
            <h3 className="tech-card-heading">Frontend</h3>
            <div className="tech-badge-row">
              <IconBadge icon={<SiAngular />} label="Angular" />
              <IconBadge icon={<SiReact />} label="React" />
            </div>
          </div>
  
          <div className="tech-card">
            <h3 className="tech-card-heading">ORMs</h3>
            <div className="tech-badge-row">
              <IconBadge icon={<SiTypeorm />} label="TypeORM" />
              <IconBadge icon={<SiSequelize />} label="Sequelize.js" />
            </div>
          </div>
  
          <div className="tech-card">
            <h3 className="tech-card-heading">Databases</h3>
            <div className="tech-badge-row">
              <IconBadge icon={<SiPostgresql />} label="PostgreSQL" />
              <IconBadge icon={<DiMsqlServer />} label="MS SQL Server" />
            </div>
          </div>
  
          <div className="tech-card">
            <h3 className="tech-card-heading">DevOps</h3>
            <div className="tech-badge-row">
              <IconBadge icon={<SiDocker />} label="Docker" />
              <IconBadge icon={<SiGit />} label="Git" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  