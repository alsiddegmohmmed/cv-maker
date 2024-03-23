import { type ReactElement } from 'react';

import { PreviewPersonal } from '@/components/preview/PreviewPersonal.tsx';
import { PreviewCertifications } from '@/components/preview/content/PreviewCertifications.tsx';
import { PreviewEducation } from '@/components/preview/content/PreviewEducation.tsx';
import { PreviewExperience } from '@/components/preview/content/PreviewExperience.tsx';
import { PreviewProjects } from '@/components/preview/content/PreviewProjects.tsx';
import { PreviewSkills } from '@/components/preview/content/PreviewSkills.tsx';

export const Preview = (): ReactElement => (
  <main>
    <PreviewPersonal />
    <PreviewExperience />
    <PreviewEducation />
    <PreviewSkills />
    <PreviewProjects />
    <PreviewCertifications />
  </main>
);

/*
  <ReactToPrint
    trigger={() => <button>Print</button>}
    content={() => printRef}
    documentTitle='Eldar Pashazade CV'
    pageStyle='main {
      width: 100% !important;
      box-shadow: none !important;
      max-height: none !important;
      max-width: 100svw !important;
      min-height: 100svh !important;
    }'
  />
*/
