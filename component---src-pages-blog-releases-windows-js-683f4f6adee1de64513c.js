(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{KHBN:function(e,a,t){"use strict";var l=t("zLVn"),n=t("q1tI"),r=t.n(n),s=t("Wbzz"),c=t("Viml"),o=function(){var e=Object(s.e)("1082582189");return r.a.createElement("div",{className:"blog-popular-section"},r.a.createElement("div",{className:"blog-section-title"},"Popular"),r.a.createElement("div",{className:"blog-popular-items d-flex flex-column"},e.allWordpressPost.edges.map((function(e){var a=e.node,t=a.featured_media?r.a.createElement("img",{src:a.featured_media.source_url,alt:"",className:"img-fluid"}):"",l=Object(c.removeTrailingSlash)("/blog"+decodeURI(a.path));return r.a.createElement("div",{className:"row",key:a.id},r.a.createElement(s.a,{className:"blog-popular-item-img col-5",to:l},t),r.a.createElement("div",{className:"d-flex flex-column col-7"},r.a.createElement(s.a,{className:"blog-popular-item-title text-inter mb-lg-2 mb-md-3 mb-2",to:l},a.title),r.a.createElement("span",{className:"blog-popular-item-details text-ptmono text-uppercase text-muted"},r.a.createElement("span",null,"By "),r.a.createElement(s.a,{to:"/blog/author/scott-mcdonald"},"Scott McDonald"))))}))))},i=t("KQm4"),m=function(e){var a=e.numPages,t=e.currentPage,l=e.pageBasePath,n=e.showFirstPagePath,s=Object(c.removeTrailingSlash)(l)+"/page",o=function(e){return r.a.createElement("li",{key:"ellipsis-"+e,className:"page-item"},r.a.createElement("div",{className:"page-link text-inter"},"..."))},m=function(e){return r.a.createElement("li",{key:"page-"+e,className:"page-item "+(t===e?"active":"")},r.a.createElement("a",{className:"page-link text-inter",href:1!==e||n?s+"/"+e:l},e))};return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination d-flex align-items-end"},1!==t&&r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:t-1!=1||n?s+"/"+(t-1):l},"<")),function(){var e=[];e.push(m(1)),a>4&&t>3&&e.push(o(1));var l=t-1>1?t-1:1,n=t+1<=a?t+1:a;return a>3&&n-l+1<3&&(1===l?n=3:n===a&&(l=n-3+1)),Object(i.a)(Array(n-l+1).keys()).map((function(e){return e+l})).forEach((function(t){1!==t&&t!==a&&e.push(m(t))})),a>4&&t<=a-3&&e.push(o(2)),a>1&&e.push(m(a)),e}(),t!==a&&r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:s+"/"+(t+1)},">"))))};m.defaultProps={showFirstPagePath:!1};var u=m,p=t("tiWs"),d=t("wx14"),g=t("TSYQ"),f=t.n(g),b=t("33Jr"),h=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),c=Object(b.p)(f()(a,"navbar-brand"),t);return r.a.createElement(n,Object(d.a)({},s,{className:c}))};h.defaultProps={tag:"a"};var v=h,E=t("9a8N"),N=t("F66N"),x=t("JX7q"),y=t("dI71"),O=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(x.a)(t)),t}Object(y.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.active,s=e.tag,c=e.innerRef,o=Object(l.a)(e,["className","cssModule","active","tag","innerRef"]),i=Object(b.p)(f()(a,"nav-link",{disabled:o.disabled,active:n}),t);return r.a.createElement(s,Object(d.a)({},o,{ref:c,onClick:this.onClick,className:i}))},a}(r.a.Component);O.defaultProps={tag:"a"};var k=O,j=t("lVUX"),w=t("Z7gm"),P=t("X68C"),C=t("kvuc"),T=["children","hasPage"],I={News:"/blog/category/news/",BTT:"/blog/category/btt/","Cool Stuff":"/blog/category/cool-stuff/"},S=function(e){var a=e.children,t=e.hasPage,n=Object(l.a)(e,T);return r.a.createElement("div",{className:"blog-layout-container container my-5 mx-auto py-lg-5 py-md-4 py-3 px-sm-0 px-4"},r.a.createElement(p.a,{className:"blog-layout-header px-0 align-items-lg-end align-items-center",container:"fluid"},r.a.createElement(v,{className:"blog-layout-title d-flex",href:"/blog"},r.a.createElement("span",{className:"text-inter font-weight-bold mr-2"},"BitTorrent"),r.a.createElement("span",{className:"text-inter font-weight-light"},"Blog")),r.a.createElement(E.a,{className:"blog-layout-topics",navbar:!0},r.a.createElement("div",{className:"topics-list d-none d-lg-flex"},Object.entries(I).map((function(e,a){var t=e[0],l=e[1];return r.a.createElement(N.a,{key:t},r.a.createElement(k,{className:"text-inter "+(a===Object.keys(I).length-1?"pr-0":""),href:l},t))}))),r.a.createElement(j.a,{className:"topics-dropdown d-flex d-lg-none",nav:!0},r.a.createElement(w.a,{className:"font-weight-bold text-inter",nav:!0,caret:!0},"Topics"),r.a.createElement(P.a,{right:!0},Object.entries(I).map((function(e,a){var t=e[0],l=e[1];return r.a.createElement(C.a,{className:"text-inter",key:t},r.a.createElement("a",{href:l},t))})))))),r.a.createElement("hr",{className:"blog-layout-hr"}),r.a.createElement("div",{className:"blog-layout-body d-flex flex-column flex-lg-row"},r.a.createElement("div",{className:"blog-layout-content"},a),t&&r.a.createElement("div",{className:"d-lg-none d-flex justify-content-center"},r.a.createElement(u,n)),r.a.createElement("div",{className:"blog-layout-sidebar d-flex flex-column"},r.a.createElement(o,null))),t&&r.a.createElement("div",{className:"d-lg-flex d-none justify-content-center mt-5"},r.a.createElement(u,n)))};S.defaultProps={hasPage:!1,numPages:0,currentPage:0,pageBasePath:""};a.a=S},"b16+":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("KHBN"),s=t("I4A6");a.default=function(e){var a=e.data;return n.a.createElement(r.a,null,n.a.createElement(s.a,{color:"black",tag:"h1",productName:"Release Notes",className:"text-center text-md-left mb-5",fsMax:20}),n.a.createElement("div",{className:"d-flex flex-wrap align-items-stretch w-100"},a.allWordpressWpCustomRelease.edges.map((function(e){var a=e.node;return n.a.createElement("div",{className:"p-5 col-12 panelShadow ",key:a.id},n.a.createElement("h3",{dangerouslySetInnerHTML:{__html:a.title}}),n.a.createElement("div",{className:"text-muted d-block mb-4"},a.date),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.content}}))}))))}},lVUX:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("vpQ4");var l=t("wx14"),n=t("JX7q"),r=t("dI71"),s=t("q1tI"),c=t.n(s),o=t("oI+J"),i=t("33Jr"),m=["defaultOpen"],u=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(n.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},t.render=function(){return c.a.createElement(o.a,Object(l.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(i.q)(this.props,m)))},a}(s.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-releases-windows-js-683f4f6adee1de64513c.js.map