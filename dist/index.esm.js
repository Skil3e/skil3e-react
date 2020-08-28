import{__rest as e,__assign as t,__extends as a}from"tslib";import{forwardRef as r,createElement as l,useState as s,Fragment as o,Component as i}from"react";import{createPortal as n}from"react-dom";var c=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},d=function(e,t){void 0===t&&(t="-");var a=e.split(t).join(" ");return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()};function p(e,t){var a="";return e&&t&&("string"==typeof e?a+=t+"--"+e:(a+=e.top?" "+t+"t--"+e.top:"",a+=e.bottom?" "+t+"b--"+e.bottom:"",a+=e.left?" "+t+"l--"+e.left:"",a+=e.right?" "+t+"r--"+e.right:"",a+=e.x?" "+t+"x--"+e.x:"",a+=e.y?" "+t+"y--"+e.y:"",a+=m(e,"sm",t),a+=m(e,"md",t),a+=m(e,"lg",t),a+=m(e,"xl",t))),a}function m(e,t,a){var r="";return r+=e[t]&&"string"==typeof e[t]&&e[t]?" "+t+"__"+a+"--"+e[t]:"",r+=e[t]&&e[t].top?" "+t+"__"+a+"t--"+e[t].top:"",r+=e[t]&&e[t].bottom?" "+t+"__"+a+"b--"+e[t].bottom:"",r+=e[t]&&e[t].left?" "+t+"__"+a+"l--"+e[t].left:"",r+=e[t]&&e[t].right?" "+t+"__"+a+"r--"+e[t].right:"",r+=e[t]&&e[t].x?" "+t+"__"+a+"x--"+e[t].x:"",r+=e[t]&&e[t].y?" "+t+"__"+a+"y--"+e[t].y:""}var u=r((function(a,r){var s=a.look,o=a.intent,i=a.size,n=a.fullwidth,d=a.margin,m=e(a,["look","intent","size","fullwidth","margin"]),u=c("button",s,o,i,n&&"w--100",a.className,p(d,"m"));return l("button",t({},m,{ref:r,className:u}))}));u.defaultProps={look:"fill",intent:"accent"};var h=r((function(a,r){var s=a.label,o=a.errors,i=a.name,n=a.children,d=a.inputID,p=e(a,["label","errors","name","children","inputID"]),m=c("input-wrapper",a.className);return l("div",t({},p,{ref:r,className:m}),s&&l("label",{className:"flex small px--sm mb--xs",htmlFor:d},s),n,o&&i&&o[i]&&l("span",{className:"flex small px--sm text--danger mt--xs"},o[i].message))})),f=r((function(a,r){var s=a.type,o=a.id,i=a.label,n=a.errors,c=a.className,p=a.wrapperClassName,m=e(a,["type","id","label","errors","className","wrapperClassName"]);return l(h,{className:p,inputID:o,name:a.name,label:i||(o?d(o):void 0),errors:n},l("input",t({},m,{ref:r,className:c,type:s,id:o})))}));f.defaultProps={type:"text"};var v=r((function(a,r){var s=a.id,o=a.label,i=a.errors,n=a.className,c=a.wrapperClassName,p=e(a,["id","label","errors","className","wrapperClassName"]);return l(h,{className:c,inputID:s,name:a.name,label:o||(s?d(s):void 0),errors:i},l("textarea",t({},p,{ref:r,className:n,id:s})))})),g=r((function(a,r){a.type;var o=a.id,i=a.label,n=a.errors,c=a.className,p=a.wrapperClassName,m=a.customShowHide,u=a.toggleShowClassname,f=e(a,["type","id","label","errors","className","wrapperClassName","customShowHide","toggleShowClassname"]),v=s(!1),g=v[0],y=v[1];return l(h,{className:p,inputID:o,name:a.name,label:i||(o?d(o):void 0),errors:n},l("div",{className:"flex--center relative"},l("input",t({style:{paddingRight:60}},f,{ref:r,className:"password-input"+(c?" "+c:""),type:g?"text":"password",id:o})),l("div",{style:{width:60},className:"absolute-y--center right--0 flex--center-middle cursor--pointer "+(m?"":"h--100")+(u?" "+u:""),onClick:function(){return y(!g)}},m?m(g):g?"Hide":"Show")))})),y=r((function(a,r){var s=a.id,o=a.label,i=a.errors,n=(a.className,a.wrapperClassName),c=a.options,p=e(a,["id","label","errors","className","wrapperClassName","options"]);return l(h,{className:n,inputID:s,name:a.name,label:o||(s?d(s):void 0),errors:i},l("select",t({},p,{ref:r,id:s}),c.map((function(e){return l("option",{key:e.value,value:e.value},e.label?e.label:e.value)}))))})),b=r((function(a,r){var s=a.id,o=a.title,i=a.intent,n=a.onChange,d=a.checked,p=a.emoji,m=a.className,u=a.label,h=a.switchSize,f=e(a,["id","title","intent","onChange","checked","emoji","className","label","switchSize"]),v=c("switch flex--center",i,h,m);return l("div",{className:v,title:o},l("input",t({ref:r},f,{className:"switch__checkbox",id:s,type:"checkbox",onChange:n,checked:d})),l("label",{className:"switch__label "+h,htmlFor:s},l("span",{className:"switch__button flex--center-middle cursor--pointer"},p)),u&&l("label",{className:"block ml--sm text--textDimmed",htmlFor:s},u))}));b.defaultProps={intent:"accent",switchSize:"md"};var N=r((function(a,r){var s=a.icon,o=a.size,i=void 0===o?"sm":o,n=a.title,d=a.fill,p=void 0===d?"text":d,m=e(a,["icon","size","title","fill"]),u=c("icon inline-flex al__it--center","icon-"+s.id,p?"fill--"+p:"",a.className);return l("svg",t({},m,{ref:r,className:u,xmlns:"http://www.w3.org/2000/svg",height:"xs"===i?20:"sm"===i?24:"md"===i?32:"lg"===i?64:"xl"===i?100:i,viewBox:s.viewBox,"aria-labelledby":n}),n&&l("title",{id:n},n),s.content&&s.content.map((function(e,t){return l("path",{key:t,fill:e.fill,d:e.path})})),s.path&&l("path",{d:s.path}))})),w=function(e){var t=e.type,a=e.intent,r=e.dur,s=e.size,i=e.className,n=e.stroke,d=e.container,p=e.containerClassName,m=function(e){var t=e.type,a=void 0===t?"XML":t,r=e.atr,s=e.val,o=e.delay,i=e.repeat;return l("animate",{attributeType:a,attributeName:r,values:s,dur:h,repeatCount:void 0===i?"indefinite":i,begin:o})},u=c(" ","loader",t,i,"fill--"+a,n?"stroke--"+a:""),h=r+"ms",f=c(" ",d?"loader-container flex--center-middle py-5":"loader-container inline-flex",p||""),v="";return"xs"===s?v="20":"sm"===s?v="40":"md"===s?v="60":"lg"===s?v="80":"xl"===s&&(v="100"),l("div",{className:f},l("svg",{className:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 14",width:v},"cycle"===t?l(o,null,l("circle",{cx:"8",cy:"7",r:"5"},l(m,{atr:"r",val:"0;5;"})),l("circle",{cx:"8",cy:"7",r:"5"},l(m,{atr:"cx",val:"8;25;"})),l("circle",{cx:"25",cy:"7",r:"5"},l(m,{atr:"cx",val:"25;42;"})),l("circle",{cx:"42",cy:"7",r:"5"},l(m,{atr:"r",val:"5;0;"}))):"","pulse"===t?l(o,null,l("circle",{cx:"8",cy:"7",r:"5"},l(m,{atr:"r",val:"5;2;2;5"}),l(m,{atr:"fill-opacity",val:"1;.5;.5;1"})),l("circle",{cx:"25",cy:"7",r:"5"},l(m,{atr:"r",val:"5;2;2;5",delay:r/4+"ms"}),l(m,{atr:"fill-opacity",val:"1;.5;.5;1",delay:r/4+"ms"})),l("circle",{cx:"42",cy:"7",r:"5"},l(m,{atr:"r",val:"5;2;2;5",delay:r/2+"ms"}),l(m,{atr:"fill-opacity",val:"1;.5;.5;1",delay:r/2+"ms"}))):"","flash"===t?l(o,null,l("rect",{x:"3",y:"2",width:"10",height:"10"},l(m,{atr:"fill-opacity",val:"1;.2;.2"})),l("rect",{x:"20",y:"2",width:"10",height:"10"},l(m,{atr:"fill-opacity",val:"1;.2;.2",delay:r/4+"ms"})),l("rect",{x:"37",y:"2",width:"10",height:"10"},l(m,{atr:"fill-opacity",val:"1;.2;.2",delay:r/2+"ms"}))):""))};w.defaultProps={type:"cycle",intent:"accent",dur:500,size:"sm",stroke:!1,container:!0};var x=function(e){function t(t){var a=e.call(this,t)||this;return a.modalRoot=document.body,a.modalWrapper=document.createElement("div"),a.modalWrapper.classList.add("modal-wrapper","fixed","left--0","top--0","w--100","h--100","z--9"),a.modalWrapper.style.backgroundColor="rgba(0,0,0,.85)",a.modalWrapper.style.overflow="auto",a.props.className&&a.modalWrapper.classList.add(a.props.className),a.modalWrapper.onclick=a.props.onClick,a}return a(t,e),t.prototype.componentDidMount=function(){this.modalRoot.appendChild(this.modalWrapper)},t.prototype.componentWillUnmount=function(){this.modalRoot.removeChild(this.modalWrapper)},t.prototype.render=function(){return n(this.props.children,this.modalWrapper)},t}(i),C=function(e){function t(t){var a=e.call(this,t)||this;return a.state={showModal:!1},a.handleShow=a.handleShow.bind(a),a.handleHide=a.handleHide.bind(a),a.handleHideOnClickOutside=a.handleHideOnClickOutside.bind(a),a}return a(t,e),t.prototype.handleShow=function(){this.setState({showModal:!0}),document.body.style.overflow="hidden"},t.prototype.handleHide=function(){this.setState({showModal:!1}),document.body.style.overflow=""},t.prototype.handleHideOnClickOutside=function(e){var t=document.getElementsByClassName("modal-wrapper")[0];e.target===t&&(this.setState({showModal:!1}),document.body.style.overflow="")},t.prototype.render=function(){var e=this.props.wrapperClassName?" "+this.props.wrapperClassName:"",t="modal absolute-x--center p--md mt--xxl w--50 bg--bg"+(this.props.modalClassName?" "+this.props.modalClassName:""),a="modal-trigger"+(this.props.triggerClassName?" "+this.props.triggerClassName:""),r=this.state.showModal?l(x,{className:e,onClick:this.handleHideOnClickOutside},l("div",{className:t},this.props.children)):null;return l(o,null,l("div",{onClick:this.handleShow,className:"inline-flex al__it--center"+(a||"")},this.props.trigger),r)},t}(i),_=r((function(a,r){var s=a.margin,o=a.padding,i=a.className,n=e(a,["margin","padding","className"]),d=c("flex--wrap",i,p(s,"m"),p(o,"p"));return l("div",t({},n,{ref:r,className:d}))}));_.defaultProps={};var k=r((function(a,r){var s=a.margin,o=a.padding,i=a.size,n=a.className,d=e(a,["margin","padding","size","className"]),m=c("",n,!i&&"col",p(s,"m"),p(o,"p"),function(e){var t="";return e&&("number"==typeof e?t+="col--"+e:(t+=e.sm?" sm__col--"+e.sm:"",t+=e.md?" md__col--"+e.md:"",t+=e.lg?" md__col--"+e.lg:"",t+=e.xl?" xl__col--"+e.xl:"")),t}(i));return l("div",t({},d,{ref:r,className:m}))})),S=r((function(e,a){var r=e.isOpen,s=void 0!==r&&r,o=e.intent,i=void 0===o?"accent":o,n=c("menu-toggle",e.className,s?" menu-toggle--open":"");return l("div",t({},e,{ref:a,className:n}),l("div",{className:"menu-toggle__dot bg--"+i}),l("div",{className:"menu-toggle__dot bg--"+i}),l("div",{className:"menu-toggle__dot bg--"+i}))})),z=function(e){function r(t){return e.call(this,t)||this}return a(r,e),r.prototype.componentDidMount=function(){var e=document.documentElement.clientWidth,t=this.node,a=this.props.speed?this.props.speed:3,r=this.props.offset?this.props.offset:0;function l(){var e=t.getBoundingClientRect().bottom-window.innerWidth-r;t.style.backgroundPositionY=Math.round(e/a)+"px"}function s(){var e=t.getBoundingClientRect().bottom-window.innerWidth+r;t.style.backgroundPositionY=-Math.round(e/a)+"px"}e<992?t.style.backgroundPositionY="center":this.props.reverseDirection?(s(),document.addEventListener("scroll",s)):(l(),document.addEventListener("scroll",l))},r.prototype.render=function(){var e=this,a=this.props.image,r=this.props.bgSize?this.props.bgSize:"cover",s=this.props.bgPos?this.props.bgPos:"center",o=this.props.repeat?this.props.repeat:"repeat-y",i={backgroundColor:this.props.backgroundColor,backgroundImage:"url("+a+")",backgroundRepeat:o,backgroundSize:r,backgroundPositionX:s},n=t(t({},i),this.props.style);return l("div",{ref:function(t){return e.node=t},style:n,className:this.props.className},this.props.children)},r}(i);export{u as Button,z as CSSParallax,k as Column,_ as FlexRow,N as Icon,f as Input,h as InputWrapper,w as Loader,S as MenuToggle,C as Modal,g as PasswordInput,y as Select,b as Switch,v as Textarea};
