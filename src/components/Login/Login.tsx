import React from 'react'
import Field, {InjectedFormProps, reduxForm} from "redux-form";


type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm:  React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component = {"input"} name={"login"} />
            </div>
            <div>
                <Field placeholder={"Password"} component = {"input"} name={"password"} />
            </div>

            <div>
                <Field component = {"input"} type={"checkbox"} name={"rememberMe"}/> remember me
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