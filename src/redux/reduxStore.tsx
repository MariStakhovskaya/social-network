import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import  thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

export type RootState = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;