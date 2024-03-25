import { type ReactElement } from 'react';

import { PreviewPersonal } from '@/components/preview/PreviewPersonal.tsx';
import { PreviewCertifications } from '@/components/preview/content/PreviewCertifications.tsx';
import { PreviewEducation } from '@/components/preview/content/PreviewEducation.tsx';
import { PreviewExperience } from '@/components/preview/content/PreviewExperience.tsx';
import { PreviewProjects } from '@/components/preview/content/PreviewProjects.tsx';
import { PreviewSkills } from '@/components/preview/content/PreviewSkills.tsx';

export const Preview = ({
  printRef
}: {
  printRef: React.RefObject<HTMLElement>;
}): ReactElement => (
  <main id='preview' ref={printRef}>
    <PreviewPersonal />
    <PreviewExperience />
    <PreviewEducation />
    <PreviewSkills />
    <PreviewProjects />
    <PreviewCertifications />
  </main>
);
