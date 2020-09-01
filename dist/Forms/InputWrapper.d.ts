import * as React from "react";
import { HTMLAttributes } from "react";
export interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
    inputID?: string;
    name?: string;
    label?: string;
    errors?: any;
}
declare const InputWrapper: React.ForwardRefExoticComponent<InputWrapperProps & React.RefAttributes<HTMLDivElement>>;
export default InputWrapper;
