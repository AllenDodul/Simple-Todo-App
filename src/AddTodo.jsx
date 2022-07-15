import React,{useState} from 'react';
import './style.css';

function AddTodo(props){
  const [todo,setTodo] = useState('');

  const handleInput= (e) =>{
    setTodo(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();
    props.getInput(todo);
  }

  return(
    <form onSubmit={handleForm}>
      <input type="text" 
        placeholder="Add Todo" 
        onChange={handleInput} 
        value={todo}
      />
      <button className='submitButton'>
        Add
      </button>
    </form>
  )
}
export default AddTodo;