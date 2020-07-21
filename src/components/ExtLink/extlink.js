import React from "react"
import PropTypes from "prop-types"

import styles from "./extlink.module.scss"

const ExtLink = props => {

	return (
		<a href={props.to} target="_blank" rel="noopener noreferrer" className={styles.externalLink} >
			{props.children}
		</a>
	)
}

ExtLink.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ExtLink
