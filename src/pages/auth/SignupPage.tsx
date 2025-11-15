import { lazy, Suspense } from 'react';

import SignupForm from '@/components/auth/SignupForm';
import Loader from '@/components/layouts/Loader';

const SocialSignin = lazy(() => import('@/components/auth/SocialSignin'));

export default function SignupPage() {
	return (
		<div className='flex flex-col p-4 gap-5'>
			<SignupForm />
			<Suspense fallback={<Loader />}>
				<SocialSignin />
			</Suspense>
		</div>
	);
}
