import{_ as H}from"./HeaderToolBar.vue_vue_type_script_setup_true_lang-BlGo9qvC.js";import{d as x,r as u,n as B,q as m,C as E,s as Q,t as V,c as y,w as o,a as n,b as l,e as r,x as D,y as N,z as L,h as F,f,A as p,B as d,D as q,F as z,I as O,E as T,G as g,j as A,l as P,H as R,J as W}from"./index-BV0GmIU9.js";import"./bcbplogo-DPdg0dlV.js";const j={style:{"font-size":"12px",color:"#a8a8a8"}},G={key:0,class:"song-artist"},J={key:1,class:"no-result"},M={key:0,class:"no-result-content"},$=f("h1",null,"No Result Found",-1),K=f("span",null,"We couldn't find any title, lyrics or artist matching your search",-1),ee=x({__name:"ChordListPage",setup(U){const _=u(!1),I=e=>{e.detail.scrollTop>30?_.value=!0:_.value=!1},c=u(R),i=u(m);B(async()=>{var t,a;i.value=new m(E);const e=await i.value.checkConnectionsConsistency(),s=(await i.value.isConnection("db_songlist",!1)).result;e.result&&s?c.value=await((t=i.value)==null?void 0:t.retrieveConnection("db_songlist",!1)):c.value=await((a=i.value)==null?void 0:a.createConnection("db_songlist",!1,"no-encryption",1,!1)),k()}),Q(async()=>{var e;await((e=i.value)==null?void 0:e.closeConnection("db_songlist",!1))});const k=async()=>{var s,t,a;await((s=c.value)==null?void 0:s.open());const e=await((t=c.value)==null?void 0:t.query("SELECT * FROM songs"));await((a=c.value)==null?void 0:a.close()),w.value=e==null?void 0:e.values.filter(C=>C.chords)},w=u(),v=u(""),S=e=>{v.value=e.searchQuery},b=e=>{var s;return(s=w.value)==null?void 0:s.filter(t=>{var a;return t.category.toLowerCase().includes(e)||t.title.toLowerCase().includes(e)||t.lyrics.toLowerCase().includes(e)||((a=t.artist)==null?void 0:a.toLowerCase().includes(e))}).sort((t,a)=>t.title.localeCompare(a.title))},h=V(()=>b(v.value.toLocaleLowerCase()));return(e,s)=>(l(),y(n(P),null,{default:o(()=>[r(H,{onEmitSearch:S,isHeaderHidden:_.value},null,8,["isHeaderHidden"]),r(n(A),{fullscreen:!0,onIonScroll:s[0]||(s[0]=t=>I(t)),"scroll-events":!0},{default:o(()=>{var t;return[((t=h.value)==null?void 0:t.length)>0?(l(),y(n(D),{key:0},{default:o(()=>[r(n(N),null,{default:o(()=>[r(n(L),{class:"list-header"},{default:o(()=>[F("Chords "),f("span",j,"["+p(h.value.length)+"]",1)]),_:1})]),_:1}),(l(!0),d(z,null,q(h.value,(a,C)=>(l(),y(n(W),{key:"song_"+C,href:"/song/"+a.id+"/chords"},{default:o(()=>[r(n(L),{class:"fade-in-left-animation song-label"},{default:o(()=>[f("p",null,p(a.title),1),a.artist?(l(),d("span",G,p(a.artist),1)):g("",!0)]),_:2},1024)]),_:2},1032,["href"]))),128))]),_:1})):(l(),d("div",J,[v.value?(l(),d("div",M,[r(n(O),{icon:n(T),size:"large"},null,8,["icon"]),$,K])):g("",!0)]))]}),_:1})]),_:1}))}});export{ee as default};
