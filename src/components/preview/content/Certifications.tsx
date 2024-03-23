import { type ReactElement } from 'react';

export const Certifications = (): ReactElement => {
  const CERTIFICATES = [
    {
      title: 'Front End Development Libraries',
      link: 'https://freecodecamp.org/certification/eldarlrd/front-end-development-libraries',
      issuer: 'freeCodeCamp'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      link: 'https://freecodecamp.org/certification/eldarlrd/javascript-algorithms-and-data-structures',
      issuer: 'freeCodeCamp'
    },
    {
      title: 'Responsive Web Design',
      link: 'https://freecodecamp.org/certification/eldarlrd/responsive-web-design',
      issuer: 'freeCodeCamp'
    }
  ];

  return (
    <div id='certifications' className='content'>
      <h1>CERTIFICATIONS</h1>

      <ul>
        {CERTIFICATES.map(certificate => (
          <li key={certificate.title + certificate.issuer}>
            {certificate.title} -{' '}
            <a
              title={certificate.link}
              href={certificate.link}
              rel='noopener noreferrer nofollow'>
              {certificate.issuer}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
