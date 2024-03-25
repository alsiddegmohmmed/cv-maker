import { type StateCreator } from 'zustand';

interface MenuState {
  openMenus: string[];
  toggleMenu: (menuName: string) => void;
}

const initialMenu: string[] = ['Personal Info'];

const createMenuSlice: StateCreator<MenuState> = set => ({
  openMenus: initialMenu,
  toggleMenu: (menuName): void => {
    set(state => ({
      openMenus:
        state.openMenus.includes(menuName) ?
          state.openMenus.filter(name => name !== menuName)
        : [...state.openMenus, menuName]
    }));
  }
});

export { type MenuState, createMenuSlice };
