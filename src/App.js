import React, {useState, useEffect} from "react";
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    filterHandler();
  },[todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterList(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterList(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterList(todos);
        break;
      }
  }
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form textInput={textInput} setTextInput = {setTextInput} todos={todos} setTodoList={setTodoList} status={status} setStatus={setStatus}/>
      <Todolist todos={todos} setTodoList={setTodoList} filterList={filterList} />
    </div>
  );
}

export default App;
