import './header.css';


const Header = () =>{
  return(
    <div className="header d-flex justify-content-between align-items-center">
      <h1>Awesome Kanban Board</h1>
      <div className="icon-block d-flex gap-3">
        <img src="https://i.ibb.co/5xk70mq/user-avatar.jpg" alt="avatar" />
        <i class="fa-sharp fa-solid fa-chevron-down"></i>

      </div>
    </div>
  )
}

export default Header;