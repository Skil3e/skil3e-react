import * as React from "react";
import { BreakPoints, Pos } from "../types";
import { HTMLAttributes } from "react";
export interface FlexRowProps extends HTMLAttributes<HTMLDivElement> {
    margin?: BreakPoints<Pos> | Pos;
    padding?: BreakPoints<Pos> | Pos;
}
declare const FlexRow: React.ForwardRefExoticComponent<FlexRowProps & React.RefAttributes<HTMLDivElement>>;
export default FlexRow;
