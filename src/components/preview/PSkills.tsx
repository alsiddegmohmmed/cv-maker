import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

const SKILLSETS = {
  progLang: 'Programming Languages',
  libFrame: 'Libraries / Frameworks',
  toolPlat: 'Tools / Platforms',
  databases: 'Databases'
};

const PSkills = (): ReactElement => {
  const { skills } = useStore();

  const hasSkills = Object.values(skills).some(
    skill => typeof skill === 'string' && skill.trim()
  );

  return (
    <div className='content simple'>
      {hasSkills && (
        <>
          <h1>SKILLS</h1>

          {Object.entries(skills).map(([set, skills]: [string, string]) => (
            <div key={set}>
              {skills.trim() && (
                <>
                  <h2>{SKILLSETS[set as keyof typeof SKILLSETS]}</h2>
                  <p>{skills.trim()}</p>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export { SKILLSETS, PSkills };
