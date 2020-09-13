import * as React from "react";
import { InputHTMLAttributes, ReactNode } from "react";
export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string;
    toggleShowClassname?: string;
    label?: string;
    errors?: any;
    customErrors?: any;
    type?: 'text' | 'password';
    customShowHide?: (show: boolean) => ReactNode | string;
    labelClassName?: string;
}
declare const PasswordInput: React.ForwardRefExoticComponent<PasswordInputProps & React.RefAttributes<HTMLInputElement>>;
export default PasswordInput;
