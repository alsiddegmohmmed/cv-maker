import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PreviewEducation = (): ReactElement => {
  const { educations } = useStore();

  const hasEducations = educations.length > 0;

  return (
    <div className='content complex'>
      {hasEducations && <h1>EDUCATION</h1>}

      {educations.map(education => (
        <div key={education.college + education.major}>
          <span>
            <h2>{education.college}</h2>
            <h3>
              {education.startYear} - {education.endYear || 'Present'}
            </h3>
          </span>

          <p>
            {education.major} {education.degree}
          </p>
        </div>
      ))}
    </div>
  );
};
