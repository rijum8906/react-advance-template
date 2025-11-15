import { useForm, type SubmitHandler } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from '@/components/ui/field';
import { Link } from 'react-router-dom';

const formSchema = z.object({
	username: z.string().min(3).max(15),
	password: z.string().min(6),
});

export type SigninFormInputs = z.infer<typeof formSchema>;

export default function SigninForm() {
	const form = useForm<SigninFormInputs>({
		defaultValues: {
			username: '',
			password: '',
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit: SubmitHandler<SigninFormInputs> = (values) => {
		alert(values.username);
	};

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='flex flex-col gap-4 shadow px-4 py-5'
		>
			<FieldSet>
				<FieldLegend className='text-center'>Sign In</FieldLegend>
				<FieldGroup>
					{/* Username */}
					<Field>
						<FieldLabel htmlFor='username'>Username</FieldLabel>
						<Input
							id='username'
							placeholder='Enter your username'
							{...form.register('username')}
						/>
						<FieldError>{form.formState.errors.username?.message}</FieldError>
					</Field>

					{/* Password */}
					<Field>
						<FieldLabel htmlFor='password'>Password</FieldLabel>
						<Input
							id='password'
							type='password'
							placeholder='Enter your password'
							{...form.register('password')}
						/>
						<FieldError>{form.formState.errors.password?.message}</FieldError>
					</Field>
				</FieldGroup>

				{/* Submit */}
				<Field orientation='horizontal'>
					<Button type='submit'>Sign In</Button>
				</Field>
			</FieldSet>

			{/* Don't have an account */}
			<div className='text-sm'>
				Don't have an account ?
				<Button variant='link'>
					<Link to='/auth/signup'>Sign Up</Link>
				</Button>
			</div>
		</form>
	);
}
