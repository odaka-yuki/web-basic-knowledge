import React, { useEffect } from "react";
import * as styles from "./style.module.scss";

const Selector = ({ title, name, options, selected, onChangeValue }) => {

	useEffect(() => {
		if (! selected) {
			return;
		}
		localStorage.setItem(name, selected);
	}, [name, selected]);

	return (
		<label className={styles.label}>
			<span className={styles.label}>{title}</span>
			<select className={styles.select} value={selected} onChange={onChangeValue}>
				{options.map(({ value, label }) => {
					return (
						<option key={value} value={value}>{label}</option>
					);
				})}
			</select>
		</label>
	);
};

export default Selector;