import{d as v,S as h,r as u,u as b,o as m,c as k,w as g,a as e,b as y,e as _,f as s,g as I,v as w,h as x,I as C,k as V,i as S,j as A,l as T,p as B,m as D,_ as N}from"./index-B5KLrix8.js";import{_ as O}from"./bcbplogo-DPdg0dlV.js";const i=a=>(B("data-v-0703c64b"),a=a(),D(),a),P={class:"container"},z={class:"screen"},M={class:"screen__content"},j={class:"login"},R=i(()=>s("img",{src:O,alt:"Ionic logo",loading:"lazy"},null,-1)),U={class:"login__field"},$=i(()=>s("i",{class:"login__icon fas fa-lock"},null,-1)),q=i(()=>s("div",{class:"screen__background"},[s("span",{class:"screen__background__shape screen__background__shape4"}),s("span",{class:"screen__background__shape screen__background__shape3"}),s("span",{class:"screen__background__shape screen__background__shape2"}),s("span",{class:"screen__background__shape screen__background__shape1"})],-1)),E=v({__name:"VerifyAccessPage",setup(a){const o=new h;o.create();const t=u(""),l=b(),r=u(!1),d=c=>{r.value=c},f=async()=>{t.value=="486512"?(await o.set("bcbp-app-activated",!0),await o.set("last-library-update",null),l.push("/")):d(!0)};return m(async()=>{await o.get("bcbp-app-activated")&&l.push("/")}),(c,n)=>(y(),k(e(T),null,{default:g(()=>[_(e(A),null,{default:g(()=>[s("div",P,[s("div",z,[s("div",M,[s("form",j,[R,s("div",U,[$,I(s("input",{type:"password",class:"login__input",placeholder:"Access Code","onUpdate:modelValue":n[0]||(n[0]=p=>t.value=p)},null,512),[[w,t.value]])]),s("button",{class:"button login__submit",onClick:f},[x(" Verify "),_(e(C),{icon:e(V),style:{"font-size":"20px","margin-left":"6px"}},null,8,["icon"])])])]),q])]),_(e(S),{"is-open":r.value,message:"Invalid Activation Code, Try again",duration:5e3,onDidDismiss:n[1]||(n[1]=p=>d(!1))},null,8,["is-open"])]),_:1})]),_:1}))}}),H=N(E,[["__scopeId","data-v-0703c64b"]]);export{H as default};
