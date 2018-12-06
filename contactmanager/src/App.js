import React, { Component } from "react";

import "./App.css";

import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Components/contacts/Contacts";
import { Provider } from "./context";

import AddContact from "./Components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <Header branding="contract manager" />
            <div className="container">
              <AddContact />
              <Contacts />
            </div>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
