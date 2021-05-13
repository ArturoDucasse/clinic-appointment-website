import React from "react";

import { withRouter } from "react-router-dom";

import berlin from "../../images/berlin.jpg";
import shield from "../../images/fitlex.png";

import "./style.css";

const NavBar = (props) => {
	return (
		<div className='navBar_container'>
			<div className='nav-logo' onClick={() => props.history.push("/")}>
				<img className='fitflex-logo' src={shield} alt='fitlex.me' />
				<p className='nav-logo-text'>
					Berlin testet.
					<br /> Schnell und <br /> launfend.
				</p>
			</div>
			<img className='berlin-logo' src={berlin} alt='berlin' />
		</div>
	);
};

export default withRouter(NavBar);
