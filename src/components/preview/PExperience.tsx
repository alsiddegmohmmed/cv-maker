import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PExperience = (): ReactElement => {
  const { experience } = useStore();

  const hasExperience = experience.length > 0;

  return (
    <div className='content complex'>
      {hasExperience && (
        <>
          <h1>EXPERIENCE</h1>

          {experience.map(experience => (
            <div key={experience.id}>
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
