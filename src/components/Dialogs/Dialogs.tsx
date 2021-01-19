import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    dialogsDataType,
    dialogsPageType,
    messagesDataType,
} from "../../redux/store";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"


type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}
const Dialogs = (props:DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((d:dialogsDataType) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messageElements = props.dialogsPage.messagesData.map((messageObj:messagesDataType) => {
        return <Message message={messageObj.message}/>
    })
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
props.dispatch(sendMessageCreator(props.dialogsPage.newMessageBody))
    }
    let onNewMessageChange =(e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea></div>
                    <div> <button onClick={onSendMessageClick}>Send</button></div>
                </div>



            </div>

           </div>
    )
}

export default Dialogs;