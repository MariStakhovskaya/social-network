import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, postDataType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer"

type MyPostsType= {
    postData: Array<postDataType>
    messages: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsType) => {

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

    return (<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler } value={props.messages}/>
                </div>
                <div>
                    <button onClick={addPost }>Add post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElements}


            </div>
        </div>


    )
}

export default MyPosts;