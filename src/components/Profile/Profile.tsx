import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, profilePageType} from '../../redux/store';

type ProfilePropsType ={
    profilePage: profilePageType
    message: string
    dispatch: (action: ActionsTypes) => void

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} dispatch={props.dispatch} messages={props.message}/>

        </div>
    )
}

export default Profile;