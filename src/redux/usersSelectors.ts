// Селектор - это функция, которая принимает стейт, достает из него то, что нужно и возвращает в бизнес
//createSelector - ф-ия, кот возвращает нам селектор
import {RootState} from "./reduxStore";
import {createSelector} from "reselect";

export const getUsers = (state:RootState) => {
 return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsers, (users) => {
   // return users.filter(u => true) -более сложный селектор, just example
    return users
})


export const getPageSize = (state:RootState) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state:RootState) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state:RootState) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:RootState) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:RootState) => {
    return state.usersPage.followingInProgress
}
