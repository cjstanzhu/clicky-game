(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),m=n.n(o),s=n(3),p=n(4),c=n(7),i=n(5),l=n(8);var h=function(e){return r.a.createElement("div",{className:"container"},e.children)};var u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,e.children),r.a.createElement("h3",null,"Gotta Click'em All! Gotta Click'em All!~ \ud83c\udfb6"))))};var w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h4",null,e.children))),r.a.createElement("hr",null),r.a.createElement("br",null))};var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 justify-content-center text-center flex-wrap d-flex"},e.children)),r.a.createElement("br",null))};var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleIncrement(e.id)}})))},k=n(6),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={images:k,score:0,highScore:0,history:[]},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}n.setState({images:e})},n.handleIncrement=function(e){-1===n.state.history.indexOf(e)?(n.setState({score:n.state.score+1}),n.state.score+1>n.state.highScore&&n.setState({highScore:n.state.score+1}),n.setState({history:n.state.history.concat([e])}),n.state.score+1===12&&(n.setState({history:[]}),alert("Congratulations! You Won!"),n.setState({score:0})),n.shuffle(n.state.images)):(n.setState({history:[]}),alert("You lose. Please try again."),n.setState({score:0}),n.shuffle(n.state.images))},n}return Object(l.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.shuffle(this.state.images)}},{key:"render",value:function(){var e=this;return r.a.createElement(h,null,r.a.createElement(u,null,"\ud83c\udfb0 Clicky Game"),r.a.createElement(w,null,"Score: ",this.state.score," | High Score: ",this.state.highScore),r.a.createElement(d,null,this.state.images.map((function(t){return r.a.createElement(g,{id:t.id,key:t.id,name:t.name,image:t.image,handleIncrement:e.handleIncrement})}))))}}]),t}(a.Component);m.a.render(r.a.createElement(x,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"name":"Unown A","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201000.png&w=200px&h=200px"},{"id":2,"name":"Unown B","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201001.png&w=200px&h=200px"},{"id":3,"name":"Unown C","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201002.png&w=200px&h=200px"},{"id":4,"name":"Unown  D","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201003.png&w=200px&h=200px"},{"id":5,"name":"Unown E","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201004.png&w=200px&h=200px"},{"id":6,"name":"Unown F","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201005.png&w=200px&h=200px"},{"id":7,"name":"Unown G","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201006.png&w=200px&h=200px"},{"id":8,"name":"Unown H","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201007.png&w=200px&h=200px"},{"id":9,"name":"Unown I","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201008.png&w=200px&h=200px"},{"id":10,"name":"Unown J","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201009.png&w=200px&h=200px"},{"id":11,"name":"Unown K","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201010.png&w=200px&h=200px"},{"id":12,"name":"Unown L","image":"http://www.pokemasters.net/pokedex/thumb.php?src=/pokedex/images/pokemon/201011.png&w=200px&h=200px"}]')},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.59611aea.chunk.js.map