import React from "react";

import "./test-option.styles.css";

import { withRouter } from "react-router-dom";

const TestOption = ({ children, title, subtitle, path, history }) => (
	<div className='option' onClick={() => history.push(path)}>
		{children}
		<h2 className='test-title'> {title} </h2>
		<p className='test-subtitle'>
			{subtitle} <br />
		</p>
	</div>
);

export default withRouter(TestOption);
