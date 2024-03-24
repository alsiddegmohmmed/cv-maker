import { type StateCreator } from 'zustand';

// const WORKPLACES = [
//   {
//     employer: 'AI Solutions',
//     position: 'Front End Developer',
//     location: 'Baku, Azerbaijan',
//     startDate: '2023-01',
//     endDate: '2023-06',
//     descriptions: [
//       'Developed the interface of the cross-platform smart home mobile app "BHouse" using React Native and TypeScript.',
//       'Integrated the client-side app with the .Net Back End using Redux Toolkit Query.'
//     ]
//   },
//   {
//     employer: 'Pasha Bank',
//     position: 'Front End Intern',
//     location: 'Baku, Azerbaijan',
//     startDate: '2022-08',
//     endDate: '2022-12',
//     descriptions: ['A Front End Intern at Pasha Bank, React and TypeScript.']
//   }
// ];

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
  addExperience: (experience: ExperienceDetails) => void;
  removeExperience: (id: string) => void;
  sortExperiences: (sortedExperiences: ExperienceDetails[]) => void;
}

const initialExperiences: ExperienceDetails[] = [];

const createExperienceSlice: StateCreator<ExperienceState> = set => ({
  experiences: initialExperiences,

  addExperience: (experience: ExperienceDetails): void => {
    set(state => ({
      experiences: [...state.experiences, experience]
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
