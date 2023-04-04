import { Component } from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import StatusBlock from '../statusblock/statusblock';
import './substrate.css';


import './app.css';
import CreateTaskForm from '../createTaskForm/createTaskForm';
import ListItem from '../listItem/listItem';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[
          {id:1, title: 'task1', status:'todo'},
          {id:2, title: 'task2', status:'todo'},
          {id:3, title: 'task3', status:'progress'},
          {id:4, title: 'task4', status:'todo'},
          {id:5, title: 'task7', status:'done'},
      ]
    }
    this.maxId=7;
  }

  addItem = (title) => {
    const newItem = {
        title, 
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

render(){
  const taskStatus = ['todo', 'progress', 'rewive', 'done'];
  
  return(
    <div className="app">
      <Header/>
     
      <div className='substrate'>
{taskStatus.map((status)=>(
      <StatusBlock tasks={this.state.data} status={status} onAdd={this.addItem}  data={this.state.data}>
        
      </StatusBlock>
      ))}
      
      </div>
   
      {/* <ListItem
      data={this.state.data}/> */}
      
      <CreateTaskForm onAdd={this.addItem}/>
      <Footer/>

    </div>
  );
  

}




}





export default App;