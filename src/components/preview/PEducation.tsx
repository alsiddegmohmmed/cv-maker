import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PEducation = (): ReactElement => {
  const { education } = useStore();

  const hasEducation = education.length > 0;

  return (
    <div className='content complex'>
      {hasEducation && (
        <>
          <h1>EDUCATION</h1>

          {education.map(education => (
            <div key={education.id}>
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
        </>
      )}
    </div>
  );
};
