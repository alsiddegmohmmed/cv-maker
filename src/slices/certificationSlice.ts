import { type StateCreator } from 'zustand';

import { useSliceReset } from '@/store.ts';
interface CertificationDetails {
  id: string;
  title: string;
  issuer: string;
  link: string;
}

interface CertificationState {
  certifications: CertificationDetails[];
  addCertification: (newCertification: CertificationDetails) => void;
  removeCertification: (id: string) => void;
  sortCertifications: (sortedCertifications: CertificationDetails[]) => void;
}

const initialCertifications: CertificationDetails[] = [];

const createCertificationSlice: StateCreator<CertificationState> = set => (
  useSliceReset.add(() => {
    set({ certifications: initialCertifications });
  }),
  {
    certifications: initialCertifications,

    addCertification: (newCertification: CertificationDetails): void => {
      set(state => ({
        certifications: [...state.certifications, newCertification]
      }));
    },

    removeCertification: (id: string): void => {
      set((state: CertificationState) => ({
        certifications: state.certifications.filter(edu => edu.id !== id)
      }));
    },

    sortCertifications: (
      sortedCertifications: CertificationDetails[]
    ): void => {
      set({ certifications: sortedCertifications });
    }
  }
);

export {
  type CertificationDetails,
  type CertificationState,
  createCertificationSlice
};
