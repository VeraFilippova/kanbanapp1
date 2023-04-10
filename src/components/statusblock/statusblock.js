import "./statusblock.css";
import "./card.css";
import CreateTaskForm from "../createTaskForm/createTaskForm";
import { Component, useState } from "react";
import CardTask from "../cardTask/cardTask";

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
      {/* Board Backlog */}
      <div>
        {currentStatus === "Backlog" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "Backlog")
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

      {/* Board Ready */}
      <div>
        {currentStatus === "Ready" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "Ready")

              .map((task) => (
                <li className="card" key={task.id} value={task.title}>
                  {task.title}
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* Board In progress */}

      <div>
        {currentStatus === "In progress" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "In progress")

              .map((task) => (
                <li className="card" key={task.id} value={task.title}>
                  {task.title}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Board Finished */}

      <div>
        {currentStatus === "Finished" && (
          <ul>
            {props.tasks
              .filter((item) => item.status === "Finished")

              .map((task) => (
                <li className="card" key={task.id} value={task.title}>
                  {task.title}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* form addTask */}

      <div>
        {currentStatus === "Backlog" && (
          <CreateTaskForm addItem={props.addItem}></CreateTaskForm>
        )}
      </div>

      {/* select Ready */}

      <div>
        <div className="select-style">
          {currentStatus === "Ready" && (
            <div>
              <form onSubmit={newStatus}>
                <select
                  value={value}
                  onChange={(event) =>
                    setValue(event.target.value, event.target.status)
                  }
                >
                  {props.tasks
                    .filter((item) => item.status === "Backlog")
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
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* select In progress */}
      <div>
        <div className="select-style">
          {currentStatus === "In progress" && (
            <div>
              <form onSubmit={newStatus}>
                <select
                  value={value}
                  onChange={(event) =>
                    setValue(event.target.value, event.target.status)
                  }
                >
                  {props.tasks
                    .filter((item) => item.status === "Ready")
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
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* select Finished */}

      <div>
        <div>
          {currentStatus === "Finished" && (
            <div className="select-style">
              <form onSubmit={newStatus}>
                <select
                  value={value}
                  onChange={(event) =>
                    setValue(event.target.value, event.target.status)
                  }
                >
                  {props.tasks
                    .filter((item) => item.status === "In progress")
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
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusBlock;
