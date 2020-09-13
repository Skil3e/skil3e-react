import * as React from "react";
import { InputHTMLAttributes } from "react";
export declare type CheckboxGroupValue = {
    id: string;
    value: string;
};
export interface CheckboxWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string;
    label?: string;
    errors?: any;
    customErrors?: any;
    values: CheckboxGroupValue[];
}
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxWrapperProps & React.RefAttributes<HTMLInputElement>>;
export default CheckboxGroup;
