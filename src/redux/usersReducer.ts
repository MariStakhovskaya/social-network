
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export type actionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

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
}

/*export type UsersActionsTypes = {
    type: "SET_USERS" | "FOLLOW" | "UNFOLLOW" | "SET_CURRENT_PAGE"
    userID: number
    users: Array<usersRType>
    pageSize: number,
    totalUserCount: number
}*/

export type usersStateType = {
    usersPage: usersRType
    pageSize: number,
    totalUserCount: number
    currentPage: number


}


let initialState:usersPageType  = {
    users: [],
    pageSize: 5,
    totalUserCount: 10,
    currentPage: 1
};

export const followAC = (userID: number) => ({type: "FOLLOW", userID: userID} as const)
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID: userID} as const)
export const setUsersAC = (users: Array<usersRType>) => ({type: "SET_USERS", users: users} as const)
export const setCurrentPageAC = (currentPage:number) => ({ type: "SET_CURRENT_PAGE",
    pageNumber: currentPage} as const)

export const setTotalUsersCountAC = (totalCount:number) => ({type: SET_TOTAL_COUNT,
    totalUserCount: totalCount} as const )

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




        default:
            return state;
    }
}




export default usersReducer;