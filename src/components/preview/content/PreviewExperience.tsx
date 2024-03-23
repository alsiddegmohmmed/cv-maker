import { DateTime } from 'luxon';
import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PreviewExperience = (): ReactElement => {
  const { experiences } = useStore();

  const formatDate = (dateStr: string): string =>
    DateTime.fromISO(dateStr).toFormat('MMM y');

  return (
    <div id='experience' className='content'>
      <h1>EXPERIENCE</h1>

      {experiences.map(experience => (
        <div key={experience.company + experience.position}>
          <span>
            <h2>
              {experience.company} | {experience.position}
            </h2>
            <h3>
              {experience.location} | {formatDate(experience.startDate)} -{' '}
              {experience.endDate ? formatDate(experience.endDate) : 'Present'}
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
