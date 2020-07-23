/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navigation from "../Navigation/navigation";
// import Header from "./Header/header"
import Footer from "../Footer/footer";
import styles from "./layout.module.scss";

const Layout = (props) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div
			className={`body-content grid theme-background theme-text ${styles.grid}`}
		>
			<Navigation />
			{props.children}
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

Layout.propTypes = {
	heroTitle: PropTypes.string,
};

Layout.defaultProps = {
	heroTitle: `I'm Kevin Knopp`,
};
