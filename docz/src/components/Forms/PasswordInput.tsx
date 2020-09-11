import * as React from "react";
import { createLabel } from "../utilities";
import InputWrapper from "./InputWrapper";
import { InputHTMLAttributes, ReactNode, useState } from "react";

export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string
    toggleShowClassname?: string
    label?: string
    errors?: any
    customErrors?: any
    type?: 'text' | 'password'
    customShowHide?: ( show: boolean ) => ReactNode | string
}

const PasswordInput = React.forwardRef(
    ( props: PasswordInputProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { type, id, label, errors,customErrors, className, wrapperClassName, customShowHide, toggleShowClassname, ...rest } = props
        const [ show, setShow ] = useState( false );
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
                          customErrors={customErrors}
            >
                <div className={ "flex--center relative" }>
                    <input style={ { paddingRight: 60 } } { ...rest } ref={ ref } className={ "password-input" + (className ? " " + className : "") } type={ show ? "text" : "password" } id={ id }/>
                    <div style={ { width: 60 } } className={ `absolute-y--center right--0 flex--center-middle cursor--pointer ${ !customShowHide ? "h--100" : "" }` + (toggleShowClassname ? ` ${ toggleShowClassname }` : "") } onClick={ () => setShow( !show ) }>
                        { customShowHide ? customShowHide( show ) : show ? "Hide" : "Show" }
                    </div>
                </div>

            </InputWrapper>
        )
    } )

export default PasswordInput
