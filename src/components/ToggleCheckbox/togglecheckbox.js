import React from 'react';

import styles from "./togglecheckbox.module.scss"

const ToggleCheckbox = ( props ) => {

	return (
		<label className={`${styles.toggleCheckbox} ${props.className}`}>
			<input
				type="checkbox"
				checked={props.checkState}
				onChange={ event => { props.handleChange(event) } }
			/>
			<i></i>
	<span>{props.children}</span>
		</label>
	);
};

export default ToggleCheckbox;
