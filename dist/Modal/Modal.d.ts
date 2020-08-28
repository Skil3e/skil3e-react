import * as React from 'react';
import { ModalProps } from "../types";
export default class Modal extends React.Component<ModalProps, {
    showModal: boolean;
}> {
    constructor(props: any);
    handleShow(): void;
    handleHide(): void;
    handleHideOnClickOutside(e: any): void;
    render(): JSX.Element;
}
