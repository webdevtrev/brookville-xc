(this["webpackJsonpbrookvillexc-frontend"]=this["webpackJsonpbrookvillexc-frontend"]||[]).push([[0],{125:function(e,t,c){},131:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(48),r=c.n(i),a=(c(62),c(6)),l=c(7),o=c(5),j=(c(63),c(49)),d=c.n(j)()({projectId:"411iwivp",dataset:"production",apiVersion:"2021-07-12",useCdn:!0}),h=(c(125),c(1));var b=function(e){var t=e.years;return Object(h.jsx)("div",{className:"Navbar-Desktop",children:Object(h.jsxs)("ul",{className:"content-wrapper header-nav-list",children:[Object(h.jsx)("li",{className:"nav-group",children:Object(h.jsx)(a.b,{className:"nav-item",to:"/",children:"Home"})}),Object(h.jsxs)("li",{className:"nav-group",children:[Object(h.jsx)("button",{className:"nav-item",children:"Results"}),Object(h.jsx)("ul",{className:"dropdown",children:null===t||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)(a.b,{className:"nav-item",to:"/results/"+e,children:[" ",e," Results"]})},e)}))})]}),Object(h.jsxs)("li",{className:"nav-group",children:[Object(h.jsx)("button",{className:"nav-item",children:"Info"}),Object(h.jsxs)("ul",{className:"dropdown",children:[Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{className:"nav-item",to:"/practiceInfo",children:"Practice Info"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{className:"nav-item",to:"/faq",children:"FAQ"})})]})]}),Object(h.jsx)("li",{className:"nav-group",children:Object(h.jsx)(a.b,{className:"nav-item",to:"/contact",children:"Coaches"})})]})})},u=(c(131),c(29)),m=c(11),O=c(18),v=c(51);var p=function(e){var t=e.header,c=e.socials,n=e.menuOpen,i=e.setMenuOpen,r=e.years,l=Object(s.useState)(!1),j=Object(o.a)(l,2),d=j[0],b=j[1],p=Object(s.useState)(!1),x=Object(o.a)(p,2),f=x[0],g=x[1];function N(){i(!1),g(!1),b(!1)}return Object(h.jsxs)("div",{className:"menu ".concat(!n&&"closed"),children:[Object(h.jsxs)("div",{className:"menu-header",children:[Object(h.jsx)("h1",{children:"Menu"}),Object(h.jsx)("button",{className:"close",onClick:N,children:Object(h.jsx)(v.a,{})})]}),Object(h.jsxs)("div",{className:"menu-body",children:[Object(h.jsx)(a.b,{onClick:N,to:"/",children:"Home"}),Object(h.jsx)("button",{onClick:function(){return b(!d)},children:"Results"}),Object(h.jsx)(u.Collapse,{isOpened:d,children:Object(h.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)(a.b,{onClick:N,to:"/results/"+e,children:[" ",e," Results"]})},"menu-"+e)}))})}),Object(h.jsx)("button",{onClick:function(){return g(!f)},children:"Info"}),Object(h.jsx)(u.Collapse,{isOpened:f,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{onClick:N,to:"/practiceInfo",children:"Practice Info"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{onClick:N,to:"/faq",children:"FAQ"})})]})}),Object(h.jsx)(a.b,{onClick:N,to:"/contact",children:"Coaches"})]}),Object(h.jsxs)("div",{className:"menu-footer",children:[(null===t||void 0===t?void 0:t.phone)&&Object(h.jsx)("a",{href:"tel:"+(null===c||void 0===c?void 0:c.phone),children:Object(h.jsx)(m.a,{})}),(null===t||void 0===t?void 0:t.email)&&Object(h.jsx)("a",{href:"mailto:"+(null===c||void 0===c?void 0:c.email),children:Object(h.jsx)(O.a,{})}),(null===t||void 0===t?void 0:t.twitter)&&Object(h.jsx)("a",{href:null===c||void 0===c?void 0:c.twitter,children:Object(h.jsx)(m.c,{})}),(null===t||void 0===t?void 0:t.strava)&&Object(h.jsx)("a",{href:null===c||void 0===c?void 0:c.strava,children:Object(h.jsx)(m.b,{})})]})]})},x=c(52),f=c.p+"static/media/devil_head.16e9fda6.png";var g=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(null),r=Object(o.a)(i,2),l=r[0],j=r[1],u=Object(s.useState)(!1),v=Object(o.a)(u,2),g=v[0],N=v[1],y=Object(s.useState)(null),I=Object(o.a)(y,2),w=I[0],k=I[1];return Object(s.useEffect)((function(){d.fetch('*[_type == "header"]').then((function(e){n(e[1])})).catch(console.error),d.fetch('*[_type == "socialLinks"]').then((function(e){j(e[0])})).catch(console.error),d.fetch('*[_type == "results"]{\n              year\n        }').then((function(e){k(e.map((function(e){return e.year})))})).catch(console.error)}),[]),null===w||void 0===w||w.sort(),Object(h.jsxs)("div",{className:"Header-Wrapper",children:[Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(a.b,{to:"/",children:Object(h.jsx)("img",{src:f,alt:null===c||void 0===c?void 0:c.title})})}),Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h1",{className:"shadow",children:null===c||void 0===c?void 0:c.title}),Object(h.jsx)("h1",{children:null===c||void 0===c?void 0:c.title})]}),Object(h.jsxs)("div",{className:"buttons",children:[(null===c||void 0===c?void 0:c.phone)&&Object(h.jsx)("a",{href:"tel:"+(null===l||void 0===l?void 0:l.phone),children:Object(h.jsx)(m.a,{})}),(null===c||void 0===c?void 0:c.email)&&Object(h.jsx)("a",{href:"mailto:"+(null===l||void 0===l?void 0:l.email),children:Object(h.jsx)(O.a,{})}),(null===c||void 0===c?void 0:c.twitter)&&Object(h.jsx)("a",{href:null===l||void 0===l?void 0:l.twitter,children:Object(h.jsx)(m.c,{})}),(null===c||void 0===c?void 0:c.strava)&&Object(h.jsx)("a",{href:null===l||void 0===l?void 0:l.strava,children:Object(h.jsx)(m.b,{})}),Object(h.jsx)("button",{className:"menu-button",onClick:function(){N(!0)},children:Object(h.jsx)(x.a,{})})]}),Object(h.jsx)(p,{header:c,socials:l,setMenuOpen:N,menuOpen:g,years:w})]}),Object(h.jsx)(b,{years:w})]})};c(133);var N=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(null),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(s.useEffect)((function(){d.fetch('*[_type == "footer"]').then((function(e){n(e[0])})).catch(console.error),d.fetch('*[_type == "socialLinks"]').then((function(e){j(e[0])})).catch(console.error)}),[]),Object(h.jsxs)("div",{className:"Footer",children:[Object(h.jsxs)("div",{className:"Top",children:[Object(h.jsxs)("div",{className:"philosophy",children:[Object(h.jsx)("h2",{children:"Program Philosophy:"}),Object(h.jsx)("p",{children:null===c||void 0===c?void 0:c.quote})]}),Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)(a.b,{to:"/",children:"Home"}),Object(h.jsxs)(a.b,{to:"/results/".concat((new Date).getFullYear()),children:[(new Date).getFullYear()," Results"]}),Object(h.jsx)(a.b,{to:"/practiceInfo",children:"Practice Times"}),Object(h.jsx)(a.b,{to:"/faq",children:"FAQ"}),Object(h.jsx)(a.b,{to:"/contact",children:"Coaches"})]})]}),Object(h.jsxs)("div",{className:"Bottom",children:[Object(h.jsxs)("div",{className:"buttons",children:[(null===c||void 0===c?void 0:c.phone)&&Object(h.jsx)("a",{href:"tel:"+(null===l||void 0===l?void 0:l.phone),children:Object(h.jsx)(m.a,{})}),(null===c||void 0===c?void 0:c.email)&&Object(h.jsx)("a",{href:"mailto:"+(null===l||void 0===l?void 0:l.email),children:Object(h.jsx)(O.a,{})}),(null===c||void 0===c?void 0:c.twitter)&&Object(h.jsx)("a",{href:null===l||void 0===l?void 0:l.twitter,children:Object(h.jsx)(m.c,{})}),(null===c||void 0===c?void 0:c.strava)&&Object(h.jsx)("a",{href:null===l||void 0===l?void 0:l.strava,children:Object(h.jsx)(m.b,{})})]}),Object(h.jsx)("div",{className:"copyright",children:"Copyright \xa9 2021 Brookville XC, All rights reserved"}),Object(h.jsx)("div",{children:Object(h.jsx)(a.b,{to:"/licenses",children:"Licenses"})})]})]})},y=(c(134),c(16)),I=c.n(y),w=c(13),k=I()(d);var C=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(3),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(s.useEffect)((function(){d.fetch('*[_type == "post"]{\n        title,\n        slug,\n        publishedAt,\n        mainImage{\n          asset->{\n          _id,\n          url\n        }\n      }\n    }').then((function(e){return n(e)})).catch(console.error)}),[]),c&&c.sort((function(e,t){return new Date(t.publishedAt)-new Date(e.publishedAt)})),Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)(w.a,{children:Object(h.jsx)("title",{children:"Home"})}),Object(h.jsx)("div",{className:"posts",children:c&&(null===c||void 0===c?void 0:c.map((function(e,t){return t===l?null:Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("div",{className:"post-details",children:[Object(h.jsx)("h2",{className:"post-title",children:e.title}),Object(h.jsx)(a.b,{className:"post-link",to:"/posts/"+e.slug.current,children:"Read Post"})]}),Object(h.jsx)("img",{src:(c=e.mainImage,k.image(c)).width(400).height(400).url(),alt:"Picture of "+e.title})]},e.slug.current);var c})))}),Object(h.jsx)("div",{className:"show-button",children:(null===c||void 0===c?void 0:c.length)>3?l<=(null===c||void 0===c?void 0:c.length)?Object(h.jsx)("button",{onClick:function(){j(l+3)},children:"Show More"}):Object(h.jsx)("button",{onClick:function(){j(l-3)},children:"Show Less"}):null})]})},E=c(19),S=c.n(E),L=(c(143),I()(d));var T=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],i=[];return Object(s.useEffect)((function(){d.fetch('*[_type == "coach"]{\n          name,\n          title,\n          team,\n          slug,\n          phone,\n          email,\n          image{\n            asset->{\n            _id,\n            url\n            }\n          },\n          bio\n        }').then((function(e){return n(e)})).catch(console.error)}),[]),c&&(i=c.sort((function(e,t){return e.title<t.title?1:-1})).sort((function(e,t){return e.team>t.team?1:-1})),c.sort((function(e,t){return e.team>t.team?1:e.team<=t.team?-1:e.title<t.title?1:-1})),console.log(i)),Object(h.jsxs)("div",{className:"Contact",children:[Object(h.jsx)(w.a,{children:Object(h.jsx)("title",{children:"Coaches"})}),Object(h.jsx)("h1",{children:"Meet the coaches!"}),i&&i.map((function(e,t){return Object(h.jsxs)("div",{className:"coach ".concat(t%2?"even":"odd"),children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("h2",{className:"name",children:[e.name,Object(h.jsx)("span",{className:"coach-title",children:"(".concat(e.team.toUpperCase()," ").concat(e.title,")")})]}),Object(h.jsx)(S.a,{blocks:e.bio,projectId:d.projectId,dataset:d.dataset}),e.phone&&Object(h.jsxs)("div",{className:"coach-phone",children:["Phone: ",e.phone]}),e.email&&Object(h.jsxs)("div",{className:"coach-email",children:["Email: ",e.email]})]}),Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{className:"image",src:(c=e.image,L.image(c)).width(400).height(400).url(),alt:"Picture of "+e.name})})]},e.slug);var c}))]})};c(144);var M=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(null),r=Object(o.a)(i,2),a=r[0],l=r[1];function j(e){switch(e.toLowerCase()){case"mon":return"Monday";case"tues":return"Tuesday";case"weds":return"Wednesday";case"thur":return"Thursday";case"fri":return"Friday";case"sat":return"Saturday";case"sun":return"Sunday";default:return"Invalid Day"}}function b(e){return null===e||void 0===e?void 0:e.map((function(e){var t;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:[Object(h.jsx)("span",{children:e.startDate})," - ",Object(h.jsx)("span",{children:e.endDate})]}),null===(t=e.practiceDays)||void 0===t?void 0:t.map((function(e){var t;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:[e.time," on"]}),null===(t=e.days)||void 0===t?void 0:t.map((function(t){return Object(h.jsx)("span",{children:j(t)},e._key+t)}))]},e._key)}))]},e._key)}))}return Object(s.useEffect)((function(){d.fetch('*[_type == "practiceInfo"]{\n          hsPractice,\n          msPractice\n    }').then((function(e){n(e[0].hsPractice),l(e[0].msPractice)})).catch(console.error)}),[]),Object(h.jsxs)("div",{className:"practiceInfo",children:[Object(h.jsx)(w.a,{children:Object(h.jsx)("title",{children:"Practice Info"})}),Object(h.jsx)("h1",{children:"Practice Times"}),Object(h.jsx)("h2",{children:"High School"}),b(c),Object(h.jsx)("h2",{children:"Middle School"}),b(a)]})},U=(c(145),c(30));var _=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){d.fetch('*[_type == "faq"]{\n              question,\n              answer\n        }').then((function(e){n(e)})).catch(console.error)}),[]),Object(h.jsxs)("div",{className:"faqs",children:[Object(h.jsx)(w.a,{children:Object(h.jsx)("title",{children:"FAQ"})}),Object(h.jsx)("h2",{children:"Frequently Asked Questions!"}),null===c||void 0===c?void 0:c.map((function(e){return Object(h.jsxs)("div",{className:"faq",children:[Object(h.jsx)("div",{className:"question",children:Object(h.jsxs)(U.Card,{color:"#8ac926",children:[Object(h.jsx)("strong",{children:"Q: "}),e.question]})}),Object(h.jsx)("div",{className:"answer",children:Object(h.jsxs)(U.Card,{color:"#1982c4",children:[Object(h.jsx)("strong",{children:"A: "}),Object(h.jsx)(S.a,{blocks:e.answer,projectId:d.clientConfig.projectId,dataset:d.clientConfig.dataset})]})})]})}))]})},P=c(56),A=c(57),F=(c(148),c(31)),q=["licenses"];function D(e){if(!e)return null;var t=/((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9_]{1,15})(\/([-a-z]{1,20}))?/i.exec(e);return t&&t.length>5?t[5]:null}var R=function(){var e=Object.keys(F).map((function(e){var t,c,s=F[e],n=s.licenses,i=Object(A.a)(s,q);if("@"===e[0]){var r=e.split("@"),a=Object(o.a)(r,3);t=a[1],c=a[2]}else{var l=e.split("@"),j=Object(o.a)(l,2);t=j[0],c=j[1]}var d,h,b=D(i.repository)||D(i.licenseUrl);return b&&(h="http://github.com/".concat(b,".png"),d="http://github.com/".concat(b)),Object(P.a)({key:e,name:t,image:h,userUrl:d,username:b,licenses:n.slice(0,405),version:c},i)}));return Object(h.jsxs)("div",{className:"Licenses",children:[Object(h.jsx)(w.a,{children:Object(h.jsx)("title",{children:"Licenses"})}),e.map((function(e,t){var c=e.image,s=e.userUrl,n=e.username,i=e.name,r=e.version,a=(e.licenses,e.repository),l=(e.licenseUrl,i);return n&&l.toLowerCase()!==n.toLowerCase()&&(l+=" by ".concat(n.charAt(0).toUpperCase()+n.substring(1))),Object(h.jsx)("div",{className:"LicensesListItem",children:Object(h.jsx)("div",{className:"cardShadow",children:Object(h.jsxs)("div",{className:"card",children:[c&&Object(h.jsx)("a",{href:s,children:Object(h.jsx)("img",{src:c,className:"image",alt:l})}),Object(h.jsx)("a",{href:a,className:"item",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"name",children:l}),Object(h.jsx)("div",{className:"text",children:r})]})})]})})},t)}))]})},H=(c(149),I()(d));function Q(e){return H.image(e)}function B(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(l.f)().slug;return Object(s.useEffect)((function(){d.fetch('*[slug.current == $slug]{\n          title,\n          slug,\n          mainImage{\n            asset->{\n              _id,\n              url\n             }\n           },\n         body,\n        "name": author->name,\n        "authorImage": author->image\n       }',{slug:i}).then((function(e){return n(e[0])})).catch(console.error)}),[i]),c?Object(h.jsxs)("div",{className:"Post",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:c.title}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("img",{src:Q(c.authorImage).width(40).height(40).url(),alt:"Author is Kap"}),Object(h.jsxs)("h4",{className:"author",children:["A post by ",c.name]})]})]}),Object(h.jsx)("img",{className:"image",src:Q(c.mainImage).width(1e3).url(),alt:""}),Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{blocks:c.body,projectId:d.clientConfig.projectId,dataset:d.clientConfig.dataset})})]}):Object(h.jsx)("div",{children:"Loading..."})}c(150);var J=c(55);function z(){var e,t,c=Object(s.useState)(null),n=Object(o.a)(c,2),i=n[0],r=n[1],a=Object(l.f)().slug;Object(s.useEffect)((function(){d.fetch("*[_type == 'results' && year == ".concat(a,"]{\n          meet\n       }"),{slug:a}).then((function(e){return r(e[0])})).catch(console.error)}),[a]);var j=null===i||void 0===i?void 0:i.meet;return j=null===(e=j)||void 0===e?void 0:e.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),i?Object(h.jsxs)("div",{className:"results",children:[Object(h.jsxs)("h1",{children:[a," Results"]}),Object(h.jsx)("div",{className:"results-wrapper",children:null===(t=j)||void 0===t?void 0:t.map((function(e){var t,c,s=e.date.split("-")[1],n=e.date.split("-")[2],i=void 0!==e.file?"".concat(function(e){var t=e.split("-"),c={assetId:t[1],extension:t[2]};return Object(J.a)(c,{dataset:"production",projectId:"411iwivp"})}(null===(t=e.file)||void 0===t||null===(c=t.asset)||void 0===c?void 0:c._ref)):e.url;return Object(h.jsx)("div",{className:"meet",children:Object(h.jsxs)("a",{className:"link",href:i,target:"_blank",rel:"noreferrer",children:[s,"/",n," ",e.meet]})})}))})]}):Object(h.jsx)("div",{children:"Loading..."})}c(151);var G=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(a.a,{children:Object(h.jsx)(l.c,{children:Object(h.jsxs)(l.a,{path:"*",children:[Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"Container",children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(C,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/contact",children:Object(h.jsx)(T,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/practiceInfo",children:Object(h.jsx)(M,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/faq",children:Object(h.jsx)(_,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/licenses",children:Object(h.jsx)(R,{})}),Object(h.jsx)(l.a,{path:"/posts/:slug",children:Object(h.jsx)(B,{})}),Object(h.jsx)(l.a,{path:"/results/:slug",children:Object(h.jsx)(z,{})})]})}),Object(h.jsx)(N,{})]})})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,153)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),W()},31:function(e){e.exports=JSON.parse('{"@sanity/asset-utils@1.1.5":{"licenses":"MIT","repository":"https://github.com/sanity-io/asset-utils","licenseUrl":"https://github.com/sanity-io/asset-utils/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@sanity/block-content-to-react@3.0.0":{"licenses":"MIT","repository":"https://github.com/sanity-io/block-content-to-react","licenseUrl":"https://github.com/sanity-io/block-content-to-react/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@sanity/client@2.11.0":{"licenses":"MIT","repository":"https://github.com/sanity-io/sanity","licenseUrl":"https://github.com/sanity-io/sanity/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@sanity/image-url@0.140.22":{"licenses":"MIT","repository":"https://github.com/sanity-io/image-url","licenseUrl":"https://github.com/sanity-io/image-url/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@testing-library/jest-dom@5.14.1":{"licenses":"MIT","repository":"https://github.com/testing-library/jest-dom","licenseUrl":"https://github.com/testing-library/jest-dom/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@testing-library/react@11.2.7":{"licenses":"MIT","repository":"https://github.com/testing-library/react-testing-library","licenseUrl":"https://github.com/testing-library/react-testing-library/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@testing-library/user-event@12.8.3":{"licenses":"MIT","repository":"https://github.com/testing-library/user-event","licenseUrl":"https://github.com/testing-library/user-event/raw/master/LICENSE","parents":"brookvillexc-frontend"},"bootstrap@5.0.2":{"licenses":"MIT","repository":"https://github.com/twbs/bootstrap","licenseUrl":"https://github.com/twbs/bootstrap/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-collapse@5.1.0":{"licenses":"MIT","repository":"https://github.com/nkbt/react-collapse","licenseUrl":"https://github.com/nkbt/react-collapse/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-dom@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-helmet@6.1.0":{"licenses":"MIT","repository":"https://github.com/nfl/react-helmet","licenseUrl":"https://github.com/nfl/react-helmet/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-icons@4.2.0":{"licenses":"MIT","repository":"https://github.com/react-icons/react-icons","licenseUrl":"https://github.com/react-icons/react-icons/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-router-dom@5.2.0":{"licenses":"MIT","repository":"https://github.com/ReactTraining/react-router","licenseUrl":"https://github.com/ReactTraining/react-router/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-scripts@4.0.3":{"licenses":"MIT","repository":"https://github.com/facebook/create-react-app","licenseUrl":"https://github.com/facebook/create-react-app/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-spinners@0.11.0":{"licenses":"MIT","repository":"https://github.com/davidhu2000/react-spinners","licenseUrl":"https://github.com/davidhu2000/react-spinners/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"brookvillexc-frontend"},"reactstrap@8.9.0":{"licenses":"MIT","repository":"https://github.com/reactstrap/reactstrap","licenseUrl":"https://github.com/reactstrap/reactstrap/raw/master/LICENSE","parents":"brookvillexc-frontend"},"sass@1.35.2":{"licenses":"MIT","repository":"https://github.com/sass/dart-sass","licenseUrl":"https://github.com/sass/dart-sass/raw/master/LICENSE","parents":"brookvillexc-frontend"},"web-vitals@1.1.2":{"licenses":"Apache-2.0","repository":"https://github.com/GoogleChrome/web-vitals","licenseUrl":"https://github.com/GoogleChrome/web-vitals/raw/master/LICENSE","parents":"brookvillexc-frontend"}}')},62:function(e,t,c){},63:function(e,t,c){}},[[152,1,2]]]);
//# sourceMappingURL=main.a8a1dc62.chunk.js.map