import React from "react"
import PropTypes from "prop-types"

import styles from "./Grid.module.scss"

const Grid = props => {

	return (
		<div className={styles[props.grid]} >
			{props.children}
		</div>
	)
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Grid
