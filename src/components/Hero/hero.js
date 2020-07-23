import PropTypes from "prop-types"
import React from "react"

import styles from "./hero.module.scss"

const Hero = props => {
	return (
		<figure className={styles.hero}>
			<div className={styles.heroWrap}>
				<figcaption className={styles.heroText}>
					<h1>{props.heroTitle}</h1>
					<h2 dangerouslySetInnerHTML={{ __html: props.heroSubTitle}}>{/*props.heroSubTitle*/}</h2>
				</figcaption>
			</div>
		</figure>
	)
}

export default Hero

Hero.propTypes = {
	heroSubTitle: PropTypes.string,
}

Hero.defaultProps = {
	heroSubTitle: `I like to <span class="${styles.desText} theme-primary">design</span> &amp; <span class="${styles.devText} theme-primary">develop</span> awesome websites`,
}
