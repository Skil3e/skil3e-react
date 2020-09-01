import { FunctionComponent, ReactNode } from "react";
export interface CircleProgressBarProps {
    title?: any;
    percentage: number;
    showPercentage?: boolean;
    counterClassName?: string;
    width?: number;
    inView?: boolean;
    color?: string;
    icon?: (width: number, percentage: number, title?: string) => JSX.Element | ReactNode;
}
declare const CircleProgressBar: FunctionComponent<CircleProgressBarProps>;
export default CircleProgressBar;
