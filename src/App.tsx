import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {ActionsTypes} from "./redux/store";
import {RootStateType} from "./redux/store";


type AppPropsType = {
    store: any
    state: RootStateType
    messages: string
    dispatch: (action: ActionsTypes) => void
}



const App = (props:AppPropsType ) => {
let  state = props.store.getState();

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={ () => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}  />} />
                    <Route path="/profile"
                           render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} message={props.messages} />} />
                    <Route path="/news"
                           render={ () => <News />} />
                    <Route path="/music"
                           render={ () => <Music />} />
                    <Route path="/setting"
                           render={ () => <Setting />} />
                </div>
            </div>




)
    ;
}


export default App;

