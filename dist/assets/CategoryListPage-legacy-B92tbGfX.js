System.register(["./HeaderToolBar.vue_vue_type_script_setup_true_lang-legacy-C8SGl1kr.js","./index-legacy-Nka0N6d8.js","./bcbplogo-legacy-DNPlaw3-.js"],(function(e,l){"use strict";var a,n,t,s,o,i,u,r,c,v,d,g,y,f,_,h,w,p,C,k,m,b,j,H,L,E,S,x,z,F;return{setters:[e=>{a=e._},e=>{n=e.d,t=e.r,s=e.t,o=e.n,i=e.q,u=e.C,r=e.s,c=e.c,v=e.w,d=e.a,g=e.b,y=e.e,f=e.y,_=e.F,h=e.z,w=e.I,p=e.A,C=e.B,k=e.j,m=e.l,b=e.f,j=e.D,H=e.x,L=e.K,E=e.G,S=e.h,x=e.H,z=e.E,F=e.J},null],execute:function(){const l={key:0},T={key:0,class:"song-artist"},q={key:1,class:"no-result"},B={key:0,class:"no-result-content"},I=b("h1",null,"No Result Found",-1),R=b("span",null,"We couldn't find any title, lyrics or artist matching your search",-1);e("default",n({__name:"CategoryListPage",setup(e){const n=t(!1),A=t(),D=t(),G=t(""),J=e=>{G.value=e.searchQuery},K=s((()=>{return e=D.value,l=G.value.toLowerCase(),null==e?void 0:e.map((e=>({...e,songs:e.songs.filter((e=>{var a;return e.title.toLowerCase().includes(l)||e.lyrics.toLowerCase().includes(l)||(null===(a=e.artist)||void 0===a?void 0:a.toLowerCase().includes(l))})).sort(((e,l)=>e.title.localeCompare(l.title)))})));var e,l})),M=t(j),N=t(i);o((async()=>{N.value=new i(u);const e=await N.value.checkConnectionsConsistency(),l=(await N.value.isConnection("db_songlist",!1)).result;var a,n;e.result&&l?M.value=await(null===(a=N.value)||void 0===a?void 0:a.retrieveConnection("db_songlist",!1)):M.value=await(null===(n=N.value)||void 0===n?void 0:n.createConnection("db_songlist",!1,"no-encryption",1,!1)),O()})),r((async()=>{var e;await(null===(e=N.value)||void 0===e?void 0:e.closeConnection("db_songlist",!1))}));const O=async()=>{var e,l,a;await(null===(e=M.value)||void 0===e?void 0:e.open());const n=await(null===(l=M.value)||void 0===l?void 0:l.query("SELECT * FROM songs"));await(null===(a=M.value)||void 0===a?void 0:a.close()),A.value=null==n?void 0:n.values;const t=await fetch("/category.json"),s=await t.json();D.value=s.categories,D.value.forEach((e=>{e.songs=[];for(let l=0;l<A.value.length;l++)A.value[l].category==e.category&&e.songs.push(A.value[l])}))};return(e,t)=>(g(),c(d(m),null,{default:v((()=>[y(a,{onEmitSearch:J,isHeaderHidden:n.value},null,8,["isHeaderHidden"]),y(d(k),{fullscreen:!0,onIonScroll:t[0]||(t[0]=e=>{e.detail.scrollTop>30?n.value=!0:n.value=!1}),"scroll-events":!0},{default:v((()=>{var e;return[(null===(e=K.value)||void 0===e?void 0:e.length)>0?(g(),f("div",l,[(g(!0),f(_,null,h(K.value,((e,l)=>(g(),f("div",{key:"category_"+l},[e.songs.length>0?(g(),c(d(H),{key:0,lines:"inset"},{default:v((()=>[y(d(L),null,{default:v((()=>[y(d(E),{class:"list-header"},{default:v((()=>[S(x(e.name),1)])),_:2},1024)])),_:2},1024),(g(!0),f(_,null,h(e.songs,((e,l)=>(g(),c(d(z),{key:"song_"+l,href:"/song/"+e.id+"/lyrics"},{default:v((()=>[y(d(E),{class:"fade-in-left-animation song-label"},{default:v((()=>[b("p",null,x(e.title),1),e.artist?(g(),f("span",T,x(e.artist),1)):C("",!0)])),_:2},1024),e.chords?(g(),c(d(F),{key:0,slot:"end",size:"small",fill:"outline",color:"warning",href:"/song/"+e.id+"/chords"},{default:v((()=>[S("chords ")])),_:2},1032,["href"])):C("",!0)])),_:2},1032,["href"])))),128))])),_:2},1024)):C("",!0)])))),128))])):(g(),f("div",q,[G.value?(g(),f("div",B,[y(d(w),{icon:d(p),size:"large"},null,8,["icon"]),I,R])):C("",!0)]))]})),_:1})])),_:1}))}}))}}}));