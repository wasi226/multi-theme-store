import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'default',
  setTheme: (theme) => set({ theme }),
}));




