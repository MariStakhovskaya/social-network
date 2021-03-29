import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from 'react-redux';
import {RootState} from "../../redux/reduxStore";
import {setAuthUserData} from "../../redux/authReducer";

type mapStateToProps = {
    isAuth: boolean,
    login: string | null,
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type HeaderContainerType = mapStateToProps & MapDispatchPropsType


class HeaderContainer extends React.Component<HeaderContainerType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }


    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: RootState): mapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);