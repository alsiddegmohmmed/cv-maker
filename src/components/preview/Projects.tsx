import { type ReactElement } from 'react';

export const Projects = (): ReactElement => {
  const PROJECT_LIST = {
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
    <div id='projects'>
      <h1>Projects</h1>
    </div>
  );
};
