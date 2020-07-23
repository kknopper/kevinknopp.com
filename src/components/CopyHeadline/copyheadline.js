import React from "react"
import PropTypes from "prop-types"

import styles from "./CopyHeadline.module.scss"

const CopyHeadline = props => {

	return (
		<div className={styles.blurb}>
			<h3 className={`theme-primary ${props.title.toLowerCase()}`}>{props.title}</h3>
			<hr className="theme-primary-fill-secondary" />
			{props.children}
		</div>
	)
}

CopyHeadline.propTypes = {
	children: PropTypes.node.isRequired,
}

export default CopyHeadline
