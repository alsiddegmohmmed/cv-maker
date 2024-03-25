import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  type CertificationState,
  createCertificationSlice
} from '@/slices/certificationSlice.ts';
import {
  type EducationState,
  createEducationSlice
} from '@/slices/educationSlice.ts';
import {
  type ExperienceState,
  createExperienceSlice
} from '@/slices/experienceSlice.ts';
import { type PersonState, createPersonSlice } from '@/slices/personSlice.ts';
import {
  type ProjectState,
  createProjectSlice
} from '@/slices/projectSlice.ts';
import { type SkillState, createSkillSlice } from '@/slices/skillSlice.ts';

const useSliceReset = new Set<() => void>();

const useResetStore = (): void => {
  useSliceReset.forEach(resetSlice => {
    resetSlice();
  });
};

const useStore = create<
  PersonState &
    ExperienceState &
    EducationState &
    SkillState &
    ProjectState &
    CertificationState
>()(
  persist(
    (...a) => ({
      ...createPersonSlice(...a),
      ...createExperienceSlice(...a),
      ...createEducationSlice(...a),
      ...createSkillSlice(...a),
      ...createProjectSlice(...a),
      ...createCertificationSlice(...a)
    }),
    { name: 'store' }
  )
);

export { useResetStore, useSliceReset, useStore };
