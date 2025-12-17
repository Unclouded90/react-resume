import { useState, useEffect, useMemo, useRef } from "react";
import { AboutMePanel } from "./components/AboutMePanel";
import { HeaderPanel } from "./components/HeaderPanel";
import { TechStackPanel } from "./components/TechStackPanel";
import { TechStackDetailsPanel } from "./components/TechStackDetailsPanel";
import { ExperiencePanel } from "./components/ExperiencePanel";
import {
    ExperienceDetailsPanel,
    type ExperienceDetailsPanelProps,
} from "./components/ExperienceDetailsPanel";
import { EducationPanel } from "./components/EducationPanel";
import { EducationDetailsPanel } from "./components/EducationDetailsPanel";
import { ProjectPanel } from "./components/ProjectPanel";
import {
    ProjectDetailsPanel,
    type ProjectDetailsPanelProps,
} from "./components/ProjectDetailsPanel";
import { CertificatePanel } from "./components/CertificatePanel";
import { CertificateDetailsPanel } from "./components/CertificateDetailsPanel";
import { AchievementPanel } from "./components/AchievementPanel";
import { TechMiniCard } from "./components/TechMiniCard";
import { techInfoById, type TechId, type TechInfoData } from "./data/TechData";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconBadge } from "./components/IconBadge";
import { jobs, type Job } from "./data/JobsData";
import { projects, type ProjectData } from "./data/ProjectsData";
import { certificates, type Certificate } from "./data/CertificatesData";
import type { Achievement } from "./components/AchievementPanel";
import type { AchievementData } from "./data/AchievementsData";
import { achievements as achievementsData } from "./data/AchievementsData";
import { getInitialLocale, setStoredLocale, type Locale } from "./i18n/locales";
import { createT } from "./i18n";
import { K, type I18nKey } from "./i18n/keys";

import "./App.css";

type Theme = "dark" | "light";

type ActivePanel =
    | "about"
    | "experience"
    | "tech"
    | "education"
    | "project"
    | "projectsAll"
    | "certificate"
    | "certificatesAll"
    | null;

type UiHistoryState = {
    __ui: true;
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
    if (s && s.__ui === true) return s;
    return UI_STATE_DEFAULT;
}

function replaceUiState(next: UiHistoryState) {
    window.history.replaceState(next, "", window.location.href);
}

function pushUiState(next: UiHistoryState) {
    window.history.pushState(next, "", window.location.href);
}

function jobToPanelProps(
    job: Job,
    t: (k: I18nKey) => string
): ExperienceDetailsPanelProps {
    return {
        title: t(job.titleKey),
        companyName: t(job.companyNameKey),
        companyUrl: job.companyUrl,
        dates: t(job.datesKey),
        description: t(job.descriptionKey),
        bullets: job.bulletKeys?.map((k) => t(k)) ?? [],
        tech: job.tech,
    };
}

function projectToPanelProps(
    p: ProjectData,
    t: (k: I18nKey) => string
): ProjectDetailsPanelProps {
    return {
        title: t(p.titleKey),
        subtitle: p.subtitleKey ? t(p.subtitleKey) : undefined,
        description: p.descriptionKey ? t(p.descriptionKey) : undefined,
        tech: p.tech,
        githubUrl: p.githubUrl,
        extraDetails: p.extraDetailsKey?.map(t) ?? [],
    };
}

function achievementToProps(
    a: AchievementData,
    t: (k: I18nKey) => string
): Achievement {
    return {
        id: a.id,
        title: t(a.titleKey),
        subtitle: t(a.subtitleKey),
        linkUrl: a.linkUrl,
        linkLabel: t(a.linkLabelKey),
    };
}

const jobsById = new Map<number, Job>(jobs.map((j) => [j.id, j]));
const certsById = new Map<number, Certificate>(certificates.map((c) => [c.id, c]));

const projectsById = new Map<number, ProjectData>(projects.map((p) => [p.id, p]));
const featuredCertificates = certificates.filter((c) => c.featured);

