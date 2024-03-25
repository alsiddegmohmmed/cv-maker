import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PreviewProjects = (): ReactElement => {
  const { projects } = useStore();

  const hasProjects = projects.length > 0;

  return (
    <div id='projects' className='content'>
      {hasProjects && <h1>PROJECTS</h1>}

      {projects.map(project => (
        <div key={project.name}>
          <span>
            <h2>
              {project.name} |{' '}
              <a
                title={project.link}
                href={project.link}
                rel='noopener noreferrer nofollow'>
                Link
              </a>
            </h2>
            <h3>{project.stack}</h3>
          </span>

          <ul>
            {project.descriptions.map(description => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
