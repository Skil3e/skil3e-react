import * as React from "react";
import { joinIgnoreEmpty, createSpacers, createColumns } from "../utilities";
import { BreakPoints, Pos } from "../types";
import { HTMLAttributes } from "react";

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
    size?: number | BreakPoints<number>
    margin?: BreakPoints<Pos> | Pos
    padding?: BreakPoints<Pos> | Pos
}

const Column = React.forwardRef(
    ( props: ColumnProps, ref?: React.Ref<HTMLDivElement> ) => {
        const { margin, padding, size, className, ...rest } = props;
        const ColumnClassName = joinIgnoreEmpty( "", className, (!size && "col"), createSpacers( margin, "m" ), createSpacers( padding, "p" ), createColumns( size ) );
        return (
            <div { ...rest } ref={ ref } className={ ColumnClassName }/>
        );
    },
)

export default Column
