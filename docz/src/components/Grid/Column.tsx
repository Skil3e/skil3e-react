import * as React from "react";
import { joinIgnoreEmpty, createSpacers, createColumns } from "../utilities";
import { ColumnProps } from "../types";

const Column = React.forwardRef(
    ( props: ColumnProps, ref?: React.Ref<HTMLDivElement> ) => {
        const { margin, padding, size, ...rest } = props;
        const className = joinIgnoreEmpty( "", createSpacers( margin, "m" ), createSpacers( padding, "p" ), createColumns( size ) );
        return (
            <div { ...rest } ref={ ref } className={ className }/>
        );
    },
)

export default Column
