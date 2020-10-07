import * as React from "react";
import { ReactNode } from "react";
export declare type Item = {
    url: string;
    [key: string]: unknown;
};
interface childrenWithProps<T extends Item> {
    item: T;
    index: number;
    handleOpen: (index: number) => void;
}
interface allItemsChildren<T extends Item> {
    items: T[];
    handleOpen: (index: number) => void;
}
export interface ILightbox<T extends Item> {
    items: T[];
    children?: ({ item, handleOpen }: childrenWithProps<T>) => JSX.Element | ReactNode;
    allChildren?: ({ items, handleOpen }: allItemsChildren<T>) => JSX.Element[] | ReactNode[];
    classPrefix?: string;
    transitionDuration?: number;
    showCloseButton?: boolean;
    iconClose?: string;
    closeOnClickOutside?: boolean;
    showArrows?: boolean;
    arrowNext?: string | JSX.Element | ReactNode;
    arrowPrevious?: string | JSX.Element | ReactNode;
    keyboardNavigation?: boolean;
    touchNavigation?: boolean;
    touchThreshold?: number;
}
interface LightboxState {
    isOpen: boolean;
    transitioning: boolean;
    prevUrl: string;
    currentUrl: string;
    nextUrl: string;
}
export default class Lightbox<T extends Item> extends React.PureComponent<ILightbox<T>, LightboxState> {
    transitionDuration: number;
    classPrefix: string;
    showCloseButton?: boolean;
    closeOnClickOutside?: boolean;
    iconClose: string;
    showArrows?: boolean;
    arrowNext: string | JSX.Element | ReactNode;
    arrowPrevious: string | JSX.Element | ReactNode;
    keyboardNavigation?: boolean;
    touchNavigation?: boolean;
    touchThreshold: number;
    items: T[];
    mouseEvents: {
        clientX: number;
        offset: number;
        isDown: boolean;
    };
    cIndex: number;
    isInTransition: boolean;
    prevItem: React.RefObject<HTMLDivElement>;
    currentItem: React.RefObject<HTMLDivElement>;
    nextItem: React.RefObject<HTMLDivElement>;
    constructor(props: ILightbox<T>);
    componentWillUnmount(): void;
    handleOpen(index: number): void;
    handleClose(): void;
    handleHideOnClickOutside(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
    next(): void;
    previous(): void;
    private setSrc;
    private onKeyPress;
    private onMouseDown;
    private onMouseMove;
    private onTouchStart;
    private onTouchMove;
    private onRelease;
    render(): JSX.Element;
}
export {};
