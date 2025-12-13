import { useState } from "react";
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
import { type TechId } from "./TechData";

type TechStackPanelProps = {
  onExpand?: () => void;
  onTechClick?: (id: TechId) => void;
};

export function TechStackPanel({ onExpand , onTechClick }: TechStackPanelProps) {
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
            View all →
          </button>
        )}
      </div>

      <div className="tech-card-grid">
        <div className="tech-card">
          <h3 className="tech-card-heading">Languages</h3>
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
          <h3 className="tech-card-heading">Databases</h3>
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
