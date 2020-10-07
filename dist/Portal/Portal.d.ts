import * as React from "react";
export interface PortalProps {
    className: string;
    onClick: (e: any) => void;
}
export default class Portal extends React.Component<PortalProps> {
    private readonly modalWrapper;
    private modalRoot;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement;
}
