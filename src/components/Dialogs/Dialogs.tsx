import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsDataType, dialogsPageType, messagesDataType} from "../../redux/dialogsReducer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export type DialogsPropsType = {
    updateNewMessageBodyCreator: (body: string)=> void
    sendMessage: (body: string)=>void
    dialogsPage: dialogsPageType
    isAuth: boolean
}
export type AddMessageFormType = {

}


const Dialogs = (props:DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map((d:dialogsDataType) => {
        return <DialogItem name={d.name} key={d.id} id={d.id}/>
    })
    let messageElements = state.messagesData.map((messageObj:messagesDataType) => {
        return <Message key={messageObj.id} message={messageObj.message}/>
    })


    let addNewMessage =(values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
           </div>
    )
}
const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormType>> = (props) =>{
    return (
    <form onSubmit={props.handleSubmit}>

        <div>
            <Field component="textarea" name="newMessageBody" placeholder='Enter your message' />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;