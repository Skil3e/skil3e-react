"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),r=require("react-dom"),n=require("framer-motion");function s(e){return e?" "+e:""}var a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},o=function(e,t){void 0===t&&(t="-");var r=e.split(t).join(" ");return r.charAt(0).toUpperCase()+r.substring(1).toLowerCase()};function i(e){var t=new Date(e);return t.toLocaleString("default",{month:"short"})+" "+t.getFullYear()}function l(e,r){var n=t.useRef((function(){}));t.useEffect((function(){n.current=e}),[e]),t.useEffect((function(){if(null!==r){var e=setInterval((function(){n.current()}),r);return function(){return clearInterval(e)}}}),[r])}function c(e,t){var r="";return e&&t&&("string"==typeof e?r+=t+"--"+e:(r+=e.top?" "+t+"t--"+e.top:"",r+=e.bottom?" "+t+"b--"+e.bottom:"",r+=e.left?" "+t+"l--"+e.left:"",r+=e.right?" "+t+"r--"+e.right:"",r+=e.x?" "+t+"x--"+e.x:"",r+=e.y?" "+t+"y--"+e.y:"",r+=m(e,"sm",t),r+=m(e,"md",t),r+=m(e,"lg",t),r+=m(e,"xl",t))),r}function m(e,t,r){var n="";return n+=e[t]&&"string"==typeof e[t]&&e[t]?" "+t+":"+r+"--"+e[t]:"",n+=e[t]&&e[t].top?" "+t+":"+r+"t--"+e[t].top:"",n+=e[t]&&e[t].bottom?" "+t+":"+r+"b--"+e[t].bottom:"",n+=e[t]&&e[t].left?" "+t+":"+r+"l--"+e[t].left:"",n+=e[t]&&e[t].right?" "+t+":"+r+"r--"+e[t].right:"",n+=e[t]&&e[t].x?" "+t+":"+r+"x--"+e[t].x:"",n+=e[t]&&e[t].y?" "+t+":"+r+"y--"+e[t].y:""}function u(e){var t="";return e&&("number"==typeof e?t+="col--"+e:(t+=e.sm?" sm:col--"+e.sm:"",t+=e.md?" md:col--"+e.md:"",t+=e.lg?" lg:col--"+e.lg:"",t+=e.xl?" xl:col--"+e.xl:"")),t}var d=t.forwardRef((function(r,n){var s=r.look,o=r.intent,i=r.size,l=r.fullwidth,m=r.margin,u=e.__rest(r,["look","intent","size","fullwidth","margin"]),d=a("button",s,o,i,l&&"w--100",r.className,c(m,"m"));return t.createElement("button",e.__assign({},u,{ref:n,className:d}))}));d.defaultProps={look:"fill",intent:"accent"};var p=t.forwardRef((function(r,n){var s=r.label,o=r.errors,i=r.customErrors,l=r.name,c=r.children,m=r.inputID,u=r.labelClassName,d=r.className,p=e.__rest(r,["label","errors","customErrors","name","children","inputID","labelClassName","className"]),h=a("input-wrapper",d),f=a("flex small px--sm mb--xs",u);return t.createElement("div",e.__assign({},p,{ref:n,className:h}),s&&t.createElement("label",{className:f,htmlFor:m},s),c,!i&&o&&l&&o[l]&&t.createElement("span",{className:"flex small px--sm text--danger mt--xs"},o[l].message),i&&t.createElement("span",{className:"flex small px--sm text--danger mt--xs"},i))})),h=t.forwardRef((function(r,n){var s=r.type,a=r.id,i=r.label,l=r.errors,c=r.customErrors,m=r.className,u=r.wrapperClassName,d=r.labelClassName,h=r.name,f=e.__rest(r,["type","id","label","errors","customErrors","className","wrapperClassName","labelClassName","name"]);return t.createElement(p,{className:u,inputID:a,name:h,label:i||(a?o(a):void 0),errors:l,customErrors:c,labelClassName:d},t.createElement("input",e.__assign({},f,{ref:n,className:m,type:s,id:a,name:h})))}));h.defaultProps={type:"text"};var f=t.forwardRef((function(r,n){var s=r.id,a=r.label,i=r.errors,l=r.customErrors,c=r.className,m=r.wrapperClassName,u=r.labelClassName,d=r.name,h=e.__rest(r,["id","label","errors","customErrors","className","wrapperClassName","labelClassName","name"]);return t.createElement(p,{className:m,inputID:s,name:d,label:a||(s?o(s):void 0),errors:i,customErrors:l,labelClassName:u},t.createElement("textarea",e.__assign({},h,{name:d,ref:n,className:c,id:s})))})),v=t.forwardRef((function(r,n){r.type;var s=r.id,a=r.name,i=r.label,l=r.errors,c=r.customErrors,m=r.className,u=r.wrapperClassName,d=r.customShowHide,h=r.toggleShowClassname,f=r.labelClassName,v=e.__rest(r,["type","id","name","label","errors","customErrors","className","wrapperClassName","customShowHide","toggleShowClassname","labelClassName"]),g=t.useState(!1),x=g[0],b=g[1];return t.createElement(p,{className:u,inputID:s,name:a,label:i||(s?o(s):void 0),errors:l,customErrors:c,labelClassName:f},t.createElement("div",{className:"flex--center relative"},t.createElement("input",e.__assign({name:a,style:{paddingRight:60}},v,{ref:n,className:"password-input"+(m?" "+m:""),type:x?"text":"password",id:s})),t.createElement("div",{style:{width:60},className:"absolute-y--center right--0 flex--center-middle cursor--pointer "+(d?"":"h--100")+(h?" "+h:""),onClick:function(){return b(!x)}},d?d(x):x?"Hide":"Show")))})),g=t.forwardRef((function(r,n){var s=r.id,a=r.label,i=r.errors,l=r.customErrors,c=(r.className,r.wrapperClassName),m=r.options,u=r.labelClassName,d=r.name,h=e.__rest(r,["id","label","errors","customErrors","className","wrapperClassName","options","labelClassName","name"]);return t.createElement(p,{className:c,inputID:s,name:d,label:a||(s?o(s):void 0),errors:i,customErrors:l,labelClassName:u},t.createElement("select",e.__assign({},h,{ref:n,id:s,name:d}),m.map((function(e){return t.createElement("option",{key:e.value,value:e.value},e.label?e.label:e.value)}))))})),x=t.forwardRef((function(r,n){var s=r.id,o=r.title,i=r.intent,l=r.onChange,c=r.checked,m=r.emoji,u=r.className,d=r.label,p=r.switchSize,h=r.name,f=e.__rest(r,["id","title","intent","onChange","checked","emoji","className","label","switchSize","name"]),v=a("switch flex--center",i,p,u);return t.createElement("div",{className:v,title:o},t.createElement("input",e.__assign({},f,{ref:n,className:"switch__checkbox",id:s,name:h,type:"checkbox",onChange:l,checked:c})),t.createElement("label",{className:"switch__label "+p,htmlFor:s},t.createElement("span",{className:"switch__button flex--center-middle cursor--pointer"},m)),d&&t.createElement("label",{className:"block ml--sm text--textDimmed",htmlFor:s},d))}));x.defaultProps={intent:"accent",switchSize:"md"};var b=t.forwardRef((function(r,n){var s=r.id,i=r.label,l=r.errors,c=r.customErrors,m=r.wrapperClassName,u=r.labelClassName,d=r.values,h=r.intent,f=r.name,v=r.className,g=r.badgeClassName,x=r.badgeSize,b=e.__rest(r,["id","label","errors","customErrors","wrapperClassName","labelClassName","values","intent","name","className","badgeClassName","badgeSize"]),E=a("inline-flex al__it--center check-badge",h,x);return t.createElement(p,{className:a("check-badge-wrapper",m),inputID:s,name:f,label:i||(s?o(s):void 0),errors:l,customErrors:c,labelClassName:u},t.createElement("div",{className:"flex--center"},d.map((function(r,s){return t.createElement("div",{key:r.id,className:E},t.createElement("input",e.__assign({className:a("checkbox w--auto mr--sm",v),hidden:!0,ref:n,type:"checkbox",name:f,id:r.id,value:r.value},b)),t.createElement("label",{className:a("badge-label",g,s>0?" ml--sm":""),htmlFor:r.id},o(r.id)))}))))}));b.defaultProps={intent:"accent"};var E=t.forwardRef((function(r,n){var s,o=r.icon,i=r.size,l=void 0===i?"sm":i,c=r.title,m=r.fill,u=void 0===m?"text":m,d=e.__rest(r,["icon","size","title","fill"]),p=a("icon inline-flex al__it--center","icon-"+o.id,u?"fill--"+u:"",r.className);return s="xs"===l?20:"sm"===l?24:"md"===l?32:"lg"===l?64:"xl"===l?100:l,t.createElement("svg",e.__assign({},d,{ref:n,className:p,xmlns:"http://www.w3.org/2000/svg",height:s,viewBox:o.viewBox,"aria-labelledby":c}),c&&t.createElement("title",{id:c},c),o.content&&o.content.map((function(e,r){return t.createElement("path",{key:r,fill:e.fill,d:e.path})})),o.path&&t.createElement("path",{d:o.path}))})),y=function(e){var r=e.type,n=e.intent,s=e.dur,o=e.size,i=e.className,l=e.stroke,c=e.container,m=e.containerClassName,u=function(e){var r=e.type,n=void 0===r?"XML":r,s=e.atr,a=e.val,o=e.delay,i=e.repeat,l=void 0===i?"indefinite":i;return t.createElement("animate",{attributeType:n,attributeName:s,values:a,dur:p,repeatCount:l,begin:o})},d=a(" ","loader",r,i,"fill--"+n,l?"stroke--"+n:""),p=s+"ms",h=a(" ",c?"loader-container flex--center-middle py-5":"loader-container inline-flex",m||""),f="";return"xs"===o?f="20":"sm"===o?f="40":"md"===o?f="60":"lg"===o?f="80":"xl"===o&&(f="100"),t.createElement("div",{className:h},t.createElement("svg",{className:d,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 14",width:f},"cycle"===r?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(u,{atr:"r",val:"0;5;"})),t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(u,{atr:"cx",val:"8;25;"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(u,{atr:"cx",val:"25;42;"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(u,{atr:"r",val:"5;0;"}))):"","pulse"===r?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(u,{atr:"r",val:"5;2;2;5"}),t.createElement(u,{atr:"fill-opacity",val:"1;.5;.5;1"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(u,{atr:"r",val:"5;2;2;5",delay:s/4+"ms"}),t.createElement(u,{atr:"fill-opacity",val:"1;.5;.5;1",delay:s/4+"ms"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(u,{atr:"r",val:"5;2;2;5",delay:s/2+"ms"}),t.createElement(u,{atr:"fill-opacity",val:"1;.5;.5;1",delay:s/2+"ms"}))):"","flash"===r?t.createElement(t.Fragment,null,t.createElement("rect",{x:"3",y:"2",width:"10",height:"10"},t.createElement(u,{atr:"fill-opacity",val:"1;.2;.2"})),t.createElement("rect",{x:"20",y:"2",width:"10",height:"10"},t.createElement(u,{atr:"fill-opacity",val:"1;.2;.2",delay:s/4+"ms"})),t.createElement("rect",{x:"37",y:"2",width:"10",height:"10"},t.createElement(u,{atr:"fill-opacity",val:"1;.2;.2",delay:s/2+"ms"}))):""))};y.defaultProps={type:"cycle",intent:"accent",dur:500,size:"sm",stroke:!1,container:!0};var N=function(t){function n(e){var r=t.call(this,e)||this;r.modalRoot=document.body;var n=a("portal-wrapper","fixed","left--0","top--0","w--100","h--100","z--9",r.props.className);return r.modalWrapper=document.createElement("div"),r.modalWrapper.className=n,r.modalWrapper.style.backgroundColor="rgba(0,0,0,.85)",r.modalWrapper.style.overflow="auto",r.modalWrapper.onclick=r.props.onClick,r}return e.__extends(n,t),n.prototype.componentDidMount=function(){this.modalRoot.appendChild(this.modalWrapper)},n.prototype.componentWillUnmount=function(){this.modalRoot.removeChild(this.modalWrapper)},n.prototype.render=function(){return r.createPortal(this.props.children,this.modalWrapper)},n}(t.Component),w=t.forwardRef((function(r,n){var s=r.margin,o=r.padding,i=r.className,l=e.__rest(r,["margin","padding","className"]),m=a("flex--wrap",i,c(s,"m"),c(o,"p"));return t.createElement("div",e.__assign({},l,{ref:n,className:m}))}));w.defaultProps={};var _=t.forwardRef((function(r,n){var s=r.margin,o=r.padding,i=r.size,l=r.className,m=e.__rest(r,["margin","padding","size","className"]),d=a("",l,!i&&"col",c(s,"m"),c(o,"p"),u(i));return t.createElement("div",e.__assign({},m,{ref:n,className:d}))})),C=t.forwardRef((function(r,n){var s=r.isOpen,o=r.intent,i=void 0===o?"accent":o,l=e.__rest(r,["isOpen","intent"]),c=a("menu-toggle",r.className,s?" menu-toggle--open":"");return t.createElement("div",e.__assign({},l,{ref:n,className:c}),t.createElement("div",{className:"menu-toggle__dot bg--"+i}),t.createElement("div",{className:"menu-toggle__dot bg--"+i}),t.createElement("div",{className:"menu-toggle__dot bg--"+i}))})),k=t.memo((function(e){var r=e.inView,n=e.valueFrom,s=void 0===n?0:n,a=e.valueTo,o=void 0===a?100:a,i=e.totalDuration,c=void 0===i?1:i,m=e.className,u=t.useState(s),d=u[0],p=u[1];return l((function(){r&&d<o?p(d+1):r||p(0)}),c/o*1e3),t.createElement("div",{className:m},d,"%")})),I=t.memo((function(e){var r=e.percentage,a=e.showPercentage,o=e.title,i=e.counterClassName,l=e.width,c=e.inView,m=e.icon,u=e.color,d={init:{pathLength:0,opacity:0},in:{pathLength:r/100,opacity:1,transition:{type:"spring",mass:1,stiffness:40}},out:{pathLength:0,opacity:0,transition:{type:"spring",mass:1,stiffness:40}}};return t.createElement("div",{className:"flex flex--column al__it--center"},t.createElement("div",{className:"relative"},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,viewBox:"0 0 200 200",strokeWidth:20,strokeLinecap:"round"},t.createElement("path",{className:"bg",stroke:"var(--border)",d:"M41 149.5a77 77 0 1 1 117.93 0",fill:"none"}),t.createElement(n.motion.path,{d:"M41 149.5a77 77 0 1 1 117.93 0",stroke:u,fill:"none",variants:d,animate:c?"in":"out"})),t.createElement("div",{className:"absolute--center text--center w--100"},!m&&a&&t.createElement(k,{className:s(i),inView:c,valueTo:r}),!m&&o&&t.createElement("div",{className:"font--bold pt--md"},o),m&&m(l,r,o))),m&&o&&t.createElement("div",{style:{marginTop:-10},className:"font--bold"},o))}));I.defaultProps={showPercentage:!1,width:200,inView:!0,color:"var(--accent)"};var S=function(r){function n(e){return r.call(this,e)||this}return e.__extends(n,r),n.prototype.componentDidMount=function(){var e=document.documentElement.clientWidth,t=this.node,r=this.props.speed?this.props.speed:3,n=this.props.offset?this.props.offset:0;function s(){var e=t.getBoundingClientRect().bottom-window.innerWidth-n;t.style.backgroundPositionY=Math.round(e/r)+"px"}function a(){var e=t.getBoundingClientRect().bottom-window.innerWidth+n;t.style.backgroundPositionY=-Math.round(e/r)+"px"}e<992?t.style.backgroundPositionY="center":this.props.reverseDirection?(a(),document.addEventListener("scroll",a)):(s(),document.addEventListener("scroll",s))},n.prototype.render=function(){var r=this,n=this.props.image,s=this.props.bgSize?this.props.bgSize:"cover",a=this.props.bgPos?this.props.bgPos:"center",o=this.props.repeat?this.props.repeat:"repeat-y",i={backgroundColor:this.props.backgroundColor,backgroundImage:"url("+n+")",backgroundRepeat:o,backgroundSize:s,backgroundPositionX:a},l=e.__assign(e.__assign({},i),this.props.style);return t.createElement("div",{ref:function(e){return r.node=e},style:l,className:this.props.className},this.props.children)},n}(t.Component),D=t.memo((function(e){var r=e.children,s=e.speed,a=void 0===s?4:s,o=e.className,i=e.useOpacity,l=t.useState(0),c=l[0],m=l[1],u=t.useRef(null),d=n.useViewportScroll().scrollY,p=n.useTransform(d,[c,c+a],[0,1],{clamp:!1}),h=n.useTransform(d,[500*c,500*(c+a)],[1,0],{clamp:!0});return t.useLayoutEffect((function(){var e=u.current;m(null==e?void 0:e.offsetTop)}),[u]),t.createElement(n.motion.div,{className:o,ref:u,style:{y:p,opacity:i?h:void 0}},r)})),M=function(r){function n(e){var n=r.call(this,e)||this;n.prevItem=t.createRef(),n.currentItem=t.createRef(),n.nextItem=t.createRef();var s=n.props||{},a=s.classPrefix,o=void 0===a?"lightbox":a,i=s.transitionDuration,l=void 0===i?500:i,c=s.showCloseButton,m=void 0===c||c,u=s.closeOnClickOutside,d=void 0===u||u,p=s.iconClose,h=void 0===p?"x":p,f=s.showArrows,v=void 0===f||f,g=s.arrowNext,x=void 0===g?">":g,b=s.arrowPrevious,E=void 0===b?"<":b,y=s.keyboardNavigation,N=void 0===y||y,w=s.touchNavigation,_=void 0===w||w,C=s.touchThreshold,k=void 0===C?100:C;return n.transitionDuration=l,n.classPrefix=o,n.showCloseButton=m,n.closeOnClickOutside=d,n.showArrows=v,n.iconClose=h,n.arrowNext=x,n.arrowPrevious=E,n.keyboardNavigation=N,n.touchNavigation=_,n.touchThreshold=k,n.mouseEvents={clientX:0,offset:0,isDown:!1},n.items=e.items,n.state={isOpen:!1,transitioning:!1,prevUrl:"",currentUrl:"",nextUrl:""},n.cIndex=0,n.isInTransition=!1,n.handleOpen=n.handleOpen.bind(n),n.handleClose=n.handleClose.bind(n),n.handleHideOnClickOutside=n.handleHideOnClickOutside.bind(n),n.setSrc=n.setSrc.bind(n),n.next=n.next.bind(n),n.previous=n.previous.bind(n),n.onKeyPress=n.onKeyPress.bind(n),n.onMouseDown=n.onMouseDown.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.onTouchStart=n.onTouchStart.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.onRelease=n.onRelease.bind(n),n}return e.__extends(n,r),n.prototype.componentWillUnmount=function(){document.removeEventListener("keydown",this.onKeyPress)},n.prototype.handleOpen=function(t){this.keyboardNavigation&&document.addEventListener("keydown",this.onKeyPress),this.cIndex=t,this.setState((function(t){return e.__assign(e.__assign({},t),{isOpen:!0})})),this.setSrc(),document.body.style.overflow="hidden"},n.prototype.handleClose=function(){document.removeEventListener("keydown",this.onKeyPress),this.setState((function(t){return e.__assign(e.__assign({},t),{isOpen:!1,transitioning:!1})})),document.body.style.overflow=""},n.prototype.handleHideOnClickOutside=function(e){this.closeOnClickOutside&&e.target===this.currentItem.current&&this.handleClose()},n.prototype.next=function(){this.setState((function(t){return e.__assign(e.__assign({},t),{transitioning:!0})})),this.currentItem.current&&(this.currentItem.current.style.transition=this.transitionDuration+"ms ease-in-out",this.currentItem.current.style.transform="translateX(-200%)"),this.nextItem.current&&(this.nextItem.current.style.transition=this.transitionDuration+"ms ease-in-out",this.nextItem.current.style.transform="translateX(-200%)"),this.cIndex=(this.cIndex+1)%this.items.length,setTimeout(this.setSrc,this.transitionDuration)},n.prototype.previous=function(){this.setState((function(t){return e.__assign(e.__assign({},t),{transitioning:!0})})),this.prevItem.current&&(this.prevItem.current.style.transition=this.transitionDuration+"ms ease-in-out",this.prevItem.current.style.transform="translateX(0)"),this.currentItem.current&&(this.currentItem.current.style.transition=this.transitionDuration+"ms ease-in-out",this.currentItem.current.style.transform="translateX(200%)"),this.cIndex=(this.cIndex+this.items.length-1)%this.items.length,setTimeout(this.setSrc,this.transitionDuration)},n.prototype.setSrc=function(){var t=this;this.setState((function(r){return e.__assign(e.__assign({},r),{transitioning:!1,prevUrl:t.items[(t.cIndex+t.items.length-1)%t.items.length].url,currentUrl:t.items[t.cIndex].url,nextUrl:t.items[(t.cIndex+1)%t.items.length].url})})),this.prevItem.current&&(this.prevItem.current.style.transition="",this.prevItem.current.style.transform="translateX(-100%)"),this.currentItem.current&&(this.currentItem.current.style.transition="",this.currentItem.current.style.transform="translateX(-100%)"),this.nextItem.current&&(this.nextItem.current.style.transition="",this.nextItem.current.style.transform="translateX(-100%)")},n.prototype.onKeyPress=function(e){if("Escape"===e.key&&this.handleClose(),"ArrowRight"===e.key){if(this.state.transitioning)return;this.next()}if("ArrowLeft"===e.key){if(this.state.transitioning)return;this.previous()}},n.prototype.onMouseDown=function(e){this.touchNavigation&&(e.preventDefault(),this.mouseEvents.clientX=e.clientX-this.mouseEvents.offset,this.mouseEvents.isDown=!0)},n.prototype.onMouseMove=function(e){if(this.touchNavigation&&(e.preventDefault(),this.mouseEvents.isDown)){var t=e.clientX-this.mouseEvents.clientX;this.currentItem.current&&(this.currentItem.current.style.left=t+"px"),this.mouseEvents.offset=t}},n.prototype.onTouchStart=function(e){this.touchNavigation&&(this.mouseEvents.clientX=e.touches[0].clientX-this.mouseEvents.offset)},n.prototype.onTouchMove=function(e){if(this.touchNavigation)for(var t=0,r=e.changedTouches.length;t<r;t++){var n=e.changedTouches[t].pageX-this.mouseEvents.clientX;this.currentItem.current&&(this.currentItem.current.style.left=n+"px"),this.mouseEvents.offset=n}},n.prototype.onRelease=function(){this.touchNavigation&&(this.mouseEvents.offset<=-this.touchThreshold?(this.next(),this.mouseEvents.offset=0,this.mouseEvents.isDown=!1):this.mouseEvents.offset>=this.touchThreshold&&(this.previous(),this.mouseEvents.offset=0,this.mouseEvents.isDown=!1),this.mouseEvents.offset=0,this.currentItem.current&&(this.currentItem.current.style.left="0"),this.mouseEvents.isDown=!1)},n.prototype.render=function(){var e=this;return t.createElement(t.Fragment,null,this.props.children&&this.props.items.map((function(t,r){return e.props.children&&e.props.children({item:t,handleOpen:e.handleOpen,index:r})})),this.props.allChildren&&this.props.allChildren({items:this.props.items,handleOpen:this.handleOpen}),this.state.isOpen&&t.createElement(N,{className:"lightbox__wrapper",onClick:this.handleHideOnClickOutside},t.createElement("div",{className:"lightbox__container"},t.createElement("div",{ref:this.prevItem,className:"lightbox__image-container",style:{transform:"translateX(-100%)"}},t.createElement("img",{className:"lightbox__image",src:this.state.prevUrl,alt:""})),t.createElement("div",{ref:this.currentItem,className:"lightbox__image-container",style:{transform:"translateX(-100%)"}},t.createElement("img",{className:"lightbox__image",src:this.state.currentUrl,alt:"",onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onRelease,onMouseLeave:this.onRelease,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onRelease})),t.createElement("div",{ref:this.nextItem,className:"lightbox__image-container",style:{transform:"translateX(-100%)"}},t.createElement("img",{className:"lightbox__image",src:this.state.nextUrl,alt:""}))),this.showArrows&&t.createElement(t.Fragment,null,t.createElement("button",{disabled:this.state.transitioning,className:"lightbox__button lightbox__button--prev",onClick:this.previous},this.arrowPrevious),t.createElement("button",{disabled:this.state.transitioning,className:"lightbox__button lightbox__button--next",onClick:this.next},this.arrowNext)),this.showCloseButton&&t.createElement("button",{className:"lightbox__button lightbox__button--close",onClick:this.handleClose},this.iconClose)))},n}(t.PureComponent),P=t.memo((function(e){var r=e.items,a=e.className,o=e.isMobile,l=e.inView,c=e.renderedItem;return t.createElement(n.motion.div,{className:"text--center px--xl"+s(a),variants:R,initial:"init",animate:l?"in":"out"},t.createElement("div",{className:"timeline relative py--lg"},t.createElement(n.motion.div,{className:"timeline__line absolute left--0 md:absolute-x--center top--0 h--100 bg--text",variants:T}),r.map((function(e,r){return t.createElement(n.motion.div,{key:e.order,className:"timeline__item relative my--lg md:w--50 "+(o?"text--left ml--auto pl--xl":r%2==0?"text--right pr--xl":"text--left ml--auto pl--xl"),variants:O},c?c(e):t.createElement("div",{className:"p--lg border border--border round"},e.from&&e.to&&t.createElement("small",{className:"text--textDimmed"},"From ",i(e.from)," till ",e.isCurrent?e.to:i(e.to)),e.title&&t.createElement("h3",{className:"h4 my--xs font--bold"},e.title),e.desc&&t.createElement("p",{className:"m--0 text--textDimmed"},e.desc)))}))))}));P.defaultProps={inView:!0,isMobile:!1};var R={init:{opacity:0},in:{opacity:1,transition:{staggerChildren:.1}},out:{opacity:0}},T={in:{height:"100%",opacity:1,transition:{type:"spring",mass:.5}},out:{height:0,opacity:0}},O={in:{opacity:1,y:0,transition:{type:"spring",mass:.5}},out:{opacity:0,y:100}};exports.Button=d,exports.CSSParallax=S,exports.CheckboxGroup=b,exports.CircleProgressBar=I,exports.Column=_,exports.Counter=k,exports.FlexRow=w,exports.Icon=E,exports.Input=h,exports.InputWrapper=p,exports.Lightbox=M,exports.Loader=y,exports.MenuToggle=C,exports.Modal=function(e){var r=e.children,n=e.wrapperClassName,s=e.modalClassName,o=e.triggerClassName,i=e.trigger,l=n||"",c=a("modal absolute-x--center p--md mt--xxl w--50 bg--bg",s),m=a("modal-trigger",o),u=t.useState(!1),d=u[0],p=u[1];var h=d?t.createElement(N,{className:l,onClick:function(e){var t=document.getElementsByClassName("modal-wrapper")[0];e.target===t&&(p(!1),document.body.style.overflow="")}},t.createElement("div",{className:c},r({show:d,setShow:p}))):null;return t.createElement(t.Fragment,null,t.createElement("div",{onClick:function(){p(!0),document.body.style.overflow="hidden"},className:m},i({show:d,setShow:p})),h)},exports.ParallaxContainer=D,exports.PasswordInput=v,exports.Portal=N,exports.Select=g,exports.Switch=x,exports.Textarea=f,exports.Timeline=P,exports.convertDate=i,exports.createColumns=u,exports.createLabel=o,exports.createSpacers=c,exports.joinIgnoreEmpty=a,exports.joinStr=s,exports.useCheckForScreens=function(){var e=t.useState(!1),r=e[0],n=e[1],s=t.useState(""),a=s[0],o=s[1];function i(){var e=document.documentElement.clientWidth;e<480?(n(!0),o("phone")):e<=860?(n(!0),o("tablet")):e<992?(n(!1),o("laptop")):e>=1200&&(n(!1),o("desktop"))}return t.useEffect((function(){return i(),window.addEventListener("resize",i),function(){i(),window.removeEventListener("resize",i)}})),[r,a]},exports.useInterval=l,exports.useThemeChanger=function(){var e=t.useState(""),r=e[0],n=e[1];return t.useEffect((function(){var e=localStorage.getItem("currentTheme");e||(e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),n(e)}),[]),[r,n]};
