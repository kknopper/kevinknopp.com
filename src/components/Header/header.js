import React from "react";

import Hero from "../Hero/hero";

// import styles from "./header.module.scss"

export default (props) => (
	<header>
		<Hero heroTitle={props.heroTitle} heroSubTitle={props.heroSubTitle} />
	</header>
);
