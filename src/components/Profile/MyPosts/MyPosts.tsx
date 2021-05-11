import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type postDataType = {
    id: number
    messages: string
    likeCount: number
}

type MyPostsType= {
    postData: Array<postDataType>
    newPostText: string
   /* changeNewTextCallback: (text: string)=> void*/
    addPost: (newPostText: string) => void
}

type AddPostFormType = {
    newPostText: string
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.postData.map((p: postDataType) => {
        return <Post messages={p.messages} likeCount={p.likeCount}/>
    })


    let addNewPost =(values: any) => {
        props.addPost(values.newPostText)
    }

    return (<div className={s.postsBlock}>
            <h3>My posts</h3>

               <AddNewPostFormRedux onSubmit={addNewPost} />

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

const AddNewPostForm:React.FC<InjectedFormProps<AddPostFormType>> = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component="textarea" placeholder="inter your post" name="newPostText" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddPostFormType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;