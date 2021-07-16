import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {RootState} from "./redux/reduxStore";


class App extends React.Component<AppPropsType>{
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }

        return (

        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer/>}/>
                <Route path="/news"
                       render={() => <News/>}/>
                <Route path="/music"
                       render={() => <Music/>}/>
                <Route path="/setting"
                       render={() => <Setting/>}/>

                <Route path="/users"
                       render={() => <UsersContainer/>}/>

                <Route path="/login"
                       render={() => <LoginPage />}/>
            </div>
        </div>

    );}
}

const  mapStateToProps = (state:RootState ):MapStateType => {
    return {
        initialized:state.app.initialized}
}

type MapStateType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void

}

type AppPropsType = MapStateType & MapDispatchPropsType





export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateType, MapDispatchPropsType, {}, RootState>(mapStateToProps, {initializeApp}))(App);


