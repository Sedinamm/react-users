import { createStore } from "redux"

import usersReducer from "../reduces/usersReducer"

const store = createStore(usersReducer)

export default store;