import { type ReactElement } from 'react';

import { Personal } from '@/components/preview/Personal.tsx';
import { Education } from '@/components/preview/expertise/Education.tsx';
import { Experience } from '@/components/preview/expertise/Experience.tsx';
import { Projects } from '@/components/preview/expertise/Projects.tsx';
import { Certifications } from '@/components/preview/proficiency/Certifications.tsx';
import { Skills } from '@/components/preview/proficiency/Skills.tsx';

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
