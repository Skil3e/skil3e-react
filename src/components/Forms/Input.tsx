import * as React from "react";
import { createLabel } from "../../utilities";
import InputWrapper from "./InputWrapper";
import { InputProps } from "../../types";

const Input = React.forwardRef(
    ( props: InputProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { type = "text", id, label, errors, className, wrapperClassName, ...rest } = props
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
            >
                <input { ...rest } ref={ ref } className={ className } type={ type } id={ id } />
            </InputWrapper>
        )
    } )

export default Input
