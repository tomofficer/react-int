import React, { useEffect, useState } from "react";

function UserTodos({user}) {
  
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  
  
  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
    fetch(url)
    .then(res => res.json())
    .then(data => setTodos(data))
    .catch(err => console.log(err))

  }, [user.id])
  
  
  const userName = user.name;
  
  const todoTitle = todos.map(todo => {
    return todo.title
  })
  
  const handleClick = () => {
    setShow(!show);
  }
 
  
  return (
    <div>
      <h3 onClick={handleClick}>{userName}</h3>
      {
        show && 
          <div>
            {todos.map(todo => (
              <div>
                <p>{todo.title}</p>
              </div>
            ))}
          </div>
      }
     </div>
  )
}

export default UserTodos;
