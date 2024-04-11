import{d as h,b as x,c as C,w as s,e,a as t,L as M,I as d,M as Q,N as $,h as u,O as H,J as v,P as A,j as L,f as a,Q as b,R,r as S,E as k,T as Z,U as j,x as F,D as J,q,C as K,V as W,W as X,X as Y,Y as G,Z as E,$ as tt,a0 as et}from"./index-Bl1MqpDU.js";import{_ as st}from"./bcbplogo-DPdg0dlV.js";const at="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20308.19%20305.67'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:%2302208b;}.cls-2{fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3ebcbp-seeklogo%3c/title%3e%3cg%20id='center_line_with_3_circles'%20data-name='center%20line%20with%203%20circles'%3e%3ccircle%20class='cls-1'%20cx='101.06'%20cy='84'%20r='23.17'/%3e%3ccircle%20class='cls-1'%20cx='207.06'%20cy='84'%20r='23.17'/%3e%3ccircle%20class='cls-1'%20cx='154.06'%20cy='26.5'%20r='26.5'/%3e%3crect%20class='cls-1'%20x='127.56'%20y='60.83'%20width='53'%20height='244.83'/%3e%3c/g%3e%3cg%20id='inner_component_cutouts'%20data-name='inner%20component%20cutouts'%3e%3cpath%20class='cls-1'%20d='M332.7,164.58a33.08,33.08,0,0,1,0,46.34h77.43a159.88,159.88,0,0,0-22.19-46.34Z'%20transform='translate(-101.94%20-103.75)'/%3e%3cpath%20class='cls-1'%20d='M169.58,187.5a33.07,33.07,0,0,1,9.47-23.17H124.23a160.26,160.26,0,0,0-22.29,46.34h77.11A33.07,33.07,0,0,1,169.58,187.5Z'%20transform='translate(-101.94%20-103.75)'/%3e%3cpolygon%20class='cls-2'%20points='117.81%20114.33%2075.93%20114.33%2050.43%20158.83%2092.31%20158.83%20117.81%20114.33'/%3e%3cpolygon%20class='cls-2'%20points='117.81%20203.33%2075.93%20203.33%2050.43%20158.83%2092.31%20158.83%20117.81%20203.33'/%3e%3cpolygon%20class='cls-2'%20points='189.35%20114.33%20231.22%20114.33%20256.72%20158.83%20214.85%20158.83%20189.35%20114.33'/%3e%3cpolygon%20class='cls-2'%20points='189.35%20203.33%20231.22%20203.33%20256.72%20158.83%20214.85%20158.83%20189.35%20203.33'/%3e%3c/g%3e%3c/svg%3e",nt=a("div",{class:"ion-padding"},[a("div",{class:"settings-content"},"Coming soon..")],-1),ot=h({__name:"SettingsModal",setup(p){const n=()=>b.dismiss(null,"cancel");return(o,r)=>(x(),C(t(L),{class:"settings-modal"},{default:s(()=>[e(t(M),null,{default:s(()=>[e(t(d),{icon:t(Q),style:{"margin-left":"10px","margin-right":"-10px","font-size":"22px"},slot:"start"},null,8,["icon"]),e(t($),null,{default:s(()=>[u("Settings")]),_:1}),e(t(H),{slot:"end"},{default:s(()=>[e(t(v),{color:"light",onClick:n},{default:s(()=>[e(t(d),{icon:t(A)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),nt]),_:1}))}}),lt=a("div",{class:"ion-padding"},[a("div",{class:"update-library-content"},[a("div",{class:"indicator"},[a("div",null,"Updating library...")])])],-1),it=h({__name:"UpdateLibraryModal",setup(p){return(n,o)=>(x(),C(t(L),null,{default:s(()=>[lt,e(t(R),{type:"indeterminate",color:"success"})]),_:1}))}}),ct=a("div",{class:"ion-padding",style:{color:"#555",display:"flex","flex-direction":"column",gap:"8px"}},[a("img",{src:st,alt:"bcbp logo",height:"160",width:"160",style:{margin:"auto"}}),a("div",{style:{margin:"auto"}},[a("h4",null,"BCBP Hyms & Songs"),a("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[a("span",null,"Version 1.1")]),a("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[u(" Last library update: "),a("span",null,"04/08/2024")])])],-1),rt=h({__name:"AboutModal",setup(p){const n=()=>b.dismiss(null,"cancel");return(o,r)=>(x(),C(t(L),{class:"about-modal"},{default:s(()=>[e(t(M),null,{default:s(()=>[e(t($),null,{default:s(()=>[u("About")]),_:1}),e(t(H),{slot:"end"},{default:s(()=>[e(t(v),{color:"light",onClick:n},{default:s(()=>[e(t(d),{icon:t(A)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),ct]),_:1}))}}),dt=h({__name:"MenuList",setup(p){const n=S(J),o=S(q),r=async c=>{const l={component:rt,cssClass:"about-modal"},f={component:it,cssClass:"update-library-modal"},_={component:ot,cssClass:"settings-modal"},i=await b.create(l),m=await b.create(f),N=await b.create(_);if(c=="settings"&&N.present(),c=="update"){m.present().then(async()=>{var I,g;o.value=new q(K);const B=await o.value.checkConnectionsConsistency(),w=(await o.value.isConnection("db_songlist",!1)).result;B.result&&w?n.value=await((I=o.value)==null?void 0:I.retrieveConnection("db_songlist",!1)):n.value=await((g=o.value)==null?void 0:g.createConnection("db_songlist",!1,"no-encryption",1,!1)),U()});const U=async()=>{var z,T,D,O;await((z=n.value)==null?void 0:z.open());const B=await((T=n.value)==null?void 0:T.query("SELECT * FROM songs"));await((D=n.value)==null?void 0:D.close()),await((O=o.value)==null?void 0:O.closeConnection("db_songlist",!1));const w=await W.get("/api/songs"),I=w.data.data.length;let g="Library is already up to date";I!==B.values.length&&w.data.data.forEach(async y=>{var P,V;try{await((P=n.value)==null?void 0:P.open()),await((V=n.value)==null?void 0:V.query("INSERT INTO songs (id,title,lyrics,chords,artist,category) values (?,?,?,?,?,?)",[y.id,y.title,y.lyrics,y.chords,y.artist,y.category])),g="Library has been updated"}catch(ft){g="Somethin went wrong, please try again"}}),m.dismiss(),await(await X.create({message:g,duration:1600,cssClass:"custom-toast",position:"bottom"})).present()}}c=="about"&&i.present()};return(c,l)=>(x(),C(t(L),null,{default:s(()=>[e(t(F),{lines:"full"},{default:s(()=>[e(t(k),{button:"",onClick:l[0]||(l[0]=f=>r("settings"))},{default:s(()=>[e(t(v),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:s(()=>[e(t(d),{slot:"start",icon:t(Q)},null,8,["icon"]),u(" Settings ")]),_:1})]),_:1}),e(t(k),{button:"",onClick:l[1]||(l[1]=f=>r("update"))},{default:s(()=>[e(t(v),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:s(()=>[e(t(d),{slot:"start",icon:t(Z)},null,8,["icon"]),u(" Update Library ")]),_:1})]),_:1}),e(t(k),{lines:"none",button:"",onClick:l[2]||(l[2]=f=>r("about"))},{default:s(()=>[e(t(v),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:s(()=>[e(t(d),{slot:"start",icon:t(j)},null,8,["icon"]),u(" About ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),ut=a("img",{src:at,height:"40",slot:"start",style:{"margin-left":"14px","margin-right":"-10px"}},null,-1),gt=h({__name:"HeaderToolBar",props:{isHeaderHidden:{type:Boolean,default:!1}},emits:["emitSearch"],setup(p,{emit:n}){const o=n,r=()=>{var i;const _=(i=document.querySelector("#searchbar"))==null?void 0:i.value;o("emitSearch",{searchQuery:_})},c=S(!1),l=S(),f=_=>{l.value=_,c.value=!0};return(_,i)=>(x(),C(t(et),{class:"ion-no-border"},{default:s(()=>[e(t(M),{class:E(["header-transition",{"ion-header-hidden":p.isHeaderHidden}])},{default:s(()=>[ut,e(t($),null,{default:s(()=>[u("BCBP Hymns & Songs")]),_:1}),e(t(H),{slot:"primary"},{default:s(()=>[e(t(v),{onClick:i[0]||(i[0]=m=>f(m))},{default:s(()=>[e(t(d),{slot:"icon-only",icon:t(Y)},null,8,["icon"])]),_:1}),e(t(G),{"is-open":c.value,event:l.value,onDidDismiss:i[1]||(i[1]=m=>c.value=!1)},{default:s(()=>[e(dt)]),_:1},8,["is-open","event"])]),_:1})]),_:1},8,["class"]),e(t(M),{class:E(["header-transition",{"search-bar-persist":p.isHeaderHidden}])},{default:s(()=>[e(t(tt),{"show-clear-button":"focus",class:"searchbar",id:"searchbar",onKeyup:r})]),_:1},8,["class"])]),_:1}))}});export{gt as _};