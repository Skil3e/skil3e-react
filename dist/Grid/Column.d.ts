import * as React from "react";
import { BreakPoints, Pos } from "../types";
import { HTMLAttributes } from "react";
export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
    size?: number | BreakPoints<number>;
    margin?: BreakPoints<Pos>;
    padding?: BreakPoints<Pos>;
}
declare const Column: React.ForwardRefExoticComponent<ColumnProps & React.RefAttributes<HTMLDivElement>>;
export default Column;
