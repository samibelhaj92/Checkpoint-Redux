import { useDispatch } from "react-redux"
import { deletetask, donetask } from "../Rdx/actions"
import EditTask from "./EditTask"

const Task =({todo})=>{
    const dispatch= useDispatch()
           
    return (

<div>
    <ul>
        <li style={{textDecoration: todo.isDone && "line-through" }} >{todo.description}</li>
        <button onClick={()=> dispatch(deletetask(todo.id)) }>delete</button>
        <button onClick={()=> dispatch(donetask(todo.id))}>{todo.isDone ? "Undone" : "Done"}</button>
        <EditTask todo={todo}     ></EditTask>
    </ul>
</div>
)
}
export default Task