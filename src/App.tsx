import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
   /* store: any*/
   /* state: RootStateType
    dispatch: (action: ActionsTypes) => void*/
}



const App = (props:AppPropsType ) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={ () => <DialogsContainer   />} />
                    <Route path="/profile"
                           render={ () => <Profile /*store={props.store}*/ /> } />
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

