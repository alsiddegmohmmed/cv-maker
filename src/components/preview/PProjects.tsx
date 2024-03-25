import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PProjects = (): ReactElement => {
  const { projects } = useStore();

  const hasProjects = projects.length > 0;

  return (
    <div className='content complex'>
      {hasProjects && (
        <>
          <h1>PROJECTS</h1>

          {projects.map(project => (
            <div key={project.id}>
              <span>
                <h2>
                  {project.name} |{' '}
                  <a
                    href={project.link}
                    title={project.link}
                    rel='noopener noreferrer nofollow'>
                    Link
                  </a>
                </h2>

                <h3>{project.stack.trim()}</h3>
              </span>

              <ul>
                {project.descriptions.map(description => (
                  <li key={description}>{description.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
