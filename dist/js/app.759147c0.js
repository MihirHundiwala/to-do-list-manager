(function(){"use strict";var t={1298:function(t,e,i){var s=i(144),n=i(8345),r=i(8209),a=i.n(r);i(243);s["default"].use(a());var l=new(a())({icons:{iconfont:"mdi"}}),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("router-view")],1)},u=[],c={name:"App",components:{}},d=c,m=i(1001),p=i(3453),v=i.n(p),T=i(7524),_=(0,m.Z)(d,o,u,!1,null,null,null),f=_.exports;v()(_,{VApp:T.Z});var h=i(629),S={state:{newListForm:!1,newTaskForm:!1,tasksVisibility:!1},getters:{NEW_LIST_FORM:t=>t.newListForm,NEW_TASK_FORM:t=>t.newTaskForm,TASKS_VISIBILITY:t=>t.tasksVisibility},mutations:{SET_NEW_LIST_FORM:(t,e)=>{t.newListForm=e},SET_NEW_TASK_FORM:(t,e)=>{t.newTaskForm=e},SET_TASKS_VISIBILITY:(t,e)=>{t.tasksVisibility=e}}},k=JSON.parse('[{"id":1,"name":"OOPS","tasks":[{"id":1,"title":"Study Constructors","status":true},{"id":2,"title":"Study Polymorphism","status":true},{"id":3,"title":"Study Inheritance","status":true},{"id":4,"title":"Study Abstraction","status":true},{"id":5,"title":"Study Encapsulation","status":true},{"id":6,"title":"Study Classes","status":true},{"id":7,"title":"Study Objects","status":true},{"id":8,"title":"Study Serialization","status":false},{"id":9,"title":"Do Revision","status":false},{"id":10,"title":"Practice questions","status":false}]},{"id":2,"name":"Web Development","tasks":[{"id":1,"title":"Learn HTML","status":true},{"id":2,"title":"Learn CSS","status":true},{"id":3,"title":"Learn BOOTSTRAP","status":true},{"id":4,"title":"Learn JAVASCRIPT","status":true},{"id":5,"title":"Learn Python","status":true},{"id":6,"title":"Learn Flask","status":true},{"id":7,"title":"Learn Django","status":true},{"id":8,"title":"Learn Node","status":true},{"id":9,"title":"Learn React","status":false},{"id":10,"title":"Learn Vue","status":false}]},{"id":3,"name":"Exercise","tasks":[{"id":1,"title":"Jumping","status":true},{"id":2,"title":"Stretching","status":true},{"id":3,"title":"Meditation","status":false},{"id":4,"title":"Pushups","status":true},{"id":5,"title":"Plank Sets","status":false},{"id":6,"title":"Squats","status":false}]},{"id":4,"name":"Do Project in Vue","tasks":[{"id":1,"title":"Learn Vue Basics","status":true},{"id":2,"title":"Setup Project","status":true},{"id":3,"title":"Create FrontEnd","status":true},{"id":4,"title":"Create BackEnd","status":false},{"id":5,"title":"Make data persitant","status":false}]}]'),g={state:{lists:k,list_count:k.length},getters:{LISTS:t=>t.lists,TASKS_COUNT:t=>e=>{if(e)return t.lists.find((t=>t.id===e)).tasks.length},LISTS_COUNT:t=>t.list_count},mutations:{ADD_LIST:(t,e)=>{t.lists.push(e)},DELETE_LIST:(t,e)=>{const i=t.lists.findIndex((t=>t.id===e));-1!==i&&t.lists.splice(i,1)},ADD_TASK:(t,e)=>{t.lists.find((t=>t.id===parseInt(e.listid))).tasks.push(e.new_task)},DELETE_TASK:(t,e)=>{const i=t.lists.findIndex((t=>t.id===e.listId));if(-1!==i){const s=t.lists[i].tasks.findIndex((t=>t.id===e.taskId));console.log(s,e.taskId,typeof e.taskId),-1!==s&&t.lists[i].tasks.splice(s,1)}console.log(t.lists)},UPDATE_LIST_COUNT:t=>{t.list_count+=1},TOGGLE_ALL_TASKS_STATUS:(t,e)=>{let i=t.lists.find((t=>t.id==e.listId)).tasks;i.forEach((t=>{t.status=e.bool}))}},actions:{CREATE_LIST:({commit:t,getters:e},i)=>{let s={id:e.LISTS_COUNT+1,name:i.title,tasks:[]};return t("ADD_LIST",s),t("UPDATE_LIST_COUNT"),console.log(s),{data:s}},CREATE_TASK:({commit:t,getters:e},i)=>{let s=parseInt(i.listid),n={id:e.TASKS_COUNT(s)+1,title:i.title,status:!1};return t("ADD_TASK",{listid:s,new_task:n}),{data:{new_task:n,listid:s}}},DELETE_LIST_ITEM:({commit:t},e)=>(t("DELETE_LIST",e.listId),e.listId),DELETE_TASK_ITEM:({commit:t},e)=>(t("DELETE_TASK",{listId:e.listId,taskId:e.taskId}),{listId:e.listId,taskId:e.taskId})}};s["default"].use(h.ZP);var I=new h.ZP.Store({modules:{ui:S,data:g}}),L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{height:"100vh"},attrs:{fluid:"","fill-height":"","pa-0":"","align-content-space-between":""}},[i("v-app-bar",{staticStyle:{background:"linear-gradient(90deg, rgba(105,21,129,1) 6%, rgba(113,20,139,1) 32%, rgba(54,78,167,1) 65%, rgba(36,174,201,1) 100%)",width:"100%"},attrs:{dark:""}},[i("v-spacer"),i("v-app-bar-title",[i("big",[t._v(" To Do List App ")])],1),i("v-spacer")],1),i("v-layout",{staticStyle:{"max-height":"82vh",height:"100%"},attrs:{"justify-center":""}},[i("transition",{attrs:{name:"lists_transition"}},[i("v-flex",{attrs:{lg3:"","elevation-10":"","ml-5":"","mr-2":"",outlined:""}},[i("MyLists")],1)],1),i("transition",{attrs:{name:"tasks_transition"}},[t.tasksVisibility?i("v-flex",{attrs:{lg9:"","elevation-10":"","ml-3":"","mr-5":"",animation:""}},[i("router-view",{key:t.$route.fullPath,attrs:{name:"MyTasks"}})],1):t._e()],1)],1),i("v-footer",{staticStyle:{background:"linear-gradient(90deg, rgba(36,174,201,1) 0%, rgba(54,78,167,1) 35%, rgba(113,20,139,1) 68%, rgba(105,21,129,1) 94%)",width:"100%",height:"20px",padding:"0px",margin:"0px",color:"white"}},[i("v-spacer"),i("small",[t._v(" Copyright @2022, Mihir Hundiwala. All Rights Reserved. ")]),i("v-spacer")],1)],1)},E=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{staticStyle:{width:"100%",height:"100%",overflow:"hidden"}},[i("v-toolbar",{attrs:{color:"rgba(105,21,129,1)",dark:""}},[i("v-toolbar-title",[i("strong",[t._v("Your Lists")])]),i("v-spacer"),i("v-icon",[t._v("list")])],1),t.isOpen?t._e():i("v-list",[i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.openNewListForm()}}},[i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v("Create a New List")])])],1),i("v-list-item-action",[i("v-list-item-title",[i("v-icon",{attrs:{color:"#121212"}},[t._v("add")])],1)],1)],1)],1),t.openNewListFormValue?i("v-list-item",[i("NewList")],1):t._e(),i("v-divider"),i("v-list",{staticStyle:{"padding-top":"0px",height:"calc(100% - 129px)",overflow:"auto"}},t._l(t.LISTS,(function(t,e){return i("MyList",{key:e,attrs:{list:t}})})),1)],1)},y=[],V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{padding:"10px 0px 0px 0px"}},[i("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit()}}},[i("v-text-field",{ref:"input",staticStyle:{padding:"0px",margin:"0px"},attrs:{slot:"","append-icon":"add",placeholder:"Enter title",rules:[t.rules.required]},on:{blur:function(e){return t.closeForm()}},slot:"default",model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1)},A=[],x={data:()=>({title:"",rules:{required:t=>!!t||"Cannot Be Empty"}}),methods:{submit(){if(""==this.title.trim()||null==this.title)return!1;this.$store.dispatch("CREATE_LIST",{title:this.title}).then((()=>{this.$store.commit("SET_NEW_LIST_FORM",!1)}))},closeForm(){this.$store.commit("SET_NEW_LIST_FORM",!1)}},mounted(){this.$refs.input.focus()}},O=x,w=i(2665),Z=i(6232),N=i(3105),F=(0,m.Z)(O,V,A,!1,null,null,null),M=F.exports;v()(F,{VContainer:w.Z,VForm:Z.Z,VTextField:N.Z});var C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-list-item",{attrs:{to:{name:"MyTasks",params:{id:t.list.id,list:t.list}}},on:{click:function(e){return t.makeTasksVisible()},mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.list.name))])],1),i("v-list-item-action",[t.hover?t._e():i("v-badge",{staticStyle:{"margin-top":"15px"},attrs:{color:"#d7dbe0"}},[i("span",{staticStyle:{color:"black"},attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.TASKS_COUNT(t.list.id)))])]),t.hover?i("v-list-item-title",{on:{click:function(e){return t.deleteListItem(t.list.id)}}},[i("v-icon",{attrs:{color:"#121212"}},[t._v("cancel")])],1):t._e()],1)],1)},$=[],D={name:"MyList",props:{list:Object},data:()=>({hover:!1}),methods:{makeTasksVisible(){this.$store.commit("SET_TASKS_VISIBILITY",!0)},TASKS_COUNT(t){return this.$store.getters.TASKS_COUNT(t)},deleteListItem(t){this.$store.dispatch("DELETE_LIST_ITEM",{listId:t}).then((()=>{}))}}},K=D,R=i(4633),P=i(24),W=i(5405),j=i(3099),U=i(1539),B=(0,m.Z)(K,C,$,!1,null,null,null),q=B.exports;v()(B,{VBadge:R.Z,VIcon:P.Z,VListItem:W.Z,VListItemAction:j.Z,VListItemContent:U.km,VListItemTitle:U.V9});var G={name:"MyLists",components:{NewList:M,MyList:q},data:()=>({}),methods:{openNewListForm(){this.$store.commit("SET_NEW_LIST_FORM",!0)}},computed:{...(0,h.Se)(["LISTS"]),openNewListFormValue:{get(){return this.$store.getters.NEW_LIST_FORM}},isOpen(){return this.$store.getters.NEW_LIST_FORM}}},Y=G,H=i(1418),J=i(6816),z=i(4216),Q=i(9762),X=i(6656),tt=i(7921),et=(0,m.Z)(Y,b,y,!1,null,null,null),it=et.exports;v()(et,{VDivider:H.Z,VIcon:P.Z,VList:J.Z,VListItem:W.Z,VListItemAction:j.Z,VListItemContent:U.km,VListItemTitle:U.V9,VNavigationDrawer:z.Z,VSpacer:Q.Z,VToolbar:X.Z,VToolbarTitle:tt.qW});var st={name:"ToDo",components:{MyLists:it},computed:{tasksVisibility:{get(){return this.$store.getters.TASKS_VISIBILITY}}}},nt=st,rt=i(8320),at=i(7905),lt=i(5972),ot=i(899),ut=i(4470),ct=(0,m.Z)(nt,L,E,!1,null,null,null),dt=ct.exports;v()(ct,{VAppBar:rt.Z,VAppBarTitle:at.Z,VContainer:w.Z,VFlex:lt.Z,VFooter:ot.Z,VLayout:ut.Z,VSpacer:Q.Z});var mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticStyle:{width:"100%",height:"100%",overflow:"hidden"}},[i("v-toolbar",{attrs:{color:"#24adc8",light:""}},[i("v-toolbar-title",[i("strong",[t._v("Tasks in "+t._s(t.listdata.name))])]),i("v-spacer"),i("v-icon",{staticStyle:{"margin-right":"10px",color:"black"},on:{click:function(e){return t.toggleSelectAll(t.listdata.id)}}},[t._v(" "+t._s(t.iconType)+" ")]),i("v-icon",{attrs:{color:"black"}},[t._v("task")])],1),t.isOpen?t._e():i("v-list",[i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.openNewTaskForm()}}},[i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v("Add a New Task")])])],1),i("v-list-item-action",[i("v-list-item-title",[i("v-icon",{attrs:{color:"black"}},[t._v("add")])],1)],1)],1)],1),t.openNewTaskFormValue?i("v-list-item",[i("NewTask",{attrs:{listid:t.listdata.id}})],1):t._e(),i("v-divider"),i("v-list",{staticStyle:{"padding-top":"0px",height:"calc(100% - 128px)","overflow-y":"auto"}},[t._l(t.listdata.tasks,(function(e,s){return i("MyTask",{key:s,attrs:{task:e,listid:t.listdata.id},model:{value:e.status,callback:function(i){t.$set(e,"status",i)},expression:"task.status"}})}))],2)],1)},pt=[],vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-list-item",{class:{isHovered:t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{color:"black","input-value":t.task.status},on:{change:function(e){return t.onCheckBoxClicked(e)}}})],1),i("v-list-item-content",{class:{striked:t.task.status}},[i("v-list-item-title",[t._v(t._s(t.task.title))])],1),i("v-list-item-action",[t.hover?i("v-list-item-title",[i("v-icon",{attrs:{color:"#121212"},on:{click:function(e){return t.deleteTaskItem(t.listid,t.task.id)}}},[t._v("cancel")])],1):t._e()],1)],1)},Tt=[],_t={name:"MyTask",data:()=>({hover:!1}),props:{task:Object,listid:Number},methods:{onCheckBoxClicked(t){this.$emit("input",t)},deleteTaskItem(t,e){this.$store.dispatch("DELETE_TASK_ITEM",{listId:t,taskId:e}).then((()=>{}))}}},ft=_t,ht=i(9362),St=(0,m.Z)(ft,vt,Tt,!1,null,null,null),kt=St.exports;v()(St,{VCheckbox:ht.Z,VIcon:P.Z,VListItem:W.Z,VListItemAction:j.Z,VListItemContent:U.km,VListItemTitle:U.V9});var gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{padding:"10px 0px 0px 0px"}},[i("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit()}}},[i("v-text-field",{ref:"input",staticStyle:{padding:"0px",margin:"0px"},attrs:{slot:"","append-icon":"add",placeholder:"Enter Task Name",rules:[t.rules.required]},on:{blur:function(e){return t.closeForm()}},slot:"default",model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1)},It=[],Lt={data:()=>({title:"",rules:{required:t=>!!t||"Cannot be Empty"}}),props:{listid:Number},methods:{submit(){if(""==this.title.trim()||null==this.title)return!1;this.$store.dispatch("CREATE_TASK",{listid:this.listid,title:this.title}).then((()=>{this.$store.commit("SET_NEW_TASK_FORM",!1),this.$store.commit("SET_NEW_TASK_FORM",!0),this.title=""}))},closeForm(){this.$store.commit("SET_NEW_TASK_FORM",!1)}},mounted(){this.$refs.input.focus()}},Et=Lt,bt=(0,m.Z)(Et,gt,It,!1,null,null,null),yt=bt.exports;v()(bt,{VContainer:w.Z,VForm:Z.Z,VTextField:N.Z});var Vt={name:"MyTasks",components:{MyTask:kt,NewTask:yt},data:()=>({iconType:"select_all"}),methods:{openNewTaskForm(){this.$store.commit("SET_NEW_TASK_FORM",!0)},toggleSelectAll(t){"select_all"===this.iconType?(this.iconType="deselect",this.$store.commit("TOGGLE_ALL_TASKS_STATUS",{listId:t,bool:!0})):(this.iconType="select_all",this.$store.commit("TOGGLE_ALL_TASKS_STATUS",{listId:t,bool:!1}))}},computed:{listdata(){return{id:parseInt(this.$route.params.list.id),name:this.$route.params.list.name,tasks:this.$route.params.list.tasks}},openNewTaskFormValue:{get(){return this.$store.getters.NEW_TASK_FORM},set(t){this.$store.commit("SET_NEW_TASK_FORM",t)}},isOpen(){return this.$store.getters.NEW_TASK_FORM}}},At=Vt,xt=i(2660),Ot=(0,m.Z)(At,mt,pt,!1,null,null,null),wt=Ot.exports;v()(Ot,{VCard:xt.Z,VDivider:H.Z,VIcon:P.Z,VList:J.Z,VListItem:W.Z,VListItemAction:j.Z,VListItemContent:U.km,VListItemTitle:U.V9,VSpacer:Q.Z,VToolbar:X.Z,VToolbarTitle:tt.qW});const Zt=[{path:"/",component:dt,name:"ToDo",children:[{path:"/list/:id",components:{MyTasks:wt},name:"MyTasks"}]}],Nt=new n.Z({mode:"history",routes:Zt,base:"/"});s["default"].config.productionTip=!1,s["default"].use(n.Z),new s["default"]({vuetify:l,router:Nt,store:I,render:t=>t(f)}).$mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,r){if(!s){var a=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],r=t[c][2];for(var l=!0,o=0;o<s.length;o++)(!1&r||a>=r)&&Object.keys(i.O).every((function(t){return i.O[t](s[o])}))?s.splice(o--,1):(l=!1,r<a&&(a=r));if(l){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,n,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,a=s[0],l=s[1],o=s[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(o)var c=o(i)}for(e&&e(s);u<a.length;u++)r=a[u],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},s=self["webpackChunkto_do_list_manager"]=self["webpackChunkto_do_list_manager"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(1298)}));s=i.O(s)})();
//# sourceMappingURL=app.759147c0.js.map