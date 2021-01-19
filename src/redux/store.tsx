import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogsReducer";

export type messagesDataType = {
    id: number
    message: string
}

export type dialogsDataType = {
    id: number
    name: string
}

export type postDataType = {
    id: number
    messages: string
    likeCount: number
}

export type profilePageType = {
    postData: Array<postDataType>
    messageForNewText: string
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type ActionsTypes = DialogsActionsTypes | ProfileActionsTypes



export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void

}


let store: StoreType = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, messages: 'Hi How are you?', likeCount: 15},
                {id: 2, messages: 'Its my first post?', likeCount: 29},
                {id: 3, messages: 'Наш мап работает', likeCount: 29},
            ],
            messageForNewText: "",
        },
        dialogsPage: {
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
        },

    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
}

export default store;