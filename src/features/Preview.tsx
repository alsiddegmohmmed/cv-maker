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
    pageStyle='main{width:100%!important;max-width:100svw!important;height:100svh!important}'
    trigger={() => <button>Download</button>}
    content={() => printRef}
    documentTitle='CV'
  />
*/
