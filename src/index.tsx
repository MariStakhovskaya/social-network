
import './index.css';
import store from "./redux/reduxStore"
import {RootStateType} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";




const renderThree = (state: RootStateType) => {
    debugger;
    ReactDOM.render(

        <BrowserRouter>

            <App  state={state} dispatch={store.dispatch.bind(store)}  messages={state.profilePage.messageForNewText} store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}
renderThree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderThree(state)
});




