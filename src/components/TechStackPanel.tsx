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
import { techInfoById, type TechId, type TechInfo } from "./TechData";

type TechStackPanelProps = {
  onExpand?: () => void;
};

export function TechStackPanel({ onExpand }: TechStackPanelProps) {
  const [activeTech, setActiveTech] = useState<TechInfo | null>(null);

  const handleBadgeClick = (id: TechId) => {
    const info = techInfoById[id];
    if (info) {
      setActiveTech(info);
    }
  };

  const closeMiniCard = () => setActiveTech(null);

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
            <IconBadge
              icon={<SiTypescript />}
              label="TypeScript"
              onClick={() => handleBadgeClick("TypeScript")}
            />
            <IconBadge
              icon={<SiCplusplus />}
              label="C++"
              onClick={() => handleBadgeClick("C++")}
            />
          </div>
        </div>

        <div className="tech-card">
          <h3 className="tech-card-heading">Backend</h3>
          <div className="tech-badge-row">
            <IconBadge
              icon={<SiNodedotjs />}
              label="Node.js"
              onClick={() => handleBadgeClick("Node.js")}
            />
            <IconBadge
              icon={<SiNestjs />}
              label="NestJS"
              onClick={() => handleBadgeClick("NestJS")}
            />
          </div>
        </div>

        <div className="tech-card">
          <h3 className="tech-card-heading">Frontend</h3>
          <div className="tech-badge-row">
            <IconBadge
              icon={<SiAngular />}
              label="Angular"
              onClick={() => handleBadgeClick("Angular")}
            />
            <IconBadge
              icon={<SiReact />}
              label="React"
              onClick={() => handleBadgeClick("React")}
            />
          </div>
        </div>

        <div className="tech-card">
          <h3 className="tech-card-heading">ORMs</h3>
          <div className="tech-badge-row">
            <IconBadge
              icon={<SiTypeorm />}
              label="TypeORM"
              onClick={() => handleBadgeClick("TypeORM")}
            />
            <IconBadge
              icon={<SiSequelize />}
              label="Sequelize.js"
              onClick={() => handleBadgeClick("Sequelize.js")}
            />
          </div>
        </div>

        <div className="tech-card">
          <h3 className="tech-card-heading">Databases</h3>
          <div className="tech-badge-row">
            <IconBadge
              icon={<SiPostgresql />}
              label="PostgreSQL"
              onClick={() => handleBadgeClick("PostgreSQL")}
            />
            <IconBadge
              icon={<DiMsqlServer />}
              label="MS SQL Server"
              onClick={() => handleBadgeClick("MS SQL Server")}
            />
          </div>
        </div>

        <div className="tech-card">
          <h3 className="tech-card-heading">DevOps</h3>
          <div className="tech-badge-row">
            <IconBadge
              icon={<SiDocker />}
              label="Docker"
              onClick={() => handleBadgeClick("Docker")}
            />
            <IconBadge
              icon={<SiGit />}
              label="Git"
              onClick={() => handleBadgeClick("Git")}
            />
          </div>
        </div>
      </div>

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
