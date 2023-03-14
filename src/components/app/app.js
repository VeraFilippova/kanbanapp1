
import Footer from '../footer/footer';
import Header from '../header/header';
import StatusBlock from '../statusblock/statusblock';
import './substrate.css';


import './app.css';

import { useState } from 'react';


const taskStatus = ['todo', 'progress', 'rewive', 'done'];
const initialTasks = [
  {id:1, title: 'task1', status:'todo'},
  {id:2, title: 'task2', status:'todo'},
  {id:3, title: 'task3', status:'progress'},
  {id:4, title: 'task4', status:'todo'},
];



function App(){
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="app">
      <Header/>
     
      <div className='substrate'>
{taskStatus.map((status)=>(
      <StatusBlock tasks={tasks} status={status}></StatusBlock>
      ))}
      </div>
   
      
      

      <Footer/>

    </div>
  );
  
}

export default App;