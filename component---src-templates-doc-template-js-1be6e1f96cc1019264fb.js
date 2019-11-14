(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=(a(64),a(97),a(98),a(8)),i=a.n(r),s=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.querySelectorAll("a").forEach(function(e){var t=e.href;(t.includes("appsody.dev")||t.includes("localhost"))&&(e.href=t.replace(".md","").replace("/content/docs","/docs"))})},a.render=function(){return l.a.createElement("div",{id:"documents-window",className:"doc-content",dangerouslySetInnerHTML:{__html:this.props.html}})},t}(l.a.Component),c=a(198),o=a(173),d=a(253),u=a.n(d),f=a(255),m=a.n(f),p=a(258),v=a.n(p),g=a(254),h=a.n(g),y=a(164),I=a.n(y),b=0,E=null,k=!1,w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).setAccordionIndex=function(){document.getElementById("chevron-"+t.props.index).style.transform="rotate(90deg)",k=!0,b=t.props.index},t}i()(t,e);var a=t.prototype;return a.rotateImage=function(){E!==this.props.index&&null!==E&&(document.getElementById("chevron-"+E).style.transform="rotate(0)",k=!1),k?(document.getElementById("chevron-"+this.props.index).style.transform="rotate(0)",k=!1):(document.getElementById("chevron-"+this.props.index).style.transform="rotate(90deg)",k=!0),E=this.props.index},a.render=function(){var e,t=this;return e=void 0!==this.props.data?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a.Toggle,{as:v.a,variant:"link",eventKey:this.props.index},l.a.createElement("div",{onClick:function(){return t.rotateImage()},className:"accordion-dropdown"},l.a.createElement("h4",{className:"sidebar-heading-link float-left"},this.props.title),l.a.createElement("img",{id:"chevron-"+this.props.index,src:h.a,width:"10",height:"10",className:"accordion-icon mb-3",alt:"Chevron Logo"}))),l.a.createElement(m.a.Collapse,{eventKey:this.props.index},l.a.createElement("ul",null,this.props.data.map(function(e){return l.a.createElement("li",{key:e.title,className:"my-1 p-1"},l.a.createElement(o.a,{className:"sidebar-link ml-3",onMouseOver:function(){return t.setAccordionIndex()},activeClassName:"active",to:e.path},e.title))})))):l.a.createElement("h4",{className:"sidebar-heading-link"}," ",l.a.createElement(o.a,{onClick:function(){return t.setAccordionIndex(t.props.index)},activeClassName:"active",to:this.props.path},this.props.title)),l.a.createElement(l.a.Fragment,null,e)},t}(n.Component),x=function(){var e=[];return u.a.map(function(t,a){var n;return n=l.a.createElement(w,{key:t.title,path:t.path,title:t.title,data:t.items,index:a}),e.push(n),null}),l.a.createElement("aside",{id:"sidebar",className:I.a.sidebar},l.a.createElement(m.a,{defaultActiveKey:b},e))},C=(a(165),function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return l.a.createElement("section",{onClick:function(){return function(){document.getElementById(".hamburger-icon").classList.toggle("open"),document.getElementById("sidebar").style.display="inline",a(!t);var e=document.querySelector("#sidebar"),n={fill:"forwards",duration:250,iterations:1};t?e.animate([{transform:"translateX(0)"},{transform:"translateX(calc(-100vw))"}],n):e.animate([{transform:"translateX(calc(-100vw))"},{transform:"translateX(0)"}],n)}()},className:"burger-icon",id:".hamburger-icon"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))});function M(e){var t=e.data.markdownRemark,a=t.html,n=t.frontmatter.title;return l.a.createElement(c.a,{title:n},l.a.createElement(x,null),l.a.createElement(s,{html:a}),l.a.createElement(C,null))}a.d(t,"default",function(){return M}),a.d(t,"pageQuery",function(){return N});var N="1985328550"},179:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var l=n(a(0)).default.createContext(null);t.default=l,e.exports=t.default},253:function(e,t){e.exports=[{title:"Overview",path:"/docs"},{title:"Getting Started",items:[{title:"Installation",path:"/docs/getting-started/installation"},{title:"Quick Start",path:"/docs/getting-started/quick-start"}]},{title:"Using Appsody",items:[{title:"Initializing Projects",path:"/docs/using-appsody/initializing-project"},{title:"Local Development",path:"/docs/using-appsody/local-development"},{title:"Building and Deploying",path:"/docs/using-appsody/building-and-deploying"},{title:"CLI Reference",path:"/docs/using-appsody/cli-commands"}]},{title:"Appsody Stacks",items:[{title:"Stacks Overview",path:"/docs/stacks/stacks-overview"},{title:"Stack Structure",path:"/docs/stacks/stack-structure"},{title:"Creating Stacks",path:"/docs/stacks/create"},{title:"Modifying Stacks",path:"/docs/stacks/modify"},{title:"Packaging Stacks",path:"/docs/stacks/package"},{title:"Testing Stacks",path:"/docs/stacks/test"},{title:"Environment Variables",path:"/docs/stacks/environment-variables"}]},{title:"FAQ",path:"/docs/faq"}]},254:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Imljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI2cHgiIGhlaWdodD0iMTBweCIgdmlld0JveD0iMCAwIDYgMTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYgMTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KPC9zdHlsZT4KPHBvbHlnb24gcG9pbnRzPSI2LDUgMSwxMCAwLjMsOS4zIDQuNiw1IDAuMywwLjcgMSwwICIvPgo8cmVjdCBpZD0iX3gzQ19UcmFuc3BhcmVudF9SZWN0YW5nbGVfeDNFXyIgY2xhc3M9InN0MCIgd2lkdGg9IjYiIGhlaWdodD0iMTAiLz4KPC9zdmc+"},255:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var l=n(a(95)),r=n(a(96)),i=n(a(170)),s=n(a(0)),c=n(a(195)),o=a(171),d=n(a(256)),u=n(a(174)),f=n(a(257)),m=n(a(179)),p=s.default.forwardRef(function(e,t){var a=(0,c.default)(e,{activeKey:"onSelect"}),n=a.as,d=void 0===n?"div":n,f=a.activeKey,p=a.bsPrefix,v=a.children,g=a.className,h=a.onSelect,y=(0,r.default)(a,["as","activeKey","bsPrefix","children","className","onSelect"]);return p=(0,o.useBootstrapPrefix)(p,"accordion"),s.default.createElement(m.default.Provider,{value:f},s.default.createElement(u.default.Provider,{value:h},s.default.createElement(d,(0,l.default)({ref:t},y,{className:(0,i.default)(g,p)}),v)))});p.Toggle=d.default,p.Collapse=f.default;var v=p;t.default=v,e.exports=t.default},256:function(e,t,a){"use strict";var n=a(172),l=a(10);t.__esModule=!0,t.default=void 0;var r=l(a(95)),i=l(a(96)),s=n(a(0)),c=l(a(174)),o=l(a(179)),d=s.default.forwardRef(function(e,t){var a=e.as,n=void 0===a?"button":a,l=e.children,d=e.eventKey,u=e.onClick,f=(0,i.default)(e,["as","children","eventKey","onClick"]),m=(0,s.useContext)(o.default),p=(0,s.useContext)(c.default);return s.default.createElement(n,(0,r.default)({ref:t,onClick:function(e){p(d===m?null:d,e),u&&u(e)}},f),l)});t.default=d,e.exports=t.default},257:function(e,t,a){"use strict";var n=a(172),l=a(10);t.__esModule=!0,t.default=void 0;var r=l(a(95)),i=l(a(96)),s=n(a(0)),c=l(a(190)),o=l(a(179)),d=s.default.forwardRef(function(e,t){var a=e.children,n=e.eventKey,l=(0,i.default)(e,["children","eventKey"]),d=(0,s.useContext)(o.default);return s.default.createElement(c.default,(0,r.default)({ref:t,in:d===n},l),s.default.createElement("div",null,s.default.Children.only(a)))});t.default=d,e.exports=t.default},258:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var l=n(a(95)),r=n(a(96)),i=n(a(170)),s=n(a(0)),c=a(171),o=n(a(197)),d=s.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.variant,d=e.size,u=e.active,f=e.className,m=e.block,p=e.type,v=e.as,g=(0,r.default)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=(0,c.useBootstrapPrefix)(a,"btn"),y=(0,i.default)(f,h,u&&"active",h+"-"+n,m&&h+"-block",d&&h+"-"+d);if(g.href)return s.default.createElement(o.default,(0,l.default)({},g,{as:v,innerRef:t,className:(0,i.default)(y,g.disabled&&"disabled")}));var I=v||"button";return t&&(g.ref=t),s.default.createElement(I,(0,l.default)({},g,{type:p,className:y}))});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var u=d;t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=component---src-templates-doc-template-js-1be6e1f96cc1019264fb.js.map