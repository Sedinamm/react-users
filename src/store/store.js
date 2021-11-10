import {createStore,applyMiddleware, compose} from 'redux'
import usersReducer from '../reducers/usersReducer'
import firebase from '../firebase/config';
import thunk from 'redux-thunk';
import {getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { getFirestore,reduxFirestore } from 'redux-firestore';

const store = createStore(usersReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
reduxReactFirebase(firebase),
reduxFirestore(firebase)
));



export default store;