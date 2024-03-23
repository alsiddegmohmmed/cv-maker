import { type StateCreator } from 'zustand';

interface PersonDetails {
  name: string;
  title: string;
  email: string;
  phone: string;
  links: {
    Portfolio: string;
    GitHub: string;
    LinkedIn: string;
  };
}

interface PersonState {
  person: PersonDetails;
  setPerson: (person: Partial<PersonDetails>) => void;
}

const initialPerson = {
  name: '',
  title: '',
  email: '',
  phone: '',
  links: {
    Portfolio: '',
    GitHub: '',
    LinkedIn: ''
  }
};

const createPersonSlice: StateCreator<PersonState> = set => ({
  person: { ...initialPerson },

  setPerson: ({
    name = '',
    title = '',
    email = '',
    phone = '',
    links = {
      Portfolio: '',
      GitHub: '',
      LinkedIn: ''
    }
  }): void => {
    set({
      person: {
        name,
        title,
        email,
        phone,
        links
      }
    });
  }
});

export { type PersonState, createPersonSlice };
