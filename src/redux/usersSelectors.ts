// Селектор - это функция, которая принимает стейт, достает из него то, что нужно и возвращает в бизнес
import {RootState} from "./reduxStore";

export const getUsers = (state:RootState) => {
 return state.usersPage.users
}

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
