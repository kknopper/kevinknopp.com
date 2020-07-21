import React from "react"
import { Link } from "gatsby"

import ProjectImg from "../../components/ProjectImg/projectimg"



import styles from "./project.module.scss"

const Project = props => {
	return (
		<Link to={props.link} className={styles.project}>
			{/* <motion.div
				key={props.id}
				className={styles.project}
				positionTransition
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			> */}
				<div className={styles.projectImgWrap}>
					<ProjectImg img={props.img} alt={props.alt} path={props.path} />
				</div>
			{/* </motion.div> */}
		</Link>
	)
}

export default Project
