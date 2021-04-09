import {Dispatch} from "redux";
import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';


export type actionType =
    | ReturnType<typeof setAuthUserData>


type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state: InitialStateType = initialState, action:actionType ) => {
    switch (action.type){
        case SET_USER_DATA: {
            return {...state,
                ...action.data,
                isAuth: true
                }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId,email,login}} as const)

export const authUserTC = ()  => {
    return (dispatch: Dispatch<actionType>) => {
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }}

export default authReducer

