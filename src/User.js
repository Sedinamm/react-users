import React,{useState} from 'react'
import {Button} from 'react-bootstrap'


function User(props) {
    const user = props.user;
    return(
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.gen}</h1>

        <Button onClick={() => props.deleteUser(user.id)}>
            Delete
        </Button>
    </div>
    )
}

export default User;