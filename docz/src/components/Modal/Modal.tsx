import * as React from 'react';
import * as ReactDOM from "react-dom";
import { joinIgnoreEmpty } from "../utilities";
import { Dispatch, FunctionComponent, ReactNode, SetStateAction, useState } from "react";

export interface PortalProps {
    className: string
    onClick: ( e: any ) => void
}

interface childrenWithProps {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

export interface ModalProps {
    children: ( { show, setShow }: childrenWithProps ) => JSX.Element | ReactNode
    wrapperClassName?: string
    modalClassName?: string
    triggerClassName?: string
    trigger: ( { show, setShow }: childrenWithProps ) => JSX.Element | ReactNode
}

class Portal extends React.Component<PortalProps> {
    private readonly modalWrapper: HTMLDivElement;
    private modalRoot = document.body;

    public constructor( props: any ) {
        super( props );
        this.modalWrapper = document.createElement( 'div' );
        this.modalWrapper.classList.add( 'modal-wrapper', 'fixed', 'left--0', 'top--0', 'w--100', 'h--100', 'z--9' );
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

const Modal: FunctionComponent<ModalProps> = (
    {
        children,
        wrapperClassName,
        modalClassName,
        triggerClassName,
        trigger,
    }
) => {

    const classWrapper = (wrapperClassName ? " " + wrapperClassName : "");
    const classModal = joinIgnoreEmpty( 'modal absolute-x--center p--md mt--xxl w--50 bg--bg', modalClassName );
    const classTrigger = joinIgnoreEmpty( 'modal-trigger', triggerClassName );
    const [ show, setShow ] = useState( false );

    function handleShow() {
        setShow( true );
        document.body.style.overflow = 'hidden';
    }

    function handleHide() {
        setShow( false );
        document.body.style.overflow = "";
    }

    function handleHideOnClickOutside( e: any ) {
        let modal = document.getElementsByClassName( 'modal-wrapper' )[0];
        if (e.target === modal) {
            setShow( false );
            document.body.style.overflow = "";
        }
    }

    const modal = show ? (
        <Portal className={ classWrapper } onClick={ handleHideOnClickOutside }>
            <div className={ classModal }>
                { children( { show, setShow } ) }
            </div>
        </Portal>
    ) : null;
    return (
        <>
            <div onClick={ handleShow } className={ classTrigger }>
                { trigger( { show, setShow } ) }
            </div>
            { modal }
        </>
    )
}
export default Modal
// export default class Modal extends React.Component<ModalProps, { showModal: boolean }> {
//     constructor( props: any ) {
//         super( props );
//         this.state = { showModal: false };
//         this.handleShow = this.handleShow.bind( this );
//         this.handleHide = this.handleHide.bind( this );
//         this.handleHideOnClickOutside = this.handleHideOnClickOutside.bind( this );
//     }
//
//     handleShow() {
//         this.setState( { showModal: true } );
//         document.body.style.overflow = 'hidden';
//     }
//
//     handleHide() {
//         this.setState( { showModal: false } );
//         document.body.style.overflow = "";
//     }
//
//     handleHideOnClickOutside( e: any ) {
//         let modal = document.getElementsByClassName( 'modal-wrapper' )[0];
//         if (e.target === modal) {
//             this.setState( { showModal: false } );
//             document.body.style.overflow = "";
//         }
//     }
//
//     render() {
//         const classWrapper = (this.props.wrapperClassName ? " " + this.props.wrapperClassName : "");
//         const classModal = joinIgnoreEmpty( 'modal absolute-x--center p--md mt--xxl w--50 bg--bg', this.props.modalClassName );
//         const classTrigger = joinIgnoreEmpty( 'modal-trigger', this.props.triggerClassName );
//
//         const modal = this.state.showModal ? (
//             <Portal className={ classWrapper } onClick={ this.handleHideOnClickOutside }>
//                 <div className={ classModal }>
//                     { this.handleHide }
//                     { this.props.children }
//                 </div>
//             </Portal>
//         ) : null;
//
//         return (
//             <>
//                 <div onClick={ this.handleShow } className={ classTrigger }>
//                     { this.props.trigger }
//                 </div>
//                 { modal }
//             </>
//         );
//     }
// }
