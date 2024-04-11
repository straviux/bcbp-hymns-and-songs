import{d as h,r,aa as w,n as C,V as _,c as B,w as t,a as e,b as k,e as a,f as x,L as I,O as m,a5 as b,J as S,h as n,I as U,a6 as E,E as O,a7 as T,a8 as u,j as L,l as N,a9 as q,W as z,_ as A}from"./index-B5KLrix8.js";import{Q as M}from"./vue-quill.esm-bundler-DXeiTkjg.js";const P={id:"container"},Q=h({__name:"UpdateSong",setup(W){var p;const V=r([[{size:["small",!1,"large","huge"]}],[{align:[]}],["bold","italic","underline"],["blockquote","code-block"],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}],["clean"]]),g=(p=w().params)==null?void 0:p.songid,d=r([]),f=r(),i=r(),c=r(),v=r();C(async()=>{const{data:s}=await _.get("/api/songs/"+g);console.log(s.data),d.value=s.data,i.value=d.value.title,v.value=d.value.category,c.value=d.value.artist;const l=document.getElementsByClassName("ql-editor");l[0].innerHTML=d.value.lyrics});const y=async()=>{try{const s=await q.create({message:"Saving data...",duration:3e3});s.present();const l=await _.patch("/api/songs/"+g,{title:i.value,lyrics:f.value,artist:c.value,category:v.value}),o=await z.create({message:l.data.message,duration:1600,position:"middle"});await s.dismiss()&&o.present()}catch(s){console.error(s)}};return(s,l)=>(k(),B(e(N),null,{default:t(()=>[a(e(L),{fullscreen:!0},{default:t(()=>[x("div",P,[a(e(I),null,{default:t(()=>[a(e(m),{slot:"start"},{default:t(()=>[a(e(b),{label:"Title:",modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=o=>i.value=o)},null,8,["modelValue"])]),_:1}),a(e(m),{slot:"end"},{default:t(()=>[a(e(S),{fill:"solid",class:"custom-btn",size:"large",onClick:y},{default:t(()=>[n("Save"),a(e(U),{slot:"end",icon:e(E)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),a(e(I),null,{default:t(()=>[a(e(m),{slot:"start"},{default:t(()=>[a(e(b),{label:"Artist:",modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=o=>c.value=o)},null,8,["modelValue"])]),_:1}),a(e(m),{slot:"end"},{default:t(()=>[a(e(O),null,{default:t(()=>[a(e(T),{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=o=>v.value=o),label:"Category",placeholder:""},{default:t(()=>[a(e(u),{value:"worship-and-praise"},{default:t(()=>[n("Worship/Praise")]),_:1}),a(e(u),{value:"advent"},{default:t(()=>[n("Advent")]),_:1}),a(e(u),{value:"liturgical"},{default:t(()=>[n("Liturgical")]),_:1}),a(e(u),{value:"marian"},{default:t(()=>[n("Marian")]),_:1}),a(e(u),{value:"gathering"},{default:t(()=>[n("Gathering")]),_:1}),a(e(u),{value:"bereavement"},{default:t(()=>[n("Bereavement")]),_:1}),a(e(u),{value:"lent-and-easter"},{default:t(()=>[n("Lent & Easter")]),_:1}),a(e(u),{value:"others"},{default:t(()=>[n("Others")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(e(M),{toolbar:V.value,style:{height:"100vh"},"content-type":"html",content:f.value,"onUpdate:content":l[3]||(l[3]=o=>f.value=o)},null,8,["toolbar","content"])])]),_:1})]),_:1}))}}),G=A(Q,[["__scopeId","data-v-1ec24605"]]);export{G as default};
