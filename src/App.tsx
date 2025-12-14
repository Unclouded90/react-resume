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
import { CertificateDetailsPanel } from './components/CertificateDetailsPanel';
import { AchievementPanel } from './components/AchievementPanel';
import { TechMiniCard } from "./components/TechMiniCard";
import { techInfoById, type TechId, type TechInfo } from "./data/TechData";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconBadge } from "./components/IconBadge";
import { jobs, type Job } from "./data/JobsData";
import { projects, type Project } from './data/ProjectsData';
import { certificates, type Certificate } from './data/CertificatesData';
import { achievements } from './data/AchievementsData';
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

type UiHistoryState = {
    __ui?: true;
    panel: ActivePanel;
    jobId: number | null;
    projectId: number | null;
    certificateId: number | null;
    techId: TechId | null;
};

const UI_STATE_DEFAULT: UiHistoryState = {
    __ui: true,
    panel: null,
    jobId: null,
    projectId: null,
    certificateId: null,
    techId: null,
};

function getUiState(): UiHistoryState {
    const s = window.history.state as UiHistoryState | null;
    if (s && s.__ui) return s;
    return UI_STATE_DEFAULT;
}

function replaceUiState(next: UiHistoryState) {
    window.history.replaceState(next, "", window.location.href);
}

function pushUiState(next: UiHistoryState) {
    window.history.pushState(next, "", window.location.href);
}

const jobsById = new Map<number, Job>(jobs.map((j) => [j.id, j]));
const projectsById = new Map<number, Project>(projects.map((p) => [p.id, p]));
const certsById = new Map<number, Certificate>(certificates.map((c) => [c.id, c]));

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
    const [selectedJob, setSelectedJob] = useState<ExperienceDetailsPanelProps | null>(null);
    const [selectedProject, setSelectedProject] = useState<ProjectDetailsPanelProps | null>(null);
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [activeTech, setActiveTech] = useState<TechInfo | null>(null);

    useEffect(() => {
        const s = window.history.state as UiHistoryState | null;
        if (!s || !s.__ui) {
            replaceUiState(UI_STATE_DEFAULT);
        }

        const onPopState = () => {
            const ui = getUiState();
            setActivePanel(ui.panel);
            setSelectedJob(ui.jobId ? jobsById.get(ui.jobId) ?? null : null);
            setSelectedProject(ui.projectId ? projectsById.get(ui.projectId) ?? null : null);
            setSelectedCertificate(ui.certificateId ? certsById.get(ui.certificateId) ?? null : null);
            setActiveTech(ui.techId ? techInfoById[ui.techId] ?? null : null);
        };

        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    useEffect(() => {
        const body = document.body;
        body.classList.remove("theme-dark", "theme-light");
        body.classList.add(theme === "light" ? "theme-light" : "theme-dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    useEffect(() => {
        if (activePanel || activeTech) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [activePanel, activeTech]);

    const closeOverlayViaHistory = () => {
        const ui = getUiState();
        if (ui.panel !== null || ui.techId !== null) window.history.back();
    };

    const openPanel = (panel: ActivePanel) => {
        const current = getUiState();
        pushUiState({
            __ui: true,
            panel,
            jobId: current.jobId,
            projectId: current.projectId,
            certificateId: current.certificateId,
            techId: null,
        });
        setActivePanel(panel);
        setActiveTech(null);
    };

    const openExperience = (jobId: number) => {
        pushUiState({
            __ui: true,
            panel: "experience",
            jobId,
            projectId: null,
            certificateId: null,
            techId: null,
        });
        setSelectedJob(jobsById.get(jobId) ?? null);
        setSelectedProject(null);
        setSelectedCertificate(null);
        setActivePanel("experience");
        setActiveTech(null);
    };

    const openProjectById = (projectId: number) => {
        pushUiState({
            __ui: true,
            panel: "project",
            jobId: null,
            projectId,
            certificateId: null,
            techId: null,
        });
        setSelectedProject(projectsById.get(projectId) ?? null);
        setSelectedJob(null);
        setSelectedCertificate(null);
        setActivePanel("project");
        setActiveTech(null);
    };

    const openCertificateById = (certificateId: number) => {
        pushUiState({
            __ui: true,
            panel: "certificate",
            jobId: null,
            projectId: null,
            certificateId,
            techId: null,
        });
        setSelectedCertificate(certsById.get(certificateId) ?? null);
        setSelectedJob(null);
        setSelectedProject(null);
        setActivePanel("certificate");
        setActiveTech(null);
    };

    const handleOverlayBackgroundClick = () => closeOverlayViaHistory();

    const handleTechClick = (id: TechId) => {
        const info = techInfoById[id];
        if (!info) return;

        const current = getUiState();
        pushUiState({
            __ui: true,
            panel: current.panel,
            jobId: current.jobId,
            projectId: current.projectId,
            certificateId: current.certificateId,
            techId: id,
        });

        setActiveTech(info);
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

                    <section className="panel panel-header">
                        <HeaderPanel onExpand={() => openPanel("about")} />
                    </section>

                    <section className="panel panel-experience">
                        <ExperiencePanel onExpand={() => openExperience(1)} />
                    </section>

                    <section className="panel panel-techstack">
                        <TechStackPanel onExpand={() => openPanel("tech")} onTechClick={handleTechClick} />
                    </section>

                    <section className="panel panel-education">
                        <EducationPanel onExpand={() => openPanel("education")} />
                    </section>

                    <section className="panel panel-projects">
                        <ProjectPanel
                            projects={homepageProjects}
                            onProjectClick={(p) => openProjectById(p.id)}
                            onViewAllClick={() => openPanel("projectsAll")}
                        />
                    </section>

                    <section className="panel panel-certificates">
                        <CertificatePanel
                            certificates={featuredCertificates}
                            onCertificateClick={(c) => openCertificateById(c.id)}
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
                        <div className="panel-overlay-scroll">
                            <div className="panel-overlay-topbar">
                                <button
                                    className="tech-mini-close tech-mini-close--overlay tech-mini-close--inflow"
                                    onClick={closeOverlayViaHistory}
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            {activePanel === "about" && <AboutMePanel />}
                            {activePanel === "tech" && <TechStackDetailsPanel onTechClick={handleTechClick} />}
                            {activePanel === "experience" && selectedJob && <ExperienceDetailsPanel {...selectedJob} />}
                            {activePanel === "education" && <EducationDetailsPanel />}

                            {activePanel === "project" && selectedProject && <ProjectDetailsPanel {...selectedProject} />}

                            {activePanel === "projectsAll" && (
                                <ProjectPanel
                                    projects={projects}
                                    onProjectClick={(p) => openProjectById(p.id)}
                                    title="Personal Projects"
                                />
                            )}

                            {activePanel === "certificate" && selectedCertificate && (
                                <CertificateDetailsPanel {...selectedCertificate} />
                            )}

                            {activePanel === "certificatesAll" && (
                                <CertificatePanel
                                    certificates={certificates}
                                    onCertificateClick={(c) => openCertificateById(c.id)}
                                    title="Certificates"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {activeTech && <TechMiniCard tech={activeTech} onClose={closeOverlayViaHistory} />}
        </>
    );
}

export default App
