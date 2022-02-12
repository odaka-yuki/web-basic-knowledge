import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import CategoryNav from "../categoryNav";
import Selector from "../selector";
import Stack from "../stack";
import * as styles from "./style.module.scss";

const Layout = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "100%");
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	const closeMenu = (e) => {
		if (! e.target.classList.contains(styles.modal)) {
			return;
		}

		setIsMenuOpen(false);
	};

	const handleReset = () => {
		setFontSize("100%");
		setTheme("light");
	}

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [isMenuOpen]);

	useEffect(() => {
		const fontSizeSetting = localStorage.getItem("fontSize");
		if (fontSizeSetting) {
			setFontSize(fontSizeSetting);
		}
	}, [setFontSize]);

	useEffect(() => {
		document.documentElement.style.fontSize = fontSize;
	}, [fontSize]);


	useEffect(() => {
		const themeSetting = localStorage.getItem("theme");
		if (themeSetting) {
			setTheme(themeSetting);
		}
	}, [setTheme]);

	useEffect(() => {
		const changeTheme = (color, bgColor) => {
			document.documentElement.style.setProperty("--color", color);
			document.documentElement.style.setProperty("--bg-color", bgColor);
		};

		const lightTheme = () => {
			changeTheme("#333", "#fff");
		};

		const darkTheme = () => {
			changeTheme("#ccc", "#222");
		};

		switch (theme) {
			case "light":
				lightTheme();
				break;
				
			case "dark":
				darkTheme();
				break;

			case "auto":
				const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
				if (isDarkTheme) {
					darkTheme();
				} else {
					lightTheme();
				}
				break;
		}
	}, [theme]);


	return (
		<div>
			<header className={styles.header}>
				<p className={styles.siteName}><Link to={`/`}>Web基礎知識</Link></p>
				<button className={styles.menuButton} type="button" aria-label="menu button" onClick={() => setIsMenuOpen(prevValue => ! prevValue)}>
					{isMenuOpen
					?<i className="bi bi-x-lg"></i>
					:<i className={`bi bi-three-dots`}></i>
					}
				</button>
			</header>
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
				<div
					className={[styles.modal, isMenuOpen && styles.isOpen].join(" ")}
					onClick={closeMenu}
					onKeyDown={closeMenu}
					role="button"
					tabIndex={0}
				>
					<div className={[styles.menu, isMenuOpen && styles.isOpen].join(" ")}>
						<div>
							<Stack>
								<div>
									<h2>カテゴリー</h2>
									<CategoryNav onClick={() => setIsMenuOpen(false)} />
								</div>
								<div>
									<h2>設定</h2>
									<Stack>
										<Selector
											title="文字サイズ"
											name="fontSize"
											options={[
												{ value: "75%", label: "小" },
												{ value: "100%", label: "中" },
												{ value: "150%", label: "大" },
											]}
											selected={fontSize}
											onChangeValue={(e) => setFontSize(e.currentTarget.value)}
										/>
										<Selector
											title="テーマ"
											name="theme"
											options={[
												{ value: "light", label: "ライト" },
												{ value: "dark", label: "ダーク" },
												{ value: "auto", label: "自動" },
											]}
											selected={theme}
											onChangeValue={(e) => setTheme(e.currentTarget.value)}
										/>
										<div>
											<button className={styles.resetButton} type="button" onClick={handleReset}>リセット</button>
										</div>
									</Stack>
								</div>
							</Stack>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;