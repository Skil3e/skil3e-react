import * as React from "react";
import { FunctionComponent, memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { convertDate, joinStr } from "../utilities";

export type TimelineItem = {
    order: number
    title: string
    desc?: string
    from: string
    to: string
    isCurrent: boolean
    responsibilities?: string[] | string
}

export interface TimelineProps {
    items: TimelineItem[]
    className?: string
    isMobile?: boolean
    inView?: boolean
    renderedItem?: ( item: TimelineItem ) => JSX.Element | ReactNode
}

const Timeline: FunctionComponent<TimelineProps> = memo( ( { items, className, isMobile, inView, renderedItem } ) => {
    return (
        <motion.div
            className={ `text--center px--xl` + joinStr( className ) }
            variants={ ParentVariants }
            initial={ 'init' }
            animate={ inView ? "in" : "out" }
        >

            <div className={ "timeline relative py--lg" }>

                <motion.div
                    className={ "timeline__line absolute left--0 md__absolute-x--center top--0 h--100 bg--text" }
                    variants={ LineVariants }
                />

                { items.map( ( item, i ) =>
                    <motion.div
                        key={ item.order }
                        className={ `timeline__item relative my--lg md__w--50 ${ !isMobile ? (i % 2 == 0 ? "text--right pr--xl" : "text--left ml--auto pl--xl") : "text--left ml--auto pl--xl" }` }
                        variants={ TimelineItemVariants }
                    >
                        { renderedItem ? renderedItem( item ) :
                            <div className={ "p--lg brd brd--border round" }>
                                { item.from && item.to && <small className={ "text--textDimmed" }>From { convertDate( item.from ) } till { item.isCurrent ? item.to : convertDate( item.to ) }</small> }
                                { item.title && <h3 className={ "h4 my--xs font--bold" }>{ item.title }</h3> }
                                { item.desc && <p className={ "m--0 text--textDimmed" }>{ item.desc }</p> }
                            </div>
                        }
                    </motion.div>
                ) }

            </div>
        </motion.div>

    )
} );

export default Timeline

Timeline.defaultProps = {
    inView  : true,
    isMobile: false
}

const ParentVariants = {
    init: {
        opacity: 0,
    },
    in  : {
        opacity   : 1,
        transition: {
            staggerChildren: .1,
        }
    },
    out : {
        opacity: 0,
    },
}
const LineVariants = {
    in : {
        height    : "100%",
        opacity   : 1,
        transition: {
            type: "spring",
            mass: .5,
        }
    },
    out: {
        height : 0,
        opacity: 0,
    },
}

const TimelineItemVariants = {
    in : {
        opacity   : 1,
        y         : 0,
        transition: {
            type: "spring",
            mass: .5,
        }
    },
    out: {
        opacity: 0,
        y      : 100,
    }
}
