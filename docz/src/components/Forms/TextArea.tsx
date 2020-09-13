import * as React from "react";
import { createLabel } from "../utilities";
import InputWrapper from "./InputWrapper";
import { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    wrapperClassName?: string
    label?: string
    errors?: any
    customErrors?: any
    labelClassName?: string
}

const Textarea = React.forwardRef(
    ( props: TextareaProps, ref?: React.Ref<HTMLTextAreaElement> ) => {
        const { id, label, errors,customErrors, className, wrapperClassName, ...rest } = props
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
                          customErrors={customErrors}
                          labelClassName={props.labelClassName}
            >
                <textarea { ...rest } ref={ ref } className={ className } id={ id } />
            </InputWrapper>
        )
    } )


export default Textarea
