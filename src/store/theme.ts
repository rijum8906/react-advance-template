import { create } from 'zustand';

export type Mode = 'light' | 'dark';
interface ThemeStore {
	mode: Mode;
	toggleTheme: () => void;
	changeTheme: (theme: Mode) => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => {
	return {
		mode: 'light',
		toggleTheme() {
			if (get().mode === 'light') set({ mode: 'dark' });
			else set({ mode: 'light' });
		},
		changeTheme(mode: Mode) {
			set({ mode });
		},
	};
});
