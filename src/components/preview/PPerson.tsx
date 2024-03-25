import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PPerson = (): ReactElement => {
  const { person } = useStore();

  const mailToUrl = 'mailto:' + person.email;

  const hasPersonInfo = Object.values(person).some(
    info => typeof info === 'string' && info.trim()
  );

  const hasLinkInfo = Object.values(person.links).some((link: string) =>
    link.trim()
  );

  return (
    <div id='person'>
      {(hasPersonInfo || hasLinkInfo) && (
        <>
          <h1>{person.name}</h1>
          <h2>{person.title}</h2>

          <h3>
            {person.email && (
              <a
                href={mailToUrl}
                title={mailToUrl}
                rel='noopener noreferrer nofollow'>
                {person.email}
              </a>
            )}{' '}
            {person.email && person.phone && ' | '}
            {person.phone}
          </h3>

          <h4>
            {Object.entries(person.links).map(
              ([site, link]: [string, string], i) => (
                <span key={site}>
                  {link.trim() && (
                    <a
                      href={link.trim()}
                      title={link.trim()}
                      rel='noopener noreferrer nofollow'>
                      {site}
                    </a>
                  )}
                  {i < Object.entries(person.links).length - 1 &&
                    link.trim() &&
                    ' | '}
                </span>
              )
            )}
          </h4>
          <hr />
        </>
      )}
    </div>
  );
};
