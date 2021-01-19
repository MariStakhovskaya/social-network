import React from 'react';
import s from './Post.module.css'
import {postDataType, profilePageType} from "../../../../redux/store";

type PostPropsType = {
    messages: string
    likeCount: number

}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://modeland.ru/uploads/fotos/foto_2081.png"/>
            <span>{props.messages}</span>
            <div>
                <span>Like: {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post;