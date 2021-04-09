import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(2)
        }
        this.props.getUserProfile(userId)

    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/login" />
        return (
           <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps =(state:RootState):MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);