import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";

type MyPostsContainerType= {
   store:any
}

const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.store.getState()

    let addPost = (PostText: string) => {
      //      props.addPost(props.messages);
        props.store.dispatch(addPostActionCreator(PostText))
    }

const newTextChangeHandler = (newText: string )=> {
       // props.changeNewTextCallback(e.currentTarget.value)
    props.store.dispatch(updateNewPostActionCreator(newText))
    }

    return <MyPosts changeNewTextCallback={newTextChangeHandler} addPost={addPost} postData={state.profilePage.postData} messages={state.profilePage.messageForNewText}/>

}

export default MyPostsContainer;