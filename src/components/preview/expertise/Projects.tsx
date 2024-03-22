import { type ReactElement } from 'react';

export const Projects = (): ReactElement => {
  const PROJECT_LIST = [
    {
      name: 'JS Algorithms',
      link: 'https://eldarlrd.github.io/js-algorithms',
      stack: ['Preact', 'Chakra', 'JavaScript', 'TypeScript'],
      description:
        'A front end interface that comprises a component library, a syntax highlighter, and an intersection observer for a dynamic table of contents to display pure and interactive algorithms.'
    },
    {
      name: 'Todo List',
      link: 'https://eldarlrd.github.io/todo-list',
      stack: ['Preact', 'Redux', 'Tailwind', 'Vitest', 'TypeScript'],
      description:
        'A complex, project-based todo list that uses Preact, Redux, date-fns, Nano ID for keys, dnd kit for the sidebar vertical drag n’ drop, and focus traps for accessibility and keyboard crawl.'
    },
    {
      name: 'TS Battleship',
      link: 'https://eldarlrd.github.io/ts-battleship',
      stack: ['Solid', 'Emotion', 'Vite PWA', 'Vitest', 'TypeScript'],
      description:
        "A classic board game recreated in a digital format as a Progressive Web App using Solid & Emotion's CSS-in-JS. Game logic has been tested in Vitest with complete coverage."
    },
    {
      name: 'Fifteen Puzzle',
      link: 'https://eldarlrd.github.io/fifteen-puzzle',
      stack: ['Arrow', 'Tailwind', 'PostCSS', 'Vite PWA', 'TypeScript'],
      description:
        'A popular puzzle game now available as an installable PWA with a timer, a move counter, and a highlight for correct placements made with Arrow and Tailwind CSS.'
    }
  ];

  return (
    <div id='projects'>
      <h1>PROJECTS</h1>

      {PROJECT_LIST.map((project, index) => (
        <div key={index}>
          <span>
            <h2>
              {project.name} |{' '}
              <a
                title={project.link}
                href={project.link}
                rel='noopener noreferrer nofollow'>
                Link
              </a>
            </h2>
            <h3>
              {project.stack.map((value, index) => (
                <>
                  {value}
                  {index !== project.stack.length - 1 && ', '}
                </>
              ))}
            </h3>
          </span>

          <ul>
            <li>{project.description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
