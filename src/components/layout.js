/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import Footer from "./Footer/footer"
import PageContent from "./PageContent/pagecontent"
import "./layout.css"

const Layout = ( props ) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<div className='grid theme-background theme-text'>
			<Header siteTitle={data.site.siteMetadata.title} heroTitle={props.heroTitle} heroSubTitle={props.heroSubTitle} />
			<main>
				<PageContent>
					{props.children}
				</PageContent>
			</main>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout


Layout.propTypes = {
	heroTitle: PropTypes.string,
}

Layout.defaultProps = {
	heroTitle: `I'm Kevin Knopp`,
}
