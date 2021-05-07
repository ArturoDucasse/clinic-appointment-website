import React from "react";
import {
	DirectionsWalk,
	AssignmentInd,
	FormatItalic,
} from "@material-ui/icons";
import "./style.css";

import TestOption from "../../components/home-option-component/test-option.component";

const Home = () => {
	return (
		<div className='home_container'>
			<div className='header'>
				Bitte wählen sie eine der folgenden optionen aus:
			</div>
			<div className='options'>
				<TestOption
					title='PCR-TEST'
					subtitle='Ich möchte mich für einen schnellen PCR-Test anmelden'>
					<DirectionsWalk className='test-icon' alt='Icon' fontSize='large' />
				</TestOption>

				<TestOption
					title='ANTIGEN-TEST'
					subtitle='Ich möchte mich für einen schnellen Antigen-Test anmelden'>
					<AssignmentInd className='test-icon' alt='Icon' fontSize='large' />
				</TestOption>

				<TestOption title='SYMPTOME' subtitle='Welche Symptome hat Corona?'>
					<FormatItalic className='test-icon' alt='Icon' fontSize='large' />
				</TestOption>
			</div>
		</div>
	);
};

export default Home;
