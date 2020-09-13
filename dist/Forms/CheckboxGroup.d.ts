import * as React from "react";
import { InputHTMLAttributes } from "react";
import { Intents } from "../types";
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
    labelClassName?: string;
    intent?: Intents;
}
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxWrapperProps & React.RefAttributes<HTMLInputElement>>;
export default CheckboxGroup;