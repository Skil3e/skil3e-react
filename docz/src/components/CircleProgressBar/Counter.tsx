import * as React from "react";
import { FunctionComponent, memo, useState } from "react";
import { useInterval } from "../utilities";

export interface CounterProps {
    inView?: boolean
    valueFrom?: number
    valueTo: number
    totalDuration?: number
    className?: string
}

const Counter: FunctionComponent<CounterProps> = memo( ( { inView, valueFrom = 0, valueTo = 100, totalDuration = 1, className } ) => {
    const [ count, setCount ] = useState( valueFrom );

    useInterval( () => {
        if (inView && count < valueTo) {
            setCount( count + 1 );
        } else if (!inView) {
            setCount( 0 )
        }
    }, (totalDuration / valueTo) * 1000 );

    return <div className={ className }>{ count }%</div>;
} );

export default Counter
