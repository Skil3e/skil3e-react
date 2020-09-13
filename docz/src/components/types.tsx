//-------------------------------------------------------------------------------//
// General
//-------------------------------------------------------------------------------//
export type Intents = 'accent' | 'info' | 'success' | 'danger' | 'warning' | 'text' | 'bg' | string
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BreakPoints<T> {
    sm?: T
    md?: T
    lg?: T
    xl?: T
}

export type SizeWithBreak = Sizes | BreakPoints<Sizes>

export interface Pos {
    top?: Sizes | "auto"
    bottom?: Sizes | "auto"
    left?: Sizes | "auto"
    right?: Sizes | "auto"
    x?: Sizes | "auto"
    y?: Sizes | "auto"
}


