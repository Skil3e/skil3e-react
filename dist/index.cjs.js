"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),a=require("react-dom"),r=require("framer-motion");function l(e){return e?" "+e:""}var n=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},s=function(e,t){void 0===t&&(t="-");var a=e.split(t).join(" ");return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()};function o(e){var t=new Date(e);return t.toLocaleString("default",{month:"short"})+" "+t.getFullYear()}function i(e,a){var r=t.useRef((function(){}));t.useEffect((function(){r.current=e}),[e]),t.useEffect((function(){if(null!==a){var e=setInterval((function(){r.current()}),a);return function(){return clearInterval(e)}}}),[a])}function c(e,t){var a="";return e&&t&&("string"==typeof e?a+=t+"--"+e:(a+=e.top?" "+t+"t--"+e.top:"",a+=e.bottom?" "+t+"b--"+e.bottom:"",a+=e.left?" "+t+"l--"+e.left:"",a+=e.right?" "+t+"r--"+e.right:"",a+=e.x?" "+t+"x--"+e.x:"",a+=e.y?" "+t+"y--"+e.y:"",a+=m(e,"sm",t),a+=m(e,"md",t),a+=m(e,"lg",t),a+=m(e,"xl",t))),a}function m(e,t,a){var r="";return r+=e[t]&&"string"==typeof e[t]&&e[t]?" "+t+"__"+a+"--"+e[t]:"",r+=e[t]&&e[t].top?" "+t+"__"+a+"t--"+e[t].top:"",r+=e[t]&&e[t].bottom?" "+t+"__"+a+"b--"+e[t].bottom:"",r+=e[t]&&e[t].left?" "+t+"__"+a+"l--"+e[t].left:"",r+=e[t]&&e[t].right?" "+t+"__"+a+"r--"+e[t].right:"",r+=e[t]&&e[t].x?" "+t+"__"+a+"x--"+e[t].x:"",r+=e[t]&&e[t].y?" "+t+"__"+a+"y--"+e[t].y:""}function p(e){var t="";return e&&("number"==typeof e?t+="col--"+e:(t+=e.sm?" sm__col--"+e.sm:"",t+=e.md?" md__col--"+e.md:"",t+=e.lg?" md__col--"+e.lg:"",t+=e.xl?" xl__col--"+e.xl:"")),t}var d=t.forwardRef((function(a,r){var l=a.look,s=a.intent,o=a.size,i=a.fullwidth,m=a.margin,p=e.__rest(a,["look","intent","size","fullwidth","margin"]),d=n("button",l,s,o,i&&"w--100",a.className,c(m,"m"));return t.createElement("button",e.__assign({},p,{ref:r,className:d}))}));d.defaultProps={look:"fill",intent:"accent"};var u=t.forwardRef((function(a,r){var l=a.label,s=a.errors,o=a.customErrors,i=a.name,c=a.children,m=a.inputID,p=a.labelClassName,d=a.className,u=e.__rest(a,["label","errors","customErrors","name","children","inputID","labelClassName","className"]),f=n("input-wrapper",d),v=n("flex small px--sm mb--xs",p);return t.createElement("div",e.__assign({},u,{ref:r,className:f}),l&&t.createElement("label",{className:v,htmlFor:m},l),c,!o&&s&&i&&s[i]&&t.createElement("span",{className:"flex small px--sm text--danger mt--xs"},s[i].message),o&&t.createElement("span",{className:"flex small px--sm text--danger mt--xs"},o))})),f=t.forwardRef((function(a,r){var l=a.type,n=a.id,o=a.label,i=a.errors,c=a.customErrors,m=a.className,p=a.wrapperClassName,d=a.labelClassName,f=a.name,v=e.__rest(a,["type","id","label","errors","customErrors","className","wrapperClassName","labelClassName","name"]);return t.createElement(u,{className:p,inputID:n,name:f,label:o||(n?s(n):void 0),errors:i,customErrors:c,labelClassName:d},t.createElement("input",e.__assign({},v,{ref:r,className:m,type:l,id:n,name:f})))}));f.defaultProps={type:"text"};var v=t.forwardRef((function(a,r){var l=a.id,n=a.label,o=a.errors,i=a.customErrors,c=a.className,m=a.wrapperClassName,p=a.labelClassName,d=a.name,f=e.__rest(a,["id","label","errors","customErrors","className","wrapperClassName","labelClassName","name"]);return t.createElement(u,{className:m,inputID:l,name:d,label:n||(l?s(l):void 0),errors:o,customErrors:i,labelClassName:p},t.createElement("textarea",e.__assign({},f,{name:d,ref:r,className:c,id:l})))})),g=t.forwardRef((function(a,r){a.type;var l=a.id,n=a.name,o=a.label,i=a.errors,c=a.customErrors,m=a.className,p=a.wrapperClassName,d=a.customShowHide,f=a.toggleShowClassname,v=a.labelClassName,g=e.__rest(a,["type","id","name","label","errors","customErrors","className","wrapperClassName","customShowHide","toggleShowClassname","labelClassName"]),h=t.useState(!1),x=h[0],E=h[1];return t.createElement(u,{className:p,inputID:l,name:n,label:o||(l?s(l):void 0),errors:i,customErrors:c,labelClassName:v},t.createElement("div",{className:"flex--center relative"},t.createElement("input",e.__assign({name:n,style:{paddingRight:60}},g,{ref:r,className:"password-input"+(m?" "+m:""),type:x?"text":"password",id:l})),t.createElement("div",{style:{width:60},className:"absolute-y--center right--0 flex--center-middle cursor--pointer "+(d?"":"h--100")+(f?" "+f:""),onClick:function(){return E(!x)}},d?d(x):x?"Hide":"Show")))})),h=t.forwardRef((function(a,r){var l=a.id,n=a.label,o=a.errors,i=a.customErrors,c=(a.className,a.wrapperClassName),m=a.options,p=a.labelClassName,d=a.name,f=e.__rest(a,["id","label","errors","customErrors","className","wrapperClassName","options","labelClassName","name"]);return t.createElement(u,{className:c,inputID:l,name:d,label:n||(l?s(l):void 0),errors:o,customErrors:i,labelClassName:p},t.createElement("select",e.__assign({},f,{ref:r,id:l,name:d}),m.map((function(e){return t.createElement("option",{key:e.value,value:e.value},e.label?e.label:e.value)}))))})),x=t.forwardRef((function(a,r){var l=a.id,s=a.title,o=a.intent,i=a.onChange,c=a.checked,m=a.emoji,p=a.className,d=a.label,u=a.switchSize,f=a.name,v=e.__rest(a,["id","title","intent","onChange","checked","emoji","className","label","switchSize","name"]),g=n("switch flex--center",o,u,p);return t.createElement("div",{className:g,title:s},t.createElement("input",e.__assign({},v,{ref:r,className:"switch__checkbox",id:l,name:f,type:"checkbox",onChange:i,checked:c})),t.createElement("label",{className:"switch__label "+u,htmlFor:l},t.createElement("span",{className:"switch__button flex--center-middle cursor--pointer"},m)),d&&t.createElement("label",{className:"block ml--sm text--textDimmed",htmlFor:l},d))}));x.defaultProps={intent:"accent",switchSize:"md"};var E=t.forwardRef((function(a,r){var l=a.id,o=a.label,i=a.errors,c=a.customErrors,m=a.wrapperClassName,p=a.labelClassName,d=a.values,f=a.intent,v=a.name,g=a.className,h=a.badgeClassName,x=a.badgeSize,E=e.__rest(a,["id","label","errors","customErrors","wrapperClassName","labelClassName","values","intent","name","className","badgeClassName","badgeSize"]);return t.createElement(u,{className:n("check-badge-wrapper",m),inputID:l,name:v,label:o||(l?s(l):void 0),errors:i,customErrors:c,labelClassName:p},t.createElement("div",{className:"flex--center"},d.map((function(a,l){return t.createElement("div",{key:a.id,className:"inline-flex al__it--center check-badge "+f},t.createElement("input",e.__assign({className:n("checkbox w--auto mr--sm",g),hidden:!0,ref:r,type:"checkbox",name:v,id:a.id,value:a.value},E)),t.createElement("label",{className:n("badge-label",h,x,l>0?" ml--sm":""),htmlFor:a.id},s(a.id)))}))))}));E.defaultProps={intent:"accent"};var b=t.forwardRef((function(a,r){var l,s=a.icon,o=a.size,i=void 0===o?"sm":o,c=a.title,m=a.fill,p=void 0===m?"text":m,d=e.__rest(a,["icon","size","title","fill"]),u=n("icon inline-flex al__it--center","icon-"+s.id,p?"fill--"+p:"",a.className);return l="xs"===i?20:"sm"===i?24:"md"===i?32:"lg"===i?64:"xl"===i?100:i,t.createElement("svg",e.__assign({},d,{ref:r,className:u,xmlns:"http://www.w3.org/2000/svg",height:l,viewBox:s.viewBox,"aria-labelledby":c}),c&&t.createElement("title",{id:c},c),s.content&&s.content.map((function(e,a){return t.createElement("path",{key:a,fill:e.fill,d:e.path})})),s.path&&t.createElement("path",{d:s.path}))})),N=function(e){var a=e.type,r=e.intent,l=e.dur,s=e.size,o=e.className,i=e.stroke,c=e.container,m=e.containerClassName,p=function(e){var a=e.type,r=void 0===a?"XML":a,l=e.atr,n=e.val,s=e.delay,o=e.repeat,i=void 0===o?"indefinite":o;return t.createElement("animate",{attributeType:r,attributeName:l,values:n,dur:u,repeatCount:i,begin:s})},d=n(" ","loader",a,o,"fill--"+r,i?"stroke--"+r:""),u=l+"ms",f=n(" ",c?"loader-container flex--center-middle py-5":"loader-container inline-flex",m||""),v="";return"xs"===s?v="20":"sm"===s?v="40":"md"===s?v="60":"lg"===s?v="80":"xl"===s&&(v="100"),t.createElement("div",{className:f},t.createElement("svg",{className:d,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 14",width:v},"cycle"===a?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"0;5;"})),t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"cx",val:"8;25;"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(p,{atr:"cx",val:"25;42;"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;0;"}))):"","pulse"===a?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5",delay:l/4+"ms"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1",delay:l/4+"ms"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5",delay:l/2+"ms"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1",delay:l/2+"ms"}))):"","flash"===a?t.createElement(t.Fragment,null,t.createElement("rect",{x:"3",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2"})),t.createElement("rect",{x:"20",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2",delay:l/4+"ms"})),t.createElement("rect",{x:"37",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2",delay:l/2+"ms"}))):""))};N.defaultProps={type:"cycle",intent:"accent",dur:500,size:"sm",stroke:!1,container:!0};var w=function(t){function r(e){var a=t.call(this,e)||this;return a.modalRoot=document.body,a.modalWrapper=document.createElement("div"),a.modalWrapper.classList.add("modal-wrapper","fixed","left--0","top--0","w--100","h--100","z--9"),a.modalWrapper.style.backgroundColor="rgba(0,0,0,.85)",a.modalWrapper.style.overflow="auto",a.props.className&&a.modalWrapper.classList.add(a.props.className),a.modalWrapper.onclick=a.props.onClick,a}return e.__extends(r,t),r.prototype.componentDidMount=function(){this.modalRoot.appendChild(this.modalWrapper)},r.prototype.componentWillUnmount=function(){this.modalRoot.removeChild(this.modalWrapper)},r.prototype.render=function(){return a.createPortal(this.props.children,this.modalWrapper)},r}(t.Component),_=t.forwardRef((function(a,r){var l=a.margin,s=a.padding,o=a.className,i=e.__rest(a,["margin","padding","className"]),m=n("flex--wrap",o,c(l,"m"),c(s,"p"));return t.createElement("div",e.__assign({},i,{ref:r,className:m}))}));_.defaultProps={};var y=t.forwardRef((function(a,r){var l=a.margin,s=a.padding,o=a.size,i=a.className,m=e.__rest(a,["margin","padding","size","className"]),d=n("",i,!o&&"col",c(l,"m"),c(s,"p"),p(o));return t.createElement("div",e.__assign({},m,{ref:r,className:d}))})),C=t.forwardRef((function(a,r){var l=a.isOpen,s=a.intent,o=void 0===s?"accent":s,i=e.__rest(a,["isOpen","intent"]),c=n("menu-toggle",a.className,l?" menu-toggle--open":"");return t.createElement("div",e.__assign({},i,{ref:r,className:c}),t.createElement("div",{className:"menu-toggle__dot bg--"+o}),t.createElement("div",{className:"menu-toggle__dot bg--"+o}),t.createElement("div",{className:"menu-toggle__dot bg--"+o}))})),k=t.memo((function(e){var a=e.inView,r=e.valueFrom,l=void 0===r?0:r,n=e.valueTo,s=void 0===n?100:n,o=e.totalDuration,c=void 0===o?1:o,m=e.className,p=t.useState(l),d=p[0],u=p[1];return i((function(){a&&d<s?u(d+1):a||u(0)}),c/s*1e3),t.createElement("div",{className:m},d,"%")})),S=t.memo((function(e){var a=e.percentage,n=e.showPercentage,s=e.title,o=e.counterClassName,i=e.width,c=e.inView,m=e.icon,p=e.color,d={init:{pathLength:0,opacity:0},in:{pathLength:a/100,opacity:1,transition:{type:"spring",mass:1,stiffness:40}},out:{pathLength:0,opacity:0,transition:{type:"spring",mass:1,stiffness:40}}};return t.createElement("div",{className:"flex--column al__it--center"},t.createElement("div",{className:"relative"},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,viewBox:"0 0 200 200",strokeWidth:20,strokeLinecap:"round"},t.createElement("path",{className:"bg",stroke:"var(--border)",d:"M41 149.5a77 77 0 1 1 117.93 0",fill:"none"}),t.createElement(r.motion.path,{d:"M41 149.5a77 77 0 1 1 117.93 0",stroke:p,fill:"none",variants:d,animate:c?"in":"out"})),t.createElement("div",{className:"absolute--center text--center w--100"},!m&&n&&t.createElement(k,{className:l(o),inView:c,valueTo:a}),!m&&s&&t.createElement("div",{className:"font--bold pt--md"},s),m&&m(i,a,s))),m&&s&&t.createElement("div",{style:{marginTop:-10},className:"font--bold"},s))}));S.defaultProps={showPercentage:!1,width:200,inView:!0,color:"var(--accent)"};var P=function(a){function r(e){return a.call(this,e)||this}return e.__extends(r,a),r.prototype.componentDidMount=function(){var e=document.documentElement.clientWidth,t=this.node,a=this.props.speed?this.props.speed:3,r=this.props.offset?this.props.offset:0;function l(){var e=t.getBoundingClientRect().bottom-window.innerWidth-r;t.style.backgroundPositionY=Math.round(e/a)+"px"}function n(){var e=t.getBoundingClientRect().bottom-window.innerWidth+r;t.style.backgroundPositionY=-Math.round(e/a)+"px"}e<992?t.style.backgroundPositionY="center":this.props.reverseDirection?(n(),document.addEventListener("scroll",n)):(l(),document.addEventListener("scroll",l))},r.prototype.render=function(){var a=this,r=this.props.image,l=this.props.bgSize?this.props.bgSize:"cover",n=this.props.bgPos?this.props.bgPos:"center",s=this.props.repeat?this.props.repeat:"repeat-y",o={backgroundColor:this.props.backgroundColor,backgroundImage:"url("+r+")",backgroundRepeat:s,backgroundSize:l,backgroundPositionX:n},i=e.__assign(e.__assign({},o),this.props.style);return t.createElement("div",{ref:function(e){return a.node=e},style:i,className:this.props.className},this.props.children)},r}(t.Component),R=t.memo((function(e){var a=e.children,l=e.speed,n=void 0===l?4:l,s=e.className,o=e.useOpacity,i=t.useState(0),c=i[0],m=i[1],p=t.useRef(null),d=r.useViewportScroll().scrollY,u=r.useTransform(d,[c,c+n],[0,1],{clamp:!1}),f=r.useTransform(d,[500*c,500*(c+n)],[1,0],{clamp:!0});return t.useLayoutEffect((function(){var e=p.current;m(null==e?void 0:e.offsetTop)}),[p]),t.createElement(r.motion.div,{className:s,ref:p,style:{y:u,opacity:o?f:void 0}},a)})),z=t.memo((function(e){var a=e.items,n=e.className,s=e.isMobile,i=e.inView,c=e.renderedItem;return t.createElement(r.motion.div,{className:"text--center px--xl"+l(n),variants:I,initial:"init",animate:i?"in":"out"},t.createElement("div",{className:"timeline relative py--lg"},t.createElement(r.motion.div,{className:"timeline__line absolute left--0 md__absolute-x--center top--0 h--100 bg--text",variants:D}),a.map((function(e,a){return t.createElement(r.motion.div,{key:e.order,className:"timeline__item relative my--lg md__w--50 "+(s?"text--left ml--auto pl--xl":a%2==0?"text--right pr--xl":"text--left ml--auto pl--xl"),variants:L},c?c(e):t.createElement("div",{className:"p--lg brd brd--border round"},e.from&&e.to&&t.createElement("small",{className:"text--textDimmed"},"From ",o(e.from)," till ",e.isCurrent?e.to:o(e.to)),e.title&&t.createElement("h3",{className:"h4 my--xs font--bold"},e.title),e.desc&&t.createElement("p",{className:"m--0 text--textDimmed"},e.desc)))}))))}));z.defaultProps={inView:!0,isMobile:!1};var I={init:{opacity:0},in:{opacity:1,transition:{staggerChildren:.1}},out:{opacity:0}},D={in:{height:"100%",opacity:1,transition:{type:"spring",mass:.5}},out:{height:0,opacity:0}},L={in:{opacity:1,y:0,transition:{type:"spring",mass:.5}},out:{opacity:0,y:100}};exports.Button=d,exports.CSSParallax=P,exports.CheckboxGroup=E,exports.CircleProgressBar=S,exports.Column=y,exports.Counter=k,exports.FlexRow=_,exports.Icon=b,exports.Input=f,exports.InputWrapper=u,exports.Loader=N,exports.MenuToggle=C,exports.Modal=function(e){var a=e.children,r=e.wrapperClassName,l=e.modalClassName,s=e.triggerClassName,o=e.trigger,i=r?" "+r:"",c=n("modal absolute-x--center p--md mt--xxl w--50 bg--bg",l),m=n("modal-trigger",s),p=t.useState(!1),d=p[0],u=p[1];var f=d?t.createElement(w,{className:i,onClick:function(e){var t=document.getElementsByClassName("modal-wrapper")[0];e.target===t&&(u(!1),document.body.style.overflow="")}},t.createElement("div",{className:c},a({show:d,setShow:u}))):null;return t.createElement(t.Fragment,null,t.createElement("div",{onClick:function(){u(!0),document.body.style.overflow="hidden"},className:m},o({show:d,setShow:u})),f)},exports.ParallaxContainer=R,exports.PasswordInput=g,exports.Select=h,exports.Switch=x,exports.Textarea=v,exports.Timeline=z,exports.convertDate=o,exports.createColumns=p,exports.createLabel=s,exports.createSpacers=c,exports.joinIgnoreEmpty=n,exports.joinStr=l,exports.useCheckForScreens=function(){var e=t.useState(!1),a=e[0],r=e[1],l=t.useState(""),n=l[0],s=l[1];function o(){var e=document.documentElement.clientWidth;e<480?(r(!0),s("phone")):e<=860?(r(!0),s("tablet")):e<992?(r(!1),s("laptop")):e>=1200&&(r(!1),s("desktop"))}return t.useEffect((function(){return o(),window.addEventListener("resize",o),function(){o(),window.removeEventListener("resize",o)}})),[a,n]},exports.useInterval=i,exports.useThemeChanger=function(){var e=t.useState(""),a=e[0],r=e[1];return t.useEffect((function(){var e=localStorage.getItem("currentTheme");e||(e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),r(e)}),[]),[a,r]};
