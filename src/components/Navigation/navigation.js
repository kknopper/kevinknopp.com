import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import NavList from "./navList";
import ThemeToggle from "../ThemeToggle/themetoggle";
import Logo from '../../svgs/logo.svg';
// import { setConfig } from "react-hot-loader"

import styles from "./navigation.module.scss"

// setConfig({ pureSFC: true })

const Navigation = () => {
	const [active, setActive] = useState({ active: false })

	const data = useStaticQuery(graphql`
		query {
			navPlusIcon: file(relativePath: { eq: "nav-plus-white.png" }) {
				childImageSharp {
					fixed(width: 50, height: 50) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	const toggleNavigation = e => {
		e.preventDefault()
		setActive(!active)
	}

	return (
		<nav
			className={active ? `theme-primary-fill ${styles.nav}` : `theme-primary-fill ${styles.nav} ${styles.navActive}`}
			data={data}
		>
			<Link to="/" className={`${styles.navLogo} theme-primary-fill`}>
				<Logo />
			</Link>
			<NavList className={styles.navList}/>
			<div className={styles.navToggle} onClick={toggleNavigation}>
					<Img
						fixed={data.navPlusIcon.childImageSharp.fixed}
						alt="navigation toggle"
						imgStyle={{ transition: "all 0.3s" }}
						Tag="figure"
					/>
				</div>
				<ThemeToggle className={styles.navThemeToggle} />
		</nav>
	)
}

export default Navigation
