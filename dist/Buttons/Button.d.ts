import * as React from "react";
import { BreakPoints, Intents, Pos } from "../types";
import { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    look?: "fill" | "minimal" | "link" | "outline";
    intent?: Intents;
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    fullwidth?: boolean;
    margin?: BreakPoints<Pos> | Pos;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
