import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { setConfig } from "react-hot-loader"

import styles from "./navigation.module.scss"

// setConfig({ pureSFC: true })

const NavList = (props) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					siteMap {
						pages {
							path
							name
						}
					}
				}
			}
		}
	`)

	const links = data.site.siteMetadata.siteMap.pages

	return (
		<ul className={props.className}>
			{links.map((link, i) => (
				<li key={i}>
					<Link to={link.path} className={styles.navListLink} activeClassName={styles.navListLinkActive} onClick={props.handleClick} partiallyActive={link.path === "/" ? false : true}>{link.name}</Link>
				</li>
			))}
		</ul>
	)
}

export default NavList
