import React from "react";
import * as styles from "./style.module.scss";

const Stack = ({ children }) => {
	return (
		<div className={styles.stack}>{children}</div>
	);
};

export default Stack;