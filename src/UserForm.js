import React , {useState} from 'react'
import { v4 as uuid } from "uuid";
import { addUser } from './actions/userActions';
import {connect} from 'react-redux'


function UserForm(props) {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [gen, setGen] = useState("");

     function handleSubmit(e) {
         e.preventDefault();

         if (email && name && gen) {
            let newUser = {
              name: name,
              email: email,
              gen: gen,
              //adds a unique id to the new user
              id: uuid()
            };
         props.addNewUser(newUser)

         setName("");
         setEmail("")
         setGen("")
     }
    }
     return(
         <form onSubmit={(e) => handleSubmit(e)} className="form">
            <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name" 
            className="input"
             />


            <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="input"
             />  
            <input
            type="text"
            name="gen"
            value={gen}
            onChange={(e) => setGen(e.target.value)}
            placeholder="Your Gen"
            className="input"
             /> 

            <input
            type="submit"
            name="submit"
             /> 

         </form>
     );
}

const mapDispatchToProps = {
    addNewUser: addUser,
};


export default connect(null, mapDispatchToProps) (UserForm);