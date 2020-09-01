import { FunctionComponent, ReactNode } from "react";
export declare type TimelineItem = {
    id: number;
    title: string;
    desc: string;
    date: string;
    responsibilities?: string[] | string;
};
export interface TimelineProps {
    items: TimelineItem[];
    className?: string;
    isMobile?: boolean;
    inView?: boolean;
    renderedItem: (item: TimelineItem) => JSX.Element | ReactNode;
}
declare const Timeline: FunctionComponent<TimelineProps>;
export default Timeline;
