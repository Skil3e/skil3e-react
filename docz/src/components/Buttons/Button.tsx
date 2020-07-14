import * as React from "react";
import { joinIgnoreEmpty } from "../utilities";
import { ButtonProps } from "../types";

const Button = React.forwardRef(
    ( props: ButtonProps, ref?: React.Ref<HTMLButtonElement> ) => {
        const { look, intent, size, fullwidth } = props;
        const className = joinIgnoreEmpty( "button", look, intent, size, (fullwidth && "w--100"), props.className );
        return (
            <button { ...props } ref={ ref } className={ className }/>
        );
    },
)

Button.defaultProps = {
    look  : "fill",
    intent: "primary",
}

export default Button;

