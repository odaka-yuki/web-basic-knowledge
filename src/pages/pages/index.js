import { graphql } from "gatsby";
import React from "react";
import Grid from "../../components/grid";
import SimplePageCard from "../../components/simplePageCard";

export const query = graphql`
	query {
		allMicrocmsPage {
			edges {
				node {
					description
					id
					title
					updatedAt(formatString: "YYYY-MM-DD")
					publishedAt(formatString: "YYYY-MM-DD")
					category {
						name
					}
				}
			}
		}
	}
`;

const PagePage = ({ data }) => {

	return (
		<div>
			<h1>Pages</h1>
			<Grid>
				{data.allMicrocmsPage.edges.map((page) => {
					return (
						<SimplePageCard key={page.node.id} pageData={page} />
					);
				})}
			</Grid>
		</div>
	);
};

export default PagePage;