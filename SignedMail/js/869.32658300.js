"use strict";(self["webpackChunksignedmail"]=self["webpackChunksignedmail"]||[]).push([[869],{1869:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Q});var l=i(3673);const a=(0,l._)("div",{class:"flex flex-center"},[(0,l._)("div",{class:"text-h4"},"Signing")],-1),n={class:"fit col"},o={class:"fit col justify-center q-pa-sm q-gutter-md"},u={class:"row q-gutter-md"},d={class:"row"},s={class:"row q-pa-sm q-gutter-md"},p=(0,l.Uk)(" No results "),r={class:"fit"};function c(e,t,i,c,v,m){const g=(0,l.up)("q-icon"),y=(0,l.up)("q-input"),f=(0,l.up)("q-btn"),b=(0,l.up)("q-item-section"),S=(0,l.up)("q-item"),_=(0,l.up)("q-select"),k=(0,l.up)("q-expansion-item"),w=(0,l.up)("q-form"),K=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(K,null,{default:(0,l.w5)((()=>[a,(0,l.Wm)(w,{onSubmit:e.handleSigning},{default:(0,l.w5)((()=>{var i,a,r;return[(0,l._)("div",n,[(0,l.Wm)(y,{modelValue:e.input,"onUpdate:modelValue":t[1]||(t[1]=t=>e.input=t),filled:"",type:"textarea",label:"Input",disable:!(null===(i=e.privateKeySelected)||void 0===i?void 0:i.key)},{append:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"content_copy",class:"cursor-pointer",onClick:t[0]||(t[0]=t=>e.addToClipboard({label:"Input",value:e.input}))})])),_:1},8,["modelValue","disable"])]),(0,l._)("div",o,[(0,l._)("div",u,[(0,l.Wm)(f,{color:"primary",label:"Sign",onClick:e.handleSigning,disable:!(null===(a=e.privateKeySelected)||void 0===a?void 0:a.key)},null,8,["onClick","disable"])]),(0,l._)("div",d,[(0,l.Wm)(k,{class:"fit","expand-separator":"",icon:"perm_identity",label:"Settings",caption:(null===(r=e.privateKeySelected)||void 0===r?void 0:r.userID)?e.privateKeySelected.userID:"Please add a private key"},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(_,{filled:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",options:e.privateKeyOptions,hint:"Private Key","option-value":"keyID","option-label":"userID",onFilter:e.privateKeyFilterFn,modelValue:e.privateKeySelected,"onUpdate:modelValue":t[2]||(t[2]=t=>e.privateKeySelected=t)},{"no-option":(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-grey"},{default:(0,l.w5)((()=>[p])),_:1})])),_:1})])),_:1},8,["options","onFilter","modelValue"])])])),_:1},8,["caption"])])])]})),_:1},8,["onSubmit"]),(0,l._)("div",r,[(0,l.Wm)(y,{modelValue:e.output,"onUpdate:modelValue":t[4]||(t[4]=t=>e.output=t),filled:"",readonly:"",type:"textarea",label:"Output",counter:""},{append:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"content_copy",class:"cursor-pointer",onClick:t[3]||(t[3]=t=>e.addToClipboard({label:"Output",value:e.output}))})])),_:1},8,["modelValue"])])])),_:1})}var v=i(8430),m=i(1959),g=i(8825),y=i(745),f=i(6598),b=i(2079);const S=(0,l.aZ)({name:"Signing",setup(){const e=(0,g.Z)(),t=(0,m.iH)(!1),i=(0,m.iH)(""),l=(0,m.iH)(""),a=(0,m.iH)(b.gb.getPrivateKeys),n=(0,m.Fl)((()=>b.gb.getPrivateKeys)),o=(0,m.Fl)({get:()=>b.gb.getPrivateKeys.find((e=>e.keyID===b.gb.getDefaults.signingKeyID)),set:e=>b.gb.changeDefaultSigning(null===e||void 0===e?void 0:e.keyID)}),u=()=>(0,v.mG)(this,void 0,void 0,(function*(){var t;if(null===(t=o.value)||void 0===t?void 0:t.key){const e=yield(0,y.l)(i.value,o.value.key),t=`${i.value}\n\n${e}`;l.value=t}else e.notify({type:"negative",message:"You must have a private key to sign with"})})),d=(e,t)=>{t(""!==e?()=>{const t=e.toLowerCase();a.value=n.value.filter((e=>e.userID.toLowerCase().indexOf(t)>-1))}:()=>{a.value=n.value})};return{isPwd:t,input:i,output:l,privateKeySelected:o,privateKeyOptions:a,handleSigning:u,addToClipboard:f.H,privateKeyFilterFn:d}}});var _=i(4260),k=i(4379),w=i(5269),K=i(4842),I=i(4554),q=i(8240),h=i(4615),Z=i(7208),C=i(3414),x=i(2035),D=i(7518),W=i.n(D);const F=(0,_.Z)(S,[["render",c]]),Q=F;W()(S,"components",{QPage:k.Z,QForm:w.Z,QInput:K.Z,QIcon:I.Z,QBtn:q.Z,QExpansionItem:h.Z,QSelect:Z.Z,QItem:C.Z,QItemSection:x.Z})}}]);