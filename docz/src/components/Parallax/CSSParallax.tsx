import * as React from "react"
import { CSSProperties } from "react";

export interface CSSParallaxContainerProps {
    backgroundColor?: string
    className?: string
    image: string
    bgSize?: "cover" | "contain"
    bgPos?: string,
    style?: CSSProperties
    offset?: number,
    reverseDirection?: boolean,
    speed?: number,
    repeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
}

export default class CSSParallaxContainer extends React.Component<CSSParallaxContainerProps> {
    private node: HTMLDivElement | null | undefined;
    constructor(props: CSSParallaxContainerProps) {
        super(props);
    }

    componentDidMount() {
        let windowWidth = document.documentElement.clientWidth;
        const element = this.node!;
        let speed = this.props.speed ? this.props.speed : 3;
        let offset = this.props.offset ? this.props.offset : 0;

        function parallax() {
            const bound = element.getBoundingClientRect();
            const trueAmount = (bound.bottom - window.innerWidth) - offset;
            element.style.backgroundPositionY = Math.round(trueAmount / speed) + "px";
        }

        function parallaxReverse() {
            const bound = element.getBoundingClientRect();
            const trueAmount = (bound.bottom - window.innerWidth) + offset;
            element.style.backgroundPositionY = -Math.round(trueAmount / speed) + "px";
        }

        if (windowWidth < 992) {
            element.style.backgroundPositionY = 'center';
        } else {
            if (this.props.reverseDirection) {
                parallaxReverse();
                document.addEventListener('scroll', parallaxReverse);
            } else {
                parallax();
                document.addEventListener('scroll', parallax);
            }
        }
    }

    render() {

        const bgImageURL = this.props.image;
        const size = (this.props.bgSize ? this.props.bgSize : 'cover');
        const position = (this.props.bgPos ? this.props.bgPos : 'center');
        const repeat = (this.props.repeat ? this.props.repeat : 'repeat-y');
        const defaultStyle = {
            backgroundColor: this.props.backgroundColor,
            backgroundImage: 'url(' + bgImageURL + ')',
            backgroundRepeat: repeat,
            backgroundSize: size,
            backgroundPositionX: position,
        };
        const Style = {...defaultStyle, ...this.props.style};

        return (
            <div ref={node => this.node = node} style={Style} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}
