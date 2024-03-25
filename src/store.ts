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

export const useStore = create<
  PersonState & ExperienceState & EducationState & CertificationState
>()(
  persist(
    (...a) => ({
      ...createPersonSlice(...a),
      ...createExperienceSlice(...a),
      ...createEducationSlice(...a),
      ...createCertificationSlice(...a)
    }),
    { name: 'store' }
  )
);
