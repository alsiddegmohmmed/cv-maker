import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { type PersonState, createPersonSlice } from '@/slices/personSlice.ts';

export const useStore = create<PersonState>()(
  persist(
    (...a) => ({
      ...createPersonSlice(...a)
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
