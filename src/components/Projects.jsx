import { PROJECTS } from '../constants/strings';
import SectionLabel from './SectionLabel';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className="projects">
      <div className="content-column">
        <header className="projects-header">
          <SectionLabel>software</SectionLabel>
          <h2>Selected projects</h2>
        </header>

        <div className="projects-grid">
          {PROJECTS.map(project => {
            const Tag = project.href ? 'a' : 'div';
            const linkProps = project.href
              ? {
                  href: project.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <Tag
                key={project.title}
                className={`project-card${project.href ? '' : ' project-card--static'}`}
                {...linkProps}
              >
                <h3>
                  {project.title}
                  {project.href && (
                    <span className="project-card-link-indicator" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Tag>
            );
          })}
        </div>
      </div>
    </div>
  );
}
