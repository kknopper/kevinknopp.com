import React from 'react';
import styles from "./pagecontent.module.scss";

const pagecontent = props => {
	return (
		<div className={styles.pageContent}>
			{props.children}
		</div>
	);
};

export default pagecontent;
