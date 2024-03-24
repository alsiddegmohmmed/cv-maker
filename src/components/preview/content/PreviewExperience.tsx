import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PreviewExperience = (): ReactElement => {
  const { experiences } = useStore();

  const hasExperiences = experiences.length > 0;

  return (
    <div id='experience' className='content'>
      {hasExperiences && <h1>EXPERIENCE</h1>}

      {experiences.map(experience => (
        <div key={experience.employer + experience.position}>
          <span>
            <h2>
              {experience.employer} | {experience.position}
            </h2>
            <h3>
              {experience.location} | {experience.startDate} -{' '}
              {experience.endDate || 'Present'}
            </h3>
          </span>

          <ul>
            {experience.descriptions.map(description => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
