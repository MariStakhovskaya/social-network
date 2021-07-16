import {ThunkDispatch} from "redux-thunk";
import {getAuthUserTC} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type setAuthUserDataACType = ReturnType<typeof initializedSuccess>
export type ActionType = setAuthUserDataACType


type InitialStateType = {
    initialized: boolean

}

let initialState: InitialStateType = {
    initialized: false
};


const appReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
               initialized: true
            }
        }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeApp = () => {
    return (dispatch: ThunkDispatch<InitialStateType, {}, any>) => {

            let promise =  dispatch(getAuthUserTC())
        Promise.all([promise]).then(() => {

            dispatch(initializedSuccess())
        })

            }
        }





export default appReducer;

