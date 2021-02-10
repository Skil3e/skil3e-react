import { FunctionComponent, ReactNode } from "react";
interface childrenWithProps {
    handleShow: () => void;
    handleHide: () => void;
}
export interface ModalProps {
    children: ({ handleShow, handleHide }: childrenWithProps) => JSX.Element | ReactNode;
    wrapperClassName?: string;
    modalClassName?: string;
    triggerClassName?: string;
    trigger: ({ handleShow, handleHide }: childrenWithProps) => JSX.Element | ReactNode;
    closeOnClickOutside?: boolean;
    onUnmount?: ({ handleShow, handleHide }: childrenWithProps) => void;
    onMount?: ({ handleShow, handleHide }: childrenWithProps) => void;
    onClose?: () => void;
    onOpen?: () => void;
}
declare const Modal: FunctionComponent<ModalProps>;
export default Modal;
