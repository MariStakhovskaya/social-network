import { Dispatch } from "redux";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type actionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export type usersLocationType = {
    city:string,
    country: string
}

export type usersRType = {
    id: number,
    photos: any
    followed: boolean,
    name: string,
    status:string,
    location: usersLocationType
}

export type usersPageType = {
    users: usersRType[],
    pageSize: number,
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState:usersPageType  = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

export const followSuccess = (userID: number) => ({type: "FOLLOW", userID: userID} as const)
export const unfollowSuccess = (userID: number) => ({type: "UNFOLLOW", userID: userID} as const)
export const setUsers = (users: Array<usersRType>) => ({type: "SET_USERS", users: users} as const)
export const setCurrentPage = (currentPage:number) => ({ type: "SET_CURRENT_PAGE",
    pageNumber: currentPage} as const)

export const setTotalUsersCount = (totalCount:number) => ({type: SET_TOTAL_COUNT,
    totalUserCount: totalCount} as const )

export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)



const usersReducer = (state: usersPageType = initialState, action:actionType ) => {
    switch (action.type){
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUserCount: action.totalUserCount}
        }


        case FOLLOW:
       return  {
           ...state,
           users: state.users.map(u => {
               if (u.id === action.userID){
                   return {...u, followed: true}
               }
               return u
           })}


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
            case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {

                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress,action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}


export const getUsers = (currentPage: number,pageSize: number) => {
   return (dispatch: Dispatch<actionType>) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}}


export const follow = (userId: any) : any => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                toggleFollowingProgress(false, userId)
        })
    }}

export const unfollow = (userId: any) : any => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                toggleFollowingProgress(false, userId)
            })
    }}

export default usersReducer;