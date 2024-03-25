import { type ReactElement } from 'react';

import { Actions } from '@/components/Actions.tsx';
import { EditorPersonal } from '@/components/editor/EditorPersonal.tsx';
import { EditorCertification } from '@/components/editor/content/EditorCertification.tsx';
import { EditorEducation } from '@/components/editor/content/EditorEducation.tsx';
import { EditorExperience } from '@/components/editor/content/EditorExperience.tsx';
import { EditorProjects } from '@/components/editor/content/EditorProjects.tsx';
import { EditorSkill } from '@/components/editor/content/EditorSkill.tsx';

export const Editor = ({
  printRef
}: {
  printRef: React.RefObject<HTMLElement>;
}): ReactElement => (
  <section>
    <form noValidate>
      <EditorPersonal />
      <EditorExperience />
      <EditorEducation />
      <EditorSkill />
      <EditorProjects />
      <EditorCertification />
      <Actions printRef={printRef} />
    </form>
  </section>
);
