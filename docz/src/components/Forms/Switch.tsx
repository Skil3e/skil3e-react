import * as React from "react";
import { SwitchProps } from "../types";
import { createSpacers, joinIgnoreEmpty } from "../utilities";

const Switch = React.forwardRef(
    ( props: SwitchProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { id, title, intent, onChange, checked, emoji, className, label, size } = props;
        const SwitchClassName = joinIgnoreEmpty( "switch flex--center", intent, size, className, );
        return (
            <div className={ SwitchClassName } title={ title }>
                <input ref={ ref } className="switch__checkbox" id={ id } type={ "checkbox" } onChange={ onChange } checked={ checked }/>
                <label className={ `switch__label ${ size }` } htmlFor={ id }>
                    <span className={ `switch__button flex--center-middle cursor--pointer` }>{ emoji }</span>
                </label>
                { label && <label className={ "block ml--sm text--textDimmed" } htmlFor={ id }>{ label }</label> }
            </div>
        )
    } )

Switch.defaultProps = {
    intent: "accent",
    size  : "md"
}
export default Switch
