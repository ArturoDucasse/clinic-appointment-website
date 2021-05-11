import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/footer/footer.component";
import Legal from "./pages/dsgvo-tos/legal";
import Calendar from "./pages/calendar/Calendar";
import InputWithIcon from "./pages/userInfo/UserInfo";
import Time from "./pages/time/Time";

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/:test/tos'>
						<Legal />
					</Route>
					<Route path='/:test/calendar'>
						<Calendar />
					</Route>
					<Route path='/time'>
						<Time />
					</Route>
					<Route path='/userInfo'>
						<InputWithIcon />
					</Route>
					{/*//TODO Add Page to see the Symptoms, Impressum, GDPR */}
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
