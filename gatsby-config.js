module.exports = {
	pathPrefix: "/web-basic-knowledge",
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-microcms`,
			options: {
				apiKey: `ff970e44c5d744d89aa019f63e1e65985098`,
				serviceId: `web-basic-knowledge`,
				apis: [
					{ endpoint: `pages`, type: `page` },
					{ endpoint: `categories`, type: `category` },
				],
			},
		},
	],
}