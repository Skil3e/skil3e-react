import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, SVGProps } from "react";
export declare type Intents = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
export declare type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    look?: "fill" | "minimal" | "link" | "outline";
    intent?: Intents;
    size?: Sizes;
    fullwidth?: boolean;
}
export interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
    inputID?: string;
    name?: string;
    label?: string;
    errors?: any;
}
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string;
    label?: string;
    errors?: any;
    type?: 'text' | 'number' | 'tel' | 'email' | 'password' | 'datetime-local' | 'file' | 'month' | 'search' | 'time' | 'url' | "week";
}
declare type Option = {
    value: string | number;
    label?: string;
};
export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    wrapperClassName?: string;
    label?: string;
    errors?: any;
    options: Option[];
}
export interface SwitchProps {
    id: string;
    className?: string;
    title?: string;
    onChange: () => void;
    checked: boolean;
    emoji?: string;
    label?: string;
    size?: Sizes;
}
export declare type IconContent = {
    path: string;
    fill: string;
};
export interface IconsProps {
    id: string;
    viewBox: string;
    path?: string;
    content?: IconContent[];
}
export interface IconProps extends SVGProps<SVGSVGElement> {
    icon: IconsProps;
    className?: string;
    height?: number;
    size?: Sizes | number;
    fill?: Intents;
    title?: string;
}
export interface MenuToggleProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
}
export {};
