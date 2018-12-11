import React, { Component } from "react";

import "./App.css";

import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Components/contacts/Contacts";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddContact from "./Components/contacts/AddContact";
import About from "./Components/Pages/About";
import notFound from "./Components/Pages/notFound";
import test from "./Components/Test/test";
import EditContact from "./Components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="contract manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                {/* example on how to do parameters */}
                <Route exact path="/about/:example" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/test" component={test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={notFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
