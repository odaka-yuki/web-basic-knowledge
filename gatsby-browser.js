const React = require("react");
const Layout = require("./src/components/layout").default;
require("./src/styles/style.scss");
require("./node_modules/bootstrap-icons/font/bootstrap-icons.css");


exports.wrapPageElement = ({ element, props }) => {
	return (
		<Layout {...props}>{element}</Layout>
	);
};
