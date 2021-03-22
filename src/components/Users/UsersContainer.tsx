import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
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

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;