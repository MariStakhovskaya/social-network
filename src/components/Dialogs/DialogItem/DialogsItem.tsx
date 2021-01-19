import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'


export type propsDialogsType = {
    id: number
    name: string
}

const DialogItem = (props: propsDialogsType) => {
    return (<div className={s.dialog}>
        <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>)
}


export default DialogItem;