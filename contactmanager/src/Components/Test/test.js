import React, { Component } from "react";

//how to fetch data with get from an remote api

class test extends Component {
  state = {
    id: "",
    title: "",
    userId: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          id: data.id,
          title: data.title,
          userId: data.userId,
          body: data.body
        })
      );
  }

  render() {
    const { id, title, userId, body } = this.state;
    return (
      <div>
        <h1>{title + " " + id}</h1>
        <p> {body}</p>
      </div>
    );
  }
}

export default test;
