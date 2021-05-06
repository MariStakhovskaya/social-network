import React from "react";
import {Redirect} from "react-router-dom";
import {RootState} from "../redux/reduxStore";
import {connect} from "react-redux";

type MapStatePropsTypeForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect =(state:RootState):MapStatePropsTypeForRedirect => ({
    isAuth: state.auth.isAuth
})


export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />

        return <Component {...this.props} />
    }
}

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect )(RedirectComponent);
return ConnectedAuthRedirectComponent;
}
