import { type ReactElement } from 'react';

import { Personal } from '@/components/preview/Personal.tsx';
import { Skills } from '@/components/preview/Skills.tsx';
import { Education } from '@/components/preview/expertise/Education.tsx';
import { Experience } from '@/components/preview/expertise/Experience.tsx';
import { Projects } from '@/components/preview/Projects.tsx';

export const Preview = (): ReactElement => (
  <main>
    <Personal />
    <Experience />
    <Education />
    <Skills />
    <Projects />
  </main>
);
