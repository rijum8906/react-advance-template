import { lazy, Suspense } from 'react';

import SigninForm from '@/components/auth/SigninForm';
import Loader from '@/components/layouts/Loader';

const SocialSignin = lazy(() => import('@/components/auth/SocialSignin'));

export default function SigninPage() {
	return (
		<div className='flex flex-col p-4 gap-5'>
			<SigninForm />
			<Suspense fallback={<Loader />}>
				<SocialSignin />
			</Suspense>
		</div>
	);
}
