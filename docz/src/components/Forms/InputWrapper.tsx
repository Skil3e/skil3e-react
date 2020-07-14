import * as React from "react";
import { joinIgnoreEmpty } from "../utilities";
import { InputWrapperProps } from "../types";

const InputWrapper = React.forwardRef(
    ( props: InputWrapperProps, ref?: React.Ref<HTMLDivElement> ) => {
        const { label, errors, name, children, inputID, ...rest } = props;
        const className = joinIgnoreEmpty( "input-wrapper", props.className );
        return (
            <div { ...rest } ref={ ref } className={ className }>
                { label && <label className={ "flex small px--sm" } htmlFor={ inputID }>{ label }</label> }
                { children }
                { errors && name && errors[name] && <span className={ "flex small px--sm text--danger" }>{ errors[name].message }</span> }
            </div>
        )
    } )

export default InputWrapper
