import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersRType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {RootState} from "../../redux/reduxStore";
import axios from "axios";
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

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => { dispatch(followAC(userID))},
        unfollow: (userID: number) => { dispatch(unfollowAC(userID))},
        setUsers: (users: Array<usersRType>) => { dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber: number) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);