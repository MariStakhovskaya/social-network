import React from 'react';
import {dialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


type DialogsContainerType = {
    dialogsPage: dialogsPageType
    auth: any

}

let mapStateToProps = (state: DialogsContainerType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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