(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),o=n.n(l),c=(n(28),n(29),n(11)),s=n(10),i=n(5),u=n(6),m=n(8),f=n(7),h=n(9),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},n.styleNavigationBar={backgroundColor:"#000",color:"#fff",padding:"10px"},n.styleDiv={display:"flex",justifyContent:"space-between"},n.styleLi={display:"inline-block",margin:"0 5px"},n.styleNavigationBarH1={fontSize:"20px",marginBottom:"0px"},n.userLink="#",n.styleNavLinks={display:"flex",justifyContent:"space-between",margin:"0 10px",color:"#fff",textDecoration:"none"},n.styleNavBarSearchForm={display:"flex",justifyContent:"space-between",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"1px solid #fff",color:"#fff",padding:"0px 7px",background:"transparent",width:"600px",fontSize:"14px"},n.styleUser={display:"flex",justifyContent:"space-between",color:"#fff",textDecoration:"none"},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navigation-bar",style:this.styleNavigationBar},r.a.createElement("div",{style:this.styleDiv,className:"container-fluid"},r.a.createElement("h1",{style:this.styleNavigationBarH1},"Counter"),r.a.createElement("div",{className:"nav-links",style:this.styleNavLinks},r.a.createElement(c.b,{style:this.styleNavLinks,to:"/"},"Home"),r.a.createElement(c.b,{style:this.styleNavLinks,to:"/products"},"Products"),r.a.createElement(c.b,{style:this.styleNavLinks,to:"/about"},"About")),r.a.createElement("div",null,r.a.createElement(c.b,{style:this.styleUser},"User")))))}}]),t}(a.Component),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={count:0,tags:["tag1","tag2","tag3"]},n.styles={fontSize:12,fontWeight:"bold",color:"#fff"},n.handleIncrement=function(e){console.log(e),n.setState({count:n.state.count+1})},n.handleDecrement=function(){n.setState({count:n.state.count-1})},n.handleReset=function(){n.setState({count:0})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.state.count?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.state.count;return 0===e?"Zero":e}},{key:"renderTags",value:function(){return 0===this.state.tags.length?r.a.createElement("p",null,"There are no tags!"):r.a.createElement("ul",null,this.state.tags.map(function(e){return r.a.createElement("li",{key:e},e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h3",null,"Counter")),r.a.createElement("div",{className:"m-2"},r.a.createElement("button",{onClick:this.handleDecrement,style:{fontSize:14},className:"btn btn-secondary btn-sm"},"-"),r.a.createElement("span",{style:this.styles,className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.handleIncrement({id:1})},style:{fontSize:14},className:"btn btn-secondary btn-sm"},"+"),r.a.createElement("button",{onClick:this.handleReset,style:{fontSize:14},className:"btn btn-danger btn-sm m-2"},"Reset")))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).footer={background:"#000",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},n.footerP={fontSize:"12px",marginBottom:"0px",margin:"10px 0"},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{style:this.footer},r.a.createElement("div",{className:"footerWrapper"},r.a.createElement("p",{style:this.footerP},"\xa9 Copyright 2019 Counter - All Rights Reserved"))))}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About Page"))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Products")))}}]),t}(a.Component);var v=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))}}),r.a.createElement(s.a,{path:"/about",component:b}),r.a.createElement(s.a,{path:"/products",component:g}),r.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(34);o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.953f382b.chunk.js.map