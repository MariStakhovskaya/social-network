import React from 'react';
import {dialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type DialogsContainerType = {
    dialogsPage: dialogsPageType

}

let mapStateToProps = (state: DialogsContainerType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBodyCreator: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: (body: string) => {
            dispatch(sendMessageCreator(body))
        }
    }
}


let AuthRedirectComponent = WithAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;