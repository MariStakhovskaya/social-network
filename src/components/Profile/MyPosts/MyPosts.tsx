import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type postDataType = {
    id: number
    messages: string
    likeCount: number
}

type MyPostsType= {
    postData: Array<postDataType>
    messages: string
    changeNewTextCallback: (text: string)=> void
    addPost: (PostText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.postData.map((p: postDataType) => {
        return <Post messages={p.messages} likeCount={p.likeCount}/>
    })

    let onAddPost = () => {
            props.addPost(props.messages);
    }

const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=> {

        let text = e.target.value
        props.changeNewTextCallback(text)
    }

    return (<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler} value={props.messages}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;