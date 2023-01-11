"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6708],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const i={id:"paths-mapping",title:"Paths mapping"},a=void 0,p={unversionedId:"getting-started/paths-mapping",id:"version-27.0/getting-started/paths-mapping",title:"Paths mapping",description:'If you use "baseUrl" and "paths" options in your tsconfig file, you should make sure the "moduleNameMapper" option in your Jest config is setup accordingly.',source:"@site/versioned_docs/version-27.0/getting-started/paths-mapping.md",sourceDirName:"getting-started",slug:"/getting-started/paths-mapping",permalink:"/ts-jest/docs/27.0/getting-started/paths-mapping",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/paths-mapping.md",tags:[],version:"27.0",lastUpdatedBy:"Ahn",lastUpdatedAt:1673470602,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{id:"paths-mapping",title:"Paths mapping"},sidebar:"version-27.0-docs",previous:{title:"Options",permalink:"/ts-jest/docs/27.0/getting-started/options"},next:{title:"Version checking",permalink:"/ts-jest/docs/27.0/getting-started/version-checking"}},s={},l=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you use ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html"},'"baseUrl" and "paths" options')," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," file, you should make sure the ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring"},'"moduleNameMapper"')," option in your Jest config is setup accordingly."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," provides a helper to transform the mapping from ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," to Jest config format, but it needs the ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," version of the config file."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("h4",{id:"typescript-config"},"TypeScript config"),(0,o.kt)("p",null,"With the below config in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"jest-config-without-helper"},"Jest config (without helper)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "moduleNameMapper": {\n      "^@App/(.*)$": "<rootDir>/src/$1",\n      "^lib/(.*)$": "<rootDir>/common/$1"\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"jest-config-with-helper"},"Jest config (with helper)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { pathsToModuleNameMapper } = require('ts-jest/utils')\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nconst { compilerOptions } = require('./tsconfig')\n\nmodule.exports = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n")))}u.isMDXComponent=!0}}]);