import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavList from "../Navigation/navList"

import styles from "./footer.module.scss"

const Footer = props => {
	const [active, toggleTextBubble] = useState({ active: false })

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					siteMap {
						shares {
							path
							name
						}
					}
				}
			}
		}
	`)

	const links = data.site.siteMetadata.siteMap.shares;

	const speakPhrase = (e) => {
		e.preventDefault();
		toggleTextBubble(!active);

		setTimeout(() => {
			toggleTextBubble(!active);
		}, 1500)
	}





	return (
		<footer className={styles.footer}>
			<figure className={styles.footerLogo} onClick={speakPhrase}>
				<figcaption className={active ? styles.footerLogoCaption : `${styles.footerLogoCaption} active`}></figcaption>
				<figure className={`${styles.footerLogoImg} theme-color-bg`}></figure>
			</figure>

			<nav className={styles.footerNav}>

				<ul className={styles.footerShare}>
					{links.map((link, i) => (
						<li key={i}>
							<a href={link.path} target="_blank" rel="noopener noreferrer"><i className={`icon-${link.name}`}></i></a>
						</li>
					))}
				</ul>
				<NavList className={styles.footerLinks} />
			</nav>
			<div className={styles.footerLegal}>© Kevin Knopp {new Date().getFullYear()}</div>
		</footer>
	)
}

export default Footer
