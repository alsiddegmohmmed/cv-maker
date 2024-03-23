import { type ReactElement } from 'react';

import { Personal } from '@/components/preview/Personal.tsx';
import { Certifications } from '@/components/preview/content/Certifications.tsx';
import { Education } from '@/components/preview/content/Education.tsx';
import { Experience } from '@/components/preview/content/Experience.tsx';
import { Projects } from '@/components/preview/content/Projects.tsx';
import { Skills } from '@/components/preview/content/Skills.tsx';

export const Preview = (): ReactElement => (
  <main>
    <Personal />
    <Experience />
    <Education />
    <Skills />
    <Projects />
    <Certifications />
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
