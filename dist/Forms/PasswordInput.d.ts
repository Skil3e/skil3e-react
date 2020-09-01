import * as React from "react";
import { InputHTMLAttributes, ReactNode } from "react";
export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string;
    toggleShowClassname?: string;
    label?: string;
    errors?: any;
    type?: 'text' | 'password';
    customShowHide?: (show: boolean) => ReactNode | string;
}
declare const PasswordInput: React.ForwardRefExoticComponent<PasswordInputProps & React.RefAttributes<HTMLInputElement>>;
export default PasswordInput;
