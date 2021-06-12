(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7925],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,f=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10279:function(e,n,t){"use strict";var r=t(95318).default,a=t(20862).default;n.Z=void 0;var o=a(t(2784)),i=r(t(80944)),l=r(t(86010)),u=r(t(13693));var c=37,s=39;var d=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,a=e.values,d=e.groupId,m=e.className,p=(0,i.default)(),f=p.tabGroupChoices,g=p.setTabGroupChoices,b=(0,o.useState)(r),v=b[0],h=b[1],x=o.Children.toArray(e.children),y=[];if(null!=d){var w=f[d];null!=w&&w!==v&&a.some((function(e){return e.value===w}))&&h(w)}var C=function(e){var n=e.currentTarget,t=y.indexOf(n),r=a[t].value;h(r),null!=d&&(g(d,r),setTimeout((function(){var e,t,r,a,o,i,l,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u.default.tabItemActive),setTimeout((function(){return n.classList.remove(u.default.tabItemActive)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case s:var r=y.indexOf(e.target)+1;t=y[r]||y[0];break;case c:var a=y.indexOf(e.target)-1;t=y[a]||y[y.length-1]}null==(n=t)||n.focus()};return o.default.createElement("div",{className:"tabs-container"},o.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":t},m)},a.map((function(e){var n=e.value,t=e.label;return o.default.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,l.default)("tabs__item",u.default.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:C,onClick:C},t)}))),n?(0,o.cloneElement)(x.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.default.createElement("div",{className:"margin-vert--md"},x.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))};n.Z=d},79443:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=(0,t(2784).createContext)(void 0);n.default=r},80944:function(e,n,t){"use strict";var r=t(95318).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(2784),o=r(t(79443));var i=function(){var e=(0,a.useContext)(o.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};n.default=i},3363:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r,a=t(22122),o=t(19756),i=(t(2784),t(3905)),l=t(10279),u={id:"webpack",title:"Custom Webpack config"},c={unversionedId:"webpack",id:"webpack",isDocsHomePage:!1,title:"Custom Webpack config",description:"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion.",source:"@site/docs/overwriting-webpack-config.md",sourceDirName:".",slug:"/webpack",permalink:"/docs/webpack",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/overwriting-webpack-config.md",version:"current",frontMatter:{id:"webpack",title:"Custom Webpack config"},sidebar:"someSidebar",previous:{title:"Server-Side Rendering",permalink:"/docs/ssr"},next:{title:"Using legacy Babel transpilation",permalink:"/docs/legacy-babel"}},s=[{value:"Overriding the webpack config",id:"overriding-the-webpack-config",children:[]},{value:"Snippets",id:"snippets",children:[{value:"Enabling MDX support",id:"enabling-mdx-support",children:[]},{value:"Enable SASS/SCSS support",id:"enable-sassscss-support",children:[]},{value:"Use legacy babel loader",id:"use-legacy-babel-loader",children:[]}]},{value:"Customizing configuration file location",id:"customizing-configuration-file-location",children:[]},{value:"See also",id:"see-also",children:[]}],d=(r="TabItem",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),m={toc:s};function p(e){var n=e.components,t=(0,o.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,a.default)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion."),(0,i.mdx)("p",null,"Create a config file called ",(0,i.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")," in the root of your project. As a confirmation, you should get a console message ",(0,i.mdx)("inlineCode",{parentName:"p"},"Applied configuration from [configuration-file]"),"."),(0,i.mdx)("h2",{id:"overriding-the-webpack-config"},"Overriding the webpack config"),(0,i.mdx)("p",null,"Get familiar with the default Webpack configuration which can be ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/blob/main/packages/bundler/src/webpack-config.ts"},"found here"),"."),(0,i.mdx)("p",null,"In your ",(0,i.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")," file, you can call ",(0,i.mdx)("inlineCode",{parentName:"p"},"Config.Bundler.overrideWebpackConfig")," from ",(0,i.mdx)("inlineCode",{parentName:"p"},"remotion"),"."),(0,i.mdx)("p",null,"Overriding the Webpack config uses the reducer pattern - pass in a function that takes as it's argument a Webpack configuration and return a new Webpack configuration."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {Config} from 'remotion';\n\nConfig.Bundling.overrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        // Add more loaders here\n      ],\n    },\n  };\n});\n")),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Using the reducer pattern will help with type safety, give you auto-complete, ensure forwards-compatibility and keep it completely flexible - you can override just one property or pass in a completely new Webpack configuration."))),(0,i.mdx)("h2",{id:"snippets"},"Snippets"),(0,i.mdx)("h3",{id:"enabling-mdx-support"},"Enabling MDX support"),(0,i.mdx)("p",null,"The following ",(0,i.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")," file shows how to enable support for MDX. Installation of ",(0,i.mdx)("inlineCode",{parentName:"p"},"mdx-loader babel-loader @babel/preset-env @babel/preset-react")," is required."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"Config.Bundling.overrideWebpackConfig((currentConfiguration) => {\n    return {\n        ...currentConfiguration,\n        module: {\n            ...currentConfiguration.module,\n            rules: [\n                ...(currentConfiguration.module?.rules\n                    ? currentConfiguration.module.rules\n                    : []),\n                {\n                    test: /\\.mdx?$/,\n                    use: [\n                        {\n                            loader: 'babel-loader',\n                            options: {\n                                presets: [\n                                    '@babel/preset-env',\n                                    [\n                                        '@babel/preset-react',\n                                        {\n                                            runtime: 'automatic',\n                                        },\n                                    ],\n                                ],\n                            },\n                        },\n                        'mdx-loader',\n                    ],\n                },\n            ],\n        },\n    };\n});\n\n")),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Create a file which contains ",(0,i.mdx)("inlineCode",{parentName:"p"},"declare module '*.mdx';")," in your project to fix a TypeScript error showing up."))),(0,i.mdx)("h3",{id:"enable-sassscss-support"},"Enable SASS/SCSS support"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install the following dependencies:")),(0,i.mdx)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.mdx)(d,{value:"npm",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm i sass sass-loader\n"))),(0,i.mdx)(d,{value:"yarn",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn add sass sass-loader\n")))),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Add the following to your ",(0,i.mdx)("a",{parentName:"li",href:"/docs/config"},(0,i.mdx)("inlineCode",{parentName:"a"},"remotion.config.ts"))," file:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"Config.Bundling.overrideWebpackConfig((currentConfiguration) => {\n    return {\n        ...currentConfiguration,\n        module: {\n            ...currentConfiguration.module,\n            rules: [\n                ...(currentConfiguration.module?.rules\n                    ? currentConfiguration.module.rules\n                    : []),\n                {\n                    test: /\\.s[ac]ss$/i,\n                    use: [\n                        {\n                            loader: 'style-loader',\n                        },\n                        {\n                            loader: 'css-loader',\n                        },\n                        {\n                            loader: 'sass-loader',\n                            options: {\n                                sourceMap: true,\n                            },\n                        },\n                    ],\n                },\n            ],\n        },\n    };\n});\n")),(0,i.mdx)("ol",{start:3},(0,i.mdx)("li",{parentName:"ol"},"Restart the preview server.")),(0,i.mdx)("h3",{id:"use-legacy-babel-loader"},"Use legacy babel loader"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"legacy-babel"},"Using legacy Babel transpilation"),"."),(0,i.mdx)("h2",{id:"customizing-configuration-file-location"},"Customizing configuration file location"),(0,i.mdx)("p",null,"You can pass a ",(0,i.mdx)("inlineCode",{parentName:"p"},"--config")," option to the command line to specify a custom location for your configuration file."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/config"},"Configuration file"))))}p.isMDXComponent=!0},86010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.r(n),t.d(n,{default:function(){return a}})},13693:function(e,n,t){"use strict";t.r(n),n.default={tabItem:"tabItem_1uMI",tabItemActive:"tabItemActive_2DSg",blink:"blink_XB8L"}}}]);