import * as React from "react";
import { joinIgnoreEmpty, createSpacers } from "../utilities";
import { ButtonProps } from "../types";

const Button = React.forwardRef(
    ( props: ButtonProps, ref?: React.Ref<HTMLButtonElement> ) => {

        const { look, intent, size, fullwidth, margin, ...rest } = props;
        const className = joinIgnoreEmpty( "button", look, intent, size, (fullwidth && "w--100"), props.className, createSpacers( margin, "m" ) );
        return (
            <button { ...rest } ref={ ref } className={ className }/>
        );
    },
)

Button.defaultProps = {
    look  : "fill",
    intent: "primary",
}

export default Button;

