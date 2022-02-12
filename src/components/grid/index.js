import React from "react";
import * as styles from "./style.module.scss";

const Grid = ({ children }) => {
	return (
		<div className={styles.grid}>
			{children}
		</div>
	);
};

export default Grid;