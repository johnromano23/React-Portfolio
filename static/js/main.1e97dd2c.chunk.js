(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),s=t.n(r),o=(t(15),t(1)),c=t(2),i=t(4),m=t(3),u=t(6),d=(t(18),t(19),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.state,r=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi! I'm ",e),l.a.createElement("h3",null,"I'm a ",n," based ",l.a.createElement("span",null,a),". ",t,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},r))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 John Michael Romano"),l.a.createElement("li",null,"Design by"," ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.city,s=this.props.data.address.state,o=this.props.data.address.zip,c=this.props.data.phone,i=this.props.data.email,m=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"John Romano Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),r," ",s,", ",o),l.a.createElement("br",null),l.a.createElement("span",null,c),l.a.createElement("br",null),l.a.createElement("span",null,i))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:m,className:"button"},l.a.createElement("i",{className:"fa fa-cloud"}),"View Resume")))))))}}]),t}(n.Component),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,r=this.props.data.address.zip,s=this.props.data.phone,o=(this.props.data.email,this.props.data.contactmessage);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},o))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," oops! Error"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),t,", ",n," ",r,l.a.createElement("br",null),l.a.createElement("span",null,s))))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),g=t(9),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({resumeData:g})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{data:this.state.resumeData.main}),l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(E,{data:this.state.resumeData.resume}),l.a.createElement(v,{data:this.state.resumeData.portfolio}),l.a.createElement(f,{data:this.state.resumeData.main}),l.a.createElement(p,{data:this.state.resumeData.main}))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(l.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/My-React-Portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/My-React-Portfolio","/service-worker.js");N?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()},9:function(e){e.exports=JSON.parse('{"main":{"name":"John Michael Romano","occupation":"Full Stack Web Development Student","description":"I am seeking full time employment for an entry level position in web development and programming","image":"ProfilePic.png","bio":"I am currently a student at Rutgers Coding Bootcamp. I enjoy building small websites and applications to try to enhance my knowledge and skills. During my free time I like to enjoy the outdoors on sunny days. I also like to laid back indoors and watch movies, catch up on TV shows or play video games.","contactmessage":"For questions, business inquiries, or simply to chat...message me!","email":"john_romano23@yahoo.com","phone":"201-893-1000","address":{"street":"366 Rutherford Ave","city":"Lyndhurst","state":"New Jersey","zip":"07071"},"website":"https://github.com/johnromano23/My-React-Portfolio","resumedownload":"https://docs.google.com/document/d/1h7RXUHbvRHfkJ6FoRrgbo0BYk_wRmlY27QZYItAAZFM/edit","social":[{"name":"linkedin","url":"https://www.linkedin.com/in/john-michael-romano-0000231a7/","className":"fa fa-linkedin"},{"name":"github","url":"https://github.com/johnromano23","className":"fa fa-github"}]},"resume":{"education":[{"school":"Rutgers Coding Bootcamp","degree":"Full Stack Web Development","graduated":"July 2020"},{"school":"University of Pittsburgh","degree":"Criminal Justice","graduated":"May 2016"}],"work":[{"company":"U.S Army National Guard","title":"Infantry Soldier","years":"Oct 2014 - Present","description":"My positions as an infantryman includes machine gunner, radio/telephone operator, rifleman and grenadier."},{"company":"G4S Secure Solutions","title":"Security Supervisor","years":"July 2017 - February 2019","description":"As the supervisor I was in charg of leading a team to maintain and secure the Citi Bank Data Center in East Rutherford, NJ."}],"skillmessage":"Here are coding languages and programs with my profiency levels","skills":[{"name":"Git","level":"60%"},{"name":"HTML","level":"70%"},{"name":"CSS","level":"70%"},{"name":"Javascript","level":"60%"},{"name":"Node JS","level":"50%"},{"name":"MySQL","level":"60%"},{"name":"MongoDB","level":"70%"},{"name":"React JS","level":"50%"}]},"portfolio":{"projects":[{"title":"Weather-Dashboard","category":"Application","image":"weather.jpg","url":"https://johnromano23.github.io/HW06-Weather-Dashboard/"},{"title":"Work-Day Scheduler","category":"Application","image":"Scheduler.jpg","url":"https://johnromano23.github.io/Homework-05-Work-Day-Scheduler/"},{"title":"EventScope","category":"Website","image":"EventScope.png","url":"https://airazabal92.github.io/project-1/"},{"title":"Employee-Directory","category":"Application","image":"Employee-Directory.jpg","url":"https://johnromano23.github.io/User-Directory/"},{"title":"Plan-it-Fitness","category":"Website","image":"Plan-it-Fitness.png","url":"https://plan-it-fitness.herokuapp.com/"}]}}')}},[[10,1,2]]]);
//# sourceMappingURL=main.1e97dd2c.chunk.js.map