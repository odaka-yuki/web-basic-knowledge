import React from "react";
import * as styles from "./style.module.scss";

const SimpleLinkCard = ({ title, text, url, Heading = "h3" }) => {
	return (
		<div className={styles.card}>
			<a href={url} target="_blank" rel="noreferrer">
				<Heading className={styles.title}>{title}</Heading>
				<p className={styles.text}>{text}</p>
				<p className={styles.external}><i className="bi bi-box-arrow-up-right"></i></p>
			</a>
		</div>
	);
};

export default SimpleLinkCard;