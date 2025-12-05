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
  import './TechStackPanel.css';
  import ETL from '../images/etl.png';
  import { IconBadge } from "./IconBadge.tsx";
  
  export function TechStackPanel() {
    return (
      <div className="tech-panel">
        <h2>Tech Stack</h2>
  
        <div className="tech-section">
          <h3>Languages</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<SiJavascript />} label="JavaScript" />
            <IconBadge icon={<SiTypescript />} label="TypeScript" />
            <IconBadge icon={<SiCplusplus />} label="C++" />
            <IconBadge icon={<FaJava />} label="Java" />
            <IconBadge icon={<SiPython />} label="Python" />
            <IconBadge icon={<TbBrandCSharp />} label="C#" />
          </div>
        </div>

        <div className="tech-section">
          <h3>Backend</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<SiNodedotjs />} label="Node.js" />
            <IconBadge icon={<SiNestjs />} label="NestJS" />
          </div>
        </div>
  
        <div className="tech-section">
          <h3>Frontend</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<SiAngular />} label="Angular" />
            <IconBadge icon={<SiReact />} label="React" />
            <IconBadge icon={<SiHtml5 />} label="HTML" />
          </div>
        </div>
  
        <div className="tech-section">
          <h3>ORMs</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<SiTypeorm />} label="TypeORM" />
            <IconBadge icon={<SiSequelize />} label="Sequelize.js" />
          </div>
        </div>
  
        <div className="tech-section">
          <h3>Databases</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<SiPostgresql />} label="PostgreSQL" />
            <IconBadge icon={<DiMsqlServer />} label="SQL Server" />
            <IconBadge icon={<SiMongodb />} label="MongoDB" />
          </div>
        </div>
  
        <div className="tech-section">
          <h3>DevOps & Practices</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<SiDocker />} label="Docker" />
            <IconBadge icon={<SiGit />} label="Git" />
          </div>
        </div>
  
        <div className="tech-section">
          <h3>Other Skills</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<img src={ETL} alt="ETL" className="tech-custom-icon" />} label="ETL" />
            <IconBadge icon={<MdSupportAgent />} label="Technical Support" />
          </div>
        </div>
      </div>
    );
  }
  