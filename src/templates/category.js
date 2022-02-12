import React from "react";
import Grid from "../components/grid";
import SimplePageCard from "../components/simplePageCard";

const CategoryTemplate = ({ pageContext }) => {
	const category = pageContext.category.node;
	const pages = pageContext.pages.filter((page) => page.node?.category?.slug === category.slug);
	return (
		<div>
			<div>
				<h1>{category.name}</h1>
				<Grid>
					{pages.map((page) => {
						return (
							<SimplePageCard key={page.node.id} pageData={page} />
						);
					})}
				</Grid>
			</div>
		</div>
	);
};

export default CategoryTemplate;