import React from "react";
import "./style.css";

import TodoList from './TodoList';

const dummyTodos = ['Breakfast', 'HomeWork'];

export default function App() {
  return (
    <div>
      <TodoList todos={dummyTodos}/>
    </div>
  );
}
