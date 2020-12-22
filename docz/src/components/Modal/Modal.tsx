import * as React from 'react';
import { joinIgnoreEmpty } from "../utilities";
import { Dispatch, FunctionComponent, ReactNode, SetStateAction, useEffect, useState } from "react";
import Portal from "../Portal/Portal";


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
    closeOnClickOutside?: boolean
}

const Modal: FunctionComponent<ModalProps> = (
    {
        children,
        wrapperClassName,
        modalClassName,
        triggerClassName,
        trigger,
        closeOnClickOutside= true
    }
) => {
    const wrapperClass = joinIgnoreEmpty( "modal-wrapper", wrapperClassName );
    const classModal = joinIgnoreEmpty( 'modal', modalClassName );
    const classTrigger = joinIgnoreEmpty( 'modal-trigger', triggerClassName );
    const [ show, setShow ] = useState( false );

    useEffect( () => {
        return () => {
            document.body.style.overflow = '';
        }
    }, [] )

    function handleShow() {
        setShow( true );
        document.body.style.overflow = 'hidden';
    }

    function handleHide() {
        setShow( false );
        document.body.style.overflow = "";
    }

    function handleHideOnClickOutside( e: any ) {
        if (!closeOnClickOutside) {
            return
        }
        let modal = document.getElementsByClassName( 'modal-wrapper' )[0];
        if (e.target === modal) {
            setShow( false );
            document.body.style.overflow = "";
        }
    }

    const modal = show ? (
        <Portal className={ wrapperClass } onClick={ handleHideOnClickOutside }>
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
