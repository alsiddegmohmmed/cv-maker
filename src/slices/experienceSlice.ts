import { type StateCreator } from 'zustand';

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
  experiences: ExperienceDetails[];
  addExperience: (newExperience: ExperienceDetails) => void;
  removeExperience: (id: string) => void;
  sortExperiences: (sortedExperiences: ExperienceDetails[]) => void;
}

const initialExperiences: ExperienceDetails[] = [];

const createExperienceSlice: StateCreator<ExperienceState> = set => ({
  experiences: initialExperiences,

  addExperience: (newExperience: ExperienceDetails): void => {
    set(state => ({
      experiences: [...state.experiences, newExperience]
    }));
  },

  removeExperience: (id: string): void => {
    set((state: ExperienceState) => ({
      experiences: state.experiences.filter(exp => exp.id !== id)
    }));
  },

  sortExperiences: (sortedExperiences: ExperienceDetails[]): void => {
    set({ experiences: sortedExperiences });
  }
});

export { type ExperienceDetails, type ExperienceState, createExperienceSlice };
