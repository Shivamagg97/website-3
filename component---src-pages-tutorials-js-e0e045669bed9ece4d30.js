(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(184),i=(a(194),a(65),a(9)),s=a.n(i),o=a(286),c=a(98),m=a(287),u=a.n(m),d=function(e){var t=e.title,a=e.subtext,n=e.length,r=e.slug;return l.a.createElement(c.Link,{className:"blog-link",to:r},l.a.createElement("div",{className:"tutorial-container"},l.a.createElement("h2",{className:"blog-title"},t),l.a.createElement("p",{className:"tutorial-subtext"},a),l.a.createElement("p",{className:"tutorial-length"},l.a.createElement("img",{className:"tutorial-length-icon",src:u.a})," ~ ",n)))},g=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var a=t.prototype;return a.generateBlogs=function(){return this.props.tutorials.map(function(e){return l.a.createElement(d,{title:e.frontmatter.title,subtext:e.excerpt.replace(e.frontmatter.title,""),length:e.frontmatter.length,slug:e.fields.slug})})},a.render=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"blog-grid"},this.generateBlogs()))},t}(n.Component),p=function(){return l.a.createElement(c.StaticQuery,{query:"3041950770",render:function(e){var t=[];return e.allMarkdownRemark.nodes.forEach(function(e){t=t.concat(e)}),l.a.createElement(g,{tutorials:t})},data:o})};a.d(t,"query",function(){return w});var w="3134450968";t.default=function(e){e.data;return l.a.createElement(r.a,{title:"Appsody - Tutorials",className:"tutorials-page"},l.a.createElement("div",{className:"container tutorials-section tutorials-page"},l.a.createElement("section",{className:"all-tutorials-section"},l.a.createElement("h2",{className:"tutorials-header"},"Tutorials"),l.a.createElement(p,null))))}},194:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(98);t.a=function(e){var t=e.title,a=e.subtext,n=e.author,i=e.date,s=e.slug;return l.a.createElement(r.Link,{className:"blog-link",to:s},l.a.createElement("div",{className:"wide-blog-container"},l.a.createElement("div",{className:"wide-blog-image-container"},l.a.createElement("img",{className:"wide-blog-image",src:"https://miro.medium.com/max/2800/1*AmrAV709WQFlXgs4R4zZEw.jpeg",alt:"Blog post pic"})),l.a.createElement("h2",{className:"wide-blog-title"},t),l.a.createElement("p",{className:"wide-blog-subtext"},a),l.a.createElement("p",{className:"wide-blog-author"},"by ",n),l.a.createElement("p",{className:"wide-blog-date"},"Posted ",i)))}},286:function(e){e.exports={data:{allMarkdownRemark:{nodes:[{fields:{slug:"/tutorials/ServerSideSwiftDevelopInXcode/"},frontmatter:{title:"Server-Swift Swift: Develop in Xcode, continuously verify in Docker",date:"7 months ago",author:"Chris Bailey",length:"30 mins"},excerpt:"Server-Swift Swift: Develop in Xcode, continuously verify in DockerDue to the availability of the Swift Language Server Protocol (LSP) library, there are now more IDEs that you can use to develop server-side Swift applications, including VSCode on Linux. Undoubtedly though, most…"}]}}}},287:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOWI5YjliIiBmb2N1c2FibGU9ImZhbHNlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIiBhcmlhLWhpZGRlbj0idHJ1ZSIgc3R5bGU9IndpbGwtY2hhbmdlOiB0cmFuc2Zvcm07Ij48cGF0aCBkPSJNMTYsMzBBMTQsMTQsMCwxLDEsMzAsMTYsMTQsMTQsMCwwLDEsMTYsMzBaTTE2LDRBMTIsMTIsMCwxLDAsMjgsMTYsMTIsMTIsMCwwLDAsMTYsNFoiPjwvcGF0aD48cGF0aCBkPSJNMjAuNTkgMjJMMTUgMTYuNDEgMTUgNyAxNyA3IDE3IDE1LjU4IDIyIDIwLjU5IDIwLjU5IDIyeiI+PC9wYXRoPjx0aXRsZT5UaW1lPC90aXRsZT48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-tutorials-js-e0e045669bed9ece4d30.js.map