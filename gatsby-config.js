module.exports = {
	siteMetadata: {
		title: `Kevin Knopp's Portfolio`,
		description: `Welcome to my portfolio website!`,
		author: `Kevin Knopp`,
		siteMap: {
			pages: [
				{
					name: "Home",
					path: "/",
				},
				{
					name: "About",
					path: "/about",
				},
				{
					name: "Portfolio",
					path: "/portfolio",
				},
				{
					name: "Blog",
					path: "/blog",
				},
			],
			shares: [
				{
					name: "dribbble",
					path: "https://www.dribbble.com/kknopper/",
				},
				{
					name: "github",
					path: "https://www.github.com/kknopper/",
				},
				{
					name: "linkedin",
					path: "https://www.linkedin.com/in/kknopper/",
				},
				{
					name: "facebook",
					path: "https://www.facebook.com/kknopper/",
				},
				{
					name: "instagram",
					path: "https://www.instagram.com/kknopper/",
				},
				{
					name: "email",
					path: "mailto:kknopper@gmail.com",
				},
				{
					name: "rss",
					path: "/blog.rss",
				},
			]
		},
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `portfolio-images`,
				path: `${__dirname}/src/images/portfolio`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		// {
		// 	resolve: `gatsby-plugin-typography`,
		// 	options: {
		// 		pathToConfigModule: `src/utils/typography`,
		// 	},
		// },
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /svgs/
				}
			}
		},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
