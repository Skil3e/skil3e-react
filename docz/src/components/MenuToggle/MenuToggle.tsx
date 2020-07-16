import * as React from "react";
import { joinIgnoreEmpty } from "../utilities";
import { MenuToggleProps } from "../types";

const MenuToggle = React.forwardRef(
    ( props: MenuToggleProps, ref?: React.Ref<HTMLDivElement> ) => {
        const { isOpen = false, intent= "accent" } = props;
        const className = joinIgnoreEmpty( "menu-toggle", props.className, (isOpen ? " menu-toggle--open" : "") );
        return (
            <div { ...props } ref={ ref } className={ className }>
                <div className={ `menu-toggle__dot bg--${intent}` }/>
                <div className={ `menu-toggle__dot bg--${intent}` }/>
                <div className={ `menu-toggle__dot bg--${intent}` }/>
            </div>
        )
    } )

export default MenuToggle
