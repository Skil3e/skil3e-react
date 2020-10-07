import * as React from "react";
import * as ReactDOM from "react-dom";

export interface PortalProps {
    className: string
    onClick: ( e: any ) => void
}

export default class Portal extends React.Component<PortalProps> {
    private readonly modalWrapper: HTMLDivElement;
    private modalRoot = document.body;

    public constructor( props: any ) {
        super( props );
        this.modalWrapper = document.createElement( 'div' );
        this.modalWrapper.classList.add( 'portal-wrapper', 'fixed', 'left--0', 'top--0', 'w--100', 'h--100', 'z--9' );
        this.modalWrapper.style.backgroundColor = "rgba(0,0,0,.85)";
        this.modalWrapper.style.overflow = "auto";
        (this.props.className && this.modalWrapper.classList.add( this.props.className ));
        this.modalWrapper.onclick = this.props.onClick;
    }

    public componentDidMount(): void {
        this.modalRoot.appendChild( this.modalWrapper );
    }

    public componentWillUnmount(): void {
        this.modalRoot.removeChild( this.modalWrapper );
    }

    public render(): React.ReactElement {
        return ReactDOM.createPortal(
            this.props.children,
            this.modalWrapper
        )
    }
}
