import { type ReactElement } from 'react';

import { PCertifications } from '@/components/preview/PCertifications.tsx';
import { PEducation } from '@/components/preview/PEducation.tsx';
import { PExperience } from '@/components/preview/PExperience.tsx';
import { PPerson } from '@/components/preview/PPerson.tsx';
import { PProjects } from '@/components/preview/PProjects.tsx';
import { PSkills } from '@/components/preview/PSkills.tsx';

export const Preview = ({
  printRef
}: {
  printRef: React.RefObject<HTMLElement>;
}): ReactElement => (
  <main id='preview' ref={printRef}>
    <PPerson />
    <PExperience />
    <PEducation />
    <PSkills />
    <PProjects />
    <PCertifications />
  </main>
);
