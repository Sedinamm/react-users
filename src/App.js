import React, {useState, useEffect} from 'react';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';
import { connect } from "react-redux";
import { getAllUsers } from "./actions/userActions";
import 'bootstrap/dist/css/bootstrap.min.css';



function App(props) {
  const [users , setUsers] = useState([]);

 useEffect(()=>{
   props.getAllUsers()
 })


  
  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredUsers);
  }


  function editUser(newUser , userId) {
    const u =users.map((user) =>{
      if (userId === user.id) {
        return newUser;
      } else {return user;}
    });
    setUsers(u);
  }
  return (
    <>
    <UserForm />
    <UserList  deleteUser={deleteUser} editUser={editUser} />
    </>
  );
}
const mapDispatchToProps = {
  getAllUsers
} 

export default connect(null, mapDispatchToProps)(App);