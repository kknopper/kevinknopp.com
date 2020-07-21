import React from "react"
import Navigation from "../Navigation/navigation"
import Hero from "../Hero/hero"

import styles from "./header.module.scss"

export default props => (
	<header className={styles.header}>
		<Navigation />
		<Hero heroTitle={props.heroTitle} heroSubTitle={props.heroSubTitle} />
	</header>
)
