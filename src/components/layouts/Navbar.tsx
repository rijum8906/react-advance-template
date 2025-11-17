import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import { useAuthStore } from '@/store/auth';
import { SidebarTrigger } from '../ui/sidebar';

export default function Navbar() {
	const { isSignedIn, user } = useAuthStore();

	return (
		<nav className='w-full flex p-4 justify-center gap-2 shadow'>
			{/* Left */}
			<div className='grow'>
				<SidebarTrigger />
			</div>

			{/* Center */}
			<div></div>

			{/*Right */}
			<div className=''>
				{!isSignedIn() ? (
					<Button>
						<Link to='/auth/signin'>Sign In</Link>
					</Button>
				) : (
					<span>{user?.name}</span>
				)}
			</div>
		</nav>
	);
}
