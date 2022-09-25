"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[152],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),l=n(1048),o=n(3609),s=n(1943),p=n(2957);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:f,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[j,N]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=k[f];null!=e&&e!==j&&h.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==j&&(C(t),N(a),null!=f&&w(f,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(4137)),i=n(4259),l=n(425);const o={id:"installation",title:"Installation"},s=void 0,p={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ts-jest/docs/next/getting-started/installation",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedBy:"Ahn",lastUpdatedAt:1664103065,formattedLastUpdatedAt:"Sep 25, 2022",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Contributing",permalink:"/ts-jest/docs/next/contributing"},next:{title:"Presets",permalink:"/ts-jest/docs/next/getting-started/presets"}},c={},u=[{value:"Dependencies",id:"dependencies",level:3},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"Customizing",id:"customizing",level:4}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"You can install ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," and dependencies all at once with one of the following commands."),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jest typescript ts-jest @types/jest\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev jest typescript ts-jest @types/jest\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Tip: If you get an error with the following ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," commands such as ",(0,r.kt)("inlineCode",{parentName:"p"},"npx: command not found"),", you can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"npx XXX")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"node node_modules/.bin/XXX")," from the root of your project.")),(0,r.kt)("h3",{id:"jest-config-file"},"Jest config file"),(0,r.kt)("h4",{id:"creating"},"Creating"),(0,r.kt)("p",null,"By default, Jest can run without any config files, but it will not compile ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," files.\nTo make it transpile TypeScript with ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest"),", we will need to create a configuration file that will tell Jest to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," can create the configuration file for you automatically:"),(0,r.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm",metastring:"tab",tab:!0},"npx ts-jest config:init\n"))),(0,r.kt)(l.Z,{value:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Yarn",metastring:"tab",tab:!0},"yarn ts-jest config:init\n")))),(0,r.kt)("p",null,"This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," files correctly."),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest --init")," command (prefixed with either ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,r.kt)("inlineCode",{parentName:"p"},"no")," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,r.kt)("inlineCode",{parentName:"p"},'preset: "ts-jest"')," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file afterwards."),(0,r.kt)("h4",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"For customizing jest, please follow their ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html"},"official guide online"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be found ",(0,r.kt)("a",{parentName:"p",href:"options"},"here"),"."))}m.isMDXComponent=!0}}]);