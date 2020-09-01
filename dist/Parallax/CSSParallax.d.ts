import * as React from "react";
import { CSSProperties } from "react";
export interface CSSParallaxContainerProps {
    backgroundColor: string;
    className: string;
    image: string;
    bgSize: "cover" | "contain";
    bgPos: string;
    style: CSSProperties;
    offset: number;
    reverseDirection: boolean;
    speed: number;
    repeat: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
}
export default class CSSParallaxContainer extends React.Component<CSSParallaxContainerProps> {
    private node;
    constructor(props: CSSParallaxContainerProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
