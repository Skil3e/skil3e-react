import { BreakPoints, Pos} from "./types";

const typeOfSizes = typeof 'xs' || 'sm' || 'md' || 'lg' || 'xl';

//-------------------------------------------------------------------------------//
// String Join
//-------------------------------------------------------------------------------//
export const joinIgnoreEmpty = ( ...strings: any ) => {
    return strings.filter( Boolean ).join( " " );
}

//-------------------------------------------------------------------------------//
// Create label
//-------------------------------------------------------------------------------//
export const createLabel = ( name: string, operator: string = "-" ) => {
    const addSpace = name.split( operator ).join( " " );
    return addSpace.charAt( 0 ).toUpperCase() + addSpace.substring( 1 ).toLowerCase();
}

//-------------------------------------------------------------------------------//
// Spacers
//-------------------------------------------------------------------------------//
interface CreateSpacersProps extends Pos, BreakPoints<Pos> {
}

export function createSpacers( spacer?: CreateSpacersProps, prefix?: string ): string {
    let spc: string = "";
    if (spacer && prefix) {
        if (typeof spacer === typeOfSizes) {
            spc += `${ prefix }--${ spacer }`
        } else {
            spc += spacer.top ? ` ${ prefix }t--${ spacer.top }` : "";
            spc += spacer.bottom ? ` ${ prefix }b--${ spacer.bottom }` : "";
            spc += spacer.left ? ` ${ prefix }l--${ spacer.left }` : "";
            spc += spacer.right ? ` ${ prefix }r--${ spacer.right }` : "";
            spc += spacer.x ? ` ${ prefix }x--${ spacer.x }` : "";
            spc += spacer.y ? ` ${ prefix }y--${ spacer.y }` : "";

            spc += makeSpacers( spacer, "sm", prefix )
            spc += makeSpacers( spacer, "md", prefix )
            spc += makeSpacers( spacer, "lg", prefix )
            spc += makeSpacers( spacer, "xl", prefix )
        }
    }
    return spc
}

function makeSpacers( type: BreakPoints<Pos>, breakPoint: "sm" | "md" | "lg" | "xl", prefix: string ): string {
    let val: string = "";
    val += type[breakPoint] && typeof type[breakPoint]! === typeOfSizes && type[breakPoint]! ? ` ${ breakPoint }__${ prefix }--${ type[breakPoint]! }` : "";
    val += type[breakPoint] && type[breakPoint]!.top ? ` ${ breakPoint }__${ prefix }t--${ type[breakPoint]!.top }` : "";
    val += type[breakPoint] && type[breakPoint]!.bottom ? ` ${ breakPoint }__${ prefix }b--${ type[breakPoint]!.bottom }` : "";
    val += type[breakPoint] && type[breakPoint]!.left ? ` ${ breakPoint }__${ prefix }l--${ type[breakPoint]!.left }` : "";
    val += type[breakPoint] && type[breakPoint]!.right ? ` ${ breakPoint }__${ prefix }r--${ type[breakPoint]!.right }` : "";
    val += type[breakPoint] && type[breakPoint]!.x ? ` ${ breakPoint }__${ prefix }x--${ type[breakPoint]!.x }` : "";
    val += type[breakPoint] && type[breakPoint]!.y ? ` ${ breakPoint }__${ prefix }y--${ type[breakPoint]!.y }` : "";
    return val
}


export function createColumns( size?: number | BreakPoints<number> ): string {
    let col: string = "";
    if (size) {
        if (typeof size === "number") {
            col += `col--${ size }`
        } else {
            col += size.sm ? ` sm__col--${ size.sm }` : "";
            col += size.md ? ` md__col--${ size.md }` : "";
            col += size.lg ? ` md__col--${ size.lg }` : "";
            col += size.xl ? ` xl__col--${ size.xl }` : "";
        }
    }
    return col;
}

// interface setPaddingProps {
//     p?: SizeWithBreak,
//     pt?: SizeWithBreak,
//     pb?: SizeWithBreak,
//     pl?: SizeWithBreak,
//     pr?: SizeWithBreak,
//     px?: SizeWithBreak,
//     py?: SizeWithBreak
// }
// export function setPadding( { p, pt, pb, pl, pr, px, py }: setPaddingProps ) {
//     let margin: string = "";
//     margin += createBreakpointVars( p, "p--" )
//     margin += createBreakpointVars( pt, "pt--" )
//     margin += createBreakpointVars( pb, "pb--" )
//     margin += createBreakpointVars( pl, "pl--" )
//     margin += createBreakpointVars( pr, "pr--" )
//     margin += createBreakpointVars( px, "px--" )
//     margin += createBreakpointVars( py, "py--" )
//     return margin;
// }
//
// interface setMarginProps {
//     m?: SizeWithBreak,
//     mt?: SizeWithBreak,
//     mb?: SizeWithBreak,
//     ml?: SizeWithBreak,
//     mr?: SizeWithBreak,
//     mx?: SizeWithBreak,
//     my?: SizeWithBreak
// }
// export function setMargin( { m, mt, mb, ml, mr, mx, my }: setMarginProps ) {
//     let margin: string = "";
//     margin += createBreakpointVars( m, "m--" )
//     margin += createBreakpointVars( mt, "mt--" )
//     margin += createBreakpointVars( mb, "mb--" )
//     margin += createBreakpointVars( ml, "ml--" )
//     margin += createBreakpointVars( mr, "mr--" )
//     margin += createBreakpointVars( mx, "mx--" )
//     margin += createBreakpointVars( my, "my--" )
//     return margin;
// }
//
// function createBreakpointVars( variable?: SizeWithBreak, prefix?: string ) {
//     let util: string = "";
//     if (typeof variable === "string") {
//         util += (variable ? `${ prefix + variable }` : "")
//     } else if (typeof variable === "object") {
//         util += (variable.sm ? ` ${ prefix + variable.sm }` : "")
//         util += (variable.md ? ` md__${ prefix + variable.md }` : "")
//         util += (variable.lg ? ` lg__${ prefix + variable.lg }` : "")
//         util += (variable.xl ? ` xl__${ prefix + variable.xl }` : "")
//     }
//     return util;
// }




