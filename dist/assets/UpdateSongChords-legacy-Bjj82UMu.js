System.register(["./index-legacy-FMUfXu-0.js","./vue-quill.esm-bundler-legacy-DOks6SHU.js"],(function(e,a){"use strict";var l,t,n,d,u,o,s,r,i,c,v,p,m,g,f,_,b,h,x,y,V,w,C,k,U,E,L;return{setters:[e=>{l=e.d,t=e.r,n=e.aa,d=e.n,u=e.V,o=e.c,s=e.w,r=e.a,i=e.b,c=e.e,v=e.f,p=e.L,m=e.O,g=e.a5,f=e.J,_=e.h,b=e.I,h=e.a6,x=e.E,y=e.a7,V=e.a8,w=e.j,C=e.l,k=e.a9,U=e.W,E=e._},e=>{L=e.Q}],execute:function(){var a=document.createElement("style");a.textContent=".custom-btn[data-v-57e561ad]{text-transform:capitalize;--background: #1ecf8b;--padding-left: 10px;--border-radius: 15px;--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, .3), 0px 1px 3px 1px rgba(0, 0, 0, .15)}\n",document.head.appendChild(a);const S={id:"container"};e("default",E(l({__name:"UpdateSongChords",setup(e){var a;const l=t([[{size:["small",!1,"large","huge"]}],[{align:[]}],["bold","italic","underline"],["blockquote","code-block"],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}],["clean"]]),E=null===(a=n().params)||void 0===a?void 0:a.songid,j=t([]),q=t(),z=t(),A=t(),B=t();d((async()=>{const{data:e}=await u.get("/api/songs/"+E);j.value=e.data,z.value=j.value.title,B.value=j.value.category,A.value=j.value.artist,document.getElementsByClassName("ql-editor")[0].innerHTML=j.value.chords}));const I=async()=>{try{const e=await k.create({message:"Saving data...",duration:3e3});e.present();const a=await u.patch("/api/songs/"+E,{chords:q.value}),l=await U.create({message:a.data.message,duration:1600,position:"middle"});await e.dismiss()&&l.present()}catch(e){console.error(e)}};return(e,a)=>(i(),o(r(C),null,{default:s((()=>[c(r(w),{fullscreen:!0},{default:s((()=>[v("div",S,[c(r(p),null,{default:s((()=>[c(r(m),{slot:"start"},{default:s((()=>[c(r(g),{label:"Title:",readonly:"",modelValue:z.value,"onUpdate:modelValue":a[0]||(a[0]=e=>z.value=e)},null,8,["modelValue"])])),_:1}),c(r(m),{slot:"end"},{default:s((()=>[c(r(f),{fill:"solid",class:"custom-btn",size:"large",onClick:I},{default:s((()=>[_("Save"),c(r(b),{slot:"end",icon:r(h)},null,8,["icon"])])),_:1})])),_:1})])),_:1}),c(r(p),null,{default:s((()=>[c(r(m),{slot:"start"},{default:s((()=>[c(r(g),{label:"Artist:",readonly:"",modelValue:A.value,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e)},null,8,["modelValue"])])),_:1}),c(r(m),{slot:"end"},{default:s((()=>[c(r(x),null,{default:s((()=>[c(r(y),{modelValue:B.value,"onUpdate:modelValue":a[2]||(a[2]=e=>B.value=e),disabled:"",label:"Category",placeholder:""},{default:s((()=>[c(r(V),{value:"worship-and-praise"},{default:s((()=>[_("Worship/Praise")])),_:1}),c(r(V),{value:"advent"},{default:s((()=>[_("Advent")])),_:1}),c(r(V),{value:"liturgical"},{default:s((()=>[_("Liturgical")])),_:1}),c(r(V),{value:"marian"},{default:s((()=>[_("Marian")])),_:1}),c(r(V),{value:"gathering"},{default:s((()=>[_("Gathering")])),_:1}),c(r(V),{value:"bereavement"},{default:s((()=>[_("Bereavement")])),_:1}),c(r(V),{value:"lent-and-easter"},{default:s((()=>[_("Lent & Easter")])),_:1}),c(r(V),{value:"others"},{default:s((()=>[_("Others")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(r(L),{toolbar:l.value,style:{height:"100vh"},"content-type":"html",content:q.value,"onUpdate:content":a[3]||(a[3]=e=>q.value=e)},null,8,["toolbar","content"])])])),_:1})])),_:1}))}}),[["__scopeId","data-v-57e561ad"]]))}}}));
