const ListItemBlock=(props)=>{
  const {title, status} = props;
  return (
    <li className="card">
      <span>{title}</span>
    
    </li>
  )
}

export default ListItemBlock;