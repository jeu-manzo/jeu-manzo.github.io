(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/jeu3.c85d54ed.svg"},function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(7),i=a.n(s),c=a(1),r=a(2),l=a(4),u=a(3),p=a(5),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).call=function(){window.open("tel:3312782450")},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("section",{className:"navbar-language"},o.a.createElement("button",{onClick:this.props.onClickEng},"English"),o.a.createElement("button",{onClick:this.props.onClickEsp},"Espa\xf1ol")),o.a.createElement("section",{className:"navbar-menu"},o.a.createElement("a",{href:"#home"},this.props.labelAboutMe),o.a.createElement("a",{href:"#home"},this.props.labelProjects),o.a.createElement("a",{href:"#home"},this.props.labelContact)),o.a.createElement("section",{className:"navbar-contact"},o.a.createElement("button",{className:"Phone is-animating",onClick:this.call})))}}]),t}(n.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"about-me"},o.a.createElement("p",null,this.props.text))}}]),t}(n.Component),m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"projects"},this.props.title.map(function(t,a){return o.a.createElement("div",{className:"project-container",key:a},o.a.createElement("header",null,t),o.a.createElement("article",null,e.props.technology[a].technologies.map(function(e,t){return o.a.createElement("span",{key:t},e)})))}))}}]),t}(n.Component),b=[{title:"Sobre M\xed",content:"Hola, soy Jeu, desarrolladora front-end viviendo en Guadalajara, soy autodidacta y me encanta enfrentarme a nuevos retos. Si no s\xe9 algo, buscar\xe9 la manera r\xe1pida y efecitva para aprenderlo."},{title:"About Me",content:"Hi, I'm Jeu, front-end developer living in Guadalajara, I am self-taught and I love facing new challenges. If I don't know something, I will look for the best and effective way to learn it."},{projectsSpanish:[{title:"Chatbot",content:"Chatbot por medio de WhatsApp para solicitar frutas y verduras, sus precios e informes",technologies:["Javascript","Dialogflow","Twilio","node.js"]},{title:"frutas-verduras",content:"API con conexi\xf3n a base de datos de frutas y verduras, incluy autenticaci\xf3n con token.",technologies:["Javascript","MongoDB","mongoose","Express","node.js","heroku"]},{title:"MD-Links",content:"Libreri\u0301a lee y analiza archivos en formato Markdown , para verificar los links que contengan y reporta algunas estadi\u0301sticas como, total de links en el archivo, total de links u\u0301nicos, y rotos.",technologies:["node.js","Jest","TDD","Diagramas de Flujo"]},{title:"Veganet ",content:"Aplicacio\u0301n web dirigida a personas que tienen gusto por la comida vegana/vegetariana, en la cual pueden publicar y buscar productos especi\u0301ficos de este estilo de vida.",technologies:["React","Firebase","react-router","Figma"]}],projectsEnglish:[{title:"Chatbot",content:"Chatbot por medio de WhatsApp para solicitar frutas y verduras, sus precios e informes",technologies:["Javascript","Dialogflow","Twilio","node.js"]},{title:"fruits-veggies",content:"API con conexi\xf3n a base de datos de frutas y verduras, incluy autenticaci\xf3n con token.",technologies:["Javascript","MongoDB","mongoose","Express","node.js","heroku"]},{title:"MD-Links",content:"Libreri\u0301a lee y analiza archivos en formato Markdown , para verificar los links que contengan y reporta algunas estadi\u0301sticas como, total de links en el archivo, total de links u\u0301nicos, y rotos.",technologies:["node.js","Jest","TDD","Diagramas de Flujo"]},{title:"Veganet ",content:"Aplicacio\u0301n web dirigida a personas que tienen gusto por la comida vegana/vegetariana, en la cual pueden publicar y buscar productos especi\u0301ficos de este estilo de vida.",technologies:["React","Firebase","react-router","Figma"]}]}],g=a(8),v=a.n(g),f=b[2].projectsSpanish,j=b[2].projectsEnglish,E=[],y=[],k=[],w=[];f.forEach(function(e){E.push(e.title),k.push(e.content)}),j.forEach(function(e){y.push(e.title),w.push(e.content)});var C={titlesSpanish:E,titlesEnglish:y,contentSpanish:k,contentEnglish:w,projectsSpanish:f,projectsEnglish:j},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).contentToSpanish=function(){a.setState({aboutMe:o.a.createElement(d,{text:b[0].content})}),a.setState({navAboutMe:"Sobre m\xed"}),a.setState({navProjects:"Proyectos"}),a.setState({navContact:"Contacto"}),a.setState({titleProjects:C.titlesSpanish})},a.contentToEnglish=function(){a.setState({aboutMe:o.a.createElement(d,{text:b[1].content})}),a.setState({navAboutMe:"About Me"}),a.setState({navProjects:"Projects"}),a.setState({navContact:"Contact"}),a.setState({titleProjects:C.titlesEnglish})},a.state={aboutMe:o.a.createElement(d,{text:b[0].content}),navAboutMe:"Sobre m\xed",navProjects:"Proyectos",navContact:"Contacto",titleProjects:C.titlesSpanish,technologyProjects:C.projectsSpanish},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement(h,{onClickEng:this.contentToEnglish,onClickEsp:this.contentToSpanish,labelAboutMe:this.state.navAboutMe,labelProjects:this.state.navProjects,labelContact:this.state.navContact}),o.a.createElement("main",null,o.a.createElement("img",{className:"name-jeu",src:v.a,alt:""}),this.state.aboutMe,o.a.createElement(m,{title:this.state.titleProjects,technology:this.state.technologyProjects})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15),a(16),a(17),a(18),a(19);i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.b46536ba.chunk.js.map