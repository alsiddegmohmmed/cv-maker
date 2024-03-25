import { type StateCreator } from 'zustand';

import { useSliceReset } from '@/store.ts';

interface SkillDetails {
  progLang: string;
  libFrame: string;
  toolPlat: string;
  databases: string;
}

interface SkillState {
  skills: SkillDetails;
  setSkill: (skill: Partial<SkillDetails>) => void;
}

const initialSkill: SkillDetails = {
  progLang: '',
  libFrame: '',
  toolPlat: '',
  databases: ''
};

const createSkillSlice: StateCreator<SkillState> = set => (
  useSliceReset.add(() => {
    set({ skills: initialSkill });
  }),
  {
    skills: { ...initialSkill },

    setSkill: (updatedSkill: Partial<SkillDetails>): void => {
      set({
        skills: {
          ...initialSkill,
          ...updatedSkill
        }
      });
    }
  }
);

export { type SkillState, createSkillSlice };
