import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/navBar";
import Footer from "./components/footer/footer.component";
import { Home, Legal, Calendar, UserInfo, Time } from "./pages/index";
import createAppointment from "./utils/createAppointment";

function App() {
  let time = new Date();
  createAppointment(time);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/:test/tos" component={Legal}></Route>
          <Route path="/:test/calendar" component={Calendar}></Route>
          <Route path="/time" component={Time}></Route>
          <Route path="/userInfo" component={UserInfo}></Route>
          {/*//TODO Add Page to see the Symptoms, Impressum, GDPR */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
