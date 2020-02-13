(this["webpackJsonpmap-islands"]=this["webpackJsonpmap-islands"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),i=a.n(r),l=(a(16),a(10)),o=a(9),c=a(2),u=a(3),h=a(5),m=a(4),d=a(1),p=a(6),b=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.rows,t.columns);return s.a.createElement("div",null,s.a.createElement("div",{className:"grid-container",style:{gridTemplateColumns:"auto ".repeat(a)}},this.props.grid.flatMap((function(t){return t.map((function(t){return s.a.createElement("div",{className:"grid-item",style:e.getItemStyle(t)})}))}))))}},{key:"getItemStyle",value:function(e){var t=["AntiqueWhite","Aqua","Aquamarine","Blue","Brown","CadetBlue","DarkCyan"],a="white";return 1===e?a="black":e>1&&(a=t[e%t.length]),{backgroundColor:a}}}]),t}(n.Component),v=(a(17),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).state={dimensions:"",rows:0,columns:0,phase:0},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.handleSolve=e.handleSolve.bind(Object(d.a)(e)),e.handleRestart=e.handleRestart.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"handleRestart",value:function(){this.setState({rows:0,columns:0,grid:[],phase:0,islands:0})}},{key:"handleSolve",value:function(){for(var e=this.state,t=(e.rows,e.columns,e.grid.map((function(e){return Object(l.a)(e)}))),a=1,n=0;n<t.length;n++)for(var s=0;s<t[n].length;s++)1===t[n][s]&&(a++,t[n][s]=a,this.BFS(n,s,a,t));this.setState({grid:t,phase:2,islands:a-1})}},{key:"BFS",value:function(e,t,a,n){var s=[],r=[-1,-1,-1,0,1,0,1,1],i=[-1,1,0,-1,-1,1,0,1],l={x:e,y:t};for(s.push(l);s.length>0;){var o=s.shift();console.log(o);for(var c=0;c<r.length;c++)this.isSafe(o.x+r[c],o.y+i[c],n)&&(n[o.x+r[c]][o.y+i[c]]=a,s.push({x:o.x+r[c],y:o.y+i[c]}))}}},{key:"isSafe",value:function(e,t,a){return e>=0&&e<a.length&&t>=0&&t<a[e].length&&1===a[e][t]}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t=this.state.dimensions.split(","),a=parseInt(t[0]),n=parseInt(t[1]),s=[],r=0;r<a;r++)s[r]=Array.from({length:n},(function(){return Math.round(Math.random())}));var i={rows:a,columns:n,grid:s,phase:1};this.setState(i)}},{key:"render",value:function(){return s.a.createElement("div",null,0===this.state.phase&&s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"dimensions"},"Please enter bitmap size"),s.a.createElement("input",{required:!0,type:"text",className:"form-control",value:this.state.dimensions,name:"dimensions",placeholder:"Bitmap size:n,m",pattern:"+[1..9]*[0..9],+[1..9]*[0..9]",onChange:this.handleChange}),s.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Randomize"}))),0!==this.state.phase&&s.a.createElement(b,{rows:this.state.rows,columns:this.state.columns,grid:this.state.grid}),1===this.state.phase&&s.a.createElement("button",{className:"btn btn-primary m-2",onClick:this.handleSolve},"Solve"),2===this.state.phase&&s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-primary m-2",onClick:this.handleRestart},"Restart"),s.a.createElement("p",null," number off islands: ",this.state.islands," ")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);i.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.3a5cba95.chunk.js.map