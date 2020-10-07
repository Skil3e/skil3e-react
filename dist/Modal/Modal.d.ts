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
}
declare const Modal: FunctionComponent<ModalProps>;
export default Modal;
