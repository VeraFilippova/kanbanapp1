import ListItemBlock from "../ListItemBlock/ListItemBlock";

const ListItem = ({data})=>{
  const elem = data.
  map(item=>{
    const{id, ...itemProps} = item;
    
    return(
      <ListItemBlock
      key={id}
      {...itemProps}/>
    )
  })
  return(
    
    <ul >
      {elem}
    </ul>
  )
}

export default ListItem;

{/* {props.tasks
        .filter((task) => task.status === props.status)
        .map((task) => (
          <div className="card" key={task.id}>
            <p>{task.title}</p>
          </div>
        ))} */}


      //   const elem = data.
      //   map(item=>{
      //     const{id, ...itemProps} = item;
          
      //     return(
      //       <ListItemBlock
      //       key={id}
      //       {...itemProps}/>
      //     )
      //   })
      //   return(
          
      //     <ul >
      //       {elem}
      //     </ul>
      //   )
      // }