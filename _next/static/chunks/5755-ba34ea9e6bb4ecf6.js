"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5755],{29406:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(28520),i=t.n(r),o=t(85893),s=t(77044),a=t(9669),c=t.n(a),l=t(2174),d=t(79394),u=t(97751),h=t(69413),x=t(19849),f=t(10234),m=t(26723),j=t(4612),g=t(67989),p=t(68527),v=t(67294);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){b(e,n,t[n])}))}return e}function A(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function C(e){var n=e.children,t=e.onChange,r=e.isMenuItem,i=void 0!==r&&r,s=A(e,["children","onChange","isMenuItem"]),a=(0,v.useRef)(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.II,{value:"",type:"file",accept:"image/jpeg,image/png,image/gif,image/webp",ref:a,display:"none",onChange:t}),i?(0,o.jsx)(g.sN,{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.click()},children:(0,o.jsx)(p.xv,{children:n})}):(0,o.jsx)(m.zx,y({variant:"outline"},s,{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.click()},"data-test-id":"file-upload-button",children:n}))]})}function w(e,n,t,r,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(r,i)}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S={headers:{"content-type":"multipart/form-data"}};function O(e){var n,t,r=e.size,a=e.colorScheme,m=e.leftIcon,j=e.fontWeight,g=e.isMenuItem,p=void 0!==g&&g,v=(0,u.CG)(d.oM),b=(0,s.Ge)(),y=b.account,A=b.library,O=(0,u.Uk)(),k=null!==(n=""!==O?O:y)&&void 0!==n?n:"",E=(t=i().mark((function e(n){var t,r,o,s,a,d,u,m,j,g,p,b;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.currentTarget,r=t.value,o=t.files,!(r&&A&&o&&y&&k)){e.next=42;break}if(s=I(o,1),!(+((a=s[0]).size/1024/1024).toFixed(4)>2)){e.next=7;break}return(0,f.C)("error","File cannot exceed 2 Mb"),e.abrupt("return");case 7:return e.prev=7,(0,f.C)("info","Upload avatar started",1e3),d=(0,x.V)()+"",u=a.size+"",m=v.CHAIN_ID+"",e.t0=h.co,e.next=15,a.arrayBuffer();case 15:return e.t1=e.sent,e.next=18,(0,e.t0)(e.t1);case 18:return j=e.sent,g=(0,l.j)({fileName:a.name,fileSize:u,chainId:m,address:k,timestamp:d,hash:j,isUserAvatar:k.toLowerCase()===y.toLowerCase()}),e.next=22,A.getSigner().signMessage(g);case 22:return p=e.sent,(b=new FormData).append("avatar",a),b.append("fileName",a.name),b.append("fileSize",u),b.append("timestamp",d),b.append("userAddress",y),b.append("address",k),b.append("chainId",m),b.append("hash",j),b.append("signature",p),e.next=35,c().post("/api/uploadAvatar",b,S);case 35:201===e.sent.status&&(0,f.C)("success","Success. Reload the Page to see new Avatar"),e.next=42;break;case 39:e.prev=39,e.t2=e.catch(7),(0,f.C)("error","Upload avatar failed");case 42:case"end":return e.stop()}}),e,null,[[7,39]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(e){w(o,r,i,s,a,"next",e)}function a(e){w(o,r,i,s,a,"throw",e)}s(void 0)}))});return(0,o.jsx)(C,{onChange:E,size:null!==r&&void 0!==r?r:"sm",colorScheme:a,leftIcon:m,fontWeight:j,isMenuItem:p,children:"Change Avatar"})}},89342:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(85893),i=t(68527),o=t(67989),s=t(26723),a=t(90156),c=t.n(a),l=t(67294),d=t(39158);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function x(e){var n=e.menuItems,t=e.condition,a=void 0===t||t,u=e.iconSize,x=void 0===u?24:u,f=e.buttonProps;return(0,r.jsx)(d.Z,{condition:a,width:"auto",children:(0,r.jsx)(i.gC,{align:"end",children:(0,r.jsxs)(o.v2,{children:[(0,r.jsx)(o.j2,h({as:s.hU,fontWeight:"bold",icon:(0,r.jsx)(c(),{width:x,height:x})},f)),(0,r.jsx)(o.qy,{children:n.map((function(e,n){return e&&(0,r.jsx)(l.Fragment,{children:e},n)}))})]})})})}},11451:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(85893),i=t(67989),o=t(68527),s=t(26723),a=t(79394),c=t(97751),l=t(41664),d=t(23577);function u(e){var n=e.size,t=e.isIcon,u=e.isMenuItem,h=void 0!==u&&u,x=function(e){return"sm"===e?{buttonSize:e,w:"50%",iconSize:"16"}:"md"===e?{buttonSize:"sm",iconSize:"16"}:"lg"===e?{iconSize:"20"}:"xl"===e?{w:"full",iconSize:"20"}:{buttonSize:"sm",iconSize:"16"}}(n),f=(0,c.CG)(a.oM);return(0,r.jsx)(l.default,{href:"/".concat(f.CHAIN_ID,"/dao/create"),passHref:!0,children:h?(0,r.jsx)(i.sN,{children:(0,r.jsx)(o.xv,{children:"Create a DAO"})}):(0,r.jsx)(s.zx,{variant:"outline",colorScheme:"blue",size:x.buttonSize,w:x.w,leftIcon:t?(0,r.jsx)(d.Z,{size:x.iconSize,weight:"fill"}):void 0,children:"Create a DAO"})})}},85399:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(85893),i=t(26723),o=t(68527),s=t(29311),a=t.n(s),c=t(41664);function l(e){var n=e.link,t=e.title;return(0,r.jsx)(o.kC,{pt:"4",justify:"center",children:(0,r.jsx)(c.default,{href:n,passHref:!0,children:(0,r.jsx)(i.zx,{variant:"link",rightIcon:(0,r.jsx)(a(),{width:"20",height:"20"}),children:t})})})}},96212:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(85893),i=t(38152),o=t(92684),s=t(68527),a=t(54107),c=t(26915),l=t(27484),d=t.n(l),u=t(84110),h=t.n(u),x=t(79394),f=t(77347),m=t(97751),j=t(23282),g=t(67294),p=t(1448),v=t(41731);function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e){var n=e.tableLimit,t=e.daoAddress,l=e.isOnlyActive,u=(0,m.Uk)(t),h=(0,m.CG)(x.oM),y=(0,m.CG)((function(e){return(0,f.jA)(e,u,l)})),A=y.daoVotingList,C=y.isLoading,w=(0,o.Sx)({base:!0,sm:!1}),I=(0,g.useState)(1),S=b(I,1)[0],O=(0,g.useMemo)((function(){var e=n?A.slice(0,n):A;return(0,j.Z)(e,20)}),[A,n]),k=(0,g.useMemo)((function(){return O[S-1]?O[S-1].map((function(e,n){var t=e.statusBadge.title===p.C.votingIsOver||e.statusBadge.title===p.C.activated,o=(0,r.jsx)(s.xv,{fontSize:"14",fontWeight:"semibold",isTruncated:!0,maxW:["full","60%","60%","75%"],children:e.title||"Empty Title"}),a=(0,r.jsx)(s.Ct,{variant:"outline",colorScheme:e.statusBadge.color,children:e.statusBadge.title}),c=!t&&(0,r.jsx)(s.xu,{pr:[0,7],children:(0,r.jsx)(s.xv,{fontSize:"14",fontWeight:"medium",children:"".concat(d().unix(e.timestamp).add(3,"day").fromNow(!0)," left")})}),l=!t&&(0,r.jsxs)(s.Ug,{children:[(0,r.jsx)(s.xv,{fontWeight:{base:"bold",md:"semibold"},fontSize:{base:"xs",md:"sm"},children:"QUORUM:"}),(0,r.jsx)(s.xv,{fontSize:"14",fontWeight:"medium",children:"".concat(e.percentage.toFixed(1),"%")}),(0,r.jsx)(i.D8,{value:e.percentage/e.quorum*100,size:"5",color:e.statusBadge.color})]});return(0,r.jsx)(g.Fragment,{children:(0,r.jsx)(v.Z,{href:"/".concat(h.CHAIN_ID,"/dao/").concat(u,"/votingPage/").concat(e.txHash),boxProps:{px:{base:8,md:12}},children:w?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.xu,{experimental_spaceY:2,py:4,children:[o,(0,r.jsxs)(s.Ug,{justify:"space-between",children:[a,c]})]}),(n!==O[S-1].length-1||C)&&(0,r.jsx)(s.iz,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.xu,{experimental_spaceY:2,py:4,children:[(0,r.jsxs)(s.Ug,{justify:"space-between",children:[o,l]}),(0,r.jsxs)(s.Ug,{justify:"space-between",children:[a,c]})]}),(n!==O[S-1].length-1||C)&&(0,r.jsx)(s.iz,{})]})})},n)})):(0,r.jsx)(r.Fragment,{})}),[u,C,w,h.CHAIN_ID,S,O]);return A&&0!==A.length?(0,r.jsxs)(r.Fragment,{children:[k,C&&void 0===n&&(0,r.jsx)(a.Od,{my:"4",height:16,mx:{base:4,md:6},borderRadius:"lg"}),(0,r.jsx)(c.Z,{chunksLength:O.length,pageState:I})]}):(0,r.jsx)(a.Od,{borderRadius:"lg",height:"80px",mx:{base:4,md:6}})}d().extend(h())},41731:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(85893),i=t(68527),o=t(6998),s=t(41664),a=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){var n=e.children,t=e.href,l=void 0===t?"":t,d=e.isExternal,u=void 0!==d&&d,h=e.onClick,x=e.lightBgColor,f=e.darkBgColor,m=e.boxProps,j=(0,o.Ap)(x,f);return(0,a.useCallback)((function(e){return l?u?(0,r.jsx)(i.rU,{href:l,isExternal:!0,_hover:{textDecor:"none"},children:e}):(0,r.jsx)(s.default,{href:l,passHref:!0,children:e}):e}),[l,u])((0,r.jsx)(i.xu,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({_hover:{bgColor:j,cursor:"pointer"},onClick:h},m,{children:n})))}},45117:function(e,n,t){t.d(n,{Z:function(){return S}});var r=t(85893),i=t(68527),o=t(54107),s=t(79042),a=t(9736),c=t(47430),l=t(35280),d=t(26915),u=t(56371),h=t(79394),x=t(97751),f=t(23282),m=t(67294),j=t(59830),g=t(69413),p=t(24007),v=t(26723),b=t(75877),y=t(41664),A=t(48855),C=t(9369);function w(e){var n=e.token,t=(0,x.Sv)(),o=(0,x.CG)(h.oM),s=(0,m.useMemo)((function(){return(0,g.g9)(n,o)}),[o,n]),c=(0,m.useMemo)((function(){return[{title:"Swap",icon:(0,r.jsx)(A.Z,{size:18,weight:"bold"}),link:"/".concat(o.CHAIN_ID,"/swap?senderAddress=").concat(t,"&tokenAddress=").concat(s?"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":n.address),description:"Exchange token to another currency within one network",isShowing:j.rp.includes(o.CHAIN_ID)},{title:"Bridge",icon:(0,r.jsx)(C.Z,{size:18,weight:"bold"}),link:"/".concat(o.CHAIN_ID,"/bridge?senderAddress=").concat(t,"&tokenAddress=").concat(s?"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":n.address),description:"Exchange token to another currency throughout different networks",isShowing:(0,g.CY)(o)}]}),[s,o,t,n.address]);return(0,r.jsx)(b.Z,{triggerElement:(0,r.jsx)(v.zx,{variant:"outline",colorScheme:"blue",size:"sm",children:"Exchange"}),title:"Exchange",titleElement:(0,r.jsxs)(i.kC,{my:4,children:[(0,r.jsx)(a.Z,{chainId:o.CHAIN_ID,type:"token",size:"lg",address:n.address,name:n.name,logoUrl:n.logoUrl,isLink:!1,hasCopyButton:!s,hasShortenAddress:!s}),(0,r.jsxs)(i.xu,{w:"full",textAlign:{md:"end"},children:[(0,r.jsx)(i.xv,{fontWeight:"semibold",fontSize:"md",children:+n.balance>=100?(0,g.s)(+n.balance):(0,u.commify)((+n.balance).toFixed(8))}),(0,r.jsx)(i.xv,{fontFamily:"mono",opacity:"0.9",fontWeight:"medium",fontSize:"sm",children:(0,g.bT)(+n.balance*n.price)})]})]}),hasDivider:!0,children:c.map((function(e){var n=e.title,t=e.icon,o=e.link,s=e.description;return e.isShowing&&(0,r.jsxs)(i.gC,{w:"full",py:4,textAlign:"center",children:[(0,r.jsx)(i.xu,{w:"90%",alignItems:"center",children:(0,r.jsx)(y.default,{href:o,passHref:!0,children:(0,r.jsx)(v.zx,{size:"sm",w:"full",colorScheme:"blue",variant:"outline",leftIcon:t,children:n})})}),(0,r.jsx)(i.xv,{mt:2,children:s})]},n)}))})}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e){var n=e.tableLimit,t=e.tokenList,v=(0,x.CG)(h.oM),b=(0,x.XA)(),y=(0,x.UT)(),A=(0,m.useState)(1),C=I(A,1)[0],S=j.rp.includes(v.CHAIN_ID),O=(0,m.useMemo)((function(){var e=t.map((function(e){return e})).sort(p.CH),r=n?e.slice(0,n):e;return(0,f.Z)(r,20)}),[n,t]),k=(0,m.useMemo)((function(){if(O[C-1])return O[C-1].map((function(e){var n=(0,g.g9)(e,v),t=(0,r.jsx)(a.Z,{chainId:v.CHAIN_ID,type:"token",size:"lg",address:e.address,name:e.name,logoUrl:e.logoUrl,isLink:!(0,g.g9)(e,v),hasCopyButton:!1,hasExtraInfo:!1,hasShortenAddress:!n}),o=(0,r.jsxs)(i.xu,{w:"full",textAlign:["start","end"],children:[(0,r.jsx)(i.xv,{fontWeight:"semibold",fontSize:"md",children:+e.balance>=100?(0,g.s)(+e.balance):(0,u.commify)((+e.balance).toFixed(8))}),(0,r.jsx)(i.xv,{fontFamily:"mono",opacity:"0.9",fontWeight:"medium",fontSize:"sm",children:b?(0,g.bT)(+e.balance*e.price):(0,g.Am)(+e.balance*e.price)})]}),s=(0,r.jsx)(w,{token:e});return b?(0,r.jsx)(m.Fragment,{children:(0,r.jsx)(l.Z,{boxProps:{my:2},children:(0,r.jsxs)(i.Kq,{direction:["column","row"],py:2,px:[6,4],spacing:1,children:[t,(0,r.jsxs)(i.Kq,{spacing:4,direction:["row","row-reverse"],children:[y&&S&&(0,r.jsx)(i.kC,{align:"center",children:s}),o]})]})})},e.address):(0,r.jsxs)(c.Z,{size:"md",numericCells:y&&S?2:1,children:[t,o,y&&S&&(0,r.jsx)(i.xu,{w:"24",pl:4,children:s})]},e.address)}))}),[y,b,S,v,C,O]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Od,{isLoaded:t.length>0,children:[b?(0,r.jsx)(r.Fragment,{children:k}):(0,r.jsxs)(s.iA,{variant:"unstyled",children:[(0,r.jsx)(s.hr,{children:(0,r.jsxs)(s.Tr,{children:[(0,r.jsx)(s.Th,{children:"Asset"}),(0,r.jsx)(s.Th,{textAlign:"end",children:"Balance"}),y&&S&&(0,r.jsx)(s.Th,{w:"24"})]})}),(0,r.jsx)(s.p3,{children:k})]}),(0,r.jsx)(d.Z,{chunksLength:O.length,pageState:A})]})})}},65755:function(e,n,t){t.d(n,{Z:function(){return he}});var r=t(28520),i=t.n(r),o=t(85893),s=t(68527),a=t(20949),c=t(73465),l=t(9736),d=t(29406),u=t(89342),h=t(56371),x=t(79394),f=t(97751),m=t(36031),j=t(63271),g=t(67294),p=t(59830),v=t(90845),b=t(98126),y=t(71023),A=t(26893),C=t(54107),w=t(11451),I=t(55096),S=t(39158),O=t(92684),k=t(79042),E=t(47430),z=t(35280),D=t(9279),N=t(21046),L=t(51136),P=t(73344),T=t(47398),Z=t(69413),M=function(e,n){return n?"(".concat(e,")"):e};function _(e){var n=e.tokenAmount,t=e.lpAumAsset,r=e.tokenTotalSupply,i=(0,O.Sx)({base:!0,sm:!1}),a=void 0!==n?+(0,h.formatEther)(n):void 0,c=void 0!==a?(0,Z.VK)(a):void 0,l=null!==c&&void 0!==c?c:"DAO does not have LP token yet",d=void 0!==a&&void 0!==c?a>=1e3?(0,Z.s)(a):c:"\u2014";return(0,o.jsxs)(s.kC,{justify:"flex-end",align:"flex-end",textAlign:"end",direction:"column",children:[(0,o.jsxs)(s.Ug,{children:[(0,o.jsx)(T.u,{label:l,placement:"bottom-end",children:(0,o.jsx)(s.xv,{fontWeight:i?"medium":"semibold",children:d})}),i&&"\u2014"!==d&&(0,o.jsx)(s.xv,{fontWeight:"bold",children:void 0!==t?" LP":" GT"})]}),!i&&(0,o.jsxs)(o.Fragment,{children:[void 0!==t&&(0,o.jsx)(s.xv,{textColor:"gray",children:M((0,Z.bT)(t),!1)}),void 0!==a&&void 0!==r&&0!==r&&(0,o.jsx)(s.xv,{textColor:"gray",children:M((0,Z.mg)(a/r*100+"",2)+"%",!1)})]})]})}function U(){var e=(0,f.Sv)(),n=(0,O.Sx)({base:!0,sm:!1}),t=(0,f.TL)(),r=(0,f.CG)(x.oM),i=(0,f.UT)(),a=(0,f.CG)(b.PN),c=a.profileDaos,d=a.isLoading,u=(0,f.CG)(A.EG),m=u.userDaos,j=u.isLoading,p=(0,g.useMemo)((function(){return i?[m,j]:[c,d]}),[i,d,j,c,m]),v=p[0],w=p[1],I=(0,f.CG)((function(n){return(0,y.vR)(n,e,r.CHAIN_ID)})),S=I.userBalance,T=I.isLoading,Z=(0,f.CG)((function(e){return(0,L.UN)(e)})).supplements,M=(0,P.Yk)({chainId:r.CHAIN_ID,addresses:v.map((function(e){return e.dao.toLowerCase()}))}).data,U=null===M||void 0===M?void 0:M.aums;(0,g.useEffect)((function(){if(!w&&v.length>0){var e=v.map((function(e){return[e.dao,e.lp]})).flat().filter((function(e){return e!==D.d}));t((0,L.sc)({tokensAddresses:e,network:r}))}}),[v,t,w,r]);var G=(0,g.useMemo)((function(){return S.length>0?S.map((function(e,t){var i,a,c=e.daoAddress,d=e.gtBalance,u=e.lpBalance,x=v.find((function(e){return e.dao===c}));if(x){var f,m=null!==(f=U&&U[c.toLowerCase()])&&void 0!==f?f:0,j=x.dao,p=x.lp,b=p!==D.d,y=null===(i=Z.find((function(e){var n=e.tokenAddress;return j===n})))||void 0===i?void 0:i.totalSupply,A=null===(a=Z.find((function(e){var n=e.tokenAddress;return p===n})))||void 0===a?void 0:a.totalSupply,C=+(0,h.formatEther)(y||N._Y.toHexString()),w=+(0,h.formatEther)(A||N._Y.toHexString()),I=+(0,h.formatEther)(u),S=m>0&&I>0&&w>0?I/w*m:void 0,O=(0,o.jsx)(l.Z,{chainId:r.CHAIN_ID,type:"dao",address:c,size:"md",name:null===x||void 0===x?void 0:x.daoName}),k=(0,o.jsx)(_,{tokenAmount:d,tokenTotalSupply:C}),L=(0,o.jsx)(_,{tokenAmount:b?u:void 0,lpAumAsset:S});return n?(0,o.jsx)(g.Fragment,{children:(0,o.jsx)(z.Z,{boxProps:{my:2,overflowX:"scroll"},children:(0,o.jsxs)(s.Ug,{justify:"space-between",p:2,children:[O,(0,o.jsxs)(s.xu,{children:[k,L]})]})})},t):(0,o.jsxs)(E.Z,{size:"md",numericCells:2,heigth:"58px",children:[O,k,L]},t)}})):(0,o.jsx)(o.Fragment,{})}),[S,v,U,Z,r.CHAIN_ID,n]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(C.Od,{isLoaded:!T&&!w,children:n?(0,o.jsx)(o.Fragment,{children:G}):(0,o.jsx)(s.xu,{overflowX:"auto",children:(0,o.jsxs)(k.iA,{variant:"unstyled",children:[(0,o.jsx)(k.hr,{children:(0,o.jsxs)(k.Tr,{children:[(0,o.jsx)(k.Th,{children:"DAO"}),(0,o.jsx)(k.Th,{textAlign:"end",children:"GT"}),(0,o.jsx)(k.Th,{textAlign:"end",children:"LP"})]})}),(0,o.jsx)(k.p3,{children:G})]})})})})}function G(){var e=(0,f.Sv)(),n=(0,f.UT)(),t=(0,f.CG)(x.oM),r=(0,f.CG)(b.PN),i=r.profileDaos,a=r.isLoading,c=(0,f.CG)(A.EG),l=c.userDaos,d=c.isLoading,u=(0,g.useMemo)((function(){return n?[l,d]:[i,a]}),[n,a,d,i,l]),h=u[0],m=u[1],j=(0,f.CG)((function(n){return(0,y.vR)(n,e,t.CHAIN_ID)})),p=j.userBalance,v=j.isLoading;return(0,o.jsx)(C.Od,{isLoaded:!m&&!v,borderRadius:"lg",children:(0,o.jsxs)(I.Z,{children:[(0,o.jsxs)(s.Ug,{justify:"space-between",children:[(0,o.jsx)(s.xv,{fontWeight:"semibold",fontSize:{base:"md",md:"lg"},mb:"2",children:"".concat(n?"My":"Profile"," DAO Tokens")}),(0,o.jsx)(S.Z,{condition:n&&0==h.length,width:"auto",children:(0,o.jsx)(w.Z,{size:"md",isIcon:!0})})]}),h.length&&p.length?(0,o.jsx)(U,{}):(0,o.jsx)(s.kC,{flexDirection:"column",align:"center",children:(0,o.jsx)(s.xu,{pt:"2",pb:"6",children:(0,o.jsx)(s.xv,{fontSize:{base:"sm",md:"md"},textAlign:"center",fontWeight:"bold",children:"".concat(n?"YOU DON'T":"PROFILE DOESN'T"," HAVE ANY DAO")})})})]})})}var F=t(77347),H=t(26723),R=t(56279),W=t.n(R),V=t(97375),B=t(49554),X=t(67989),Y=t(41664);function q(e){var n=e.isMenuItem,t=void 0!==n&&n,r=(0,V.qY)(),i=r.isOpen,a=r.onOpen,c=r.onClose,d=(0,f.CG)(x.oM),u=(0,f.CG)(A.EG),h=u.userDaos,m=u.isLoading,j=(0,f.XA)(),p=(0,g.useMemo)((function(){return h.length>0?t?(0,o.jsx)(X.sN,{onClick:a,children:(0,o.jsx)(s.xv,{children:"Create Voting"})}):(0,o.jsx)(H.zx,{onClick:a,colorScheme:"blue",variant:"outline",size:"sm",leftIcon:(0,o.jsx)(W(),{width:"20",height:"20"}),children:"Create Voting"}):(0,o.jsx)(w.Z,{size:"md",isIcon:!0,isMenuItem:t})}),[t,a,h.length]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.Od,{isLoaded:!m,children:p}),(0,o.jsxs)(B.u_,{isOpen:i,onClose:c,children:[(0,o.jsx)(B.ZA,{}),(0,o.jsxs)(B.hz,{children:[(0,o.jsx)(B.xB,{pb:0,children:"Choose your DAO"}),(0,o.jsx)(B.fe,{children:h.map((function(e,n){return(0,o.jsx)(z.Z,{boxProps:{my:2},children:(0,o.jsxs)(s.Ug,{px:[2,4],py:1,align:"center",justify:"space-between",children:[(0,o.jsx)(l.Z,{chainId:d.CHAIN_ID,type:"dao",size:"md",address:e.dao,name:e.daoName}),(0,o.jsx)(s.xu,{children:(0,o.jsx)(Y.default,{href:"/".concat(d.CHAIN_ID,"/dao/").concat(e.dao,"/createVoting"),passHref:!0,children:(0,o.jsxs)(H.zx,{size:"sm",colorScheme:"blue",variant:"outline",leftIcon:(0,o.jsx)(W(),{width:"16",height:"16"}),"data-test-id":"dao-list-modal-button-".concat(n),children:["Create",!j&&" Voting"]})})})]})},n)}))})]})]})]})}var K=t(96212);function Q(e){var n=e.daos,t=(0,f.XA)(),r=(0,f.CG)(x.oM),i=(0,f.UT)(),a=(0,f.CG)((function(e){return(0,F.EF)(e,n)})).daosWithActiveVoting;return a.length>0?(0,o.jsx)(s.xu,{children:a.map((function(e,n){return(0,o.jsx)(g.Fragment,{children:(0,o.jsxs)(I.Z,{p:0,py:{base:4,md:6},children:[(0,o.jsxs)(s.Ug,{justify:"space-between",px:{base:4,md:6},children:[(0,o.jsx)(s.Ug,{children:(0,o.jsx)(s.xv,{fontWeight:"semibold",fontSize:{base:"md",md:"lg"},children:"".concat(i?"My":"Profile"," Voting")})}),(0,o.jsx)(s.xu,{children:(0,o.jsx)(Y.default,{href:"/".concat(r.CHAIN_ID,"/dao/").concat(e.dao,"/createVoting"),passHref:!0,children:(0,o.jsx)(H.zx,{colorScheme:"blue",variant:"outline",size:"sm",leftIcon:(0,o.jsx)(W(),{width:"20",height:"20"}),children:"Create Voting"})})})]}),(0,o.jsx)(s.xu,{px:{base:4,md:6},py:2,children:(0,o.jsx)(l.Z,{chainId:r.CHAIN_ID,type:"dao",size:"md",address:e.dao,name:e.daoName})}),(0,o.jsx)(K.Z,{daoAddress:e.dao,tableLimit:5,isOnlyActive:!0})]})},n)}))}):(0,o.jsxs)(I.Z,{children:[(0,o.jsxs)(s.Ug,{justify:"space-between",children:[(0,o.jsx)(s.xv,{fontWeight:"semibold",fontSize:{base:"md",md:"lg"},mb:"2",children:"".concat(i?"My":"Profile"," Voting")}),(0,o.jsx)(S.Z,{condition:i,width:"auto",children:(0,o.jsx)(q,{})})]}),(0,o.jsx)(s.xu,{py:"8",children:(0,o.jsx)(s.xv,{fontSize:t?"sm":"md",textAlign:"center",fontWeight:"bold",children:"".concat(i?"YOU DON'T":"PROFILE DOESN'T"," HAVE ACTIVE VOTING")})})]})}function J(){var e=(0,f.CG)(x.oM),n=(0,f.UT)(),t=(0,f.TL)(),r=(0,f.CG)(b.PN),i=r.profileDaos,s=r.isLoading,a=(0,f.CG)(A.EG),c=a.userDaos,l=a.isLoading,d=(0,g.useMemo)((function(){return n?[c,l]:[i,s]}),[n,s,l,i,c]),u=d[0],h=d[1];return(0,g.useEffect)((function(){u.forEach((function(n){var r=n.dao;return t((0,F.Mx)({network:e,daoAddress:r,limit:10}))}))}),[t,e,u]),h?(0,o.jsx)(C.Od,{h:"140px",borderRadius:"lg"}):u.length?(0,o.jsx)(Q,{daos:u}):(0,o.jsx)(o.Fragment,{})}function $(){var e=(0,f.TL)(),n=(0,f.Sv)(),t=(0,f.UT)(),r=(0,f.CG)(x.oM),i=(0,f.CG)(b.PN).profileDaos,a=(0,f.CG)(A.EG).userDaos;return(0,g.useEffect)((function(){e((0,b.pX)({network:r,profileAddress:n}))}),[e,t,r,n]),(0,g.useEffect)((function(){var o=t?a:i;o.length>0&&e((0,y.wX)({daoInfoStructList:o,userAddress:n,network:r}))}),[e,r,i,n,t,a]),(0,o.jsxs)(s.xu,{textAlign:"start",children:[(0,o.jsx)(G,{}),(0,o.jsx)(J,{})]})}var ee=t(74047),ne=t(77793),te=t(85399),re=t(45117);function ie(){var e,n=(0,f.CG)(x.oM),t=(0,f.Sv)(),r=(0,f.UT)(),i=(0,f.CG)((function(e){return(0,ee.a4)(e)})),a=i.isLoading,c=i.isError,l=i.tokenList;return c?(0,o.jsx)(o.Fragment,{}):(0,o.jsxs)(I.Z,{children:[(0,o.jsx)(s.Ug,{mb:"4",justify:"space-between",children:(0,o.jsx)(s.xv,{fontWeight:"semibold",fontSize:{base:"md",md:"lg"},children:"".concat(r?"My":"Profile"," Assets")})}),(0,o.jsx)(C.Od,{isLoaded:!a,borderRadius:"lg",children:(null!==(e=l.length)&&void 0!==e?e:0)<=0?(0,o.jsx)(s.kC,{flexDirection:"column",align:"center",children:(0,o.jsx)(s.xu,{pt:"2",pb:"6",children:(0,o.jsx)(s.xv,{fontSize:{base:"sm",md:"md"},textAlign:"center",fontWeight:"bold",children:"".concat(r?"YOU DON'T":"PROFILE DOESN'T"," HAVE ANY ASSETS")})})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(re.Z,{tableLimit:5,tokenList:null!==l&&void 0!==l?l:[]}),l.length>5&&(0,o.jsx)(te.Z,{link:"/".concat(n.CHAIN_ID,"/profile/").concat(t,"/viewAll/tokens"),title:"View All Assets"})]})})]})}var oe=t(34651),se=t(97458);function ae(){var e,n=(0,f.CG)(x.oM),t=(0,f.Sv)(),r=(0,f.UT)(),i=(0,f.CG)((function(e){return(0,ne.fV)(e)})),a=i.transactionList,c=i.isLoading;return t?(0,o.jsxs)(I.Z,{w:"full",children:[(0,o.jsxs)(s.Ug,{mb:"4",justify:"space-between",children:[(0,o.jsx)(s.xv,{fontWeight:"semibold",fontSize:{base:"md",md:"lg"},children:"".concat(r?"My":"Profile"," Transactions")}),(0,o.jsx)(s.xu,{children:(0,o.jsx)(s.rU,{isExternal:!0,href:"".concat(n.EXPLORER_ADDRESS,"/").concat(null!==(e=n.EXPLORER_ADDRESS_PREFIX)&&void 0!==e?e:"address","/").concat(t),children:(0,o.jsx)(H.zx,{variant:"outline",size:"sm",leftIcon:(0,o.jsx)(oe.Ee,{w:"4",h:"4",src:"/images/networks/".concat(n.EXPLORER_LOGO),alt:n.EXPLORER_NAME+"-logo"}),children:n.EXPLORER_NAME})})})]}),!c&&a.length<=0?(0,o.jsx)(s.kC,{flexDirection:"column",align:"center",children:(0,o.jsx)(s.xu,{pt:"2",pb:"6",children:(0,o.jsx)(s.xv,{fontSize:{base:"sm",md:"md"},textAlign:"center",fontWeight:"bold",children:"".concat(r?"YOU DON'T":"PROFILE DOESN'T"," HAVE ANY TRANSACTIONS")})})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(se.Z,{tableLimit:10}),a.length>10&&(0,o.jsx)(te.Z,{link:"/".concat(n.CHAIN_ID,"/profile/").concat(t,"/viewAll/transactions"),title:"View All Transactions"})]})]}):(0,o.jsx)(o.Fragment,{})}function ce(){var e=(0,f.CG)(x.oM),n=(0,f.TL)(),t=(0,f.Sv)();return(0,g.useEffect)((function(){t&&e&&(n((0,ee.HJ)({address:t,network:e})),n((0,ne.OD)({address:t,network:e})))}),[t,n,e]),(0,o.jsxs)(s.xu,{textAlign:"start",children:[(0,o.jsx)(ie,{}),(0,o.jsx)(ae,{})]})}function le(e,n,t,r,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(r,i)}function de(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){de(e,n,t[n])}))}return e}function he(){var e=(0,f.CG)(x.oM),n=(0,f.XA)(),t=(0,f.Sv)(),r=(0,f.UT)(),b=(0,a.ff)(!0,!1),y=""!==e.DEBANK_CHAIN_ID||p.mX.includes(e.CHAIN_ID),A=y||!e.ADVANCED_VIEWER_ADDRESS,C=(0,g.useMemo)((function(){return{fontSize:"sm",fontWeight:"bold",color:b?"blue.600":"blue.200",_hover:{borderColor:b?"blue.600":"blue.200"},border:"1px",borderColor:b?"white":"gray.800"}}),[b]),w=(0,g.useState)(),I=w[0],S=w[1];(0,g.useEffect)((function(){var e;t&&(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.A)().getBalance(t);case 2:n=e.sent,S(+(0,h.formatUnits)(n,18));case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function s(e){le(o,r,i,s,a,"next",e)}function a(e){le(o,r,i,s,a,"throw",e)}s(void 0)}))})()}),[t]);var O=[(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(d.Z,{isMenuItem:!0,size:"md",colorScheme:"blue"})})],k=[{title:"DAO INTERACTION",icon:(0,o.jsx)(m.Z,{size:20,weight:"fill"}),tab:(0,o.jsx)($,{}),condition:!0},{title:"PROFILE",icon:(0,o.jsx)(j.Z,{size:20,weight:"fill"}),tab:(0,o.jsx)(ce,{}),condition:y}].filter((function(e){return e.condition}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.Ug,{justify:"space-between",w:"full",mb:"4",children:[(0,o.jsx)(l.Z,{chainId:e.CHAIN_ID,type:"account",size:n?"3xl":"4xl",address:t,balance:I,isLink:!1}),r&&(0,o.jsx)(u.Z,{menuItems:O})]}),A?(0,o.jsxs)(c.mQ,{variant:"soft-rounded",isLazy:!0,children:[(0,o.jsx)(c.td,{flexWrap:"wrap",gap:"2",children:k.map((function(e,n){var t=e.title,r=e.icon;return(0,o.jsx)(g.Fragment,{children:(0,o.jsxs)(c.OK,ue({},C,{children:[(0,o.jsx)(s.xu,{mr:"2",children:r}),t]}))},n)}))}),(0,o.jsx)(c.nP,{children:k.map((function(e,n){var t=e.tab;return(0,o.jsx)(c.x4,{p:"0",children:t},n)}))})]}):(0,o.jsx)($,{})]})}}}]);