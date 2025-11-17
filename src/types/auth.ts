export interface Profile {
	displayName?: string;
	bio?: string;
}

export type Role = 'admin' | 'user' | 'guest' | 'moderator';

export interface User {
	id: string;
	name: string;
	username: string;
	email: string;
	roles: Role[];
	profile: Profile;
	createdAt: Date;
	updatedAt: Date;
}

export interface AuthTokens {
	refreshToken: string;
	accessToken: string;
}
