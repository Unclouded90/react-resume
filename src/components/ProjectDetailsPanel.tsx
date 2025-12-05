import './CenteredPanel.css';

export type ProjectDetailsPanelProps = {
  title: string;
  subtitle?: string;
  description?: string;
  tech?: string[];
};

export function ProjectDetailsPanel({
  title,
  subtitle,
  description,
  tech = [],
}: ProjectDetailsPanelProps) {
  return (
    <div className="centered-panel experience-panel">
      <div className="exp-card exp-card--header">
        <h2 className="exp-position">{title}</h2>
        {subtitle && (
          <p className="exp-company-dates">
            <span className="exp-company">{subtitle}</span>
          </p>
        )}
      </div>

      {description && (
        <div className="exp-card">
          <h3 className="exp-section-title">Description</h3>
          {description && <p className="exp-text">{description}</p>}
        </div>
      )}

      {(tech.length > 0) && (
        <div className="exp-card exp-card--tech">
          {tech.length > 0 && (
            <>
              <h3 className="exp-section-title">Tech</h3>
              <p className="exp-text">
                {tech.join(', ')}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
