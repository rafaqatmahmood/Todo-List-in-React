(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,function(e,t,a){e.exports={Logo:"AppHeader_Logo__1bMxt",HeaderRow:"AppHeader_HeaderRow__3IX6T",DropDown:"AppHeader_DropDown__23Nqb",Form:"AppHeader_Form__1As8R",Radio:"AppHeader_Radio__1SSqM",Button:"AppHeader_Button__2hV3U",Label:"AppHeader_Label__xmmlA"}},function(e,t,a){e.exports={CreateTodo:"CreateTodo_CreateTodo__aefmL",Form:"CreateTodo_Form__14UtK",Group:"CreateTodo_Group__L3Z6k",Label:"CreateTodo_Label__1D3LJ",Input:"CreateTodo_Input__3kFrm"}},function(e,t,a){e.exports={Left:"CreateTodoHeader_Left__3Hq8y",Cancel:"CreateTodoHeader_Cancel__1PpU2",HeaderRow:"CreateTodoHeader_HeaderRow__2lD-l",Tick:"CreateTodoHeader_Tick__3Nc_6"}},,function(e,t,a){e.exports={Todo:"Todo_Todo__2rIbz",Checkbox:"Todo_Checkbox__1BTQn",Text:"Todo_Text__1X1Vh",Remove:"Todo_Remove__32zzy"}},function(e,t,a){e.exports={Form:"QuickTask_Form__1_eLn",FormGroup:"QuickTask_FormGroup__3xWZe",Input:"QuickTask_Input__1oNj7",Button:"QuickTask_Button__2nLiD"}},,,function(e,t,a){e.exports={Heading:"Nothing_Heading__2kjuS",Center:"Nothing_Center__2K1nd",Image:"Nothing_Image__3fWHK"}},,,function(e,t,a){e.exports={App:"App_App__25Izt"}},function(e,t,a){e.exports={Header:"Header_Header__XGEtW"}},function(e,t,a){e.exports={Todos:"Todos_Todos__2u-Tp"}},function(e,t,a){e.exports={Button:"AddButton_Button__2iefY"}},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a(1),c=a(14),i=a.n(c),d=a(15),s=a.n(d),r=a(3),l=a(4),j=a.n(l),u=a(16),b=a.n(u),p=function(e){return Object(o.jsx)("header",{className:b.a.Header,children:Object(o.jsx)("div",{className:"row",children:e.children})})},m=a(2),_=function(e,t){switch(t.type){case"create_todo":return Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.concat(t.payload)});case"remove_todo":return Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});case"animate_todo":case"set_todo":return Object(m.a)(Object(m.a)({},e),{},{todos:t.payload});case"is_creating":return Object(m.a)(Object(m.a)({},e),{},{isCreating:t.payload});case"edit_info":return Object(m.a)(Object(m.a)({},e),{},{editInfo:t.payload});case"add_completed":return Object(m.a)(Object(m.a)({},e),{},{completed:e.completed.concat(t.payload)});case"show_todo":return Object(m.a)(Object(m.a)({},e),{},{showTodo:t.payload});case"set_completed":return Object(m.a)(Object(m.a)({},e),{},{completed:t.payload});default:return e}},h={todos:[],isCreating:!1,editInfo:{isEditing:!1,editIndex:null,editText:"",editDate:"",editID:""},completed:[],showTodo:!0},x=Object(n.createContext)(),O=function(e){var t=Object(n.useReducer)(_,h),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(o.jsx)(x.Provider,{value:[c,i],children:e.children})},f=function(){var e=Object(n.useContext)(x),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),d=Object(r.a)(i,2),s=d[0],l=d[1];return Object(o.jsx)(p,{children:Object(o.jsxs)("div",{className:j.a.HeaderRow,children:[Object(o.jsx)("div",{className:j.a.Logo,children:"Todo List"}),Object(o.jsxs)("div",{className:j.a.DropDown,children:[Object(o.jsx)("button",{className:j.a.Button,onClick:function(){return l(!s)},children:Object(o.jsx)("i",{className:"fa fa-angle-down","aria-hidden":"true"})}),Object(o.jsxs)("form",{className:j.a.Form,style:{display:s?"block":"none"},children:[Object(o.jsxs)("div",{className:j.a.Group,children:[Object(o.jsx)("input",{onChange:function(){return c({type:"show_todo",payload:!0})},id:"todos",checked:a.showTodo,className:j.a.Radio,value:"input",type:"radio",name:"tab"}),Object(o.jsx)("label",{className:j.a.Label,htmlFor:"todos",children:"Todos"})]}),Object(o.jsxs)("div",{className:j.a.Group,children:[Object(o.jsx)("input",{onChange:function(){return c({type:"show_todo",payload:!1})},checked:!a.showTodo,className:j.a.Radio,id:"completed",value:"input",type:"radio",name:"tab"}),Object(o.jsx)("label",{className:j.a.Label,htmlFor:"completed",children:"Completed"})]}),Object(o.jsxs)("div",{className:j.a.Group,children:[Object(o.jsx)("input",{onChange:function(){return c({type:"set_completed",payload:[]})},className:j.a.Radio,id:"remove-completed",value:"input",type:"radio",name:"tab"}),Object(o.jsx)("label",{className:j.a.Label,htmlFor:"remove-completed",children:"Remove Completed"})]})]})]})]})})},g=a(11),v=a(8),T=a.n(v),N=function(e){var t=Object(n.useContext)(x),a=Object(r.a)(t,2),c=a[0],i=a[1],d=Object(n.useState)(e.checked),s=Object(r.a)(d,2)[1];return Object(o.jsxs)("div",{className:"".concat(T.a.Todo," ").concat(e.animate?T.a.Remove:""),style:{textDecoration:e.checked?"line-through":""},children:[Object(o.jsx)("input",{checked:e.checked,onChange:function(){return s(!e.checked)},onClick:e.checkClicked,className:T.a.Checkbox,type:"checkbox"}),Object(o.jsxs)("p",{className:T.a.Text,onClick:function(){c.showTodo&&i({type:"edit_info",payload:{isEditing:!0,editIndex:e.index,editText:e.text,editDate:e.date,editID:e.id}})},children:[Object(o.jsx)("span",{children:e.text})," ",Object(o.jsx)("strong",{children:e.date})]})]})},y=a(17),C=a.n(y),k=a(12),I=a.n(k),w=a.p+"static/media/Nothing to do.bea887ba.png",H=function(e){return Object(o.jsxs)("div",{className:I.a.Center,children:[Object(o.jsx)("img",{className:I.a.Image,src:w,alt:"img not found!"}),Object(o.jsx)("h2",{className:I.a.Heading,children:e.heading})]})},D=function(){var e=Object(n.useContext)(x),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(o.jsx)(H,{heading:"Nothing to do"});return a.showTodo&&a.todos.length>0?i=a.todos.map((function(e,t){return Object(o.jsx)(N,{id:e.id,index:t,text:e.text,checkClicked:function(){return function(e,t){setTimeout((function(){var o=Object(g.a)(a.todos);o[t].animate=!0,c({type:"animate_todo",payload:o}),setTimeout((function(){return c({type:"remove_todo",payload:e})}),400);var n=a.todos.find((function(t){return t.id===e}));n=Object(m.a)(Object(m.a)({},n),{},{animate:!1,id:(new Date).getTime().toString()}),c({type:"add_completed",payload:n})}),200)}(e.id,t)},animate:e.animate,date:e.date},e.id)})):!a.showTodo&&a.completed.length>0?i=a.completed.map((function(e,t){return Object(o.jsx)(N,{id:e.id,index:t,text:e.text,animate:e.animate,date:e.date,checked:!0},e.id)})):!a.showTodo&&!a.completed.length>0&&(i=Object(o.jsx)(H,{heading:"Nothing in Completed"})),Object(o.jsx)("div",{className:C.a.Todos,children:Object(o.jsx)("div",{className:"row",children:i})})},L=a(9),F=a.n(L),R=function(e){var t=Object(n.useContext)(x),a=Object(r.a)(t,2)[1],c=Object(n.useState)(""),i=Object(r.a)(c,2),d=i[0],s=i[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={text:d,id:(new Date).getTime().toString(),animate:!1,date:""};d.length>0&&a({type:"create_todo",payload:t}),s("")},className:F.a.Form,children:Object(o.jsxs)("div",{className:F.a.FormGroup,children:[Object(o.jsx)("input",{onChange:function(e){return s(e.target.value)},value:d,className:F.a.Input,type:"text",placeholder:"Enter Quick Task Here"}),Object(o.jsx)("button",{className:F.a.Button,type:"submit",children:"Create"})]})})},E=a(5),A=a.n(E),S=a(6),B=a.n(S),G=function(e){return Object(o.jsx)(p,{children:Object(o.jsxs)("div",{className:B.a.HeaderRow,children:[Object(o.jsxs)("div",{className:B.a.Left,children:[Object(o.jsx)("div",{className:B.a.Cancel,onClick:e.cancel,children:"cancel"}),Object(o.jsx)("div",{children:"New Task"})]}),Object(o.jsx)("div",{className:B.a.Right,children:Object(o.jsx)("button",{className:B.a.Tick,onClick:e.create,children:Object(o.jsx)("i",{className:"fa fa-check","aria-hidden":"true"})})}),Object(o.jsx)("div",{className:"right"})]})})},Q=function(){var e=Object(n.useContext)(x),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),d=Object(r.a)(i,2),s=d[0],l=d[1],j=Object(n.useState)(""),u=Object(r.a)(j,2),b=u[0],p=u[1];Object(n.useEffect)((function(){a.editInfo.isEditing&&(l(a.editInfo.editText),p(a.editInfo.editDate))}),[a.editInfo]);var _=function(){if(a.isCreating){var e={text:s,id:(new Date).getTime().toString(),animate:!1,date:b};c({type:"create_todo",payload:e}),l(""),p(""),c({type:"is_creating",payload:!1})}else if(a.editInfo.isEditing){var t=Object(g.a)(a.todos);t[a.editInfo.editIndex]={text:s,id:a.editInfo.editID,animate:!1,date:b},c({type:"set_todo",payload:t});var o=Object(m.a)({},a.editInfo);o.isEditing=!1,c({type:"edit_info",payload:o}),l(""),p("")}};return Object(o.jsxs)("div",{className:A.a.CreateTodo,style:{opacity:a.isCreating||a.editInfo.isEditing?"1":"0",transform:a.isCreating||a.editInfo.isEditing?"scale(1)":"scale(0.8)",pointerEvents:a.isCreating||a.editInfo.isEditing?"inherit":"none"},children:[Object(o.jsx)(G,{cancel:function(){c({type:"is_creating",payload:!1}),c({type:"edit_info",payload:Object(m.a)(Object(m.a)({},a.editInfo),{},{isEditing:!1})})},create:_}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("form",{className:A.a.Form,onSubmit:function(e){e.preventDefault(),_()},children:[Object(o.jsxs)("div",{className:A.a.Group,children:[Object(o.jsx)("label",{htmlFor:"Task",className:A.a.Label,children:"What is to be done?"}),Object(o.jsx)("input",{id:"Task",type:"text",name:"text",placeholder:"Enter Task Here",onChange:function(e){return l(e.target.value)},value:s,className:A.a.Input})]}),Object(o.jsxs)("div",{className:A.a.Group,children:[Object(o.jsx)("label",{htmlFor:"Date",className:A.a.Label,children:"Due date"}),Object(o.jsx)("input",{id:"Date",type:"date",name:"date",placeholder:"Enter Task Here",onChange:function(e){return p(e.target.value)},value:b,className:A.a.Input})]})]})})]})},z=a(18),W=a.n(z),q=function(e){var t=Object(n.useContext)(x),a=Object(r.a)(t,2)[1];return Object(o.jsx)("button",{className:W.a.Button,onClick:function(){return a({type:"is_creating",payload:!0})},children:"+"})},J=function(){return Object(o.jsxs)("div",{className:s.a.App,children:[Object(o.jsx)(f,{}),Object(o.jsx)(D,{}),Object(o.jsx)(Q,{}),Object(o.jsx)(R,{}),Object(o.jsx)(q,{})]})};a(24);i.a.render(Object(o.jsx)(O,{children:Object(o.jsx)(J,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.cbcebbc7.chunk.js.map