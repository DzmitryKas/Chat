(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(10),r=a.n(i),o=(a(20),a(2)),c=a(3),l=a(6),u=a(4),m=a(1),h=a(5),d=(a(7),a(13)),g=a(8),f=a.n(g),p=a(11),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).getData=function(e){return new Date(e).toString().substr(4,20)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"message-list"},this.props.messages.map(function(t){return console.log("message11",t),s.a.createElement("li",{key:t[0].id,className:t[0].from===e.props.name?"my-message":"server-message"},s.a.createElement("div",{className:"wrapper-message"},s.a.createElement("div",{className:"from-message"},t[0].from),s.a.createElement("div",{className:"text-message"},t[0].message),s.a.createElement("div",{className:"time-message"},e.getData(t[0].time))))}))}}]),t}(s.a.Component);function v(e){return s.a.createElement("div",{className:"wrapper-header"},s.a.createElement("div",{className:"wrapper-title"},s.a.createElement("p",{className:"title"},"Hello ",e.name,"!")),s.a.createElement("p",null,e.connect),s.a.createElement("div",{className:"button-logout"},s.a.createElement("button",{className:"log-out",onClick:e.logOut},"Log out")))}var O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={message:""},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.sendMessage(this.state.message),this.setState({message:""})}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit,className:"send-message"},s.a.createElement("input",{onChange:this.handleChange,value:this.state.message,placeholder:"Type your message",className:"input-message",type:"text"}))}}]),t}(s.a.Component),w=a(12);var j="ws://st-chat.shas.tel",k=function(){var e=Object(p.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","".concat(j));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).ws=new w.a(k),a.addMessage=function(e){return a.setState(function(t){return{messages:[].concat(Object(d.a)(t.messages),[e])}})},a.sendMessage=function(e){var t={from:a.state.name,message:e};a.ws.send(JSON.stringify(t)),a.ws.onmessage=function(e){var t=JSON.parse(e.data);a.addMessage(t)}},a.state={messages:[],name:a.props.user,ws:null,connect:""},a.sendMessage=a.sendMessage.bind(Object(m.a)(a)),a.notificationDOMRef=s.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.ws.onopen=function(){e.setState({connect:"online"})},this.ws.onmessage=function(t){var a=JSON.parse(t.data);e.addMessage(a),"undefined"!==typeof document.hidden&&function(e,t){"Notification"in window?"granted"===Notification.permission?new Notification(e):"denied"!==Notification.permission&&Notification.requestPermission(function(t){"granted"===t&&new Notification(e)}):alert("This browser does not support desktop notification")}(a[0].message,a[0].from)},this.ws.onclose=function(){e.setState({connect:"offline",ws:new WebSocket(j)})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(v,{connect:this.state.connect,logOut:this.props.logout,name:this.state.name}),s.a.createElement("main",{className:"wrapper-main"},s.a.createElement(b,{messages:this.state.messages,name:this.state.name}),s.a.createElement(O,{sendMessage:this.sendMessage})))}}]),t}(s.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={nickname:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({nickname:e.target.value})}},{key:"handleSubmit",value:function(){this.props.setUser(this.state.nickname),localStorage.setItem("name",this.state.nickname)}},{key:"render",value:function(){var e=this,t=this.state.nickname;null!==localStorage.getItem&&(t=localStorage.getItem("name"));return s.a.createElement("div",{className:"wrapper-login"},s.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"nickname"},s.a.createElement("h1",{className:"title-login-form"},"Your name?")),s.a.createElement("input",{ref:function(t){e.textInput=t},className:"nickname",type:"text",placeholder:t,onChange:this.handleChange})))}}]),t}(s.a.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={socket:null,user:null},a.setUser=a.setUser.bind(Object(m.a)(a)),a.logout=a.logout.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setUser",value:function(e){this.setState({user:e})}},{key:"logout",value:function(){this.setState({user:null})}},{key:"render",value:function(){var e=this.state.user;return s.a.createElement("div",{className:"container"},e?s.a.createElement(E,{user:e,logout:this.logout}):s.a.createElement(N,{setUser:this.setUser}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.8b7f04d1.chunk.js.map