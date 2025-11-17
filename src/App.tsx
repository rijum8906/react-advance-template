import AppRoutes from './AppRoutes';
import { useThemeStore } from './store/theme';

function App() {
	const { mode } = useThemeStore();

	const root = window.document.documentElement;

	if (mode === 'light') {
		root.classList.remove('dark');
		root.classList.add('light');
	} else {
		root.classList.remove('light');
		root.classList.add('dark');
	}

	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App;
