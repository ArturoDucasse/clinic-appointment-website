import React from "react";

import "./test-option.styles.css";

const TestOption = ({ children, title, subtitle }) => (
	<div className='option'>
		{children}
		<h4> {title} </h4>
		<p>{subtitle}</p>
	</div>
);

export default TestOption;
