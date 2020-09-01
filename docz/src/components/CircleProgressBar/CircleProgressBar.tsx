import * as React from "react";
import { FunctionComponent, memo } from "react";
import { motion } from "framer-motion";
import { joinStr } from "../utilities";
import Counter from "./Counter";

export interface CircleProgressBarProps {
    title?: any
    percentage: number
    showPercentage?: boolean
    counterClassName?: string
    width?: number
    inView?: boolean
    icon?: string
    color?: string
}

const CircleProgressBar: FunctionComponent<CircleProgressBarProps> = memo( ( { percentage, showPercentage, title, counterClassName, width, inView, icon, color } ) => {
    const length = percentage / 100;
    const CircleProgressSvgVariants = {
        init: {
            pathLength: 0,
            opacity   : 0
        },
        in  : {
            pathLength: length,
            opacity   : 1,
            transition: {
                type     : "spring",
                mass     : 1,
                stiffness: 40
            }
        },
        out : {
            pathLength: 0,
            opacity   : 0,
            transition: {
                type     : "spring",
                mass     : 1,
                stiffness: 40
            }
        }
    }
    return (
        <div className={ "flex--column al__it--center" }>
            <div className={ "relative" }>
                <svg xmlns="http://www.w3.org/2000/svg" width={ width } viewBox="0 0 200 200" strokeWidth={ 20 } strokeLinecap={ "round" }>
                    <path className="bg" stroke="var(--border)" d="M41 149.5a77 77 0 1 1 117.93 0" fill="none"/>
                    <motion.path
                        d="M41 149.5a77 77 0 1 1 117.93 0"
                        stroke={ color }
                        fill={ "none" }
                        variants={ CircleProgressSvgVariants }
                        animate={ inView ? "in" : "out" }
                    />
                </svg>
                <div className={ "absolute--center text--center w--100" }>
                    { !icon && showPercentage && <Counter className={ joinStr( counterClassName ) } inView={ inView } valueTo={ percentage }/> }
                    { !icon && title && <div className={ "font--bold pt--md" }>{ title }</div> }
                    { icon && <img src={ icon } width={ Math.round( width! / 1.9 ) } alt={ title } title={ title + " " +  percentage + "%"}/> }
                </div>
            </div>
            { icon && title && <div style={ { marginTop: -10 } } className={ "font--bold" }>{ title }</div> }
        </div>
    )
} )

CircleProgressBar.defaultProps = {
    showPercentage: false,
    width: 200,
    inView: true,
    color: "var(--accent)"
}

export default CircleProgressBar
