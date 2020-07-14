import * as React from "react";
import { joinIgnoreEmpty, setMargin } from "../utilities";
import { ButtonProps } from "../types";

const Button = React.forwardRef(
    ( props: ButtonProps, ref?: React.Ref<HTMLButtonElement> ) => {
        const { look, intent, size, fullwidth, m, mt, mb, ml, mr, mx, my, ...rest } = props;
        const className = joinIgnoreEmpty( "button", look, intent, size, (fullwidth && "w--100"), props.className, setMargin(m, mt, mb, ml, mr, mx, my ) );
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

