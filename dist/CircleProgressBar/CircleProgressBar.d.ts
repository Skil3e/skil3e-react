import { FunctionComponent } from "react";
export interface CircleProgressBarProps {
    title?: any;
    percentage: number;
    showPercentage?: boolean;
    counterClassName?: string;
    width?: number;
    inView?: boolean;
    icon?: string;
    color?: string;
}
declare const CircleProgressBar: FunctionComponent<CircleProgressBarProps>;
export default CircleProgressBar;
