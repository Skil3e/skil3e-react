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
