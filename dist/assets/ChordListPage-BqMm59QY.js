import{_ as S}from"./HeaderToolBar.vue_vue_type_script_setup_true_lang-C6IMImYM.js";import{d as b,r as c,n as H,q as m,C as B,s as E,t as Q,c as C,w as u,a as n,b as o,e as d,x as D,y as f,z as V,F as x,I as F,A as N,B as p,j as q,l as O,f as h,D as z,E as P,G as R,H as L}from"./index-CRfOI_3F.js";import"./bcbplogo-DPdg0dlV.js";const T={key:0,class:"song-artist"},W={key:1,class:"no-result"},j={key:0,class:"no-result-content"},A=h("h1",null,"No Result Found",-1),G=h("span",null,"We couldn't find any title, lyrics or artist matching your search",-1),U=b({__name:"ChordListPage",setup(M){const v=c(!1),g=e=>{e.detail.scrollTop>30?v.value=!0:v.value=!1},r=c(z),l=c(m);H(async()=>{var t,s;l.value=new m(B);const e=await l.value.checkConnectionsConsistency(),a=(await l.value.isConnection("db_songlist",!1)).result;e.result&&a?r.value=await((t=l.value)==null?void 0:t.retrieveConnection("db_songlist",!1)):r.value=await((s=l.value)==null?void 0:s.createConnection("db_songlist",!1,"no-encryption",1,!1)),I()}),E(async()=>{var e;await((e=l.value)==null?void 0:e.closeConnection("db_songlist",!1))});const I=async()=>{var a,t,s;await((a=r.value)==null?void 0:a.open());const e=await((t=r.value)==null?void 0:t.query("SELECT * FROM songs"));await((s=r.value)==null?void 0:s.close()),console.log("data loaded"),w.value=e==null?void 0:e.values.filter(_=>_.chords)},w=c(),i=c(""),k=e=>{i.value=e.searchQuery},y=Q(()=>{var e;return(e=w.value)==null?void 0:e.filter(a=>{var t,s;return a.title.toLowerCase().includes(i.value.toLowerCase())||((t=a.chords)==null?void 0:t.toLowerCase().includes(i.value.toLowerCase()))||a.category.toLowerCase().includes(i.value.toLowerCase())||((s=a.artist)==null?void 0:s.toLowerCase().includes(i.value.toLowerCase()))}).sort((a,t)=>a.title.localeCompare(t.title))});return(e,a)=>(o(),C(n(O),null,{default:u(()=>[d(S,{onEmitSearch:k,isHeaderHidden:v.value},null,8,["isHeaderHidden"]),d(n(q),{fullscreen:!0,onIonScroll:a[0]||(a[0]=t=>g(t)),"scroll-events":!0},{default:u(()=>{var t;return[((t=y.value)==null?void 0:t.length)>0?(o(),C(n(D),{key:0},{default:u(()=>[(o(!0),f(x,null,V(y.value,(s,_)=>(o(),C(n(P),{key:"song_"+_,href:"/song/"+s.id+"/chords"},{default:u(()=>[d(n(R),{class:"fade-in-left-animation song-label"},{default:u(()=>[h("p",null,L(s.title),1),s.artist?(o(),f("span",T,L(s.artist),1)):p("",!0)]),_:2},1024)]),_:2},1032,["href"]))),128))]),_:1})):(o(),f("div",W,[i.value?(o(),f("div",j,[d(n(F),{icon:n(N),size:"large"},null,8,["icon"]),A,G])):p("",!0)]))]}),_:1})]),_:1}))}});export{U as default};