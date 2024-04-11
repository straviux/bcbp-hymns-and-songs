import{_ as N}from"./HeaderToolBar.vue_vue_type_script_setup_true_lang-C6IMImYM.js";import{d as F,r as d,t as j,n as q,q as b,C as z,s as O,c as y,w as r,a as n,b as a,e as f,y as c,F as H,z as S,I as T,A,B as C,j as P,l as R,f as L,D as W,x as G,K as J,G as B,h as E,H as I,E as K,J as M}from"./index-CRfOI_3F.js";import"./bcbplogo-DPdg0dlV.js";const $={key:0},U={key:0,class:"song-artist"},X={key:1,class:"no-result"},Y={key:0,class:"no-result-content"},Z=L("h1",null,"No Result Found",-1),ee=L("span",null,"We couldn't find any title, lyrics or artist matching your search",-1),le=F({__name:"CategoryListPage",setup(te){const p=d(!1),x=e=>{e.detail.scrollTop>30?p.value=!0:p.value=!1},h=d(),w=d(),m=d(""),Q=e=>{m.value=e.searchQuery},V=(e,o)=>e==null?void 0:e.map(s=>({...s,songs:s.songs.filter(t=>{var l;return t.title.toLowerCase().includes(o)||t.lyrics.toLowerCase().includes(o)||((l=t.artist)==null?void 0:l.toLowerCase().includes(o))}).sort((t,l)=>t.title.localeCompare(l.title))})),k=j(()=>V(w.value,m.value.toLowerCase())),_=d(W),u=d(b);q(async()=>{var s,t;u.value=new b(z);const e=await u.value.checkConnectionsConsistency(),o=(await u.value.isConnection("db_songlist",!1)).result;e.result&&o?_.value=await((s=u.value)==null?void 0:s.retrieveConnection("db_songlist",!1)):_.value=await((t=u.value)==null?void 0:t.createConnection("db_songlist",!1,"no-encryption",1,!1)),D()}),O(async()=>{var e;await((e=u.value)==null?void 0:e.closeConnection("db_songlist",!1))});const D=async()=>{var t,l,i;await((t=_.value)==null?void 0:t.open());const e=await((l=_.value)==null?void 0:l.query("SELECT * FROM songs"));await((i=_.value)==null?void 0:i.close()),h.value=e==null?void 0:e.values;const s=await(await fetch("/category.json")).json();w.value=s.categories,w.value.forEach(v=>{v.songs=[];for(let g=0;g<h.value.length;g++)h.value[g].category==v.category&&v.songs.push(h.value[g])})};return(e,o)=>(a(),y(n(R),null,{default:r(()=>[f(N,{onEmitSearch:Q,isHeaderHidden:p.value},null,8,["isHeaderHidden"]),f(n(P),{fullscreen:!0,onIonScroll:o[0]||(o[0]=s=>x(s)),"scroll-events":!0},{default:r(()=>{var s;return[((s=k.value)==null?void 0:s.length)>0?(a(),c("div",$,[(a(!0),c(H,null,S(k.value,(t,l)=>(a(),c("div",{key:"category_"+l},[t.songs.length>0?(a(),y(n(G),{key:0,lines:"inset"},{default:r(()=>[f(n(J),null,{default:r(()=>[f(n(B),{class:"list-header"},{default:r(()=>[E(I(t.name),1)]),_:2},1024)]),_:2},1024),(a(!0),c(H,null,S(t.songs,(i,v)=>(a(),y(n(K),{key:"song_"+v,href:"/song/"+i.id+"/lyrics"},{default:r(()=>[f(n(B),{class:"fade-in-left-animation song-label"},{default:r(()=>[L("p",null,I(i.title),1),i.artist?(a(),c("span",U,I(i.artist),1)):C("",!0)]),_:2},1024),i.chords?(a(),y(n(M),{key:0,slot:"end",size:"small",fill:"outline",color:"warning",href:"/song/"+i.id+"/chords"},{default:r(()=>[E("chords ")]),_:2},1032,["href"])):C("",!0)]),_:2},1032,["href"]))),128))]),_:2},1024)):C("",!0)]))),128))])):(a(),c("div",X,[m.value?(a(),c("div",Y,[f(n(T),{icon:n(A),size:"large"},null,8,["icon"]),Z,ee])):C("",!0)]))]}),_:1})]),_:1}))}});export{le as default};