(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(138)),i={title:"Using legacy Babel transpilation",id:"legacy-babel"},c={unversionedId:"legacy-babel",id:"legacy-babel",isDocsHomePage:!1,title:"Using legacy Babel transpilation",description:"This component is part of Remotion 2.0 which is not yet released. The information on this page might not yet accurately reflect the current state of Remotions API.",source:"@site/docs/legacy-babel-loader.md",slug:"/legacy-babel",permalink:"/docs/legacy-babel",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/legacy-babel-loader.md",version:"current",sidebar:"someSidebar",previous:{title:"Dynamic duration, FPS & dimensions",permalink:"/docs/dynamic-metadata"},next:{title:"CLI options",permalink:"/docs/cli"}},l=[{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This component is part of Remotion 2.0 which is not yet released. The information on this page might not yet accurately reflect the current state of Remotions API."))),Object(o.b)("p",null,"In Remotion 2.0, the traditional transpilation of Javascript and Typescript using the ",Object(o.b)("inlineCode",{parentName:"p"},"babel-loader")," has been replaced by the faster ",Object(o.b)("inlineCode",{parentName:"p"},"esbuild-loader")," by default."),Object(o.b)("p",null,"If you for some reason need to go back to the previous behavior, you may ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"webpack"}),"override the Webpack configuration"),". Remember that overriding the Webpack configuration works reducer-style, where you get the default configuration in a function argument and you return the modified version of your config."),Object(o.b)("p",null,"We provide a compatibility package ",Object(o.b)("inlineCode",{parentName:"p"},"@remotion/babel-loader")," that you can install into your Remotion project and use the function ",Object(o.b)("inlineCode",{parentName:"p"},"replaceLoadersWithBabel()")," to swap out the ESBuild loader with the old Babel one that was in Remotion 1.0"),Object(o.b)("p",null,"This should not be necessary in general, it is encouraged to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/issues/new"}),"report issues")," regarding the new ESBuild loader."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"console"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm i @remotion/babel-loader\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"remotion.config.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {replaceLoadersWithBabel} from '@remotion/babel-loader';\n\nConfig.Bundling.overrideWebpackConfig((currentConfiguration) => {\n  return replaceLoadersWithBabel(currentConfiguration);\n});\n")),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"webpack"}),"Custom Webpack config"))))}p.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);