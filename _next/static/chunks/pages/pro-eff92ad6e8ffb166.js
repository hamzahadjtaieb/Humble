(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7386],{45479:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pro",function(){return r(43686)}])},41795:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(85893),o=r(70655),i=r(67294);const l={any:0,all:1};function s(e,t,{root:r,margin:n,amount:o="any"}={}){if("undefined"===typeof IntersectionObserver)return()=>{};const i=function(e,t){var r;return"string"===typeof e?t?(null!==(r=t[e])&&void 0!==r||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}(e),s=new WeakMap,a=new IntersectionObserver((e=>{e.forEach((e=>{const r=s.get(e.target);if(e.isIntersecting!==Boolean(r))if(e.isIntersecting){const r=t(e);"function"===typeof r?s.set(e.target,r):a.unobserve(e.target)}else r&&(r(e),s.delete(e.target))}))}),{root:r,rootMargin:n,threshold:"number"===typeof o?o:l[o]});return i.forEach((e=>a.observe(e))),()=>a.disconnect()}function a(e,t){var r=void 0===t?{}:t,n=r.root,l=r.margin,a=r.amount,u=r.once,c=void 0!==u&&u,d=(0,o.CR)((0,i.useState)(!1),2),x=d[0],m=d[1];return(0,i.useEffect)((function(){var t;if(!(!e.current||c&&x)){var r={root:null!==(t=null===n||void 0===n?void 0:n.current)&&void 0!==t?t:void 0,margin:l,amount:"some"===a?"any":a};return s(e.current,(function(){return m(!0),c?void 0:function(){return m(!1)}}),r)}}),[n,e,l,c]),x}var u=r(75814),c=["M161.839 266.5C161.839 188.7 161.139 125 161.139 125C161.139 125 145.539 134.2 127.339 145.4L94.3392 165.7L94.0392 125.1C93.9392 102.8 94.0392 84 94.2392 83.5C94.4392 82.9 110.539 72.9 130.039 61.2L165.339 40H202.139H238.839V224V408H200.339H161.839V266.5Z","M36.1 376.699V345.397L64.8 320.396C80.6 306.615 116.2 275.413 144 251.198C171.8 226.984 197.7 203.754 201.4 199.522C205.7 194.699 209.9 188.596 212.9 182.69C217.4 173.831 217.6 173.142 217.9 163.496C218.6 146.762 214.1 134.36 203.6 123.926C190.3 110.638 168.7 106.209 148.9 112.705C128.4 119.497 114.1 138.297 114.1 158.476V165.858H75H36L36.6 156.31C37.6 141.742 39.8 129.045 43.1 119.398C60.6 67.9187 111.1 37.5033 175 40.161C209.7 41.539 238.1 53.3508 260.6 75.6948C273.6 88.4909 283 103.354 288.7 119.891C299 149.617 297.5 189.777 285.3 213.794C275.7 232.398 266.1 242.044 201.2 298.15C177 319.116 156.6 337.228 156.6 337.228C156.6 337.228 182.5 338.114 226 338.114H296.1V373.057V408H166.1H36.1V376.699Z","M47.6 334.153C64 369.489 102.4 397.245 143.5 403.545C162.4 406.399 183.9 405.021 202.5 399.706C241.7 388.485 275.7 356.398 287.4 319.684C301 276.868 288.8 227.162 257.2 196.65C248.3 188.185 235.8 179.72 225.2 175.192C221 173.421 217.5 171.846 217.5 171.846C217.5 171.846 233.4 155.802 252.4 137.692L287 104.817V70.8591V37H170.5H54V72.434V107.868H123.1H192.2L149.4 142.908C125.8 162.2 105.3 178.933 103.8 180.114L101 182.181L117.5 210.725C126.5 226.375 135 240.253 135 240.253C135 240.253 138 238.777 140.7 237.497C148.6 233.56 155.7 231.887 164.9 231.887C179.6 231.887 189.4 235.627 199.6 244.978C211.9 256.198 216.2 265.943 216.4 282.577C216.5 295.963 214.7 302.164 207.5 312.598C201.4 321.456 191.5 328.936 181.3 332.48C175.7 334.35 172.5 334.744 163.5 334.645C154.1 334.645 151.5 334.252 145.7 331.988C137.2 328.74 129 323.425 124.4 318.208C118.05 310.356 115.21 305.181 112.1 293.896L40.4 312.893C40.4 312.893 43.5 325.295 47.6 334.153Z","M190 380V352H111.5H33V318.4V284.7L90.7 162.4L148.5 40H191.3C225.3 40 233.5 40 233.5 40C233.5 40 207.9 96 177.1 161.3C146.2 226.6 121 280.5 121 280.5C121 280.5 136.5 281 155.5 281H190V236V191H228H266V236V281H282H298V316.5V352H282H266V380V408H228H190V380Z"],d={hidden:{pathLength:0,opacity:0},visible:{pathLength:1,opacity:1}},x={default:{duration:2,ease:"easeInOut"}};function m(e){var t=e.number,r=(0,i.useRef)(null),o=a(r,{once:!0});return t<=0&&t>4?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)("svg",{ref:r,viewBox:"0 0 332 448",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(u.E.path,{d:c[t-1],stroke:"#FF7BFF",strokeWidth:"5",variants:d,initial:"hidden",animate:o?"visible":"",transition:x})})}},43686:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(85893),o=r(68527),i=r(34651),l=[{title:"Problem",description:"Want to create a DAO and don't know how to start? Probably you have a specific request for your DAO but building it on your own can take a long time to research and develop, even with existing DAO builders.",img:"images/pro/pro-problem.svg"},{title:"Solution",description:"With XDAO Pro, you will get the product by contributing your time only to consultation. We provide legal and technical support throughout the creating process and after the launch. Count upon experts.",img:"images/pro/pro-solution.svg"}];function s(){return(0,n.jsx)(o.MI,{columns:[1,1,1,2],spacing:{base:4,md:8},w:"full",children:l.map((function(e,t){return(0,n.jsxs)(o.xu,{h:"full",w:"full",bgColor:"#000",py:{base:"4",md:"6"},px:["8","4","12","8","12"],borderRadius:"3xl",textAlign:"start",children:[(0,n.jsx)(o.xv,{fontSize:{base:"2xl",md:"3xl"},fontWeight:"extrabold",mb:{base:"2",md:"4"},as:"h2",children:e.title}),(0,n.jsxs)(o.Kq,{direction:["column-reverse","row","row","column-reverse","row"],spacing:["0","2","6","0","6"],alignItems:"center",w:"full",children:[(0,n.jsx)(i.Ee,{src:e.img,alt:e.title,boxSize:["40","36","40","64","48"]}),(0,n.jsx)(o.xv,{fontSize:["md","lg","xl","md","xl"],children:e.description})]})]},t)}))})}var a=r(67294),u=r(66606);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}var x=[{title:"We will do all the work after the consultation, considering all your requests.",img:"images/pro/exclusivity/pro-we-do-the-work.svg"},{title:"XDAO provides technical support for your DAO after the launch.",img:"images/pro/exclusivity/pro-tech-support.svg"},{title:"Dependently on your economic model, we provide legal support to your project.",img:"images/pro/exclusivity/pro-legal.svg"},{title:"We can arrange training for your employees on how to manage your DAO.",img:"images/pro/exclusivity/pro-training.svg"}],m=[{title:"Setting up one-of-a-kind modules and connecting them to your existing DAO.",img:"images/pro/exclusivity/pro-modules.svg"},{title:"Creation of a DAO workflow with the connection to different managing tools.",img:"images/pro/exclusivity/pro-workflow.svg"},{title:"Developing personal UI for your DAO.",img:"images/pro/exclusivity/pro-ui.svg"},{title:"Altering your project governance to decentralized.",img:"images/pro/exclusivity/pro-decentralized-governance.svg"}];function p(){var e={h:"full",w:"full",py:{base:"4",md:"6"},px:{base:"8",md:"12"},borderRadius:"3xl"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.xu,{w:"full",textAlign:"left",fontSize:["2xl","3xl","4xl"],pt:{base:"6",md:"10"},px:"5%",bgColor:u.$Z,fontWeight:"extrabold",children:(0,n.jsx)(o.xv,{as:"h2",maxW:["300px","350px","400px"],children:"All you need is an idea. We will do the rest."})}),(0,n.jsx)(o.xu,{w:"full",px:"5%",py:{base:"6",md:"10"},bgColor:u.$Z,children:(0,n.jsx)(o.MI,{columns:[1,2,2,2,4],spacing:{base:4,md:8},w:"full",textAlign:"center",children:x.map((function(t,r){var l=t.title,s=t.img;return(0,a.createElement)(o.xu,d({},e,{bgColor:"#000",key:r,children:(0,n.jsxs)(o.gC,{w:"full",spacing:{base:2,md:4},children:[(0,n.jsx)(i.Ee,{src:s,alt:r.toString(),boxSize:["44","40","48","56","48"]}),(0,n.jsx)(o.xv,{fontSize:["lg","md","lg","xl"],children:l})]})}))}))})}),(0,n.jsx)(o.xu,{w:"full",textAlign:"left",fontSize:["2xl","3xl","4xl"],mt:{base:"6",md:"10"},px:"5%",fontWeight:"extrabold",as:"h2",children:"Creating unique product based on your request."}),(0,n.jsx)(o.xu,{w:"full",px:"5%",pt:{base:"6",md:"10"},children:(0,n.jsx)(o.MI,{columns:[1,2,2,2,4],spacing:{base:4,md:8},w:"full",textAlign:"center",children:m.map((function(t,r){var l=t.title,s=t.img;return(0,a.createElement)(o.xu,d({},e,{bgColor:u.$Z,key:r,children:(0,n.jsxs)(o.gC,{w:"full",spacing:{base:2,md:4},children:[(0,n.jsx)(i.Ee,{src:s,alt:r.toString(),boxSize:["44","40","48","56","48"]}),(0,n.jsx)(o.xv,{fontSize:["lg","md","lg","xl"],children:l})]})}))}))})})]})}var g=r(26723),f=r(9008);function h(){return(0,n.jsx)(o.xu,{bgImage:{base:"images/pro/pro-main-mobile-bg.svg",md:"images/pro/pro-main-bg.svg"},h:"720px",w:"full",bgSize:"cover",bgPosition:"center",align:"center",px:{base:"8%",md:"10%"},children:(0,n.jsxs)(o.kC,{py:{base:"50px",md:"70px"},h:"full",w:"full",flexDirection:"column",justify:"space-between",textAlign:"left",children:[(0,n.jsx)(o.xv,{w:{base:"full",md:"60%"},fontSize:["5xl","6xl","6xl","7xl"],fontWeight:"extrabold",as:"h1",children:"XDAO Pro"}),(0,n.jsxs)(o.Kq,{direction:{base:"column",md:"row-reverse"},spacing:{base:0,md:"10%"},children:[(0,n.jsxs)(o.xu,{w:{base:"full",md:"70%"},mb:{base:"4",md:"0"},alignSelf:"flex-end",children:[(0,n.jsx)(f.default,{children:(0,n.jsx)("script",{async:!0,src:"//embed.typeform.com/next/embed.js"})}),(0,n.jsx)(g.zx,{w:"full",h:{base:10,md:12},size:"sm",variant:"outline",colorScheme:"white",borderColor:"#FFF",textColor:"#FFF",_hover:{textColor:"#0051DC",borderColor:"#0051DC"},"data-tf-popup":"sQjgztHe","data-tf-size":"85","data-tf-iframe-props":"title=XDAO Pro Form","data-tf-medium":"snippet",children:"Fill the Form"})]}),(0,n.jsx)(o.xv,{w:{base:"full",md:"80%"},fontSize:["md","lg","xl","2xl"],children:"XDAO Pro is a consulting service for creating unique DAOs exlusively to client's desires. We help to work out all the specifics of the organization, tokenomics, and the development of additional one-of-a-kind modules."})]})]})})}var b=r(41795),v=[{description:"Fill out our form before booking an advisory, or let our manager help you by filling it right on the consultation."},{description:"Get ready to answer our questions about your DAO. We may need more than one consultation to provide you with the best result."},{description:"We will provide legal and technical support for your DAO, considering the economic model of your project."}];function y(){return(0,n.jsx)(o.MI,{columns:[1,1,1,3],spacing:{base:4,md:8},w:"full",textAlign:"start",children:v.map((function(e,t){return(0,n.jsx)(o.xu,{h:"full",w:"full",bgColor:u.$Z,py:{base:"4",md:"6"},px:["4","8","12","6","8"],borderRadius:"3xl",children:(0,n.jsxs)(o.Ug,{alignItems:"center",spacing:["4","8","12","6","8"],h:"full",children:[(0,n.jsx)(o.xu,{children:(0,n.jsx)(o.xu,{alignItems:"center",w:["64px","56px","64px","72px","64px","72px"],children:(0,n.jsx)(b.Z,{number:t+1})})}),(0,n.jsx)(o.xv,{fontSize:["md","xl","2xl","lg","xl"],children:e.description})]})},t)}))})}var w=r(75814);function C(){return(0,n.jsxs)(o.kC,{flexDir:"column",align:"center",textAlign:"center",mt:"12",children:[(0,n.jsx)(o.xu,{w:"full",children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.xu,{w:"full",px:{base:"5%"},py:{base:"9",md:"10"},my:{base:"3",md:"5"},bgColor:u.$Z,children:(0,n.jsx)(s,{})}),(0,n.jsx)(o.xu,{w:"full",textAlign:"left",fontSize:["2xl","3xl","4xl"],mt:{base:"3",md:"5"},px:"5%",fontWeight:"extrabold",as:"h2",children:"How to get started?"}),(0,n.jsx)(o.xu,{w:"full",my:{base:"6",md:"10"},px:{base:"5%"},children:(0,n.jsx)(y,{})}),(0,n.jsx)(i.Ee,{src:"images/pro/exclusivity/pro-exclusivity.svg",alt:"exclusivity",w:"full",h:"full",mt:{base:"3",md:"5"},pt:{base:"6",md:"10"},px:["5%","5%","10%","15%","20%"],bgColor:u.$Z}),(0,n.jsx)(p,{}),(0,n.jsx)(o.xu,{w:"full",py:{base:"12",md:"20"},justify:"center",children:(0,n.jsxs)(w.E.button,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,n.jsx)(f.default,{children:(0,n.jsx)("script",{async:!0,src:"//embed.typeform.com/next/embed.js"})}),(0,n.jsx)(o.xu,{w:"full",borderRadius:{base:"xl",md:"3xl"},px:4,fontSize:["2xl","3xl","4xl","5xl"],fontWeight:"semibold",bgColor:"#FFF",textColor:"#000",_hover:{textColor:"#005EFF"},"data-tf-popup":"sQjgztHe","data-tf-size":"85","data-tf-iframe-props":"title=XDAO Pro Form","data-tf-medium":"snippet",children:">> Get Consultation <<"})]})})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=45479,e(e.s=t);var t}));var t=e.O();_N_E=t}]);