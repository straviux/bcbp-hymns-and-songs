System.register(["./index-legacy-C1FsRSJE.js"],(function(a,e){"use strict";var t,l,o,n,s,r,i,d,c,u,f,b,v,m,h,g,p,y,_,w,C,x,L,k,z,S,j,B,I,V,Y,E,F,N,A,D,G;return{setters:[a=>{t=a.d,l=a.r,o=a.t,n=a.n,s=a.Y,r=a.c,i=a.w,d=a.a,c=a.b,u=a.e,f=a.L,b=a.a1,v=a.N,m=a.h,h=a.a2,g=a.a3,p=a.x,y=a.B,_=a.D,w=a.F,C=a.I,x=a.E,L=a.G,k=a.j,z=a.a4,S=a.a5,j=a.a6,B=a.l,I=a.J,V=a.z,Y=a.f,E=a.A,F=a.K,N=a.a7,A=a.p,D=a.m,G=a._}],execute:function(){var e=document.createElement("style");e.textContent="ion-item[data-v-bf7f3bca]{--color: #555}ion-note[data-v-bf7f3bca]{--color: #aaa}ion-fab[data-v-bf7f3bca]{margin-bottom:var(--ion-safe-area-bottom, 0)}.searchbar[data-v-bf7f3bca]{--background: #fff;--color: #777;--box-shadow: none;--border-radius: 30px}.header-transition[data-v-bf7f3bca]{transition:transform .3s ease-out}.search-bar-persist[data-v-bf7f3bca]{transform:translateY(-100%)}.song-artist[data-v-bf7f3bca]{font-size:10px;color:#aaa;text-transform:capitalize}.no-result[data-v-bf7f3bca]{display:flex;justify-content:center;align-items:center;height:50vh}.no-result .no-result-content[data-v-bf7f3bca]{background-color:#f6f6f6;width:80%;margin:auto;border-radius:5px;padding:1rem;color:#777}.ion-header-hidden[data-v-bf7f3bca]{transform:translateY(-100%)}.fade-animation[data-v-bf7f3bca]{animation:fade-in-bf7f3bca .4s ease forwards}@keyframes fade-in-bf7f3bca{0%{transform:translate(-100%)}to{transform:translate(0)}}\n",document.head.appendChild(e);const H=a=>(A("data-v-bf7f3bca"),a=a(),D(),a),J={key:0,class:"song-artist"},K={key:1,class:"no-result"},P={key:0,class:"no-result-content"},R=H((()=>Y("h1",null,"No Result Found",-1))),T=H((()=>Y("span",null,"We couldn't find any title, lyrics or artist matching your search",-1)));a("default",G(t({__name:"SongList",setup(a){const e=l(!1),t=l(),A=l(""),D=o((()=>{var a;return null===(a=t.value)||void 0===a?void 0:a.filter((a=>{var e;return a.title.toLowerCase().includes(A.value.toLowerCase())||a.lyrics.toLowerCase().includes(A.value.toLowerCase())||a.category.toLowerCase().includes(A.value.toLowerCase())||(null===(e=a.artist)||void 0===e?void 0:e.toLowerCase().includes(A.value.toLowerCase()))})).sort(((a,e)=>a.title.localeCompare(e.title)))}));return n((async()=>{const a=await s.get("/api/songs");console.log(a.data),t.value=a.data.data})),(a,t)=>(c(),r(d(B),null,{default:i((()=>[u(d(g),{class:"ion-no-border"},{default:i((()=>[u(d(f),{class:b(["header-transition",{"ion-header-hidden":e.value}])},{default:i((()=>[u(d(v),null,{default:i((()=>[m("BCBP Hymns & Songs")])),_:1})])),_:1},8,["class"]),u(d(f),{class:b(["header-transition",{"search-bar-persist":e.value}])},{default:i((()=>[u(d(h),{"show-clear-button":"focus",class:"searchbar",modelValue:A.value,"onUpdate:modelValue":t[0]||(t[0]=a=>A.value=a)},null,8,["modelValue"])])),_:1},8,["class"])])),_:1}),u(d(k),{fullscreen:!0,onIonScroll:t[1]||(t[1]=a=>{a.detail.scrollTop>30?e.value=!0:e.value=!1}),"scroll-events":!0},{default:i((()=>{var a;return[(null===(a=D.value)||void 0===a?void 0:a.length)>0?(c(),r(d(p),{key:0,lines:"full"},{default:i((()=>[(c(!0),y(w,null,_(D.value,((a,e)=>(c(),r(d(I),{key:"song_"+e},{default:i((()=>[u(d(V),{class:"fade-animation song-label"},{default:i((()=>[Y("p",null,E(a.title),1),a.artist?(c(),y("span",J,E(a.artist),1)):L("",!0)])),_:2},1024),u(d(F),{slot:"end",size:"small",color:"dark",fill:"outline",href:"manage/update-song/"+a.id},{default:i((()=>[u(d(C),{icon:d(N),size:"small"},null,8,["icon"]),m(" edit ")])),_:2},1032,["href"]),u(d(F),{slot:"end",size:"small",fill:"outline",color:"warning",href:"manage/update-song-chord/"+a.id},{default:i((()=>[u(d(C),{icon:d(S),size:"small"},null,8,["icon"]),m(" chords ")])),_:2},1032,["href"])])),_:2},1024)))),128))])),_:1})):(c(),y("div",K,[A.value?(c(),y("div",P,[u(d(C),{icon:d(x),size:"large"},null,8,["icon"]),R,T])):L("",!0)]))]})),_:1}),u(d(j),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:i((()=>[u(d(z),{color:"primary",href:"/manage/new-song"},{default:i((()=>[u(d(C),{icon:d(S),style:{color:"white"}},null,8,["icon"])])),_:1})])),_:1})])),_:1}))}}),[["__scopeId","data-v-bf7f3bca"]]))}}}));