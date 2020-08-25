import * as React from "react";
import { createLabel } from "../utilities";
import InputWrapper from "./InputWrapper";
import { TextareaProps } from "../types";

const Textarea = React.forwardRef(
    ( props: TextareaProps, ref?: React.Ref<HTMLTextAreaElement> ) => {
        const { id, label, errors, className, wrapperClassName, ...rest } = props
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
            >
                <textarea { ...rest } ref={ ref } className={ className } id={ id } />
            </InputWrapper>
        )
    } )


export default Textarea
