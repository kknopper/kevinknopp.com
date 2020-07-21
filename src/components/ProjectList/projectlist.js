import React from "react"
import Project from "../../components/Project/project"

import styles from "./projectlist.module.scss"


const ProjectList = props => {
	return (
		<div className={styles.projectList}>
			{props.list.map(({ node }) => {
				const img = node.frontmatter.img ? node.frontmatter.img.childImageSharp.fluid : node.frontmatter.svg
				const path = node.frontmatter.img ? node.frontmatter.img.relativePath : node.frontmatter.svg
				return (
					<Project key={node.id} img={img} alt={node.frontmatter.title} path={path} link={node.fields.slug}/>
				)
			})}
		</div>
	)
}

export default ProjectList
