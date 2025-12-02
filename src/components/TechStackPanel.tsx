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
    SiKubernetes,
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
  import ERP from '../images/erp.png';
  import OOP from '../images/oop.png';
  import DevOps from '../images/devops.png';
  import RestApi from '../images/rest-api.png';
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
          <h3>Backend & Frameworks</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<SiNodedotjs />} label="Node.js" />
            <IconBadge icon={<SiNestjs />} label="NestJS" />
            <IconBadge icon={<img src={RestApi} alt="REST APIs" className="tech-custom-icon" />} label="REST APIs" />
            <IconBadge icon={<img src={OOP} alt="OOP" className="tech-custom-icon" />} label="OOP" />
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
          <h3>ORMs & Data Layers</h3>
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
            <IconBadge icon={<img src={DevOps} alt="DevOps" className="tech-custom-icon" />} label="DevOps" />
            <IconBadge icon={<SiDocker />} label="Docker" />
            <IconBadge icon={<SiKubernetes />} label="Kubernetes" />
            <IconBadge icon={<SiGit />} label="Git" />
          </div>
        </div>
  
        <div className="tech-section">
          <h3>Other Skills</h3>
          <div className="tech-badge-row">
            <IconBadge icon={<img src={ETL} alt="ETL" className="tech-custom-icon" />} label="ETL" />
            <IconBadge icon={<img src={ERP} alt="ERP" className="tech-custom-icon" />} label="ERP Systems" />
            <IconBadge icon={<MdSupportAgent />} label="Technical Support" />
          </div>
        </div>
      </div>
    );
  }
  