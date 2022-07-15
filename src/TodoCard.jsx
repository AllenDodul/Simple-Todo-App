import React from 'react';
import './style.css';

function TodoCard(props){
  return(
    <>
      {props.todo.map((todo, idx) => <li key={idx}>{todo} <button className='delButton'>Delete</button></li>)}
    </>
  )
}
export default TodoCard;