import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from "./Task"




const ListTask = () => {
    
    const todos= useSelector(state=> state.todos)
    
    const [filterDone, setFilterDone]=useState(false)
    const [filter, setFilter]=useState(false)

    return (
        <div>
            <button onClick={()=>setFilter(false)} >All</button>
            <button onClick={()=>{setFilterDone(true); setFilter(true)}}>Done</button>
            <button onClick={()=>{setFilterDone(false); setFilter(true)}}>Undone</button>
            {
            filterDone && filter ? todos.filter(el=>el.isDone).map(todo=> <Task todo={todo} key={todo.id}></Task>): 
            ! filterDone && filter ? todos.filter(el=>!el.isDone).map(todo=> <Task todo={todo} key={todo.id}></Task>): 
            ! filter ? todos.map(todo=> <Task todo={todo} key={todo.id}></Task>) 
        : null}
            </div>
    )
}

export default (ListTask)