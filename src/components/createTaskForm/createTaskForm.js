import React, { useState } from "react";


import { Component } from "react";

class  CreateTaskForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:'',
      status:'todo'

    }
  }

  onValueChange = (e) => {
    this.setState({
        [e.target.title] : e.target.value
    })
}

onSubmit = (e) => {
    e.preventDefault();
 

    this.props.onAdd(this.state.title, this.state.status);
    this.setState({
        title: '',
       
    })
}

render(){
  const {title, status} = this.state;
  
  return(
    <form onSubmit={this.onSubmit} >
      <input type="text" 
      placeholder="add task"
      name="name"
      title="title"
      value={title}
      onChange={this.onValueChange}/>
      <button type="submit" >Submit</button>
      </form>

  )
}

}

// function CreateTaskForm(){
//   return(
//     <form >
//       <input type="text" id='title'  />
//       <button >Submit</button>
//       </form>
//   )
// }

export default CreateTaskForm;