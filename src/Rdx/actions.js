import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "./types";

export const addtask =(newtask)=> {
    return {
     type: ADDTASK,
     payload: newtask   
    }
}

export const deletetask =(id)=> {
    return {
        type: DELETETASK,
        payload: id
    }
}

export const donetask =(id)=> {
    return {
        type: DONETASK,
        payload: id
    }
}

export const edittask =(id, newtask)=> {
    return {
        type: EDITTASK,
        id:id,
        newtask:newtask
    }
}