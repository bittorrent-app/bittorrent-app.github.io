(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"11f3":function(e,t,a){e.exports=a.p+"static/scott-mcdonald-214051c0a9e9e5ced18f4a11cee1a91b.jpeg"},KHBN:function(e,t,a){"use strict";var l=a("zLVn"),n=a("q1tI"),r=a.n(n),c=a("Wbzz"),s=a("Viml"),o=function(){var e=Object(c.e)("1082582189");return r.a.createElement("div",{className:"blog-popular-section"},r.a.createElement("div",{className:"blog-section-title"},"Popular"),r.a.createElement("div",{className:"blog-popular-items d-flex flex-column"},e.allWordpressPost.edges.map((function(e){var t=e.node,a=t.featured_media?r.a.createElement("img",{src:t.featured_media.source_url,alt:"",className:"img-fluid"}):"",l=Object(s.removeTrailingSlash)("/blog"+decodeURI(t.path));return r.a.createElement("div",{className:"row",key:t.id},r.a.createElement(c.a,{className:"blog-popular-item-img col-5",to:l},a),r.a.createElement("div",{className:"d-flex flex-column col-7"},r.a.createElement(c.a,{className:"blog-popular-item-title text-inter mb-lg-2 mb-md-3 mb-2",to:l},t.title),r.a.createElement("span",{className:"blog-popular-item-details text-ptmono text-uppercase text-muted"},r.a.createElement("span",null,"By "),r.a.createElement(c.a,{to:"/blog/author/scott-mcdonald"},"Scott McDonald"))))}))))},m=a("KQm4"),i=function(e){var t=e.numPages,a=e.currentPage,l=e.pageBasePath,n=e.showFirstPagePath,c=Object(s.removeTrailingSlash)(l)+"/page",o=function(e){return r.a.createElement("li",{key:"ellipsis-"+e,className:"page-item"},r.a.createElement("div",{className:"page-link text-inter"},"..."))},i=function(e){return r.a.createElement("li",{key:"page-"+e,className:"page-item "+(a===e?"active":"")},r.a.createElement("a",{className:"page-link text-inter",href:1!==e||n?c+"/"+e:l},e))};return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination d-flex align-items-end"},1!==a&&r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:a-1!=1||n?c+"/"+(a-1):l},"<")),function(){var e=[];e.push(i(1)),t>4&&a>3&&e.push(o(1));var l=a-1>1?a-1:1,n=a+1<=t?a+1:t;return t>3&&n-l+1<3&&(1===l?n=3:n===t&&(l=n-3+1)),Object(m.a)(Array(n-l+1).keys()).map((function(e){return e+l})).forEach((function(a){1!==a&&a!==t&&e.push(i(a))})),t>4&&a<=t-3&&e.push(o(2)),t>1&&e.push(i(t)),e}(),a!==t&&r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:c+"/"+(a+1)},">"))))};i.defaultProps={showFirstPagePath:!1};var d=i,u=a("tiWs"),g=a("wx14"),p=a("TSYQ"),b=a.n(p),f=a("33Jr"),h=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),s=Object(f.p)(b()(t,"navbar-brand"),a);return r.a.createElement(n,Object(g.a)({},c,{className:s}))};h.defaultProps={tag:"a"};var E=h,v=a("9a8N"),N=a("F66N"),x=a("JX7q"),y=a("dI71"),O=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(x.a)(a)),a}Object(y.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.active,c=e.tag,s=e.innerRef,o=Object(l.a)(e,["className","cssModule","active","tag","innerRef"]),m=Object(f.p)(b()(t,"nav-link",{disabled:o.disabled,active:n}),a);return r.a.createElement(c,Object(g.a)({},o,{ref:s,onClick:this.onClick,className:m}))},t}(r.a.Component);O.defaultProps={tag:"a"};var P=O,j=a("lVUX"),k=a("Z7gm"),w=a("X68C"),S=a("kvuc"),C=["children","hasPage"],T={News:"/blog/category/news/",BTT:"/blog/category/btt/","Cool Stuff":"/blog/category/cool-stuff/"},I=function(e){var t=e.children,a=e.hasPage,n=Object(l.a)(e,C);return r.a.createElement("div",{className:"blog-layout-container container my-5 mx-auto py-lg-5 py-md-4 py-3 px-sm-0 px-4"},r.a.createElement(u.a,{className:"blog-layout-header px-0 align-items-lg-end align-items-center",container:"fluid"},r.a.createElement(E,{className:"blog-layout-title d-flex",href:"/blog"},r.a.createElement("span",{className:"text-inter font-weight-bold mr-2"},"BitTorrent"),r.a.createElement("span",{className:"text-inter font-weight-light"},"Blog")),r.a.createElement(v.a,{className:"blog-layout-topics",navbar:!0},r.a.createElement("div",{className:"topics-list d-none d-lg-flex"},Object.entries(T).map((function(e,t){var a=e[0],l=e[1];return r.a.createElement(N.a,{key:a},r.a.createElement(P,{className:"text-inter "+(t===Object.keys(T).length-1?"pr-0":""),href:l},a))}))),r.a.createElement(j.a,{className:"topics-dropdown d-flex d-lg-none",nav:!0},r.a.createElement(k.a,{className:"font-weight-bold text-inter",nav:!0,caret:!0},"Topics"),r.a.createElement(w.a,{right:!0},Object.entries(T).map((function(e,t){var a=e[0],l=e[1];return r.a.createElement(S.a,{className:"text-inter",key:a},r.a.createElement("a",{href:l},a))})))))),r.a.createElement("hr",{className:"blog-layout-hr"}),r.a.createElement("div",{className:"blog-layout-body d-flex flex-column flex-lg-row"},r.a.createElement("div",{className:"blog-layout-content"},t),a&&r.a.createElement("div",{className:"d-lg-none d-flex justify-content-center"},r.a.createElement(d,n)),r.a.createElement("div",{className:"blog-layout-sidebar d-flex flex-column"},r.a.createElement(o,null))),a&&r.a.createElement("div",{className:"d-lg-flex d-none justify-content-center mt-5"},r.a.createElement(d,n)))};I.defaultProps={hasPage:!1,numPages:0,currentPage:0,pageBasePath:""};t.a=I},gxcI:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("KHBN"),c=a("mNLX"),s=a("11f3"),o=a.n(s);t.default=function(e){var t=e.data,a=e.pageContext,s=a.numPages,m=a.current;return n.a.createElement(r.a,{hasPage:!0,numPages:s,currentPage:m,pageBasePath:"/blog/author/scott-mcdonald/",showFirstPagePath:!0},n.a.createElement("div",{className:"blog-author d-flex flex-column flex-md-row align-items-start align-items-md-center mb-5"},n.a.createElement("div",{className:"blog-author-img-container mr-0 mr-md-5 mb-4 mb-md-0"},n.a.createElement("img",{className:"blog-author-img",src:o.a})),n.a.createElement("div",{className:"blog-author-content"},n.a.createElement("div",{className:"blog-author-name text-inter mb-1"},"Scott McDonald"),n.a.createElement("div",{className:"blog-author-title text-ptmono text-muted text-uppercase mb-3"},"Director of Web Development"),n.a.createElement("div",{className:"blog-author-description text-inter"},"Scott is an expert in Web Development, Search Engine Optimization, and Team Leadership."))),n.a.createElement("hr",null),n.a.createElement("div",{className:"blog-list d-flex flex-column mt-5"},n.a.createElement("div",{className:"blog-list-author text-inter mb-3"},"By Scott McDonald"),t.allWordpressPost.edges.map((function(e,a){var r=e.node;return n.a.createElement(l.Fragment,{key:r.id},n.a.createElement(c.a,{node:r}),a<t.allWordpressPost.edges.length-1&&n.a.createElement("hr",null))}))))}},lVUX:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("vpQ4");var l=a("wx14"),n=a("JX7q"),r=a("dI71"),c=a("q1tI"),s=a.n(c),o=a("oI+J"),m=a("33Jr"),i=["defaultOpen"],d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},a.render=function(){return s.a.createElement(o.a,Object(l.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(m.q)(this.props,i)))},t}(c.Component)},mNLX:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),c=a("Viml"),s=a("s+Ee"),o=a.n(s);t.a=function(e){var t=e.node,a=t.featured_media?n.a.createElement("img",{src:t.featured_media.source_url,alt:"",className:"img-fluid"}):n.a.createElement("img",{src:o.a,alt:"",className:"img-fluid"}),l=Object(c.removeTrailingSlash)("/blog"+decodeURI(t.path));return n.a.createElement("div",{className:"blog-list-item row"},n.a.createElement(r.a,{className:"blog-list-item-img col-md-5 col-12 mb-md-0 mb-3",to:l},a),n.a.createElement("div",{className:"blog-list-item-content d-flex flex-column col-md-7 col-12"},n.a.createElement("div",{className:"blog-list-item-categories text-ptmono"},t.categories.map((function(e,a){var l=t.categories.length===a+1?"":", ",s=e.name.startsWith("µ")?e.name.substring(0,1)+e.name.substring(1).toUpperCase():e.name.toUpperCase(),o=Object(c.removeTrailingSlash)("/blog"+decodeURI(e.path));return n.a.createElement("div",{className:"d-inline",key:t.id+a},n.a.createElement(r.a,{to:o},s),n.a.createElement("span",null,l))}))),n.a.createElement(r.a,{className:"blog-list-item-title text-inter",to:l},n.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.title}})),n.a.createElement("div",{className:"blog-list-item-excerpt mb-1",dangerouslySetInnerHTML:{__html:t.excerpt}}),n.a.createElement("div",{className:"blog-list-item-details d-flex text-ptmono"},n.a.createElement("div",{className:"text-uppercase mr-4"},n.a.createElement("span",null,"By "),n.a.createElement(r.a,{to:"/blog/author/scott-mcdonald"},"Scott McDonald")),n.a.createElement("div",{className:"text-muted"},t.date))))}},"s+Ee":function(e,t,a){e.exports=a.p+"static/blog-placeholder-f92ace5e03249e8533bc32eb332fc151.png"}}]);
//# sourceMappingURL=component---src-templates-blog-blog-author-js-63dd9588300670002102.js.map