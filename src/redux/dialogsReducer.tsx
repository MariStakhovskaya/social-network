const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsActionsTypes = ReturnType<typeof sendMessageCreator>


export const sendMessageCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
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
    };

const dialogsReducer = (state = initialState, action: DialogsActionsTypes) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: body}]
            }

        default:
            return state;
    }
}

    export default dialogsReducer;