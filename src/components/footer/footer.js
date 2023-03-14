import './footer.css';


const Footer = () =>{
  return(
    <div className="footer d-flex justify-content-between align-items-center">
      <div className="left-text d-flex gap-3">
        <div className="">Active tasks: </div>
        <div className="">Finished tasks: </div>

      </div>
      <div className="right-text">
      <div className="">Kanban board by </div>
        
      </div>
    </div>
  )
}

export default Footer;