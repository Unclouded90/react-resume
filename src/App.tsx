import { useState } from 'react';
import { AboutMePanel } from './components/AboutMePanel';
import { HeaderPanel } from './components/HeaderPanel'
import { TechStackPanel } from './components/TechStackPanel'
import { ExperiencePanel } from './components/ExperiencePanel'
import { ExperienceDetailsPanel, type ExperienceDetailsPanelProps } from './components/ExperienceDetailsPanel';
import { EducationPanel } from './components/EducationPanel';
import { EducationDetailsPanel } from './components/EducationDetailsPanel';
import { ProjectPanel } from './components/ProjectPanel';
import { ProjectDetailsPanel, type ProjectDetailsPanelProps } from './components/ProjectDetailsPanel';


import './App.css'

type ActivePanel = "about" | "experience" | "tech" | "education" | "project" | null;

type Project = {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    tech?: string[];
};

const jobs = [
    {
        title: "Full Stack Developer",
        company: (
            <a
                href="https://www.eufinity.com/"
                target="_blank"
                rel="noreferrer"
                className="exp-company-link"
            >
                Eufinity Solutions
            </a>
        ),
        dates: "April 2024 - Present",
        description: "Currently working as a Full Stack Developer on Eufinity Solutions," +
            " a company focused on developing end-to-end retail and ERP (Enterprise Resource Planning) software solutions" +
            " targeting medium to large-scale retail operations.",
        bullets: ["Full-stack development of ERP systems, responsible for both back-end and front-end features",
            "Implementing SAF-T (PT) solutions in full compliance with Portuguese fiscal legislation",
            "Integrating our software with automatic payment terminals across multiple countries",
            "Providing technical support, addressing and resolving client incidents and feature requests"
        ],
        tech: ["JavaScript", "TypeScript", "C++", "Java", "Node.js", "Angular", "Sequelize.js",
            "PostgreSQL", "SQL Server", "MongoDB", "Git", "ETL", "Technical Support"]
    },
];

const projects: Project[] = [
    {
        id: 1,
        title: "NestJS API Template",
        subtitle: "API starter with auth, Swagger, TypeORM & Docker'",
        description: "A production-ready NestJS API template that includes built-in authentication, OpenAPI (Swagger), TypeORM setup, rate limiting, and other common features." +
            " It was designed to help people start new projects quickly by focusing on actual business logic instead of boilerplate.",
        tech: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
    },
    {
        id: 2,
        title: "Developer Portfolio",
        subtitle: "React(Vite) + Typescript single-page CV",
        description: "",
        tech: ["TypeScript", "React", "Vite", "HTML", "CSS", "Git"],
    },
    {
        id: 3,
        title: "Employee DB Manager",
        subtitle: "Java Spring boot CRUD app for managing employees",
        description: "",
        tech: ["Java", "SQL Server"],
    },
    {
        id: 4,
        title: 'Event Ticketing Web App',
        subtitle: 'Python platform for managing event ticket sales',
        description: "",
        tech: ["Python", "MongoDB"],
    },
    {
        id: 5,
        title: "Currency Converter",
        subtitle: "WPF App for live rates conversion",
        description: "",
        tech: ["C#", ".NET", "SQL Server"],
    },
    {
        id: 6,
        title: "Tic-Tac-Toe Game",
        subtitle: "WPF game of Tic Tac Toe",
        description: "",
        tech: ["C#", ".NET"],
    },
    {
        id: 7,
        title: "Pong",
        subtitle: "2D local-multiplayer Pong game",
        description: "",
        tech: ["C#", ".NET"],
    },
    {
        id: 8,
        title: "Zig Zag Game",
        subtitle: "3D game using Unity3D",
        description: "",
        tech: ["C#", ".NET"],
    },
    {
        id: 9,
        title: "Fruit Ninja Game",
        subtitle: "Unity game for slicing fruit while dodging the bombs",
        description: "",
        tech: ["C#", ".NET"],
    },
];

function App() {
    const [activePanel, setActivePanel] = useState<ActivePanel>(null);
    const [selectedJob, setSelectedJob] = useState<ExperienceDetailsPanelProps | null>(null);
    const [selectedProject, setSelectedProject] = useState<ProjectDetailsPanelProps | null>(null);

    const openPanel = (panel: ActivePanel) => setActivePanel(panel);
    const openProject = (project: Project) => {
        setSelectedProject(project);
        setActivePanel("project");
    };
    const closePanel = () => {
        setActivePanel(null);
        setSelectedJob(null);
        setSelectedProject(null);
    }

    return (
        <>
            <div className={`layout-root ${activePanel ? "layout-root--blurred" : ""}`}>
                <div className="layout-grid">
                    <section className="panel panel-header"
                    >
                        <HeaderPanel onExpand={() => openPanel("about")} />
                    </section>

                    <section className="panel panel-experience">
                        <ExperiencePanel onExpand={() => {
                            setSelectedJob(jobs[0]);
                            openPanel("experience")
                        }} />
                    </section>

                    <section className="panel panel-techstack">
                        <TechStackPanel />
                    </section>

                    <section className="panel panel-education">
                        <EducationPanel onExpand={() => openPanel("education")} />
                    </section>

                    <section className="panel panel-projects">
                        <ProjectPanel projects={projects} onProjectClick={openProject} />
                    </section>

                </div>
            </div>

            {activePanel && (
                <div className="panel-overlay" onClick={closePanel}>
                    <div
                        className={
                            "panel-overlay-content" +
                            ((activePanel === "experience" ||
                                activePanel === "education" ||
                                activePanel === "project")
                                ? " panel-overlay-content--tallHeader"
                                : "")
                        }
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="panel-overlay-close" onClick={closePanel}>
                            ✕
                        </button>

                        {activePanel === "about" && <AboutMePanel />}
                        {activePanel === 'experience' && selectedJob && (
                            <ExperienceDetailsPanel {...selectedJob} />
                        )}
                        {activePanel === "education" && <EducationDetailsPanel />}
                        {activePanel === "project" && selectedProject && (
                            <ProjectDetailsPanel {...selectedProject} />
                        )}
                    </div>
                </div >
            )
            }
        </>
    )
}

export default App
