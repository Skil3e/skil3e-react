import * as React from "react";
import { createLabel } from "../utilities";
import InputWrapper from "./InputWrapper";
import { PasswordInputProps } from "../types";
import { useState } from "react";

const PasswordInput = React.forwardRef(
    ( props: PasswordInputProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { type, id, label, errors, className, wrapperClassName, customShowHide, toggleShowClassname, ...rest } = props
        const [ show, setShow ] = useState( false );
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
            >
                <div className={ "flex--center relative" }>
                    <input style={ { paddingRight: 60 } } { ...rest } ref={ ref } className={ "password-input" + (className ? " " + className : "") } type={ show ? "text" : "password" } id={ id }/>
                    <button style={ { width: 60 } } className={ `absolute-y--center right--0 inline-flex al__it--center ${ !customShowHide ? "h--100" : "" }` + (toggleShowClassname ? ` ${ toggleShowClassname }` : "") } onClick={ () => setShow( !show ) }>
                        { customShowHide ? customShowHide( show ) : show ? "Hide" : "Show" }
                    </button>
                </div>

            </InputWrapper>
        )
    } )

export default PasswordInput
