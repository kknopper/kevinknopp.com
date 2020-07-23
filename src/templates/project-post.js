import React from "react";
import { graphql } from "gatsby";
import PageContent from "../components/PageContent/pagecontent";

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<PageContent
			heroTitle="Portfolio"
			heroSubTitle="A small showcase of some of my work"
		>
			<div>
				<h1>{post.frontmatter.title}</h1>
				<h2>Project</h2>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</PageContent>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				img {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
