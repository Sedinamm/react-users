import User from "./User";



function UserList(props) {

    return(
        <div>
        {props.data.map((user) => {
          //renders the User component for each user in the users array
          return (
              <div>
            <User
              user={user}
              key={user.id}
              deleteUser={props.deleteUser}
            />
            </div>
          );
        })}
      </div>
    );
}


export default UserList;