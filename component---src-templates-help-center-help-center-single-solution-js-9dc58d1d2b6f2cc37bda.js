(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"5NaA":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDE3IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMyI+CiAgICAgICAgPHBhdGggZD0iTTkgMGw3LjUgNy41TTkgMTVsNy41LTcuNU0wIDcuNWgxNi41Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},"AP/v":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);var r=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{width:"28",height:"26",viewBox:"0 0 28 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{className:"star-icon "+[e.extraClass],d:"M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"})))},c=a("FsDL"),i=a("eB9C");t.a=function(e){var t=Object(i.a)(e.text),a=!0,m=null;if("undefined"!=typeof window&&(m=localStorage.getItem("lastStarRatingTime")),null!==m){var s=Number.parseInt(m);Date.now()-s<864e5&&(a=!1)}var o=Object(n.useState)(0),u=o[0],d=o[1],v=Object(n.useState)(a?0:2),g=v[0],E=v[1];function p(){"undefined"!=typeof window&&localStorage.setItem("lastStarRatingTime",Date.now().toString()),E(2)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"help-center-rating mt-5 ml-auto"+(2===g?"hidden":"")},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"close-icon",onClick:function(){return p()}},"x"),0===g&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},t("helpCenterReview")),l.a.createElement("div",{className:"rating"},l.a.createElement("div",{className:"star-holder"},[1,2,3,4,5].map((function(e){return l.a.createElement("div",{className:"star",onMouseOver:function(){return d(e)},onMouseLeave:function(){return d(0)},onClick:function(){var t;t=e,Object(c.a)("Help Center","rating",t),E(1),setTimeout((function(){return p()}),3e3)},key:"Star"+e},l.a.createElement(r,{extraClass:u>=e?"filled-star":""}))}))))),1===g&&l.a.createElement("div",{className:"thank-you"},t("helpCenterReviewThanks")))))}},FsDL:function(e,t,a){"use strict";t.a=function(e,t,a){console.log("[GA EVENT]: "+e+", "+t+", "+a),void 0!==window.gtag&&window.gtag("event",t,{event_category:e,event_label:a})}},KLMm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("5NaA"),c=a.n(r),i=a("Wbzz"),m=a("eB9C");t.a=function(e){var t=Object(m.a)(e.text);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"help-center-blog p-4 mb-5 ml-auto",onClick:function(){Object(i.d)("/blog")}},l.a.createElement("div",{className:"text"},t("blogInfo")),l.a.createElement("div",{className:"button"},t("visitBlog")," ",l.a.createElement("img",{src:c.a,alt:t("visitBlog")}))))}},WDpT:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz");t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"help-center-breadcrumb"},l.a.createElement("div",{className:"crumb-holder"},e.breadCrumb.map((function(e){return l.a.createElement("span",{key:e.name},l.a.createElement(r.a,{to:e.link},e.name),e.isLast?"":" /")})))))}},uFz3:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Stbb"),c=a.n(r),i=a("x9m0"),m=a("KLMm"),s=a("WDpT"),o=a("AP/v"),u=a("eB9C");t.default=function(e){e.data;var t,a=e.pageContext,n=a.solutionInfo,r=(a.applications,a.text),d=Object(u.a)(r);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"help-center-product-page"},l.a.createElement(i.a,{text:r}),l.a.createElement(s.a,{breadCrumb:(t=[{name:d("helpCenter"),link:c.a.homeLink,isLast:!1}],t.push({name:n.name,link:"",isLast:!0}),t)}),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"m-0 p-0 "},l.a.createElement("h1",null,n.name),l.a.createElement("div",{className:"help-thing"},n.folderIndexes.map((function(e){return l.a.createElement("div",{className:"category-column"},l.a.createElement("div",{className:"header-text"},e.title),l.a.createElement("div",null,void 0!==e.articleList&&e.articleList.map((function(e){return l.a.createElement("div",{className:"link-holder"},l.a.createElement("a",{href:c.a.articleLink("en",e.id,e.title),className:"link-text"},e.title))}))))})))),l.a.createElement("div",null,l.a.createElement(m.a,{text:r}),l.a.createElement(o.a,{text:r})))))}},x9m0:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("BNt9"),i=a("Stbb"),m=a.n(i),s=a("eB9C"),o=a("Bl7J"),u=a("9Eug"),d=a.n(u);t.a=function(e){var t=Object(s.a)(e.text),a=l.a.useContext(o.b).locale;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"help-center-search"},l.a.createElement("div",{className:"search-container"},l.a.createElement("div",{className:"text"},l.a.createElement(c.a,{to:m.a.homeLink,className:"search-text"},l.a.createElement("span",{className:"font-weight-bold"},"BitTorrent")," ",t("helpCenter"))),l.a.createElement("div",{className:"search-box"},l.a.createElement("input",{id:"search",className:"search-input",placeholder:t("searchPrompt"),onKeyDown:function(e){if("Enter"===e.key){var t="/help/search/?value="+e.target.value,n=d.a[a].default?t:"/"+d.a[a].path+t;Object(r.d)(n)}}})))))}}}]);
//# sourceMappingURL=component---src-templates-help-center-help-center-single-solution-js-9dc58d1d2b6f2cc37bda.js.map