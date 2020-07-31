"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},a=function(e,t){void 0===t&&(t="-");var r=e.split(t).join(" ");return r.charAt(0).toUpperCase()+r.substring(1).toLowerCase()};function n(e,t){var r="";return e&&t&&("string"==typeof e?r+=t+"--"+e:(r+=e.top?" "+t+"t--"+e.top:"",r+=e.bottom?" "+t+"b--"+e.bottom:"",r+=e.left?" "+t+"l--"+e.left:"",r+=e.right?" "+t+"r--"+e.right:"",r+=e.x?" "+t+"x--"+e.x:"",r+=e.y?" "+t+"y--"+e.y:"",r+=l(e,"sm",t),r+=l(e,"md",t),r+=l(e,"lg",t),r+=l(e,"xl",t))),r}function l(e,t,r){var a="";return a+=e[t]&&"string"==typeof e[t]&&e[t]?" "+t+"__"+r+"--"+e[t]:"",a+=e[t]&&e[t].top?" "+t+"__"+r+"t--"+e[t].top:"",a+=e[t]&&e[t].bottom?" "+t+"__"+r+"b--"+e[t].bottom:"",a+=e[t]&&e[t].left?" "+t+"__"+r+"l--"+e[t].left:"",a+=e[t]&&e[t].right?" "+t+"__"+r+"r--"+e[t].right:"",a+=e[t]&&e[t].x?" "+t+"__"+r+"x--"+e[t].x:"",a+=e[t]&&e[t].y?" "+t+"__"+r+"y--"+e[t].y:""}var s=t.forwardRef((function(a,l){var s=a.look,i=a.intent,o=a.size,c=a.fullwidth,m=a.margin,p=e.__rest(a,["look","intent","size","fullwidth","margin"]),d=r("button",s,i,o,c&&"w--100",a.className,n(m,"m"));return t.createElement("button",e.__assign({},p,{ref:l,className:d}))}));s.defaultProps={look:"fill",intent:"accent"};var i=t.forwardRef((function(a,n){var l=a.label,s=a.errors,i=a.name,o=a.children,c=a.inputID,m=e.__rest(a,["label","errors","name","children","inputID"]),p=r("input-wrapper",a.className);return t.createElement("div",e.__assign({},m,{ref:n,className:p}),l&&t.createElement("label",{className:"flex small px--sm mb--xs",htmlFor:c},l),o,s&&i&&s[i]&&t.createElement("span",{className:"flex small px--sm text--danger mt--xs"},s[i].message))})),o=t.forwardRef((function(r,n){var l=r.type,s=r.id,o=r.label,c=r.errors,m=r.className,p=r.wrapperClassName,d=e.__rest(r,["type","id","label","errors","className","wrapperClassName"]);return t.createElement(i,{className:p,inputID:s,name:r.name,label:o||(s?a(s):void 0),errors:c},t.createElement("input",e.__assign({},d,{ref:n,className:m,type:l,id:s})))}));o.defaultProps={type:"text"};var c=t.forwardRef((function(r,n){r.type;var l=r.id,s=r.label,o=r.errors,c=r.className,m=r.wrapperClassName,p=r.customShowHide,d=r.toggleShowClassname,u=e.__rest(r,["type","id","label","errors","className","wrapperClassName","customShowHide","toggleShowClassname"]),f=t.useState(!1),g=f[0],v=f[1];return t.createElement(i,{className:m,inputID:l,name:r.name,label:s||(l?a(l):void 0),errors:o},t.createElement("div",{className:"flex--center relative"},t.createElement("input",e.__assign({style:{paddingRight:60}},u,{ref:n,className:"password-input"+(c?" "+c:""),type:g?"text":"password",id:l})),t.createElement("button",{style:{width:60},className:"absolute-y--center right--0 inline-flex al__it--center "+(p?"":"h--100")+(d?" "+d:""),onClick:function(){return v(!g)}},p?p(g):g?"Hide":"Show")))})),m=t.forwardRef((function(r,n){var l=r.id,s=r.label,o=r.errors,c=(r.className,r.wrapperClassName),m=r.options,p=e.__rest(r,["id","label","errors","className","wrapperClassName","options"]);return t.createElement(i,{className:c,inputID:l,name:r.name,label:s||(l?a(l):void 0),errors:o},t.createElement("select",e.__assign({},p,{ref:n,id:l}),m.map((function(e){return t.createElement("option",{key:e.value,value:e.value},e.label?e.label:e.value)}))))})),p=t.forwardRef((function(e,a){var n=e.id,l=e.title,s=e.intent,i=e.onChange,o=e.checked,c=e.emoji,m=e.className,p=e.label,d=e.size,u=r("switch flex--center",s,d,m);return t.createElement("div",{className:u,title:l},t.createElement("input",{ref:a,className:"switch__checkbox",id:n,type:"checkbox",onChange:i,checked:o}),t.createElement("label",{className:"switch__label "+d,htmlFor:n},t.createElement("span",{className:"switch__button flex--center-middle cursor--pointer"},c)),p&&t.createElement("label",{className:"block ml--sm text--textDimmed",htmlFor:n},p))}));p.defaultProps={intent:"accent",size:"md"};var d=t.forwardRef((function(a,n){var l,s=a.icon,i=a.size,o=void 0===i?"sm":i,c=a.title,m=a.fill,p=void 0===m?"text":m,d=r("icon inline-flex al__it--center","icon-"+s.id,p?"fill--"+p:"",a.className);return l="xs"===o?20:"sm"===o?24:"md"===o?32:"lg"===o?64:"xl"===o?100:o,t.createElement("svg",e.__assign({},a,{ref:n,className:d,xmlns:"http://www.w3.org/2000/svg",height:l,viewBox:s.viewBox,"aria-labelledby":c}),c&&t.createElement("title",{id:c},c),s.content&&s.content.map((function(e,r){return t.createElement("path",{key:r,fill:e.fill,d:e.path})})),s.path&&t.createElement("path",{d:s.path}))})),u=function(e){var a=e.type,n=e.intent,l=e.dur,s=e.size,i=e.className,o=e.stroke,c=e.container,m=e.containerClassName,p=function(e){var r=e.type,a=void 0===r?"XML":r,n=e.atr,l=e.val,s=e.delay,i=e.repeat,o=void 0===i?"indefinite":i;return t.createElement("animate",{attributeType:a,attributeName:n,values:l,dur:u,repeatCount:o,begin:s})},d=r(" ","loader",a,i,"fill--"+n,o?"stroke--"+n:""),u=l+"ms",f=r(" ",c?"loader-container d-flex justify-content-center py-5":"loader-container d-inline-flex",m||""),g="";return"xs"===s?g="20":"sm"===s?g="40":"md"===s?g="60":"lg"===s?g="80":"xl"===s&&(g="100"),t.createElement("div",{className:f},t.createElement("svg",{className:d,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 14",width:g},"cycle"===a?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"0;5;"})),t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"cx",val:"8;25;"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(p,{atr:"cx",val:"25;42;"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;0;"}))):"","pulse"===a?t.createElement(t.Fragment,null,t.createElement("circle",{cx:"8",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1"})),t.createElement("circle",{cx:"25",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5",delay:l/4+"ms"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1",delay:l/4+"ms"})),t.createElement("circle",{cx:"42",cy:"7",r:"5"},t.createElement(p,{atr:"r",val:"5;2;2;5",delay:l/2+"ms"}),t.createElement(p,{atr:"fill-opacity",val:"1;.5;.5;1",delay:l/2+"ms"}))):"","flash"===a?t.createElement(t.Fragment,null,t.createElement("rect",{x:"3",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2"})),t.createElement("rect",{x:"20",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2",delay:l/4+"ms"})),t.createElement("rect",{x:"37",y:"2",width:"10",height:"10"},t.createElement(p,{atr:"fill-opacity",val:"1;.2;.2",delay:l/2+"ms"}))):""))};u.defaultProps={type:"cycle",intent:"accent",dur:500,size:"sm",stroke:!1,container:!0};var f=t.forwardRef((function(a,l){var s=a.margin,i=a.padding,o=a.className,c=e.__rest(a,["margin","padding","className"]),m=r("flex--wrap",o,n(s,"m"),n(i,"p"));return t.createElement("div",e.__assign({},c,{ref:l,className:m}))}));f.defaultProps={};var g=t.forwardRef((function(a,l){var s=a.margin,i=a.padding,o=a.size,c=a.className,m=e.__rest(a,["margin","padding","size","className"]),p=r("",c,!o&&"col",n(s,"m"),n(i,"p"),function(e){var t="";return e&&("number"==typeof e?t+="col--"+e:(t+=e.sm?" sm__col--"+e.sm:"",t+=e.md?" md__col--"+e.md:"",t+=e.lg?" md__col--"+e.lg:"",t+=e.xl?" xl__col--"+e.xl:"")),t}(o));return t.createElement("div",e.__assign({},m,{ref:l,className:p}))})),v=t.forwardRef((function(a,n){var l=a.isOpen,s=void 0!==l&&l,i=a.intent,o=void 0===i?"accent":i,c=r("menu-toggle",a.className,s?" menu-toggle--open":"");return t.createElement("div",e.__assign({},a,{ref:n,className:c}),t.createElement("div",{className:"menu-toggle__dot bg--"+o}),t.createElement("div",{className:"menu-toggle__dot bg--"+o}),t.createElement("div",{className:"menu-toggle__dot bg--"+o}))})),h=function(r){function a(e){return r.call(this,e)||this}return e.__extends(a,r),a.prototype.componentDidMount=function(){var e=document.documentElement.clientWidth,t=this.node,r=this.props.speed?this.props.speed:3,a=this.props.offset?this.props.offset:0;function n(){var e=t.getBoundingClientRect().bottom-window.innerWidth-a;t.style.backgroundPositionY=Math.round(e/r)+"px"}function l(){var e=t.getBoundingClientRect().bottom-window.innerWidth+a;t.style.backgroundPositionY=-Math.round(e/r)+"px"}e<992?t.style.backgroundPositionY="center":this.props.reverseDirection?(l(),document.addEventListener("scroll",l)):(n(),document.addEventListener("scroll",n))},a.prototype.render=function(){var r=this,a=this.props.image,n=this.props.bgSize?this.props.bgSize:"cover",l=this.props.bgPos?this.props.bgPos:"center",s=this.props.repeat?this.props.repeat:"repeat-y",i={backgroundColor:this.props.backgroundColor,backgroundImage:"url("+a+")",backgroundRepeat:s,backgroundSize:n,backgroundPositionX:l},o=e.__assign(e.__assign({},i),this.props.style);return t.createElement("div",{ref:function(e){return r.node=e},style:o,className:this.props.className},this.props.children)},a}(t.Component);exports.Button=s,exports.CSSParallax=h,exports.Column=g,exports.FlexRow=f,exports.Icon=d,exports.Input=o,exports.InputWrapper=i,exports.Loader=u,exports.MenuToggle=v,exports.PasswordInput=c,exports.Select=m,exports.Switch=p;
