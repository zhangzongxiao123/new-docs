"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:"7"},i="\ud83c\udf9e \u5de5\u4f5c\u6d41",s={unversionedId:"use/user-guide/wallet-management/workflows",id:"use/user-guide/wallet-management/workflows",title:"\ud83c\udf9e \u5de5\u4f5c\u6d41",description:"Sinohope\u7684\u8f6c\u8d26\u3001\u6dfb\u52a0\u5730\u5740\u7c3f\u5730\u5740\u652f\u6301\u5ba1\u6279\u6d41\u529f\u80fd\uff0c\u53ef\u4ee5\u5e2e\u52a9\u56e2\u961f\u4e2d\u7684\u4e0d\u540c\u6210\u5458\u5171\u540c\u7ba1\u7406\u6570\u5b57\u8d44\u4ea7\u3002",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/use/user-guide/wallet-management/workflows.md",sourceDirName:"use/user-guide/wallet-management",slug:"/use/user-guide/wallet-management/workflows",permalink:"/new-docs/zh-Hant/docs/use/user-guide/wallet-management/workflows",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"userGuideSidebar",previous:{title:"\ud83e\udea7 \u540d\u79f0\u4fee\u6539",permalink:"/new-docs/zh-Hant/docs/use/user-guide/wallet-management/name-modification"},next:{title:"\ud83d\udcdd \u5bfc\u51fa\u4ea4\u6613\u8bb0\u5f55",permalink:"/new-docs/zh-Hant/docs/use/user-guide/wallet-management/export-transaction-records"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u5de5\u4f5c\u6d41"},"\ud83c\udf9e \u5de5\u4f5c\u6d41"),(0,a.kt)("p",null,"Sinohope\u7684\u8f6c\u8d26\u3001\u6dfb\u52a0\u5730\u5740\u7c3f\u5730\u5740\u652f\u6301\u5ba1\u6279\u6d41\u529f\u80fd\uff0c\u53ef\u4ee5\u5e2e\u52a9\u56e2\u961f\u4e2d\u7684\u4e0d\u540c\u6210\u5458\u5171\u540c\u7ba1\u7406\u6570\u5b57\u8d44\u4ea7\u3002"),(0,a.kt)("p",null,"\u7ec4\u7ec7\u6210\u5458\u5728\u63d0\u4ea4\u4e13\u6ce8\u548c\u6dfb\u52a0\u5730\u5740\u7c3f\u529f\u80fd\u540e\uff0c\u7ec4\u7ec7\u521b\u5efa\u8005\u3001\u7ba1\u7406\u5458\u548c\u8be5\u90e8\u95e8\u7684\u534f\u7ba1\u53ef\u4ee5\u5728\u5de5\u4f5c\u6d41\u4e2d\u770b\u5230\u5ba1\u6279\u4fe1\u606f\u3002\u9488\u5bf9\u5177\u4f53\u7684\u5ba1\u6279\u6d41\u53ef\u4ee5\u8fdb\u884c\u540c\u610f\u6216\u8005\u62d2\u7edd\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5614).Z,width:"1280",height:"2769"}),(0,a.kt)("img",{src:r(7526).Z,width:"1280",height:"2769"})))}d.isMDXComponent=!0},7526:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b90589eec6addf7a0934856fef478be-42d3c14beae501eea41c0528c811d3b9.jpg"},5614:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image (69)-2186ccc8065c7a9338adb7046953a49c.png"}}]);