import * as React from "react";
import { FunctionComponent, memo, useLayoutEffect, useRef, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export interface ParallaxContainerProps {
    speed?: number
    offset?: number
    className?: string
    useOpacity?: boolean
}

const ParallaxContainer: FunctionComponent<ParallaxContainerProps> = memo( ( { children, speed = 4, className, useOpacity } ) => {
    const [ elementTop, setElementTop ] = useState( 0 );
    const ref = useRef<any>( null );
    const { scrollY } = useViewportScroll();

    const y = useTransform( scrollY, [ elementTop, elementTop + speed ], [ 0, 1 ], {
        clamp: false
    } );

    const opacityRange = [ 1, 0 ]
    const opacity = useTransform( scrollY, [ elementTop * 500, (elementTop + speed) * 500 ], opacityRange, {
        clamp: true,
    } );

    useLayoutEffect( () => {
        const element = ref.current;
        setElementTop( element?.offsetTop );
    }, [ ref ] );

    return (
        <motion.div className={ className } ref={ ref }
                    style={ {
                        y,
                        opacity: useOpacity ? opacity : undefined
                    } }>
            { children }
        </motion.div>
    )
} )

export default ParallaxContainer
