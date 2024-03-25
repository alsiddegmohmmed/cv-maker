import { type StateCreator } from 'zustand';

interface ProjectDetails {
  id: string;
  name: string;
  link: string;
  stack: string;
  descriptions: string[];
}

interface ProjectState {
  projects: ProjectDetails[];
  addProject: (newProject: ProjectDetails) => void;
  removeProject: (id: string) => void;
  sortProjects: (sortedProjects: ProjectDetails[]) => void;
}

const initialProjects: ProjectDetails[] = [];

const createProjectSlice: StateCreator<ProjectState> = set => ({
  projects: initialProjects,

  addProject: (newProject: ProjectDetails): void => {
    set(state => ({
      projects: [...state.projects, newProject]
    }));
  },

  removeProject: (id: string): void => {
    set((state: ProjectState) => ({
      projects: state.projects.filter(proj => proj.id !== id)
    }));
  },

  sortProjects: (sortedProjects: ProjectDetails[]): void => {
    set({ projects: sortedProjects });
  }
});

export { type ProjectDetails, type ProjectState, createProjectSlice };
