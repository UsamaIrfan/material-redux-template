(this["webpackJsonpmaterial-login-template"]=this["webpackJsonpmaterial-login-template"]||[]).push([[0],{102:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),i=(n(102),n(49)),s=n(15),l=n(28),u=n(41),j=n(45);n(115),n(116),n(107);j.a.initializeApp({apiKey:"AIzaSyASg4nATdV-vU27siQFg8ygSj7IK9bejSk",authDomain:"databasepractise-f6f20.firebaseapp.com",databaseURL:"https://databasepractise-f6f20.firebaseio.com",projectId:"databasepractise-f6f20",storageBucket:"databasepractise-f6f20.appspot.com",messagingSenderId:"224795211416",appId:"1:224795211416:web:e4f7fdb174e331da85c2ed",measurementId:"G-VC95YXWSHL"});var d=j.a.auth(),b=(j.a.storage(),j.a.firestore(),n(158)),h=n(168),p=n(169),m=n(63),f=n(170),g=n(84),O=n.n(g),x=n(174),v=n(167),S=n(162),y=n(166),C=n(118),k=n(164),N=n(165),w=n(67),T=n.n(w),I=n(68),B=n.n(I),E=n(83),A=n.n(E),W=n(173),U=n(171),L=n(119),R=n(172),P=n(175),z=n(163),F=n(86),D="SET_USER",_=new j.a.auth.GoogleAuthProvider,G=n(5),K=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},modalTitle:{color:e.palette.primary,textAlign:"center"},modalButton:{marginTop:10,textTransform:"none",fontSize:16},googleButton:{marginTop:10,backgroundColor:"#EA4335",fontSize:16,color:"#fff",textTransform:"none","&:hover":{backgroundColor:"#ee6a5d",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#ee6a5d"}},userName:{marginRight:10}}}));function J(e){var t=K(),n=Object(u.b)(),r=Object(a.useState)(),c=Object(l.a)(r,2),s=c[0],b=c[1],g=Object(a.useState)(),w=Object(l.a)(g,2),I=w[0],E=w[1];Object(a.useEffect)((function(){var e=j.a.auth().onAuthStateChanged((function(e){n(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]);var J=Object(u.c)((function(e){return e.Auth.user})),V=o.a.useState(!1),H=Object(l.a)(V,2),M=H[0],Q=H[1],X=o.a.useState(!1),Y=Object(l.a)(X,2),q=Y[0],Z=Y[1],$=o.a.useState(!1),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=o.a.useState(!1),oe=Object(l.a)(ae,2),re=oe[0],ce=oe[1],ie=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&Q(e)}},se=function(){n(function(e,t){return function(n){e(!1),t(!0),j.a.auth().signInWithPopup(_).then((function(e){var a=e.user;n({type:D,user:a}),t(!1)})).catch((function(e){var n=e.message;console.log(n),t(!1)}))}}(Z,ne))},le=function(){n(function(e,t,n,a){return n(!1),a(!0),function(n){d.signInWithEmailAndPassword(e,t).then((function(e){console.log(e),n({type:"SET_USER",user:e}),a(!1)})).catch((function(e){a(!1),console.log(e.message)}))}}(s,I,Z,ne))},ue=function(){je(),n((function(e,t){var n=t().Auth.user;console.log("Sign out",n),n&&(j.a.auth().signOut(),e({type:D,user:null}))}))},je=function(){ce(!1)},de=Object(G.jsxs)(F.a,{id:"menu-appbar",anchorEl:re,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,variant:"menu",transformOrigin:{vertical:"top",horizontal:"right"},open:re,onClose:je,children:[Object(G.jsx)(z.a,{onClick:je,children:"Profile"}),Object(G.jsx)(z.a,{onClick:ue,children:"Sign Out"})]}),be=Object(G.jsxs)("div",{className:t.paper,children:[Object(G.jsx)(m.a,{color:"primary",className:t.modalTitle,variant:"h4",gutterBottom:!0,id:"transition-modal-title",children:"Login"}),Object(G.jsxs)("form",{className:t.root,onSubmit:function(e){e.preventDefault()},autoComplete:"off",children:[Object(G.jsx)(R.a,{value:s,onChange:function(e){return b(e.target.value)},label:"Email",fullWidth:!0,type:"email",helperText:"example@site.com"}),Object(G.jsx)(R.a,{value:I,onChange:function(e){return E(e.target.value)},label:"Password",fullWidth:!0,type:"password"}),Object(G.jsx)(v.a,{onClick:function(){return le()},className:t.modalButton,variant:"contained",fullWidth:!0,color:"primary",children:"Login"}),Object(G.jsx)(v.a,{onClick:function(){return se()},className:(t.modalButton,t.googleButton),variant:"contained",fullWidth:!0,children:"Login With Google"})]})]});return Object(G.jsxs)("div",{className:t.root,children:[Object(G.jsx)(h.a,{position:"static",children:Object(G.jsxs)(p.a,{children:[Object(G.jsx)(f.a,{onClick:ie(!0),edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(G.jsx)(O.a,{})}),Object(G.jsx)(m.a,{variant:"h6",className:t.title,children:"Computerize"}),!e.signupScreen&&Object(G.jsx)("div",{children:J?Object(G.jsxs)("div",{style:{display:"flex",height:"100%",alignItems:"center"},children:[Object(G.jsx)(m.a,{variant:"body1",className:t.userName,children:J.displayName}),Object(G.jsx)(f.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(){ce(!0)},color:"inherit",children:Object(G.jsx)(P.a,{alt:"Remy Sharp",src:null===J||void 0===J?void 0:J.photoURL,className:t.large})}),Object(G.jsx)("div",{children:de})]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(v.a,{disabled:te,onClick:function(){return Z(!0)},color:"inherit",children:"Login"}),Object(G.jsx)(v.a,{disabled:te,color:"inherit",children:Object(G.jsx)(i.b,{style:{color:"#fff",textDecoration:"none"},to:"/signup",children:"Sign Up"})})]})})]})}),Object(G.jsx)(x.a,{anchor:"left",open:M,onClose:ie(!1),onOpen:ie(!0),children:Object(G.jsxs)("div",{className:t.list,role:"presentation",onClick:ie(!1),onKeyDown:ie(!1),children:[Object(G.jsx)(S.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(G.jsxs)(C.a,{button:!0,children:[Object(G.jsx)(k.a,{children:t%2===0?Object(G.jsx)(T.a,{}):Object(G.jsx)(B.a,{})}),Object(G.jsx)(N.a,{primary:e})]},e)}))}),Object(G.jsx)(y.a,{}),Object(G.jsxs)(S.a,{children:[["All mail","Trash","Spam"].map((function(e,t){return Object(G.jsxs)(C.a,{button:!0,children:[Object(G.jsx)(k.a,{children:t%2===0?Object(G.jsx)(T.a,{}):Object(G.jsx)(B.a,{})}),Object(G.jsx)(N.a,{primary:e})]},e)})),Object(G.jsxs)(C.a,{button:!0,onClick:function(){return ue()},children:[Object(G.jsx)(k.a,{children:Object(G.jsx)(A.a,{})}),Object(G.jsx)(N.a,{primary:"Sign Out"})]})]})]})}),Object(G.jsx)(W.a,{open:q,onClose:function(){return Z(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500},children:Object(G.jsx)(L.a,{in:q,children:be})})]})}var V=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(J,{})}),Object(G.jsx)("div",{style:{display:"flex",height:"500px",alignItems:"center",justifyContent:"center",width:"100%"},children:Object(G.jsx)(m.a,{variant:"h4",color:"primary",children:"Computerize"})})]})},H=Object(b.a)((function(e){return{modalButton:{marginTop:10,textTransform:"none",fontSize:16},mainContainer:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",height:"70vh",padding:e.spacing(2,4,3),justifyContent:"center",alignItems:"center",borderRadius:5,borderColor:e.palette.primary.main,borderWidth:3,maxWidth:"750px",marginLeft:"auto",marginRight:"auto"},modalInput:{marginTop:10}}})),M=function(){var e=H(),t=Object(u.b)(),n=Object(s.f)(),o=Object(a.useState)(""),r=Object(l.a)(o,2),c=r[0],i=r[1],b=Object(a.useState)(""),h=Object(l.a)(b,2),p=h[0],f=h[1],g=Object(a.useState)(""),O=Object(l.a)(g,2),x=O[0],S=O[1],y=Object(a.useState)(""),C=Object(l.a)(y,2),k=C[0],N=C[1],w=Object(a.useState)(null),T=Object(l.a)(w,2),I=T[0],B=T[1];return Object(G.jsxs)("div",{children:[Object(G.jsx)(J,{signupScreen:!0}),Object(G.jsxs)("div",{className:e.mainContainer,children:[Object(G.jsx)(m.a,{variant:"h4",color:"primary",gutterBottom:!0,children:"Sign Up"}),Object(G.jsxs)("form",{className:e.root,onSubmit:function(){},autoComplete:"off",children:[Object(G.jsx)(R.a,{onChange:function(e){return i(e.target.value)},value:c,className:e.modalInput,label:"First Name",fullWidth:!0,type:"text"}),Object(G.jsx)(R.a,{onChange:function(e){return f(e.target.value)},value:p,className:e.modalInput,label:"Last Name",fullWidth:!0,type:"text"}),Object(G.jsx)(R.a,{onChange:function(e){return N(e.target.value)},value:k,className:e.modalInput,label:"Email",fullWidth:!0,type:"email",helperText:"example@site.com"}),Object(G.jsx)(R.a,{onChange:function(e){return S(e.target.value)},value:x,className:e.modalInput,label:"Password",fullWidth:!0,type:"password"}),Object(G.jsx)(v.a,{onClick:function(){t(function(e,t,n,a,o,r){return function(c){d.createUserWithEmailAndPassword(e,t).then((function(e){console.log(e);var t=j.a.auth().currentUser;t.updateProfile({displayName:"".concat(n," ").concat(a),photoURL:"https://statics.olx.com.pk/external/base/img/avatar_1.png"}).then((function(){c({type:D,user:t}),o.goBack()})).catch((function(e){console.log(e),r(e)})),console.log(t)})).catch((function(e){return r(e.message)}))}}(k,x,c,p,n,B))},disabled:""===c||""===p||""===k||""===x,className:e.modalButton,variant:"contained",fullWidth:!0,color:"primary",children:"Sign Up"}),I&&Object(G.jsx)(m.a,{variant:"body2",color:"error",gutterBottom:!0,children:I})]})]})]})};var Q=function(){return Object(G.jsx)(i.a,{children:Object(G.jsxs)(s.c,{children:[Object(G.jsx)(s.a,{path:"/signup",children:Object(G.jsx)(M,{})}),Object(G.jsx)(s.a,{path:"/",children:Object(G.jsx)(V,{})})]})})},X=n(71),Y={user:null},q=n(52),Z=Object(q.b)({Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return console.log(t),Object(X.a)(Object(X.a)({},e),{},{user:t.user});default:return e}}}),$=n(85),ee=Object(q.c)(Z,Object(q.a)($.a)),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(G.jsx)(u.a,{store:ee,children:Object(G.jsx)(Q,{})}),document.getElementById("root")),te()}},[[113,1,2]]]);
//# sourceMappingURL=main.ac6dd41e.chunk.js.map