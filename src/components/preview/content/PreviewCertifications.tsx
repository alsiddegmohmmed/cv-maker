import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const PreviewCertifications = (): ReactElement => {
  const { certifications } = useStore();

  const hasCertifications = certifications.length > 0;

  return (
    <div className='content simple'>
      {hasCertifications && <h1>CERTIFICATIONS</h1>}

      <ul>
        {certifications.map(certification => (
          <li key={certification.title + certification.issuer}>
            {certification.title} -{' '}
            <a
              title={certification.link}
              href={certification.link}
              rel='noopener noreferrer nofollow'>
              {certification.issuer}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
