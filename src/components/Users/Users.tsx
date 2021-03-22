import React from "react";
import s from "./Users.module.css"
import axios from "axios";
import {usersRType} from "../../redux/usersReducer";


type UserComponentType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: usersRType[]) => void
    users: Array<usersRType>
    pageSize: number,
    totalUserCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UserComponentType, any> {

    /*  constructor(props: UserComponentType) {
          super(props);
      }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {


        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.container}>


            {
                this.props.users.map(u => <div key={u.id} className={s.block}>
           <span>
                <div>
                    <img className={s.avatar}
                         src={u.photos.small !== null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR176rzdMTlk93IJ5BdvIYuq4V4p1nNafbgg&usqp=CAU"}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            this.props.follow(u.id)
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
                    return <span className={this.props.currentPage === p ? s.selectedPage : ""}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}> {p} </span>
                })}

            </div>
        </div>
    }
}

export default Users;