import { type StateCreator } from 'zustand';

import { useSliceReset } from '@/store.ts';

interface ProjectDetails {
  id: string;
  projName: string;
  projLink: string;
  stack: string;
  projDescriptions: string[];
}

interface ProjectsState {
  projects: ProjectDetails[];
  sortProjects: (sortedProjects: ProjectDetails[]) => void;
  addProject: (newProject: ProjectDetails) => void;
  removeProject: (id: string) => void;
}

const initialProjects: ProjectDetails[] = [];

const createProjectsSlice: StateCreator<ProjectsState> = set => (
  useSliceReset.add(() => {
    set({ projects: initialProjects });
  }),
  {
    projects: initialProjects,
    sortProjects: (sortedProjects: ProjectDetails[]): void => {
      set({ projects: sortedProjects });
    },

    addProject: (newProject: ProjectDetails): void => {
      set(state => ({
        projects: [...state.projects, newProject]
      }));
    },

    removeProject: (id: string): void => {
      set((state: ProjectsState) => ({
        projects: state.projects.filter(project => project.id !== id)
      }));
    }
  }
);

export { type ProjectDetails, type ProjectsState, createProjectsSlice };
