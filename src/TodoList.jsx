import React from 'react';

import TodoCard from './TodoCard';

function TodoList(props){
  return(
    <ul>
      <TodoCard todo={props.todos}/>
    </ul>
  )
}
export default TodoList;