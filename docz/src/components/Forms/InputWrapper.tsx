import * as React from "react";
import { joinIgnoreEmpty } from "../utilities";
import { HTMLAttributes } from "react";

export interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
    inputID?: string
    name?: string
    label?: string
    errors?: any
    customErrors?: any
    labelClassName?: string
}

const InputWrapper = React.forwardRef(
    ( props: InputWrapperProps, ref?: React.Ref<HTMLDivElement> ) => {
        const { label, errors, customErrors, name, children, inputID, ...rest } = props;
        const className = joinIgnoreEmpty( "input-wrapper", props.className );
        const labelClassName = joinIgnoreEmpty( "flex small px--sm mb--xs", props.labelClassName );
        return (
            <div { ...rest } ref={ ref } className={ className }>
                { label && <label className={ labelClassName } htmlFor={ inputID }>{ label }</label> }
                { children }
                { !customErrors && errors && name && errors[name] && <span className={ "flex small px--sm text--danger mt--xs" }>{ errors[name].message }</span> }
                {customErrors && <span className={ "flex small px--sm text--danger mt--xs" }>{ customErrors }</span>}
            </div>
        )
    } )

export default InputWrapper
