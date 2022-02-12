import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from "./style.module.scss";

const CategoryNav = ({ onClick = () => {} }) => {
	const data = useStaticQuery(graphql`
		query {
			allMicrocmsCategory(sort: {fields: createdAt, order: ASC}) {
				edges {
					node {
						name
						slug
						id
					}
				}
			}
			allMicrocmsPage {
				edges {
					node {
						category {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<nav>
			<ul className={styles.list}>
				{data.allMicrocmsCategory.edges.map(({ node }) => {
					const postCount = data.allMicrocmsPage.edges.filter((page) => page.node?.category?.slug === node.slug).length;
					return (
						<li key={node.id}><Link to={`/categories/${node.slug}`} onClick={onClick}>{node.name}（{postCount}）</Link></li>
					);
				})}
			</ul>
		</nav>
	);
};

export default CategoryNav;