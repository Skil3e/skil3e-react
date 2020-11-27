import * as React from "react";
import { ReactNode } from "react";
import Portal from "../Portal/Portal";

export type Item = {
    url: string
    [key: string]: unknown
}

interface childrenWithProps<T extends Item> {
    item: T
    index: number
    handleOpen: ( index: number ) => void
}

interface allItemsChildren<T extends Item> {
    items: T[]
    handleOpen: ( index: number ) => void
}

export interface ILightbox<T extends Item> {
    items: T[]
    children?: ( { item, handleOpen }: childrenWithProps<T> ) => JSX.Element | ReactNode
    allChildren?: ( { items, handleOpen }: allItemsChildren<T> ) => JSX.Element[] | ReactNode[]
    classPrefix?: string
    transitionDuration?: number
    showCloseButton?: boolean
    iconClose?: string
    closeOnClickOutside?: boolean
    showArrows?: boolean
    arrowNext?: string | JSX.Element | ReactNode
    arrowPrevious?: string | JSX.Element | ReactNode
    keyboardNavigation?: boolean
    touchNavigation?: boolean
    touchThreshold?: number
}

interface LightboxState {
    isOpen: boolean
    transitioning: boolean
    prevUrl: string
    currentUrl: string
    nextUrl: string
}

export default class Lightbox<T extends Item> extends React.PureComponent<ILightbox<T>, LightboxState> {
    transitionDuration: number
    classPrefix: string

    showCloseButton?: boolean
    closeOnClickOutside?: boolean
    iconClose: string | JSX.Element | ReactNode

    showArrows?: boolean
    arrowNext: string | JSX.Element | ReactNode
    arrowPrevious: string | JSX.Element | ReactNode

    keyboardNavigation?: boolean
    touchNavigation?: boolean
    touchThreshold: number

    items: T[]
    mouseEvents: {
        clientX: number
        offset: number
        isDown: boolean
    }
    cIndex: number
    isInTransition: boolean
    prevItem = React.createRef<HTMLDivElement>();
    currentItem = React.createRef<HTMLDivElement>();
    nextItem = React.createRef<HTMLDivElement>();

    constructor( props: ILightbox<T> ) {
        super( props );
        const {
            classPrefix = "lightbox",
            transitionDuration = 500,
            showCloseButton = true,
            closeOnClickOutside = true,
            iconClose = `x`,
            showArrows = true,
            arrowNext = `>`,
            arrowPrevious = `<`,
            keyboardNavigation = true,
            touchNavigation = true,
            touchThreshold = 100,
        } = this.props || {};

        this.transitionDuration = transitionDuration;
        this.classPrefix = classPrefix;
        this.showCloseButton = showCloseButton;
        this.closeOnClickOutside = closeOnClickOutside;
        this.showArrows = showArrows;
        this.iconClose = iconClose;
        this.arrowNext = arrowNext;
        this.arrowPrevious = arrowPrevious;
        this.keyboardNavigation = keyboardNavigation;
        this.touchNavigation = touchNavigation;
        this.touchThreshold = touchThreshold;
        this.mouseEvents = {
            clientX: 0,
            offset : 0,
            isDown : false
        }
        this.items = props.items
        this.state = {
            isOpen       : false,
            transitioning: false,
            prevUrl      : "",
            currentUrl   : "",
            nextUrl      : ""
        }
        this.cIndex = 0;
        this.isInTransition = false
        //Bind Functions
        this.handleOpen = this.handleOpen.bind( this )
        this.handleClose = this.handleClose.bind( this )
        this.handleHideOnClickOutside = this.handleHideOnClickOutside.bind( this )
        this.setSrc = this.setSrc.bind( this )
        this.next = this.next.bind( this )
        this.previous = this.previous.bind( this )
        this.onKeyPress = this.onKeyPress.bind( this )
        this.onMouseDown = this.onMouseDown.bind( this )
        this.onMouseMove = this.onMouseMove.bind( this )
        this.onTouchStart = this.onTouchStart.bind( this )
        this.onTouchMove = this.onTouchMove.bind( this )
        this.onRelease = this.onRelease.bind( this )
    }

