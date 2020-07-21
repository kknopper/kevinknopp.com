// import React from "react"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => {
// 	return (
// 		<Layout>
// 			<SEO title="Home" />
// 			<h1>Hi people</h1>
// 			<p>Welcome to your new Gatsby site.</p>
// 			<p>Now go build something great.</p>
// 			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// 				<Image />
// 			</div>
// 		</Layout>
// 	)
// }

// export default IndexPage

import React from "react"
import { graphql, Link } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Grid from "../components/Grid/grid"
import CopyHeadline from "../components/CopyHeadline/copyheadline"
import ProjectList from "../components/ProjectList/projectlist"
import ExtLink from "../components/ExtLink/extlink"
import BlogPost from "../components/BlogPost/blogpost"


export default ({ data }) => {
  return (
    <Layout>
			<section>
				<Grid grid="half">
					<CopyHeadline title="About">
						<p>I'm a front-end web developer currently living in the quaint little suburbia of Fremont. There's a warm place in my heart for simple design, clean code, and all things orange. When I'm not designing or developing, I enjoy browsing the interwebs, expanding my movie collection, or playing a good game of chess.</p>
					</CopyHeadline>
					<CopyHeadline title="Craft">
					<p>I currently work for <ExtLink to="http://www.level-studios.com/">Level Studios</ExtLink>, an awesome agency with a focus on customer engagement. Agency life is fast-paced and exciting, and there's always a new project right around the corner. As a Creative Engineer, I've been able to develop websites and webapps for some of the biggest brands out there, including Timberland, Folgers, and Samsung.</p>
					</CopyHeadline>
				</Grid>
			</section>
      <section>
				<CopyHeadline title="Recent Projects">
					<ProjectList list={data.allMarkdownRemark.edges.filter(edge => edge.node.fileAbsolutePath.match(/portfolio/)).slice(0, 4)} />
				</CopyHeadline>
			</section>
			<section>
				<CopyHeadline title="Recent Posts">
        {data.allMarkdownRemark.edges.filter(edge => edge.node.fileAbsolutePath.match(/blog/)).slice(0, 3).map(({ node }) => (
					<BlogPost
						key={node.id}
						date={node.frontmatter.date}
						day={node.frontmatter.day}
						month={node.frontmatter.month}
						postTitle={node.frontmatter.title}
						postLink={node.fields.slug}
						postExcerpt={node.excerpt}
					/>
        ))}
				</CopyHeadline>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
					fileAbsolutePath
					fields {
						slug
					}
          frontmatter {
            title
						date
						day: date(formatString: "DD")
            month: date(formatString: "MMM")
						tags
						img {
							relativePath
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
						}
          }
        }
      }
    }
  }
`
