import type { IconType } from 'react-icons/lib';

export interface NavLink {
	label: string;
	path: string;
	icon?: IconType;
	forAuthenticatedOnly?: boolean;
	forUnAuthenticatedOnly?: boolean;
}
