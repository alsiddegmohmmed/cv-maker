import { type StateCreator } from 'zustand';

import { useSliceReset } from '@/store.ts';

interface EducationDetails {
  id: string;
  college: string;
  major: string;
  degree: string;
  startYear: string;
  endYear: string;
}

interface EducationState {
  education: EducationDetails[];
  sortEducation: (sortedEducation: EducationDetails[]) => void;
  addEducation: (newEducation: EducationDetails) => void;
  removeEducation: (id: string) => void;
}

const initialEducation: EducationDetails[] = [];

const createEducationSlice: StateCreator<EducationState> = set => (
  useSliceReset.add(() => {
    set({ education: initialEducation });
  }),
  {
    education: initialEducation,
    sortEducation: (sortedEducation: EducationDetails[]): void => {
      set({ education: sortedEducation });
    },

    addEducation: (newEducation: EducationDetails): void => {
      set(state => ({
        education: [...state.education, newEducation]
      }));
    },

    removeEducation: (id: string): void => {
      set((state: EducationState) => ({
        education: state.education.filter(education => education.id !== id)
      }));
    }
  }
);

export { type EducationDetails, type EducationState, createEducationSlice };
