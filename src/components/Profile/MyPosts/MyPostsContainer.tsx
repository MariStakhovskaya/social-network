import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, postDataType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";

type MyPostsType= {
    postData: Array<postDataType>
    messages: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsType) => {

    let postsElements = props.postData.map((p: postDataType) => {
        return <Post messages={p.messages} likeCount={p.likeCount}/>
    })



    let addPost = () => {
      //      props.addPost(props.messages);
        props.dispatch(addPostActionCreator(props.messages))
    }

const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=> {
       // props.changeNewTextCallback(e.currentTarget.value)
    props.dispatch(updateNewPostActionCreator( e.currentTarget.value))
    }

    return

}

export default MyPostsContainer;