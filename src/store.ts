import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  type ExperienceState,
  createExperienceSlice
} from '@/slices/experienceSlice.ts';
import { type PersonState, createPersonSlice } from '@/slices/personSlice.ts';

export const useStore = create<PersonState & ExperienceState>()(
  persist(
    (...a) => ({
      ...createPersonSlice(...a),
      ...createExperienceSlice(...a)
    }),
    { name: 'store' }
  )
);
