(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),c=n(6),a=n.n(c),i=(n(14),n(1)),o=n.n(i),u=n(3),l=n(4),f=(n(16),n.p+"static/media/logo-ripples.01525a42.svg"),p=n(7),d=n(8),h=n(9),b=new(function(){function e(t){Object(p.a)(this,e),this.config=t}return Object(d.a)(e,[{key:"_getLocalSessionId",value:function(){return sessionStorage.getItem("sessionId")}},{key:"_saveLocalSessionId",value:function(e){sessionStorage.setItem("sessionId",e)}},{key:"_createSessionId",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.config.apiUrl,"/sessions/create"),e.next=3,fetch(t,{method:"post"}).then((function(e){return e.text()}));case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateSession",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,s,r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.sessionId,s=t.counter,r="".concat(this.config.apiUrl,"/sessions/update"),c={sessionId:n,counter:s},e.next=5,fetch(r,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()}));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSessionId",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this._getLocalSessionId(),e.t0){e.next=5;break}return e.next=4,this._createSessionId();case 4:e.t0=e.sent;case 5:return t=e.t0,this._saveLocalSessionId(t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSession",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this.config.apiUrl,"/sessions/get?sessionId=").concat(t),e.next=3,fetch(n,{method:"get"}).then((function(e){return e.json()}));case 3:if(s=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(h),j=n(0);var g=function(){console.log("render");var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(0),a=Object(l.a)(c,2),i=a[0],p=a[1],d=Object(s.useState)(!1),h=Object(l.a)(d,2),g=h[0],m=h[1];function v(e){return m(!0),b.updateSession({sessionId:n,counter:e}).then((function(e){p(+e.counter),m(!1)}))}return Object(s.useEffect)((function(){b.getSessionId().then(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getSession(t);case 2:n=e.sent,r(n._id),p(n.counter);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["\ud83c\udf01 image gallery [",i,"]"]}),Object(j.jsxs)("header",{className:"p-2",children:[Object(j.jsx)("button",{className:"m-1",disabled:i>=100||g,onClick:function(){i>=100||v(i+1)},children:"\u2795"}),Object(j.jsx)("button",{className:"m-1",disabled:i<=0||g,onClick:function(){i<=0||v(i-1)},children:"\u2796"}),Object(j.jsxs)("button",{className:"m-1",disabled:g,onClick:function(){v(3)},children:["\ud83d\udd04 reset to ",3]})]}),Object(j.jsx)("section",{className:"img-container",children:Array(i).fill(0).map((function(e,t){return Object(j.jsx)("img",{src:f,className:"img",alt:"tile"},t)}))}),Object(j.jsx)("div",{className:"debug-placeholder",children:Object(j.jsxs)("div",{className:"session-info",children:["sessionId:",n]})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),m()},9:function(e){e.exports=JSON.parse('{"apiUrl":"//ripples-task.appspot.com/"}')}},[[18,1,2]]]);
//# sourceMappingURL=main.ff093ff5.chunk.js.map