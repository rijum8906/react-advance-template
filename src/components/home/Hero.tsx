import { useThemeStore } from '@/store/theme';
import { Button } from '../ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export function HerSection() {
	const { toggleTheme } = useThemeStore();

	console.log('Hero.tsx');
	return (
		<div className='flex w-full items-center justify-center'>
			<Card>
				<CardHeader>
					<CardTitle>A Simple Card</CardTitle>
					<CardDescription>Simple Card Description</CardDescription>
					<CardAction>
						<Button variant='secondary'>Next</Button>
					</CardAction>
				</CardHeader>
				<CardContent>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
						explicabo reiciendis eaque modi assumenda debitis suscipit molestiae
						at magni quo. Dignissimos praesentium consequatur hic optio expedita
						odio eligendi beatae dolore atque nemo. Accusantium dolorem saepe
						sequi, molestiae architecto eaque, ducimus nesciunt, id esse in ab?
					</p>
				</CardContent>
				<CardFooter>
					<Button variant='outline' onClick={() => toggleTheme()}>
						Toggle Theme
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
