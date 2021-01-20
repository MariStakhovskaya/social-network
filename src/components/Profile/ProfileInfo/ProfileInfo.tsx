import React from 'react';
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div>

            <div className={s.img}>
                <img alt="avatar" src="https://blueballroom.net/wp-content/uploads/2019/02/Homepage-Slider-2-1400x430.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+ description
            </div>


        </div>
    )
}

export default ProfileInfo;