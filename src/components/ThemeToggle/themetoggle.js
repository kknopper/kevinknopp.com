import React from 'react';

import { ThemeContext } from '../ThemeContext';
import ToggleCheckbox from '../ToggleCheckbox/togglecheckbox';

const ThemeToggle = ( props ) => {
	const { colorMode, setColorMode } = React.useContext(
		ThemeContext
	);

	//defer rendering of the toggle until after the React app grabs localstorage value
	if (!colorMode) {
		return null;
	}

	const handleChange = (event) => {
		setColorMode(event.target.checked ? 'dark' : 'light')
	}

	return (
		<ToggleCheckbox checkState={colorMode === 'dark'} handleChange={handleChange} className={props.className} />
	);
};

export default ThemeToggle;
