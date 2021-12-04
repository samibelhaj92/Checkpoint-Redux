import './App.css';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask'

function App() {
  return (
    <div className="App">
    <h1>Your Online To-Do App</h1>
      <AddTask/>
      <ListTask></ListTask>
    </div>
  );
}

export default App;
