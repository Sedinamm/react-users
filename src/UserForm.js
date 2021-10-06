import React , {useState} from 'react'
import { v4 as uuid } from "uuid";


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
         props.addUser(newUser)

         setName("");
         setEmail("")
         setGen("")
     }
    }
     return(
         <form onSubmit={(e) => handleSubmit(e)}>
            <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
             />


            <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />  
          <label>Gen</label>
            <input
            type="text"
            name="gen"
            value={gen}
            onChange={(e) => setGen(e.target.value)}
             /> 

            <input
            type="submit"
            name="submit"
             /> 

         </form>
     );
}


export default UserForm;