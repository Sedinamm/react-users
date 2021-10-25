const initialState ={
    users: []
}

const usersReducers =(state= initialState, action) => {
     switch(action.type) {
         case "ADD_USER":
            //  console.log(action.payload);
            return {...state, users: [...state.users,action.payload]};



         case "DELETE_USER":
                 const filteredUsers = state.users.filter(
                     (user) => user.id !== action.payload
                 );
                 return {...state, users:filteredUsers};

         case "EDIT_USER":
             const editedUser = state.users.map((user)=> {
                 if(user.id ===action.payload.userId) {
                     return action.payload.editedUser;
                 }
                 return user;
             });

             return {...state, users: editedUser};
             default:
                  return state;
     }
}

export default usersReducers;