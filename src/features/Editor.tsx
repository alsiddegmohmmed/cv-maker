import { type ReactElement } from 'react';

import { EditorPersonal } from '@/components/editor/EditorPersonal.tsx';
import { EditorExperience } from '@/components/editor/content/EditorExperience.tsx';

export const Editor = (): ReactElement => (
  <section>
    <form noValidate>
      <EditorPersonal />
      <EditorExperience />
    </form>
  </section>
);
