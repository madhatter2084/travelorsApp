import React from "react";
import LoginInfo from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Selection from "./pages/Selection";
import Signup from "./pages/Signup";
import "./App.css";
import Country from "./pages/Country"
import Convertor from "./pages/Convertor";
import Protocols from "./pages/Protocols";
import Footer from "./components/Footer"
import './pages/pages.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginInfo} />
        <Route exact path="/LoginInfo" component={LoginInfo} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Selection" component={Selection} />
        <Route exact path="/Protocols" component={Protocols} />
        <Route exact path="/Convertor" component={Convertor} />
        <Route exact path="/:CountryName" component={Country} />
      </Switch>
      <Footer />
    </Router>


  );
}

export default App;
