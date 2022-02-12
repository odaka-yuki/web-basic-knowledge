import React, { useEffect, useRef } from "react";

const Page = ({ pageData }) => {
	const ref = useRef();

	useEffect(() => {
		if (! pageData?.node) {
			return;
		}
		const script = document.createElement("script");
		script.textContent = pageData.node.javascript;
		ref.current.appendChild(script);
	}, [ref, pageData?.node]);

	if (! pageData?.node) {
		return null;
	}

	return (
		<div>
			<div ref={ref}>
				<style>{pageData.node.css}</style>
				<h1>{pageData.node.title}</h1>
				<div dangerouslySetInnerHTML={{__html: pageData.node.html}} />
			</div>
		</div>
	);
};

export default Page;