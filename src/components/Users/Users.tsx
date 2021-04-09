import React from "react";
import s from "./Users.module.css";
import { usersRType} from "../../redux/usersReducer";
import userPhoto from "../../assets/image/userPhoto.jpg"
import { NavLink } from "react-router-dom";


type UserComponentType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: Array<usersRType>
    pageSize: number,
    totalUserCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>

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
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {props.follow(u.id)}}>Follow</button>}

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