import{d as V,r as _,t as x,n as z,V as N,c as p,w as s,a as e,b as r,e as a,L as g,Z as w,N as F,h as m,$ as H,a0 as T,x as E,y as d,z as O,F as D,I as f,A as P,B as y,j,a1 as A,a2 as b,a3 as G,l as J,E as Q,G as R,f as h,H as C,J as L,a4 as U,p as W,m as Z,_ as $}from"./index-Bl1MqpDU.js";const S=c=>(W("data-v-bf7f3bca"),c=c(),Z(),c),q={key:0,class:"song-artist"},K={key:1,class:"no-result"},M={key:0,class:"no-result-content"},X=S(()=>h("h1",null,"No Result Found",-1)),Y=S(()=>h("span",null,"We couldn't find any title, lyrics or artist matching your search",-1)),ee=V({__name:"SongList",setup(c){const u=_(!1),k=l=>{l.detail.scrollTop>30?u.value=!0:u.value=!1},I=_(),n=_(""),v=x(()=>{var l;return(l=I.value)==null?void 0:l.filter(t=>{var o;return t.title.toLowerCase().includes(n.value.toLowerCase())||t.lyrics.toLowerCase().includes(n.value.toLowerCase())||t.category.toLowerCase().includes(n.value.toLowerCase())||((o=t.artist)==null?void 0:o.toLowerCase().includes(n.value.toLowerCase()))}).sort((t,o)=>t.title.localeCompare(o.title))});return z(async()=>{const l=await N.get("/api/songs");console.log(l.data),I.value=l.data.data}),(l,t)=>(r(),p(e(J),null,{default:s(()=>[a(e(T),{class:"ion-no-border"},{default:s(()=>[a(e(g),{class:w(["header-transition",{"ion-header-hidden":u.value}])},{default:s(()=>[a(e(F),null,{default:s(()=>[m("BCBP Hymns & Songs")]),_:1})]),_:1},8,["class"]),a(e(g),{class:w(["header-transition",{"search-bar-persist":u.value}])},{default:s(()=>[a(e(H),{"show-clear-button":"focus",class:"searchbar",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,8,["modelValue"])]),_:1},8,["class"])]),_:1}),a(e(j),{fullscreen:!0,onIonScroll:t[1]||(t[1]=o=>k(o)),"scroll-events":!0},{default:s(()=>{var o;return[((o=v.value)==null?void 0:o.length)>0?(r(),p(e(E),{key:0,lines:"full"},{default:s(()=>[(r(!0),d(D,null,O(v.value,(i,B)=>(r(),p(e(Q),{key:"song_"+B},{default:s(()=>[a(e(R),{class:"fade-animation song-label"},{default:s(()=>[h("p",null,C(i.title),1),i.artist?(r(),d("span",q,C(i.artist),1)):y("",!0)]),_:2},1024),a(e(L),{slot:"end",size:"small",color:"dark",fill:"outline",href:"manage/update-song/"+i.id},{default:s(()=>[a(e(f),{icon:e(U),size:"small"},null,8,["icon"]),m(" edit ")]),_:2},1032,["href"]),a(e(L),{slot:"end",size:"small",fill:"outline",color:"warning",href:"manage/update-song-chord/"+i.id},{default:s(()=>[a(e(f),{icon:e(b),size:"small"},null,8,["icon"]),m(" chords ")]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1})):(r(),d("div",K,[n.value?(r(),d("div",M,[a(e(f),{icon:e(P),size:"large"},null,8,["icon"]),X,Y])):y("",!0)]))]}),_:1}),a(e(G),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:s(()=>[a(e(A),{color:"primary",href:"/manage/new-song"},{default:s(()=>[a(e(f),{icon:e(b),style:{color:"white"}},null,8,["icon"])]),_:1})]),_:1})]),_:1}))}}),se=$(ee,[["__scopeId","data-v-bf7f3bca"]]);export{se as default};