import{__rest as e,__assign as t,__extends as a}from"tslib";import{useRef as r,useEffect as i,forwardRef as l,createElement as n,useState as o,Fragment as s,Component as c,memo as m}from"react";import{createPortal as d}from"react-dom";import{motion as p}from"framer-motion";function u(e){return e?" "+e:""}var f=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},v=function(e,t){void 0===t&&(t="-");var a=e.split(t).join(" ");return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()};function h(e){var t=new Date(e);return t.toLocaleString("default",{month:"short"})+" "+t.getFullYear()}function g(e,t){var a=r((function(){}));i((function(){a.current=e}),[e]),i((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}function y(e,t){var a="";return e&&t&&("string"==typeof e?a+=t+"--"+e:(a+=e.top?" "+t+"t--"+e.top:"",a+=e.bottom?" "+t+"b--"+e.bottom:"",a+=e.left?" "+t+"l--"+e.left:"",a+=e.right?" "+t+"r--"+e.right:"",a+=e.x?" "+t+"x--"+e.x:"",a+=e.y?" "+t+"y--"+e.y:"",a+=N(e,"sm",t),a+=N(e,"md",t),a+=N(e,"lg",t),a+=N(e,"xl",t))),a}function N(e,t,a){var r="";return r+=e[t]&&"string"==typeof e[t]&&e[t]?" "+t+"__"+a+"--"+e[t]:"",r+=e[t]&&e[t].top?" "+t+"__"+a+"t--"+e[t].top:"",r+=e[t]&&e[t].bottom?" "+t+"__"+a+"b--"+e[t].bottom:"",r+=e[t]&&e[t].left?" "+t+"__"+a+"l--"+e[t].left:"",r+=e[t]&&e[t].right?" "+t+"__"+a+"r--"+e[t].right:"",r+=e[t]&&e[t].x?" "+t+"__"+a+"x--"+e[t].x:"",r+=e[t]&&e[t].y?" "+t+"__"+a+"y--"+e[t].y:""}var b=l((function(a,r){var i=a.look,l=a.intent,o=a.size,s=a.fullwidth,c=a.margin,m=e(a,["look","intent","size","fullwidth","margin"]),d=f("button",i,l,o,s&&"w--100",a.className,y(c,"m"));return n("button",t({},m,{ref:r,className:d}))}));b.defaultProps={look:"fill",intent:"accent"};var x=l((function(a,r){var i=a.label,l=a.errors,o=a.name,s=a.children,c=a.inputID,m=e(a,["label","errors","name","children","inputID"]),d=f("input-wrapper",a.className);return n("div",t({},m,{ref:r,className:d}),i&&n("label",{className:"flex small px--sm mb--xs",htmlFor:c},i),s,l&&o&&l[o]&&n("span",{className:"flex small px--sm text--danger mt--xs"},l[o].message))})),w=l((function(a,r){var i=a.type,l=a.id,o=a.label,s=a.errors,c=a.className,m=a.wrapperClassName,d=e(a,["type","id","label","errors","className","wrapperClassName"]);return n(x,{className:m,inputID:l,name:a.name,label:o||(l?v(l):void 0),errors:s},n("input",t({},d,{ref:r,className:c,type:i,id:l})))}));w.defaultProps={type:"text"};var _=l((function(a,r){var i=a.id,l=a.label,o=a.errors,s=a.className,c=a.wrapperClassName,m=e(a,["id","label","errors","className","wrapperClassName"]);return n(x,{className:c,inputID:i,name:a.name,label:l||(i?v(i):void 0),errors:o},n("textarea",t({},m,{ref:r,className:s,id:i})))})),C=l((function(a,r){a.type;var i=a.id,l=a.label,s=a.errors,c=a.className,m=a.wrapperClassName,d=a.customShowHide,p=a.toggleShowClassname,u=e(a,["type","id","label","errors","className","wrapperClassName","customShowHide","toggleShowClassname"]),f=o(!1),h=f[0],g=f[1];return n(x,{className:m,inputID:i,name:a.name,label:l||(i?v(i):void 0),errors:s},n("div",{className:"flex--center relative"},n("input",t({style:{paddingRight:60}},u,{ref:r,className:"password-input"+(c?" "+c:""),type:h?"text":"password",id:i})),n("div",{style:{width:60},className:"absolute-y--center right--0 flex--center-middle cursor--pointer "+(d?"":"h--100")+(p?" "+p:""),onClick:function(){return g(!h)}},d?d(h):h?"Hide":"Show")))})),k=l((function(a,r){var i=a.id,l=a.label,o=a.errors,s=(a.className,a.wrapperClassName),c=a.options,m=e(a,["id","label","errors","className","wrapperClassName","options"]);return n(x,{className:s,inputID:i,name:a.name,label:l||(i?v(i):void 0),errors:o},n("select",t({},m,{ref:r,id:i}),c.map((function(e){return n("option",{key:e.value,value:e.value},e.label?e.label:e.value)}))))})),P=l((function(a,r){var i=a.id,l=a.title,o=a.intent,s=a.onChange,c=a.checked,m=a.emoji,d=a.className,p=a.label,u=a.switchSize,v=e(a,["id","title","intent","onChange","checked","emoji","className","label","switchSize"]),h=f("switch flex--center",o,u,d);return n("div",{className:h,title:l},n("input",t({ref:r},v,{className:"switch__checkbox",id:i,type:"checkbox",onChange:s,checked:c})),n("label",{className:"switch__label "+u,htmlFor:i},n("span",{className:"switch__button flex--center-middle cursor--pointer"},m)),p&&n("label",{className:"block ml--sm text--textDimmed",htmlFor:i},p))}));P.defaultProps={intent:"accent",switchSize:"md"};var S=l((function(a,r){var i=a.icon,l=a.size,o=void 0===l?"sm":l,s=a.title,c=a.fill,m=void 0===c?"text":c,d=e(a,["icon","size","title","fill"]),p=f("icon inline-flex al__it--center","icon-"+i.id,m?"fill--"+m:"",a.className);return n("svg",t({},d,{ref:r,className:p,xmlns:"http://www.w3.org/2000/svg",height:"xs"===o?20:"sm"===o?24:"md"===o?32:"lg"===o?64:"xl"===o?100:o,viewBox:i.viewBox,"aria-labelledby":s}),s&&n("title",{id:s},s),i.content&&i.content.map((function(e,t){return n("path",{key:t,fill:e.fill,d:e.path})})),i.path&&n("path",{d:i.path}))})),z=function(e){var t=e.type,a=e.intent,r=e.dur,i=e.size,l=e.className,o=e.stroke,c=e.container,m=e.containerClassName,d=function(e){var t=e.type,a=void 0===t?"XML":t,r=e.atr,i=e.val,l=e.delay,o=e.repeat;return n("animate",{attributeType:a,attributeName:r,values:i,dur:u,repeatCount:void 0===o?"indefinite":o,begin:l})},p=f(" ","loader",t,l,"fill--"+a,o?"stroke--"+a:""),u=r+"ms",v=f(" ",c?"loader-container flex--center-middle py-5":"loader-container inline-flex",m||""),h="";return"xs"===i?h="20":"sm"===i?h="40":"md"===i?h="60":"lg"===i?h="80":"xl"===i&&(h="100"),n("div",{className:v},n("svg",{className:p,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 14",width:h},"cycle"===t?n(s,null,n("circle",{cx:"8",cy:"7",r:"5"},n(d,{atr:"r",val:"0;5;"})),n("circle",{cx:"8",cy:"7",r:"5"},n(d,{atr:"cx",val:"8;25;"})),n("circle",{cx:"25",cy:"7",r:"5"},n(d,{atr:"cx",val:"25;42;"})),n("circle",{cx:"42",cy:"7",r:"5"},n(d,{atr:"r",val:"5;0;"}))):"","pulse"===t?n(s,null,n("circle",{cx:"8",cy:"7",r:"5"},n(d,{atr:"r",val:"5;2;2;5"}),n(d,{atr:"fill-opacity",val:"1;.5;.5;1"})),n("circle",{cx:"25",cy:"7",r:"5"},n(d,{atr:"r",val:"5;2;2;5",delay:r/4+"ms"}),n(d,{atr:"fill-opacity",val:"1;.5;.5;1",delay:r/4+"ms"})),n("circle",{cx:"42",cy:"7",r:"5"},n(d,{atr:"r",val:"5;2;2;5",delay:r/2+"ms"}),n(d,{atr:"fill-opacity",val:"1;.5;.5;1",delay:r/2+"ms"}))):"","flash"===t?n(s,null,n("rect",{x:"3",y:"2",width:"10",height:"10"},n(d,{atr:"fill-opacity",val:"1;.2;.2"})),n("rect",{x:"20",y:"2",width:"10",height:"10"},n(d,{atr:"fill-opacity",val:"1;.2;.2",delay:r/4+"ms"})),n("rect",{x:"37",y:"2",width:"10",height:"10"},n(d,{atr:"fill-opacity",val:"1;.2;.2",delay:r/2+"ms"}))):""))};z.defaultProps={type:"cycle",intent:"accent",dur:500,size:"sm",stroke:!1,container:!0};var D=function(e){function t(t){var a=e.call(this,t)||this;return a.modalRoot=document.body,a.modalWrapper=document.createElement("div"),a.modalWrapper.classList.add("modal-wrapper","fixed","left--0","top--0","w--100","h--100","z--9"),a.modalWrapper.style.backgroundColor="rgba(0,0,0,.85)",a.modalWrapper.style.overflow="auto",a.props.className&&a.modalWrapper.classList.add(a.props.className),a.modalWrapper.onclick=a.props.onClick,a}return a(t,e),t.prototype.componentDidMount=function(){this.modalRoot.appendChild(this.modalWrapper)},t.prototype.componentWillUnmount=function(){this.modalRoot.removeChild(this.modalWrapper)},t.prototype.render=function(){return d(this.props.children,this.modalWrapper)},t}(c),W=function(e){var t=e.children,a=e.wrapperClassName,r=e.modalClassName,i=e.triggerClassName,l=e.trigger,c=a?" "+a:"",m=f("modal absolute-x--center p--md mt--xxl w--50 bg--bg",r),d=f("modal-trigger",i),p=o(!1),u=p[0],v=p[1];var h=u?n(D,{className:c,onClick:function(e){var t=document.getElementsByClassName("modal-wrapper")[0];e.target===t&&(v(!1),document.body.style.overflow="")}},n("div",{className:m},t({show:u,setShow:v}))):null;return n(s,null,n("div",{onClick:function(){v(!0),document.body.style.overflow="hidden"},className:d},l({show:u,setShow:v})),h)},L=l((function(a,r){var i=a.margin,l=a.padding,o=a.className,s=e(a,["margin","padding","className"]),c=f("flex--wrap",o,y(i,"m"),y(l,"p"));return n("div",t({},s,{ref:r,className:c}))}));L.defaultProps={};var I=l((function(a,r){var i=a.margin,l=a.padding,o=a.size,s=a.className,c=e(a,["margin","padding","size","className"]),m=f("",s,!o&&"col",y(i,"m"),y(l,"p"),function(e){var t="";return e&&("number"==typeof e?t+="col--"+e:(t+=e.sm?" sm__col--"+e.sm:"",t+=e.md?" md__col--"+e.md:"",t+=e.lg?" md__col--"+e.lg:"",t+=e.xl?" xl__col--"+e.xl:"")),t}(o));return n("div",t({},c,{ref:r,className:m}))})),M=l((function(e,a){var r=e.isOpen,i=void 0!==r&&r,l=e.intent,o=void 0===l?"accent":l,s=f("menu-toggle",e.className,i?" menu-toggle--open":"");return n("div",t({},e,{ref:a,className:s}),n("div",{className:"menu-toggle__dot bg--"+o}),n("div",{className:"menu-toggle__dot bg--"+o}),n("div",{className:"menu-toggle__dot bg--"+o}))})),B=m((function(e){var t=e.inView,a=e.valueFrom,r=void 0===a?0:a,i=e.valueTo,l=void 0===i?100:i,s=e.totalDuration,c=void 0===s?1:s,m=e.className,d=o(r),p=d[0],u=d[1];return g((function(){t&&p<l?u(p+1):t||u(0)}),c/l*1e3),n("div",{className:m},p,"%")})),R=m((function(e){var t=e.percentage,a=e.showPercentage,r=e.title,i=e.counterClassName,l=e.width,o=e.inView,s=e.icon,c=e.color,m={init:{pathLength:0,opacity:0},in:{pathLength:t/100,opacity:1,transition:{type:"spring",mass:1,stiffness:40}},out:{pathLength:0,opacity:0,transition:{type:"spring",mass:1,stiffness:40}}};return n("div",{className:"flex--column al__it--center"},n("div",{className:"relative"},n("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,viewBox:"0 0 200 200",strokeWidth:20,strokeLinecap:"round"},n("path",{className:"bg",stroke:"var(--border)",d:"M41 149.5a77 77 0 1 1 117.93 0",fill:"none"}),n(p.path,{d:"M41 149.5a77 77 0 1 1 117.93 0",stroke:c,fill:"none",variants:m,animate:o?"in":"out"})),n("div",{className:"absolute--center text--center w--100"},!s&&a&&n(B,{className:u(i),inView:o,valueTo:t}),!s&&r&&n("div",{className:"font--bold pt--md"},r),s&&s(l,t,r))),s&&r&&n("div",{style:{marginTop:-10},className:"font--bold"},r))}));R.defaultProps={showPercentage:!1,width:200,inView:!0,color:"var(--accent)"};var F=function(e){function r(t){return e.call(this,t)||this}return a(r,e),r.prototype.componentDidMount=function(){var e=document.documentElement.clientWidth,t=this.node,a=this.props.speed?this.props.speed:3,r=this.props.offset?this.props.offset:0;function i(){var e=t.getBoundingClientRect().bottom-window.innerWidth-r;t.style.backgroundPositionY=Math.round(e/a)+"px"}function l(){var e=t.getBoundingClientRect().bottom-window.innerWidth+r;t.style.backgroundPositionY=-Math.round(e/a)+"px"}e<992?t.style.backgroundPositionY="center":this.props.reverseDirection?(l(),document.addEventListener("scroll",l)):(i(),document.addEventListener("scroll",i))},r.prototype.render=function(){var e=this,a=this.props.image,r=this.props.bgSize?this.props.bgSize:"cover",i=this.props.bgPos?this.props.bgPos:"center",l=this.props.repeat?this.props.repeat:"repeat-y",o={backgroundColor:this.props.backgroundColor,backgroundImage:"url("+a+")",backgroundRepeat:l,backgroundSize:r,backgroundPositionX:i},s=t(t({},o),this.props.style);return n("div",{ref:function(t){return e.node=t},style:s,className:this.props.className},this.props.children)},r}(c),V=m((function(e){var t=e.items,a=e.className,r=e.isMobile,i=e.inView,l=e.renderedItem;return n(p.div,{className:"text--center px--xl"+u(a),variants:E,initial:"init",animate:i?"in":"out"},n("div",{className:"timeline relative py--lg"},n(p.div,{className:"timeline__line absolute left--0 md__absolute-x--center top--0 h--100 bg--text",variants:j}),t.map((function(e,t){return n(p.div,{key:e.id,className:"timeline__item relative my--lg md__w--50 "+(r?"text--left ml--auto pl--xl":t%2==0?"text--right pr--xl":"text--left ml--auto pl--xl"),variants:T},l?l(e):n("div",{className:"p--lg brd brd--border round"},e.from&&e.to&&n("small",{className:"text--textDimmed"},"From ",h(e.from)," till ",e.isCurrent?e.to:h(e.to)),e.title&&n("h3",{className:"h4 my--xs font--bold"},e.title),e.desc&&n("p",{className:"m--0 text--textDimmed"},e.desc)))}))))}));V.defaultProps={inView:!0,isMobile:!1};var E={init:{opacity:0},in:{opacity:1,transition:{staggerChildren:.1}},out:{opacity:0}},j={in:{height:"100%",opacity:1,transition:{type:"spring",mass:.5}},out:{height:0,opacity:0}},T={in:{opacity:1,y:0,transition:{type:"spring",mass:.5}},out:{opacity:0,y:100}};export{b as Button,F as CSSParallax,R as CircleProgressBar,I as Column,B as Counter,L as FlexRow,S as Icon,w as Input,x as InputWrapper,z as Loader,M as MenuToggle,W as Modal,C as PasswordInput,k as Select,P as Switch,_ as Textarea,V as Timeline,h as convertDate,v as createLabel,f as joinIgnoreEmpty,u as joinStr,g as useInterval};
