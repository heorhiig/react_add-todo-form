(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(8),i=t.n(n),s=t(5),c=t(2),r=t(7),o=t(1),l=(t(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);function d(e){return l.find((function(a){return a.id===e}))||null}var u=t(0),m=function(e){var a=e.todoList,t=e.onSubmit,n=Object(o.useState)(""),i=Object(c.a)(n,2),r=i[0],m=i[1],j=Object(o.useState)(!1),b=Object(c.a)(j,2),h=b[0],f=b[1],O=Object(o.useState)(""),p=Object(c.a)(O,2),x=p[0],S=p[1],v=Object(o.useState)(!1),I=Object(c.a)(v,2),N=I[0],y=I[1];return Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),f(!r),y(!x),r&&x){m(""),S("");var n,i={id:(n=a,Math.max.apply(Math,Object(s.a)(n.map((function(e){return e.id}))).concat([0]))+1),title:r.trim(),completed:!1,userId:+x,user:d(+x)};t(i)}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text","data-cy":"titleInput",value:r,onChange:function(e){m(e.target.value),f(!1)}}),h&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("select",{value:x,"data-cy":"userSelect",onChange:function(e){S(e.target.value),y(!1)},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),N&&""===x&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},j=[{id:1,title:"delectus aut autem",completed:!0,userId:1,user:0},{id:15,title:"some other todo",completed:!1,userId:1,user:0},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4,user:0}].map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:d(e.userId)})})),b=function(){var e=Object(o.useState)(j),a=Object(c.a)(e,2),t=a[0],n=a[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)(m,{todoList:t,onSubmit:function(e){n((function(a){return[].concat(Object(s.a)(a),[e])}))}}),Object(u.jsxs)("section",{className:"TodoList",children:[Object(u.jsxs)("article",{"data-id":"1",className:"TodoInfo TodoInfo--completed",children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:"delectus aut autem"}),Object(u.jsx)("a",{className:"UserInfo",href:"mailto:Sincere@april.biz",children:"Leanne Graham"})]}),Object(u.jsxs)("article",{"data-id":"15",className:"TodoInfo TodoInfo--completed",children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:"delectus aut autem"}),Object(u.jsx)("a",{className:"UserInfo",href:"mailto:Sincere@april.biz",children:"Leanne Graham"})]}),Object(u.jsxs)("article",{"data-id":"2",className:"TodoInfo",children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:"quis ut nam facilis et officia qui"}),Object(u.jsx)("a",{className:"UserInfo",href:"mailto:Julianne.OConner@kory.org",children:"Patricia Lebsack"})]})]})]})})};i.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.de7a7d65.chunk.js.map