import { type StateCreator } from 'zustand';

import { useSliceReset } from '@/store.ts';

interface CertificationDetails {
  id: string;
  title: string;
  issuer: string;
  link: string;
}

interface CertificationsState {
  certifications: CertificationDetails[];
  sortCertifications: (sortedCertifications: CertificationDetails[]) => void;
  addCertification: (newCertification: CertificationDetails) => void;
  removeCertification: (id: string) => void;
}

const initialCertifications: CertificationDetails[] = [];

const createCertificationsSlice: StateCreator<CertificationsState> = set => (
  useSliceReset.add(() => {
    set({ certifications: initialCertifications });
  }),
  {
    certifications: initialCertifications,
    sortCertifications: (
      sortedCertifications: CertificationDetails[]
    ): void => {
      set({ certifications: sortedCertifications });
    },

    addCertification: (newCertification: CertificationDetails): void => {
      set(state => ({
        certifications: [...state.certifications, newCertification]
      }));
    },

    removeCertification: (id: string): void => {
      set((state: CertificationsState) => ({
        certifications: state.certifications.filter(
          certification => certification.id !== id
        )
      }));
    }
  }
);

export {
  type CertificationDetails,
  type CertificationsState,
  createCertificationsSlice
};
