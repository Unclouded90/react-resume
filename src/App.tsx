import { useState, useEffect } from 'react';
import { AboutMePanel } from './components/AboutMePanel';
import { HeaderPanel } from './components/HeaderPanel';
import { TechStackPanel } from './components/TechStackPanel';
import { TechStackDetailsPanel } from './components/TechStackDetailsPanel';
import { ExperiencePanel } from './components/ExperiencePanel';
import { ExperienceDetailsPanel, type ExperienceDetailsPanelProps } from './components/ExperienceDetailsPanel';
import { EducationPanel } from './components/EducationPanel';
import { EducationDetailsPanel } from './components/EducationDetailsPanel';
import { ProjectPanel } from './components/ProjectPanel';
import { ProjectDetailsPanel, type ProjectDetailsPanelProps } from './components/ProjectDetailsPanel';
import { CertificatePanel } from './components/CertificatePanel';
import { CertificateDetailsPanel, type CertificateDetailsPanelProps } from './components/CertificateDetailsPanel';
import { AchievementPanel, type Achievement } from './components/AchievementPanel';
import { TechMiniCard } from "./components/TechMiniCard";
import { techInfoById, type TechId, type TechInfo } from "./components/TechData";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconBadge } from "./components/IconBadge";
import './App.css';

type Theme = "dark" | "light";

type ActivePanel =
    "about"
    | "experience"
    | "tech"
    | "education"
    | "project"
    | "projectsAll"
    | "certificate"
    | "certificatesAll"
    | null;

type Project = {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    tech?: string[];
    githubUrl?: string;
    extraDetails?: string[];
    featured?: boolean;
};

type Certificate = CertificateDetailsPanelProps & { id: number, featured?: boolean };

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
        tech: ["TypeScript", "C++", "JavaScript", "Java", "Node.js", "Angular", "Sequelize.js",
            "PostgreSQL", "MS SQL Server", "MongoDB", "Git", "ETL", "Technical Support"]
    },
];

