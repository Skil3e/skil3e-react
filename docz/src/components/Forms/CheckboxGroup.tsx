import * as React from "react";
import InputWrapper from "./InputWrapper";
import { InputHTMLAttributes } from "react";
import { createLabel, joinIgnoreEmpty } from "../utilities";

export type CheckboxGroupValue = { id: string, value: string };

export interface CheckboxWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string
    label?: string
    errors?: any
    customErrors?: any
    values: CheckboxGroupValue[]
}

const CheckboxGroup = React.forwardRef(
    ( props: CheckboxWrapperProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { id, label, errors, customErrors, className, wrapperClassName, values, ...rest } = props
        return (
            <InputWrapper className={ joinIgnoreEmpty( "check-badge", wrapperClassName ) }
                          inputID={ id }
                          name={ props.name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
                          customErrors={ customErrors }
            >
                <div className={ "flex--center" }>
                    { values.map( ( val, i ) =>
                        <div key={ val.id } className={ "inline-flex al__it--center check-badge" }>
                            <input className={ "check-badge__checkbox w--auto mr--sm" }
                                   hidden
                                   ref={ ref }
                                   type={ "checkbox" }
                                   name={ name }
                                   id={ val.id }
                                   value={ val.value }
                                   { ...rest }
                            />
                            <label className={ `check-badge__label${ i > 0 ? " ml--sm" : "" }` } htmlFor={ val.id }>{ createLabel( val.id ) }</label>
                        </div>
                    ) }
                </div>
            </InputWrapper>
        )
    } )

export default CheckboxGroup
