(this["webpackJsonpreact-workshop"]=this["webpackJsonpreact-workshop"]||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},446:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),c=n(132),s=n.n(c),r=(n(138),n(20)),o=n(21),u=n(34),j=n(23),l=n(22),d=(n.p,n(139),n(1)),h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={date:new Date},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.dd=setInterval((function(){e.setState({date:new Date})}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.dd)}},{key:"render",value:function(){return Object(d.jsxs)("p",{children:["Current date = ",this.state.date.toLocaleTimeString()]})}}]),n}(a.Component),b=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={name:""},e.doKey1=e.doKey.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"doKey",value:function(e){this.setState({name:e.target.value})}},{key:"sayHi",value:function(){console.log("Click say hi"),this.props.onSayHi(this.state.name)}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",onKeyUp:this.doKey1}),Object(d.jsx)("button",{onClick:function(){return e.sayHi()},children:"Say Hi"})]})}}]),n}(a.Component),O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name,", ",e.age]},e.id)}));return Object(d.jsx)("ul",{children:e})}}]),n}(a.Component),y=(n(141),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).users=[{id:1,name:"User 01",age:10},{id:2,name:"User 02",age:20},{id:3,name:"User 03",age:30}],e.state={message:"-------"},e.xyz=e.xyz.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"xyz",value:function(e){this.setState({message:"New section: "+e})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{users:this.users}),Object(d.jsx)(h,{}),Object(d.jsx)(b,{onSayHi:this.xyz}),Object(d.jsx)("p",{children:this.state.message})]})}}]),n}(a.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,447)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),f()}},[[446,1,2]]]);
//# sourceMappingURL=main.d6e9b65a.chunk.js.map