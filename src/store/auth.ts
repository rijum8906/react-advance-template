import type { AuthTokens, User } from '@/types/auth';
import { create } from 'zustand';

interface AuthStore {
	user?: User;
	authTokens?: AuthTokens;
	isSignedIn: () => boolean;
	setUser: (user: User) => void;
	clearUser: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => {
	return {
		user: undefined,
		authTokens: undefined,
		isSignedIn: () => !!get().user,
		setUser: (user) => set({ user }),
		clearUser: () => set({ user: undefined }),
	};
});
