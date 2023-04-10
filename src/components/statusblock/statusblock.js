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
      {/* Board todo */}
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

      {/* Board progress */}
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
      {/* Board rewive */}

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

      {/* Board done */}

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

      {/* form addTask */}

      <div>
        {currentStatus === "todo" && (
          <CreateTaskForm addItem={props.addItem}></CreateTaskForm>
        )}
      </div>

      {/* select progress */}

      <div>
        <div className="select-style">
          {currentStatus === "progress" && (
            <div>
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
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* select rewive */}
      <div>
        <div className="select-style">
          {currentStatus === "rewive" && (
            <div>
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
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* select done */}

      <div>
        <div>
          {currentStatus === "done" && (
            <div className="select-style">
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
