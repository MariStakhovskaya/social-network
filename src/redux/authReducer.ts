
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

export default authReducer

