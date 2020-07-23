import "./src/styles/global.scss";
import React from "react";

import App from "./src/components/App";
import Layout from "./src/components/Layout/layout";

export const wrapRootElement = ({ element }) => {
	return <App>{element}</App>;
};

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>;
};
