import "./statusblock.css";
import "./card.css";
import CreateTaskForm from "../createTaskForm/createTaskForm";
import { Component, useState } from "react";
import ListItem from "../listItem/listItem";
import CardTask from "../cardTask/cardTask";
import SelectTask from "../selectTask/selectTask";

const StatusBlock = (props) => {
  const currentStatus = props.status;

  const [value, setValue] = useState("");

  const newStatus = (e) => {
    e.preventDefault();
    console.log(value);
    console.log("Отправлена форма.");
    props.onToggleStatus(Number(value));
  };

  return (
    <div className="statusblock">
      <h3>{props.status}</h3>
      <div>
        {currentStatus === "todo" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "todo")
              .map((task) => (
                <li className="card" key={task.id} value={task.title}>
                  <div>
                    <CardTask
                      onToggleStatus={() => props.onToggleStatus(task.id)}
                      value={task.title}
                    ></CardTask>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
      <div>
        {currentStatus === "progress" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "progress")

              .map((task) => (
                <li className="card" key={task.id} value={task.title}>
                  {task.title}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div>
        {currentStatus === "rewive" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "rewive")

              .map((task) => (
                <li className="card" key={task.id} value={task.title}>
                  {task.title}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div>
        {currentStatus === "done" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "done")

              .map((task) => (
                <li className="card" key={task.id} value={task.title}>
                  {task.title}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div>
        {currentStatus === "todo" && (
          <CreateTaskForm addItem={props.addItem}></CreateTaskForm>
        )}
      </div>

      <div>
        <div>
          {currentStatus === "progress" && (
            <div>
              {/* <SelectTask 
              addNewStatus={props.addNewStatus}
              tasks={props.data} 
              status={props.status} 
            
             ></SelectTask> */}
              <form onSubmit={newStatus}>
                <select
                  value={value}
                  onChange={(event) =>
                    setValue(event.target.value, event.target.status)
                  }
                >
                  {props.tasks
                    .filter((item) => item.status === "todo")
                    .map((task) => (
                      <option
                        key={task.id}
                        status={task.status}
                        id={task.id}
                        value={task.id}
                      >
                        {task.title}
                      </option>
                    ))}
                </select>
                <button type="submit">submit</button>
              </form>
              <div> выбрано поле {value}</div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div>
          {currentStatus === "rewive" && (
            <div>
              {/* <SelectTask 
              addNewStatus={props.addNewStatus}
              tasks={props.data} 
              status={props.status} 
            
             ></SelectTask> */}
              <form onSubmit={newStatus}>
                <select
                  value={value}
                  onChange={(event) =>
                    setValue(event.target.value, event.target.status)
                  }
                >
                  {props.tasks
                    .filter((item) => item.status === "progress")
                    .map((task) => (
                      <option
                        key={task.id}
                        status={task.status}
                        id={task.id}
                        value={task.id}
                      >
                        {task.title}
                      </option>
                    ))}
                </select>
                <button type="submit">submit</button>
              </form>
              <div> выбрано поле {value}</div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div>
          {currentStatus === "done" && (
            <div>
              {/* <SelectTask 
              addNewStatus={props.addNewStatus}
              tasks={props.data} 
              status={props.status} 
            
             ></SelectTask> */}
              <form onSubmit={newStatus}>
                <select
                  value={value}
                  onChange={(event) =>
                    setValue(event.target.value, event.target.status)
                  }
                >
                  {props.tasks
                    .filter((item) => item.status === "rewive")
                    .map((task) => (
                      <option
                        key={task.id}
                        status={task.status}
                        id={task.id}
                        value={task.id}
                      >
                        {task.title}
                      </option>
                    ))}
                </select>
                <button type="submit">submit</button>
              </form>
              <div> выбрано поле {value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusBlock;
