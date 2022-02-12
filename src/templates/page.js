import React from "react";
import Page from "../components/page";

const PageTemplate = ({ pageContext }) => {

	return (
		<Page pageData={pageContext.page} />
	);
};

export default PageTemplate;