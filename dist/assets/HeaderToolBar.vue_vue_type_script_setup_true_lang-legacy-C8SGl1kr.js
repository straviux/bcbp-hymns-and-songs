System.register(["./index-legacy-Nka0N6d8.js","./bcbplogo-legacy-DNPlaw3-.js"],(function(t,e){"use strict";var a,l,s,n,o,i,c,r,d,u,p,g,m,f,y,h,v,b,x,_,w,C,k,S,z,H,L,M,B,E,D,T,j,q,A;return{setters:[t=>{a=t.d,l=t.b,s=t.c,n=t.w,o=t.e,i=t.a,c=t.L,r=t.I,d=t.M,u=t.N,p=t.h,g=t.O,m=t.J,f=t.P,y=t.j,h=t.f,v=t.Q,b=t.R,x=t.r,_=t.E,w=t.T,C=t.U,k=t.x,S=t.D,z=t.q,H=t.C,L=t.S,M=t.V,B=t.W,E=t.X,D=t.Y,T=t.Z,j=t.$,q=t.a0},t=>{A=t._}],execute:function(){var e=document.createElement("style");e.textContent="ion-modal.settings-modal::part(content){--height: 80%;--border-radius: 12px;--width: 320px}.settings-content{width:100%;color:#777}.settings-content ion-list{width:100%}ion-modal.update-library-modal::part(content){--height: 55px;--border-radius: 3px;--width: 300px}.update-library-content{display:flex;align-items:center;justify-content:center;color:#777}ion-modal.about-modal::part(content){--height: 420px;--border-radius: 12px;--width: 320px}.about-content{width:100%;color:#777}ion-toast.custom-toast{--background: #6a679e;--width: 300px;--box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, .6s);--color: #f1f1f1;font-size:14px}\n",document.head.appendChild(e);const U=h("div",{class:"ion-padding"},[h("div",{class:"settings-content"},"Coming soon..")],-1),I=a({__name:"SettingsModal",setup(t){const e=()=>v.dismiss(null,"cancel");return(t,a)=>(l(),s(i(y),{class:"settings-modal"},{default:n((()=>[o(i(c),null,{default:n((()=>[o(i(r),{icon:i(d),style:{"margin-left":"10px","margin-right":"-10px","font-size":"22px"},slot:"start"},null,8,["icon"]),o(i(u),null,{default:n((()=>[p("Settings")])),_:1}),o(i(g),{slot:"end"},{default:n((()=>[o(i(m),{color:"light",onClick:e},{default:n((()=>[o(i(r),{icon:i(f)},null,8,["icon"])])),_:1})])),_:1})])),_:1}),U])),_:1}))}}),N=h("div",{class:"ion-padding"},[h("div",{class:"update-library-content"},[h("div",{class:"indicator"},[h("div",null,"Updating library...")])])],-1),O=a({__name:"UpdateLibraryModal",setup:t=>(t,e)=>(l(),s(i(y),null,{default:n((()=>[N,o(i(b),{type:"indeterminate",color:"success"})])),_:1}))}),P=h("div",{class:"ion-padding",style:{color:"#555",display:"flex","flex-direction":"column",gap:"8px"}},[h("img",{src:A,alt:"bcbp logo",height:"160",width:"160",style:{margin:"auto"}}),h("div",{style:{margin:"auto"}},[h("h4",null,"BCBP Hyms & Songs"),h("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[h("span",null,"Version 1.1")]),h("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[p(" Last library update: "),h("span",null,"04/08/2024")])])],-1),R=a({__name:"AboutModal",setup(t){const e=()=>v.dismiss(null,"cancel");return(t,a)=>(l(),s(i(y),{class:"about-modal"},{default:n((()=>[o(i(c),null,{default:n((()=>[o(i(u),null,{default:n((()=>[p("About")])),_:1}),o(i(g),{slot:"end"},{default:n((()=>[o(i(m),{color:"light",onClick:e},{default:n((()=>[o(i(r),{icon:i(f)},null,8,["icon"])])),_:1})])),_:1})])),_:1}),P])),_:1}))}}),Z=a({__name:"MenuList",setup(t){const e=x(S),a=x(z),c=async t=>{const l={component:R,cssClass:"about-modal"},s={component:O,cssClass:"update-library-modal"},n={component:I,cssClass:"settings-modal"},o=await v.create(l),i=await v.create(s),c=await v.create(n);if("settings"==t&&c.present(),"update"==t){i.present().then((async()=>{a.value=new z(H);const l=await a.value.checkConnectionsConsistency(),s=(await a.value.isConnection("db_songlist",!1)).result;var n,o;l.result&&s?e.value=await(null===(n=a.value)||void 0===n?void 0:n.retrieveConnection("db_songlist",!1)):e.value=await(null===(o=a.value)||void 0===o?void 0:o.createConnection("db_songlist",!1,"no-encryption",1,!1)),t()}));const t=async()=>{var t;const a=new L;await a.create();const l=await a.get("last-library-update");let s="Library is already up to date";await(null===(t=e.value)||void 0===t?void 0:t.open()),await M.get("/api/songs").then((t=>{const n=t.data.data,o=t.data.last_update;if(l!=o){var i;let t=null;null===(i=e.value)||void 0===i||i.query("DELETE FROM songs"),n.forEach((a=>{try{var l,n;t=o,null===(l=e.value)||void 0===l||l.query("INSERT INTO songs (id,title,lyrics,chords,artist,category) values (?,?,?,?,?,?)",[a.id,a.title,a.lyrics,a.chords,a.artist,a.category]),null===(n=e.value)||void 0===n||n.close(),s="Library has been updated"}catch(i){t=null,alert(i)}})),a.set("last-library-update",t)}})),i.dismiss();const n=await B.create({message:s,duration:3e3,cssClass:"custom-toast",position:"bottom"});n.present(),n.onDidDismiss().then((t=>{t.role&&window.location.reload()}))}}"about"==t&&o.present()};return(t,e)=>(l(),s(i(y),null,{default:n((()=>[o(i(k),{lines:"full"},{default:n((()=>[o(i(_),{button:"",onClick:e[0]||(e[0]=t=>c("settings"))},{default:n((()=>[o(i(m),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:n((()=>[o(i(r),{slot:"start",icon:i(d)},null,8,["icon"]),p(" Settings ")])),_:1})])),_:1}),o(i(_),{button:"",onClick:e[1]||(e[1]=t=>c("update"))},{default:n((()=>[o(i(m),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:n((()=>[o(i(r),{slot:"start",icon:i(w)},null,8,["icon"]),p(" Update Library ")])),_:1})])),_:1}),o(i(_),{lines:"none",button:"",onClick:e[2]||(e[2]=t=>c("about"))},{default:n((()=>[o(i(m),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:n((()=>[o(i(r),{slot:"start",icon:i(C)},null,8,["icon"]),p(" About ")])),_:1})])),_:1})])),_:1})])),_:1}))}}),Q=h("img",{src:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20308.19%20305.67'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:%2302208b;}.cls-2{fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3ebcbp-seeklogo%3c/title%3e%3cg%20id='center_line_with_3_circles'%20data-name='center%20line%20with%203%20circles'%3e%3ccircle%20class='cls-1'%20cx='101.06'%20cy='84'%20r='23.17'/%3e%3ccircle%20class='cls-1'%20cx='207.06'%20cy='84'%20r='23.17'/%3e%3ccircle%20class='cls-1'%20cx='154.06'%20cy='26.5'%20r='26.5'/%3e%3crect%20class='cls-1'%20x='127.56'%20y='60.83'%20width='53'%20height='244.83'/%3e%3c/g%3e%3cg%20id='inner_component_cutouts'%20data-name='inner%20component%20cutouts'%3e%3cpath%20class='cls-1'%20d='M332.7,164.58a33.08,33.08,0,0,1,0,46.34h77.43a159.88,159.88,0,0,0-22.19-46.34Z'%20transform='translate(-101.94%20-103.75)'/%3e%3cpath%20class='cls-1'%20d='M169.58,187.5a33.07,33.07,0,0,1,9.47-23.17H124.23a160.26,160.26,0,0,0-22.29,46.34h77.11A33.07,33.07,0,0,1,169.58,187.5Z'%20transform='translate(-101.94%20-103.75)'/%3e%3cpolygon%20class='cls-2'%20points='117.81%20114.33%2075.93%20114.33%2050.43%20158.83%2092.31%20158.83%20117.81%20114.33'/%3e%3cpolygon%20class='cls-2'%20points='117.81%20203.33%2075.93%20203.33%2050.43%20158.83%2092.31%20158.83%20117.81%20203.33'/%3e%3cpolygon%20class='cls-2'%20points='189.35%20114.33%20231.22%20114.33%20256.72%20158.83%20214.85%20158.83%20189.35%20114.33'/%3e%3cpolygon%20class='cls-2'%20points='189.35%20203.33%20231.22%20203.33%20256.72%20158.83%20214.85%20158.83%20189.35%20203.33'/%3e%3c/g%3e%3c/svg%3e",height:"40",slot:"start",style:{"margin-left":"14px","margin-right":"-10px"}},null,-1);t("_",a({__name:"HeaderToolBar",props:{isHeaderHidden:{type:Boolean,default:!1}},emits:["emitSearch"],setup(t,{emit:e}){const a=e,d=()=>{var t;const e=null===(t=document.querySelector("#searchbar"))||void 0===t?void 0:t.value;a("emitSearch",{searchQuery:e})},f=x(!1),y=x();return(e,a)=>(l(),s(i(q),{class:"ion-no-border"},{default:n((()=>[o(i(c),{class:T(["header-transition",{"ion-header-hidden":t.isHeaderHidden}])},{default:n((()=>[Q,o(i(u),null,{default:n((()=>[p("BCBP Hymns & Songs")])),_:1}),o(i(g),{slot:"primary"},{default:n((()=>[o(i(m),{onClick:a[0]||(a[0]=t=>{return e=t,y.value=e,void(f.value=!0);var e})},{default:n((()=>[o(i(r),{slot:"icon-only",icon:i(E)},null,8,["icon"])])),_:1}),o(i(D),{"is-open":f.value,event:y.value,onDidDismiss:a[1]||(a[1]=t=>f.value=!1)},{default:n((()=>[o(Z)])),_:1},8,["is-open","event"])])),_:1})])),_:1},8,["class"]),o(i(c),{class:T(["header-transition",{"search-bar-persist":t.isHeaderHidden}])},{default:n((()=>[o(i(j),{"show-clear-button":"focus",class:"searchbar",id:"searchbar",onKeyup:d})])),_:1},8,["class"])])),_:1}))}}))}}}));
