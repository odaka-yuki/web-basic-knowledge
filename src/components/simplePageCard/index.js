import { Link } from "gatsby";
import React from "react";
import * as styles from "./style.module.scss";

const SimplePageCard = ({ pageData, Heading = "h3" }) => {
	const isUpdated = pageData.node.updateAt && pageData.node.publishedAt < pageData.node.updateAt;
	console.log(pageData);

	return (
		<div className={styles.card}>
			<Link to={`/pages/${pageData.node.id}`}>
			{pageData.node.hasOwnProperty("category") && <p className={styles.category}>{pageData.node.category?.name || "未分類"}</p>}
				<p className={styles.date}>公開日: {pageData.node.publishedAt}</p>
				{isUpdated && <p className={styles.date}>更新日: {pageData.node.updateAt}</p>}
				<Heading className={styles.title}>{pageData.node.title}</Heading>
				<p className={styles.text}>{pageData.node.description}</p>
			</Link>
		</div>
	);
};

export default SimplePageCard;