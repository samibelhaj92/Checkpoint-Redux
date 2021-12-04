import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "./types";

const initialState = {
    todos: [
        {
            id: 0,
            description: 'Sleep',
            isDone: false,
        },
        {
            id: 1,
            description: 'Eat',
            isDone: false,
        },
        {
            id: 2,
            description: 'Study',
            isDone: false,
        },
    ]
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            return {...state, todos: [...state.todos, action.payload]}
        
        case DELETETASK:
            return {...state, todos: state.todos.filter(el=>el.id !== action.payload)}
        
        case DONETASK:
            return {...state, todos: state.todos.map(el=> el.id === action.payload ? {...el, isDone: !el.isDone} : el )}

        case EDITTASK:
            return  {...state, todos: state.todos.map(el=> el.id==action.id? {...el, description:action.newtask } : el )}

            default:
            return state
    }
}

export default Reducer