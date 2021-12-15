"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3241],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,m=p["".concat(l,".").concat(c)]||p[c]||h[c]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6662:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Tips & Tricks",slug:"/Tips-and-Tricks.html",sidebar_position:12},l=void 0,u={unversionedId:"Run your study/Tips-and-Tricks",id:"Run your study/Tips-and-Tricks",isDocsHomePage:!1,title:"Tips & Tricks",description:"Batch and Group Session do not work on Windows without HTTPS",source:"@site/docs/Run your study/Tips-and-Tricks.md",sourceDirName:"Run your study",slug:"/Tips-and-Tricks.html",permalink:"/./Tips-and-Tricks.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Run your study/Tips-and-Tricks.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1639557440,formattedLastUpdatedAt:"12/15/2021",sidebarPosition:12,frontMatter:{title:"Tips & Tricks",slug:"/Tips-and-Tricks.html",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Study Log",permalink:"/./Study-Log.html"},next:{title:"Administration",permalink:"/./Administration.html"}},d=[{value:"Batch and Group Session do not work on Windows without HTTPS",id:"batch-and-group-session-do-not-work-on-windows-without-https",children:[],level:3},{value:"Run up to 10 studies in the same browser at the same time",id:"run-up-to-10-studies-in-the-same-browser-at-the-same-time",children:[],level:3},{value:"Imitate a run from Mechanical Turk",id:"imitate-a-run-from-mechanical-turk",children:[],level:3},{value:"Lock your studies before running them",id:"lock-your-studies-before-running-them",children:[],level:3},{value:"Do a General Single Run more than once in the same browser",id:"do-a-general-single-run-more-than-once-in-the-same-browser",children:[],level:3},{value:"Continue an abandoned study",id:"continue-an-abandoned-study",children:[],level:3},{value:"Abort study and keep a message",id:"abort-study-and-keep-a-message",children:[],level:3},{value:"How to let a Personal Single Worker redo his study?",id:"how-to-let-a-personal-single-worker-redo-his-study",children:[],level:3},{value:"Simulate slow network",id:"simulate-slow-network",children:[],level:3},{value:"Personal/General Single links seem not to work when distributed via social networks",id:"personalgeneral-single-links-seem-not-to-work-when-distributed-via-social-networks",children:[],level:3}],h={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"batch-and-group-session-do-not-work-on-windows-without-https"},"Batch and Group Session do not work on Windows without HTTPS"),(0,a.kt)("p",null,"The Batch and Group Session rely on WebSockets. Sometimes (rarely) a virus scanner prohibits unencryped WebSockets. This is only a problem on Windows,but not on Mac OS or Linux and only with certain virus scanner programs. If this happens you will see an error message in your brower's console: ",(0,a.kt)("em",{parentName:"p"},"Batch channel closed unexpectedly"),". To solve this you can either turn on HTTPS on your JATOS server (recommended) or turn off the virus scranner on (all) your participants computers."),(0,a.kt)("h3",{id:"run-up-to-10-studies-in-the-same-browser-at-the-same-time"},"Run up to 10 studies in the same browser at the same time"),(0,a.kt)("p",null,'When a participant runs a study they usually run only one at any given time. For them it\'s not necessary to run more than one study in parallel in the same browser. But during development of a study it can be an immensely useful feature especially if you are using the Batch Session or develop a group study. You can run the study in up to 10 tabs in the same browser with any worker that pleases you and all these 10 "different" workers can interact with each other. If more than 10 studies run in the same browser in parallel the oldest study is finished automatically. If you want to even more worker in parallel you can always use a different browsers: each other browser adds 10 new possible parallel-running workers.'),(0,a.kt)("h3",{id:"imitate-a-run-from-mechanical-turk"},"Imitate a run from Mechanical Turk"),(0,a.kt)("p",null,"You should always test your study before posting it anywhere. Testing that your study runs via a simple link is easy: just generate the link, start the study and run once through it.\nTesting studies posted in MTurk is especially cumbersome, because you should make sure that the confirmation codes are correctly displayed when the study is over. The standard way to test this is to create a study in MTurk's ",(0,a.kt)("a",{parentName:"p",href:"https://requester.mturk.com/developer/sandbox"},"Sandbox"),". JATOS offers a way to emulate MTurk, without having to set up anything in the sandbox. Here's how."),(0,a.kt)("p",null,"If you think about it, MTurk simply calls a JATOS URL. The URL to start a study is normally ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-jatos-server/publix/study-id/start")," (where ",(0,a.kt)("inlineCode",{parentName:"p"},"study-id")," is a placeholder for the ID of the study you want to run). Two additional variables in the URL's query string tell JATOS that this request comes from MTurk (and that it should display the confirmation code when the study is over): ",(0,a.kt)("inlineCode",{parentName:"p"},"workerId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assignmentId"),". Both pieces of information are normally generated by MTurk; but they can be any arbitrary string. The only constraint is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"workerId")," does not already exist within JATOS. (Think of it this way: Because a MTurk worker can run a study only once, the same ",(0,a.kt)("inlineCode",{parentName:"p"},"workerId")," can be used only once in JATOS.)"),(0,a.kt)("p",null,"Here are some concrete examples:"),(0,a.kt)("p",null,"To run the study with ID 4 and batch with ID 2 with an ",(0,a.kt)("strong",{parentName:"p"},"MTurk")," worker on a local JATOS use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://localhost:9000/publix/4/start?batchId=2&workerId=123456&assignmentId=abcdef\n")),(0,a.kt)("p",null,"You can use any arbitrary value in the query strings ",(0,a.kt)("inlineCode",{parentName:"p"},"workerId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assignmentId")," (in this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"workerId = 12345")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assignmentId = abcdef"),")."),(0,a.kt)("p",null,"To imitate a run from ",(0,a.kt)("strong",{parentName:"p"},"MTurk's Sandbox")," additionally set ",(0,a.kt)("inlineCode",{parentName:"p"},"turkSubmitTo")," to the value 'sandbox':"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://localhost:9000/publix/4/start?batchId=2&workerId=123456&assignmentId=abcdef&turkSubmitTo=sandbox\n")),(0,a.kt)("h3",{id:"lock-your-studies-before-running-them"},"Lock your studies before running them"),(0,a.kt)("p",null,"Each Study bar has a button that toggles between the  'Unlocked' and 'Locked' states. Locking a study prevents changes to its (or any of its components') properties, change the order of components, etc. "),(0,a.kt)("p",null,"![](/img/Screen Shot 2015-04-27 at 16.25.55.png)"),(0,a.kt)("h3",{id:"do-a-general-single-run-more-than-once-in-the-same-browser"},"Do a General Single Run more than once in the same browser"),(0,a.kt)("p",null,"The problem here is that a General Single Run is intended to work only once in the same browser. Although this is a feature to limit participants doing the same study twice, it can be a hassle for you as a study developer who just want to try out the General Single Run a second time. Luckily there is an easy way around: Since for a General Single Run all studies that the worker already participated in are stored in a browser cookie, it can be easily removed. Just ",(0,a.kt)("strong",{parentName:"p"},"remove the cookie with the name JATOS_GENERALSINGLE_UUIDS")," in your browser. You can find this cookie in every webpage hosted by a JATOS server. If it doesn't exist you probably never did a General Single run yet."),(0,a.kt)("h3",{id:"continue-an-abandoned-study"},"Continue an abandoned study"),(0,a.kt)("p",null,"Sometimes workers leave in the middle of a study. Maybe their internet connection was down, maybe they just left for the next pub and closed the browser tab. Suppose they now want to continue from where they left it. Using the initial run link will not do what they want: it will either start a new study run, or give an error message, depending on the worker type. "),(0,a.kt)("p",null,"But there is a way (you'll need to send the worker a new link). "),(0,a.kt)("p",null,"You'll need three IDs: 1) ",(0,a.kt)("em",{parentName:"p"},"study ID"),", 2) ",(0,a.kt)("em",{parentName:"p"},"component ID")," of the component from where to restart, and 3) the ",(0,a.kt)("em",{parentName:"p"},"study result ID"),". All three IDs are quite easy to get from JATOS' GUI. The component ID can be found in the component table of the study. The study result ID is shown in the study result table. The study ID is part of the URL of every study view, e.g. if the URL of the study view is ",(0,a.kt)("a",{parentName:"p",href:"https://cortex.jatos.org/jatos/19"},"https://cortex.jatos.org/jatos/19")," then the study ID is 19."),(0,a.kt)("p",null,"Then the worker who abandoned the study can continue it with the link: ht",(0,a.kt)("span",null,"tps://"),"my-domain-name/publix/<",(0,a.kt)("em",{parentName:"p"},"study ID"),">","/\\<",(0,a.kt)("em",{parentName:"p"},"component ID"),">","/start?srid=\\<",(0,a.kt)("em",{parentName:"p"},"study result ID"),">","."),(0,a.kt)("p",null,"E.g. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"study ID: ",(0,a.kt)("inlineCode",{parentName:"p"},"31"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"component ID: ",(0,a.kt)("inlineCode",{parentName:"p"},"167"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"study result ID: ",(0,a.kt)("inlineCode",{parentName:"p"},"816"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"domain name and protocol is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://cortex.jatos.org")),(0,a.kt)("p",{parentName:"li"},"Then the URL is: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://cortex.jatos.org/publix/31/167/start?srid=816")))),(0,a.kt)("p",null,"But there is a catch! This works only under three conditions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the component is set to 'reloadable'"),(0,a.kt)("li",{parentName:"ol"},"the worker uses the same browser on the same computer and didn't delete JATOS' cookies"),(0,a.kt)("li",{parentName:"ol"},"the worker didn't start more than 10 JATOS studies at the same time in parallel after running the abandoned study")),(0,a.kt)("p",null,"Condition 3 is very unlikely a problem and for 1 you can just check the 'reloadable' checkbox in the component's settings. Condition 2 is more difficult, it demands the worker to return to the computer and browser they run the study before."),(0,a.kt)("h3",{id:"abort-study-and-keep-a-message"},"Abort study and keep a message"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.abortStudy")," function is called (usually after the worker clicks a \"Cancel\" button) all result data that had been sent to JATOS during this study run will be deleted. This includes result data from prior components of the study run. But sometimes you'll want to save a bit of information that should not be deleted: you might need the worker's email address to pay them -even if they cancelled the study-. So you need a way to delete the result data but keep their email. "),(0,a.kt)("p",null,"To do this, you can send a message together with ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.abortStudy")," as a parameter. This message won't be deleted together with the other result data. E.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'jatos.abortStudy("participants ID is 12345678");'),". This message can then be seen in every Study Result page in the 'Message' column."),(0,a.kt)("h3",{id:"how-to-let-a-personal-single-worker-redo-his-study"},"How to let a Personal Single Worker redo his study?"),(0,a.kt)("p",null,"A Personal Single Worker is only allowed to run their study once. But sometimes you want to allow them to do it a second time (maybe they accidentally clicked the 'Cancel' button). One way would be to just create another Personal Single Link and hand it to the worker. But there is another way without creating a second Link: you can simply delete the worker's result from one of the result pages. This will allow this Personal Single worker to redo this study."),(0,a.kt)("h3",{id:"simulate-slow-network"},"Simulate slow network"),(0,a.kt)("p",null,"Usually one develops a study on a local JATOS or a remote JATOS with a good internet - but your participants might live at a place where internet connections are slower or run your study via mobile network. All studies should take this into account, but especially those with big files like images, audio or video. There is a way to artifically throttle the network speed in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor"},"Firefox's")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/network#throttle"},"Chrome's")," Developer Tools. Choose a slower connection, e.g. '3G', and try out your study again. This works on every JATOS, local or a remote."),(0,a.kt)("h3",{id:"personalgeneral-single-links-seem-not-to-work-when-distributed-via-social-networks"},"Personal/General Single links seem not to work when distributed via social networks"),(0,a.kt)("p",null,"Problem: The study runs fine, but as soon as one distributes links for Personal Single or General Single runs via social networks like Twitter, Facebook and Reddit or chat tools like Slack and Google Hangout it stops working. The participants only get the message 'A problem occurred: Study can be done only once.' and in the results the study run appears as started but never finished (State DATA_RETRIEVED)."),(0,a.kt)("p",null,"The reason for this behaviour is that some of those tools open links that are posted in them before your participant can click on them. They do this to provide more information about the link, like a title and an image. Usually this is fine but Personal/General Single links work exactly once (if preview is not allowed) and a second request with the same link just responses with the forementioned error message."),(0,a.kt)("p",null,"Solution: You can keep using Personal/General Single links and use a ",(0,a.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#preview-links"},"preview link")," to allow opening the first component of your study as many times as one wishes. All following components can be opened only once again."),(0,a.kt)("p",null,"If your study has only one component (like it is common with OpenSesame/OSWeb or lab.js studies) then you can add an additional component in front of the actual experiment. This component would be a preview component in which you can give an intro to your experiment and most importantly tell your participants that by going on (e.g. clicking on the 'continue' button) they would start the experiment and this can be done only once. One can combine this with a consent form."))}p.isMDXComponent=!0}}]);