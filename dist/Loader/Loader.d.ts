import { FunctionComponent } from 'react';
import { Intents, Sizes } from "../types";
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
declare const Loader: FunctionComponent<LoaderProps>;
export default Loader;
