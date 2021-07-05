import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {RootState} from "../../redux/reduxStore";
import {getAuthUserTC, logout} from "../../redux/authReducer";


type mapStateToProps = {
    isAuth: boolean,
    login: string | null,
}

type MapDispatchPropsType = {
    logout: () =>void
    getAuthUserTC: () => void
}

type HeaderContainerType = mapStateToProps & MapDispatchPropsType


class HeaderContainer extends React.Component<HeaderContainerType, any> {

    componentDidMount() {

       this.props.getAuthUserTC()
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

export default connect(mapStateToProps, {getAuthUserTC, logout})(HeaderContainer);