import { type StateCreator } from 'zustand';

interface EducationDetails {
  id: string;
  college: string;
  major: string;
  degree: string;
  startYear: string;
  endYear: string;
}

interface EducationState {
  educations: EducationDetails[];
  addEducation: (newEducation: EducationDetails) => void;
  removeEducation: (id: string) => void;
  sortEducations: (sortedEducations: EducationDetails[]) => void;
}

const initialEducations: EducationDetails[] = [];

const createEducationSlice: StateCreator<EducationState> = set => ({
  educations: initialEducations,

  addEducation: (newEducation: EducationDetails): void => {
    set(state => ({
      educations: [...state.educations, newEducation]
    }));
  },

  removeEducation: (id: string): void => {
    set((state: EducationState) => ({
      educations: state.educations.filter(edu => edu.id !== id)
    }));
  },

  sortEducations: (sortedEducations: EducationDetails[]): void => {
    set({ educations: sortedEducations });
  }
});

export { type EducationDetails, type EducationState, createEducationSlice };
