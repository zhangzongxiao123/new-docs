"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(u,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:"2"},i="\ud83d\udda5 \u8f6c\u8d26\u53ca\u6536\u6b3e",s={unversionedId:"use/user-guide/qian-bao-guan-li/transaction",id:"use/user-guide/qian-bao-guan-li/transaction",title:"\ud83d\udda5 \u8f6c\u8d26\u53ca\u6536\u6b3e",description:"\u8f6c\u8d26",source:"@site/docs/use/user-guide/qian-bao-guan-li/transaction.md",sourceDirName:"use/user-guide/qian-bao-guan-li",slug:"/use/user-guide/qian-bao-guan-li/transaction",permalink:"/new-docs/zh-Hant/docs/use/user-guide/qian-bao-guan-li/transaction",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"userGuideSidebar",previous:{title:"\ud83c\udfa8 \u8d44\u4ea7\u7ba1\u7406",permalink:"/new-docs/zh-Hant/docs/use/user-guide/qian-bao-guan-li/asset-management"},next:{title:"\ud83c\udfab \u5730\u5740\u7c3f",permalink:"/new-docs/zh-Hant/docs/use/user-guide/qian-bao-guan-li/address-book"}},u={},c=[{value:"<strong>\u8f6c\u8d26</strong>",id:"\u8f6c\u8d26",level:3},{value:"<strong>\u6536\u6b3e</strong>",id:"\u6536\u6b3e",level:3}],l={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u8f6c\u8d26\u53ca\u6536\u6b3e"},"\ud83d\udda5 \u8f6c\u8d26\u53ca\u6536\u6b3e"),(0,a.kt)("h3",{id:"\u8f6c\u8d26"},(0,a.kt)("strong",{parentName:"h3"},"\u8f6c\u8d26")),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5728Token\u754c\u9762\u5de6\u6ed1\u6216\u8005\u70b9\u51fb\u5e01\u79cd\u8be6\u60c5\u8fdb\u5165\u8f6c\u8d26\u754c\u9762\uff0c\u5728\u62e5\u6709\u6743\u9650\u6216\u5b8c\u6210\u5ba1\u6279\u6d41\u7684\u524d\u63d0\u4e0b\uff0c\u9700\u8981\u8f93\u5165\u63a5\u6536\u5730\u5740\u3001\u8f6c\u8d26\u91d1\u989d\u3001\u5907\u6ce8\u3001Gasfee\u8bbe\u7f6e\u7b49\u4fe1\u606f\uff0c\u7136\u540e\u8fdb\u884c\u786e\u8ba4\u5373\u53ef\u5b8c\u6210\u8f6c\u8d26\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5831).Z,width:"797",height:"820"})),(0,a.kt)("h3",{id:"\u6536\u6b3e"},(0,a.kt)("strong",{parentName:"h3"},"\u6536\u6b3e")),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5728Token\u754c\u9762\u5de6\u6ed1\u6216\u8005\u70b9\u51fb\u5e01\u79cd\u8be6\u60c5\u8fdb\u5165\u6536\u6b3e\u754c\u9762\uff0c\u652f\u6301\u5411\u4ed6\u4eba\u63d0\u4f9b\u81ea\u5df1\u7684\u94b1\u5305\u5730\u5740\u6216\u8005\u4e8c\u7ef4\u7801\u7684\u65b9\u5f0f\u8fdb\u884c\u6536\u6b3e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8142).Z,width:"891",height:"935"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://newhuotech.larksuite.com/space/api/box/stream/download/asynccode/?\ncode=MjY2YzQ5YzM2NTlmZGExMDNjZjQ0MmJiYjM3MGI4ZTNfRllPS1Z0SHIwRTE1Wjh4aFVZZUdiZHo3dUl5WlB6N3BfVG9rZW46VnNpVmJQZTdib09LU1p4UloyYXU0aG9Wc0ZjXzE2ODM2NDQyODU6MTY4MzY0Nzg4NV9WNA",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gas \u8d39\u8bf4\u660e")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4ee5\u592a\u574a\u7b49\u9700\u8981\u71c3\u6599\u8d39\u7684\u516c\u94fe\uff0c\u7528\u6237\u9700\u8981\u6d88\u8017 Gas \u8d39\u624d\u80fd\u591f\u8fdb\u884c\u8f6c\u8d26\u7b49\u64cd\u4f5c\u3002\u94b1\u5305\u4f1a\u6839\u636e\u5f53\u524d\u94fe\u7684\u60c5\u51b5\u81ea\u52a8\u4f30\u7b97 Gas \u8d39\u7528\uff0c\u5e76\u63d0\u793a\u7528\u6237\u9700\u8981\u652f\u4ed8\u7684\u8d39\u7528\u3002\u4e0d\u540c\u516c\u94fe\u7684Gas\u6a21\u578b\u53ef\u80fd\u5b58\u5728\u5dee\u5f02\uff0c\u4f8b\u5982ETH\u652f\u6301\u5feb\u901f\u3001\u6807\u51c6\u3001\u6ee1\u8db3\u4e09\u79cd\u57fa\u672c\u7c7b\u578b\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u9009\u62e9\u81ea\u5b9a\u4e49Gasfee\u3002"))}d.isMDXComponent=!0},5831:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (26)-7a570405f24c5983e92e7f1316138fbb.png"},8142:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (65)-4a39ec835aeb83130fd313ed36a87da2.png"}}]);