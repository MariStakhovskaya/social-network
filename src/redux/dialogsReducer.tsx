const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsActionsTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>


export const sendMessageCreator = (body: string) => {
    return {
        type: SEND_MESSAGE,
        body: body
    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body

    } as const
}
export type messagesDataType = {
    id: number
    message: string
}

export type dialogsDataType = {
    id: number
    name: string
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageBody: string
}
let initialState: dialogsPageType = {
        dialogsData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valery"},
            {id: 7, name: "Masha"},
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your It"},
            {id: 3, message: "YO-yo"},
            {id: 4, message: "YO-yo"},
            {id: 5, message: "YO-yo"},
            {id: 6, message: "я сделала map"},
        ],
        newMessageBody: "",
    };

const dialogsReducer = (state = initialState, action: DialogsActionsTypes) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body
            }

          /*  stateCopy.newMessageBody = action.body;*/


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 7, message: body}]
            }

           /* stateCopy.messagesData.push({id: 7, message: body})*/


        default:
            return state;
    }
}

    export default dialogsReducer;