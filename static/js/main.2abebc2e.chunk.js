(this["webpackJsonpexercise-tracker"]=this["webpackJsonpexercise-tracker"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(0),u=a.n(n),s=a(6),l=a.n(s),r=a(1),p=a(2),c=a(4),i=a(3);a(12);var o=function(){return u.a.createElement("div",{id:"Header"},u.a.createElement("h1",null,"EXERCISE TRACKER"))},h=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).dateHandler=function(e){var a=e.target.value;t.setState({date:a})},t.pushupsHandler=function(e){var a=e.target.value;t.setState({pushups:a})},t.squatsHandler=function(e){var a=e.target.value;t.setState({squats:a})},t.situpsHandler=function(e){var a=e.target.value;t.setState({situps:a})},t.pullupsHandler=function(e){var a=e.target.value;t.setState({pullups:a})},t.submitHandler=function(e){e.preventDefault();var a=t.state,n=a.date,u=a.pushups,s=a.squats,l=a.situps,r=a.pullups;t.props.loadData(t.state),fetch("https://exercise1tracker1api.herokuapp.com/newWorkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:n,pushups:u,squats:s,situps:l,pullups:r})}).then((function(t){return t.json})).catch((function(t){return console.log(t)})),t.setState({date:"",pushups:"",squats:"",situps:"",pullups:""})},t.state={date:"",pushups:"",squats:"",situps:"",pullups:""},t}return Object(p.a)(a,[{key:"render",value:function(){return u.a.createElement("form",{onSubmit:this.submitHandler},u.a.createElement("label",null,"Date:"),u.a.createElement("input",{type:"date",onChange:this.dateHandler}),u.a.createElement("label",null,"Push Ups:"),u.a.createElement("input",{type:"text",onChange:this.pushupsHandler,value:this.state.pushups}),u.a.createElement("label",null,"Squats:"),u.a.createElement("input",{type:"text",onChange:this.squatsHandler,value:this.state.squats}),u.a.createElement("label",null,"Sit Ups"),u.a.createElement("input",{type:"text",onChange:this.situpsHandler,value:this.state.situps}),u.a.createElement("label",null,"Pull Ups:"),u.a.createElement("input",{type:"text",onChange:this.pullupsHandler,value:this.state.pullups}),u.a.createElement("button",null,"Enter"))}}]),a}(u.a.Component),d=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=this.props,e=t.pushups,a=t.squats,n=t.situps,s=t.pullups,l=t.date;return l=l.substring(0,10),u.a.createElement("div",null,u.a.createElement("table",{className:"contentTable"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"date:"),u.a.createElement("th",null,"push ups:"),u.a.createElement("th",null,"Squats:"),u.a.createElement("th",null,"Sit ups:"),u.a.createElement("th",null,"Pull Ups:"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,l),u.a.createElement("td",null,e),u.a.createElement("td",null,a),u.a.createElement("td",null,n),u.a.createElement("td",null,s))),u.a.createElement("br",null)))}}]),a}(u.a.Component),m=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=this.props.data.map((function(t){return u.a.createElement(d,{id:t.id,date:t.date,pushups:t.pushups,squats:t.squats,situps:t.situps,pullups:t.pullups})}));return u.a.createElement("div",{className:"container"},t)}}]),a}(u.a.Component),E=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(r.a)(this,a);return(t=e.call(this)).loadData=function(e){for(var a={date:e.date,pushups:e.pushups,squats:e.squats,situps:e.situps,pullups:e.pullups},n=t.state.workouts,u=n.length;u>0;u--)n[u]=n[u-1];n[0]=a,t.setState({workouts:n})},t.state={workouts:[]},t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://exercise1tracker1api.herokuapp.com/").then((function(t){return t.json()})).then((function(e){t.setState({workouts:e.reverse()})}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(o,null),u.a.createElement(h,{loadData:this.loadData}),u.a.createElement(m,{data:this.state.workouts}))}}]),a}(u.a.Component);l.a.render(u.a.createElement(E,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2abebc2e.chunk.js.map