import ListItemBlock from "../ListItemBlock/ListItemBlock";

const ListItem = ({data})=>{
  const elem = data.map(item=>{
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