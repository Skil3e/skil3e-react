import * as React from "react";
import { joinIgnoreEmpty, createSpacers } from "../utilities";
import { BreakPoints, Intents, Pos } from "../types";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    look?: "fill" | "minimal" | "link" | "outline"
    intent?: Intents
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    fullwidth?: boolean
    margin?: BreakPoints<Pos> | Pos
}

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
    intent: "accent",
}

export default Button;

