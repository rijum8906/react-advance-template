import { useAuthStore } from '@/store/auth';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '../ui/sidebar';
import { navLinks } from '@/constants/navLinks';
import { Link, useLocation } from 'react-router-dom';

export default function AppSidebar() {
	const { isSignedIn } = useAuthStore();
	const { pathname } = useLocation();

	const filteredLinks = navLinks.filter((link) => {
		if (isSignedIn() && link.forAuthenticatedOnly) return true;
		if (!isSignedIn() && link.forUnAuthenticatedOnly) return true;
		if (!link.forAuthenticatedOnly && !link.forUnAuthenticatedOnly) return true;
	});

	return (
		<Sidebar>
			<SidebarHeader>{import.meta.env.VITE_APP_NAME}</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{filteredLinks.map((link) => (
							<SidebarMenuItem key={link.label}>
								<SidebarMenuButton isActive={pathname === link.path}>
									<Link to={link.path} className='flex gap-5 w-full'>
										{link.icon && <link.icon className='h-5 w-5' />}
										<span>{link.label}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	);
}
