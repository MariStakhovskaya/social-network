import React from "react";
import axios from "axios";
import {usersRType} from "../../redux/usersReducer";
import Users from "./Users";


type UserAPIComponentType = {
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

class UsersAPIComponent extends React.Component<UserAPIComponentType, any> {

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
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}

export default UsersAPIComponent;