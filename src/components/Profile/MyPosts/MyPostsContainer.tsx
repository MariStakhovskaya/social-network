import React from 'react';
import {addPostActionCreator, ProfilePageRedType, updateNewPostActionCreator} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsContainerType = {
    profilePage: ProfilePageRedType
}

let mapStateToProps = (state: MyPostsContainerType) => {
    return {
        postData: state.profilePage.postData,
        messages: state.profilePage.messageForNewText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        changeNewTextCallback: (newText: string) => { dispatch(updateNewPostActionCreator(newText)) },
        addPost: (PostText: string) => { dispatch(addPostActionCreator(PostText)) }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;