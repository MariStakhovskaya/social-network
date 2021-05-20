import React from 'react'
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {maxLength50, required} from "../../utils/validators/validators";


type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm:  React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={Input} name={"login"} validate = {[required, maxLength50]} />
            </div>
            <div>
                <Field placeholder={"Password"} component = {Input} name={"password"} validate = {[required, maxLength50]} />
            </div>

            <div>
                <Field component = {Input} type={"checkbox"} name={"rememberMe"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (FormData:FormDataType) => {}

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login