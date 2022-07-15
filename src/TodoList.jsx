import React from 'react';

import TodoCard from './TodoCard';
import './style.css';

function TodoList(props){
  return(
    <ul>
      <TodoCard todo={props.todos}/>
    </ul>
  )
}
export default TodoList;