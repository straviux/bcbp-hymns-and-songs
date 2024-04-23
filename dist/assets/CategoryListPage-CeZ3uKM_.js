import{_ as z}from"./HeaderToolBar.vue_vue_type_script_setup_true_lang-DwM70x0L.js";import{d as A,r as d,t as F,n as j,q as b,C as q,s as O,c as p,w as r,a,b as l,e as c,B as f,L as T,F as S,D as B,I as G,E as M,G as L,j as P,l as R,f as h,H as W,M as J,J as E,z as H,h as x,A as w,K}from"./index-DSmeTysl.js";import"./bcbplogo-DPdg0dlV.js";const $={key:0},U={style:{"font-size":"12px",color:"#a8a8a8"}},X={slot:"content"},Y={key:0,class:"song-artist"},Z={key:1,class:"no-result"},ee={key:0,class:"no-result-content"},te=h("h1",null,"No Result Found",-1),se=h("span",null,"We couldn't find any title, lyrics or artist matching your search",-1),re=A({__name:"CategoryListPage",setup(ae){const m=d(!1),Q=e=>{e.detail.scrollTop>30?m.value=!0:m.value=!1},g=d(),I=d(),y=d(""),V=e=>{y.value=e.searchQuery},D=(e,o)=>e==null?void 0:e.map(s=>({...s,songs:s.songs.filter(t=>{var n;return t.category.toLowerCase().includes(o)||t.title.toLowerCase().includes(o)||t.lyrics.toLowerCase().includes(o)||((n=t.artist)==null?void 0:n.toLowerCase().includes(o))}).sort((t,n)=>t.title.localeCompare(n.title))})),k=F(()=>D(I.value,y.value.toLowerCase())),_=d(W),u=d(b);j(async()=>{var s,t;u.value=new b(q);const e=await u.value.checkConnectionsConsistency(),o=(await u.value.isConnection("db_songlist",!1)).result;e.result&&o?_.value=await((s=u.value)==null?void 0:s.retrieveConnection("db_songlist",!1)):_.value=await((t=u.value)==null?void 0:t.createConnection("db_songlist",!1,"no-encryption",1,!1)),N()}),O(async()=>{var e;y.value="",await((e=u.value)==null?void 0:e.closeConnection("db_songlist",!1))});const N=async()=>{var t,n,i;await((t=_.value)==null?void 0:t.open());const e=await((n=_.value)==null?void 0:n.query("SELECT * FROM songs"));await((i=_.value)==null?void 0:i.close()),g.value=e==null?void 0:e.values;const s=await(await fetch("/category.json")).json();I.value=s.categories,I.value.forEach(v=>{v.songs=[];for(let C=0;C<g.value.length;C++)g.value[C].category==v.category&&v.songs.push(g.value[C])})};return(e,o)=>(l(),p(a(R),null,{default:r(()=>[c(z,{onEmitSearch:V,isHeaderHidden:m.value},null,8,["isHeaderHidden"]),c(a(P),{fullscreen:!0,onIonScroll:o[0]||(o[0]=s=>Q(s)),"scroll-events":!0},{default:r(()=>{var s;return[((s=k.value)==null?void 0:s.length)>0?(l(),f("div",$,[c(a(T),null,{default:r(()=>[(l(!0),f(S,null,B(k.value,(t,n)=>(l(),p(a(J),{value:"category_"+n,key:"category_"+n},{default:r(()=>[c(a(E),{slot:"header",color:"light"},{default:r(()=>[c(a(H),{class:"list-header",style:{color:"#888"}},{default:r(()=>[x(w(t.name),1),h("span",U," ["+w(t.songs.length)+"]",1)]),_:2},1024)]),_:2},1024),h("div",X,[(l(!0),f(S,null,B(t.songs,(i,v)=>(l(),p(a(E),{key:"song_"+v,href:"/song/"+i.id+"/lyrics"},{default:r(()=>[c(a(H),{class:"fade-in-left-animation song-label"},{default:r(()=>[h("p",null,w(i.title),1),i.artist?(l(),f("span",Y,w(i.artist),1)):L("",!0)]),_:2},1024),i.chords?(l(),p(a(K),{key:0,slot:"end",size:"small",fill:"outline",color:"warning",href:"/song/"+i.id+"/chords"},{default:r(()=>[x("chords ")]),_:2},1032,["href"])):L("",!0)]),_:2},1032,["href"]))),128))])]),_:2},1032,["value"]))),128))]),_:1})])):(l(),f("div",Z,[y.value?(l(),f("div",ee,[c(a(G),{icon:a(M),size:"large"},null,8,["icon"]),te,se])):L("",!0)]))]}),_:1})]),_:1}))}});export{re as default};