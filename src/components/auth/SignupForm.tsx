import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
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
import { Checkbox } from '../ui/checkbox';

const signupSchema = z.object({
	name: z.string().min(2, 'Name is too short'),
	email: z.email('Invalid email address'),
	username: z.string().min(3).max(15),
	password: z.string().min(6),
	agree: z.boolean().refine((val) => val === true, {
		error: 'You must agree to the terms and conditions',
	}),
});

export type SignupFormInputs = z.infer<typeof signupSchema>;

export default function SignupForm() {
	const form = useForm<SignupFormInputs>({
		defaultValues: {
			name: '',
			email: '',
			username: '',
			password: '',
			agree: false,
		},
		resolver: zodResolver(signupSchema),
	});

	const onSubmit: SubmitHandler<SignupFormInputs> = (values) => {
		alert('Signed up as ' + values.username);
	};

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='flex flex-col gap-4 shadow px-4 py-5'
		>
			<FieldSet>
				<FieldGroup>
					<FieldLegend className='text-center'>Sign Up</FieldLegend>

					{/* Name */}
					<Field>
						<FieldLabel htmlFor='name'>Name</FieldLabel>
						<Input
							id='name'
							placeholder='Enter your full name'
							{...form.register('name')}
						/>
						<FieldError>{form.formState.errors.name?.message}</FieldError>
					</Field>

					{/* Email */}
					<Field>
						<FieldLabel htmlFor='email'>Email</FieldLabel>
						<Input
							id='email'
							placeholder='Enter your email'
							{...form.register('email')}
						/>
						<FieldError>{form.formState.errors.email?.message}</FieldError>
					</Field>

					{/* Username */}
					<Field>
						<FieldLabel htmlFor='username'>Username</FieldLabel>
						<Input
							id='username'
							placeholder='Choose a username'
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
							placeholder='Create a password'
							{...form.register('password')}
						/>
						<FieldError>{form.formState.errors.password?.message}</FieldError>
					</Field>

					{/* Agree to terms */}
					<Field>
						<div className='flex items-center'>
							<Controller
								control={form.control}
								name='agree'
								render={({ field }) => (
									<Checkbox
										id='agree'
										checked={field.value}
										onCheckedChange={(val) => field.onChange(val)}
									/>
								)}
							/>
							<FieldLabel htmlFor='agree' className='ml-2'>
								I agree to the terms and conditions
							</FieldLabel>
						</div>
						<FieldError>{form.formState.errors.agree?.message}</FieldError>
					</Field>
				</FieldGroup>

				{/* Submit */}
				<Field orientation='horizontal'>
					<Button type='submit'>Sign Up</Button>
				</Field>
			</FieldSet>

			{/* Already have an account */}
			<div className='text-sm'>
				Already have an account?
				<Button variant='link'>
					<Link to='/auth/signin'>Sign In</Link>
				</Button>
			</div>
		</form>
	);
}
