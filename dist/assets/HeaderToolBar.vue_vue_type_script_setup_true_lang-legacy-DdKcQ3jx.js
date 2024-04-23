System.register(["./index-legacy-BVrP-4jz.js","./bcbplogo-legacy-DNPlaw3-.js"],(function(t,e){"use strict";var a,l,n,o,s,i,r,d,c,u,p,g,f,m,v,y,b,h,_,x,w,C,k,z,S,H,E,L,T,B,D,M,O,U,j,I,N,V,q,R;return{setters:[t=>{a=t.d,l=t.b,n=t.c,o=t.w,s=t.e,i=t.a,r=t.N,d=t.I,c=t.O,u=t.P,p=t.h,g=t.Q,f=t.K,m=t.R,v=t.j,y=t.f,b=t.T,h=t.U,_=t.r,x=t.J,w=t.V,C=t.W,k=t.G,z=t.X,S=t.z,H=t.Y,E=t.Z,L=t.x,T=t.H,B=t.q,D=t.S,M=t.$,O=t.C,U=t.a0,j=t.a1,I=t.a2,N=t.a3,V=t.a4,q=t.a5},t=>{R=t._}],execute:function(){var e=document.createElement("style");e.textContent="ion-modal.settings-modal::part(content){--height: 80%;--border-radius: 12px;--width: 320px}.settings-content{width:100%;color:#777}.settings-content ion-list{width:100%}ion-modal.update-library-modal::part(content){--height: 55px;--border-radius: 3px;--width: 300px}.update-library-content{display:flex;align-items:center;justify-content:center;color:#777}ion-modal.about-modal::part(content){--height: 420px;--border-radius: 12px;--width: 320px}.about-content{width:100%;color:#777}ion-toast.custom-toast{--background: #6a679e;--width: 300px;--box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, .6s);--color: #f1f1f1;font-size:14px}\n",document.head.appendChild(e);const A=y("div",{class:"ion-padding"},[y("div",{class:"settings-content"},"Coming soon..")],-1),P=a({__name:"SettingsModal",setup(t){const e=()=>b.dismiss(null,"cancel");return(t,a)=>(l(),n(i(v),{class:"settings-modal"},{default:o((()=>[s(i(r),null,{default:o((()=>[s(i(d),{icon:i(c),style:{"margin-left":"10px","margin-right":"-10px","font-size":"22px"},slot:"start"},null,8,["icon"]),s(i(u),null,{default:o((()=>[p("Settings")])),_:1}),s(i(g),{slot:"end"},{default:o((()=>[s(i(f),{color:"light",onClick:e},{default:o((()=>[s(i(d),{icon:i(m)},null,8,["icon"])])),_:1})])),_:1})])),_:1}),A])),_:1}))}}),F=y("div",{class:"ion-padding"},[y("div",{class:"update-library-content"},[y("div",{class:"indicator"},[y("div",null,"Updating library...")])])],-1),J=a({__name:"UpdateLibraryModal",setup:t=>(t,e)=>(l(),n(i(v),null,{default:o((()=>[F,s(i(h),{type:"indeterminate",color:"success"})])),_:1}))}),K=y("div",{class:"ion-padding",style:{color:"#555",display:"flex","flex-direction":"column",gap:"8px"}},[y("img",{src:R,alt:"bcbp logo",height:"160",width:"160",style:{margin:"auto"}}),y("div",{style:{margin:"auto"}},[y("h4",null,"BCBP Hyms & Songs"),y("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[y("span",null,"Version 1.2")]),y("div",{style:{"font-size":"12px",color:"#777","margin-top":"10px"}},[p(" Last library update: "),y("span",null,"04/08/2024")])])],-1),Q=a({__name:"AboutModal",setup(t){const e=()=>b.dismiss(null,"cancel");return(t,a)=>(l(),n(i(v),{class:"about-modal"},{default:o((()=>[s(i(r),null,{default:o((()=>[s(i(u),null,{default:o((()=>[p("About")])),_:1}),s(i(g),{slot:"end"},{default:o((()=>[s(i(f),{color:"light",onClick:e},{default:o((()=>[s(i(d),{icon:i(m)},null,8,["icon"])])),_:1})])),_:1})])),_:1}),K])),_:1}))}}),$=a({__name:"MenuList",setup(t){const e=_(T),a=_(B),r=_(!1),u=_(!1);(async()=>{const t=new D;await t.create();const e=await t.get("last-library-update");await M.get("api/last-update").then((t=>{console.log("test"),e!=t.data.last_update?r.value=!0:u.value=!0}))})();const g=async t=>{const l={component:Q,cssClass:"about-modal"},n={component:J,cssClass:"update-library-modal"},o={component:P,cssClass:"settings-modal"},s=await b.create(l),i=await b.create(n),r=await b.create(o);if("settings"==t&&r.present(),"update"==t){i.present().then((async()=>{a.value=new B(O);const l=await a.value.checkConnectionsConsistency(),n=(await a.value.isConnection("db_songlist",!1)).result;var o,s;l.result&&n?e.value=await(null===(o=a.value)||void 0===o?void 0:o.retrieveConnection("db_songlist",!1)):e.value=await(null===(s=a.value)||void 0===s?void 0:s.createConnection("db_songlist",!1,"no-encryption",1,!1)),t()}));const t=async()=>{var t,a;const l=new D;await l.create();const n=await l.get("last-library-update");let o="Library is already up to date";await(null===(t=e.value)||void 0===t?void 0:t.open());const s=await(null===(a=e.value)||void 0===a?void 0:a.query("SELECT COUNT(*) as song_count FROM songs"));console.log(`res: ${JSON.stringify(s.values[0].song_count)}`),await M.get("/api/songs").then((t=>{const a=t.data.data,i=t.data.last_update;if(n!=i||parseInt(s.values[0].song_count)!==parseInt(a.length)){var r,d;let t=null;null===(r=e.value)||void 0===r||r.query("DELETE FROM songs"),a.forEach((a=>{try{var l;t=i,null===(l=e.value)||void 0===l||l.query("INSERT INTO songs (id,title,lyrics,chords,artist,category) values (?,?,?,?,?,?)",[a.id,a.title,a.lyrics,a.chords,a.artist,a.category]),o="Library has been updated"}catch(n){t=null,alert(n)}})),l.set("last-library-update",t),u.value=!0,null===(d=e.value)||void 0===d||d.close()}})),i.dismiss();const r=await U.create({message:o,duration:3e3,cssClass:"custom-toast",position:"bottom"});r.present(),r.onDidDismiss().then((t=>{t.role&&window.location.reload()}))}}"about"==t&&s.present()};return(t,e)=>(l(),n(i(v),null,{default:o((()=>[s(i(L),{lines:"full"},{default:o((()=>[s(i(x),{button:"",onClick:e[0]||(e[0]=t=>g("settings"))},{default:o((()=>[s(i(f),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:o((()=>[s(i(d),{slot:"start",icon:i(c)},null,8,["icon"]),p(" Settings ")])),_:1})])),_:1}),r.value?(l(),n(i(x),{key:0,button:"",onClick:e[1]||(e[1]=t=>g("update"))},{default:o((()=>[s(i(f),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:o((()=>[s(i(d),{slot:"start",icon:i(w)},null,8,["icon"]),p(" Download Update ")])),_:1}),r.value?(l(),n(i(C),{key:0,color:"success"},{default:o((()=>[p("new")])),_:1})):k("",!0)])),_:1})):u.value?(l(),n(i(x),{key:2},{default:o((()=>[s(i(f),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:o((()=>[s(i(d),{slot:"start",icon:i(H)},null,8,["icon"]),p("Library is up to date")])),_:1})])),_:1})):(l(),n(i(x),{key:1},{default:o((()=>[s(i(z),{name:"lines-sharp-small"}),s(i(S),{style:{color:"#777","font-size":"14px",padding:"10px 0"}},{default:o((()=>[p("Checking for updates")])),_:1})])),_:1})),s(i(x),{lines:"none",button:"",onClick:e[2]||(e[2]=t=>g("about"))},{default:o((()=>[s(i(f),{fill:"clear",expand:"block",style:{color:"#777","text-transform":"capitalize","font-size":"14px",padding:"10px 0"}},{default:o((()=>[s(i(d),{slot:"start",icon:i(E)},null,8,["icon"]),p(" About ")])),_:1})])),_:1})])),_:1})])),_:1}))}}),G=y("img",{src:"/bcbp-seeklogo.svg",height:"40",slot:"start",style:{"margin-left":"14px","margin-right":"-10px"}},null,-1);t("_",a({__name:"HeaderToolBar",props:{isHeaderHidden:{type:Boolean,default:!1}},emits:["emitSearch"],setup(t,{emit:e}){const a=e,c=_(""),m=()=>{a("emitSearch",{searchQuery:c.value})},v=_(!1),y=_();return(e,a)=>(l(),n(i(q),{class:"ion-no-border"},{default:o((()=>[s(i(r),{class:N(["header-transition",{"ion-header-hidden":t.isHeaderHidden}])},{default:o((()=>[G,s(i(u),null,{default:o((()=>[p("BCBP Hymns & Songs")])),_:1}),s(i(g),{slot:"primary"},{default:o((()=>[s(i(f),{onClick:a[0]||(a[0]=t=>{return e=t,y.value=e,void(v.value=!0);var e})},{default:o((()=>[s(i(d),{slot:"icon-only",icon:i(j)},null,8,["icon"])])),_:1}),s(i(I),{"is-open":v.value,event:y.value,onDidDismiss:a[1]||(a[1]=t=>v.value=!1)},{default:o((()=>[s($)])),_:1},8,["is-open","event"])])),_:1})])),_:1},8,["class"]),s(i(r),{class:N(["header-transition",{"search-bar-persist":t.isHeaderHidden}])},{default:o((()=>[s(i(V),{"show-clear-button":"focus",class:"searchbar",id:"searchbar",modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=t=>c.value=t),onKeyup:m},null,8,["modelValue"])])),_:1},8,["class"])])),_:1}))}}))}}}));