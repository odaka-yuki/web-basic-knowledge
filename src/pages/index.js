import { graphql } from "gatsby";
import React from "react";
import Grid from "../components/grid";
import MoreLink from "../components/moreLink";
import SimplePageCard from "../components/simplePageCard";
import Stack from "../components/stack";

export const query = graphql`
	query {
		allMicrocmsPage(limit: 6) {
			edges {
				node {
					id
					title
					description
					publishedAt(formatString: "YYYY-MM-DD")
					updatedAt(formatString: "YYYY-MM-DD")
					category {
						name
					}
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {

	return (
		<div>
			<h1>Index</h1>
			<Stack>
				<div>
					<h2>新着</h2>
					<Grid>
						{data.allMicrocmsPage.edges.map((page) => {
							return (
								<SimplePageCard
									key={page.node.id}
									pageData={page}
								/>
							);
						})}
					</Grid>
					<MoreLink path="/pages" />
				</div>
			</Stack>
		</div>
	);
};

export default IndexPage;