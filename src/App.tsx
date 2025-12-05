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
            "PostgreSQL", "MS SQL Server", "MongoDB", "Git", "ETL", "Technical Support"]
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
        description: "Single-page developer portfolio built with React, TypeScript and Vite. It uses a modular grid layout with reusable panels, plus overlay dialogs for " +
            "detailed views, all styled with a custom and responsive design. This portfolio became one of the most interesting projects I have worked on, since I managed to " +
            "learn React, which was the primary goal when I decided to develop the website, as well as to complete an objective of mine of having my own domain with my CV.",
        tech: ["TypeScript", "React", "Vite", "HTML", "CSS", "Git"],
    },
    {
        id: 3,
        title: "Employee DB Manager",
        subtitle: "Java Spring boot CRUD app for managing employees",
        description: "Created a web application to manage employee records as a hands-on exercise to learn CRUD workflows, API creation, database integration, " +
            "and basic UI development. The project strengthened my understanding of how data flows between the frontend, backend, and database layer.",
        tech: ["Java", "MS SQL Server"],
    },
    {
        id: 4,
        title: 'Event Ticketing Web App',
        subtitle: 'Python platform for managing event ticket sales',
        description: "Developed a full-stack event booking platform to explore backend development with Python frameworks and working with NoSQL databases." + 
            "This project helped me understand user flows, data modeling, and how to build APIs and views that interact with real application data.",
        tech: ["Python", "MongoDB"],
    },
    {
        id: 5,
        title: "Currency Converter",
        subtitle: "WPF App for live rates conversion",
        description: "Built a WPF application that performs real-time currency conversion as a way to learn API consumption, data binding, and desktop UI development." + 
            " The project introduced concepts such as handling external HTTP requests, updating UI elements dynamically, and storing data with MS SQL Server.",
        tech: ["C#", ".NET", "MS SQL Server"],
    },
    {
        id: 6,
        title: "Tic-Tac-Toe Game",
        subtitle: "WPF game of Tic Tac Toe",
        description: "Created a Tic-Tac-Toe game in WPF to practice building desktop UI applications and implementing simple game logic. It helped me understand" + 
            " state management, UI updates, and creating user-friendly interactive components.",
        tech: ["C#", ".NET", "WPF"],
    },
    {
        id: 7,
        title: "Pong",
        subtitle: "2D local-multiplayer Pong game",
        description: "Created a 2D Pong game in Unity as an introduction to game development fundamentals. The project taught me the basics of physics simulation," + 
            " input handling, collision detection, and building simple interactive gameplay loops.",
        tech: ["C#", ".NET", "Unity"],
    },
    {
        id: 8,
        title: "Zig Zag Game",
        subtitle: "3D game using Unity3D",
        description: "Developed a 3D Zig Zag runner game to learn how to work with Unity’s 3D environment, object spawning, score tracking, and camera control." + 
            " This project strengthened my understanding of game mechanics and real-time scene interactions.",
        tech: ["C#", ".NET", "Unity"],
    },
    {
        id: 9,
        title: "Fruit Ninja Game",
        subtitle: "Unity game for slicing fruit while dodging the bombs",
        description: "Built a Fruit Ninja-style game to practice gesture-based gameplay, random object generation, and game state management. It served as a" + 
            " learning experience in creating dynamic interactions, animations, and challenge escalation.",
        tech: ["C#", ".NET", "Unity"],
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
