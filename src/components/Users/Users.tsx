import React from "react";
import s from "./Users.module.css";
import {usersRType} from "../../redux/usersReducer";
import userPhoto from "../../assets/image/userPhoto.jpg"
import { NavLink } from "react-router-dom";
import axios from "axios";

type UserComponentType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: Array<usersRType>
    pageSize: number,
    totalUserCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}


let Users = (props:UserComponentType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.container}>

        {props.users.map(u => <div key={u.id} className={s.block}>
           <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img className={s.avatar}
                         src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    </NavLink> </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "e47adcfd-8887-4cee-83a9-679e6cab73f4"
                                    }
                                }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })

                           }}>Unfollow</button> :
                        <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "e47adcfd-8887-4cee-83a9-679e6cab73f4"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                            })

                           }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </span>
            <span>
                <span>
                     <div>u.location.country</div>
                    <div>u.location.city</div>
                </span>

            </span>

        </div>)}
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}

        </div>
    </div>
}

export default Users