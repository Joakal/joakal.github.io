"use strict";(self["webpackChunksignedmail"]=self["webpackChunksignedmail"]||[]).push([[243],{243:(e,l,t)=>{t.r(l),t.d(l,{default:()=>K});var n=t(3673),i=t(2323);const a=(0,n.Uk)(" SignedMail "),o={class:"flex flex-center"};function s(e,l,t,s,r,u){const c=(0,n.up)("q-btn"),p=(0,n.up)("q-toolbar-title"),d=(0,n.up)("GlobalPublicKey"),m=(0,n.up)("q-toolbar"),g=(0,n.up)("q-header"),w=(0,n.up)("NavTitle"),k=(0,n.up)("q-icon"),b=(0,n.up)("q-item-section"),f=(0,n.up)("q-item"),y=(0,n.up)("q-expansion-item"),v=(0,n.up)("EssentialLink"),_=(0,n.up)("q-list"),h=(0,n.up)("q-drawer"),q=(0,n.up)("router-view"),D=(0,n.up)("q-page-container"),W=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(W,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[a])),_:1}),(0,n.Wm)(d)])),_:1})])),_:1}),(0,n.Wm)(h,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=l=>e.leftDrawerOpen=l),"show-if-above":"",bordered:"",class:"bg-grey-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w),(0,n.Wm)(y,{"expand-icon-toggle":"","expand-separator":"",icon:"mail",label:"Change Inbox"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.uniqueUsers,(l=>((0,n.wg)(),(0,n.j4)(f,(0,n.dG)({key:l.keyID,onClick:t=>e.selectUser(l.keyID)},l,{clickable:"",exact:""}),{default:(0,n.w5)((()=>[(0,n.Wm)(b,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{name:"phone_locked"})])),_:1}),(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(l.userID),1)])),_:2},1024)])),_:2},1040,["onClick"])))),128))])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.essentialLinks,(e=>((0,n.wg)(),(0,n.j4)(v,(0,n.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,n._)("div",o,[(0,n.Wm)(D,{style:{"max-width":"1200px"},class:"fit"},{default:(0,n.w5)((()=>[(0,n.Wm)(q)])),_:1})])])),_:1})}var r=t(1959),u=t(1055),c=t(9582),p=t(2079),d=t(27);const m=[{title:"Encrypt",icon:"lock",link:"/encrypt"},{title:"Decrypt",icon:"lock_open",link:"/decrypt"},{title:"Signing",icon:"create",link:"/signing"},{title:"Verifying",icon:"how_to_reg",link:"/verifying"},{title:"Public Keys",icon:"public",link:"/public"},{title:"Private Keys",icon:"security",link:"/private"},{title:"Add Key",icon:"vpn_key",link:"/add"},{title:"Help",icon:"rss_feed",link:"/help"},{title:"About",icon:"record_voice_over",link:"/about"}],g=(0,n.aZ)({name:"MainLayout",components:{EssentialLink:(0,n.RC)((()=>t.e(767).then(t.bind(t,5767)))),GlobalPublicKey:(0,n.RC)((()=>Promise.all([t.e(736),t.e(64),t.e(854)]).then(t.bind(t,6854)))),NavTitle:(0,n.RC)((()=>t.e(784).then(t.bind(t,8784))))},setup(){const e=(0,c.tv)(),l=(0,r.iH)(!1),t=(0,p.a7)(),n=(0,d.DN)();t&&p.gb.initialiseKeys(t),n&&d.Vu.initialiseMessages(n);const i=window.localStorage.getItem(u.xc);i&&(window.localStorage.removeItem(u.xc),e.push({path:JSON.parse(i)}));const a=m.map((l=>Object.assign(Object.assign({},l),{link:`${e.options.history.base}${l.link}`}))),o=l=>{e.push({name:"chats",params:{myPrivateKeyID:l}})};return{essentialLinks:a,leftDrawerOpen:l,toggleLeftDrawer(){l.value=!l.value},uniqueUsers:(0,r.Fl)((()=>p.gb.getPrivateKeys)),selectUser:o}}});var w=t(4260),k=t(3066),b=t(3812),f=t(9570),y=t(8240),v=t(3747),_=t(2428),h=t(7011),q=t(4615),D=t(3414),W=t(2035),Z=t(4554),x=t(2652),Q=t(7518),C=t.n(Q);const I=(0,w.Z)(g,[["render",s]]),K=I;C()(g,"components",{QLayout:k.Z,QHeader:b.Z,QToolbar:f.Z,QBtn:y.Z,QToolbarTitle:v.Z,QDrawer:_.Z,QList:h.Z,QExpansionItem:q.Z,QItem:D.Z,QItemSection:W.Z,QIcon:Z.Z,QPageContainer:x.Z})}}]);