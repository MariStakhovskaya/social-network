import React from 'react';
import {addPostActionCreator, ProfilePageRedType, updateNewPostActionCreator} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsContainerType = {
    profilePage: ProfilePageRedType

}
/*type MyPostsContainerType= {
   store:any
}*/

/*const MyPostsContainer = (props: MyPostsContainerType) => {

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

}*/

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