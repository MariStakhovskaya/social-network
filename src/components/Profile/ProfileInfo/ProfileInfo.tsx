import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

type profileInfoType = {
    profile: any
}

const ProfileInfo = (props:profileInfoType) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.img}>
                <img alt="avatar" src="https://blueballroom.net/wp-content/uploads/2019/02/Homepage-Slider-2-1400x430.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />

                   <div> Name: <b>{props.profile.fullName}</b></div>
                  <div>Github:  <b>{props.profile.contacts.github}</b></div>
            </div>
        </div>
    )
}

export default ProfileInfo;