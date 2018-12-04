import React, { Component } from "react";

import "./App.css";

import Contact from "./Components/Contact";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Components/Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header branding="contract manager" />
          <div className="container">
            <Contacts />
            {/* <Contact
              name="jane doe"
              email="janedoe@gmail.com"
              phone="555-3241"
            />
            <Contact
              name="janet blah"
              email="janetblah@gmail.com"
              phone="555-9087"
            /> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
