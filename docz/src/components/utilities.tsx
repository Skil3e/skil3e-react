import { BreakPoints, Pos } from "./types";
import { useEffect, useRef, useState } from "react";

const typeOfSizes = typeof 'xs' || 'sm' || 'md' || 'lg' || 'xl';

//-------------------------------------------------------------------------------//
// Screen Checker
//-------------------------------------------------------------------------------//
export const useCheckForScreens = () => {
    const [ isMobile, setIsMobile ] = useState( false );
    const [ screen, setScreen ] = useState( "" );

    function checker() {
        const phone = 480;
        const tablet = 860;
        const laptop = 992;
        const desktop = 1200;
        let windowWidth = document.documentElement.clientWidth;
        if (windowWidth < phone) {
            setIsMobile( true );
            setScreen( 'phone' );
        } else if (windowWidth <= tablet) {
            setIsMobile( true );
            setScreen( 'tablet' )
        } else if (windowWidth < laptop) {
            setIsMobile( false );
            setScreen( 'laptop' )
        } else if (windowWidth >= desktop) {
            setIsMobile( false );
            setScreen( 'desktop' )
        }
    }

    useEffect( () => {
        checker();
        window.addEventListener( 'resize', checker );
        return () => {
            checker();
            window.removeEventListener( 'resize', checker );
        };
    } );

    return [ isMobile, screen ]
};
//-------------------------------------------------------------------------------//
// Theme Changer
//-------------------------------------------------------------------------------//
export const useThemeChanger = () => {
    const [ theme, setTheme ] = useState( "" );

    useEffect( () => {
        let currentTheme = localStorage.getItem( "currentTheme" );
        if (!currentTheme) {
            if (window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches) {
                currentTheme = "dark";
            } else {
                currentTheme = "light";
            }
        }
        setTheme( currentTheme )
    }, [] )

    return [ theme, setTheme ]
}
//-------------------------------------------------------------------------------//
// String Join
//-------------------------------------------------------------------------------//
export function joinStr( name?: string ) {
    return name ? ` ${ name }` : "";
}

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
// Create Date
//-------------------------------------------------------------------------------//
export function convertDate( date: string ) {
    const d = new Date( date )
    const month = d.toLocaleString( 'default', { month: 'short' } )
    const year = d.getFullYear()
    return `${ month } ${ year }`
}

//-------------------------------------------------------------------------------//
// useInterval
//-------------------------------------------------------------------------------//
export function useInterval( callback: () => void, delay: number ) {
    const savedCallback = useRef( () => {
    } );
    // Remember the latest callback.
    useEffect( () => {
        savedCallback.current = callback;
    }, [ callback ] );

    // Set up the interval.
    useEffect( () => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval( tick, delay );
            return () => clearInterval( id );
        }
    }, [ delay ] );
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




