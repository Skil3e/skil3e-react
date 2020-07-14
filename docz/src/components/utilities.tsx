import { SizeWithBreak } from "./types";

export const joinIgnoreEmpty = ( ...strings: any ) => {
    return strings.filter( Boolean ).join( " " );
}

export const createLabel = ( name: string, operator: string = "-" ) => {
    const addSpace = name.split( operator ).join( " " );
    return addSpace.charAt( 0 ).toUpperCase() + addSpace.substring( 1 ).toLowerCase();
}

export function setMargin( m: SizeWithBreak, mt: SizeWithBreak, mb: SizeWithBreak, ml: SizeWithBreak, mr: SizeWithBreak, mx: SizeWithBreak, my: SizeWithBreak ) {
    let allMargin: string = "";
    allMargin += createBreakpointVars( m, "m--" )
    allMargin += createBreakpointVars( mt, "mt--" )
    allMargin += createBreakpointVars( mb, "mb--" )
    allMargin += createBreakpointVars( ml, "ml--" )
    allMargin += createBreakpointVars( mr, "mr--" )
    allMargin += createBreakpointVars( mx, "mx--" )
    allMargin += createBreakpointVars( my, "my--" )
    return allMargin;
}

function createBreakpointVars( variable: SizeWithBreak, prefix: string ) {
    let util: string = "";
    if (typeof variable === "string") {
        util += (variable ? `${ prefix + variable }` : "")
    } else if (typeof variable === "object") {
        util += (variable.sm ? ` ${ prefix + variable.sm }` : "")
        util += (variable.md ? ` ${ variable.md }__${ prefix + variable.md }` : "")
        util += (variable.lg ? ` ${ variable.lg }__${ prefix + variable.lg }` : "")
        util += (variable.xl ? ` ${ variable.xl }__${ prefix + variable.xl }` : "")
    }
    return util;
}
