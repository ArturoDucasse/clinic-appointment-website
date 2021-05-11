import React from "react";

import "./style.css";
import { Button } from "semantic-ui-react";
//import { ReactComponent } from "*.svg";

import { withRouter } from "react-router-dom";

class Legal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
		};
	}

	handleCheck = () => {
		this.setState({ checked: !this.state.checked });
	};

	render() {
		return (
			<div className='legal_container'>
				<header>
					Anmeldung - PCR-Testung
					<div className='header_line' />
				</header>

				<div className='legal_information p'>
					<p>
						Ein kostenloser Coronavirus-Test(PCR-Test mittels
						Mund-Rachen-Abstrich oder PCR-Gurgeltest) steht derzeit 1x pro Woche
						den BürgerInnen von Berlin zu Verfügung, um ein klares Bild vom
						Infektionsgeschen vvor Ort zu erhalten. Die Testungen sind
						freiwillig. Angemeldet werden können grundsätzlich alle BürgerInnen
						von Berlin Minderjährige müssen con einem Elternteil begleitet
						werden.
					</p>
					<p>Leider NICHT an der Testung teilnehmen dürfen:</p>
					<ul>
						<li>
							Personen mit COVID-Krankheitssymptomen (in diesem Fall bitte
							entweder den Hausarzt oder 1450 anrufen)
						</li>
						<li>
							Personen die sich wegen einer anderen Krankheit im häuslichen
							Krankenstand befinden.
						</li>
						<li>
							Personen die zum Testzeitpunkt in behördlicher Absonderung
							(Quarantäne) sind
						</li>
						<li>Personen die in Alten- und Pflegeheimen wohnen</li>
						<li>Kinder unter 3 Jahren</li>
					</ul>
				</div>

				<div className='legal_check p'>
					<input
						type='checkbox'
						className='checkBox'
						value={this.state.checked}
						onClick={() => this.handleCheck()}
					/>
					<p>
						Ich melde mich selbst zu Testung an und erteile hiermit die
						ausdrückliche Einwilligung in die Verarbeitung der nötigen
						personenbezogenen Daten zum Zweck der Durchführung eines
						Corona-Tests. Ich bestätige auch die Richtigkeit meiner persönlichen
						Daten und erkläre mich einverstanden, dass meine Daten für die
						gesetzlich zulässigen Zwecke gespeichert und verwendet werden und
						bestätige, die Datenschutzinformationen (
						<a href='#'>hier klicken</a>) gelesen zu haben.
					</p>
				</div>

				<div className='legal_button'>
					<Button
						positive
						size='large'
						onClick={() =>
							this.state.checked
								? this.props.match.params.test === "pcr" ||
								  this.props.match.params.test === "antigen"
									? this.props.history.push(
											`/${this.props.match.params.test}/calendar`
									  )
									: this.props.history.push("")
								: null
						}
						disabled={!this.state.checked}>
						Weiter zum Kalender
					</Button>
				</div>
			</div>
		);
	}
}

export default withRouter(Legal);
