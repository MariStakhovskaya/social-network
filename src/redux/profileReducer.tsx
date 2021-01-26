import {postDataType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>


export const addPostActionCreator = (PostText: string) => {
    return {
        type: "ADD-POST",
        PostText: PostText
    } as const
}

export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}


let initialState = {
    postData: [
        {id: 1, messages: 'Hi How are you?', likeCount: 15},
        {id: 2, messages: 'Its my first post?', likeCount: 29},
        {id: 3, messages: 'Наш мап работает', likeCount: 29},
    ],
    messageForNewText: "",
};

const profileReducer = (state = initialState, action: any) => {
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

        /*stateCopy.postData.push(newPost);*/


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                messageForNewText: action.newText,
            }
        default:
            return state;
    }
}

export default profileReducer;