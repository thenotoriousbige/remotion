(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2870],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4742:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=t(2122),o=t(9756),i=(t(2784),t(3905)),a={id:"the-fundamentals",title:"The fundamentals"},s={unversionedId:"the-fundamentals",id:"the-fundamentals",isDocsHomePage:!1,title:"The fundamentals",description:"The basic idea behind Remotion is that you get a frame number and blank canvas to render anything you want.",source:"@site/docs/the-fundamentals.md",sourceDirName:".",slug:"/the-fundamentals",permalink:"/docs/the-fundamentals",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/the-fundamentals.md",version:"current",frontMatter:{id:"the-fundamentals",title:"The fundamentals"},sidebar:"someSidebar",previous:{title:"Setup and Installation",permalink:"/docs/"},next:{title:"Animating properties",permalink:"/docs/animating-properties"}},p=[{value:"Video properties",id:"video-properties",children:[]},{value:"Defining compositions",id:"defining-compositions",children:[]}],u={toc:p};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The basic idea behind Remotion is that you get a frame number and blank canvas to render anything you want."),(0,i.kt)("p",null,"You express those ideas using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://reactjs.org"},"React")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useCurrentFrame } from "remotion";\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  return (\n    <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n      The current frame is {frame}.\n    </div>\n  );\n};\n')),(0,i.kt)("h2",{id:"video-properties"},"Video properties"),(0,i.kt)("p",null,"A video has 4 properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," in pixels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"durationInFrames"),": The number of frames which the video is long."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fps"),": The amount of frames per second. The duration in frames divided by FPS results in the duration in seconds.")),(0,i.kt)("p",null,"These properties are variable and you can reuse a component multiple times with different properties. This is why you better not hard-code these properties, but instead derive them from the ",(0,i.kt)("inlineCode",{parentName:"p"},"useVideoConfig")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useVideoConfig } from "remotion";\n\nexport const MyVideo = () => {\n  const { fps, durationInFrames, width, height } = useVideoConfig();\n\n  return (\n    <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n      This video is {durationInFrames / fps} seconds long.\n    </div>\n  );\n};\n')),(0,i.kt)("p",null,"A video's first frame is ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and it's last frame is ",(0,i.kt)("inlineCode",{parentName:"p"},"durationInFrames - 1"),"."),(0,i.kt)("h2",{id:"defining-compositions"},"Defining compositions"),(0,i.kt)("p",null,"Compositions are components with the above mentioned metadata. You can define compositions in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Video.tsx")," to make them show up in the left sidebar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export const RemotionVideo: React.FC = () => {\n  return (\n    <>\n      <Composition\n        id="MyVideo"\n        component={MyVideo}\n        durationInFrames={150}\n        fps={30}\n        width={1920}\n        height={1080}\n      />\n    </>\n  );\n};\n')),(0,i.kt)("p",null,"Remember that if you like, you can register multiple compositions that rely on the same component. For example, if you like to make a square video for social media feeds, and a portrait video for Stories, you can reuse the component and try to make it 'responsive'."))}l.isMDXComponent=!0}}]);