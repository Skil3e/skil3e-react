import * as React from "react";
import { Intents, Sizes } from "../types";
import { InputHTMLAttributes } from "react";
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    switchSize?: Sizes;
    id: string;
    className?: string;
    intent?: Intents;
    title?: string;
    onChange: () => void;
    checked: boolean;
    emoji?: string;
    label?: string;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
