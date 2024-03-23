import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PreviewPersonal = (): ReactElement => {
  const { person } = useStore();

  const mailToUrl = 'mailto:' + person.email;

  return (
    <div id='personal'>
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>

      <h3>
        <a
          href={mailToUrl}
          title={mailToUrl}
          rel='noopener noreferrer nofollow'>
          {person.email}
        </a>
        {person.phone && ' | ' + person.phone}
      </h3>

      <h4>
        {Object.entries(person.links).map(([site, link], i) => (
          <span key={site}>
            <a title={link} href={link} rel='noopener noreferrer nofollow'>
              {link && site}
            </a>
            {i < Object.entries(person.links).length - 1 && link && ' | '}
          </span>
        ))}
      </h4>
      <hr />
    </div>
  );
};
