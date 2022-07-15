import React from "react";
import "./style.css";

import TodoList from './TodoList';
import AddTodo from './AddTodo';

const dummyTodos = [];

export default function App() {
  
  const getTodo = (todo) =>{
    dummyTodos.push(todo);
  }

  return (
    <div>
      <AddTodo getInput={getTodo}/>
      <TodoList todos={dummyTodos}/>
    </div>
  );
}
