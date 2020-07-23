import React from "react";
import { graphql } from "gatsby";
import PageContent from "../components/PageContent/pagecontent";

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<PageContent
			heroTitle="KSquared"
			heroSubTitle="A collection of thoughts on tech, life & code"
		>
			<div>
				<h1>{post.frontmatter.title}</h1>
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
			}
		}
	}
`;
