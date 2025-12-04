import './ProjectsPanel.css';

type Project = {
  id: number;
  title: string;
  subtitle?: string;
};

const projects: Project[] = [
  { id: 1, title: 'NestJS API Template', subtitle: 'API starter with auth, Swagger, TypeORM & Docker' },
  { id: 2, title: 'Developer Portfolio', subtitle: 'React(Vite) + Typescript single-page CV' },
  { id: 3, title: 'Employee DB Manager', subtitle: 'Java Spring boot CRUD app for managing employees' },
  { id: 4, title: 'Event Ticketing Web App', subtitle: 'Python/Django platform for managing event ticket sales' },
  { id: 5, title: 'Currency Converter', subtitle: 'WPF App for live rates conversion' },
  { id: 6, title: 'Tic-Tac-Toe Game', subtitle: 'WPF game of Tic Tac Toe' },
  { id: 7, title: 'Pong Game', subtitle: '2D local-multiplayer Pong game' },
  { id: 8, title: 'Zig Zag Game', subtitle: '3D game using Unity3D ' },
  { id: 9, title: 'Fruit Ninja Game', subtitle: 'Unity game for slicing fruit while dodging the bombs' },
];

export function ProjectsPanel() {
  return (
    <div className="projects-panel">
      <h2 className="projects-heading">Personal Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
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
