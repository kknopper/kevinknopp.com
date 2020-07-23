import React from "react";
import PropTypes from "prop-types";

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

pagecontent.propTypes = {
	children: PropTypes.node.isRequired,
};

pagecontent.propTypes = {
	heroTitle: PropTypes.string,
};

pagecontent.defaultProps = {
	heroTitle: `I'm Kevin Knopp`,
};
