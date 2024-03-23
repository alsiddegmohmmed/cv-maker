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

      {Object.entries(SKILLSETS).map(([key, values]) => (
        <div key={key}>
          <h2>{key}</h2>
          <p>
            {values.map((value, index) => (
              <span key={value}>
                {value}
                {index !== values.length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};
