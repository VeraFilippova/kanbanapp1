import { useState } from "react";
import "./statusblock.css";
import "./card.css";
import CreateTaskForm from "../createTaskForm/createTaskForm";



const StatusBlock = (props) => {
  const currentStatus = props.status;
  const [title, setTitle] = useState([])

  return (
    <div className="statusblock">
      <h3>{props.status}</h3>
      {props.tasks
        .filter((task) => task.status === props.status)
        .map((task) => (
          <div className="card" key={task.id}>
            <p>{task.title}</p>
          </div>
        ))}

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

      {/* {currentStatus==="todo" &&(
      <form >
      <input type="text" id='title' value={title} onChange={e=>setTitle(e.target.value)} />
      <button onClick={onSubmit}>Submit</button>
      </form>
      )} */}

      {currentStatus==='todo' &&(
        <CreateTaskForm />
      )}

      

      {/* <button>Submit</button> */}

     
    </div>
  );
};

export default StatusBlock;
