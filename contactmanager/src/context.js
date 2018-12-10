import React, { Component } from "react";
import Axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        //action.payload is whatever data thrown
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: "Jimminy Cricket",
  //       email: "jimminy@gmail.com",
  //       phone: "555-555-5555"
  //     },
  //     {
  //       id: 2,
  //       name: "Johannes Doe",
  //       email: "johannes@gmail.com",
  //       phone: "555-555-1234"
  //     },
  //     {
  //       id: 3,
  //       name: "Jannet Doe",
  //       email: "jannet@gmail.com",
  //       phone: "555-555-4321"
  //     }
  //   ],
  //   dispatch: action => {
  //     this.setState(state => reducer(state, action));
  //   }
  // };
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  //fetching data from server
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ contacts: res.data });
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