const projects: Project[] = [
    {
        id: 1,
        title: "NestJS API Template",
        subtitle: "API starter with auth, Swagger, TypeORM & Docker",
        description: "A production-ready NestJS API template that includes built-in authentication, OpenAPI (Swagger), TypeORM setup, rate limiting, and other common features." +
            " It was designed to help people start new projects quickly by focusing on actual business logic instead of boilerplate. Developed collaboratively with two teammates," +
            " this project represents a blend of our shared ideas, existing knowledge, and new skills acquired throughout the development process. It was an exciting team effort" +
            " and remains an ongoing project that we continue to refine and improve regularly.",
        extraDetails: [
            "Production-ready NestJS API template focused on reducing boilerplate so new services can start from a solid base instead of from scratch.",
            "Implements JWT-based authentication with support for access and refresh tokens, multi-session device tracking and protected/public routes via custom decorators.",
            "Uses a modular architecture with feature-based modules (Auth, User, Health, etc.) and a shared common layer for base classes, decorators, utilities and configuration.",
            "Provides BaseEntity and BaseService abstractions to standardize CRUD, soft deletes, pagination, filtering, sorting and lifecycle hooks across all domain modules.",
            "Integrates TypeORM with PostgreSQL, including a migrations setup and helper scripts to generate, run and revert schema migrations.",
            "Exposes OpenAPI (Swagger) documentation out of the box, driven by NestJS decorators on controllers and DTOs, available at the /api endpoint.",
            "Centralizes configuration via environment variables validated with Joi at startup, ensuring required values (DB, JWT, CORS, rate limiting) are present before the app boots.",
            "Includes rate limiting, CORS, global validation pipe and other cross-cutting middleware pre-configured for production-style hardening.",
            "Ships with a Jest-based testing setup, using jest-mock-extended and a custom createMockRepository utility to make TypeORM repository mocks type-safe and predictable.",
            "Supports both local development and VS Code Dev Containers with Docker, so the entire stack (API + database) can be brought up quickly in a reproducible environment.",
            "Documents how to add new feature modules using the Nest CLI, extending BaseService and wiring entities, DTOs, controllers and tests to follow the same conventions.",
            "Provides npm scripts for common tasks such as linting, formatting, running tests, building the app and managing migrations, keeping day-to-day workflows standardized."
        ],
        tech: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
        featured: true,
    },
    {
        id: 2,
        title: "Developer Portfolio",
        subtitle: "React(Vite) + Typescript single-page CV",
        description: "Single-page developer portfolio built with React, TypeScript and Vite. It uses a modular grid layout with reusable panels, plus overlay dialogs for " +
            "detailed views, all styled with a custom and responsive design. This portfolio became one of the most interesting projects I have worked on, since I managed to " +
            "learn React, which was the primary goal when I decided to develop the website, as well as to complete an objective of mine of having my own domain with my CV.",
        extraDetails: [
            "Built as a single-page React application using TypeScript and Vite, with a fully modular component architecture.",
            "Main layout uses a reusable grid system where each panel is an isolated component with its own CSS.",
            "All overlays are managed through a centralized state machine using a discriminated union for active panels.",
            "Detail panels follow a shared layered-card design with consistent structure for headers, descriptions and tech sections.",
            "The Projects section is data-driven, rendered through a responsive CSS grid (3×3 desktop, 2 or 1 column on smaller screens).",
            "Hover animations and lift effects are handcrafted with CSS transitions to maintain full stylistic control.",
            "Background blur and scale effects create depth when a modal is open.",
            "Responsive layout adapts naturally via CSS Grid and Flexbox.",
            "Architecture supports future additions such as theme switching and language toggling in the header."
        ],
        tech: ["TypeScript", "React", "HTML", "CSS", "Git"],
        githubUrl: "https://github.com/Unclouded90/react-resume",
        featured: true,
    },
    {
        id: 3,
        title: "Employee DB Manager",
        subtitle: "Java Spring boot CRUD app for managing employees",
        description: "Created a web application to manage employee records as a hands-on exercise to learn CRUD workflows, API creation, database integration, " +
            "and basic UI development. The project strengthened my understanding of how data flows between the frontend, backend, and database layer.",
        tech: ["Java", "MS SQL Server"],
        featured: true,
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
        tech: ["C#", "MS SQL Server"],
    },
    {
        id: 6,
        title: "Tic-Tac-Toe Game",
        subtitle: "WPF game of Tic Tac Toe",
        description: "Created a Tic-Tac-Toe game in WPF to practice building desktop UI applications and implementing simple game logic. It helped me understand" +
            " state management, UI updates, and creating user-friendly interactive components.",
        tech: ["C#"],
    },
    {
        id: 7,
        title: "Pong",
        subtitle: "2D local-multiplayer Pong game",
        description: "Created a 2D Pong game in Unity as an introduction to game development fundamentals. The project taught me the basics of physics simulation," +
            " input handling, collision detection, and building simple interactive gameplay loops.",
        tech: ["C#"],
    },
    {
        id: 8,
        title: "Zig Zag Game",
        subtitle: "3D game using Unity3D",
        description: "Developed a 3D Zig Zag runner game to learn how to work with Unity’s 3D environment, object spawning, score tracking, and camera control." +
            " This project strengthened my understanding of game mechanics and real-time scene interactions.",
        tech: ["C#"],
    },
    {
        id: 9,
        title: "Fruit Ninja Game",
        subtitle: "Unity game for slicing fruit while dodging the bombs",
        description: "Built a Fruit Ninja-style game to practice gesture-based gameplay, random object generation, and game state management. It served as a" +
            " learning experience in creating dynamic interactions, animations, and challenge escalation.",
        tech: ["C#"],
    },
];

