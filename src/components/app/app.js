import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import StatusBlock from "../statusblock/statusblock";

import "./substrate.css";
import "./app.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "купить молоко", status: "Backlog" },
        { id: 2, title: "погулять с собакой", status: "Backlog" },
        { id: 3, title: "сделать д/з", status: "Ready" },
        { id: 4, title: "сходить в зал", status: "Ready" },
        { id: 5, title: "помыть посуду", status: "Backlog" },
        { id: 6, title: "отправить письмо", status: "In progress" },
        { id: 7, title: "посмотреть фильм", status: "Finished" },
      ],
    };

    this.maxId = 8;
  }

  addItem = (title) => {
    const newItem = {
      title,
      status: "Backlog",
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };



  onToggleStatus = (id) => {
    // console.log(`task id ${id}`);
    // this.setState(({data})=>{
    //   const index = data.findIndex(elem=>elem.id===id);
    //   const old = data[index];
    //   const newItem ={...old, status:'progress'};
    //   const newArr= [...data.slice(0,index), newItem, ...data.slice(index+1)];
    //   return{
    //     data:newArr
    //   }
    // })

    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id && item.status == "Backlog") {
          return { ...item, status: "Ready" };
        }
        if (item.id === id && item.status == "Ready") {
          return { ...item, status: "In progress" };
        }
        if (item.id === id && item.status == "In progress") {
          return { ...item, status: "Finished" };
        }
        return item;
      }),
    }));
  };



  render() {
    const taskStatus = ["Backlog", "Ready", "In progress", "Finished"];
    const addItemProps = this.addItem;

    const activeTask = this.state.data.length;
    const doneTask = this.state.data.filter(
      (item) => item.status === "Finished"
    ).length;

    return (
      <div className="app">
        <Header />

        <div className="substrate">
          {taskStatus.map((status) => (
            <StatusBlock
              tasks={this.state.data}
              status={status}
              addItem={addItemProps}
              data={this.state.data}
              onToggleStatus={this.onToggleStatus}
              
            ></StatusBlock>
          ))}
        </div>

        <Footer activeTask={activeTask} doneTask={doneTask} />
      </div>
    );
  }
}

export default App;
