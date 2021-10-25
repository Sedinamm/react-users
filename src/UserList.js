import User from "./User";
import {connect} from 'react-redux'



function UserList(props) {
console.log(props);
    return(
        <div>
        {props.users.map((user, index) => {
          //renders the User component for each user in the users array
          return (
              <div key={index}>
            <User
              user={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser= {props.editUser}
            />
            </div>
          );
        })}
      </div>
    );
}

const mapStateToProps = (state) => {
  return{
    users: state.users,
  }
}


export default connect( mapStateToProps) (UserList);