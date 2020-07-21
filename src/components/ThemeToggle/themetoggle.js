import React from 'react';

import { ThemeContext } from '../ThemeContext';
const ThemeToggle = () => {
	const { colorMode, setColorMode } = React.useContext(
		ThemeContext
	);

	//defer rendering of the toggle until after the React app grabs localstorage value
	// if (!colorMode) {
	// 	return null;
	// }

	return (
		<label>
			<input
				type="checkbox"
				checked={colorMode === 'dark'}
				onChange={event => {
					setColorMode(event.target.checked ? 'dark' : 'light');
				}}
			/>{' '}
			Dark
		</label>
	);
};

export default ThemeToggle;
