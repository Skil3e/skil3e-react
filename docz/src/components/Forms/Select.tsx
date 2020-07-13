import * as React from "react";
import { createLabel } from "../../utilities";
import InputWrapper from "./InputWrapper";
import { SelectProps } from "../../types";

const Select = React.forwardRef(
    ( props: SelectProps, ref?: React.Ref<HTMLSelectElement> ) => {
        const { id, label, errors, className, wrapperClassName, options, ...rest } = props
        return (
            <InputWrapper className={ wrapperClassName }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
            >
                <select { ...rest } ref={ ref } id={ id }>
                    { options.map( option => <option key={ option.value } value={ option.value }>{ option.label ? option.label : option.value }</option> ) }
                </select>
            </InputWrapper>
        )
    } )

export default Select
