import * as React from 'react';
import { FunctionComponent, ReactNode, useState } from "react";
import { joinIgnoreEmpty } from "../utilities";
import Portal from "../Portal/Portal";


interface childrenWithProps {
    handleShow: () => void
    handleHide: () => void
}

export interface ModalProps {
    children: ( { handleShow, handleHide }: childrenWithProps ) => JSX.Element | ReactNode
    wrapperClassName?: string
    modalClassName?: string
    triggerClassName?: string
    trigger: ( { handleShow, handleHide }: childrenWithProps ) => JSX.Element | ReactNode
    closeOnClickOutside?: boolean
    onUnmount?: ( { handleShow, handleHide }: childrenWithProps ) => void
    onMount?: ( { handleShow, handleHide }: childrenWithProps ) => void
    onClose?: () => void
    onOpen?: () => void
}

const Modal: FunctionComponent<ModalProps> = (
    {
        children,
        wrapperClassName,
        modalClassName,
        triggerClassName,
        trigger,
        closeOnClickOutside = true,
        onClose,
        onOpen,
        onUnmount,
        onMount
    }
) => {
    const wrapperClass = joinIgnoreEmpty( "modal-wrapper", wrapperClassName );
    const classModal = joinIgnoreEmpty( 'modal', modalClassName );
    const classTrigger = joinIgnoreEmpty( 'modal-trigger', triggerClassName );
    const [ show, setShow ] = useState( false );

    function onPortalMount() {
        onMount && onMount( { handleShow, handleHide } )
    }

    function onPortalUnmount() {
        onUnmount && onUnmount( { handleShow, handleHide } )
    }

    function handleShow() {
        setShow( true );
        document.body.style.overflow = 'hidden';
        onOpen && onOpen()
    }

    function handleHide() {
        setShow( false );
        document.body.style.overflow = "";
        onClose && onClose()
    }

    function handleHideOnClickOutside( e: any ) {
        if (!closeOnClickOutside) {
            return
        }
        let modal = document.getElementsByClassName( 'modal-wrapper' )[0];
        if (e.target === modal) {
            handleHide()
        }
    }

    const modal = show ? (
        <Portal className={ wrapperClass } onClick={ handleHideOnClickOutside } onUnmount={ onPortalUnmount } onMount={ onPortalMount }>
            <div className={ classModal }>
                { children( { handleShow, handleHide } ) }
            </div>
        </Portal>
    ) : null;
    return (
        <>
            <div onClick={ handleShow } className={ classTrigger }>
                { trigger( { handleShow, handleHide } ) }
            </div>
            { modal }
        </>
    )
}
export default Modal
