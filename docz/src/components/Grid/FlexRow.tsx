import * as React from "react";
import { joinIgnoreEmpty, createSpacers } from "../utilities";
import { FlexRowProps } from "../types";

const FlexRow = React.forwardRef(
    ( props: FlexRowProps, ref?: React.Ref<HTMLDivElement> ) => {
        const { margin, padding, ...rest } = props;
        const className = joinIgnoreEmpty( "flex--wrap", createSpacers( margin, "m" ), createSpacers( padding, "p" ) );
        return (
            <div { ...rest } ref={ ref } className={ className }/>
        );
    },
)

FlexRow.defaultProps = {}

export default FlexRow
