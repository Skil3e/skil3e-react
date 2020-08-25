import * as React from 'react';
import { FunctionComponent } from 'react';
import { joinIgnoreEmpty } from "../utilities";
import { LoaderProps, SvgAnimationProps } from "../types";

const Loader: FunctionComponent<LoaderProps> =
    ( {type , intent , dur, size, className, stroke , container, containerClassName} ) => {
        const SvgAnimation: FunctionComponent<SvgAnimationProps> =
            ( {type = "XML", atr, val, delay, repeat = "indefinite"} ) => <animate attributeType={ type } attributeName={ atr } values={ val } dur={ duration } repeatCount={ repeat } begin={ delay }/>
        const ldrClass = joinIgnoreEmpty( " ", "loader", type, className, `fill--${intent}`, ( stroke ? "stroke--" + intent : "" ) );

        const viewBox = "0 0 50 14";
        const duration = dur + "ms";
        const ldrContainer = joinIgnoreEmpty( " ", ( container ? "loader-container flex--center-middle py-5" : "loader-container inline-flex" ), ( containerClassName ? containerClassName : "" ) );

        let width = "";
        if (size === 'xs') {
            width = "20";
        } else if (size === 'sm') {
            width = "40";
        } else if (size === 'md') {
            width = "60";
        } else if (size === 'lg') {
            width = "80";
        } else if (size === 'xl') {
            width = "100";
        }

        return (
            <div className={ ldrContainer }>
                <svg className={ ldrClass } xmlns="http://www.w3.org/2000/svg" viewBox={ viewBox } width={ width }>
                    { ( type === "cycle" ?
                            <>
                                <circle cx={ "8" } cy={ "7" } r={ "5" }>
                                    <SvgAnimation atr={ "r" } val={ "0;5;" }/>
                                </circle>
                                <circle cx={ "8" } cy={ "7" } r={ "5" }>
                                    <SvgAnimation atr={ "cx" } val={ "8;25;" }/>
                                </circle>
                                <circle cx={ "25" } cy={ "7" } r={ "5" }>
                                    <SvgAnimation atr={ "cx" } val={ "25;42;" }/>
                                </circle>
                                <circle cx={ "42" } cy={ "7" } r={ "5" }>
                                    <SvgAnimation atr={ "r" } val={ "5;0;" }/>
                                </circle>

                            </> : ""
                    ) }

                    { ( type === "pulse" ?
                            <>
                                <circle cx={ "8" } cy={ "7" } r={ "5" }>
                                    <SvgAnimation atr={ "r" } val={ '5;2;2;5' }/>
                                    <SvgAnimation atr={ "fill-opacity" } val={ "1;.5;.5;1" }/>
                                </circle>
                                <circle cx={ "25" } cy={ "7" } r={ "5" }>
                                    <SvgAnimation atr={ "r" } val={ '5;2;2;5' } delay={ dur! / 4 + "ms" }/>
                                    <SvgAnimation atr={ "fill-opacity" } val={ "1;.5;.5;1" } delay={ dur! / 4 + "ms" }/>
                                </circle>
                                <circle cx={ "42" } cy={ "7" } r={ "5" }>
                                    <SvgAnimation atr={ "r" } val={ '5;2;2;5' } delay={ dur! / 2 + "ms" }/>
                                    <SvgAnimation atr={ "fill-opacity" } val={ "1;.5;.5;1" } delay={ dur! / 2 + "ms" }/>
                                </circle>
                            </> : ""
                    ) }
                    { ( type === "flash" ?
                            <>
                                <rect x="3" y={ "2" } width={ "10" } height={ "10" }>
                                    <SvgAnimation atr={ "fill-opacity" } val={ "1;.2;.2" }/>
                                </rect>
                                <rect x="20" y={ "2" } width={ "10" } height={ "10" }>
                                    <SvgAnimation atr={ "fill-opacity" } val={ "1;.2;.2" } delay={ dur! / 4 + "ms" }/>
                                </rect>
                                <rect x="37" y={ "2" } width={ "10" } height={ "10" }>
                                    <SvgAnimation atr={ "fill-opacity" } val={ "1;.2;.2" } delay={ dur! / 2 + "ms" }/>
                                </rect>
                            </> : ""
                    ) }
                </svg>
            </div>
        )
    }

Loader.defaultProps = {
    type: "cycle",
    intent: "accent",
    dur: 500,
    size: "sm",
    stroke: false,
    container: true
}


export default Loader;
