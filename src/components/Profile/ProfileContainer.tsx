import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';

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
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(2)
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        debugger;
        return (
           <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps =(state:RootState):MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);