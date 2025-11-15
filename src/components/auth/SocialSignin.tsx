import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { FieldGroup, FieldSet, FieldTitle } from '../ui/field';

export default function SocialSignin() {
	return (
		<FieldSet className='w-full px-4 py-5 shadow'>
			<FieldGroup className='text-center flex flex-col justify-center items-center'>
				<FieldTitle>Or Signin With</FieldTitle>
				<div className='flex gap-8'>
					<FaGoogle className='w-10 h-10' />
					<FaFacebook className='w-10 h-10' />
					<FaGithub className='w-10 h-10' />
				</div>
			</FieldGroup>
		</FieldSet>
	);
}
