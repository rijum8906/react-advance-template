import type { NavLink } from '@/types/links';

import { MdCreate, MdHome, MdInfo, MdLogin } from 'react-icons/md';

export const navLinks: NavLink[] = [
	{
		label: 'Home',
		path: '/',
		icon: MdHome,
	},
	{
		label: 'About',
		path: '/about',
		icon: MdInfo,
	},

	// Auth Links
	{
		label: 'Sign In',
		path: '/auth/signin',
		icon: MdLogin,
		forUnAuthenticatedOnly: true,
	},
	{
		label: 'Sign Up',
		path: '/auth/signup',
		icon: MdCreate,
		forUnAuthenticatedOnly: true,
	},
] as const;
