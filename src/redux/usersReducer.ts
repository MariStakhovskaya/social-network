
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export type actionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

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
}

let initialState:usersPageType  = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true
};

export const followAC = (userID: number) => ({type: "FOLLOW", userID: userID} as const)
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID: userID} as const)
export const setUsersAC = (users: Array<usersRType>) => ({type: "SET_USERS", users: users} as const)
export const setCurrentPageAC = (currentPage:number) => ({ type: "SET_CURRENT_PAGE",
    pageNumber: currentPage} as const)

export const setTotalUsersCountAC = (totalCount:number) => ({type: SET_TOTAL_COUNT,
    totalUserCount: totalCount} as const )

export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const)

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

        default:
            return state;
    }
}




export default usersReducer;