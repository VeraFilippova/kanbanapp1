
import "./statusblock.css";
import "./card.css";
import CreateTaskForm from "../createTaskForm/createTaskForm";
import { Component } from "react";
import ListItem from "../listItem/listItem";



const StatusBlock = (props) => {
  const currentStatus = props.status;
  const addItem= props.addItem;
  
  return (

    <div className="statusblock">
      <h3>{props.status}</h3>
      <ListItem  data={props.tasks} status={props.status} ></ListItem>


      {/* {props.tasks
        .filter((task) => task.status === props.status)
        .map((task) => (
          <div className="card" key={task.id}>
            <p>{task.title}</p>
          </div>
        ))} */}




        <div>{currentStatus === "todo" && (<CreateTaskForm  ></CreateTaskForm>
        )}</div>



      <div>
        <div>
          {currentStatus === "progress" && (
            <select>
              {props.tasks.map((task) => (
                <option key={task.id} value={task.title}>
                  {task.title}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusBlock;
