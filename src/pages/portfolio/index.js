import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import PageContent from "../../components/PageContent/pagecontent";
import SEO from "../../components/seo";
// import { AnimatePresence } from "framer-motion"
import ProjectList from "../../components/ProjectList/projectlist";

class Portfolio extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			filter: false,
			list: props.data.allMarkdownRemark.edges,
		};
		// this.tagFilter = this.tagFilter.bind(this);
	}

	tagFilter = (filter) => {
		let { edges } = this.props.data.allMarkdownRemark;
		this.setState({
			filter: !this.state.filter,
			list: edges.filter((edge) => {
				return edge.node.frontmatter.tags.includes(filter);
			}),
		});
	};

	resetFilter = () => {
		this.setState({
			filter: !this.state.filter,
			list: this.props.data.allMarkdownRemark.edges,
		});
	};

	render(props) {
		// console.log(data);
		return (
			<PageContent
				heroTitle="Portfolio"
				heroSubTitle="A small showcase of some of my work"
			>
				<SEO title="Portfolio" />
				<section>
					<h1>Amazing Pandas Eating Things</h1>
					<button onClick={() => this.tagFilter("development")}>
						Dev Filter
					</button>
					<button onClick={() => this.tagFilter("design")}>
						Design Filter
					</button>
					<button onClick={this.resetFilter}>Reset Filter</button>
					{/* <AnimatePresence> */}
					<ProjectList list={this.state.list} />
					{/* </AnimatePresence> */}
				</section>
			</PageContent>
		);
	}
}

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/portfolio/" } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			totalCount
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
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
					excerpt
				}
			}
		}
	}
`;

export default Portfolio;
