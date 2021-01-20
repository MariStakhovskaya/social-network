import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";


type DialogsContainerPropsType = {
    store: any
}

const DialogsContainer = (props:DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage


    let onSendMessageClick = (body: string) => {
        props.store.dispatch(sendMessageCreator(body))
    }
    let onNewMessageChange =(body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBodyCreator={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
}

export default DialogsContainer;