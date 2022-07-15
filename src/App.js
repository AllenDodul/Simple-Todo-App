import React from "react";
import "./style.css";

import TodoList from './TodoList';
import AddTodo from './AddTodo';

const dummyTodos = ['Breakfast', 'HomeWork'];

export default function App() {
  return (
    <div>
      <AddTodo />
      <TodoList todos={dummyTodos}/>
    </div>
  );
}
