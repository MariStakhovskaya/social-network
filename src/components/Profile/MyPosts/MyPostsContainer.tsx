import React from 'react';
import {addPostActionCreator, ProfilePageRedType} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsContainerType = {
    profilePage: ProfilePageRedType
    newPostText: string
}

let mapStateToProps = (state: MyPostsContainerType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => { dispatch(addPostActionCreator(newPostText)) }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;