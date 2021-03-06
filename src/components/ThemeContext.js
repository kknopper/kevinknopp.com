import React from 'react';
import { COLORS } from '../constants';

export const ThemeContext = React.createContext({
	colorMode: 'light'
});

export const ThemeProvider = ({ children }) => {
	const [colorMode, rawSetColorMode] = React.useState(undefined);

	React.useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
		rawSetColorMode(initialColorValue);
	}, []);

	function setColorMode(newValue) {
		const root = window.document.documentElement;
		// 1. Update React color-mode state
		rawSetColorMode(newValue);
		// 2. Update localStorage
		localStorage.setItem('color-mode', newValue);
		// 3. Update each color

		root.className = newValue === 'light' ? 'light' : 'dark';

		// root.style.setProperty(
		// 	'--color-text', newValue === 'light' ? COLORS.text.light : COLORS.text.dark
		// );
		// root.style.setProperty(
		// 	'--color-background', newValue === 'light' ? COLORS.background.light : COLORS.background.dark
		// );
		// root.style.setProperty(
		// 	'--color-primary', newValue === 'light' ? COLORS.primary.light : COLORS.primary.dark
		// );
	}

	return (
		<ThemeContext.Provider value={{ colorMode, setColorMode }}>
			{children}
		</ThemeContext.Provider>
	)
}