    componentWillUnmount() {
        document.removeEventListener( "keydown", this.onKeyPress )
    }

    handleOpen( index: number ) {
        if (this.keyboardNavigation) {
            document.addEventListener( "keydown", this.onKeyPress )
        }
        this.cIndex = index;
        this.setState( prev => ({
            ...prev,
            isOpen: true,
        }) )
        this.setSrc();
        document.body.style.overflow = "hidden";
    }

    handleClose() {
        document.removeEventListener( "keydown", this.onKeyPress )
        this.setState( prev => ({
            ...prev,
            isOpen       : false,
            transitioning: false,
        }) )
        document.body.style.overflow = "";
    }

    handleHideOnClickOutside( e: React.MouseEvent<HTMLElement, MouseEvent> ) {
        if (!this.closeOnClickOutside) {
            return
        }
        if (e.target === this.currentItem.current) {
            this.handleClose()
        }
    }

    next() {
        this.setState( prev => ({
            ...prev,
            transitioning: true,
        }) )
        if (this.currentItem.current) {
            this.currentItem.current.style.transition = `${ this.transitionDuration }ms ease-in-out`;
            this.currentItem.current.style.transform = "translateX(-200%)"
        }
        if (this.nextItem.current) {
            this.nextItem.current.style.transition = `${ this.transitionDuration }ms ease-in-out`;
            this.nextItem.current.style.transform = "translateX(-200%)"
        }
        this.cIndex = (this.cIndex + 1) % this.items.length
        setTimeout( this.setSrc, this.transitionDuration );
    }

    previous() {
        this.setState( prev => ({
            ...prev,
            transitioning: true,
        }) )
        if (this.prevItem.current) {
            this.prevItem.current.style.transition = `${ this.transitionDuration }ms ease-in-out`;
            this.prevItem.current.style.transform = "translateX(0)"
        }
        if (this.currentItem.current) {
            this.currentItem.current.style.transition = `${ this.transitionDuration }ms ease-in-out`;
            this.currentItem.current.style.transform = "translateX(200%)"
        }
        this.cIndex = (this.cIndex + this.items.length - 1) % this.items.length;
        setTimeout( this.setSrc, this.transitionDuration )
    }

    private setSrc() {
        this.setState( prev => ({
            ...prev,
            transitioning: false,
            prevUrl      : this.items[(this.cIndex + this.items.length - 1) % this.items.length].url,
            currentUrl   : this.items[this.cIndex].url,
            nextUrl      : this.items[(this.cIndex + 1) % this.items.length].url
        }) )

        if (this.prevItem.current) {
            this.prevItem.current.style.transition = ``;
            this.prevItem.current.style.transform = "translateX(-100%)"
        }
        if (this.currentItem.current) {
            this.currentItem.current.style.transition = ``;
            this.currentItem.current.style.transform = "translateX(-100%)"
        }
        if (this.nextItem.current) {
            this.nextItem.current.style.transition = ``;
            this.nextItem.current.style.transform = "translateX(-100%)"
        }
    }

    //--------------------------------------------------
    // Navigation Events
    //--------------------------------------------------
    private onKeyPress( e: KeyboardEvent ) {
        if (e.key === "Escape") {
            this.handleClose()
        }
        if (e.key === "ArrowRight") {
            if (this.state.transitioning) {
                return
            }
            this.next()
        }
        if (e.key === "ArrowLeft") {
            if (this.state.transitioning) {
                return
            }
            this.previous()
        }
    }

    private onMouseDown( e: React.MouseEvent<HTMLImageElement, MouseEvent> ) {
        if (!this.touchNavigation) {
            return
        }
        e.preventDefault();
        this.mouseEvents.clientX = e.clientX - this.mouseEvents.offset
        this.mouseEvents.isDown = true
    }

