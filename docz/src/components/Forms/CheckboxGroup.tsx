import * as React from "react";
import InputWrapper from "./InputWrapper";
import { InputHTMLAttributes } from "react";
import { createLabel, joinIgnoreEmpty } from "../utilities";
import { Intents } from "../types";

export type CheckboxGroupValue = { id: string, value: string };

export interface CheckboxWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string
    badgeWrapperClassName?: string
    label?: string
    errors?: any
    customErrors?: any
    values: CheckboxGroupValue[]
    labelClassName?: string
    badgeClassName?: string
    intent?: Intents
    badgeSize?: 'xs' | 'sm' | 'lg' | 'xl';
    radio?: boolean
}

const CheckboxGroup = React.forwardRef(
    ( props: CheckboxWrapperProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { id, label, errors, customErrors, wrapperClassName, labelClassName, values, intent, name, className, badgeWrapperClassName, badgeClassName, badgeSize, radio, ...rest } = props;
        const badgeCls = joinIgnoreEmpty( "inline-flex al__it--center check-badge", intent, badgeSize, badgeWrapperClassName )
        return (
            <InputWrapper className={ joinIgnoreEmpty( "check-badge-wrapper", wrapperClassName ) }
                          inputID={ id }
                          name={ name }
                          label={ label ? label : id ? createLabel( id ) : undefined }
                          errors={ errors }
                          customErrors={ customErrors }
                          labelClassName={ labelClassName }
            >
                <div className={ "flex--center" }>
                    { values.map( ( val, i ) =>
                        <div key={ val.id } className={ badgeCls }>
                            <input className={ joinIgnoreEmpty( "checkbox w--auto mr--sm", className ) }
                                   hidden
                                   ref={ ref }
                                   type={ radio ? "radio" : "checkbox" }
                                   name={ name }
                                   id={ val.id }
                                   value={ val.value }
                                   { ...rest }
                            />
                            <label className={ joinIgnoreEmpty( "badge-label", badgeClassName, (i > 0 ? " ml--sm" : "") ) } htmlFor={ val.id }>{ createLabel( val.id ) }</label>
                        </div>
                    ) }
                </div>
            </InputWrapper>
        )
    } )
CheckboxGroup.defaultProps = {
    intent: "accent"
}
export default CheckboxGroup
