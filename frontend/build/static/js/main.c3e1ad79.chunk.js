(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),c=n(6),a=n.n(c),i=(n(13),n(1)),o=n.n(i),u=n(3),l=n(4),f=(n(15),n.p+"static/media/logo-ripples.01525a42.svg"),d=n(7),p=n(8),h=new(function(){function e(t){Object(d.a)(this,e),this.config=t}return Object(p.a)(e,[{key:"_getLocalSessionId",value:function(){return sessionStorage.getItem("sessionId")}},{key:"_saveLocalSessionId",value:function(e){sessionStorage.setItem("sessionId",e)}},{key:"_createSessionId",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.config.apiUrl,"/sessions/create"),e.next=3,fetch(t,{method:"post"}).then((function(e){return e.text()}));case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateSession",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,s,r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.sessionId,s=t.counter,r="".concat(this.config.apiUrl,"/sessions/update"),c={sessionId:n,counter:s},e.next=5,fetch(r,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()}));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSessionId",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this._getLocalSessionId(),e.t0){e.next=5;break}return e.next=4,this._createSessionId();case 4:e.t0=e.sent;case 5:return t=e.t0,this._saveLocalSessionId(t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSession",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this.config.apiUrl,"/sessions/get?sessionId=").concat(t),e.next=3,fetch(n,{method:"get"}).then((function(e){return e.json()}));case 3:if(s=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())({apiUrl:"http://localhost:3030"}),b=n(0);var j=function(){console.log("render");var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(0),a=Object(l.a)(c,2),i=a[0],d=a[1],p=Object(s.useState)(!1),j=Object(l.a)(p,2),g=j[0],v=j[1];function m(e){return v(!0),h.updateSession({sessionId:n,counter:e}).then((function(e){d(+e.counter),v(!1)}))}return Object(s.useEffect)((function(){h.getSessionId().then(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getSession(t);case 2:n=e.sent,r(n._id),d(n.counter);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{children:["\ud83c\udf01 image gallery [",i,"]"]}),Object(b.jsxs)("header",{className:"p-2",children:[Object(b.jsx)("button",{className:"m-1",disabled:i>=100||g,onClick:function(){i>=100||m(i+1)},children:"\u2795"}),Object(b.jsx)("button",{className:"m-1",disabled:i<=0||g,onClick:function(){i<=0||m(i-1)},children:"\u2796"}),Object(b.jsxs)("button",{className:"m-1",disabled:g,onClick:function(){m(3)},children:["\ud83d\udd04 reset to ",3]})]}),Object(b.jsx)("section",{className:"img-container",children:Array(i).fill(0).map((function(e,t){return Object(b.jsx)("img",{src:f,className:"img",alt:"tile"},t)}))}),Object(b.jsx)("div",{className:"debug-placeholder",children:Object(b.jsxs)("div",{className:"session-info",children:["sessionId:",n]})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.c3e1ad79.chunk.js.map