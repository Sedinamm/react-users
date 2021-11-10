export const addUser = (newUser) => {
    return(dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection("users")
        .add({...newUser, timestamp:getFirestore().FieldValue.serverTimestamp() })
        .then(
            () =>{},
            () =>{}
        );
    };

    // return{
    //     type: "ADD_USER",
    //     payload: newUser,
    // };
};


export const deleteUser = (userId) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection("users")
        .doc(userId)
        .delete()
        .then(() =>{});
    };
    // return {
    //     type: "DELETE_USER",
    //     payload: userId
    // };
};


export const editUser = (userId, updateUser) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection("users")
        .doc(userId)
        .update(updateUser)
        .then(() => {});
    };
        // type: "EDIT_USER",
        // payload: {userId , editedUser}
    };

    export const getAllUsers = () => {
        return (dispatch, state, { getFirestore }) => {
          getFirestore()
            .collection("users")
            .orderBy("timestamp", "desc")
            .onSnapshot((querySnapshot) => {
              let users = [];
              querySnapshot.forEach((doc) =>
                users.push({ ...doc.data(), id: doc.id })
              );
              dispatch({
                type: "GET_ALL_USERS",
                payload: users,
              });
            });
        };
      };