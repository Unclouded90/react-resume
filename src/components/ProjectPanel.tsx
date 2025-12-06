import './ProjectPanel.css';

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
};

export function ProjectPanel({
    projects,
    onProjectClick,
    onViewAllClick,
    title = "Personal Projects",
}: ProjectsPanelProps) {
    return (
        <div className="projects-panel">
            <div className="projects-panel-header-row">
                <h2 className="projects-heading">{title}</h2>

                {onViewAllClick && (
                    <button
                        type="button"
                        className="projects-view-all-btn"
                        onClick={onViewAllClick}
                    >
                        View all
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
