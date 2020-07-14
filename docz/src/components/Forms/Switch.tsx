import * as React from "react";
import { SwitchProps } from "../types";

const Switch = React.forwardRef(
    ( props: SwitchProps, ref?: React.Ref<HTMLInputElement> ) => {
        const { id, title, onChange, checked, emoji, className, label, size = "sm" } = props;
        return (
            <div className={ "switch flex--center theme-switch" + (className ? " " + className : "") } title={ title }>
                <input ref={ ref } className="switch__checkbox" id={ id } type={ "checkbox" } onChange={ onChange } checked={ checked }/>
                <label className={ `switch__label ${ size }` } htmlFor={ id }>
                    <span className={ `switch__button flex--center-middle cursor--pointer` }>{ emoji }</span>
                </label>
                { label && <label className={ "block ml--sm text--textDimmed" } htmlFor={ id }>{ label }</label> }
            </div>
        )
    } )

export default Switch
