import * as React from "react";
import { Intents, Sizes } from "../types";
import { joinIgnoreEmpty } from "../utilities";
import { InputHTMLAttributes } from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    switchSize?: Sizes
    id: string
    className?: string
    intent?: Intents
    title?: string
    onChange?: () => void
    checked?: boolean
    emoji?: string
    label?: string
}

const Switch = React.forwardRef(
    ( props: SwitchProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { id, title, intent, onChange, checked, emoji, className, label, switchSize, name, ...rest } = props;
        const SwitchClassName = joinIgnoreEmpty( "switch flex--center", intent, switchSize, className );
        return (
            <div className={ SwitchClassName } title={ title }>
                <input { ...rest } ref={ ref } className="switch__checkbox" id={ id } name={ name } type={ "checkbox" } onChange={ onChange } checked={ checked }/>
                <label className={ `switch__label ${ switchSize }` } htmlFor={ id }>
                    <span className={ `switch__button flex--center-middle cursor--pointer` }>{ emoji }</span>
                </label>
                { label && <label className={ "block ml--sm text--textDimmed" } htmlFor={ id }>{ label }</label> }
            </div>
        )
    } )

Switch.defaultProps = {
    intent    : "accent",
    switchSize: "md"
}
export default Switch
