import * as React from "react";
import { FunctionComponent, memo, useLayoutEffect, useRef, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export interface ParallaxContainerProps {
    speed?: number
    offset?: number
    opacityFactor?: number
    className?: string
    useOpacity?: boolean
    innerClassName?: string
}

const ParallaxContainer: FunctionComponent<ParallaxContainerProps> = memo( ( { children, innerClassName, speed = 4, className, useOpacity, opacityFactor = 800, offset = 0 } ) => {
    const [ elementTop, setElementTop ] = useState( 0 );
    const ref = useRef<any>( null );
    const { scrollY } = useViewportScroll();

    const y = useTransform( scrollY, [ elementTop + offset, elementTop + speed + offset ], [ 0, 1 ], {
        clamp: false
    } );
    const xRange = [ 0, opacityFactor ]
    const opacity = useTransform( scrollY, xRange, [ 1, 0 ], {
        clamp: true,
    } );

    useLayoutEffect( () => {
        const element = ref.current;
        setElementTop( element?.offsetTop );
    }, [ ref ] );

    return (
        <div ref={ ref } className={ className }>
            <motion.div
                className={ innerClassName }
                style={ {
                    y,
                    opacity: useOpacity ? opacity : undefined
                } }>
                { children }
            </motion.div>
        </div>
    )
} )

export default ParallaxContainer
