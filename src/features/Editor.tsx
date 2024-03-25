import { type ReactElement } from 'react';
import { ReactToPrint } from 'react-to-print';

import { EditorPersonal } from '@/components/editor/EditorPersonal.tsx';
import { EditorCertification } from '@/components/editor/content/EditorCertification.tsx';
import { EditorEducation } from '@/components/editor/content/EditorEducation.tsx';
import { EditorExperience } from '@/components/editor/content/EditorExperience.tsx';
import { EditorProjects } from '@/components/editor/content/EditorProjects.tsx';
import { EditorSkill } from '@/components/editor/content/EditorSkill.tsx';
import { useResetStore } from '@/store.ts';

export const Editor = ({
  printRef
}: {
  printRef: React.RefObject<HTMLElement>;
}): ReactElement => {
  return (
    <section>
      <form noValidate>
        <EditorPersonal />
        <EditorExperience />
        <EditorEducation />
        <EditorSkill />
        <EditorProjects />
        <EditorCertification />
        <button
          type='button'
          id='reset-btn'
          className='editor-action'
          onClick={useResetStore}>
          Reset
        </button>
        <ReactToPrint
          trigger={() => (
            <button type='button' id='download-btn' className='editor-action'>
              Download
            </button>
          )}
          content={() => printRef.current}
          documentTitle='Eldar Pashazade CV'
          pageStyle='main {
            width: 100% !important;
            box-shadow: none !important;
            max-height: none !important;
            max-width: 100svw !important;
            min-height: 100svh !important;
          }'
        />
      </form>
    </section>
  );
};
