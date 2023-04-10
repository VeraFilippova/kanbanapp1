import React, { useState } from "react";
import { Component } from "react";
import "./CreateTaskForm.css";

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      status: "todo",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();

    this.props.addItem(this.state.title, this.state.status);
    this.setState({
      title: "",
    });
  };
  render() {
    const { title, status } = this.state;

    return (
      <form className="input-style" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="add task"
          name="name"
          title="title"
          value={title}
          onChange={this.onValueChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default CreateTaskForm;
