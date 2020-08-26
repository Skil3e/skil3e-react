import { ButtonHTMLAttributes, CSSProperties, HTMLAttributes, InputHTMLAttributes, ReactNode, SVGProps, TextareaHTMLAttributes } from "react";
export declare type Intents = 'accent' | 'info' | 'success' | 'danger' | 'warning';
export declare type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface BreakPoints<T> {
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}
export declare type SizeWithBreak = Sizes | BreakPoints<Sizes>;
export interface Pos {
    top?: Sizes | "auto";
    bottom?: Sizes | "auto";
    left?: Sizes | "auto";
    right?: Sizes | "auto";
    x?: Sizes | "auto";
    y?: Sizes | "auto";
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    look?: "fill" | "minimal" | "link" | "outline";
    intent?: Intents;
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    fullwidth?: boolean;
    margin?: BreakPoints<Pos> | Pos;
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
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    wrapperClassName?: string;
    label?: string;
    errors?: any;
}
export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string;
    toggleShowClassname?: string;
    label?: string;
    errors?: any;
    type?: 'text' | 'password';
    customShowHide?: (show: boolean) => ReactNode | string;
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
    intent?: Intents;
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
    intent?: Intents;
}
export interface FlexRowProps extends HTMLAttributes<HTMLDivElement> {
    margin?: BreakPoints<Pos>;
    padding?: BreakPoints<Pos>;
}
export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
    size?: number | BreakPoints<number>;
    margin?: BreakPoints<Pos>;
    padding?: BreakPoints<Pos>;
}
export interface CSSParallaxContainerProps {
    backgroundColor: string;
    className: string;
    image: string;
    bgSize: "cover" | "contain";
    bgPos: string;
    style: CSSProperties;
    offset: number;
    reverseDirection: boolean;
    speed: number;
    repeat: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
}
export interface LoaderProps {
    type?: "cycle" | "pulse" | "flash";
    intent?: Intents;
    size?: Sizes;
    dur?: number;
    className?: string;
    containerClassName?: string;
    stroke?: boolean;
    container?: boolean;
}
export interface SvgAnimationProps {
    type?: string;
    atr: string;
    val: string;
    delay?: string;
    repeat?: string;
}
export {};
