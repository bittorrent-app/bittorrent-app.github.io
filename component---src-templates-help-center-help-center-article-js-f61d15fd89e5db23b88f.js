(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{PF4i:function(e,t,a){e.exports=a.p+"static/premium-icon-e8eb2470442c6dca0e85c4496616145e.svg"},QpOx:function(e,t,a){"use strict";a.r(t);var n=a("rePB"),r=a("q1tI"),c=a.n(r),i=a("Stbb"),l=a.n(i),o=a("xxAn"),s=a.n(o),d=a("yioF"),m=a.n(d),u=a("jmpv"),p=a("KLMm"),I=a("l1RV"),N=a("x9m0"),b=a("WDpT"),E=a("zuR4"),g=a("Wbzz"),v=a("AP/v"),y=a("eB9C");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(e){e.data;var t=e.pageContext,a=t.article,n=t.nav,i=t.productInfo,o=t.relatedArticles,d=t.text,f=Object(y.a)(d),h=Object(r.useState)(!1),j=h[0],w=h[1],T={};T[a.folder_id]=!0;var D=Object(r.useState)(T),x=D[0],L=D[1];function k(e){w(!0);var t="https://5tfj2zmxq2.execute-api.us-east-1.amazonaws.com/bt-help-center/thumbs?up="+e+"&articleId="+a.id;E.a.get(t)}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"help-center-article"},c.a.createElement(N.a,{text:d}),c.a.createElement(b.a,{breadCrumb:function(){for(var e=[{name:f("helpCenter"),link:l.a.homeLink,isLast:!1}],t=0;t<a.hierarchy.length;++t){var n=a.hierarchy[t],r="";"category"===n.type&&(r=l.a.solutionLink(n.data.language,n.data.id)),e.push({name:a.hierarchy[t].data.name,link:r,isLast:t===a.hierarchy.length-1})}return e}()}),c.a.createElement("div",{className:"help-center-body"},c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"help-center-left"},c.a.createElement("div",{className:"nav-holder"},c.a.createElement("h4",null,a.hierarchy[0].data.name),c.a.createElement("div",null,n.map((function(e){return c.a.createElement(c.a.Fragment,null,e.articleList&&c.a.createElement("div",{key:e.id},c.a.createElement("div",{className:"folder-header",onClick:function(){return function(e){if(x.hasOwnProperty(e)){var t=M({},x);delete t[e],L(t)}else{var a=M({},x);a[e]=!0,L(a)}}(e.id)}}," ",e.title,x.hasOwnProperty(e.id)?c.a.createElement("img",{src:s.a,alt:"show category",className:"icon"}):c.a.createElement("img",{src:m.a,alt:"hide category",className:"icon"})),c.a.createElement("div",{hidden:!x.hasOwnProperty(e.id)},e.articleList.map((function(e){return c.a.createElement("div",{className:"link-text "+(e.id===a.id?"link-text-current":""),key:e.id},c.a.createElement(g.a,{to:l.a.articleLink("en",e.id,e.title)},e.title))})))))}))))),c.a.createElement("div",{className:"help-center-main"},c.a.createElement("h1",null,a.title),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description}}),c.a.createElement("div",{className:"helpful-container"},!j&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,f("helpful")),c.a.createElement("div",{className:"yes-no-container"},c.a.createElement("div",{className:"user-selection",onClick:function(){return k(!0)}},c.a.createElement("span",{className:"selection"},f("yes"))),c.a.createElement("div",{className:"selection-divider"}),c.a.createElement("div",{className:"user-selection",onClick:function(){return k(!1)}},c.a.createElement("span",{className:"selection"},f("no"))))),j&&c.a.createElement("div",null,c.a.createElement("b",null,f("thankYouFeedBack"))))),c.a.createElement("div",{className:"help-center-right"},c.a.createElement("div",{className:"holder"},c.a.createElement("div",{className:"related-articles"},c.a.createElement("div",{className:"header-text"},f("relatedArticles")),o.map((function(e){return c.a.createElement("div",{className:"related-link",key:e.link},c.a.createElement(g.a,{to:e.link,dangerouslySetInnerHTML:{__html:e.title}}))}))),c.a.createElement(u.a,{text:d}),c.a.createElement(p.a,{text:d}),c.a.createElement(I.a,{productInfo:i,text:d}),c.a.createElement(v.a,{text:d})))),c.a.createElement("div",{className:"help-center-create-ticket"},c.a.createElement("div",{className:"line-one"}," ",f("cantFind")),c.a.createElement("div",{className:"line-two"},f("cantFindExpanded")),c.a.createElement(g.a,{to:l.a.submitTicket,className:"no-decoration"},c.a.createElement("div",{className:"help-center-button submit-ticket"},f("submitTicket")))))))}},WDpT:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz");t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"help-center-breadcrumb"},r.a.createElement("div",{className:"crumb-holder"},e.breadCrumb.map((function(e){return r.a.createElement("span",{key:e.name},r.a.createElement(c.a,{to:e.link},e.name),e.isLast?"":" /")})))))}},jmpv:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),i=a("Stbb"),l=a.n(i),o=a("efVb"),s=a("PF4i"),d=a.n(s),m=a("eB9C");t.a=function(e){var t=Object(m.a)(e.text),a=null;"undefined"!=typeof window&&(a=sessionStorage.getItem(l.a.USER_INFO));var i=null!==a,s=Object(n.useState)(!1),u=s[0],p=s[1];return r.a.createElement(r.a.Fragment,null,!i&&r.a.createElement("div",{className:"help-center-paid-support p-4 mb-5 ml-auto"},u&&r.a.createElement(o.a,{closeLogin:function(){p(!1)},onSuccess:function(e){"undefined"!=typeof window&&sessionStorage.setItem(l.a.USER_INFO,JSON.stringify(e)),Object(c.d)(l.a.homeLink)},text:e.text}),r.a.createElement("div",{className:"d-flex"},r.a.createElement("img",{className:"mx-auto",src:d.a,alt:"premium member icon"})),r.a.createElement("div",{className:"text"},t("paidMember")),r.a.createElement("div",{className:"help-center-button button p-3",onClick:function(){p(!0)}},t("premiumButton"))))}},l1RV:function(e,t,a){"use strict";a("ToJy");var n=a("q1tI"),r=a.n(n),c=a("CjIY"),i=a.n(c),l=a("hHQE"),o=a.n(l),s=a("dDpe"),d=a.n(s),m=a("/SXF"),u=a.n(m),p=a("qwPL"),I=a.n(p),N=a("Stbb"),b=a.n(N),E=a("eB9C");t.a=function(e){var t=Object(E.a)(e.text);var a=[];if("undefined"!=typeof window){if(e.productInfo.showClassic){var n="";n=window.gatsbyIsMac?"BitTorrent"===e.productInfo.brand?b.a.BT_CLASSIC_MAC:b.a.UT_CLASSIC_MAC:"BitTorrent"===e.productInfo.brand?b.a.BT_CLASSIC_WIN:b.a.UT_CLASSIC_WIN,a.push({brand:e.productInfo.brand,logo:"BitTorrent"===e.productInfo.brand?i.a:d.a,product:"Classic",priority:1,link:n})}if(e.productInfo.showWeb){var c="";c=window.gatsbyIsMac?"BitTorrent"===e.productInfo.brand?b.a.BT_LINK_WEB_MAC:b.a.UT_LINK_WEB_MAC:"BitTorrent"===e.productInfo.brand?b.a.BT_LINK_WEB_WIN:b.a.UT_LINK_WEB_WIN,a.push({brand:e.productInfo.brand,logo:"BitTorrent"===e.productInfo.brand?o.a:u.a,product:"Web",priority:2,link:c})}e.productInfo.showAndroid&&a.push({brand:e.productInfo.brand,logo:"BitTorrent"===e.productInfo.brand?i.a:d.a,product:"Android",priority:3,link:"BitTorrent"===e.productInfo.brand?b.a.BT_LINK_ANDROID:b.a.UT_LINK_ANDROID}),a.sort((function(t,a){return t.product===e.productInfo.name?-1:a.product===e.productInfo.name?1:t.priority-a.priority}))}return r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement("div",{className:"help-center-web-ad ml-auto"},a.map((function(e){return r.a.createElement("div",{className:"product-download"},r.a.createElement("div",{className:"product-description"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{className:"logo",src:e.logo})),r.a.createElement("span",{className:"brand"},e.brand),r.a.createElement("span",{className:"name"},e.product)),r.a.createElement("div",{className:"d-flex pt-2 pb-3 pointer",onClick:function(){return function(e){window.open(e.link)}(e)}},r.a.createElement("span",{className:"download-text"},t("torrentAdDownload")),r.a.createElement("div",null,r.a.createElement("img",{src:I.a,alt:"download "+e.brand+" "+e.product}))))}))))}},qwPL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjA0NTUgOS45NTczOUw4LjgzODA3IDguMzA5NjZMMTMuMTYzNCAxMi42MzQ5TDEzLjE2MzQgMi41TDE1LjU2MzkgMi41TDE1LjU2MzkgMTIuNjM0OUwxOS44ODIxIDguMzA5NjZMMjEuNTIyNyA5Ljk1NzM5TDE0LjM2MzYgMTcuMTE2NUw3LjIwNDU1IDkuOTU3MzlaIiBmaWxsPSJibGFjayIvPgo8bGluZSB4MT0iNSIgeTE9IjIwIiB4Mj0iMjQiIHkyPSIyMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="},xxAn:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEzIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAxLjI0NjgzTDYuNjIzNDIgNi42MjYxMUM2LjU1NTk3IDYuNjkzNTYgNi40NDY3IDYuNjkzNTYgNi4zNzk1MiA2LjYyNjExTDEuMDAwMjQgMS4yNDY4MyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg=="},yioF:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDggMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNi4zNzkyOCA2LjM3NjU4QzYuNDQ2NzMgNi40NDQwMyA2LjQ0NjczIDYuNTUzMyA2LjM3OTI4IDYuNjIwNDhMMSAxMS45OTk4IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-templates-help-center-help-center-article-js-f61d15fd89e5db23b88f.js.map