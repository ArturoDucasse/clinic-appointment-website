import React from "react";

import "./style.css";

import {
	DirectionsWalk,
	AssignmentInd,
	FormatItalic,
} from "@material-ui/icons";

import TestOption from "../../components/home-option-component/test-option.component";

const Home = (props) => {
	return (
		<div className='home_container'>
			<div className='header'>
				Bitte wählen Sie eine der folgenden Optionen aus:
			</div>
			<div className='options-container'>
				<div className='options'>
					<TestOption
						title='PCR-TEST'
						subtitle='Ich möchte mich für einen schnellen PCR-Test anmelden'
						path='/pcr/tos'>
						<DirectionsWalk className='test-icon' alt='Icon' fontSize='large' />
					</TestOption>

					<TestOption
						title='ANTIGEN-TEST'
						subtitle='Ich möchte mich für einen schnellen Antigen-Test anmelden'
						path='/antigen/tos'>
						<AssignmentInd className='test-icon' alt='Icon' fontSize='large' />
					</TestOption>

					<TestOption
						title='SYMPTOME'
						subtitle='Welche Symptome hat Corona?    '
						path='/symptoms'>
						<FormatItalic className='test-icon' alt='Icon' fontSize='large' />
					</TestOption>
				</div>
			</div>
		</div>
	);
};

export default Home;
