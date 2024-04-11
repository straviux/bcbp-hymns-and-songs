import{d as C,b as w,c as I,w as s,e,a as t,L as M,I as d,M as Q,N as z,h as u,O as D,J as g,P as A,j as B,f as a,Q as x,R as F,r as S,E as H,T as J,U as K,x as W,D as X,q as E,C as Y,S as G,V as tt,W as et,X as st,Y as at,Z as q,$ as nt,a0 as ot}from"./index-yNxyZlih.js";import{_ as lt}from"./bcbplogo-DPdg0dlV.js";const it="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20308.19%20305.67'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:%2302208b;}.cls-2{fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3ebcbp-seeklogo%3c/title%3e%3cg%20id='center_line_with_3_circles'%20data-name='center%20line%20with%203%20circles'%3e%3ccircle%20class='cls-1'%20cx='101.06'%20cy='84'%20r='23.17'/%3e%3ccircle%20class='cls-1'%20cx='207.06'%20cy='84'%20r='23.17'/%3e%3ccircle%20class='cls-1'%20cx='154.06'%20cy='26.5'%20r='26.5'/%3e%3crect%20class='cls-1'%20x='127.56'%20y='60.83'%20width='53'%20height='244.83'/%3e%3c/g%3e%3cg%20id='inner_component_cutouts'%20data-name='inner%20component%20cutouts'%3e%3cpath%20class='cls-1'%20d='M332.7,164.58a33.08,33.08,0,0,1,0,46.34h77.43a159.88,159.88,0,0,0-22.19-46.34Z'%20transform='translate(-101.94%20-103.75)'/%3e%3cpath%20class='cls-1'%20d='M169.58,187.5a33.07,33.07,0,0,1,9.47-23.17H124.23a160.26,160.26,0,0,0-22.29,46.34h77.11A33.07,33.07,0,0,1,169.58,187.5Z'%20transform='translate(-101.94%20-103.75)'/%3e%3cpolygon%20class='cls-2'%20points='117.81%20114.33%2075.93%20114.33%2050.43%20158.83%2092.31%20158.83%20117.81%20114.33'/%3e%3cpolygon%20class='cls-2'%20points='117.81%20203.33%2075.93%20203.33%2050.43%20158.83%2092.31%20158.83%20117.81%20203.33'/%3e%3cpolygon%20class='cls-2'%20points='189.35%20114.33%20231.22%20114.33%20256.72%20158.83%20214.85%20158.83%20189.35%20114.33'/%3e%3cpolygon%20class='cls-2'%20points='189.35%20203.33%20231.22%20203.33%20256.72%20158.83%20214.85%20158.83%20189.35%20203.33'/%3e%3c/g%3e%3c/svg%3e",ct=a("div",{class:"ion-padding"},[a("div",{class:"settings-content"},"Coming soon..")],-1),rt=C({__name:"SettingsModal",setup(p){const n=()=>x.dismiss(null,"cancel");return(l,r)=>(w(),I(t(B),{class:"settings-modal"},{default:s(()=>[e(t(M),null,{default:s(()=>[e(t(d),{icon:t(Q),style:{"margin-left":"10px","margin-right":"-10px","font-size":"22px"},slot:"start"},null,8,["icon"]),e(t(z),null,{default:s(()=>[u("Settings")]),_:1}),e(t(D),{slot:"end"},{default:s(()=>[e(t(g),{color:"light",onClick:n},{default:s(()=>[e(t(d),{icon:t(A)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),ct]),_:1}))}}),dt=a("div",{class:"ion-padding"},[a("div",{class:"update-library-content"},[a("div",{class:"indicator"},[a("div",null,"Updating library...")])])],-1),ut=C({__name:"UpdateLibraryModal",setup(p){return(n,l)=>(w(),I(t(B),null,{default:s(()=>[dt,e(t(F),{type:"indeterminate",color:"success"})]),_:1}))}}),pt=a("div",{class:"ion-padding",style:{color:"#555",display:"flex","flex-direction":"column",gap:"8px"}},[a("img",{src:lt,alt:"bcbp logo",height:"160",width:"160",style:{margin:"auto"}}),a("div",{style:{margin:"auto"}},[a("h4",null,"BCBP Hyms & Songs"),a("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[a("span",null,"Version 1.1")]),a("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[u(" Last library update: "),a("span",null,"04/08/2024")])])],-1),ft=C({__name:"AboutModal",setup(p){const n=()=>x.dismiss(null,"cancel");return(l,r)=>(w(),I(t(B),{class:"about-modal"},{default:s(()=>[e(t(M),null,{default:s(()=>[e(t(z),null,{default:s(()=>[u("About")]),_:1}),e(t(D),{slot:"end"},{default:s(()=>[e(t(g),{color:"light",onClick:n},{default:s(()=>[e(t(d),{icon:t(A)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),pt]),_:1}))}}),_t=C({__name:"MenuList",setup(p){const n=S(X),l=S(E),r=async c=>{const o={component:ft,cssClass:"about-modal"},f={component:ut,cssClass:"update-library-modal"},_={component:rt,cssClass:"settings-modal"},i=await x.create(o),y=await x.create(f),N=await x.create(_);if(c=="settings"&&N.present(),c=="update"){y.present().then(async()=>{var v,h;l.value=new E(Y);const b=await l.value.checkConnectionsConsistency(),k=(await l.value.isConnection("db_songlist",!1)).result;b.result&&k?n.value=await((v=l.value)==null?void 0:v.retrieveConnection("db_songlist",!1)):n.value=await((h=l.value)==null?void 0:h.createConnection("db_songlist",!1,"no-encryption",1,!1)),R()});const R=async()=>{var T;const b=new G;await b.create();const k=await b.get("last-library-update");let v="Library is already up to date";await((T=n.value)==null?void 0:T.open()),await tt.get("/api/songs").then(L=>{var P;const Z=L.data.data,O=L.data.last_update;if(k!=O){let $=null;(P=n.value)==null||P.query("DELETE FROM songs"),Z.forEach(m=>{var U,V;try{$=O,(U=n.value)==null||U.query("INSERT INTO songs (id,title,lyrics,chords,artist,category) values (?,?,?,?,?,?)",[m.id,m.title,m.lyrics,m.chords,m.artist,m.category]),(V=n.value)==null||V.close(),v="Library has been updated"}catch(j){$=null,alert(j)}}),b.set("last-library-update",$)}}),y.dismiss();const h=await et.create({message:v,duration:3e3,cssClass:"custom-toast",position:"bottom"});h.present(),h.onDidDismiss().then(L=>{L.role&&window.location.reload()})}}c=="about"&&i.present()};return(c,o)=>(w(),I(t(B),null,{default:s(()=>[e(t(W),{lines:"full"},{default:s(()=>[e(t(H),{button:"",onClick:o[0]||(o[0]=f=>r("settings"))},{default:s(()=>[e(t(g),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:s(()=>[e(t(d),{slot:"start",icon:t(Q)},null,8,["icon"]),u(" Settings ")]),_:1})]),_:1}),e(t(H),{button:"",onClick:o[1]||(o[1]=f=>r("update"))},{default:s(()=>[e(t(g),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:s(()=>[e(t(d),{slot:"start",icon:t(J)},null,8,["icon"]),u(" Update Library ")]),_:1})]),_:1}),e(t(H),{lines:"none",button:"",onClick:o[2]||(o[2]=f=>r("about"))},{default:s(()=>[e(t(g),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:s(()=>[e(t(d),{slot:"start",icon:t(K)},null,8,["icon"]),u(" About ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),mt=a("img",{src:it,height:"40",slot:"start",style:{"margin-left":"14px","margin-right":"-10px"}},null,-1),bt=C({__name:"HeaderToolBar",props:{isHeaderHidden:{type:Boolean,default:!1}},emits:["emitSearch"],setup(p,{emit:n}){const l=n,r=()=>{var i;const _=(i=document.querySelector("#searchbar"))==null?void 0:i.value;l("emitSearch",{searchQuery:_})},c=S(!1),o=S(),f=_=>{o.value=_,c.value=!0};return(_,i)=>(w(),I(t(ot),{class:"ion-no-border"},{default:s(()=>[e(t(M),{class:q(["header-transition",{"ion-header-hidden":p.isHeaderHidden}])},{default:s(()=>[mt,e(t(z),null,{default:s(()=>[u("BCBP Hymns & Songs")]),_:1}),e(t(D),{slot:"primary"},{default:s(()=>[e(t(g),{onClick:i[0]||(i[0]=y=>f(y))},{default:s(()=>[e(t(d),{slot:"icon-only",icon:t(st)},null,8,["icon"])]),_:1}),e(t(at),{"is-open":c.value,event:o.value,onDidDismiss:i[1]||(i[1]=y=>c.value=!1)},{default:s(()=>[e(_t)]),_:1},8,["is-open","event"])]),_:1})]),_:1},8,["class"]),e(t(M),{class:q(["header-transition",{"search-bar-persist":p.isHeaderHidden}])},{default:s(()=>[e(t(nt),{"show-clear-button":"focus",class:"searchbar",id:"searchbar",onKeyup:r})]),_:1},8,["class"])]),_:1}))}});export{bt as _};
