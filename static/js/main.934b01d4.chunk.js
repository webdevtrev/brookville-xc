(this["webpackJsonpbrookvillexc-frontend"]=this["webpackJsonpbrookvillexc-frontend"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(33),s=n.n(i),r=(n(43),n(36)),o=n(3),j=(n(44),n(1));var l=function(){return Object(j.jsx)("div",{className:"Header",children:"Header"})};n(46);var d=function(){return Object(j.jsx)("div",{className:"Footer",children:"Footer"})};n(47);var u=function(){return Object(j.jsx)("div",{className:"Home",children:"Home"})},h=n(38),b=n(34),x=n.n(b)()({projectId:"411iwivp",dataset:"production",useCdn:!0}),f=n(35),O=n.n(f),m=(n(109),O()(x));var v=function(){var e=Object(c.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){x.fetch('*[_type == "coach"]{\n        name,\n        title,\n        slug,\n        image{\n          asset->{\n          _id,\n          url\n        }\n      }\n    }').then((function(e){return a(e)})).catch(console.error)}),[]),console.log(n),Object(j.jsxs)("div",{className:"Contact",children:[Object(j.jsx)("h1",{children:"Meet the coaches!"}),n&&n.map((function(e){return Object(j.jsxs)("div",{className:"coach",children:[Object(j.jsx)("h2",{className:"name",children:e.name}),Object(j.jsx)("h3",{className:"title",children:e.title}),Object(j.jsx)("img",{src:(t=e.image,m.image(t)).width(200).url(),alt:"Picture of "+e.name})]},e.slug);var t}))]})};n(110);var p=function(){return Object(j.jsx)("div",{className:"Info",children:"Info"})};n(111);var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(r.a,{children:Object(j.jsx)(o.c,{children:Object(j.jsxs)(o.a,{path:"*",children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"Container",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/contact",children:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/info",children:Object(j.jsx)(p,{})})]})}),Object(j.jsx)(d,{})]})})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.934b01d4.chunk.js.map