import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";


type ProfileContainerType = {
    profile: any
    setUserProfile: (profile: any) => void
}

class ProfileContainer extends React.Component<ProfileContainerType, any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

let mapStateToProps =(state:RootState) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);