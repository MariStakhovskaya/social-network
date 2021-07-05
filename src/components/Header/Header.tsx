import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void

}

const Header = (props:HeaderPropsType) => {
    return (<header className={s.header}>
            <img src="https://play-lh.googleusercontent.com/VxgLB5szQfCHqVidFh7ltB5_ch0Q7hbemn2TKWWshnBdMRYTciFdF_H6qEUPZJ6baQ" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login } - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>

        </header>

    )
}

export default Header;