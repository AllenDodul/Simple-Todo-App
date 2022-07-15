import React from 'react';

function TodoCard(props){
  return(
    <>
      {props.todo.map((todo, idx) => <li key={idx}>{todo}</li>)}
    </>
  )
}
export default TodoCard;