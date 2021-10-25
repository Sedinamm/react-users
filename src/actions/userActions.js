


export const addUser = (newUser) => {
    return{
        type: "ADD_USER",
        payload: newUser,
    }
}


export const deleteUser = (userId) => {
    return{
        type: "DELETE_USER",
        payload: userId
    }
};


export const editUser = (userId, editedUser) => {
    return {
        type: "EDIT_USER",
        payload: {userId , editedUser}
    }
};