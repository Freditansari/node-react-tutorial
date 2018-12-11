import React, { Component } from "react";
import { Consumer } from "../../context";
//uuid module installed with sudo npm install uuid
import uuid from "uuid";

import TextInputGroup from "../layout/TextInputGroup";
import Axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    /**
     * getting id from parameter.
     * fetch the related data from server
     * set it to the state in component
     */
    const { id } = this.props.match.params;
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  //this line will set state into value of the forms
  onChange = e => this.setState({ [e.target.name]: e.target.value });

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

    // const res = await Axios.post(
    //   "https://jsonplaceholder.typicode.com/users/",
    //   newContact
    // );
    // dispatch({ type: "ADD_CONTACT", payload: res.data });

    const updateContact = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;

    const res = await Axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

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
              <div className="card-header">Edit Contact</div>
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
                    value="update Contact"
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

export default EditContact;
