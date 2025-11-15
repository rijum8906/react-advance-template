import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from '@/components/layouts/Loader';

const Navbar = lazy(() => import('@/components/layouts/Navbar'));
const Footer = lazy(() => import('@/components/layouts/Footer'));

export function MainLayout() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Navbar />
				<main>
					<Outlet />
				</main>
				<Footer />
			</Suspense>
		</>
	);
}
