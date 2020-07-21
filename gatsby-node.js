const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		console.log(createFilePath({ node, getNode, basePath: `pages` }))
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
  }
}
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
	const { createPage } = actions
	const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
						fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)
	console.log(JSON.stringify(result, null, 4))


	const posts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.fileAbsolutePath.match(/blog/))
	const postsPerPage = 2
	const numPages = Math.ceil(posts.length / postsPerPage)
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
			component: path.resolve("./src/templates/blog-list.js"),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		})
	})

	//Create Blog Post Pages
	result.data.allMarkdownRemark.edges.filter(edge => edge.node.fileAbsolutePath.match(/blog/)).forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
	})

	//Create Portfolio Project Pages
	result.data.allMarkdownRemark.edges.filter(edge => edge.node.fileAbsolutePath.match(/portfolio/)).forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
	})
}
