import { type ReactElement } from 'react';

export const Personal = (): ReactElement => {
  const PERSONAL_DETAILS = {
    name: 'Eldar Pashazade',
    title: 'Front End Developer',
    email: 'oooooooooooo@oooo.com',
    phone: '+994 50 000 00 00',
    links: {
      Portfolio: 'https://eldarlrd.github.io/portfolio',
      GitHub: 'https://github.com/eldarlrd',
      LinkedIn: 'https://linkedin.com/in/eldarlrd'
    }
  };

  const mailToUrl = 'mailto:' + PERSONAL_DETAILS.email;

  return (
    <div id='personal'>
      <h1>{PERSONAL_DETAILS.name}</h1>
      <h2>{PERSONAL_DETAILS.title}</h2>

      <h3>
        <a
          href={mailToUrl}
          title={mailToUrl}
          rel='noopener noreferrer nofollow'>
          {PERSONAL_DETAILS.email}
        </a>{' '}
        | {PERSONAL_DETAILS.phone}
      </h3>

      <h4>
        {Object.entries(PERSONAL_DETAILS.links).map(([site, link], i) => (
          <span key={site}>
            <a title={link} href={link} rel='noopener noreferrer nofollow'>
              {site}
            </a>
            {i < Object.entries(PERSONAL_DETAILS.links).length - 1 && ' | '}
          </span>
        ))}
      </h4>
      <hr />
    </div>
  );
};
