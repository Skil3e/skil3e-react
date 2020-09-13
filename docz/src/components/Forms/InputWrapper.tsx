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
        const { label, errors, customErrors, name, children, inputID, labelClassName, className, ...rest } = props;
        const cls = joinIgnoreEmpty( "input-wrapper", className );
        const labelCls = joinIgnoreEmpty( "flex small px--sm mb--xs", labelClassName );
        return (
            <div { ...rest } ref={ ref } className={ cls }>
                { label && <label className={ labelCls } htmlFor={ inputID }>{ label }</label> }
                { children }
                { !customErrors && errors && name && errors[name] && <span className={ "flex small px--sm text--danger mt--xs" }>{ errors[name].message }</span> }
                { customErrors && <span className={ "flex small px--sm text--danger mt--xs" }>{ customErrors }</span> }
            </div>
        )
    } )

export default InputWrapper
