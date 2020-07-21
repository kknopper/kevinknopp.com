import React from "react"
import Img from "gatsby-image"

import styles from "./projectimg.module.scss"

const ProjectImg = props => {
	return(
		typeof props.img == "string" ? <img src={`${props.path}`} alt={props.alt} className={styles.project}/> : <Img fluid={props.img} alt={props.alt} className={styles.project}/>
	)
}

export default ProjectImg
