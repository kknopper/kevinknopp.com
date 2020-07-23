import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({data, pageContext}) => {
	console.log(data)

	const { currentPage, numPages } = pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${(currentPage - 1).toString()}`
	const nextPage = `/blog/${(currentPage + 1).toString()}`

	return (
		<Layout heroTitle="KSquared" heroSubTitle="A collection of thoughts on tech, life & code">
			<SEO title="blog" />
			<div>
				<h1>
					Amazing Pandas Eating Things
				</h1>
				<h4>{data.allMarkdownRemark.edges.length} Posts</h4>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id}>
						<h3
						>
							{node.frontmatter.title}{" "}
							<span>
								— {node.frontmatter.date}
							</span>
						</h3>
						<p>{node.excerpt}</p>
					</div>
				))}
			</div>

			{/*Next / Previous Links*/}
			{!isFirst && (
				<Link to={prevPage} rel="prev">
					← Previous Page
				</Link>
			)}
			{!isLast && (
				<Link to={nextPage} rel="next">
					Next Page →
				</Link>
			)}

			{/*PAGINATION*/}
			{Array.from({ length: numPages }, (_, i) => (
				<Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "blog" : `blog/${i + 1}`}`} >
					{i + 1}
				</Link>
			))}

		</Layout>
	)
}

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/blog/"}},
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
`

export default Blog
