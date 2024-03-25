import { type StateCreator } from 'zustand';

import { useSliceReset } from '@/store.ts';

interface ExperienceDetails {
  id: string;
  employer: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

interface ExperienceState {
  experience: ExperienceDetails[];
  sortExperience: (sortedExperience: ExperienceDetails[]) => void;
  addExperience: (newExperience: ExperienceDetails) => void;
  removeExperience: (id: string) => void;
}

const initialExperience: ExperienceDetails[] = [];

const createExperienceSlice: StateCreator<ExperienceState> = set => (
  useSliceReset.add(() => {
    set({ experience: initialExperience });
  }),
  {
    experience: initialExperience,
    sortExperience: (sortedExperience: ExperienceDetails[]): void => {
      set({ experience: sortedExperience });
    },

    addExperience: (newExperience: ExperienceDetails): void => {
      set(state => ({
        experience: [...state.experience, newExperience]
      }));
    },

    removeExperience: (id: string): void => {
      set((state: ExperienceState) => ({
        experience: state.experience.filter(experience => experience.id !== id)
      }));
    }
  }
);

export { type ExperienceDetails, type ExperienceState, createExperienceSlice };
