import React, {FC} from 'react';
import {dialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);