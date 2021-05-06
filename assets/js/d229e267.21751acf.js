(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5815],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,h=l["".concat(d,".").concat(m)]||l[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=l;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},2174:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(2122),o=t(9756),r=(t(2784),t(3905)),i={id:"dynamic-metadata",title:"Dynamic duration, FPS & dimensions"},s={unversionedId:"dynamic-metadata",id:"dynamic-metadata",isDocsHomePage:!1,title:"Dynamic duration, FPS & dimensions",description:"Change metadata based on input props",source:"@site/docs/dynamic-metadata.md",sourceDirName:".",slug:"/dynamic-metadata",permalink:"/docs/dynamic-metadata",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/dynamic-metadata.md",version:"current",frontMatter:{id:"dynamic-metadata",title:"Dynamic duration, FPS & dimensions"},sidebar:"someSidebar",previous:{title:"Parametrized rendering",permalink:"/docs/parametrized-rendering"},next:{title:"Server-Side Rendering",permalink:"/docs/ssr"}},d=[{value:"Change metadata based on input props",id:"change-metadata-based-on-input-props",children:[]},{value:"Change metadata based on asynchronous information",id:"change-metadata-based-on-asynchronous-information",children:[]},{value:"Change metadata in server-side rendering",id:"change-metadata-in-server-side-rendering",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"change-metadata-based-on-input-props"},"Change metadata based on input props"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available since v2.0.")),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"parametrized-rendering"},"Input props")," you can customize the content of your videos while rendering. But what about if you want to change the duration, frame rate or the dimensions of your video based on input props or asynchronous operations?"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getInputProps()")," method to retrieve the props that you have passed as an input.\nFor example if you have passed ",(0,r.kt)("inlineCode",{parentName:"p"},'--props=\'{"hello": "world"}\'')," as a command line flag, you can read the value in your Remotion project like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const {hello} = getInputProps()\nconsole.log(hello) // "world"\n')),(0,r.kt)("p",null,"You can use this technique to dynamically change the frame rate, dimensions or duration of our video as you render. For example, if you pass ",(0,r.kt)("inlineCode",{parentName:"p"},'--props={"duration": 100}')," during rendering, the video will be 100 frames long if you define your composition as followed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\nimport {getInputProps, Composition} from 'remotion';\n\nconst inputProps = getInputProps()\n\nexport const Index = () => {\n  return (\n    <>\n      <Composition\n        id=\"MyComposition\"\n        component={MyComponent}\n        width={1920}\n        height={1080}\n        fps={30}\n        durationInFrames={inputProps?.duration ?? 20}\n      >\n    </>\n  )\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In the example above, we specified fallback duration for use while you are previewing the video, but you can also pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--props")," during preview!"))),(0,r.kt)("h2",{id:"change-metadata-based-on-asynchronous-information"},"Change metadata based on asynchronous information"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available since v1.5.")),(0,r.kt)("p",null,"Sometimes you need to calculate metadata programmatically in a non-synchronous manner. For example, you have a source video and you want your video to be just as long as the source video. You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-fetching"},(0,r.kt)("inlineCode",{parentName:"a"},"delayRender()"),"/",(0,r.kt)("inlineCode",{parentName:"a"},"continueRender()"))," pattern for this as well!"),(0,r.kt)("p",null,'In this example, we fetch the duration of "Big Buck Bunny" and use it to make our video just that long:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export const Index: React.FC = () => {\n  const [handle] = useState(() => delayRender());\n  const [duration, setDuration] = useState(1);\n\n  useEffect(() => {\n    const video = document.createElement('video');\n    video.src =\n      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';\n\n    video.onloadedmetadata = () => {\n      setDuration(Math.round(video.duration * 30));\n      continueRender(handle);\n    };\n  }, [handle]);\n\n  return (\n    <>\n      <Composition\n        id=\"dynamic-duration\"\n        component={VideoTesting}\n        width={1080}\n        height={1080}\n        fps={30}\n        durationInFrames={duration}\n      />\n    </>\n  )\n}\n")),(0,r.kt)("h2",{id:"change-metadata-in-server-side-rendering"},"Change metadata in server-side rendering"),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"getCompositions()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"renderFrames()")," functions accept an ",(0,r.kt)("inlineCode",{parentName:"p"},"inputProps")," object as a parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"getCompositions(bundled, {\n  inputProps: {\n    custom: 'data'\n  }\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"renderFrames({\n  // ...\n  inputProps: {\n    custom: 'data'\n  }\n})\n")),(0,r.kt)("p",null,"Make sure to pass the parameter to both of these functions, so the input props are available to ",(0,r.kt)("inlineCode",{parentName:"p"},"getInputProps")," during the composition fetching and rendering stage."),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"get-input-props"},(0,r.kt)("inlineCode",{parentName:"a"},"getInputProps()")))))}u.isMDXComponent=!0}}]);