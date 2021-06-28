
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";


const SET_USER_DATA = 'SET_USER_DATA';

type setAuthUserDataACType =  ReturnType<typeof setAuthUserData>
export type ActionType = setAuthUserDataACType


type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean

}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state: InitialStateType = initialState, action:ActionType ) => {
    switch (action.type){
        case SET_USER_DATA: {
            return {...state,
                ...action.payload,
                isAuth: true
                }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userId: null | number, email: null | string, login: null | string, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {userId,  email,login, isAuth}} as const)

export const getAuthUserTC = ()  => {
    return (dispatch: ThunkDispatch<InitialStateType, {}, any>) => {
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }}

//Thunk Creator
export const login = (email:string, password:string, rememberMe:boolean)  => {
    return (dispatch:ThunkDispatch<InitialStateType, {}, any>) => {
        authAPI.login(email,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {
            dispatch(getAuthUserTC())
            }
        })
    }}

export const logout = ()  => {
    return (dispatch: ThunkDispatch<InitialStateType, {}, any>) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }}

export default authReducer;

