import React, {useState} from 'react';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [users , setUsers] = useState([]);

  
  

  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredUsers);
  }
  return (
    <>
    <UserForm />
    <UserList deleteUser={deleteUser} />
    </>
  );
}

export default App;