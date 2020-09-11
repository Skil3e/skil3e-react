import * as React from "react";
import { InputHTMLAttributes } from "react";
declare type Option = {
    value: string | number;
    label?: string;
};
export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    wrapperClassName?: string;
    label?: string;
    errors?: any;
    customErrors?: any;
    options: Option[];
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export default Select;
