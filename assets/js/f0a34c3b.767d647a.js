"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,y=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6678:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Restricting study flow - reloading, linear studies, single-use workers and previews",slug:"/Restricting-study-flow.html",sidebar_position:3},l=void 0,u={unversionedId:"Run_your_study/Restricting-study-flow",id:"version-3.6.1/Run_your_study/Restricting-study-flow",isDocsHomePage:!1,title:"Restricting study flow - reloading, linear studies, single-use workers and previews",description:"Intro: Restricting study flow",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Restricting-study-flow.md",sourceDirName:"Run_your_study",slug:"/Restricting-study-flow.html",permalink:"/Restricting-study-flow.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Run_your_study/Restricting-study-flow.md",tags:[],version:"3.6.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1639927541,formattedLastUpdatedAt:"12/19/2021",sidebarPosition:3,frontMatter:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",slug:"/Restricting-study-flow.html",sidebar_position:3},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Run your Study with Worker & Batch Manager",permalink:"/Run-your-Study-with-Worker-and-Batch-Manager.html"},next:{title:"Worker Types",permalink:"/Worker-Types.html"}},p=[{value:"Intro: Restricting study flow",id:"intro-restricting-study-flow",children:[],level:2},{value:"Allow reload or prevent a reload of the same component",id:"allow-reload-or-prevent-a-reload-of-the-same-component",children:[],level:2},{value:"Ensure a linear study flow (since version 3.5.1)",id:"ensure-a-linear-study-flow-since-version-351",children:[],level:2},{value:"Single-use worker links - prevent workers running the study twice",id:"single-use-worker-links---prevent-workers-running-the-study-twice",children:[{value:"Preview Links",id:"preview-links",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro-restricting-study-flow"},"Intro: Restricting study flow"),(0,a.kt)("p",null,"Let's first say what we understand under the ",(0,a.kt)("em",{parentName:"p"},"study flow"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Study flow")," - the intended order of a study's componenents as they are done by the participants running the study. This doesn't necessarily has to be the order of components like they are defined in the study page, meaning going forward one-by-one - instead the study flow can go backwards to a previous component, go in a loop over several components, or reload the current component. It is even possible to decide on-the-fly in your JavaScripts what the next component will be. In general and by default a component can go to any other component including itself. The ",(0,a.kt)("em",{parentName:"p"},"jatos.js")," functions to determine the study flow are ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.startNextComponent"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.startComponentByPos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.startLastComponent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.startComponent"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common restrictions")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You want to prevent a participant from reloading the same component (by using the browser's reload button)."),(0,a.kt)("li",{parentName:"ul"},"You want to ensure a linear study flow and prevent participants from going backwards (by using the browser's back button)."),(0,a.kt)("li",{parentName:"ul"},"You want to prevent a participant from running a study twice."),(0,a.kt)("li",{parentName:"ul"},"You want to allow participants to first have a peek into a study and preview it without actually starting the study and fully committing to it.")),(0,a.kt)("p",null,"... and how to do it:"),(0,a.kt)("h2",{id:"allow-reload-or-prevent-a-reload-of-the-same-component"},"Allow reload or prevent a reload of the same component"),(0,a.kt)("p",null,"A worker can press their browser's reload button and by default JATOS will respond with the same component again: by default, the worker can do a component multiple times. To prevent this each component properties has a checkbox ",(0,a.kt)("em",{parentName:"p"},"Allow reload"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GUI Screenshot",src:n(8300).Z})),(0,a.kt)("p",null,"If you want to prevent this behaviour uncheck the box. If a participant reloads the page, they will see an error message. Then the study run will be finished and put to state FAIL. Since each component properties has their own ",(0,a.kt)("em",{parentName:"p"},"Allow reload")," checkbox it can be defined differently for each component, e.g. reloading is allowed in the introduction but is prohibited in the actual experiment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint"),": You should tell your workers in your study description if you disable reloads, in order to prevent them from accidentally pressing the reload button and failing your study. Consider also adding a warning (e.g. a pop-up) informing participants that they will not be able to continue with the study.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Another hint"),": The (unchecked) ",(0,a.kt)("em",{parentName:"p"},"Allow reload")," and the (checked) ",(0,a.kt)("em",{parentName:"p"},"Linear study flow")," properties can be combined to achieve a strictly increasing study flow."),(0,a.kt)("h2",{id:"ensure-a-linear-study-flow-since-version-351"},"Ensure a linear study flow (since version 3.5.1)"),(0,a.kt)("p",null,"A worker can press their browsers back button and by default JATOS will response with the previous component, the one that was done before by the worker. This might allow a worker to divert from the intended study flow. To prevent this each study properties has a checkbox ",(0,a.kt)("em",{parentName:"p"},"Linear study flow"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Study Properties Screenshot",src:n(5401).Z})),(0,a.kt)("p",null,"If you want to enforce a linear study flow check the box. Then, if a participant tries to go backwards in their browser, they will see an error message instead. The study run will be finished and put to state FAIL."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint"),": You should tell your participants in your study's description if you enforce a linear study flow to prevent them from accidentally pressing the back button and failing your study. Consider also adding a warning (e.g. a pop-up) informing participants that they will not be able to continue with the study.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Another hint"),": If you want to loop over components, un-check this box. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Yet another hint"),": The (unchecked) ",(0,a.kt)("em",{parentName:"p"},"Allow reload")," and the (checked) ",(0,a.kt)("em",{parentName:"p"},"Linear study flow")," properties can be combined to achieve a strictly increasing study flow."),(0,a.kt)("h2",{id:"single-use-worker-links---prevent-workers-running-the-study-twice"},"Single-use worker links - prevent workers running the study twice"),(0,a.kt)("p",null,"Often you want to prevent a participant from running the same study twice. To achieve this use the ",(0,a.kt)("em",{parentName:"p"},"single-use")," workers:  ",(0,a.kt)("em",{parentName:"p"},"Personal Single worker"),", ",(0,a.kt)("em",{parentName:"p"},"General Single worker"),", and the ",(0,a.kt)("em",{parentName:"p"},"MTurk worker"),"."),(0,a.kt)("p",null,"Remember that ",(0,a.kt)("em",{parentName:"p"},"General Single")," links can be used to run a study only once from each browser and each computer, in principle. But if a participant clears their browser cookies, changes browser or sits in front of another computer, they will be able to run the study again."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Worker-Types.html"},"Read more on the different worker types available in JATOS")," "),(0,a.kt)("h3",{id:"preview-links"},"Preview Links"),(0,a.kt)("p",null,"Perhaps you want to allow ",(0,a.kt)("strong",{parentName:"p"},"General Single")," or ",(0,a.kt)("strong",{parentName:"p"},"Personal Single")," workers to have a peek into the study, to preview it, despite restricting them to run the whole study only once. In JATOS you can let these two worker types preview the ",(0,a.kt)("strong",{parentName:"p"},"first")," component of your study (where you could describe what they will have to do, how long it will take, ask for consent, etc). Often, workers see this description and decide that they want to do the study later. "),(0,a.kt)("p",null,"To allow them to do this, activate the checkbox ",(0,a.kt)("strong",{parentName:"p"},"Allow preview")," (this will add a ",(0,a.kt)("inlineCode",{parentName:"p"},"&pre")," to the end of the URL)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GUI Screenshot",src:n(5929).Z})),(0,a.kt)("p",null,"Now your workers can use the link as many times as they want - as long ",(0,a.kt)("strong",{parentName:"p"},"as they don't go further than the first component"),". But once the second component is started, JATOS will restrict access to the study in the usual way as it is for General Single and Personal Single workers. This means that they will get an error if they try to use the link again to access the study."),(0,a.kt)("p",null,"If the Allow preview box is unchecked, JATOS will follow its default behaviour: once a worker clicked on the link - that's it, the study is started and JATOS will not allow a second click on this link."))}c.isMDXComponent=!0},8300:function(e,t,n){t.Z=n.p+"assets/images/component-properties-reload-1e8059fb543f918f96bd4cb18c912f1b.png"},5929:function(e,t,n){t.Z=n.p+"assets/images/preview_general_single_run-db92238b5c099419b279c310e8683b96.png"},5401:function(e,t,n){t.Z=n.p+"assets/images/study-properties-linear-flow-e6a516ad0a0b303d27525e6586330e9e.png"}}]);