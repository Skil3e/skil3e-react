import * as React from "react";
import { InputHTMLAttributes, ReactNode } from "react";
import { Intents } from "../types";
export declare type CheckboxGroupValue = {
    id: string;
    value: string | number;
    label?: string | ReactNode;
};
export interface CheckboxWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string;
    badgeWrapperClassName?: string;
    label?: string;
    errors?: any;
    customErrors?: any;
    values: CheckboxGroupValue[];
    labelClassName?: string;
    badgeClassName?: string;
    intent?: Intents;
    badgeSize?: 'xs' | 'sm' | 'lg' | 'xl';
    radio?: boolean;
    checkedIndex?: number;
}
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxWrapperProps & React.RefAttributes<HTMLInputElement>>;
export default CheckboxGroup;
