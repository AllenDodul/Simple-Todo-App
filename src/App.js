import React,{useState} from "react";
import "./style.css";

import TodoList from './TodoList';
import AddTodo from './AddTodo';

const dummyTodos = ['BreakFast','homework'];

export default function App() {
  const [todos, setTodos] = useState(dummyTodos)
  const getTodo = (todo) =>{
    setTodos([...dummyTodos, todo])
  }

  return (
    <div>
      <AddTodo getInput={getTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}
