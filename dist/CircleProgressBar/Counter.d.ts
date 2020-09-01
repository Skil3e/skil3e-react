import { FunctionComponent } from "react";
export interface CounterProps {
    inView?: boolean;
    valueFrom?: number;
    valueTo: number;
    totalDuration?: number;
    className?: string;
}
declare const Counter: FunctionComponent<CounterProps>;
export default Counter;
