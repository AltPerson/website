(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(14),a=c.n(i),r=(c(25),c(26),c(9)),o=(c(27),c(1));var l=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"header-inner",children:Object(o.jsx)("nav",{className:"header-navigation navigation",children:Object(o.jsxs)("ul",{className:"navigation-list",children:[Object(o.jsx)("li",{className:"navigation-list__item",children:Object(o.jsx)(r.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"navigation-list__item",children:Object(o.jsx)(r.b,{to:"/news",children:"News"})}),Object(o.jsx)("li",{className:"navigation-list__item",children:Object(o.jsx)(r.b,{to:"/profile",children:"Profile"})})]})})})})};c(37);var j=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"footer-title",children:Object(o.jsx)("a",{className:"footer-title__link",href:"https://reactjs.org",children:"Created with React"})})})};var d=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"home-inner",children:[Object(o.jsx)("div",{className:"home-inner__title",children:"Welcome to Home Page"}),Object(o.jsx)("div",{className:"home-inner__info",children:"The place where it all begins"})]}),Object(o.jsx)(j,{})]})};c(38);var b=function(e){return Object(o.jsxs)("div",{className:"post",children:[Object(o.jsx)("img",{src:e.src,alt:"",className:"post__image"}),Object(o.jsx)("h5",{className:"post__title",children:e.title}),Object(o.jsx)("p",{className:"post__description",children:e.description})]})},m=c.p+"static/media/car.7fadbe1b.jpg",h=c.p+"static/media/man.dfeef525.jpg",u=c.p+"static/media/people.047226b0.jpg";var O=function(){return Object(o.jsxs)("div",{className:"posts-inner",children:[Object(o.jsx)(b,{src:m,title:"Car at low price",description:"The stranger sells a car at very low price only 2000$"}),Object(o.jsx)(b,{src:h,title:"A man who reached a sky",description:"The stranger reached a sky in a very interesting way"}),Object(o.jsx)(b,{src:u,title:"Why Don't Young People Read the News?",description:"Kids Are Too Busy With Facebook and Texting, Author Says"})]})};c(39);var p=function(){return Object(o.jsxs)("div",{className:"news",children:[Object(o.jsx)(l,{className:"header"}),Object(o.jsx)("div",{className:"news-inner",children:Object(o.jsx)(O,{className:"header"})}),Object(o.jsx)(j,{className:"footer"})]})},x=(c(40),c(11)),g="SET_AUTH",f={isAuthenticated:!1};var v=function(e){return{type:g,payload:e}},N=c(8);var _=function(){var e=Object(N.b)();return Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"profile-inner",children:[Object(o.jsxs)("div",{className:"profile-content",children:[Object(o.jsx)("img",{src:"../../img/profile-logo.jpg",alt:"",className:"profile__img"}),Object(o.jsxs)("div",{className:"profile-description",children:[Object(o.jsx)("div",{className:"profile-description__name",children:"Alex"}),Object(o.jsx)("div",{className:"profile-description__surname",children:"Moran"}),Object(o.jsx)("div",{className:"profile-description__info",children:"Quarterback at BMS"})]})]}),Object(o.jsx)("button",{onClick:function(){return e(v(!1))},className:"profile-quite",children:"Logout"})]}),Object(o.jsx)(j,{})]})},w=c(13);c(42);var y=function(){var e=Object(s.useState)(""),t=Object(w.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!1),a=Object(w.a)(i,2),l=a[0],j=a[1],d=Object(s.useState)(""),b=Object(w.a)(d,2),m=b[0],h=b[1],u=Object(s.useState)(!1),O=Object(w.a)(u,2),p=O[0],x=O[1],g=Object(N.b)();return Object(o.jsx)("div",{className:"login",children:Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsx)(r.b,{to:"/",children:"Back to Home"}),Object(o.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",className:"login-name",value:c}),Object(o.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"text",className:"login-password",value:m}),localStorage.getItem("login")&&localStorage.getItem("password")?Object(o.jsx)("button",{onClick:function(){return function(e,t,c,s,n,i){e===localStorage.getItem("login")&&t===localStorage.getItem("password")?c(v(!0)):(s(!0),setTimeout((function(){n(""),i(""),s(!1)}),2e3))}(c,m,g,j,n,h)},className:"login-submit",children:"Access"}):Object(o.jsx)("button",{onClick:function(){return function(e,t,c){localStorage.setItem("login",e),localStorage.setItem("password",t),document.location.reload(),c(!0),setTimeout((function(){c(!1)}),5e3)}(c,m,x)},className:"login-submit",children:"Register"}),p?Object(o.jsxs)("div",{className:"tip",children:["Login:",c," Password:",m]}):"",l?Object(o.jsxs)("div",{className:"Error",children:["Authentication Error | Wrong Creds",Object(o.jsx)("br",{}),"CTRL + C ",Object(o.jsx)("br",{}),"Application -> Local Storage"]}):""]})})},S=c(3);c(43);var k=function(){var e=Object(N.c)((function(e){return e.isAuthenticated}));return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"app-container",children:Object(o.jsx)(r.a,{children:Object(o.jsxs)(S.d,{children:[Object(o.jsx)(S.b,{exact:!0,path:"/",component:d}),Object(o.jsx)(S.b,{path:"/news",component:p}),Object(o.jsx)(S.b,{path:"/profile",component:e?_:y}),Object(o.jsx)(S.b,{path:"/login",component:y}),Object(o.jsx)(S.a,{to:"/"})]})})})})},A=c(20),C=Object(A.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(x.a)(Object(x.a)({},e),{},{isAuthenticated:t.payload});default:return e}}));a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(N.a,{store:C,children:Object(o.jsx)(k,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.07049275.chunk.js.map