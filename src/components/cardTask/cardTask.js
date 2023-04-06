const CardTask =({onToggleStatus, value})=>{
  
  return(
    <div onClick={onToggleStatus}>
{value}
    </div>
  )
}

export default CardTask;