(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{134:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),u=n(27),s=n.n(u),o=(n(79),n(10)),i=n(8),b=n(36),l=n(15),j=n(21),d=n(23),f=n(51),p=n.n(f),h=(n(129),n(3)),O=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,159))})),m=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,162))})),x=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,160))})),v=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,161))})),g=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,163))})),k=function(){var e=Object(i.c)(j.c),t=Object(i.c)(j.b),n=Object(i.b)();return Object(c.useEffect)((function(){n(Object(l.a)())}),[n]),Object(h.jsxs)("div",{className:"App container",children:[Object(h.jsx)(d.a,{autoClose:2e3}),Object(h.jsx)(b.d,{}),Object(h.jsxs)("div",{className:"viewContainer",children:[e&&Object(h.jsx)(p.a,{type:"Circles",color:"#00BFFF",height:80,width:80}),t&&Object(h.jsx)("div",{children:'"Something was wrong"'}),!e&&!t&&Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(p.a,{type:"Circles",color:"#00BFFF",height:80,width:80}),children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(b.f,{path:"/",exact:!0,children:Object(h.jsx)(O,{})}),Object(h.jsx)(b.f,{path:"/register",exact:!0,restricted:!0,children:Object(h.jsx)(m,{})}),Object(h.jsx)(b.f,{path:"/login",exact:!0,restricted:!0,children:Object(h.jsx)(x,{})}),Object(h.jsx)(b.e,{path:"/contacts",redirectTo:"/login",children:Object(h.jsx)(v,{})}),Object(h.jsx)(b.f,{children:Object(h.jsx)(g,{})})]})})]})]})},w=n(25),y=n(72),N=n(45),C=n(6),F=n(28),L=n(52),B=n.n(L),S=n(22),A=n(14),z=Object(C.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingAuth:!1,error:!1},extraReducers:(r={},Object(A.a)(r,l.d.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.error=!1,e.isLoggedIn=!0})),Object(A.a)(r,l.b.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.error=!1,e.isLoggedIn=!0})),Object(A.a)(r,l.c.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.error=!1,e.isLoggedIn=!1})),Object(A.a)(r,l.a.pending,(function(e,t){e.isFetchingAuth=!0})),Object(A.a)(r,l.a.fulfilled,(function(e,t){e.user=t.payload,e.error=!1,e.isLoggedIn=!0,e.isFetchingAuth=!1})),Object(A.a)(r,l.d.rejected,(function(e,t){e.error=!0})),Object(A.a)(r,l.b.rejected,(function(e,t){e.error=!0})),Object(A.a)(r,l.c.rejected,(function(e,t){e.error=!0})),Object(A.a)(r,l.a.rejected,(function(e,t){e.isFetchingAuth=!1})),r)}).reducer,I=Object(N.a)(Object(C.f)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),P={key:"auth",storage:B.a,whitelist:["token"]},T={key:"phoneBook",storage:B.a,whitelist:["token"]},M=Object(C.a)({reducer:{auth:Object(F.g)(P,z),phoneBook:Object(F.g)(T,S.c)},middleware:I,devTools:!1}),R=Object(F.h)(M);n(132),n(133);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(i.a,{store:M,children:Object(h.jsx)(y.a,{loading:null,persistor:R,children:Object(h.jsx)(w.a,{children:Object(h.jsx)(k,{})})})})}),document.getElementById("root"))},15:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return l}));var r=n(5),c=n.n(r),a=n(13),u=n(6),s=n(30),o=Object(u.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.g)(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i=Object(u.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.e)(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(u.c)("auth/logout",Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.f)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),l=Object(u.c)("auth/checkCurrent",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),a=r.auth.token){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return e.next=6,Object(s.b)(a);case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return u}));var r=function(e){return e.auth.isLoggedIn},c=function(e){return e.auth.user.name},a=function(e){return e.auth.isFetchingAuth},u=function(e){return e.auth.error}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return a}));var r={};n.r(r),n.d(r,"changeFilter",(function(){return o}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return d})),n.d(c,"addContacts",(function(){return f})),n.d(c,"deleteContacts",(function(){return p}));var a={};n.r(a),n.d(a,"getContacts",(function(){return k})),n.d(a,"getFilter",(function(){return w})),n.d(a,"getVisibleContacts",(function(){return y}));var u,s=n(6),o=Object(s.b)("phoneBook/filter"),i=n(5),b=n.n(i),l=n(13),j=n(30),d=Object(s.c)("phoneBook/fetchContacts",Object(l.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),f=Object(s.c)("phoneBook/add",function(){var e=Object(l.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(s.c)("phoneBook/delete",function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=n(14),O=n(45),m=n(16),x=Object(s.d)([],(u={},Object(h.a)(u,d.fulfilled,(function(e,t){return t.payload})),Object(h.a)(u,f.fulfilled,(function(e,t){return[].concat(Object(O.a)(e),[t.payload])})),Object(h.a)(u,p.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),u)),v=Object(s.d)("",Object(h.a)({},o,(function(e,t){return t.payload}))),g=Object(m.b)({contacts:x,filter:v}),k=function(e){return e.phoneBook.contacts},w=function(e){return e.phoneBook.filter},y=function(e){var t=k(e),n=w(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}},30:function(e,t,n){"use strict";n.d(t,"g",(function(){return j})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return v}));var r=n(5),c=n.n(r),a=n(13),u=n(6),s=n(26),o=n.n(s),i=n(23);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var b=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){o.a.defaults.headers.common.Authorization=""},j=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,b(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),i.b.error("Registration error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,b(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),i.b.error("Login error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/logout");case 3:l(),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),i.b.error("Logout error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(t),e.prev=1,e.next=4,o.a.get("/users/current");case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),i.b.error("CheckCurrent error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();function h(){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/contacts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),i.b.error("Getting Contacts error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/contacts",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),i.b.error("Adding new contact error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.delete("/contacts/".concat(t));case 3:return e.abrupt("return",t);case 6:return e.prev=6,e.t0=e.catch(0),i.b.error("Deleting contact error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}},36:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return k})),n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return z}));var r=n(32),c=n(1),a=n(8),u=n(25),s=n(62),o=n(21),i=n(15),b=n(154),l=n(153),j=n(47),d=n(68),f=n(3),p=function(){var e=Object(a.c)((function(e){return Object(o.a)(e)})),t=Object(a.c)((function(e){return Object(o.d)(e)})),n=Object(c.useState)(!1),p=Object(r.a)(n,2),h=p[0],O=p[1],m=Object(a.b)(),x=Object(s.useMediaQuery)({query:"(max-device-width: 767px)"}),v=function(){O((function(e){return!e}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("nav",{className:"navBar container",children:[Object(f.jsx)(u.b,{to:"/",className:"logo",children:Object(f.jsx)("div",{className:"navLogoBackground",children:Object(f.jsx)(l.a,{className:"logo",style:{fontSize:25}})})}),!x&&Object(f.jsx)(u.b,{to:"/",exact:!0,className:"link",activeClassName:"activeLink",children:"Home"}),e&&Object(f.jsx)(u.b,{to:"/contacts",className:"link",activeClassName:"activeLink",children:"PhoneBook"}),x&&Object(f.jsx)(b.a,{id:"modalMenu",color:"primary",variant:"contained",type:"button",onClick:v,children:h?Object(f.jsx)(j.a,{}):Object(f.jsx)(d.a,{})}),Object(f.jsx)("span",{className:x?h?"authMobileBar":"visually-hidden":"authBar",onClick:v,children:e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.c,{className:"avatar",style:{fontSize:25}}),Object(f.jsxs)("span",{className:"greeting",children:["Welcome",Object(f.jsx)("span",{className:"userName",children:t})]}),Object(f.jsxs)(b.a,{color:"primary",variant:"contained",type:"button",onClick:function(){return m(Object(i.c)())},children:["Log out",Object(f.jsx)(j.b,{style:{marginLeft:10}})]})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.b,{to:"/register",exact:!0,className:"link register",activeClassName:"activeLink",children:"Register"}),Object(f.jsx)(u.b,{to:"/login",className:"link",activeClassName:"activeLink",children:"Login"})]})})]})})},h=n(38),O=n(46),m=n(10),x=["children","redirectTo"],v=function(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(O.a)(e,x),u=Object(a.c)((function(e){return Object(o.a)(e)}));return Object(f.jsx)(m.b,Object(h.a)(Object(h.a)({},c),{},{children:u?t:Object(f.jsx)(m.a,{to:r})}))},g=["children","restricted","redirectTo"],k=function(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,u=void 0===c?"/":c,s=Object(O.a)(e,g),i=Object(a.c)((function(e){return Object(o.a)(e)}));return Object(f.jsx)(m.b,Object(h.a)(Object(h.a)({},s),{},{children:i&&r?Object(f.jsx)(m.a,{to:u}):t}))},w=n(22),y=n(23),N=n(39),C=n(69),F=n.n(C),L=(n(110),function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],u=t[1],s=Object(c.useState)("+380"),o=Object(r.a)(s,2),i=o[0],b=o[1],l=Object(c.useState)(!1),j=Object(r.a)(l,2),d=j[0],p=j[1],h=Object(a.c)((function(e){return w.d.getContacts(e)})),O=Object(a.b)(),m=function(e,t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},x=function(){u(""),b("+380")};return Object(f.jsxs)("form",{className:"subForm",onSubmit:function(e){e.preventDefault(),m(h,n)?y.b.error("".concat(n," is already in contacts.")):(O(w.b.addContacts({name:n,number:i})),x())},autoComplete:"off",children:[Object(f.jsxs)("div",{className:"openSubFormBox",onClick:function(){p((function(e){return!e}))},children:[Object(f.jsx)("h2",{className:"subFormTitle",children:"Add new contacts:"}),Object(f.jsx)("div",{className:"arrowBox",children:d?Object(f.jsx)(N.b,{}):Object(f.jsx)(N.a,{})})]}),d&&Object(f.jsxs)("div",{className:"subFormsBox",children:[Object(f.jsxs)("label",{className:"subFormLabel",children:[Object(f.jsx)("span",{className:"subFormLabelTitle",children:"Name:"}),Object(f.jsx)("input",{className:"subFormInput",type:"text",value:n,onChange:function(e){return u(e.target.value)},placeholder:"input name",autoComplete:"off",required:!0})]}),Object(f.jsxs)("label",{className:"subFormLabel",children:[Object(f.jsx)("span",{className:"subFormLabelTitle",children:"Phone:"}),Object(f.jsx)(F.a,{inputClass:"phoneNumberClass",name:"number",country:"ua",value:i,placeholder:"+38 (111) 111 11 11",onChange:b,enableSearch:!0,inputProps:{required:!0}})]}),Object(f.jsx)("button",{type:"submit",className:"addBtn",children:"Add"})]})]})}),B=n(70),S=n(71),A=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return w.d.getVisibleContacts(e)}));return Object(c.useEffect)((function(){return e(w.b.fetchContacts())}),[e]),Object(f.jsx)("ul",{className:"contacsList",children:t.map((function(t){var n=t.id,r=t.name,c=t.number;return Object(f.jsxs)("li",{className:"contactItem",children:[Object(f.jsx)(B.a,{id:"mdAccount",className:"box1"}),Object(f.jsx)("span",{className:"contactName box2",children:r}),Object(f.jsx)("span",{className:"contactNumber box3",children:c}),Object(f.jsx)("button",{type:"button",className:"closeBtn box4",onClick:function(){return e(w.b.deleteContacts(n))},children:Object(f.jsx)(S.a,{})})]},n)}))})},z=function(){var e=Object(a.c)((function(e){return w.d.getFilter(e)})),t=Object(c.useState)(!1),n=Object(r.a)(t,2),u=n[0],s=n[1],o=Object(a.b)();return Object(f.jsxs)("div",{className:"subForm",children:[Object(f.jsxs)("div",{className:"openSubFormBox",onClick:function(){s((function(e){return!e}))},children:[Object(f.jsx)("h2",{className:"subFormTitle",children:"Search contacts:"}),Object(f.jsx)("div",{className:"arrowBox",children:u?Object(f.jsx)(N.b,{}):Object(f.jsx)(N.a,{})})]}),u&&Object(f.jsx)("div",{className:"subFormsBox",children:Object(f.jsx)("label",{className:"subFormLabel",children:Object(f.jsx)("input",{className:"subFormInput",type:"text",onChange:function(e){return o(w.a.changeFilter(e.target.value))},value:e,name:"filter",placeholder:"input name"})})})]})}},79:function(e,t,n){}},[[134,5,7]]]);
//# sourceMappingURL=main.554bcf71.chunk.js.map