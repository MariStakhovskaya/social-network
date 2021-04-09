import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogsReducer";
import usersReducer, {actionType} from "./usersReducer";

 type messagesDataType = {
    id: number
    message: string
}

 type dialogsDataType = {
    id: number
    name: string
}

 type postDataType = {
    id: number
    messages: string
    likeCount: number
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageBody: string
}

 type profilePageType = {
    postData: Array<postDataType>
    messageForNewText: string
     profile: any
}



 type usersLocationType = {
    city:string,
    country: string
}
 type usersType = {
    id: number,
    photos: string
    followed: boolean,
    name: string,
    status:string,
    location: usersLocationType
}

 type usersPageType = {
    users: Array<usersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
     isFetching: boolean
}

 type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
}

 type ActionsTypes = DialogsActionsTypes | ProfileActionsTypes | actionType



 type StoreType = {
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
            profile: null
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
        usersPage: {
            users: [
                {id: 1,
                    photos:  'https://cdnimg.rg.ru/i/gallery/57457a37/1_92ab665e.jpg',

                    followed: false, name: 'Mary', status:'I am a student ', location: {city:'Minsk', country: 'Belarus'}},
                {id: 2,
                    photos: 'https://cdnimg.rg.ru/i/gallery/57457a37/1_92ab665e.jpg',
                    followed: true, name: 'Nick', status:'I work ', location: {city:'Gomel', country: 'Belarus'}},
                {id: 3,
                    photos: 'https://cdnimg.rg.ru/i/gallery/57457a37/1_92ab665e.jpg',
                    followed: false, name: 'Kris', status:'I am a student ', location: {city:'Vilnus', country: 'Europe'}},
            ],
            pageSize: 5,
            totalUserCount: 1,
            currentPage: 1,
            isFetching: false

        }

    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action:any) {
      //  this._state.profilePage = profileReducer( this._state.profilePage, action);
       // this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
       // this._state.usersPage = usersReducer(this._state.usersPage, action)
       // this._callSubscriber(this._state);

    }
}

export default store;