const certificates: Certificate[] = [
    {
        id: 1,
        title: "IBM DevOps and Software Engineering Professional Certificate",
        subtitle: "Coursera · 2023",
        description:
            "Professional certification given by IBM, where I acquired skills related to DevOps in a software development environment using Agile and Scrum " +
            "methodologies. I was also trained in Cloud Native technologies, Shell Script automation, using platforms such as Github, developing applications " +
            "using Microservices, learning about Containers (Docker/Kubernetes/OpenShift) and Serverless technologies, as well as implementing automation, CI and CD tools.",
        tools: ["DevOps",
            "Agile & Scrum",
            "Cloud Native",
            "Shell Scripting",
            "GitHub",
            "Microservices",
            "Docker",
            "Kubernetes",
            "OpenShift",
            "Serverless",
            "CI/CD",
            "Automation"],
        featured: true,
    },
    {
        id: 2,
        title: "IBM Back-End Development Professional Certificate",
        subtitle: "Coursera · 2023",
        description:
            "Professional certification given by IBM, where I deepened my knowledge of Back-End development. I applied the techniques I obtained in the previous " +
            "certification (IBM DevOps and Software Engineering) and further developed my skills with tools such as SQL, Django, and also obtained training in " +
            "the area of Application Security and Monitoring.",
        tools: ["Back-End Development",
            "SQL",
            "Django",
            "Python",
            "REST APIs",
            "Application Security",
            "Monitoring & Observability"],
        featured: true,
    },
    {
        id: 3,
        title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
        subtitle: "Udemy · 2023",
        description:
            "Enhanced my Java expertise through comprehensive training in Spring Boot 3 and Spring Framework 6, covering Spring Core, Spring MVC, RESTful CRUD APIs, " +
            "Spring Security (with encrypted passwords), Hibernate/JPA CRUD and advanced mappings, Spring Data JPA/REST, Thymeleaf, and AOP. Developed several real-time " +
            "projects from scratch, including secure REST APIs, MVC CRUD applications, and full OpenAPI/Swagger documentation integrated with MySQL.",
        tools: ["Java",
            "Spring Boot 3",
            "Spring Framework 6",
            "Spring Core",
            "Spring MVC",
            "REST API",
            "Spring Security",
            "Hibernate",
            "JPA",
            "Spring Data JPA",
            "Spring Data REST",
            "Thymeleaf",
            "AOP (Aspect-Oriented Programming)",
            "OpenAPI",
            "Swagger",
            "Maven",
            "MySQL"],
        featured: true,
    },
    {
        id: 4,
        title: "Java Data Structures & Algorithms",
        subtitle: "Udemy · 2023",
        description: "Strengthened foundational problem-solving skills by learning how core data structures and algorithms work under the hood. This included analyzing time and " +
            "space complexity, implementing classical algorithms, and applying them in multiple coding challenges designed to improve logical reasoning.",
        tools: [
            "Java",
            "Data Structures",
            "Algorithms",
            "Big-O Complexity"],
    },
    {
        id: 5,
        title: "Complete C# Masterclass",
        subtitle: "Udemy · 2023",
        description: "Expanded my knowledge of C# and the .NET ecosystem through hands-on projects, acquiring practical experience in object-oriented programming, application " +
            "architecture, and UI development. The course also introduced game development workflows and desktop application design.",
        tools: [
            "C#",
            ".NET",
            "OOP",
            "ASP.NET",
            "WPF",
            "Unity3D"],
    },
    {
        id: 6,
        title: "Python for Everybody",
        subtitle: "Coursera · 2021",
        description: "Built a strong foundation in Python programming, covering everything from scripting fundamentals to working with real data. Gained experience with REST APIs, " +
            "data analysis techniques, and SQL integration, enabling me to work with end-to-end Python applications.",
        tools: [
            "Python",
            "REST APIs",
            "Data analysis",
            "OOP",
            "SQL",
            "ORM"],
    },
    {
        id: 7,
        title: "Machine Learning",
        subtitle: "Coursera · 2021",
        description: "Developed a working understanding of machine learning concepts using Python, exploring supervised and unsupervised learning, neural networks, and common AI " +
            "workflows. Gained practical experience training models, evaluating performance, and experimenting with modern ML techniques.",
        tools: [
            "Python",
            "Machine Learning (Supervised & Unsupervised)",
            "AI fundamentals",
            "Deep Learning",
            "ML algorithms",
            "ML workflows"],
    }
];

const achievements: Achievement[] = [
    {
        id: 1,
        title: "Detection of Landmarks in X-Ray Images through Deep Learning",
        subtitle: "Published in Springer",
        linkUrl: "https://www.springerprofessional.de/en/detection-of-landmarks-in-x-ray-images-through-deep-learning/27270288",
        linkLabel: "View publication",
    },
];

const featuredCertificates = certificates.filter((c) => c.featured);
const featuredProjects = projects.filter((p) => p.featured);
const homepageProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);

