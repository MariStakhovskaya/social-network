import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(14488)
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)

    }

    render() {
        return (
           <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps =(state:RootState):MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<FC>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    /*WithAuthRedirect*/
)(ProfileContainer)