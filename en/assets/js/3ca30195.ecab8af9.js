"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(n),g=i,b=l["".concat(c,".").concat(g)]||l[g]||d[g]||s;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:"7"},a="\ud83d\udcbb Web3 Access",o={unversionedId:"use/user-guide/zu-zhi-guan-li/web3-access",id:"use/user-guide/zu-zhi-guan-li/web3-access",title:"\ud83d\udcbb Web3 Access",description:"\u901a\u8fc7Web3 Access\u529f\u80fd\uff0c\u53ef\u4ee5\u8bbf\u95ee\u94fe\u4e0a\u5e94\u7528\u3002",source:"@site/docs/use/user-guide/zu-zhi-guan-li/web3-access.md",sourceDirName:"use/user-guide/zu-zhi-guan-li",slug:"/use/user-guide/zu-zhi-guan-li/web3-access",permalink:"/new-docs/en/docs/use/user-guide/zu-zhi-guan-li/web3-access",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"userGuideSidebar",previous:{title:"\u2693 \u5ba1\u6279\u9608\u503c\u8bbe\u5b9a",permalink:"/new-docs/en/docs/use/user-guide/zu-zhi-guan-li/approval-threshold"},next:{title:"\u94b1\u5305\u7ba1\u7406",permalink:"/new-docs/en/docs/use/user-guide/qian-bao-guan-li/"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...s}=e;return(0,i.kt)(l,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-web3-access"},"\ud83d\udcbb Web3 Access"),(0,i.kt)("p",null,"\u901a\u8fc7Web3 Access\u529f\u80fd\uff0c\u53ef\u4ee5\u8bbf\u95ee\u94fe\u4e0a\u5e94\u7528\u3002"),(0,i.kt)("p",null,"1.\u5728\u4e3b\u754c\u9762\u79cd\u9009\u62e9\u3010\u53d1\u73b0\u3011\u53ef\u8fdb\u5165Web3 Access\u6a21\u5757\uff0cSinohope\u63d0\u4f9b\u4e24\u79cdDapp\u8bbf\u95ee\u65b9\u5f0f\uff1a"),(0,i.kt)("p",null,"1\uff09\u5728\u3010\u53d1\u73b0\u3011\u9875\u9762\u9009\u62e9\u9700\u8981\u8bbf\u95ee\u7684DApp"),(0,i.kt)("p",null,"2\uff09\u76f4\u63a5\u8f93\u5165DApp\u94fe\u63a5\u8fdb\u884c\u8bbf\u95ee"),(0,i.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cDApp\u4e0d\u5c5e\u4e8eSinohope\uff0c\u8bf7\u60a8\u52a1\u5fc5\u786e\u8ba4\u597d\u5176\u5b89\u5168\u6027\u548c\u8bbf\u95ee\u5730\u5740\u518d\u8fdb\u884c\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2294).Z,width:"2070",height:"907"})),(0,i.kt)("p",null,"2.\u8fdb\u5165DApp\u540e\uff0c\u70b9\u51fbDApp\u5185\u8fde\u63a5\u94b1\u5305\u7684\u529f\u80fd\u9009\u9879\u3002Sinohope\u53ef\u901a\u8fc7metamask\u517c\u5bb9\u7684\u63a5\u53e3\u65b9\u5f0f\u8fde\u63a5DApp\uff0c\u5728\u94b1\u5305\u9009\u62e9\u754c\u9762\u70b9\u51fb\u3010Metamask\u3011\u5e76\u5b8c\u6210\u6388\u6743\u540e\u5373\u53ef\u8fde\u63a5DApp\u3002"),(0,i.kt)("div",{align:"left"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9235).Z,width:"835",height:"907"}))),(0,i.kt)("p",null,"3.\u5982\u9700\u5207\u6362\u94b1\u5305/\u7f51\u7edc\uff0c\u53ef\u4ee5\u70b9\u51fbSinohope\u53f3\u4e0b\u89d2\u94b1\u5305\u5730\u5740\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,i.kt)("div",{align:"left"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6055).Z,width:"862",height:"889"}))),(0,i.kt)("p",null,"4.Sinohope  DApp\u4ea4\u6613\u652f\u6301\u201c\u81ea\u5b9a\u4e49\u591a\u4eba\u5ba1\u6279\u201d\uff0c\u53d1\u8d77\u4ea4\u6613\u540e\u4f1a\u81ea\u52a8\u8fdb\u5165\u5ba1\u6279\u6d41\u7a0b\uff0c\u5b8c\u6210\u9608\u503c\u5ba1\u6279\u540e\u5373\u4f1a\u53d1\u8d77\u6267\u884c\u3002"),(0,i.kt)("div",{align:"left"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8534).Z,width:"1229",height:"873"}))))}d.isMDXComponent=!0},2294:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (1)-184c05a96134678aba89e7d4dfd84787.png"},9235:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (87)-cb4fc0af659b3b2f8c140b766d0847e3.png"},6055:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (88)-d6e528b6a535ef42626016c2e09782a1.png"},8534:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (91)-6e6b53a09216b78041a334d73434535b.png"}}]);