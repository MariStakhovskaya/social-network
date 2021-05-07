import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type postDataType = {
    id: number,
    messages: string,
    likeCount: number
}

export type ProfilePageRedType = {
    postData: postDataType[]
    messageForNewText: string
    profile: any
    status: string
}
export const addPostActionCreator = (PostText: string) => ({type: ADD_POST,PostText: PostText} as const)
export const updateNewPostActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT,newText: newText} as const)
export const setUserProfile = (profile: any)=>({type: SET_USER_PROFILE, profile: profile} as const)
export const setStatus = (status: any)=>({type: SET_STATUS, status: status} as const)

export const getUserProfile = (userId: any) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
//Делаем санку, чтобы получить статус наш
export const getStatus = (userId: any) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
//Делаем санку, которая будет слать запрос, чтобы обоновить статус
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
        }
    })
}

let initialState:ProfilePageRedType = {
    postData: [
        {id: 1, messages: 'Hi How are you?', likeCount: 15},
        {id: 2, messages: 'Its my first post?', likeCount: 29},
        {id: 3, messages: 'Наш мап работает', likeCount: 29},
    ],
    messageForNewText: "",
    profile: null,
    status: ""
};

const profileReducer = (state:ProfilePageRedType = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postDataType = {
                id: new Date().getTime(),
                messages: action.PostText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                messageForNewText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                messageForNewText: action.newText,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        case SET_USER_PROFILE:
            return  {
                    ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;