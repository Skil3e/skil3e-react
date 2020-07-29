import { FunctionComponent } from 'react';
import { Intents, Sizes } from "../types";
declare const Loader: FunctionComponent<LoaderProps>;
interface LoaderProps {
    type?: "cycle" | "pulse" | "flash";
    intent?: Intents;
    size?: Sizes;
    dur?: number;
    className?: string;
    containerClassName?: string;
    stroke?: boolean;
    container?: boolean;
}
export default Loader;
