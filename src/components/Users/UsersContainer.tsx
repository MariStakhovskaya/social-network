import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    usersRType
} from '../../redux/usersReducer';
import {RootState} from '../../redux/reduxStore';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


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
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void

}

class UsersAPIComponent extends React.Component<UserAPIComponentType, any> {

    /*  constructor(props: UserComponentType) {
          super(props);
      }*/

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
                      </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => { dispatch(followAC(userID))},
        unfollow: (userID: number) => { dispatch(unfollowAC(userID))},
        setUsers: (users: Array<usersRType>) => { dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber: number) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))},
        toggleIsFetching: (isFetching: boolean) => {dispatch(toggleIsFetchingAC(isFetching))}
    }
}*/


export default connect(mapStateToProps, {follow,unfollow,setUsers,setCurrentPage,
    setTotalUsersCount,toggleIsFetching})(UsersAPIComponent);