import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PreviewSkills = (): ReactElement => {
  const { skills } = useStore();

  const skillCategories = {
    progLang: 'Programming Languages',
    libFrame: 'Libraries / Frameworks',
    toolPlat: 'Tools / Platforms',
    databases: 'Databases'
  };

  const hasSkills = Object.values(skills).some(
    skill => typeof skill === 'string' && skill.trim()
  );

  return (
    <div id='skills' className='content'>
      {hasSkills && <h1>SKILLS</h1>}

      {Object.entries(skills).map(([set, skill]: [string, string]) => (
        <div key={set}>
          {skill.trim() && (
            <>
              <h2>{skillCategories[set as keyof typeof skillCategories]}</h2>
              <p>{skill}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
