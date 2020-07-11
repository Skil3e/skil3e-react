import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, SVGProps } from "react";

//-------------------------------------------------------------------------------//
// General
//-------------------------------------------------------------------------------//
export type Intents = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

//-------------------------------------------------------------------------------//
// Button
//-------------------------------------------------------------------------------//
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    look?: "fill" | "minimal" | "link" | "outline"
    intent?: Intents
    size?: Sizes
    fullwidth?: boolean
}

//-------------------------------------------------------------------------------//
// Forms
//-------------------------------------------------------------------------------//
// Input Wrapper
export interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
    inputID?: string
    name?: string
    label?: string
    errors?: any
}

// Input
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string
    label?: string
    errors?: any
    type?: 'text' | 'number' | 'tel' | 'email' | 'password' | 'datetime-local' | 'file' | 'month' | 'search' | 'time' | 'url' | "week"
}

// Select
type Option = {
    value: string | number
    label?: string
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    wrapperClassName?: string
    label?: string
    errors?: any
    options: Option[]
}

// Switch
export interface SwitchProps {
    id: string
    className?: string
    title?: string
    onChange: () => void
    checked: boolean
    emoji?: string
    label?: string
    size?: Sizes
}

//-------------------------------------------------------------------------------//
// Icon
//-------------------------------------------------------------------------------//
export type IconContent = {
    path: string
    fill: string
}

export interface IconsProps {
    id: string,
    viewBox: string,
    path?: string
    content?: IconContent[]
}

export interface IconProps extends SVGProps<SVGSVGElement> {
    icon: IconsProps,
    className?: string,
    height?: number,
    size?: Sizes | number,
    fill?: Intents,
    title?: string
}


//-------------------------------------------------------------------------------//
// MenuToggle
//-------------------------------------------------------------------------------//
export interface MenuToggleProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
}
