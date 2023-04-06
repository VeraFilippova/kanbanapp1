import React, { useState } from "react";
import { Component } from "react";

class SelectTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "title",
      status: "done",
      id:"1"
    };
  }
  onValueChange = (e) => {
    this.setState({
      status:"done",
      id:1,
      title:"hi"
    });
    console.log("hiiii");
    
  };



  onSubmit = (e) => {
    e.preventDefault();

    this.props.addNewStatus(this.state.title, this.state.status, this.state.id);
    this.setState({
      title: this.state.title,
      status:'done',
      id:this.state.id
    });
  };

  render() {
    const { tasks} = this.props;

    return (
      <form action="" onSubmit={this.onSubmit}>

        <select status={this.state.status} id={this.state.id} title={this.state.title}  onChange={()=>this.onValueChange() }>
        {tasks
          .filter((item) => item.status === "todo")
          .map((task) => (
            <option key={task.id} status={task.status} id={task.id} title={task.title}>
              {task.title}
            </option>
          ))}
      </select>
      <button type="submit">submit</button>
      </form>
      
      // <div>hi</div>

      // <form onSubmit={this.onSubmit}>
      //   <input
      //     type="text"
      //     placeholder="add task"
      //     name="name"
      //     title="title"
      //     value={title}
      //     onChange={this.onValueChange}
      //   />
      //   <button type="submit">Submit</button>
      // </form>
    );
  }
}
export default SelectTask;
