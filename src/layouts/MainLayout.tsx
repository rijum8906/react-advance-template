import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from '@/components/layouts/Loader';
import { SidebarProvider } from '@/components/ui/sidebar';

const Navbar = lazy(() => import('@/components/layouts/Navbar'));
const Footer = lazy(() => import('@/components/layouts/Footer'));
const AppSidebar = lazy(() => import('@/components/layouts/AppSidebar'));

export function MainLayout() {
	return (
		<Suspense fallback={<Loader />}>
			<SidebarProvider className='flex flex-col w-full min-h-full h-full'>
				<Navbar />
				<AppSidebar />
				<main className='grow border'>
					<Outlet />
				</main>
				<Footer />
			</SidebarProvider>
		</Suspense>
	);
}
