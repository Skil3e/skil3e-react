import * as React from "react";
import { joinIgnoreEmpty } from "../utilities";
import { Intents, Sizes } from "../types";
import { SVGProps } from "react";

export type IconContent = {
    path: string
    fill: string
}

export interface IconsProps {
    id: string,
    viewBox: string,
    path?: string
    content?: IconContent[]
}

export interface IconProps extends SVGProps<SVGSVGElement> {
    icon: IconsProps,
    className?: string,
    height?: number,
    size?: Sizes | number,
    fill?: Intents,
    title?: string
}

const Icon = React.forwardRef(
    ( props: IconProps, ref?: React.Ref<SVGSVGElement> ) => {
        const { icon, size = "sm", title, fill = "text", ...rest } = props;
        const className = joinIgnoreEmpty( "icon inline-flex al__it--center", `icon-${ icon.id }`, (fill ? `fill--${ fill }` : ""), props.className );
        let height: number;

        if (size === 'xs') {
            height = 20;
        } else if (size === 'sm') {
            height = 24;
        } else if (size === 'md') {
            height = 32;
        } else if (size === 'lg') {
            height = 64;
        } else if (size === 'xl') {
            height = 100;
        } else {
            height = size
        }

        return (
            <svg { ...rest }
                 ref={ ref }
                 className={ className }
                 xmlns="http://www.w3.org/2000/svg"
                 height={ height }
                 viewBox={ icon.viewBox }
                 aria-labelledby={ title }
            >
                { title && <title id={ title }>{ title }</title> }
                { icon.content && icon.content.map( ( cnt, index ) => <path key={ index } fill={ cnt.fill } d={ cnt.path }/> ) }
                { icon.path && <path d={ icon.path }/> }
            </svg>
        )
    } )

export default Icon
