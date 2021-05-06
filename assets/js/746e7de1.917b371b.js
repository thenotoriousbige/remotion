(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4164],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1291:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(2122),i=t(9756),o=(t(2784),t(3905)),a={id:"parametrized-rendering",title:"Parametrized rendering"},p={unversionedId:"parametrized-rendering",id:"parametrized-rendering",isDocsHomePage:!1,title:"Parametrized rendering",description:"Parametrized rendering is the idea of creating a video template once and then render as many videos as you want with different parameters. Just like in regular React, we use props to reuse and customize components!",source:"@site/docs/parametrized-rendering.md",sourceDirName:".",slug:"/parametrized-rendering",permalink:"/docs/parametrized-rendering",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/parametrized-rendering.md",version:"current",frontMatter:{id:"parametrized-rendering",title:"Parametrized rendering"},sidebar:"someSidebar",previous:{title:"Transparent videos",permalink:"/docs/transparent-videos"},next:{title:"Dynamic duration, FPS & dimensions",permalink:"/docs/dynamic-metadata"}},s=[{value:"Defining accepted props",id:"defining-accepted-props",children:[]},{value:"Define default props",id:"define-default-props",children:[]},{value:"Input props",id:"input-props",children:[{value:"Passing input props in the CLI",id:"passing-input-props-in-the-cli",children:[]},{value:"Passing input props when server rendering",id:"passing-input-props-when-server-rendering",children:[]},{value:"Passing input props in GitHub Actions",id:"passing-input-props-in-github-actions",children:[]},{value:"Retrieve input props",id:"retrieve-input-props",children:[]}]},{value:"You can still use components as normal",id:"you-can-still-use-components-as-normal",children:[]}],l={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Parametrized rendering is the idea of creating a video template once and then render as many videos as you want with different parameters. Just like in regular React, we use props to reuse and customize components!"),(0,o.kt)("h2",{id:"defining-accepted-props"},"Defining accepted props"),(0,o.kt)("p",null,"To define which props your video accepts, simply give your component the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC")," type and pass in a generic argument describing the shape of the props you want to accept."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{2-3}","{2-3}":!0},"export const MyComponent: React.FC<{\n  propOne: string;\n  propTwo: number;\n}> = ({propOne, propTwo}) => {\n  return (\n    <div>props: {propOne}, {propTwo}</div>\n  );\n}\n")),(0,o.kt)("h2",{id:"define-default-props"},"Define default props"),(0,o.kt)("p",null,"When registering the component as a sequence, you can define the default props:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{13-16}","{13-16}":!0},"import {Sequence} from 'remotion';\nimport {MyComponent} from './MyComponent';\n\nexport const Root = () => {\n  return (\n    <>\n      <Sequence\n        id=\"my-video\"\n        width={1080}\n        height={1080}\n        fps={30}\n        component={MyComponent}\n        defaultProps={{\n          propOne: 'Hi',\n          propTwo: 10\n        }}\n      />\n    </>\n  )\n}\n")),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),", you can ensure type safety and avoid errors caused by typos."),(0,o.kt)("h2",{id:"input-props"},"Input props"),(0,o.kt)("p",null,"Input props are props that are passed in externally while rendering that can replace or override the default props"),(0,o.kt)("h3",{id:"passing-input-props-in-the-cli"},"Passing input props in the CLI"),(0,o.kt)("p",null,"When rendering (for example using the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," script defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"), you can override some or all default props by passing a CLI flag. It must be either valid JSON or a path to a file that contains valid JSON. Using this technique, type safety cannot be guaranteed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using inline JSON")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx remotion render src/index.tsx HelloWorld helloworld.mp4 --props=\'{"propOne": "Hi", "propTwo": 10}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using a file path:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx remotion render src/index.tsx HelloWorld helloworld.mp4 --props=./path/to/props.json\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"See also: CLI flags")),(0,o.kt)("h3",{id:"passing-input-props-when-server-rendering"},"Passing input props when server rendering"),(0,o.kt)("p",null,"When server-rendering using ",(0,o.kt)("inlineCode",{parentName:"p"},"renderFrames"),", you can pass props using the ",(0,o.kt)("inlineCode",{parentName:"p"},"inputProps")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{8-10}","{8-10}":!0},"await renderFrames({\n  config: video,\n  webpackBundle: bundled,\n  onStart: () => undefined,\n  onFrameUpdate: (f) => undefined,\n  parallelism: null,\n  outputDir: framesDir,\n  inputProps: {\n    titleText: 'Hello World'\n  },\n  compositionId: 'HelloWorld',\n  imageFormat: 'jpeg'\n});\n")),(0,o.kt)("h3",{id:"passing-input-props-in-github-actions"},"Passing input props in GitHub Actions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/ssr#render-using-github-actions"},"See: Render using GitHub Actions")),(0,o.kt)("p",null,"When using GitHub Actions, you need to adjust the file at ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/render-video.yml")," to make the inputs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow_dispatch")," section manually match the shape of the props your root component accepts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{3,7}","{3,7}":!0},'workflow_dispatch:\n  inputs:\n    titleText:\n      description: "Which text should it say?"\n      required: true\n      default: "Welcome to Remotion"\n    titleColor:\n      description: "Which color should it be in?"\n      required: true\n      default: "black"\n')),(0,o.kt)("h3",{id:"retrieve-input-props"},"Retrieve input props"),(0,o.kt)("p",null,"Input props are passed to the component of your composition directly and you can access as regular React component props."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available since v2.0."),": You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getInputProps()")," function to retrieve props that you have given as an input. This is useful if you need to retrieve the props in a position where you are not inside your component, such as when determining the video duration, dimensions or frame rate."),(0,o.kt)("h2",{id:"you-can-still-use-components-as-normal"},"You can still use components as normal"),(0,o.kt)("p",null,"Even if you have registered a component as a sequence,\nyou can still use it as normal in your videos and pass it's props directly. Default props don't apply in this case."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<MyComponent propOne="hi" propTwo={10} />\n')))}u.isMDXComponent=!0}}]);