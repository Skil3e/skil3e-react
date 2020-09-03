import{__rest as e,__assign as t,__extends as a}from"tslib";import{useState as r,useEffect as i,useRef as n,forwardRef as l,createElement as o,Fragment as s,Component as c,memo as m,useLayoutEffect as d}from"react";import{createPortal as p}from"react-dom";import{motion as u,useViewportScroll as f,useTransform as v}from"framer-motion";var h=function(){var e=r(!1),t=e[0],a=e[1],n=r(""),l=n[0],o=n[1];function s(){var e=document.documentElement.clientWidth;e<480?(a(!0),o("phone")):e<=860?(a(!0),o("tablet")):e<992?(a(!1),o("laptop")):e>=1200&&(a(!1),o("desktop"))}return i((function(){return s(),window.addEventListener("resize",s),function(){s(),window.removeEventListener("resize",s)}})),[t,l]},g=function(){var e=r(""),t=e[0],a=e[1];return i((function(){var e=localStorage.getItem("currentTheme");e||(e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),a(e)}),[]),[t,a]};function y(e){return e?" "+e:""}var N=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},w=function(e,t){void 0===t&&(t="-");var a=e.split(t).join(" ");return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()};function b(e){var t=new Date(e);return t.toLocaleString("default",{month:"short"})+" "+t.getFullYear()}function x(e,t){var a=n((function(){}));i((function(){a.current=e}),[e]),i((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}function _(e,t){var a="";return e&&t&&("string"==typeof e?a+=t+"--"+e:(a+=e.top?" "+t+"t--"+e.top:"",a+=e.bottom?" "+t+"b--"+e.bottom:"",a+=e.left?" "+t+"l--"+e.left:"",a+=e.right?" "+t+"r--"+e.right:"",a+=e.x?" "+t+"x--"+e.x:"",a+=e.y?" "+t+"y--"+e.y:"",a+=k(e,"sm",t),a+=k(e,"md",t),a+=k(e,"lg",t),a+=k(e,"xl",t))),a}function k(e,t,a){var r="";return r+=e[t]&&"string"==typeof e[t]&&e[t]?" "+t+"__"+a+"--"+e[t]:"",r+=e[t]&&e[t].top?" "+t+"__"+a+"t--"+e[t].top:"",r+=e[t]&&e[t].bottom?" "+t+"__"+a+"b--"+e[t].bottom:"",r+=e[t]&&e[t].left?" "+t+"__"+a+"l--"+e[t].left:"",r+=e[t]&&e[t].right?" "+t+"__"+a+"r--"+e[t].right:"",r+=e[t]&&e[t].x?" "+t+"__"+a+"x--"+e[t].x:"",r+=e[t]&&e[t].y?" "+t+"__"+a+"y--"+e[t].y:""}var C=l((function(a,r){var i=a.look,n=a.intent,l=a.size,s=a.fullwidth,c=a.margin,m=e(a,["look","intent","size","fullwidth","margin"]),d=N("button",i,n,l,s&&"w--100",a.className,_(c,"m"));return o("button",t({},m,{ref:r,className:d}))}));C.defaultProps={look:"fill",intent:"accent"};var z=l((function(a,r){var i=a.label,n=a.errors,l=a.name,s=a.children,c=a.inputID,m=e(a,["label","errors","name","children","inputID"]),d=N("input-wrapper",a.className);return o("div",t({},m,{ref:r,className:d}),i&&o("label",{className:"flex small px--sm mb--xs",htmlFor:c},i),s,n&&l&&n[l]&&o("span",{className:"flex small px--sm text--danger mt--xs"},n[l].message))})),S=l((function(a,r){var i=a.type,n=a.id,l=a.label,s=a.errors,c=a.className,m=a.wrapperClassName,d=e(a,["type","id","label","errors","className","wrapperClassName"]);return o(z,{className:m,inputID:n,name:a.name,label:l||(n?w(n):void 0),errors:s},o("input",t({},d,{ref:r,className:c,type:i,id:n})))}));S.defaultProps={type:"text"};var P=l((function(a,r){var i=a.id,n=a.label,l=a.errors,s=a.className,c=a.wrapperClassName,m=e(a,["id","label","errors","className","wrapperClassName"]);return o(z,{className:c,inputID:i,name:a.name,label:n||(i?w(i):void 0),errors:l},o("textarea",t({},m,{ref:r,className:s,id:i})))})),W=l((function(a,i){a.type;var n=a.id,l=a.label,s=a.errors,c=a.className,m=a.wrapperClassName,d=a.customShowHide,p=a.toggleShowClassname,u=e(a,["type","id","label","errors","className","wrapperClassName","customShowHide","toggleShowClassname"]),f=r(!1),v=f[0],h=f[1];return o(z,{className:m,inputID:n,name:a.name,label:l||(n?w(n):void 0),errors:s},o("div",{className:"flex--center relative"},o("input",t({style:{paddingRight:60}},u,{ref:i,className:"password-input"+(c?" "+c:""),type:v?"text":"password",id:n})),o("div",{style:{width:60},className:"absolute-y--center right--0 flex--center-middle cursor--pointer "+(d?"":"h--100")+(p?" "+p:""),onClick:function(){return h(!v)}},d?d(v):v?"Hide":"Show")))})),D=l((function(a,r){var i=a.id,n=a.label,l=a.errors,s=(a.className,a.wrapperClassName),c=a.options,m=e(a,["id","label","errors","className","wrapperClassName","options"]);return o(z,{className:s,inputID:i,name:a.name,label:n||(i?w(i):void 0),errors:l},o("select",t({},m,{ref:r,id:i}),c.map((function(e){return o("option",{key:e.value,value:e.value},e.label?e.label:e.value)}))))})),L=l((function(a,r){var i=a.id,n=a.title,l=a.intent,s=a.onChange,c=a.checked,m=a.emoji,d=a.className,p=a.label,u=a.switchSize,f=e(a,["id","title","intent","onChange","checked","emoji","className","label","switchSize"]),v=N("switch flex--center",l,u,d);return o("div",{className:v,title:n},o("input",t({ref:r},f,{className:"switch__checkbox",id:i,type:"checkbox",onChange:s,checked:c})),o("label",{className:"switch__label "+u,htmlFor:i},o("span",{className:"switch__button flex--center-middle cursor--pointer"},m)),p&&o("label",{className:"block ml--sm text--textDimmed",htmlFor:i},p))}));L.defaultProps={intent:"accent",switchSize:"md"};var I=l((function(a,r){var i=a.icon,n=a.size,l=void 0===n?"sm":n,s=a.title,c=a.fill,m=void 0===c?"text":c,d=e(a,["icon","size","title","fill"]),p=N("icon inline-flex al__it--center","icon-"+i.id,m?"fill--"+m:"",a.className);return o("svg",t({},d,{ref:r,className:p,xmlns:"http://www.w3.org/2000/svg",height:"xs"===l?20:"sm"===l?24:"md"===l?32:"lg"===l?64:"xl"===l?100:l,viewBox:i.viewBox,"aria-labelledby":s}),s&&o("title",{id:s},s),i.content&&i.content.map((function(e,t){return o("path",{key:t,fill:e.fill,d:e.path})})),i.path&&o("path",{d:i.path}))})),M=function(e){var t=e.type,a=e.intent,r=e.dur,i=e.size,n=e.className,l=e.stroke,c=e.container,m=e.containerClassName,d=function(e){var t=e.type,a=void 0===t?"XML":t,r=e.atr,i=e.val,n=e.delay,l=e.repeat;return o("animate",{attributeType:a,attributeName:r,values:i,dur:u,repeatCount:void 0===l?"indefinite":l,begin:n})},p=N(" ","loader",t,n,"fill--"+a,l?"stroke--"+a:""),u=r+"ms",f=N(" ",c?"loader-container flex--center-middle py-5":"loader-container inline-flex",m||""),v="";return"xs"===i?v="20":"sm"===i?v="40":"md"===i?v="60":"lg"===i?v="80":"xl"===i&&(v="100"),o("div",{className:f},o("svg",{className:p,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 14",width:v},"cycle"===t?o(s,null,o("circle",{cx:"8",cy:"7",r:"5"},o(d,{atr:"r",val:"0;5;"})),o("circle",{cx:"8",cy:"7",r:"5"},o(d,{atr:"cx",val:"8;25;"})),o("circle",{cx:"25",cy:"7",r:"5"},o(d,{atr:"cx",val:"25;42;"})),o("circle",{cx:"42",cy:"7",r:"5"},o(d,{atr:"r",val:"5;0;"}))):"","pulse"===t?o(s,null,o("circle",{cx:"8",cy:"7",r:"5"},o(d,{atr:"r",val:"5;2;2;5"}),o(d,{atr:"fill-opacity",val:"1;.5;.5;1"})),o("circle",{cx:"25",cy:"7",r:"5"},o(d,{atr:"r",val:"5;2;2;5",delay:r/4+"ms"}),o(d,{atr:"fill-opacity",val:"1;.5;.5;1",delay:r/4+"ms"})),o("circle",{cx:"42",cy:"7",r:"5"},o(d,{atr:"r",val:"5;2;2;5",delay:r/2+"ms"}),o(d,{atr:"fill-opacity",val:"1;.5;.5;1",delay:r/2+"ms"}))):"","flash"===t?o(s,null,o("rect",{x:"3",y:"2",width:"10",height:"10"},o(d,{atr:"fill-opacity",val:"1;.2;.2"})),o("rect",{x:"20",y:"2",width:"10",height:"10"},o(d,{atr:"fill-opacity",val:"1;.2;.2",delay:r/4+"ms"})),o("rect",{x:"37",y:"2",width:"10",height:"10"},o(d,{atr:"fill-opacity",val:"1;.2;.2",delay:r/2+"ms"}))):""))};M.defaultProps={type:"cycle",intent:"accent",dur:500,size:"sm",stroke:!1,container:!0};var B=function(e){function t(t){var a=e.call(this,t)||this;return a.modalRoot=document.body,a.modalWrapper=document.createElement("div"),a.modalWrapper.classList.add("modal-wrapper","fixed","left--0","top--0","w--100","h--100","z--9"),a.modalWrapper.style.backgroundColor="rgba(0,0,0,.85)",a.modalWrapper.style.overflow="auto",a.props.className&&a.modalWrapper.classList.add(a.props.className),a.modalWrapper.onclick=a.props.onClick,a}return a(t,e),t.prototype.componentDidMount=function(){this.modalRoot.appendChild(this.modalWrapper)},t.prototype.componentWillUnmount=function(){this.modalRoot.removeChild(this.modalWrapper)},t.prototype.render=function(){return p(this.props.children,this.modalWrapper)},t}(c),E=function(e){var t=e.children,a=e.wrapperClassName,i=e.modalClassName,n=e.triggerClassName,l=e.trigger,c=a?" "+a:"",m=N("modal absolute-x--center p--md mt--xxl w--50 bg--bg",i),d=N("modal-trigger",n),p=r(!1),u=p[0],f=p[1];var v=u?o(B,{className:c,onClick:function(e){var t=document.getElementsByClassName("modal-wrapper")[0];e.target===t&&(f(!1),document.body.style.overflow="")}},o("div",{className:m},t({show:u,setShow:f}))):null;return o(s,null,o("div",{onClick:function(){f(!0),document.body.style.overflow="hidden"},className:d},l({show:u,setShow:f})),v)},R=l((function(a,r){var i=a.margin,n=a.padding,l=a.className,s=e(a,["margin","padding","className"]),c=N("flex--wrap",l,_(i,"m"),_(n,"p"));return o("div",t({},s,{ref:r,className:c}))}));R.defaultProps={};var F=l((function(a,r){var i=a.margin,n=a.padding,l=a.size,s=a.className,c=e(a,["margin","padding","size","className"]),m=N("",s,!l&&"col",_(i,"m"),_(n,"p"),function(e){var t="";return e&&("number"==typeof e?t+="col--"+e:(t+=e.sm?" sm__col--"+e.sm:"",t+=e.md?" md__col--"+e.md:"",t+=e.lg?" md__col--"+e.lg:"",t+=e.xl?" xl__col--"+e.xl:"")),t}(l));return o("div",t({},c,{ref:r,className:m}))})),T=l((function(e,a){var r=e.isOpen,i=void 0!==r&&r,n=e.intent,l=void 0===n?"accent":n,s=N("menu-toggle",e.className,i?" menu-toggle--open":"");return o("div",t({},e,{ref:a,className:s}),o("div",{className:"menu-toggle__dot bg--"+l}),o("div",{className:"menu-toggle__dot bg--"+l}),o("div",{className:"menu-toggle__dot bg--"+l}))})),V=m((function(e){var t=e.inView,a=e.valueFrom,i=void 0===a?0:a,n=e.valueTo,l=void 0===n?100:n,s=e.totalDuration,c=void 0===s?1:s,m=e.className,d=r(i),p=d[0],u=d[1];return x((function(){t&&p<l?u(p+1):t||u(0)}),c/l*1e3),o("div",{className:m},p,"%")})),Y=m((function(e){var t=e.percentage,a=e.showPercentage,r=e.title,i=e.counterClassName,n=e.width,l=e.inView,s=e.icon,c=e.color,m={init:{pathLength:0,opacity:0},in:{pathLength:t/100,opacity:1,transition:{type:"spring",mass:1,stiffness:40}},out:{pathLength:0,opacity:0,transition:{type:"spring",mass:1,stiffness:40}}};return o("div",{className:"flex--column al__it--center"},o("div",{className:"relative"},o("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,viewBox:"0 0 200 200",strokeWidth:20,strokeLinecap:"round"},o("path",{className:"bg",stroke:"var(--border)",d:"M41 149.5a77 77 0 1 1 117.93 0",fill:"none"}),o(u.path,{d:"M41 149.5a77 77 0 1 1 117.93 0",stroke:c,fill:"none",variants:m,animate:l?"in":"out"})),o("div",{className:"absolute--center text--center w--100"},!s&&a&&o(V,{className:y(i),inView:l,valueTo:t}),!s&&r&&o("div",{className:"font--bold pt--md"},r),s&&s(n,t,r))),s&&r&&o("div",{style:{marginTop:-10},className:"font--bold"},r))}));Y.defaultProps={showPercentage:!1,width:200,inView:!0,color:"var(--accent)"};var j=function(e){function r(t){return e.call(this,t)||this}return a(r,e),r.prototype.componentDidMount=function(){var e=document.documentElement.clientWidth,t=this.node,a=this.props.speed?this.props.speed:3,r=this.props.offset?this.props.offset:0;function i(){var e=t.getBoundingClientRect().bottom-window.innerWidth-r;t.style.backgroundPositionY=Math.round(e/a)+"px"}function n(){var e=t.getBoundingClientRect().bottom-window.innerWidth+r;t.style.backgroundPositionY=-Math.round(e/a)+"px"}e<992?t.style.backgroundPositionY="center":this.props.reverseDirection?(n(),document.addEventListener("scroll",n)):(i(),document.addEventListener("scroll",i))},r.prototype.render=function(){var e=this,a=this.props.image,r=this.props.bgSize?this.props.bgSize:"cover",i=this.props.bgPos?this.props.bgPos:"center",n=this.props.repeat?this.props.repeat:"repeat-y",l={backgroundColor:this.props.backgroundColor,backgroundImage:"url("+a+")",backgroundRepeat:n,backgroundSize:r,backgroundPositionX:i},s=t(t({},l),this.props.style);return o("div",{ref:function(t){return e.node=t},style:s,className:this.props.className},this.props.children)},r}(c),H=m((function(e){var t=e.children,a=e.speed,i=void 0===a?4:a,l=e.className,s=e.useOpacity,c=r(0),m=c[0],p=c[1],h=n(null),g=f().scrollY,y=v(g,[m,m+i],[0,1],{clamp:!1}),N=v(g,[500*m,500*(m+i)],[1,0],{clamp:!0});return d((function(){var e=h.current;p(null==e?void 0:e.offsetTop)}),[h]),o(u.div,{className:l,ref:h,style:{y:y,opacity:s?N:void 0}},t)})),O=m((function(e){var t=e.items,a=e.className,r=e.isMobile,i=e.inView,n=e.renderedItem;return o(u.div,{className:"text--center px--xl"+y(a),variants:U,initial:"init",animate:i?"in":"out"},o("div",{className:"timeline relative py--lg"},o(u.div,{className:"timeline__line absolute left--0 md__absolute-x--center top--0 h--100 bg--text",variants:X}),t.map((function(e,t){return o(u.div,{key:e.order,className:"timeline__item relative my--lg md__w--50 "+(r?"text--left ml--auto pl--xl":t%2==0?"text--right pr--xl":"text--left ml--auto pl--xl"),variants:A},n?n(e):o("div",{className:"p--lg brd brd--border round"},e.from&&e.to&&o("small",{className:"text--textDimmed"},"From ",b(e.from)," till ",e.isCurrent?e.to:b(e.to)),e.title&&o("h3",{className:"h4 my--xs font--bold"},e.title),e.desc&&o("p",{className:"m--0 text--textDimmed"},e.desc)))}))))}));O.defaultProps={inView:!0,isMobile:!1};var U={init:{opacity:0},in:{opacity:1,transition:{staggerChildren:.1}},out:{opacity:0}},X={in:{height:"100%",opacity:1,transition:{type:"spring",mass:.5}},out:{height:0,opacity:0}},A={in:{opacity:1,y:0,transition:{type:"spring",mass:.5}},out:{opacity:0,y:100}};export{C as Button,j as CSSParallax,Y as CircleProgressBar,F as Column,V as Counter,R as FlexRow,I as Icon,S as Input,z as InputWrapper,M as Loader,T as MenuToggle,E as Modal,H as ParallaxContainer,W as PasswordInput,D as Select,L as Switch,P as Textarea,O as Timeline,b as convertDate,w as createLabel,N as joinIgnoreEmpty,y as joinStr,h as useCheckForScreens,x as useInterval,g as useThemeChanger};
