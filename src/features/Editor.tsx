import { type ReactElement } from 'react';

import { Actions } from '@/components/Actions.tsx';
import { ECertifications } from '@/components/editor/ECertifications.tsx';
import { EEducation } from '@/components/editor/EEducation.tsx';
import { EExperience } from '@/components/editor/EExperience.tsx';
import { EPerson } from '@/components/editor/EPerson.tsx';
import { EProjects } from '@/components/editor/EProjects.tsx';
import { ESkills } from '@/components/editor/ESkills.tsx';

export const Editor = ({
  printRef
}: {
  printRef: React.RefObject<HTMLElement>;
}): ReactElement => (
  <section id='editor'>
    <form noValidate>
      <EPerson />
      <EExperience />
      <EEducation />
      <ESkills />
      <EProjects />
      <ECertifications />
      <Actions printRef={printRef} />
    </form>
  </section>
);
