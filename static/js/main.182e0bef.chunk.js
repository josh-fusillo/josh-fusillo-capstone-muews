(this["webpackJsonpmusic-app-capstone"]=this["webpackJsonpmusic-app-capstone"]||[]).push([[0],{102:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(26),s=t.n(l),c=(t(73),t(15)),o=t.n(c),i=t(23),m=t(11),u=t(12),d=t(14),p=t(13),E=(t(46),t(34)),h=t.n(E),b=t(31),f=t.n(b),v=t(32),g=t.n(v),N=t(33),_=t.n(N),w=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e="https://"+this.props.facebook,a="https://"+this.props.twitter,t="https://"+this.props.homepage,n="https://www.instagram.com/"+this.props.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__left"},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:f.a,className:"footer__facebook",alt:"Facebook logo"})),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:g.a,className:"footer__facebook",alt:"Twitter logo"}))),r.a.createElement("img",{src:h.a,alt:"music-news",className:"footer__tagline"}),r.a.createElement("div",{className:"footer__right"},r.a.createElement("div",{className:"footer__right"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:_.a,className:"footer__facebook",alt:"Instagram logo"})),r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:this.props.image,className:"footer__band",alt:"header"}))))))}}]),t}(n.Component),O=(t(75),t(58)),y=t.n(O),j=t(9),S=t(7),k=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){this.props.facebook,this.props.twitter,this.props.homepage,this.props.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("img",{src:h.a,alt:"music-news",className:"footer__tagline"})))}}]),t}(n.Component),x={in:{opacity:1},out:{opacity:0}},D=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return this.props.redirect?r.a.createElement(j.a,{to:"/MainTwo"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.b.div,{initial:"out",animate:"in",exit:"out",variants:x},r.a.createElement("div",{className:"main"},r.a.createElement("video",{src:y.a,autoPlay:!0,loop:!0,className:"main__logo",alt:"Logo"}),r.a.createElement("form",{className:"main__form",onSubmit:this.props.handleSubmit},r.a.createElement("input",{type:"text",className:"main__search",placeholder:"Search your favourite artist name here...",value:this.props.searchName,onChange:this.props.onChange})))),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}}]),t}(n.Component),C=t(44),I=t(60),T=t.n(I),L=(t(80),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=T()(this.props.dateTime,"mmmm dS, yyyy, h:MM:ss TT");return r.a.createElement("div",{className:"concert__listings"},r.a.createElement("h4",null,"DATE & TIME"),r.a.createElement("p",{className:"concert__text-style"},e),r.a.createElement("h4",null,"VENUE NAME"),r.a.createElement("p",{className:"concert__text-style"},this.props.venueName),r.a.createElement("h4",null,"VENUE LOCATION"),r.a.createElement("p",{className:"concert__text-style"},this.props.venueLocation),r.a.createElement("a",{href:this.props.ticketLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"concert__button"},"Purchase Tickets")))}}]),t}(n.Component)),A=t(39),R=t.n(A),B=(t(81),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"}))}}]),t}(n.Component));function P(e){var a=e.video,t=e.handleVideoSelect;return r.a.createElement(S.b.button,{onClick:function(){return t(a)},className:"video__item",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("img",{className:"video__image",src:a.snippet.thumbnails.medium.url,alt:a.snippet.description}),r.a.createElement("div",{className:"video__content"},r.a.createElement("div",{className:"video__title"},a.snippet.title)))}t(48);function F(e){var a=e.videos,t=e.handleVideoSelect,n=a.map((function(e){return r.a.createElement(P,{key:e.id.videoId,video:e,handleVideoSelect:t})}));return r.a.createElement("div",{className:"video"},n)}function V(e){var a=e.video;if(!a)return r.a.createElement("div",null,r.a.createElement("div",{className:"video__no-video"}));var t="https://www.youtube.com/embed/".concat(a.id.videoId);return console.log(typeof a),r.a.createElement("div",null,r.a.createElement("div",{className:"video__player"},r.a.createElement("iframe",{className:"video__player-embed",src:t,allowFullScreen:!0,title:"Video player"})),r.a.createElement("div",{className:"video__player-title-wrapper"},r.a.createElement("h4",{className:"video__player-title"},a.snippet.title)))}t(82);var U=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,this.props.title),r.a.createElement("div",null,this.props.year),r.a.createElement("img",{src:this.props.thumb,alt:"release"}))}}]),t}(n.Component),G=t(27),H=(t(83),t(84),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{naturalSlideWidth:5,naturalSlideHeight:4.5,totalSlides:3,isPlaying:!0},r.a.createElement(G.c,null,r.a.createElement(G.b,{index:0},r.a.createElement("img",{className:"slides",src:this.props.imageTwo,alt:"slide"})),r.a.createElement(G.b,{index:1},r.a.createElement("img",{className:"slides",src:this.props.imageThree,alt:"slide"})),r.a.createElement(G.b,{index:2},r.a.createElement("img",{className:"slides",src:this.props.imageFour,alt:"slide"})))))}}]),t}(n.Component)),q=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e,a=this,t={in:{opacity:1},out:{opacity:0}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(S.b.div,{initial:"out",animate:"in",exit:"out",variants:t,transition:{ease:"easeOut",duration:2}},r.a.createElement("div",null,r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__one"},r.a.createElement(V,{video:this.props.selectedVideo}),r.a.createElement(F,{handleVideoSelect:this.props.handleVideoSelect,videos:this.props.videos})),r.a.createElement("div",{className:"card__wrapper-two"},r.a.createElement(S.b.div,{className:"card__two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("img",{src:this.props.audioDB.strArtistBanner,className:"hero__image",alt:"Band hero"}),r.a.createElement("div",{className:"hero__wrapper"},r.a.createElement("h1",{className:"hero__bio"},"BIOGRAPHY:"),r.a.createElement("hr",null),r.a.createElement("div",{className:"hero__bio-text"},this.props.audioDB.strBiographyEN))),r.a.createElement("div",{className:"card__wrapper-three"},r.a.createElement(S.b.div,{className:"card__three",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement(H,{imageOne:this.props.audioDB.strArtistClearart,imageTwo:this.props.audioDB.strArtistFanart,imageThree:this.props.audioDB.strArtistFanart2,imageFour:this.props.audioDB.strArtistFanart3,imageFive:this.props.audioDB.strArtistLogo})),r.a.createElement(S.b.div,(e={className:"card__five",initial:"out",animate:"in",exit:"out",variants:t,whileHover:{scale:1.03}},Object(C.a)(e,"animate",{scale:1}),Object(C.a)(e,"transition",{duration:.5}),e),r.a.createElement("h2",{className:"releases__header"},"RELEASES"),this.props.releaseData.map((function(e){return r.a.createElement(U,{title:e.title,year:e.year,thumb:e.thumb})}))))),r.a.createElement("div",{className:"card__wrapper-four"},r.a.createElement(S.b.div,{className:"card__four",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("div",{className:"band"},r.a.createElement("h1",{className:"band__header"},"BAND DETAILS"),r.a.createElement("h2",{className:"band__header-two"},"MEMBERS:"),this.props.discogsInfo.members&&this.props.discogsInfo.members.map((function(e){return r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},e.name))})),r.a.createElement("h2",{className:"band__header-two"},"YEAR FORMED:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.intFormedYear)),r.a.createElement("h2",{className:"band__header-two"},"LABEL:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strLabel)),r.a.createElement("h2",{className:"band__header-two"},"COUNTRY:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strCountry)),r.a.createElement("h2",{className:"band__header-two"},"GENRE:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strGenre)),r.a.createElement("h2",{className:"band__header-two"},"STYLE:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strStyle)))),r.a.createElement(S.b.div,{className:"card__six",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h2",null,"CONCERT LISTINGS"),this.props.concertInfo&&this.props.concertInfo.map((function(e){return r.a.createElement(L,{dateTime:e.datetime,onSale:e.on_sale_datetime,venueName:e.venue.name,venueLocation:e.venue.location,ticketLink:e.url,noData:a.props.noData})}))))))),r.a.createElement(w,{name:this.props.artistInfo.name,image:this.props.artistInfo.thumb_url,facebook:this.props.audioDB.strFacebook,twitter:this.props.audioDB.strTwitter,homepage:this.props.audioDB.strWebsite,handleSubmitTwo:this.props.handleSubmitTwo,value:this.props.value}))}}]),t}(n.Component),M=t(24),K=t.n(M),Y=K.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:12,key:"AIzaSyDTXTDC2A2VJGDVvxN2rtPU-g5RU_KICIQ",type:"video",order:"viewCount"}}),W=(t(102),t(8)),z=t(10),J=t(111),X=t(112),Q=t(61),Z=(t(103),Q.a.initializeApp({apiKey:"AIzaSyDv_F9CvB97KK1ZXRn5rNsvngJxu9gjXdk",authDomain:"muews-ed035.firebaseapp.com",databaseURL:"https://muews-ed035.firebaseio.com",projectId:"muews-ed035",storageBucket:"muews-ed035.appspot.com",messagingSenderId:"142418129281",appId:"1:142418129281:web:5cc45c8a9bfc869fe7b880"})),$=Z.auth(),ee=r.a.createContext();function ae(){return Object(n.useContext)(ee)}function te(e){var a=e.children,t=Object(n.useState)(),l=Object(z.a)(t,2),s=l[0],c=l[1],o=Object(n.useState)(!0),i=Object(z.a)(o,2),m=i[0],u=i[1];Object(n.useEffect)((function(){return $.onAuthStateChanged((function(e){c(e),u(!1)}))}),[]);var d={currentUser:s,login:function(e,a){return $.signInWithEmailAndPassword(e,a)},signup:function(e,a){return $.createUserWithEmailAndPassword(e,a)},logout:function(){return $.signOut()},resetPassword:function(e){return $.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return r.a.createElement(ee.Provider,{value:d},!m&&a)}t(28);function ne(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useRef)(),l=ae().signup,s=Object(n.useState)(""),c=Object(z.a)(s,2),m=c[0],u=c[1],d=Object(n.useState)(!1),p=Object(z.a)(d,2),E=p[0],h=p[1],b=Object(j.g)();function f(){return(f=Object(i.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),a.current.value===t.current.value){n.next=3;break}return n.abrupt("return",u("Passwords do not match!"));case 3:return n.prev=3,u(""),h(!0),n.next=8,l(e.current.value,a.current.value);case 8:b.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),u("Failed to create an account");case 14:h(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("h2",{className:"header-login"},"Sign Up"),r.a.createElement(S.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},m&&r.a.createElement(J.a,{variant:"danger"},m),r.a.createElement(X.a,{onSubmit:function(e){return f.apply(this,arguments)}},r.a.createElement(X.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(X.a.Label,null,"Email")),r.a.createElement(X.a.Control,{type:"email",ref:e,required:!0,className:"form-style"})),r.a.createElement(X.a.Group,{id:"password"},r.a.createElement("div",{className:"label-header-two"},r.a.createElement(X.a.Label,null,"Password")),r.a.createElement(X.a.Control,{type:"password",ref:a,required:!0,className:"form-style"})),r.a.createElement(X.a.Group,{id:"password-confirm"},r.a.createElement("div",{className:"label-header-two"},r.a.createElement(X.a.Label,null,"Password Confirmation")),r.a.createElement(X.a.Control,{type:"password",ref:t,required:!0,className:"form-style"})),r.a.createElement("button",{disabled:E,className:"btn-login-two",type:"submit"},"Sign Up")),r.a.createElement("div",{className:"forgot__need-three"},"Already have an account? "),r.a.createElement(W.b,{to:"/login",className:"forgot-pass-two"},"Log In")),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}var re=t(66),le=t(25),se=t(64),ce=t(65),oe=[{title:"Search",path:"/",icon:r.a.createElement(se.a,null),cName:"nav-text"},{title:"Dashboard",path:"/dashboard",icon:r.a.createElement(ce.a,null),cName:"nav-text"}],ie=t(0);t(106);function me(){var e=ae().currentUser;return null===e?null:r.a.createElement("div",null,e.email)}var ue=function(e){var a=Object(n.useState)(!1),t=Object(z.a)(a,2),l=t[0],s=t[1],c=function(){return s(!l)};return null===ae().currentUser?[r.a.createElement(W.b,{to:"/login",className:"current-nav-user"},"Log In"),r.a.createElement(W.b,{to:"/josh-fusillo-capstone-meuws/",className:"current-nav-user-two",onClick:e.handleSubmitTwo},"Search")]:r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.b.Provider,{value:{color:"#fff"}},r.a.createElement("div",{className:"navbar"},r.a.createElement(W.b,{to:"#",className:"menu-bars"},r.a.createElement(re.a,{onClick:c}))),r.a.createElement("nav",{className:l?"nav-menu active":"nav-menu"},r.a.createElement("ul",{className:"nav-menu-items",onClick:c},r.a.createElement("li",{className:"navbar-toggle"},r.a.createElement(W.b,{to:"#",className:"menu-bars"},r.a.createElement(le.d,null))),oe.map((function(a,t){return r.a.createElement("li",{key:t,className:a.cName},r.a.createElement(W.b,{to:a.path,onClick:e.handleSubmitTwo},a.icon,r.a.createElement("span",null,a.title)))}))))),r.a.createElement("img",{src:R.a,alt:"transparent",className:"logo-transparent"}),r.a.createElement("div",{className:"header__band"},r.a.createElement(me,null)))};function de(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=ae().login,l=Object(n.useState)(""),s=Object(z.a)(l,2),c=s[0],m=s[1],u=Object(n.useState)(!1),d=Object(z.a)(u,2),p=d[0],E=d[1],h=Object(j.g)();function b(){return(b=Object(i.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,m(""),E(!0),n.next=6,t(e.current.value,a.current.value);case 6:h.push("/dashboard"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),m("Failed to sign in");case 12:E(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("h2",{className:"header-login"},"LOG IN"),c&&r.a.createElement(J.a,{variant:"danger"},c),r.a.createElement(S.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement(X.a,{onSubmit:function(e){return b.apply(this,arguments)}},r.a.createElement(X.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(X.a.Label,{className:"label-header"},"EMAIL")),r.a.createElement("div",{className:"email-style"},r.a.createElement(X.a.Control,{type:"email",ref:e,required:!0,className:"form-style"}))),r.a.createElement(X.a.Group,{id:"password"},r.a.createElement(X.a.Label,null,"PASSWORD"),r.a.createElement("div",{className:"email-style"},r.a.createElement(X.a.Control,{type:"password",ref:a,required:!0,className:"form-style"}))),r.a.createElement("button",{disabled:p,className:"btn-login",type:"submit"},"Log In")),r.a.createElement("div",{className:"w-30 text-center mt-3"},r.a.createElement(W.b,{to:"/forgot-password",className:"forgot-pass"},"Forgot Password?")),r.a.createElement("div",{className:"forgot__need"},"Need an account?")," ",r.a.createElement(W.b,{to:"/signup",className:"forgot-pass"},"Sign Up")),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}var pe=t(67);function Ee(e){var a=e.component,t=Object(pe.a)(e,["component"]),n=ae().currentUser;return r.a.createElement(j.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(j.a,{to:"/login"})}}))}var he=t(110);function be(){var e=Object(n.useRef)(),a=ae().resetPassword,t=Object(n.useState)(""),l=Object(z.a)(t,2),s=l[0],c=l[1],m=Object(n.useState)(""),u=Object(z.a)(m,2),d=u[0],p=u[1],E=Object(n.useState)(!1),h=Object(z.a)(E,2),b=h[0],f=h[1];function v(){return(v=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,p(""),c(""),f(!0),t.next=7,a(e.current.value);case 7:p("Check your inbox for further instructions"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),c("Failed to reset password");case 13:f(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("h2",{className:"header-login"},"PASSWORD RESET"),r.a.createElement(S.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},s&&r.a.createElement(J.a,{variant:"danger"},s),d&&r.a.createElement(J.a,{variant:"success"},d),r.a.createElement(X.a,{onSubmit:function(e){return v.apply(this,arguments)}},r.a.createElement(X.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(X.a.Label,{className:"label-header"},"Email  ")),r.a.createElement(X.a.Control,{type:"email",ref:e,className:"email-style-two",required:!0})),r.a.createElement(he.a,{disabled:b,className:"btn-login",type:"submit"},"Reset Password")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(W.b,{to:"/login",className:"forgot-pass-two"},"Log In")),r.a.createElement("div",{className:"forgot__need-two"},"Need an account?  "),r.a.createElement(W.b,{to:"/signup",className:"forgot-pass-two"},"Sign Up")),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}function fe(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useRef)(),l=ae(),s=l.currentUser,c=l.updatePassword,o=l.updateEmail,i=Object(n.useState)(""),m=Object(z.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(!1),E=Object(z.a)(p,2),h=E[0],b=E[1],f=Object(j.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"header-login"},"UPDATE PROFILE"),r.a.createElement(S.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},u&&r.a.createElement(J.a,{variant:"danger"},u),r.a.createElement(X.a,{onSubmit:function(n){if(n.preventDefault(),a.current.value!==t.current.value)return d("Passwords do not match!");var r=[];b(!0),d(""),e.current.value!==s.email&&r.push(o(e.current.value)),a.current.value&&r.push(c(a.current.value)),Promise.all(r).then((function(){f.push("/")})).catch((function(){d("Failed to update account")})).finally((function(){b(!1)}));try{d(""),b(!0),f.push("/")}catch(l){d("Failed to create an account")}b(!1)}},r.a.createElement(X.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(X.a.Label,null,"Email")),r.a.createElement(X.a.Control,{type:"email",ref:e,className:"email-style-two",required:!0,defaultValue:s.email})),r.a.createElement(X.a.Group,{id:"password"},r.a.createElement(X.a.Label,null,"Password"),r.a.createElement(X.a.Control,{type:"password",ref:a,className:"email-style-two",required:!0,placeholder:"Leave blank to keep the same"})),r.a.createElement(X.a.Group,{id:"password-confirm"},r.a.createElement(X.a.Label,null,"Password Confirmation"),r.a.createElement(X.a.Control,{type:"password",ref:t,className:"email-style-two",required:!0,placeholder:"Leave blank to keep the same"})),r.a.createElement(he.a,{disabled:h,className:"btn-login",type:"submit"},"Update")),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(W.b,{to:"/dashboard",className:"forgot-pass"},"Cancel"))),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}function ve(e){var a=Object(n.useState)(""),t=Object(z.a)(a,2),l=t[0],s=t[1],c=ae(),m=c.currentUser,u=c.logout,d=Object(j.g)();function p(){return(p=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,u();case 4:d.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.b.div,{initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1},out:{opacity:0}},transition:{ease:"easeOut",duration:2}},r.a.createElement(ie.b.Provider,{value:{color:"white"}},r.a.createElement("h2",{className:"text-center mb-4 mt-4"},"DASHBOARD"),r.a.createElement("div",{className:"profile__card-wrapper"},r.a.createElement(S.b.div,{className:"profile__card",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h3",{className:"text-center mb-4 mt-4"},"FAVORITES"),r.a.createElement(le.b,{className:"profile__icon-two"}),r.a.createElement("ul",null,r.a.createElement("li",null,"The Killers"),r.a.createElement("li",null,"Avril Lavigne"),r.a.createElement("li",null,"Aqua"),r.a.createElement("li",null,"Backstreet Boys"))),r.a.createElement(S.b.div,{className:"profile__card",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h3",{className:"text-center mb-4 mt-4"},"PROFILE"),l&&r.a.createElement(J.a,{variant:"danger"},l),r.a.createElement("strong",null,"Email:"),"  ",m.email,r.a.createElement(le.c,{className:"profile__icon"}),r.a.createElement(W.b,{to:"/update-profile",className:"btn-update forgot-pass"},"Update Profile"),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(he.a,{variant:"link",className:"btn-login",onClick:function(){return p.apply(this,arguments)}},"Log Out"))),r.a.createElement(S.b.div,{className:"profile__card",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h3",{className:"text-center mb-4 mt-4"},"HISTORY"),r.a.createElement(le.a,{className:"profile__icon-two"}),r.a.createElement("ul",null,r.a.createElement("li",null,"The Killers"),r.a.createElement("li",null,"Avril Lavigne"),r.a.createElement("li",null,"Coldplay"),r.a.createElement("li",null,"The Beatles"),r.a.createElement("li",null,"Aqua"),r.a.createElement("li",null,"Backstreet Boys")))))),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}var ge=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={searchName:"",newsResults:[],videos:[],artistInfo:[],concertInfo:[],discogsInfo:[],audioDB:[],releaseData:[],images:[],selectedVideo:null,redirect:!1,noData:""},e.handleSearchName=function(a){e.setState({searchName:a.target.value})},e.getVideo=Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Y.get("/search",{params:{q:e.state.searchName}});case 2:t=a.sent,e.setState({videos:t.data.items});case 4:case"end":return a.stop()}}),a)}))),e.getArtist=function(){K.a.get("https://rest.bandsintown.com/artists/".concat(e.state.searchName,"/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8")).then((function(a){e.setState({artistInfo:a.data})}))},e.getEvent=function(){K.a.get("https://rest.bandsintown.com/artists/".concat(e.state.searchName,"/events/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8")).then((function(a){a.data.length?e.setState({concertInfo:a.data}):e.setState({noData:"No Event Listings"})}))},e.getData=function(){K.a.get("https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(e.state.searchName)).then((function(a){console.log(a),e.setState({audioDB:a.data.artists[0]})}))},e.getArtistData=function(){var a={headers:{Authorization:"Discogs key=trndaRvgxPZeVGxKzXuo, secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU"}};K.a.get("https://api.discogs.com/database/search?q=".concat(e.state.searchName,"&artist&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU")).then((function(t){var n=t.data.results[0].id;K.a.get("https://api.discogs.com/artists/".concat(n),a).then((function(a){e.setState({discogsInfo:a.data,images:a.data.images}),K.a.get("https://api.discogs.com/artists/".concat(n,"/releases?year&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU")).then((function(a){e.setState({releaseData:a.data.releases})}))}))}))},e.handleVideoSelect=function(a){e.setState({selectedVideo:a})},e.handleSubmit=function(a){a.preventDefault(),e.getVideo(),e.getArtist(),e.getEvent(),e.getArtistData(),e.getData(),e.setState({redirect:!0})},e.handleSubmitTwo=function(){e.setState({redirect:!1})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(W.a,null,r.a.createElement(S.a,{exitBeforeEnter:!0},r.a.createElement(te,null,r.a.createElement(ue,{handleSubmitTwo:this.handleSubmitTwo,name:this.state.artistInfo})),r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/josh-fusillo-capstone-meuws/",render:function(a){return r.a.createElement(D,Object.assign({},a,{value:e.state.searchName,onChange:e.handleSearchName,handleSubmit:e.handleSubmit,redirect:e.state.redirect}))}}),r.a.createElement(j.b,{path:"/MainTwo",render:function(a){return r.a.createElement(q,Object.assign({},a,{newsResults:e.state.newsResults,selectedVideo:e.state.selectedVideo,videos:e.state.videos,handleVideoSelect:e.handleVideoSelect,artistInfo:e.state.artistInfo,discogsInfo:e.state.discogsInfo,audioDB:e.state.audioDB,concertInfo:e.state.concertInfo,releaseData:e.state.releaseData,images:e.state.images,handleSubmitTwo:e.handleSubmitTwo,value:e.state.searchName,noData:e.state.noData}))}}),r.a.createElement(te,null,r.a.createElement(Ee,{exact:!0,path:"/dashboard",component:ve}),r.a.createElement(Ee,{path:"/update-profile",component:fe}),r.a.createElement(j.b,{path:"/signup",component:ne}),r.a.createElement(j.b,{path:"/login",component:de}),r.a.createElement(j.b,{path:"/forgot-password",component:be}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/Icon-facebook.1d4e904c.svg"},32:function(e,a,t){e.exports=t.p+"static/media/Icon-twitter.2a539e17.svg"},33:function(e,a,t){e.exports=t.p+"static/media/Icon-instagram.6866dae2.svg"},34:function(e,a,t){e.exports=t.p+"static/media/Music-news-you-can-use.d425ce08.svg"},39:function(e,a,t){e.exports=t.p+"static/media/Logo-transparent.bf5cdb0b.svg"},46:function(e,a,t){},48:function(e,a,t){},58:function(e,a,t){e.exports=t.p+"static/media/Logo-movie-wide-two.d3de24fb.mp4"},68:function(e,a,t){e.exports=t(107)},73:function(e,a,t){},75:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},84:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.182e0bef.chunk.js.map