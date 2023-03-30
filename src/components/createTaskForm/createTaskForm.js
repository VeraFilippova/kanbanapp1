import React, { useState } from "react";

function CreateTaskForm(){

const[value, setValue] = useState('');

const handleSubmit = e =>{
  e.preventDefault();
  console.log(value);
}
  return(
    <form >
      <input type="text" id='title'  onChange= {(e) => console.log(setValue(e.target.value))}/>
      <button >Submit</button>
      </form>
  )
}

export default CreateTaskForm;