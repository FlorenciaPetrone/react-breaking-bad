(this["webpackJsonpreact-breaking-bad"]=this["webpackJsonpreact-breaking-bad"]||[]).push([[0],{18:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(28),s=c.n(r),i=c(9),o=c(2),j=c(14),b=c.n(j),l=c(29),d=c(8),u=c(17),h=c(0),O=n.a.createContext(),x=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(d.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)([]),o=Object(d.a)(i,2),j=o[0],b=o[1],l=Object(a.useState)(!1),x=Object(d.a)(l,2),m=x[0],f=x[1];return Object(h.jsx)(O.Provider,{value:{items:r,setItems:s,favorited:j,toggleFavorite:function(e){var t=r.map((function(t){return t.char_id===e?Object(u.a)(Object(u.a)({},t),{},{isFavorite:!t.isFavorite}):t}));s(t);var c=t.filter((function(e){return!0===e.isFavorite}));b(c)},buttonClicked:m,setButtonClicked:f},children:t})},m=c.p+"static/media/logo.e6ecab44.png",f=(c(18),function(){var e=Object(a.useContext)(O),t=e.buttonClicked,c=e.setButtonClicked,n=t?"none":"block";return Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{className:"center",children:Object(h.jsx)("img",{src:m,alt:""})}),Object(h.jsx)(i.b,{to:"/favorite",children:Object(h.jsx)("button",{className:"fav-character",onClick:function(){return c(!0)},style:{display:"".concat(n)},children:"Favorite Characters"})})]})}),v=function(e){var t=e.item,c=Object(a.useContext)(O).toggleFavorite;return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-inner",children:[Object(h.jsx)("div",{className:"card-front",children:Object(h.jsx)("img",{src:t.img,alt:""})}),Object(h.jsxs)("div",{className:"card-back",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Status:"})," ",t.status]})]}),Object(h.jsx)("button",{className:"btn",onClick:function(){return c(t.char_id)},children:t.isFavorite?"Remove from Favorite":"Add to Favorite"})]})]})})},p=c.p+"static/media/spinner.11d9cde8.gif",g=function(){return Object(h.jsx)("img",{src:p,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},k=function(e){var t=e.isLoading,c=e.items;return t?Object(h.jsx)(g,{}):Object(h.jsx)("section",{className:"cards",children:c.map((function(e){return Object(h.jsx)(v,{item:e},e.char_id)}))})},N=function(e){var t=e.getQuery,c=Object(a.useState)(""),n=Object(d.a)(c,2),r=n[0],s=n[1];return Object(h.jsx)("section",{className:"search",children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Characters",value:r,onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})})},y=c(31),C=c.n(y),w=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],o=s[1],j=Object(a.useContext)(O),u=j.items,x=j.setItems;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()("https://www.breakingbadapi.com/api/characters?name=".concat(i));case 2:t=e.sent,x(t.data),n(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(N,{getQuery:function(e){return o(e)}}),Object(h.jsx)(k,{isLoading:c,items:u})]})},F=function(){var e=Object(a.useContext)(O),t=e.favorited,c=e.setButtonClicked;return t.length>0?Object(h.jsxs)("div",{className:"fav-container",children:[Object(h.jsx)("h1",{className:"favorite-text",children:"These are your favorite characters"}),Object(h.jsx)("section",{className:"cards",children:t.map((function(e){return Object(h.jsx)(v,{item:e},e.char_id)}))}),Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)("button",{className:"fav-character-on",children:"Go back to Home Page "})})]}):Object(h.jsxs)("div",{className:"empty-favorite",children:[Object(h.jsxs)("h2",{className:"favorite-text",children:["You don't have any favorite character yet!"," "]}),Object(h.jsx)(i.b,{to:"/",children:Object(h.jsxs)("button",{className:"fav-character",onClick:function(){return c(!1)},children:["Go back to Home Page"," "]})})]})},S=function(){return Object(h.jsxs)("div",{className:"social-container",children:[Object(h.jsx)("a",{href:"https://github.com/FlorenciaPetrone",children:Object(h.jsx)("i",{class:"fab fa-github-square fa-2x"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/florencia-petrone/",children:Object(h.jsx)("i",{class:"fab fa-linkedin fa-2x"})})]})},B=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(h.jsx)(o.a,{path:"/favorite",component:F})]}),Object(h.jsx)(S,{})]})};s.a.render(Object(h.jsx)(x,{children:Object(h.jsx)(i.a,{basename:"/react-breaking-bad",children:Object(h.jsx)(B,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.83e9706b.chunk.js.map