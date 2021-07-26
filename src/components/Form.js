import React from 'react';

const Form = ({textInput, setTextInput, todos, setTodoList, status, setStatus})  => {
  const inputChangeHandler = (e) => {
    setTextInput(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todos,
      {text:textInput, completed:false, id:Math.random()*100000}
    ])
  }
  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
  }
  return(
    <form>
      <input type="text" className="todo-input" onChange = {inputChangeHandler}  />
      <button className="todo-button" type="submit" onClick = {submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusChangeHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;
