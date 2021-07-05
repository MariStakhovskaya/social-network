import React from 'react'
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {maxLength50, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {RootState} from "../../redux/reduxStore";
import s from "../common/FormsControls/FormControls.module.css"



type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

type LoginType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginForm:  React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} component={Input} name={"email"} validate = {[required, maxLength50]} />
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} component = {Input} name={"password"} validate = {[required, maxLength50]} />
            </div>

            <div>
                <Field component = {Input} type={"checkbox"} name={"rememberMe"} /> remember me
            </div>

            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginType) => {
    const onSubmit = (formData:FormDataType) => {
props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: RootState) =>({
        isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)

