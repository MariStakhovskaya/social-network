import React from "react";
import s from "./Users.module.css"
import axios from "axios";
import {usersRType} from "../../redux/usersReducer";



type UserComponentType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: usersRType[]) => void
    users: Array<usersRType>

}

const UsersF = (props:UserComponentType) => {



    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items)
        })

    }

return <div className={s.container}>
    {props.users.map(u => <div key={u.id} className={s.block}>
           <span>
                <div>
                    <img className={s.avatar} src={u.photos.small !== null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR176rzdMTlk93IJ5BdvIYuq4V4p1nNafbgg&usqp=CAU"} />
                </div>
                <div>
                    {u.followed ?
                        <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> :
                        <button onClick={ () => {props.follow(u.id)} }>Follow</button>}

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
</div>
}

export default UsersF;