import { type ReactElement } from 'react';

export const Skills = (): ReactElement => {
  const SKILLSETS = {
    'Programming Languages': [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'CoffeeScript'
    ],
    'Libraries / Frameworks': [
      'jQuery',
      'React',
      'Redux',
      'Solid',
      'Mithril',
      'SCSS',
      'PostCSS',
      'Stylus',
      'Tailwind',
      'Bootstrap',
      'Chakra',
      'Node',
      'Jest'
    ],
    'Tools / Platforms': ['ESLint', 'Vite', 'webpack'],
    Databases: ['MongoDB']
  };

  return (
    <div id='skills' className='content'>
      <h1>SKILLS</h1>

      {Object.entries(SKILLSETS).map(([set, skills]) => (
        <div key={set}>
          <h2>{set}</h2>
          <p>
            {skills.map((skill, i) => (
              <span key={skill}>
                {skill}
                {i !== skills.length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};
