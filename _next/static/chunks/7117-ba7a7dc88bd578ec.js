"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7117],{32095:function(e,r,o){o.d(r,{J2:function(){return E},QH:function(){return F},b:function(){return R},us:function(){return I},yk:function(){return N},DT:function(){return D},Yt:function(){return O},xo:function(){return T}});var n=o(84746),t=o(11604),a=o(38554),i=o.n(a),s=o(15031),l=o(67294),c=o(26450),u=o(75814),d=o(97375),v=o(71874);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}var m=(0,c.kr)({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),y=m[0],h=m[1],g=function(e){if(e)return i()(e,{enter:{visibility:"visible"},exit:{transitionEnd:{visibility:"hidden"}}})},b=(0,u.E)(t.m$.section),k=l.forwardRef((function(e,r){var o=h().isOpen;return l.createElement(b,p({ref:r,variants:g(e.variants)},e,{initial:!1,animate:o?"enter":"exit"}))}));k.defaultProps={variants:{exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}}};var P=["closeOnBlur","closeOnEsc","initialFocusRef","id","returnFocusOnClose","autoFocus","arrowSize","arrowShadowColor","trigger","openDelay","closeDelay","isLazy","lazyBehavior","computePositionOnMount"],x="click",_="hover";var w=["children"],C=["rootProps"],E=function(e){var r=(0,t.jC)("Popover",e),o=(0,t.Lr)(e),n=o.children,a=function(e){void 0===e&&(e={});var r=e,o=r.closeOnBlur,n=void 0===o||o,t=r.closeOnEsc,a=void 0===t||t,i=r.initialFocusRef,u=r.id,m=r.returnFocusOnClose,y=void 0===m||m,h=r.autoFocus,g=void 0===h||h,b=r.arrowSize,k=r.arrowShadowColor,w=r.trigger,C=void 0===w?x:w,E=r.openDelay,T=void 0===E?200:E,N=r.closeDelay,O=void 0===N?200:N,R=r.isLazy,D=r.lazyBehavior,I=void 0===D?"unmount":D,F=r.computePositionOnMount,S=f(r,P),z=(0,d.qY)(e),B=z.isOpen,$=z.onClose,A=z.onOpen,j=z.onToggle,K=(0,l.useRef)(null),L=(0,l.useRef)(null),M=(0,l.useRef)(null),q=(0,l.useRef)(!1),V=(0,l.useRef)(!1);B&&(V.current=!0);var G=(0,l.useState)(!1),H=G[0],U=G[1],W=(0,l.useState)(!1),Y=W[0],J=W[1],Q=(0,d.ZS)(u,"popover-trigger","popover-content","popover-header","popover-body"),Z=Q[0],X=Q[1],ee=Q[2],re=Q[3],oe=(0,v.D)(p({},S,{enabled:B||!!F})),ne=oe.referenceRef,te=oe.getArrowProps,ae=oe.getPopperProps,ie=oe.getArrowInnerProps,se=oe.forceUpdate;(0,d.s9)({enabled:B,ref:L}),(0,d.Ck)(M,{focusRef:L,visible:B,shouldFocus:y&&C===x}),(0,d.Gp)(M,{focusRef:i,visible:B,shouldFocus:g&&C===x});var le=(0,s.VI)({hasBeenSelected:V.current,isLazy:R,lazyBehavior:I,isSelected:B}),ce=(0,l.useCallback)((function(e,r){var o;void 0===e&&(e={}),void 0===r&&(r=null);var t=p({},e,{style:p({},e.style,(o={transformOrigin:v.j.transformOrigin.varRef},o[v.j.arrowSize.var]=b?(0,s.px)(b):void 0,o[v.j.arrowShadowColor.var]=k,o)),ref:(0,c.lq)(M,r),children:le?e.children:null,id:X,tabIndex:-1,role:"dialog",onKeyDown:(0,s.v0)(e.onKeyDown,(function(e){a&&"Escape"===e.key&&$()})),onBlur:(0,s.v0)(e.onBlur,(function(e){var r=(0,s.wN)(e),o=(0,s.r3)(M.current,r),t=(0,s.r3)(L.current,r);B&&n&&!o&&!t&&$()})),"aria-labelledby":H?ee:void 0,"aria-describedby":Y?re:void 0});return C===_&&(t.role="tooltip",t.onMouseEnter=(0,s.v0)(e.onMouseEnter,(function(){q.current=!0})),t.onMouseLeave=(0,s.v0)(e.onMouseLeave,(function(){q.current=!1,setTimeout($,O)}))),t}),[le,X,H,ee,Y,re,C,a,$,B,n,O,k,b]),ue=(0,l.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),ae(p({},e,{style:p({visibility:B?"visible":"hidden"},e.style)}),r)}),[B,ae]),de=(0,l.useCallback)((function(e,r){return void 0===r&&(r=null),p({},e,{ref:(0,c.lq)(r,K,ne)})}),[K,ne]),ve=(0,l.useRef)(),pe=(0,l.useRef)(),fe=(0,l.useCallback)((function(e){null==K.current&&ne(e)}),[ne]),me=(0,l.useCallback)((function(e,r){void 0===e&&(e={}),void 0===r&&(r=null);var o=p({},e,{ref:(0,c.lq)(L,r,fe),id:Z,"aria-haspopup":"dialog","aria-expanded":B,"aria-controls":X});return C===x&&(o.onClick=(0,s.v0)(e.onClick,j)),C===_&&(o.onFocus=(0,s.v0)(e.onFocus,A),o.onBlur=(0,s.v0)(e.onBlur,(function(e){var r=(0,s.wN)(e),o=!(0,s.r3)(M.current,r);B&&n&&o&&$()})),o.onKeyDown=(0,s.v0)(e.onKeyDown,(function(e){"Escape"===e.key&&$()})),o.onMouseEnter=(0,s.v0)(e.onMouseEnter,(function(){q.current=!0,ve.current=window.setTimeout(A,T)})),o.onMouseLeave=(0,s.v0)(e.onMouseLeave,(function(){q.current=!1,ve.current&&(clearTimeout(ve.current),ve.current=void 0),pe.current=window.setTimeout((function(){!1===q.current&&$()}),O)}))),o}),[Z,B,X,C,fe,j,A,n,$,T,O]);(0,l.useEffect)((function(){return function(){ve.current&&clearTimeout(ve.current),pe.current&&clearTimeout(pe.current)}}),[]);var ye=(0,l.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),p({},e,{id:ee,ref:(0,c.lq)(r,(function(e){U(!!e)}))})}),[ee]),he=(0,l.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),p({},e,{id:re,ref:(0,c.lq)(r,(function(e){J(!!e)}))})}),[re]);return{forceUpdate:se,isOpen:B,onClose:$,getAnchorProps:de,getArrowProps:te,getArrowInnerProps:ie,getPopoverPositionerProps:ue,getPopoverProps:ce,getTriggerProps:me,getHeaderProps:ye,getBodyProps:he}}(p({},f(o,w),{direction:(0,t.Fg)().direction}));return l.createElement(y,{value:a},l.createElement(t.Fo,{value:r},(0,s.Pu)(n,{isOpen:a.isOpen,onClose:a.onClose,forceUpdate:a.forceUpdate})))};s.Ts&&(E.displayName="Popover");s.Ts;var T=function(e){var r=l.Children.only(e.children),o=h().getTriggerProps;return l.cloneElement(r,o(r.props,r.ref))};s.Ts&&(T.displayName="PopoverTrigger");var N=(0,t.Gp)((function(e,r){var o=e.rootProps,n=f(e,C),a=h(),i=a.getPopoverProps,c=a.getPopoverPositionerProps,u=(0,t.yK)(),d=p({position:"relative",display:"flex",flexDirection:"column"},u.content);return l.createElement(t.m$.div,p({},c(o),{__css:u.popper,className:"chakra-popover__popper"}),l.createElement(k,p({},i(n,r),{className:(0,s.cx)("chakra-popover__content",e.className),__css:d})))}));s.Ts&&(N.displayName="PopoverContent");var O=(0,t.Gp)((function(e,r){var o=h().getHeaderProps,n=(0,t.yK)();return l.createElement(t.m$.header,p({},o(e,r),{className:(0,s.cx)("chakra-popover__header",e.className),__css:n.header}))}));s.Ts&&(O.displayName="PopoverHeader");var R=(0,t.Gp)((function(e,r){var o=h().getBodyProps,n=(0,t.yK)();return l.createElement(t.m$.div,p({},o(e,r),{className:(0,s.cx)("chakra-popover__body",e.className),__css:n.body}))}));s.Ts&&(R.displayName="PopoverBody");var D=function(e){var r=(0,t.yK)();return l.createElement(t.m$.footer,p({},e,{className:(0,s.cx)("chakra-popover__footer",e.className),__css:r.footer}))};s.Ts&&(D.displayName="PopoverFooter");var I=function(e){var r=h().onClose,o=(0,t.yK)();return l.createElement(n.P,p({size:"sm",onClick:r,className:(0,s.cx)("chakra-popover__close-btn",e.className),__css:o.closeButton},e))};s.Ts&&(I.displayName="PopoverCloseButton");var F=function(e){var r,o=e.bg,n=e.bgColor,a=e.backgroundColor,i=h(),c=i.getArrowProps,u=i.getArrowInnerProps,d=(0,t.yK)(),v=null!=(r=null!=o?o:n)?r:a;return l.createElement(t.m$.div,p({},c(),{className:"chakra-popover__arrow-positioner"}),l.createElement(t.m$.div,p({className:(0,s.cx)("chakra-popover__arrow",e.className)},u(e),{__css:p({},d.arrow,{"--popper-arrow-bg":v?"colors."+v+", "+v:void 0})})))};s.Ts&&(F.displayName="PopoverArrow")},38152:function(e,r,o){o.d(r,{D8:function(){return g},Ex:function(){return _}});var n=o(70917),t=o(11604),a=o(15031),i=o(67294);function s(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var c=(0,n.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),u=(0,n.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),d=(0,n.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),v=(0,n.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function p(e){var r=e.value,o=void 0===r?0:r,n=e.min,t=e.max,i=e.valueText,s=e.getValueText,l=e.isIndeterminate,c=(0,a.Rg)(o,n,t);return{bind:{"data-indeterminate":l?"":void 0,"aria-valuemax":t,"aria-valuemin":n,"aria-valuenow":l?void 0:o,"aria-valuetext":function(){if(null!=o)return(0,a.mf)(s)?s(o,c):i}(),role:"progressbar"},percent:c,value:o}}var f=["size","isIndeterminate"],m=["size","max","min","valueText","getValueText","value","capIsRound","children","thickness","color","trackColor","isIndeterminate"],y=function(e){return i.createElement(t.m$.circle,l({cx:50,cy:50,r:42,fill:"transparent"},e))};a.Ts&&(y.displayName="Circle");var h=function(e){var r=e.size,o=e.isIndeterminate,n=s(e,f);return i.createElement(t.m$.svg,l({viewBox:"0 0 100 100",__css:{width:r,height:r,animation:o?u+" 2s linear infinite":void 0}},n))};a.Ts&&(h.displayName="Shape");var g=function(e){var r,o=e.size,n=void 0===o?"48px":o,u=e.max,d=void 0===u?100:u,v=e.min,f=void 0===v?0:v,g=e.valueText,b=e.getValueText,k=e.value,P=e.capIsRound,x=e.children,_=e.thickness,w=void 0===_?"10px":_,C=e.color,E=void 0===C?"#0078d4":C,T=e.trackColor,N=void 0===T?"#edebe9":T,O=e.isIndeterminate,R=s(e,m),D=p({min:f,max:d,value:k,valueText:g,getValueText:b,isIndeterminate:O}),I=O?void 0:2.64*(null!=(r=D.percent)?r:0),F=(0,a.o8)(I)?void 0:I+" "+(264-I),S=O?{css:{animation:c+" 1.5s linear infinite"}}:{strokeDashoffset:66,strokeDasharray:F,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},z={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:n};return i.createElement(t.m$.div,l({className:"chakra-progress"},D.bind,R,{__css:z}),i.createElement(h,{size:n,isIndeterminate:O},i.createElement(y,{stroke:N,strokeWidth:w,className:"chakra-progress__track"}),i.createElement(y,l({stroke:E,strokeWidth:w,className:"chakra-progress__indicator",strokeLinecap:P?"round":void 0,opacity:0!==D.value||O?void 0:0},S))),x)};a.Ts&&(g.displayName="CircularProgress");var b=(0,t.m$)("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});a.Ts&&(b.displayName="CircularProgressLabel");var k=["min","max","value","isIndeterminate"],P=["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby"];a.Ts;var x=function(e){var r=e.min,o=e.max,n=e.value,a=e.isIndeterminate,c=s(e,k),u=p({value:n,min:r,max:o,isIndeterminate:a}),d=l({height:"100%"},(0,t.yK)().filledTrack);return i.createElement(t.m$.div,l({style:l({width:u.percent+"%"},c.style)},u.bind,c,{__css:d}))},_=function(e){var r,o=(0,t.Lr)(e),n=o.value,a=o.min,c=void 0===a?0:a,u=o.max,p=void 0===u?100:u,f=o.hasStripe,m=o.isAnimated,y=o.children,h=o.borderRadius,g=o.isIndeterminate,b=o["aria-label"],k=o["aria-labelledby"],_=s(o,P),w=(0,t.jC)("Progress",e),C=null!=h?h:null==(r=w.track)?void 0:r.borderRadius,E=l({},!g&&f&&m&&{animation:v+" 1s linear infinite"},g&&{position:"absolute",willChange:"left",minWidth:"50%",animation:d+" 1s ease infinite normal none running"}),T=l({overflow:"hidden",position:"relative"},w.track);return i.createElement(t.m$.div,l({borderRadius:C,__css:T},_),i.createElement(t.Fo,{value:w},i.createElement(x,{"aria-label":b,"aria-labelledby":k,min:c,max:p,value:n,isIndeterminate:g,css:E,borderRadius:C}),y))};a.Ts&&(_.displayName="Progress")}}]);