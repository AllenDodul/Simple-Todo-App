import React from 'react';

function AddTodo(){
  const handleForm = () => {
    e.preventDefault();
  }

  return(
    <form onSubmit={handleForm}>
      <input type="text" placeholder="Add Todo"/>
      <button>Add</button>
    </form>
  )
}
export default AddTodo;