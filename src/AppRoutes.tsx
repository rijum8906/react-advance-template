import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loader from './components/layouts/Loader';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';

// Application Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Authentication Pages
const SigninPage = lazy(() => import('./pages/auth/SigninPage'));
const SignupPage = lazy(() => import('./pages/auth/SignupPage'));

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Routes>
					{/* Main Application Routes */}
					<Route path='/' element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path='about' element={<AboutPage />} />
					</Route>

					{/* Authentication Routes */}
					<Route path='/auth' element={<AuthLayout />}>
						<Route path='signin' element={<SigninPage />} />
						<Route path='signup' element={<SignupPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default AppRoutes;
