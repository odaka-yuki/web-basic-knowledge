const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(
		`
		query {
			allMicrocmsPage {
				edges {
					node {
						id
						html
						description
						css
						javascript
						createdAt(formatString: "YYYY-MM-DD")
						title
						category {
							id
							name
							slug
						}
					}
				}
			}
			allMicrocmsCategory {
				edges {
					node {
						name
						slug
						id
					}
				}
			}
		}
		`
	);


	if (result.errors) {
		throw result.errors;
	}

	result.data.allMicrocmsCategory.edges.forEach((category) => {
		createPage({
			path: `/categories/${category.node.slug}`,
			component: path.resolve(`./src/templates/category.js`),
			context: {
				category,
				pages: result.data.allMicrocmsPage.edges,
			},
		});
	});

	result.data.allMicrocmsPage.edges.forEach((page) => {
		createPage({
			path: `/pages/${page.node.id}`,
			component: path.resolve(`./src/templates/page.js`),
			context: {
				page,
			},
		});
	});
};