    private onMouseMove( e: React.MouseEvent<HTMLImageElement, MouseEvent> ) {
        if (!this.touchNavigation) {
            return
        }
        e.preventDefault()
        if (!this.mouseEvents.isDown) {
            return
        }
        let currentOffset = (e.clientX - this.mouseEvents.clientX);
        if (this.currentItem.current) {
            this.currentItem.current.style.left = `${ currentOffset }px`;
        }
        this.mouseEvents.offset = currentOffset;
    }

    private onTouchStart( e: React.TouchEvent<HTMLImageElement> ) {
        if (!this.touchNavigation) {
            return
        }
        this.mouseEvents.clientX = e.touches[0].clientX - this.mouseEvents.offset
    }

    private onTouchMove( e: React.TouchEvent<HTMLImageElement> ) {
        if (!this.touchNavigation) {
            return
        }
        let i = 0;
        const changedTouches = e.changedTouches.length;
        for (i; i < changedTouches; i++) {
            let currentOffset = (e.changedTouches[i].pageX - this.mouseEvents.clientX);
            if (this.currentItem.current) {
                this.currentItem.current.style.left = `${ currentOffset }px`;
            }
            this.mouseEvents.offset = currentOffset;
        }
    }

    private onRelease() {
        if (!this.touchNavigation) {
            return
        }
        if (this.mouseEvents.offset <= -this.touchThreshold) {
            this.next()
            this.mouseEvents.offset = 0;
            this.mouseEvents.isDown = false
        } else if (this.mouseEvents.offset >= this.touchThreshold) {
            this.previous()
            this.mouseEvents.offset = 0;
            this.mouseEvents.isDown = false
        }
        this.mouseEvents.offset = 0;
        if (this.currentItem.current) {
            this.currentItem.current.style.left = `0`;
        }
        this.mouseEvents.isDown = false
    }

    render() {
        return (
            <>
                { this.props.children && this.props.items.map( ( item, index ) => (this.props.children && this.props.children( { item, handleOpen: this.handleOpen, index } )) ) }
                { this.props.allChildren && this.props.allChildren( { items: this.props.items, handleOpen: this.handleOpen } ) }
                { this.state.isOpen &&
                <Portal className={ "lightbox__wrapper" } onClick={ this.handleHideOnClickOutside }>
                    <div className={ "lightbox__container" }>
                        <div ref={ this.prevItem } className={ "lightbox__image-container" } style={ { transform: "translateX(-100%)" } }>
                            <img className={ "lightbox__image" } src={ this.state.prevUrl } alt=""/>
                        </div>
                        <div ref={ this.currentItem } className={ "lightbox__image-container" } style={ { transform: "translateX(-100%)" } }>
                            <img className={ "lightbox__image" } src={ this.state.currentUrl } alt=""
                                 onMouseDown={ this.onMouseDown }
                                 onMouseMove={ this.onMouseMove }
                                 onMouseUp={ this.onRelease }
                                 onMouseLeave={ this.onRelease }
                                 onTouchStart={ this.onTouchStart }
                                 onTouchMove={ this.onTouchMove }
                                 onTouchEnd={ this.onRelease }
                            />
                        </div>
                        <div ref={ this.nextItem } className={ "lightbox__image-container" } style={ { transform: "translateX(-100%)" } }>
                            <img className={ "lightbox__image" } src={ this.state.nextUrl } alt=""/>
                        </div>
                    </div>
                    { this.showArrows && <>
                        <button disabled={ this.state.transitioning } className={ "lightbox__button lightbox__button--prev" } onClick={ this.previous }>{ this.arrowPrevious }</button>
                        <button disabled={ this.state.transitioning } className={ "lightbox__button lightbox__button--next" } onClick={ this.next }>{ this.arrowNext }</button>
                    </> }
                    { this.showCloseButton && <button className={ "lightbox__button lightbox__button--close" } onClick={ this.handleClose }>{ this.iconClose }</button> }
                </Portal>
                }
            </>
        )
    }
}
