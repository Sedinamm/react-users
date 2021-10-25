import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import EditUser from './editUser';
import {connect} from 'react-redux'
import { deleteUser } from './actions/userActions';


function User(props) {
    const user = props.user;

    const [showModal , setShowModal] = useState(false)

    function toggleModal() {
        setShowModal(!showModal);
    }
    return(
    <div className="result">
        <label className="lab">Name:</label>
        <span className="details">{user.name}</span>
        <br/>
        <label className="lab">Email:</label>
        <span className="details">{user.email}</span>
        <br/>
        <label className="lab">Gen:</label>
        <span className="details">{user.gen}</span>
        <br/>
        <br/>

        <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
            Delete
        </Button>
        <Button className="editButton" onClick={() => toggleModal()}>
            Edit
        </Button>


        <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Make Your change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Component to edit user*/}
          <EditUser
            user={user}
            // editUser={props.editUser}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="danger" onClick={() => toggleModal()}>
            Discard change
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

const mapDispachToProps = {
  deleteUser,
}

export default connect(null, mapDispachToProps) (User);