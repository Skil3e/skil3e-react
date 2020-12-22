import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from "react";
interface childrenWithProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}
export interface ModalProps {
    children: ({ show, setShow }: childrenWithProps) => JSX.Element | ReactNode;
    wrapperClassName?: string;
    modalClassName?: string;
    triggerClassName?: string;
    trigger: ({ show, setShow }: childrenWithProps) => JSX.Element | ReactNode;
    closeOnClickOutside?: boolean;
    onUnmount?: () => void;
    onClose?: () => void;
    onOpen?: () => void;
}
declare const Modal: FunctionComponent<ModalProps>;
export default Modal;
