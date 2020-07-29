import * as React from "react";
import { joinIgnoreEmpty, createSpacers } from "../utilities";
import { FlexRowProps } from "../types";

const FlexRow = React.forwardRef(
    ( props: FlexRowProps, ref?: React.Ref<HTMLDivElement> ) => {
        const { margin, padding, className, ...rest } = props;
        const RowClassName = joinIgnoreEmpty( "flex--wrap", className, createSpacers( margin, "m" ), createSpacers( padding, "p" ) );
        return (
            <div { ...rest } ref={ ref } className={ RowClassName }/>
        );
    },
)

FlexRow.defaultProps = {}

export default FlexRow
