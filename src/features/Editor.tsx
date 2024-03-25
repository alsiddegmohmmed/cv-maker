import { type ReactElement } from 'react';

import { EditorPersonal } from '@/components/editor/EditorPersonal.tsx';
import { EditorCertification } from '@/components/editor/content/EditorCertification.tsx';
import { EditorEducation } from '@/components/editor/content/EditorEducation.tsx';
import { EditorExperience } from '@/components/editor/content/EditorExperience.tsx';

export const Editor = (): ReactElement => (
  <section>
    <form noValidate>
      <EditorPersonal />
      <EditorExperience />
      <EditorEducation />
      <EditorCertification />
    </form>
  </section>
);
