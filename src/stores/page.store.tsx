import { create } from 'zustand';

interface INavbarState {
  indxOfActivePage: number;

  setIndxOfActivePage: (indx: number) => void;
}

export const useNavbarItems = create<INavbarState>((set) => ({
  indxOfActivePage: 0,

  setIndxOfActivePage: (indx) => set(() => ({
    indxOfActivePage: indx,
  }))
}));
