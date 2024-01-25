import { create } from 'zustand';

interface INavbarState {
  indxOfActiveLink: number;

  setIndxOfActiveLink: (indx: number) => void;
}

export const useNavbarItems = create<INavbarState>((set) => ({
  indxOfActiveLink: 0,

  setIndxOfActiveLink: (indx) => set(() => ({
    indxOfActiveLink: indx,
  }))
}));