function App() {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("theme");
        return stored === "light" || stored === "dark" ? (stored as Theme) : "dark";
    });

    const [locale, setLocale] = useState<Locale>(() => getInitialLocale());
    const t = useMemo(() => createT(locale), [locale]);

    const tRef = useRef(t);
    useEffect(() => {
        tRef.current = t;
    }, [t]);

    const [uiState, setUiState] = useState<UiHistoryState>(() => {
        const s = window.history.state as UiHistoryState | null;
        if (!s || s.__ui !== true) {
            replaceUiState(UI_STATE_DEFAULT);
            return UI_STATE_DEFAULT;
        }
        return s;
    });

    const [langOpen, setLangOpen] = useState(false);

    const setLanguage = (next: Locale) => {
        setLocale(next);
        setStoredLocale(next);
        setLangOpen(false);
    };

    useEffect(() => {
        if (!langOpen) return;

        const onDown = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".lang-select")) setLangOpen(false);
        };

        window.addEventListener("mousedown", onDown);
        return () => window.removeEventListener("mousedown", onDown);
    }, [langOpen]);

    useEffect(() => {
        if (!langOpen) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLangOpen(false);
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [langOpen]);

    useEffect(() => {
        const onPopState = () => setUiState(getUiState());
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

    const activePanel = uiState.panel;
    const activeTech: TechInfoData | null = uiState.techId ? techInfoById[uiState.techId] ?? null : null;

    const selectedProject: ProjectDetailsPanelProps | null = useMemo(() => {
        if (uiState.panel !== "project") return null;
        if (!uiState.projectId) return null;
        const p = projectsById.get(uiState.projectId);
        return p ? projectToPanelProps(p, t) : null;
    }, [uiState.panel, uiState.projectId, t]);

    const selectedCertificate: Certificate | null = useMemo(() => {
        return uiState.certificateId ? certsById.get(uiState.certificateId) ?? null : null;
    }, [uiState.certificateId]);

    const experienceProps: ExperienceDetailsPanelProps | null = useMemo(() => {
        if (uiState.panel !== "experience") return null;
        if (!uiState.jobId) return null;
        const job = jobsById.get(uiState.jobId);
        if (!job) return null;
        return jobToPanelProps(job, t);
    }, [uiState.panel, uiState.jobId, t]);

    const translatedProjects = useMemo(() => {
        return projects.map((p) => ({
            id: p.id,
            title: t(p.titleKey),
            subtitle: p.subtitleKey ? t(p.subtitleKey) : undefined,
        }));
    }, [t]);

    const homepageProjects = useMemo(() => {
        const featured = projects.filter((p) => p.featured);
        const base = featured.length ? featured : projects.slice(0, 3);

        return base.map((p) => ({
            id: p.id,
            title: t(p.titleKey),
            subtitle: p.subtitleKey ? t(p.subtitleKey) : undefined,
        }));
    }, [t]);

    const translatedAchievements = useMemo(
        () => achievementsData.map((a) => achievementToProps(a, t)),
        [t]
    );

    useEffect(() => {
        if (uiState.panel || uiState.techId) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [uiState.panel, uiState.techId]);

    const closeOverlayViaHistory = () => {
        const ui = getUiState();
        if (ui.panel !== null || ui.techId !== null) window.history.back();
    };

    const commitUi = (next: UiHistoryState, push = true) => {
        if (push) pushUiState(next);
        else replaceUiState(next);
        setUiState(next);
    };

    const openPanel = (panel: ActivePanel) => {
        const current = getUiState();
        commitUi({
            __ui: true,
            panel,
            jobId: current.jobId,
            projectId: current.projectId,
            certificateId: current.certificateId,
            techId: null,
        });
    };

    const openExperience = (jobId: number) => {
        if (!jobsById.has(jobId)) return;
        commitUi({
            __ui: true,
            panel: "experience",
            jobId,
            projectId: null,
            certificateId: null,
            techId: null,
        });
    };

    const openProjectById = (projectId: number) => {
        commitUi({
            __ui: true,
            panel: "project",
            jobId: null,
            projectId,
            certificateId: null,
            techId: null,
        });
    };

    const openCertificateById = (certificateId: number) => {
        commitUi({
            __ui: true,
            panel: "certificate",
            jobId: null,
            projectId: null,
            certificateId,
            techId: null,
        });
    };

    const handleTechClick = (id: TechId) => {
        const info = techInfoById[id];
        if (!info) return;

        const current = getUiState();
        commitUi({
            __ui: true,
            panel: current.panel,
            jobId: current.jobId,
            projectId: current.projectId,
            certificateId: current.certificateId,
            techId: id,
        });
    };

    return (
        <>
            <div className={`layout-root ${(uiState.panel || uiState.techId) ? "layout-root--blurred" : ""}`}>
                <div className="layout-grid">
                    <section className="layout-topbar">
                        <div className="layout-topbar-inner">
                            <IconBadge
                                icon={theme === "dark" ? <FaSun /> : <FaMoon />}
                                label={theme === "dark" ? t(K.ui.lightMode) : t(K.ui.darkMode)}
                                onClick={toggleTheme}
                            />

                            <div className="lang-select">
                                <IconBadge
                                    icon={<span className={`fi ${locale === "pt" ? "fi-pt" : "fi-gb"} lang-flag`} aria-hidden="true" />}
                                    label={locale === "pt" ? "Português" : "English"}
                                    onClick={() => setLangOpen((v) => !v)}
                                />

                                {langOpen && (
                                    <div className="lang-menu" role="menu" aria-label="Language selector">
                                        <button
                                            className={"lang-item" + (locale === "en" ? " lang-item--active" : "")}
                                            onClick={() => setLanguage("en")}
                                            role="menuitem"
                                        >
                                            <span className="fi fi-gb lang-flag" aria-hidden="true" />
                                            <span className="lang-label">
                                                <span className="lang-name">English</span>
                                                <span className="lang-sub">United Kingdom</span>
                                            </span>
                                        </button>

                                        <button
                                            className={"lang-item" + (locale === "pt" ? " lang-item--active" : "")}
                                            onClick={() => setLanguage("pt")}
                                            role="menuitem"
                                        >
                                            <span className="fi fi-pt lang-flag" aria-hidden="true" />
                                            <span className="lang-label">
                                                <span className="lang-name">Português</span>
                                                <span className="lang-sub">Portugal</span>
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="panel panel-header">
                        <HeaderPanel onExpand={() => openPanel("about")} t={t} />
                    </section>

                    <section className="panel panel-experience">
                        <ExperiencePanel onExpand={() => openExperience(1)} t={t} />
                    </section>

                    <section className="panel panel-techstack">
                        <TechStackPanel onExpand={() => openPanel("tech")} onTechClick={handleTechClick} t={t} />
                    </section>

                    <section className="panel panel-education">
                        <EducationPanel onExpand={() => openPanel("education")} t={t} />
                    </section>

                    <section className="panel panel-projects">
                        <ProjectPanel
                            projects={homepageProjects}
                            onProjectClick={(p) => openProjectById(p.id)}
                            onViewAllClick={() => openPanel("projectsAll")}
                            t={t}
                        />
                    </section>

                    <section className="panel panel-certificates">
                        <CertificatePanel
                            certificates={featuredCertificates}
                            onCertificateClick={(c) => openCertificateById(c.id)}
                            onViewAllClick={() => openPanel("certificatesAll")}
                            t={t}
                        />
                    </section>

                    <section className="panel panel-achievements">
                        <AchievementPanel achievements={translatedAchievements} t={t} />
                    </section>
                </div>
            </div>

            {activePanel && (
                <div className="panel-overlay" onClick={closeOverlayViaHistory}>
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

                            {activePanel === "about" && <AboutMePanel t={t} />}
                            {activePanel === "tech" && <TechStackDetailsPanel onTechClick={handleTechClick} t={t} />}
                            {activePanel === "experience" && experienceProps &&
                                <ExperienceDetailsPanel {...experienceProps} t={t} onTechClick={handleTechClick} />}
                            {activePanel === "education" && <EducationDetailsPanel />}
                            {activePanel === "project" && selectedProject && <ProjectDetailsPanel {...selectedProject} t={t} />}

                            {activePanel === "projectsAll" && (
                                <ProjectPanel
                                    projects={translatedProjects}
                                    onProjectClick={(p) => openProjectById(p.id)}
                                    title={t(K.projects.title)}
                                    t={t}
                                />
                            )}

                            {activePanel === "certificate" && selectedCertificate && <CertificateDetailsPanel {...selectedCertificate} />}

                            {activePanel === "certificatesAll" && (
                                <CertificatePanel
                                    certificates={certificates}
                                    onCertificateClick={(c) => openCertificateById(c.id)}
                                    title="Certificates"
                                    t={t}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {activeTech && <TechMiniCard tech={activeTech} t={t} onClose={closeOverlayViaHistory} />}
        </>
    );
}

export default App;
