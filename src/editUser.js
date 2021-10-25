import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import { editUser } from './actions/userActions';


function EditUser(props) {
    const [name , setName] = useState(props.user.name);
    const [email , setEmail] = useState(props.user.email);
    const [gen , setGen] = useState(props.user.gen)


const handleNameChange = (e) => {
    setName(e.target.value);
}

const handleEmailChange = (e) => {
    setEmail(e.target.value);
}

const handleGenChange = (e) => {
    setGen(e.target.value)
}

function handleSubmit() {
    let editedUser = {
        name: name,
        email: email,
        gen: gen,
        
        id: props.user.id
    };
props.editUser( props.user.id, editedUser);
props.toggleModal();

}

return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>
<br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        </Form.Group>
<br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Gen"
          value={gen}
          onChange={(e) => handleGenChange(e)}
        />
<br/>
    <Button onClick={() => handleSubmit()}>Save change</Button>
    </Form.Group>

    </Form>
)
}


const mapDispachToProps = {
  editUser,
}


export default connect(null, mapDispachToProps) (EditUser);