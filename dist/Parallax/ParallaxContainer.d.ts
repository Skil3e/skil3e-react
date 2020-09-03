import { FunctionComponent } from "react";
export interface ParallaxContainerProps {
    speed?: number;
    offset?: number;
    className?: string;
    useOpacity?: boolean;
}
declare const ParallaxContainer: FunctionComponent<ParallaxContainerProps>;
export default ParallaxContainer;
