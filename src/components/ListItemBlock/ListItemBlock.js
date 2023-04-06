const ListItemBlock=(props)=>{
  const {title} = props;

  

  return (
    <li className="card">
      <span>{title}</span>
    
    </li>
  )
}

export default ListItemBlock;


{/* {props.tasks
        .filter((task) => task.status === props.status)
        .map((task) => (
          <div className="card" key={task.id}>
            <p>{task.title}</p>
          </div>
        ))} */}