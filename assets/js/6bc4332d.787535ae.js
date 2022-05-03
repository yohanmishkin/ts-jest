"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4103],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4091:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),s=(n(7294),n(4137)),i=["components"],c={id:"processing",title:"Processing flow"},a=void 0,l={unversionedId:"processing",id:"version-27.1/processing",title:"Processing flow",description:"These are internal technical documents. If you're not a contributor to ts-jest, but simply trying to use the library you'll find nothing of value here",source:"@site/versioned_docs/version-27.1/processing.md",sourceDirName:".",slug:"/processing",permalink:"/ts-jest/docs/27.1/processing",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/processing.md",tags:[],version:"27.1",frontMatter:{id:"processing",title:"Processing flow"},sidebar:"version-27.1-docs",previous:{title:"Introduction",permalink:"/ts-jest/docs/27.1/"},next:{title:"Contributing",permalink:"/ts-jest/docs/27.1/contributing"}},u={},p=[{value:"Jest process",id:"jest-process",level:2},{value:"<code>ts-jest</code> process",id:"ts-jest-process",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"These are internal technical documents. If you're not a contributor to ",(0,s.kt)("inlineCode",{parentName:"em"},"ts-jest"),", but simply trying to use the library you'll find nothing of value here")),(0,s.kt)("h2",{id:"jest-process"},"Jest process"),(0,s.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NP0n4i8m30Hxlq9Td08_81GKbBp2E38n4-HWoKL-Znqo8Q7JdFPqccEnIPJg4hvpIAWR7qPishDImOCUB8C5IPROn_Iwj2034kWPkLs0ROK9Aln0kLetu0td8zpjIBEZj36cfE7829fY0NEPdiW2znn6EGKgM-g3_tuK25or_bslfaK75qcGv71odpsbw91vpUtor5jPlLlGpxeAMpsrcA9z0000",alt:null}),(0,s.kt)("h2",{id:"ts-jest-process"},(0,s.kt)("inlineCode",{parentName:"h2"},"ts-jest")," process"),(0,s.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZLJRYjim47tNLmpqeGaq-O0ijFIrK2XqVq2nHh4sicGqyheB_lYEBeuT9z3goPPcpfmvSwIf3xv18XycGL66ACGfqW-aUAmdE_93Q73_8eJHiAFM3rO1nM3SnUYFRtk8BJhOVI3jnUcDl5iENyJXAmozaX55WM4Kj8ImStulq2cZ2wms5fti47YFO3InXQCwHhf77qsFC0Cv7n62kRIHFy4XAeWU6j_rZ2KKQkDCD4mdOLCg1YbbJK1CdrvRGz7YLFC2x1hPjAZsK-Pbo5jchw3pQc2O-tONf5CJaED0SfKC82A1bUu2XE7T9BwrMrRa9aMkuA37GCm2NIov6qsBWD1XLw5ryDr3qfso_wP-gWrdhKKCqb7w_PbZgxWMTHHPFOwo5iuuowk49DWMM4aCl1OsaDTznR9t4wVyBbMXhavU4GO6yZgndnDkvqLs1VBitrVgAx4WpB8ntuIaO6GLRiUShzYirIHbRzD7cLjfOQ38sd___Ph_ispQXuvdKNhOTj1Yo8N7_D5wdbYgvdKzVqithVFDDGKfx_0BiB8ZijfofiEamo7xELbyBYcJj-UGiqoDiTSRxxIvYCSks7Rpx1R_vPwq-LDtMEs-zl5WklljP-RBCashz-JfvL-kV7r9qd3Fyensuy-yz_mXMaHkfBLKqWz9Id4hlvZnVv-WbeMNEcBuLJ1uMlwwlJGo3MORzEoPMpYQujmKo6wBG-2faUymjia99dxEDqjaQp85XsCTn_h9AZHFY-5MK-J3lm00",alt:null}))}d.isMDXComponent=!0}}]);