import React, { Component } from "react";
import { Consumer } from "../../context";
//uuid module installed with sudo npm install uuid
import uuid from "uuid";

import TextInputGroup from "../layout/TextInputGroup";
import Axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  //this line will set state into value of the forms
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // onSubmit = (dispatch, e) => {
  //   e.preventDefault();
  //   const { name, email, phone } = this.state;

  //   if (name === "") {
  //     this.setState({ errors: { name: "Name is required" } });
  //     return;
  //   }
  //   if (email === "") {
  //     this.setState({ errors: { email: "Email is required" } });
  //     return;
  //   }
  //   if (phone === "") {
  //     this.setState({ errors: { phone: "phone is required" } });
  //     return;
  //   }

  //   const newContact = {
  //     id: uuid(),
  //     name,
  //     email,
  //     phone
  //   };
  //   //adding new contact
  //   Axios.post("https://jsonplaceholder.typicode.com/users/", newContact).then(
  //     res => dispatch({ type: "ADD_CONTACT", payload: res.data })
  //   );

  //   this.setState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     errors: {}
  //   });

  //   //how to redirect
  //   this.props.history.push("/");
  // };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "phone is required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    //adding new contact using async await
    //try catch for workaround on small bugs where i cannot delete added item

    const res = await Axios.post(
      "https://jsonplaceholder.typicode.com/users/",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    //how to redirect
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      placeholder="Enter Name...."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="email"
                    name="email"
                    placeholder="enter email ..."
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="phone"
                    name="phone"
                    placeholder="enter phone number.."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
