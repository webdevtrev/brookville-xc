(this["webpackJsonpbrookvillexc-frontend"]=this["webpackJsonpbrookvillexc-frontend"]||[]).push([[0],{123:function(e,t,c){},129:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},147:function(e,t,c){},148:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),r=c(47),i=c.n(r),a=(c(60),c(6)),l=c(7),o=c(5),j=(c(61),c(48)),b=c.n(j)()({projectId:"411iwivp",dataset:"production",apiVersion:"2021-07-12",useCdn:!0}),h=(c(123),c(1));var u=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b.fetch('*[_type == "results"]{\n              year\n        }').then((function(e){n(e)})).catch(console.error)}),[]),Object(h.jsx)("div",{className:"Navbar-Desktop",children:Object(h.jsxs)("ul",{className:"content-wrapper header-nav-list",children:[Object(h.jsx)("li",{className:"nav-group",children:Object(h.jsx)(a.b,{className:"nav-item",to:"/",children:"Home"})}),Object(h.jsxs)("li",{className:"nav-group",children:[Object(h.jsx)("button",{className:"nav-item",children:"Results"}),Object(h.jsx)("ul",{className:"dropdown",children:null===c||void 0===c?void 0:c.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)(a.b,{className:"nav-item",to:"/results/"+e.year,children:[" ",e.year," Results"]})},e.year)}))})]}),Object(h.jsxs)("li",{className:"nav-group",children:[Object(h.jsx)("button",{className:"nav-item",children:"Info"}),Object(h.jsxs)("ul",{className:"dropdown",children:[Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{className:"nav-item",to:"/practiceInfo",children:"Practice Info"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{className:"nav-item",to:"/faq",children:"FAQ"})})]})]}),Object(h.jsx)("li",{className:"nav-group",children:Object(h.jsx)(a.b,{className:"nav-item",to:"/contact",children:"Coaches"})})]})})},d=(c(129),c(29)),O=c(13),m=c(21),p=c(50);var x=function(e){var t=e.header,c=e.socials,n=e.menuOpen,r=e.setMenuOpen,i=Object(s.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1],x=Object(s.useState)(!1),v=Object(o.a)(x,2),f=v[0],g=v[1],y=function(){return u(!j)},N=function(){return g(!f)},I=Object(s.useState)(null),k=Object(o.a)(I,2),w=k[0],C=k[1];function E(){r(!1)}return Object(s.useEffect)((function(){b.fetch('*[_type == "results"]{\n              year\n        }').then((function(e){C(e)})).catch(console.error)}),[]),Object(h.jsxs)("div",{className:"menu ".concat(!n&&"closed"),children:[Object(h.jsxs)("div",{className:"menu-header",children:[Object(h.jsx)("h1",{children:"Menu"}),Object(h.jsx)("button",{className:"close",onClick:function(){E()},children:Object(h.jsx)(p.a,{})})]}),Object(h.jsxs)("div",{className:"menu-body",children:[Object(h.jsx)(a.b,{onClick:E,to:"/",children:"Home"}),Object(h.jsx)("button",{onClick:y,children:"Results"}),Object(h.jsx)(d.Collapse,{isOpened:j,children:Object(h.jsx)("ul",{children:null===w||void 0===w?void 0:w.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)(a.b,{onClick:function(){E(),y()},to:"/results/"+e.year,children:[" ",e.year," Results"]})},"menu-"+e.year)}))})}),Object(h.jsx)("button",{onClick:N,children:"Info"}),Object(h.jsx)(d.Collapse,{isOpened:f,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{onClick:function(){E(),N()},to:"/practiceInfo",children:"Practice Info"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{onClick:function(){E(),N()},to:"/faq",children:"FAQ"})})]})}),Object(h.jsx)(a.b,{onClick:E,to:"/contact",children:"Coaches"})]}),Object(h.jsxs)("div",{className:"menu-footer",children:[(null===t||void 0===t?void 0:t.phone)&&Object(h.jsx)("a",{href:"tel:"+(null===c||void 0===c?void 0:c.phone),children:Object(h.jsx)(O.a,{})}),(null===t||void 0===t?void 0:t.email)&&Object(h.jsx)("a",{href:"mailto:"+(null===c||void 0===c?void 0:c.email),children:Object(h.jsx)(m.a,{})}),(null===t||void 0===t?void 0:t.twitter)&&Object(h.jsx)("a",{href:null===c||void 0===c?void 0:c.twitter,children:Object(h.jsx)(O.c,{})}),(null===t||void 0===t?void 0:t.strava)&&Object(h.jsx)("a",{href:null===c||void 0===c?void 0:c.strava,children:Object(h.jsx)(O.b,{})})]})]})},v=c(51),f=c.p+"static/media/devil_head.16e9fda6.png";var g=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(null),i=Object(o.a)(r,2),a=i[0],l=i[1],j=Object(s.useState)(!1),d=Object(o.a)(j,2),p=d[0],g=d[1];return Object(s.useEffect)((function(){b.fetch('*[_type == "header"]').then((function(e){n(e[1])})).catch(console.error),b.fetch('*[_type == "socialLinks"]').then((function(e){l(e[0])})).catch(console.error)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("img",{src:f,alt:null===c||void 0===c?void 0:c.title})}),Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h1",{className:"shadow",children:null===c||void 0===c?void 0:c.title}),Object(h.jsx)("h1",{children:null===c||void 0===c?void 0:c.title})]}),Object(h.jsxs)("div",{className:"buttons",children:[(null===c||void 0===c?void 0:c.phone)&&Object(h.jsx)("a",{href:"tel:"+(null===a||void 0===a?void 0:a.phone),children:Object(h.jsx)(O.a,{})}),(null===c||void 0===c?void 0:c.email)&&Object(h.jsx)("a",{href:"mailto:"+(null===a||void 0===a?void 0:a.email),children:Object(h.jsx)(m.a,{})}),(null===c||void 0===c?void 0:c.twitter)&&Object(h.jsx)("a",{href:null===a||void 0===a?void 0:a.twitter,children:Object(h.jsx)(O.c,{})}),(null===c||void 0===c?void 0:c.strava)&&Object(h.jsx)("a",{href:null===a||void 0===a?void 0:a.strava,children:Object(h.jsx)(O.b,{})}),Object(h.jsx)("button",{className:"menu-button",onClick:function(){g(!0)},children:Object(h.jsx)(v.a,{})})]}),Object(h.jsx)(x,{header:c,socials:a,setMenuOpen:g,menuOpen:p})]}),Object(h.jsx)(u,{})]})};c(131);var y=function(){return Object(h.jsxs)("div",{className:"Footer",children:[Object(h.jsx)(a.b,{to:"/",children:"Home"}),Object(h.jsx)(a.b,{to:"/practiceInfo",children:"practiceInfo"}),Object(h.jsx)(a.b,{to:"/faq",children:"FAQ"}),Object(h.jsx)(a.b,{to:"/contact",children:"Contact"}),Object(h.jsx)(a.b,{to:"/licenses",children:"Licenses"})]})},N=(c(132),c(16)),I=c.n(N),k=c(12),w=I()(b);var C=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b.fetch('*[_type == "post"]{\n        title,\n        slug,\n        mainImage{\n          asset->{\n          _id,\n          url\n        }\n      }\n    }').then((function(e){return n(e)})).catch(console.error)}),[]),Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)("title",{children:"Home"})}),c&&(null===c||void 0===c?void 0:c.map((function(e){return Object(h.jsxs)("div",{className:"post",children:[Object(h.jsx)("h2",{className:"title",children:e.title}),Object(h.jsx)("img",{src:(t=e.mainImage,w.image(t)).width(400).height(400).url(),alt:"Picture of "+e.title}),Object(h.jsx)(a.b,{to:"/posts/"+e.slug.current,children:"Read Post"})]},e.slug.current);var t})))]})},E=(c(133),I()(b));var S=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b.fetch('*[_type == "coach"]{\n        name,\n        title,\n        slug,\n        image{\n          asset->{\n          _id,\n          url\n        }\n      }\n    }').then((function(e){return n(e)})).catch(console.error)}),[]),console.log(c),Object(h.jsxs)("div",{className:"Contact",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)("title",{children:"Coaches"})}),Object(h.jsx)("h1",{children:"Meet the coaches!"}),c&&c.map((function(e){return Object(h.jsxs)("div",{className:"coach",children:[Object(h.jsx)("h2",{className:"name",children:e.name}),Object(h.jsx)("h3",{className:"title",children:e.title}),Object(h.jsx)("img",{src:(t=e.image,E.image(t)).width(400).height(400).url(),alt:"Picture of "+e.name})]},e.slug);var t}))]})};c(134);var L=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(null),i=Object(o.a)(r,2),a=i[0],l=i[1];function j(e){switch(e.toLowerCase()){case"mon":return"Monday";case"tues":return"Tuesday";case"weds":return"Wednesday";case"thur":return"Thursday";case"fri":return"Friday";case"sat":return"Saturday";case"sun":return"Sunday";default:return"Invalid Day"}}function u(e){return null===e||void 0===e?void 0:e.map((function(e){var t;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:[Object(h.jsx)("span",{children:e.startDate})," - ",Object(h.jsx)("span",{children:e.endDate})]}),null===(t=e.practiceDays)||void 0===t?void 0:t.map((function(e){var t;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:[e.time," on"]}),null===(t=e.days)||void 0===t?void 0:t.map((function(t){return Object(h.jsx)("span",{children:j(t)},e._key+t)}))]},e._key)}))]},e._key)}))}return Object(s.useEffect)((function(){b.fetch('*[_type == "practiceInfo"]{\n          hsPractice,\n          msPractice\n    }').then((function(e){n(e[0].hsPractice),l(e[0].msPractice)})).catch(console.error)}),[]),Object(h.jsxs)("div",{className:"practiceInfo",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)("title",{children:"Practice Info"})}),Object(h.jsx)("h1",{children:"Practice Times"}),Object(h.jsx)("h2",{children:"High School"}),u(c),Object(h.jsx)("h2",{children:"Middle School"}),u(a)]})},M=(c(135),c(22)),T=c.n(M);var U=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b.fetch('*[_type == "faq"]{\n              question,\n              answer\n        }').then((function(e){n(e)})).catch(console.error)}),[]),console.log(c),Object(h.jsxs)("div",{className:"faqs",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)("title",{children:"FAQ"})}),null===c||void 0===c?void 0:c.map((function(e){return Object(h.jsxs)("div",{className:"faq",children:[Object(h.jsxs)("div",{className:"question",children:[Object(h.jsx)("strong",{children:"Question:"}),e.question]}),Object(h.jsxs)("div",{className:"answer",children:[Object(h.jsx)("strong",{children:"Answer:"}),Object(h.jsx)(T.a,{blocks:e.answer,projectId:b.clientConfig.projectId,dataset:b.clientConfig.dataset})]})]})}))]})},_=c(54),P=c(55),F=(c(144),c(30)),q=["licenses"];function A(e){if(!e)return null;var t=/((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9_]{1,15})(\/([-a-z]{1,20}))?/i.exec(e);return t&&t.length>5?t[5]:null}var H=function(){var e=Object.keys(F).map((function(e){var t,c,s=F[e],n=s.licenses,r=Object(P.a)(s,q);if("@"===e[0]){var i=e.split("@"),a=Object(o.a)(i,3);t=a[1],c=a[2]}else{var l=e.split("@"),j=Object(o.a)(l,2);t=j[0],c=j[1]}var b,h,u=A(r.repository)||A(r.licenseUrl);return u&&(h="http://github.com/".concat(u,".png"),b="http://github.com/".concat(u)),Object(_.a)({key:e,name:t,image:h,userUrl:b,username:u,licenses:n.slice(0,405),version:c},r)}));return Object(h.jsxs)("div",{className:"Licenses",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)("title",{children:"Licenses"})}),e.map((function(e,t){var c=e.image,s=e.userUrl,n=e.username,r=e.name,i=e.version,a=(e.licenses,e.repository),l=(e.licenseUrl,r);return n&&l.toLowerCase()!==n.toLowerCase()&&(l+=" by ".concat(n.charAt(0).toUpperCase()+n.substring(1))),Object(h.jsx)("div",{className:"LicensesListItem",children:Object(h.jsx)("div",{className:"cardShadow",children:Object(h.jsxs)("div",{className:"card",children:[c&&Object(h.jsx)("a",{href:s,children:Object(h.jsx)("img",{src:c,className:"image",alt:l})}),Object(h.jsx)("a",{href:a,className:"item",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"name",children:l}),Object(h.jsx)("div",{className:"text",children:i})]})})]})})},t)}))]})},R=(c(145),I()(b));function D(e){return R.image(e)}function Q(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(l.f)().slug;return Object(s.useEffect)((function(){b.fetch('*[slug.current == $slug]{\n          title,\n          slug,\n          mainImage{\n            asset->{\n              _id,\n              url\n             }\n           },\n         body,\n        "name": author->name,\n        "authorImage": author->image\n       }',{slug:r}).then((function(e){return n(e[0])})).catch(console.error)}),[r]),c?Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:c.title}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:D(c.authorImage).width(100).url(),alt:"Author is Kap"}),Object(h.jsx)("h4",{children:c.name})]})]}),Object(h.jsx)("img",{src:D(c.mainImage).width(200).url(),alt:""}),Object(h.jsx)("div",{children:Object(h.jsx)(T.a,{blocks:c.body,projectId:b.clientConfig.projectId,dataset:b.clientConfig.dataset})})]}):Object(h.jsx)("div",{children:"Loading..."})}c(146);function J(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(l.f)().slug;return console.log(r),Object(s.useEffect)((function(){b.fetch("*[_type == 'results' && year == ".concat(r,"]{\n          meet\n       }"),{slug:r}).then((function(e){return n(e[0])})).catch(console.error)}),[r]),console.log(c),c?Object(h.jsx)("div",{className:"results"}):Object(h.jsx)("div",{children:"Loading..."})}c(147);var z=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(a.a,{children:Object(h.jsx)(l.c,{children:Object(h.jsxs)(l.a,{path:"*",children:[Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"Container",children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(C,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/contact",children:Object(h.jsx)(S,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/practiceInfo",children:Object(h.jsx)(L,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/faq",children:Object(h.jsx)(U,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/licenses",children:Object(h.jsx)(H,{})}),Object(h.jsx)(l.a,{path:"/posts/:slug",children:Object(h.jsx)(Q,{})}),Object(h.jsx)(l.a,{path:"/results/:slug",children:Object(h.jsx)(J,{})})]})}),Object(h.jsx)(y,{})]})})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,149)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),B()},30:function(e){e.exports=JSON.parse('{"@sanity/block-content-to-react@3.0.0":{"licenses":"MIT","repository":"https://github.com/sanity-io/block-content-to-react","licenseUrl":"https://github.com/sanity-io/block-content-to-react/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@sanity/client@2.11.0":{"licenses":"MIT","repository":"https://github.com/sanity-io/sanity","licenseUrl":"https://github.com/sanity-io/sanity/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@sanity/image-url@0.140.22":{"licenses":"MIT","repository":"https://github.com/sanity-io/image-url","licenseUrl":"https://github.com/sanity-io/image-url/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@testing-library/jest-dom@5.14.1":{"licenses":"MIT","repository":"https://github.com/testing-library/jest-dom","licenseUrl":"https://github.com/testing-library/jest-dom/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@testing-library/react@11.2.7":{"licenses":"MIT","repository":"https://github.com/testing-library/react-testing-library","licenseUrl":"https://github.com/testing-library/react-testing-library/raw/master/LICENSE","parents":"brookvillexc-frontend"},"@testing-library/user-event@12.8.3":{"licenses":"MIT","repository":"https://github.com/testing-library/user-event","licenseUrl":"https://github.com/testing-library/user-event/raw/master/LICENSE","parents":"brookvillexc-frontend"},"bootstrap@5.0.2":{"licenses":"MIT","repository":"https://github.com/twbs/bootstrap","licenseUrl":"https://github.com/twbs/bootstrap/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-collapse@5.1.0":{"licenses":"MIT","repository":"https://github.com/nkbt/react-collapse","licenseUrl":"https://github.com/nkbt/react-collapse/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-dom@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-helmet@6.1.0":{"licenses":"MIT","repository":"https://github.com/nfl/react-helmet","licenseUrl":"https://github.com/nfl/react-helmet/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-icons@4.2.0":{"licenses":"MIT","repository":"https://github.com/react-icons/react-icons","licenseUrl":"https://github.com/react-icons/react-icons/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-router-dom@5.2.0":{"licenses":"MIT","repository":"https://github.com/ReactTraining/react-router","licenseUrl":"https://github.com/ReactTraining/react-router/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-scripts@4.0.3":{"licenses":"MIT","repository":"https://github.com/facebook/create-react-app","licenseUrl":"https://github.com/facebook/create-react-app/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react-spinners@0.11.0":{"licenses":"MIT","repository":"https://github.com/davidhu2000/react-spinners","licenseUrl":"https://github.com/davidhu2000/react-spinners/raw/master/LICENSE","parents":"brookvillexc-frontend"},"react@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"brookvillexc-frontend"},"reactstrap@8.9.0":{"licenses":"MIT","repository":"https://github.com/reactstrap/reactstrap","licenseUrl":"https://github.com/reactstrap/reactstrap/raw/master/LICENSE","parents":"brookvillexc-frontend"},"sass@1.35.2":{"licenses":"MIT","repository":"https://github.com/sass/dart-sass","licenseUrl":"https://github.com/sass/dart-sass/raw/master/LICENSE","parents":"brookvillexc-frontend"},"web-vitals@1.1.2":{"licenses":"Apache-2.0","repository":"https://github.com/GoogleChrome/web-vitals","licenseUrl":"https://github.com/GoogleChrome/web-vitals/raw/master/LICENSE","parents":"brookvillexc-frontend"}}')},60:function(e,t,c){},61:function(e,t,c){}},[[148,1,2]]]);
//# sourceMappingURL=main.a03cf90c.chunk.js.map