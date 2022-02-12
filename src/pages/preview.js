import { useLocation } from "@reach/router";
import React, { useEffect, useState } from "react";
import Page from "../components/page";

const PreviewPage = () => {
	const [pageData, setPageData] = useState();
	const location = useLocation();

	useEffect(() => {
		const fetchPageData = async () => {
			const params = new URLSearchParams(location.search);
			const res = await fetch(`https://web-basic-knowledge.microcms.io/api/v1/pages/${params.get("contentId")}?draftKey=${params.get("draftKey")}`, {
				headers: {
					"X-MICROCMS-API-KEY": "ff970e44c5d744d89aa019f63e1e65985098",
				},
			});
			const json = await res.json();
			setPageData({ node: { ...json } });
		};
		fetchPageData();
	}, [location.search]);

	return (
		<Page pageData={pageData} />
	);
};

export default PreviewPage;