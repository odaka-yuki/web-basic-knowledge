import React, { useEffect, useRef } from "react";

const PageTemplate = ({ pageContext }) => {
	const { node } = pageContext.page;
	const ref = useRef();

	useEffect(() => {
		const script = document.createElement("script");
		script.textContent = node.javascript;
		ref.current.appendChild(script);
	}, [ref, node]);

	return (
		<div>
			<div ref={ref}>
				<style>{node.css}</style>
				<h1>{node.title}</h1>
				<div dangerouslySetInnerHTML={{__html: node.html}} />
			</div>
		</div>
	);
};

export default PageTemplate;