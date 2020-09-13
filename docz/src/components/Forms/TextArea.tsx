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
        const { id, label, errors, customErrors, className, wrapperClassName, labelClassName, name, ...rest } = props
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
                          customErrors={ customErrors }
                          labelClassName={ labelClassName }
            >
                <textarea { ...rest } name={ name } ref={ ref } className={ className } id={ id }/>
            </InputWrapper>
        )
    } )


export default Textarea
