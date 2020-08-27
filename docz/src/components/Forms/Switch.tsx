import * as React from "react";
import { SwitchProps } from "../types";
import { joinIgnoreEmpty } from "../utilities";

const Switch = React.forwardRef(
    ( props: SwitchProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { id, title, intent, onChange, checked, emoji, className, label, switchSize, ...rest } = props;
        const SwitchClassName = joinIgnoreEmpty( "switch flex--center", intent, switchSize, className );
        return (
            <div className={ SwitchClassName } title={ title }>
                <input ref={ ref } { ...rest } className="switch__checkbox" id={ id } type={ "checkbox" } onChange={ onChange } checked={ checked }/>
                <label className={ `switch__label ${ switchSize }` } htmlFor={ id }>
                    <span className={ `switch__button flex--center-middle cursor--pointer` }>{ emoji }</span>
                </label>
                { label && <label className={ "block ml--sm text--textDimmed" } htmlFor={ id }>{ label }</label> }
            </div>
        )
    } )

Switch.defaultProps = {
    intent: "accent",
    switchSize  : "md"
}
export default Switch
