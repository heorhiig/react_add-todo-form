(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(7),o=a(1),u=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);function d(e){return u.find((function(t){return t.id===e}))||null}var l=a(0),m=function(e){var t=e.todoList,a=e.onSubmit,n=Object(o.useState)(""),i=Object(c.a)(n,2),s=i[0],m=i[1],j=Object(o.useState)(!1),b=Object(c.a)(j,2),h=b[0],O=b[1],f=Object(o.useState)(""),p=Object(c.a)(f,2),x=p[0],v=p[1],S=Object(o.useState)(!1),y=Object(c.a)(S,2),N=y[0],I=y[1];return Object(l.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var n=s.trim();if(O(!n),I(!x),n&&x){var i,c={id:(i=t,Math.max.apply(Math,Object(r.a)(i.map((function(e){return e.id}))).concat([0]))+1),title:n,completed:!1,userId:+x,user:d(+x)};a(c),m(""),v("")}},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("input",{type:"text","data-cy":"titleInput",value:s,onChange:function(e){m(e.target.value),O(!1)}}),h&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("select",{value:x,"data-cy":"userSelect",onChange:function(e){v(e.target.value),I(!1)},children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),u.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),N&&""===x&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},j=function(e){var t=e.user;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todo;return Object(l.jsxs)("article",{className:"TodoInfo ".concat(t.completed?"TodoInfo--completed":""),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(l.jsx)(j,{user:t.user})]})},h=function(e){var t=e.todos;return Object(l.jsx)("div",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(b,{todo:e},e.id)}))})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1,user:0},{id:15,title:"some other todo",completed:!1,userId:1,user:0},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4,user:0}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:d(e.userId)})})),f=function(){var e=Object(o.useState)(O),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsx)(m,{todoList:a,onSubmit:function(e){n((function(t){return[].concat(Object(r.a)(t),[e])}))}}),Object(l.jsx)(h,{todos:a})]})})};i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c1d19bb6.chunk.js.map