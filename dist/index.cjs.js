"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),r=require("react-dom"),a=require("framer-motion");function n(e){return e?" "+e:""}var l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},s=function(e,t){void 0===t&&(t="-");var r=e.split(t).join(" ");return r.charAt(0).toUpperCase()+r.substring(1).toLowerCase()};function o(e){var t=new Date(e);return t.toLocaleString("default",{month:"short"})+" "+t.getFullYear()}function i(e,r){var a=t.useRef((function(){}));t.useEffect((function(){a.current=e}),[e]),t.useEffect((function(){if(null!==r){var e=setInterval((function(){a.current()}),r);return function(){return clearInterval(e)}}}),[r])}function c(e,t){var r="";return e&&t&&("string"==typeof e?r+=t+"--"+e:(r+=e.top?" "+t+"t--"+e.top:"",r+=e.bottom?" "+t+"b--"+e.bottom:"",r+=e.left?" "+t+"l--"+e.left:"",r+=e.right?" "+t+"r--"+e.right:"",r+=e.x?" "+t+"x--"+e.x:"",r+=e.y?" "+t+"y--"+e.y:"",r+=m(e,"sm",t),r+=m(e,"md",t),r+=m(e,"lg",t),r+=m(e,"xl",t))),r}function m(e,t,r){var a="";return a+=e[t]&&"string"==typeof e[t]&&e[t]?" "+t+"__"+r+"--"+e[t]:"",a+=e[t]&&e[t].top?" "+t+"__"+r+"t--"+e[t].top:"",a+=e[t]&&e[t].bottom?" "+t+"__"+r+"b--"+e[t].bottom:"",a+=e[t]&&e[t].left?" "+t+"__"+r+"l--"+e[t].left:"",a+=e[t]&&e[t].right?" "+t+"__"+r+"r--"+e[t].right:"",a+=e[t]&&e[t].x?" "+t+"__"+r+"x--"+e[t].x:"",a+=e[t]&&e[t].y?" "+t+"__"+r+"y--"+e[t].y:""}var p=t.forwardRef((function(r,a){var n=r.look,s=r.intent,o=r.size,i=r.fullwidth,m=r.margin,p=e.__rest(r,["look","intent","size","fullwidth","margin"]),d=l("button",n,s,o,i&&"w--100",r.className,c(m,"m"));return t.createElement("button",e.__assign({},p,{ref:a,className:d}))}));p.defaultProps={look:"fill",intent:"accent"};var d=t.forwardRef((function(r,a){var n=r.label,s=r.errors,o=r.name,i=r.children,c=r.inputID,m=e.__rest(r,["label","errors","name","children","inputID"]),p=l("input-wrapper",r.className);return t.createElement("div",e.__assign({},m,{ref:a,className:p}),n&&t.createElement("label",{className:"flex small px--sm mb--xs",htmlFor:c},n),i,s&&o&&s[o]&&t.createElement("span",{className:"flex small px--sm text--danger mt--xs"},s[o].message))})),u=t.forwardRef((function(r,a){var n=r.type,l=r.id,o=r.label,i=r.errors,c=r.className,m=r.wrapperClassName,p=e.__rest(r,["type","id","label","errors","className","wrapperClassName"]);return t.createElement(d,{className:m,inputID:l,name:r.name,label:o||(l?s(l):void 0),errors:i},t.createElement("input",e.__assign({},p,{ref:a,className:c,type:n,id:l})))}));u.defaultProps={type:"text"};var f=t.forwardRef((function(r,a){var n=r.id,l=r.label,o=r.errors,i=r.className,c=r.wrapperClassName,m=e.__rest(r,["id","label","errors","className","wrapperClassName"]);return t.createElement(d,{className:c,inputID:n,name:r.name,label:l||(n?s(n):void 0),errors:o},t.createElement("textarea",e.__assign({},m,{ref:a,className:i,id:n})))})),g=t.forwardRef((function(r,a){r.type;var n=r.id,l=r.label,o=r.errors,i=r.className,c=r.wrapperClassName,m=r.customShowHide,p=r.toggleShowClassname,u=e.__rest(r,["type","id","label","errors","className","wrapperClassName","customShowHide","toggleShowClassname"]),f=t.useState(!1),g=f[0],v=f[1];return t.createElement(d,{className:c,inputID:n,name:r.name,label:l||(n?s(n):void 0),errors:o},t.createElement("div",{className:"flex--center relative"},t.createElement("input",e.__assign({style:{paddingRight:60}},u,{ref:a,className:"password-input"+(i?" "+i:""),type:g?"text":"password",id:n})),t.createElement("div",{style:{width:60},className:"absolute-y--center right--0 flex--center-middle cursor--pointer "+(m?"":"h--100")+(p?" "+p:""),onClick:function(){return v(!g)}},m?m(g):g?"Hide":"Show")))})),v=t.forwardRef((function(r,a){var n=r.id,l=r.label,o=r.errors,i=(r.className,r.wrapperClassName),c=r.options,m=e.__rest(r,["id","label","errors","className","wrapperClassName","options"]);return t.createElement(d,{className:i,inputID:n,name:r.name,label:l||(n?s(n):void 0),errors:o},t.createElement("select",e.__assign({},m,{ref:a,id:n}),c.map((function(e){return t.createElement("option",{key:e.value,value:e.value},e.label?e.label:e.value)}))))})),h=t.forwardRef((function(r,a){var n=r.id,s=r.title,o=r.intent,i=r.onChange,c=r.checked,m=r.emoji,p=r.className,d=r.label,u=r.switchSize,f=e.__rest(r,["id","title","intent","onChange","checked","emoji","className","label","switchSize"]),g=l("switch flex--center",o,u,p);return t.createElement("div",{className:g,title:s},t.createElement("input",e.__assign({ref:a},f,{className:"switch__checkbox",id:n,type:"checkbox",onChange:i,checked:c})),t.createElement("label",{className:"switch__label "+u,htmlFor:n},t.createElement("span",{className:"switch__button flex--center-middle cursor--pointer"},m)),d&&t.createElement("label",{className:"block ml--sm text--textDimmed",htmlFor:n},d))}));h.defaultProps={intent:"accent",switchSize:"md"};var x=t.forwardRef((function(r,a){var n,s=r.icon,o=r.size,i=void 0===o?"sm":o,c=r.title,m=r.fill,p=void 0===m?"text":m,d=e.__rest(r,["icon","size","title","fill"]),u=l("icon inline-flex al__it--center","icon-"+s.id,p?"fill--"+p:"",r.className);return n="xs"===i?20:"sm"===i?24:"md"===i?32:"lg"===i?64:"xl"===i?100:i,t.createElement("svg",e.__assign({},d,{ref:a,className:u,xmlns:"http://www.w3.org/2000/svg",height:n,viewBox:s.viewBox,"aria-labelledby":c}),c&&t.createElement("title",{id:c},c),s.content&&s.content.map((function(e,r){return t.createElement("path",{key:r,fill:e.fill,d:e.path})})),s.path&&t.createElement("path",{d:s.path}))})),_=function(e){var r=e.type,a=e.intent,n=e.dur,s=e.size,o=e.className,i=e.stroke,c=e.container,m=e.containerClassName,p=function(e){var r=e.type,a=void 0===r?"XML":r,n=e.atr,l=e.val,s=e.delay,o=e.repeat,i=void 0===o?"indefinite":o;return t.createElement("animate",{attributeType:a,attributeName:n,values:l,dur:u,repeatCount:i,begin:s})},d=l(" ","loader",r,o,"fill--"+a,i?"stroke--"+a:""),u=n+"ms",f=l(" ",c?"loader-container flex--center-middle py-5":"loader-container inline-flex",m||""),g="";return"xs"===s?g="20":"sm"===s?g="40":"md"===s?g="60":"lg"===s?g="80":"xl"===s&&(g="100"),t.createElement("div",{className:f},t.createElement("svg",{className:d,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 14",width:g},"cycle"===r?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"0;5;"})),t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"cx",val:"8;25;"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(p,{atr:"cx",val:"25;42;"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;0;"}))):"","pulse"===r?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5",delay:n/4+"ms"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1",delay:n/4+"ms"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5",delay:n/2+"ms"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1",delay:n/2+"ms"}))):"","flash"===r?t.createElement(t.Fragment,null,t.createElement("rect",{x:"3",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2"})),t.createElement("rect",{x:"20",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2",delay:n/4+"ms"})),t.createElement("rect",{x:"37",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2",delay:n/2+"ms"}))):""))};_.defaultProps={type:"cycle",intent:"accent",dur:500,size:"sm",stroke:!1,container:!0};var y=function(t){function a(e){var r=t.call(this,e)||this;return r.modalRoot=document.body,r.modalWrapper=document.createElement("div"),r.modalWrapper.classList.add("modal-wrapper","fixed","left--0","top--0","w--100","h--100","z--9"),r.modalWrapper.style.backgroundColor="rgba(0,0,0,.85)",r.modalWrapper.style.overflow="auto",r.props.className&&r.modalWrapper.classList.add(r.props.className),r.modalWrapper.onclick=r.props.onClick,r}return e.__extends(a,t),a.prototype.componentDidMount=function(){this.modalRoot.appendChild(this.modalWrapper)},a.prototype.componentWillUnmount=function(){this.modalRoot.removeChild(this.modalWrapper)},a.prototype.render=function(){return r.createPortal(this.props.children,this.modalWrapper)},a}(t.Component),w=t.forwardRef((function(r,a){var n=r.margin,s=r.padding,o=r.className,i=e.__rest(r,["margin","padding","className"]),m=l("flex--wrap",o,c(n,"m"),c(s,"p"));return t.createElement("div",e.__assign({},i,{ref:a,className:m}))}));w.defaultProps={};var E=t.forwardRef((function(r,a){var n=r.margin,s=r.padding,o=r.size,i=r.className,m=e.__rest(r,["margin","padding","size","className"]),p=l("",i,!o&&"col",c(n,"m"),c(s,"p"),function(e){var t="";return e&&("number"==typeof e?t+="col--"+e:(t+=e.sm?" sm__col--"+e.sm:"",t+=e.md?" md__col--"+e.md:"",t+=e.lg?" md__col--"+e.lg:"",t+=e.xl?" xl__col--"+e.xl:"")),t}(o));return t.createElement("div",e.__assign({},m,{ref:a,className:p}))})),b=t.forwardRef((function(r,a){var n=r.isOpen,s=void 0!==n&&n,o=r.intent,i=void 0===o?"accent":o,c=l("menu-toggle",r.className,s?" menu-toggle--open":"");return t.createElement("div",e.__assign({},r,{ref:a,className:c}),t.createElement("div",{className:"menu-toggle__dot bg--"+i}),t.createElement("div",{className:"menu-toggle__dot bg--"+i}),t.createElement("div",{className:"menu-toggle__dot bg--"+i}))})),N=t.memo((function(e){var r=e.inView,a=e.valueFrom,n=void 0===a?0:a,l=e.valueTo,s=void 0===l?100:l,o=e.totalDuration,c=void 0===o?1:o,m=e.className,p=t.useState(n),d=p[0],u=p[1];return i((function(){r&&d<s?u(d+1):r||u(0)}),c/s*1e3),t.createElement("div",{className:m},d,"%")})),C=t.memo((function(e){var r=e.percentage,l=e.showPercentage,s=e.title,o=e.counterClassName,i=e.width,c=e.inView,m=e.icon,p=e.color,d={init:{pathLength:0,opacity:0},in:{pathLength:r/100,opacity:1,transition:{type:"spring",mass:1,stiffness:40}},out:{pathLength:0,opacity:0,transition:{type:"spring",mass:1,stiffness:40}}};return t.createElement("div",{className:"flex--column al__it--center"},t.createElement("div",{className:"relative"},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,viewBox:"0 0 200 200",strokeWidth:20,strokeLinecap:"round"},t.createElement("path",{className:"bg",stroke:"var(--border)",d:"M41 149.5a77 77 0 1 1 117.93 0",fill:"none"}),t.createElement(a.motion.path,{d:"M41 149.5a77 77 0 1 1 117.93 0",stroke:p,fill:"none",variants:d,animate:c?"in":"out"})),t.createElement("div",{className:"absolute--center text--center w--100"},!m&&l&&t.createElement(N,{className:n(o),inView:c,valueTo:r}),!m&&s&&t.createElement("div",{className:"font--bold pt--md"},s),m&&t.createElement("img",{src:m,width:Math.round(i/1.9),alt:s,title:s+" "+r+"%"}))),m&&s&&t.createElement("div",{style:{marginTop:-10},className:"font--bold"},s))}));C.defaultProps={showPercentage:!1,width:200,inView:!0,color:"var(--accent)"};var k=function(r){function a(e){return r.call(this,e)||this}return e.__extends(a,r),a.prototype.componentDidMount=function(){var e=document.documentElement.clientWidth,t=this.node,r=this.props.speed?this.props.speed:3,a=this.props.offset?this.props.offset:0;function n(){var e=t.getBoundingClientRect().bottom-window.innerWidth-a;t.style.backgroundPositionY=Math.round(e/r)+"px"}function l(){var e=t.getBoundingClientRect().bottom-window.innerWidth+a;t.style.backgroundPositionY=-Math.round(e/r)+"px"}e<992?t.style.backgroundPositionY="center":this.props.reverseDirection?(l(),document.addEventListener("scroll",l)):(n(),document.addEventListener("scroll",n))},a.prototype.render=function(){var r=this,a=this.props.image,n=this.props.bgSize?this.props.bgSize:"cover",l=this.props.bgPos?this.props.bgPos:"center",s=this.props.repeat?this.props.repeat:"repeat-y",o={backgroundColor:this.props.backgroundColor,backgroundImage:"url("+a+")",backgroundRepeat:s,backgroundSize:n,backgroundPositionX:l},i=e.__assign(e.__assign({},o),this.props.style);return t.createElement("div",{ref:function(e){return r.node=e},style:i,className:this.props.className},this.props.children)},a}(t.Component),S=t.memo((function(e){var r=e.items,l=e.className,s=e.isMobile,i=e.inView,c=e.renderedItem;return t.createElement(a.motion.div,{className:"text--center px--xl"+n(l),variants:P,initial:"init",animate:i?"in":"out"},t.createElement("div",{className:"timeline relative py--lg"},t.createElement(a.motion.div,{className:"timeline__line absolute left--0 md__absolute-x--center top--0 h--100 bg--text",variants:R}),r.map((function(e,r){return t.createElement(a.motion.div,{key:e.id,className:"timeline__item relative my--lg md__w--50 "+(s?"text--left ml--auto pl--xl":r%2==0?"text--right pr--xl":"text--left ml--auto pl--xl"),variants:I},c?c(e):t.createElement("div",{className:"p--lg brd brd--border round"},e.from&&e.to&&t.createElement("small",{className:"text--textDimmed"},"From ",o(e.from)," till ",e.isCurrent?e.to:o(e.to)),e.title&&t.createElement("h3",{className:"h4 my--xs font--bold"},e.title),e.desc&&t.createElement("p",{className:"m--0 text--textDimmed"},e.desc)))}))))}));S.defaultProps={inView:!0,isMobile:!1};var P={init:{opacity:0},in:{opacity:1,transition:{staggerChildren:.1}},out:{opacity:0}},R={in:{height:"100%",opacity:1,transition:{type:"spring",mass:.5}},out:{height:0,opacity:0}},I={in:{opacity:1,y:0,transition:{type:"spring",mass:.5}},out:{opacity:0,y:100}};exports.Button=p,exports.CSSParallax=k,exports.CircleProgressBar=C,exports.Column=E,exports.Counter=N,exports.FlexRow=w,exports.Icon=x,exports.Input=u,exports.InputWrapper=d,exports.Loader=_,exports.MenuToggle=b,exports.Modal=function(e){var r=e.children,a=e.wrapperClassName,n=e.modalClassName,s=e.triggerClassName,o=e.trigger,i=a?" "+a:"",c=l("modal absolute-x--center p--md mt--xxl w--50 bg--bg",n),m=l("modal-trigger",s),p=t.useState(!1),d=p[0],u=p[1];var f=d?t.createElement(y,{className:i,onClick:function(e){var t=document.getElementsByClassName("modal-wrapper")[0];e.target===t&&(u(!1),document.body.style.overflow="")}},t.createElement("div",{className:c},r({show:d,setShow:u}))):null;return t.createElement(t.Fragment,null,t.createElement("div",{onClick:function(){u(!0),document.body.style.overflow="hidden"},className:m},o({show:d,setShow:u})),f)},exports.PasswordInput=g,exports.Select=v,exports.Switch=h,exports.Textarea=f,exports.Timeline=S,exports.convertDate=o,exports.createLabel=s,exports.joinIgnoreEmpty=l,exports.joinStr=n,exports.useInterval=i;
