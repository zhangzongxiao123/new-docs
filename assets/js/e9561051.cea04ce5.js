"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},s="\u26fd Transaction Acceleration and Cancellation",c={unversionedId:"use/user-guide/wallet-management/accelerate-and-cancel-transactions",id:"use/user-guide/wallet-management/accelerate-and-cancel-transactions",title:"\u26fd Transaction Acceleration and Cancellation",description:"During times of blockchain network congestion, transactions can remain in a pending state and might not complete. Some cryptocurrency transactions might even be temporarily halted during network congestion. If there's a high volume of transactions waiting to be confirmed on-chain, your transaction could be delayed for hours or even days.",source:"@site/docs/use/user-guide/wallet-management/accelerate-and-cancel-transactions.md",sourceDirName:"use/user-guide/wallet-management",slug:"/use/user-guide/wallet-management/accelerate-and-cancel-transactions",permalink:"/new-docs/docs/use/user-guide/wallet-management/accelerate-and-cancel-transactions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"userGuideSidebar",previous:{title:"\ud83d\udd04 \\[App Update] V1.1.2",permalink:"/new-docs/docs/use/user-guide/updates/"},next:{title:"\ud83c\udfab Address Book",permalink:"/new-docs/docs/use/user-guide/wallet-management/address-book"}},i={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-transaction-acceleration-and-cancellation"},"\u26fd Transaction Acceleration and Cancellation"),(0,r.kt)("p",null,"During times of blockchain network congestion, transactions can remain in a pending state and might not complete. Some cryptocurrency transactions might even be temporarily halted during network congestion. If there's a high volume of transactions waiting to be confirmed on-chain, your transaction could be delayed for hours or even days."),(0,r.kt)("p",null,"Pending transactions can sometimes fail due to various reasons, including low gas fees. Although Ethereum transactions cannot be outright canceled, there are steps you can take to expedite the process. SINOHOPE provides transaction acceleration and cancellation options to address such scenarios:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transaction Acceleration:")),(0,r.kt)("p",null,'Initiating a new transaction with the same "From" address, "To" address, token type, and quantity as the pending transaction can speed up the process. By default, you can adjust the Gas mode to "Fast," or even set a higher Gas value. Both transactions should use the same Nonce value, resulting in one successful transaction and the other one failing.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(767).Z,width:"393",height:"851"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Canceling a Transaction:")),(0,r.kt)("p",null,'To cancel a transaction, you can initiate a new transaction with the same "From" address and "To" address, but set the amount of the token to 0. Set the Gas mode to "Fast" as well. Just like the previous methods, the cancellation transaction and the pending transaction should use the same Nonce value. This will result in one successful transaction (cancellation) and the other one failing (the pending transaction).'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5500).Z,width:"393",height:"851"})))}p.isMDXComponent=!0},767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (22)-442a51de2a9008ee72f500b83c22a6aa.png"},5500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (49)-e7602655e9c972c47bcacfa77f50a1c0.png"}}]);