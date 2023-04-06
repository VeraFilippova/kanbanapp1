import './footer.css';


const Footer = ({activeTask,doneTask}) =>{
  return(
    <div className="footer d-flex justify-content-between align-items-center">
      <div className="left-text d-flex gap-3">
        <div className="">Active tasks: {activeTask} </div>
        <div className="">Finished tasks: {doneTask} </div>

      </div>
      <div className="right-text">
      <div className="">Kanban board by </div>
        
      </div>
    </div>
  )
}

export default Footer;