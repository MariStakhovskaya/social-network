import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';



export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof setUserProfile>

export type postDataType = {
    id: number,
    messages: string,
    likeCount: number
}

export type ProfilePageRedType = {
    postData: postDataType[]
    messageForNewText: string
    profile: any
}
export const addPostActionCreator = (PostText: string) => ({type: ADD_POST,PostText: PostText} as const)
export const updateNewPostActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT,newText: newText} as const)
export const setUserProfile = (profile: any)=>({type: SET_USER_PROFILE, profile: profile} as const)
export const getUserProfile = (userId: any) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

let initialState:ProfilePageRedType = {
    postData: [
        {id: 1, messages: 'Hi How are you?', likeCount: 15},
        {id: 2, messages: 'Its my first post?', likeCount: 29},
        {id: 3, messages: 'Наш мап работает', likeCount: 29},
    ],
    messageForNewText: "",
    profile: null
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