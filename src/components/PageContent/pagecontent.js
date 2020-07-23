import React from "react";

import Header from "../Header/header";
import styles from "./pagecontent.module.scss";

const pagecontent = (props) => {
	return (
		<>
			<Header
				heroTitle={props.heroTitle}
				heroSubTitle={props.heroSubTitle}
			/>
			<main className={styles.pageContent}>{props.children}</main>
		</>
	);
};

export default pagecontent;
