
import './index.css';
import store from "./redux/reduxStore"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";




/*const renderThree = (state: RootStateType) => {*/
    ReactDOM.render(

        <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
        </BrowserRouter>, document.getElementById('root'));
/*}

renderThree(store.getState());*/
/*
store.subscribe(() => {
    let state = store.getState()
    renderThree(state)
});*/




