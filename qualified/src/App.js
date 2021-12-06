import React, { useEffect, useState } from "react";
import UserTodos from './UserTodos.js'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const mainDisplay = users.map(user => (
    <div>
      <UserTodos user={user}/>
    </div>
  ))


  
  return (
    <div className="App">
      {mainDisplay}
    </div>
  );
}

export default App;
