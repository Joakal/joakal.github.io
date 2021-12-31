"use strict";(self["webpackChunksignedmail"]=self["webpackChunksignedmail"]||[]).push([[148],{6148:(e,a,l)=>{l.r(a),l.d(a,{default:()=>C});var t=l(3673);const n=(0,t._)("h3",null,"Create new keys",-1),s={class:"row justify-evenly q-pa-xs"};function i(e,a,l,i,u,o){const r=(0,t.up)("q-input"),d=(0,t.up)("q-icon"),p=(0,t.up)("q-select"),m=(0,t.up)("q-expansion-item"),c=(0,t.up)("q-btn"),y=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(y,{onSubmit:e.handleCreateKeys,class:"q-gutter-md justify-center"},{default:(0,t.w5)((()=>[n,(0,t.Wm)(r,{label:"Full name",modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.name=a),required:"",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{label:"Email",modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=a=>e.email=a),type:"email",required:"",rules:[e=>!!e||"Field is required",a=>e.emailRegex.test(a)||"Email is not valid"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{label:"Passphrase",modelValue:e.passphrase,"onUpdate:modelValue":a[3]||(a[3]=a=>e.passphrase=a),type:e.hidePassphrase?"password":"input",required:"",rules:[e=>!!e||"Field is required"]},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{name:e.hidePassphrase?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[2]||(a[2]=a=>e.hidePassphrase=!e.hidePassphrase)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,t.Wm)(m,{modelValue:e.expanded,"onUpdate:modelValue":a[6]||(a[6]=a=>e.expanded=a),icon:"perm_identity",label:"Advanced"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{modelValue:e.type,"onUpdate:modelValue":a[4]||(a[4]=a=>e.type=a),options:e.createTypeOptions,label:"Standard"},null,8,["modelValue","options"]),(0,t.Wm)(p,{modelValue:e.curve,"onUpdate:modelValue":a[5]||(a[5]=a=>e.curve=a),options:e.createCurveOptions,label:"Standard"},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),(0,t._)("div",s,[(0,t.Wm)(c,{type:"submit",color:"primary",label:"Create keys"})])])),_:1},8,["onSubmit"])}var u=l(1959),o=l(8825),r=l(3617),d=l(745),p=l(329),m=function(e,a,l,t){function n(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,s){function i(e){try{o(t.next(e))}catch(a){s(a)}}function u(e){try{o(t["throw"](e))}catch(a){s(a)}}function o(e){e.done?l(e.value):n(e.value).then(i,u)}o((t=t.apply(e,a||[])).next())}))};const c=(0,t.aZ)({name:"NewKey",emits:{newKeys:e=>!!e},setup(e,{emit:a}){const l=(0,r.oR)(p.storeKey),t=(0,o.Z)(),n=(0,u.iH)(!0),s=(0,u.iH)("test"),i=(0,u.iH)("test@test.com"),c=(0,u.iH)("test"),y=(0,u.iH)(!1),h=(0,u.iH)("ecc"),v=(0,u.iH)("curve25519"),f=()=>m(this,void 0,void 0,(function*(){try{const e=yield(0,d.E0)(s.value,i.value,c.value,h.value,v.value);e&&(yield l.dispatch("keys/addKeys",e),a("newKeys",e))}catch(e){const{message:a}=e;t.notify({type:"negative",message:a})}}));return{hidePassphrase:n,name:s,email:i,passphrase:c,emailRegex:d.HN,expanded:y,type:h,curve:v,createTypeOptions:d.Ne,createCurveOptions:d.gI,handleCreateKeys:f}}});var y=l(4260),h=l(5269),v=l(4842),f=l(4554),V=l(4615),b=l(7208),w=l(8240),q=l(7518),g=l.n(q);const x=(0,y.Z)(c,[["render",i]]),C=x;g()(c,"components",{QForm:h.Z,QInput:v.Z,QIcon:f.Z,QExpansionItem:V.Z,QSelect:b.Z,QBtn:w.Z})}}]);