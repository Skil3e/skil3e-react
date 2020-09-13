import * as React from "react";
import { createLabel } from "../utilities";
import InputWrapper from "./InputWrapper";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string
    label?: string
    errors?: any
    customErrors?: any
    labelClassName?: string
    type?: 'text' | 'number' | 'tel' | 'email' | 'password' | 'datetime-local' | 'file' | 'month' | 'search' | 'time' | 'url' | 'week' | 'date'
}

const Input = React.forwardRef(
    ( props: InputProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { type, id, label, errors,customErrors, className, wrapperClassName, ...rest } = props
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
                          customErrors={customErrors}
                          labelClassName={props.labelClassName}
            >
                <input { ...rest } ref={ ref } className={ className } type={ type } id={ id } />
            </InputWrapper>
        )
    } )


Input.defaultProps = {
    type  : "text",
}
export default Input