function App() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "dark";
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") return stored as Theme;
        return "dark";
    });
    const [activePanel, setActivePanel] = useState<ActivePanel>(null);
    const [previousPanel, setPreviousPanel] = useState<ActivePanel>(null);
    const [selectedJob, setSelectedJob] = useState<ExperienceDetailsPanelProps | null>(null);
    const [selectedProject, setSelectedProject] = useState<ProjectDetailsPanelProps | null>(null);
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [activeTech, setActiveTech] = useState<TechInfo | null>(null);

    const openPanel = (panel: ActivePanel) => setActivePanel(panel);
    const openProject = (project: Project) => {
        setSelectedProject(project);
        setActivePanel("project");
    };
    const closePanel = () => {
        setActivePanel(null);
        setSelectedJob(null);
        setSelectedProject(null);
        setSelectedCertificate(null);
        setPreviousPanel(null);
    }

    useEffect(() => {
        const body = document.body;
        body.classList.remove("theme-dark", "theme-light");
        body.classList.add(theme === "light" ? "theme-light" : "theme-dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        if (activePanel) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [activePanel]);

    const handleOverlayBackgroundClick = () => {
        if (activePanel === "project" && previousPanel === "projectsAll") {
            setActivePanel("projectsAll");
            setSelectedProject(null);
            setPreviousPanel(null);
            return;
        }

        if (activePanel === "certificate" && previousPanel === "certificatesAll") {
            setActivePanel("certificatesAll");
            setSelectedCertificate(null);
            setPreviousPanel(null);
            return;
        }

        closePanel();
    };

    const handleTechClick = (id: TechId) => {
        const info = techInfoById[id];
        if (info) setActiveTech(info);
    };

    return (
        <>
            <div className={`layout-root ${(activePanel || activeTech) ? "layout-root--blurred" : ""}`}>
                <div className="layout-grid">
                    <section className="layout-topbar">
                        <div className="layout-topbar-inner">
                            <IconBadge
                                icon={theme === "dark" ? <FaSun /> : <FaMoon />}
                                label={theme === "dark" ? "Light mode" : "Dark mode"}
                                onClick={toggleTheme}
                            />
                        </div>
                    </section>
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
                        <TechStackPanel
                            onExpand={() => openPanel("tech")}
                            onTechClick={handleTechClick}
                        />
                    </section>

                    <section className="panel panel-education">
                        <EducationPanel onExpand={() => openPanel("education")} />
                    </section>

                    <section className="panel panel-projects">
                        <ProjectPanel
                            projects={homepageProjects}
                            onProjectClick={openProject}
                            onViewAllClick={() => openPanel("projectsAll")}
                        />
                    </section>


                    <section className="panel panel-certificates">
                        <CertificatePanel
                            certificates={featuredCertificates}
                            onCertificateClick={(certificate) => {
                                setSelectedCertificate(certificate);
                                openPanel("certificate");
                            }}
                            onViewAllClick={() => openPanel("certificatesAll")}
                        />
                    </section>

                    <section className="panel panel-achievements">
                        <AchievementPanel achievements={achievements} />
                    </section>

                </div>
            </div>

            {activePanel && (
                <div className="panel-overlay" onClick={handleOverlayBackgroundClick}>

                    <div
                        className={
                            "panel-overlay-content" +
                            ((activePanel === "experience" ||
                                activePanel === "tech" ||
                                activePanel === "education" ||
                                activePanel === "project" ||
                                activePanel === "projectsAll" ||
                                activePanel === "certificate" ||
                                activePanel === "certificatesAll")
                                ? " panel-overlay-content--tallHeader"
                                : "")
                        }
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="tech-mini-close tech-mini-close--overlay"
                            onClick={closePanel}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="panel-overlay-scroll">
                            {activePanel === "about" && <AboutMePanel />}
                            {activePanel === "tech" && <TechStackDetailsPanel onTechClick={handleTechClick} />}
                            {activePanel === 'experience' && selectedJob && (
                                <ExperienceDetailsPanel {...selectedJob} />
                            )}
                            {activePanel === "education" && <EducationDetailsPanel />}
                            {activePanel === "project" && selectedProject && (
                                <ProjectDetailsPanel {...selectedProject} />
                            )}
                            {activePanel === "projectsAll" && (
                                <ProjectPanel
                                    projects={projects}
                                    onProjectClick={(project) => {
                                        setPreviousPanel("projectsAll");
                                        openProject(project);
                                    }}
                                    title="Personal Projects"
                                />
                            )}
                            {activePanel === "certificate" && selectedCertificate && (
                                <CertificateDetailsPanel {...selectedCertificate} />
                            )}
                            {activePanel === "certificatesAll" && (
                                <CertificatePanel
                                    certificates={certificates}
                                    onCertificateClick={(certificate) => {
                                        setPreviousPanel("certificatesAll");
                                        setSelectedCertificate(certificate);
                                        openPanel("certificate");
                                    }}
                                    title="Certificates"
                                />
                            )}
                        </div>
                    </div>
                </div >
            )
            }
            {activeTech && (
                <TechMiniCard tech={activeTech} onClose={() => setActiveTech(null)} />
            )}

        </>
    )
}

export default App
