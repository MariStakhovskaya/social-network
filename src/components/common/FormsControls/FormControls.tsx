import React from "react";
import style from "./FormControls.module.css"

const FormControl =(
    {input, child, meta, ...props} :any) => {

    const isError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (isError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea =( props:any) => {
    const  {input, meta, ...restProps} = props

    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>

}

export const Input =( props:any) => {
    const  {input, meta, ...restProps} = props

    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>

}
