import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtask } from "../Rdx/actions"

const AddTask = () =>{

const [text, setText]= useState('')
const dispatch = useDispatch()

  return (
    <div>
      <input 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      ></input>
      <button 
      onClick={()=>{dispatch(addtask({id: Math.random(), description:text , done:false})); setText("")}}>add Task</button>
    </div>
  )
}
export default AddTask