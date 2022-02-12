import { Link } from "gatsby";
import React from "react";
import * as styles from "./style.module.scss";

const MoreLink = ({ path }) => {
	return (
		<div>
			<p className={styles.text}><Link to={path}>more</Link></p>
		</div>
	);
};

export default MoreLink;