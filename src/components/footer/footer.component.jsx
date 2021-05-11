import React from "react";

import { withRouter } from "react-router-dom";

import "./footer.styles.css";

const NavBar = (props) => {
	return (
		<div className='footer-container'>
			<div
				className='footer-links'
				onClick={() => props.history.push("/Impressum")}>
				{" Impressum "}
			</div>
			-
			<div className='footer-links' onClick={() => props.history.push("/gdpr")}>
				{" Datenschutz "}
			</div>
		</div>
	);
};

export default withRouter(NavBar);
