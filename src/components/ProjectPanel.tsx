import './ProjectPanel.css';

type Project = {
  id: number;
  title: string;
  subtitle?: string;
};

type ProjectsPanelProps = {
  projects: Project[];
  onProjectClick: (project: Project) => void;
};

export function ProjectPanel({ projects, onProjectClick }: ProjectsPanelProps) {
  return (
    <div className="projects-panel">
      <h2 className="projects-heading">Personal Projects</h2>

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
