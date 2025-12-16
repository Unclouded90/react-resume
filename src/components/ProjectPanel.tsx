import "./ProjectPanel.css";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

type Project = {
    id: number;
    title: string;
    subtitle?: string;
};

type ProjectsPanelProps = {
    projects: Project[];
    onProjectClick: (project: Project) => void;
    onViewAllClick?: () => void;
    title?: string;
    t: (k: I18nKey) => string;
};

export function ProjectPanel({
    projects,
    onProjectClick,
    onViewAllClick,
    title,
    t,
}: ProjectsPanelProps) {
    return (
        <div className="projects-panel">
            <div className="projects-panel-header-row">
                <h2 className="projects-heading">{title ?? t(K.projects.title)}</h2>

                {onViewAllClick && (
                    <button
                        type="button"
                        className="projects-view-all-btn"
                        onClick={onViewAllClick}
                    >
                        {t(K.ui.viewAll)} →
                    </button>
                )}
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => onProjectClick(project)}
                    >
                        <h3 className="project-title">{project.title}</h3>
                        {project.subtitle && (
                            <p className="project-subtitle">{project.subtitle}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
