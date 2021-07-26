import React from 'react';
import Todo from './Todo';

const Todolist = ({todos, setTodoList, filterList}) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
      {filterList.map((todo) =>
          <Todo text={todo.text} key={todo.id} todos={todos} setTodoList={setTodoList} todo={todo}/>
      )}
      </ul>
    </div>
  )
}

export default Todolist;
