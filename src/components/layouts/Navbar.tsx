import { Link } from 'react-router-dom';

import { Button } from '../ui/button';

export default function Navbar() {
	return (
		<nav className='w-full flex p-4 justify-center gap-2 shadow'>
			{/* Left */}
			<div className='grow'></div>

			{/* Center */}
			<div></div>

			{/*Right */}
			<div className=''>
				<Button>
					<Link to='/auth/signin'>Sign In</Link>
				</Button>
			</div>
		</nav>
	);
}
