"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4070],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={id:"migration",title:"Migration from <=23.10"},i=void 0,s={unversionedId:"migration",id:"version-26.5/migration",title:"Migration from <=23.10",description:"You can use the config:migrate tool of ts-jest CLI if you're coming from an older version to help you migrate your Jest configuration.",source:"@site/versioned_docs/version-26.5/migration.md",sourceDirName:".",slug:"/migration",permalink:"/ts-jest/docs/26.5/migration",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/migration.md",tags:[],version:"26.5",lastUpdatedBy:"Richard Shaffer",lastUpdatedAt:1679079223,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"migration",title:"Migration from <=23.10"},sidebar:"version-26.5-docs",previous:{title:"Babel7 or TypeScript",permalink:"/ts-jest/docs/26.5/babel7-or-ts"},next:{title:"Debugging ts-jest",permalink:"/ts-jest/docs/26.5/debugging"}},l={},c=[{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"NPM",id:"npm-1",level:3},{value:"Yarn",id:"yarn-1",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"config:migrate")," tool of ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," CLI if you're coming from an older version to help you migrate your Jest configuration."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you're using ",(0,o.kt)("inlineCode",{parentName:"em"},"jest.config.js"),":")),(0,o.kt)("h3",{id:"npm"},"NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:migrate jest.config.js\n")),(0,o.kt)("h3",{id:"yarn"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:migrate jest.config.js\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you're using ",(0,o.kt)("inlineCode",{parentName:"em"},"jest")," config property of ",(0,o.kt)("inlineCode",{parentName:"em"},"package.json"),":")),(0,o.kt)("h3",{id:"npm-1"},"NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:migrate package.json\n")),(0,o.kt)("h3",{id:"yarn-1"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:migrate package.json\n")))}u.isMDXComponent=!0}}]);