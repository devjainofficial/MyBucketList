import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const style = {
li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
liComplete: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
row: `flex`,
text: `ml-2 cursor-pointer`,
textComplete: `ml-2 cursor-pointer line-through`,
button: `cursor-pointer flex items-center`
}





const Bucket = ({bucket, toggleComplete, deleteBucket}) =>{
  return (
  <li className={bucket.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={()=> toggleComplete(bucket)} type= 'checkbox' checked={bucket.completed ? 'checked' : ''}/>
            <p onClick={()=> toggleComplete(bucket)} className={bucket.completed ? style.textComplete : style.text}>{bucket.text}</p>
        </div>
        <button onClick={()=> deleteBucket(bucket.id)}>{<FaTrashAlt />}</button>
  </li>
  )
}

export default Bucket;
