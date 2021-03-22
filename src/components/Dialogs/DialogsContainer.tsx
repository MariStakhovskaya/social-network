import React from 'react';
import {dialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


type DialogsContainerType = {
    dialogsPage: dialogsPageType

}
/*type DialogsContainerPropsType = {
    store: any
}*/

/*const DialogsContainer = (props:DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage


    let onSendMessageClick = (body: string) => {
        props.store.dispatch(sendMessageCreator(body))
    }
    let onNewMessageChange =(body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBodyCreator={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
}*/



let mapStateToProps = (state: DialogsContainerType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
    updateNewMessageBodyCreator: (body:string) => { dispatch(updateNewMessageBodyCreator(body))},
        sendMessage: (body:string) => {  dispatch(sendMessageCreator(body))}
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;