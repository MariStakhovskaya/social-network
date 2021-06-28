import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e47adcfd-8887-4cee-83a9-679e6cab73f4"
    }}
)

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10){

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
},
    follow(userId: any) {
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId: any) {
      return  instance.delete(`follow/${userId}`)
    },

    getProfile(userId: any) {
        console.warn('Obsolete method. Please use profileAPI')
       return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {

    getProfile(userId: any) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/`  + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})

    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },

    login(email:string, password:string, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}





