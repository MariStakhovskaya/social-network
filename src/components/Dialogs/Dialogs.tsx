import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsDataType, dialogsPageType, messagesDataType} from "../../redux/dialogsReducer";


type DialogsPropsType = {
    updateNewMessageBodyCreator: (body: string)=> void
    sendMessage: (body: string)=>void
    dialogsPage: dialogsPageType
}


const Dialogs = (props:DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map((d:dialogsDataType) => {
        return <DialogItem name={d.name} key={d.id} id={d.id}/>
    })
    let messageElements = state.messagesData.map((messageObj:messagesDataType) => {
        return <Message key={messageObj.id} message={messageObj.message}/>
    })
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
    props.sendMessage(newMessageBody)
//props.dispatch(sendMessageCreator(props.dialogsPage.newMessageBody))
    }
    let onNewMessageChange =(e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBodyCreator(body)
        //props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
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