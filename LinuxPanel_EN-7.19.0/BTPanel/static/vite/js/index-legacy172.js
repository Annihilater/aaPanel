System.register(["./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./mail-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185"],(function(a,l){"use strict";var e,i,o,t,n,d,s,u,r,m,_,c,p,v,x,b,f,w,y,g,M,h;return{setters:[a=>{e=a._},a=>{i=a._},a=>{o=a._},a=>{t=a.a1,n=a.a2},a=>{d=a.h,s=a.J},a=>{u=a.d,r=a.W,m=a.r,_=a.j,c=a.O,p=a.P,v=a.M,x=a.Y,b=a.Q,f=a.R,w=a.Z},a=>{y=a.ad,g=a.bG,M=a.bl,h=a.bL},null,null,null],execute:function(){const l={class:"p-20px"},j={class:"w-320px"},q={class:"w-320px"},D={class:"w-320px"},$={class:"w-100px ml-20px"},E={class:"w-320px"},U={class:"text-error"};a("default",u({__name:"index",props:{row:{},isEdit:{type:Boolean}},emits:["refresh"],setup(a,{expose:u,emit:B}){const G=a,P=B,{t:I}=r(),R=m(null),k=_({domain:"",a_record:"",quota:5,quota_unit:"GB",mailboxes:50,email:"",ips:""}),C=[{label:"GB",value:"GB"},{label:"MB",value:"MB"}],H={domain:{trigger:["blur","input"],validator:()=>""!==k.domain.trim()||new Error(I("Mail.Domain.index_27"))}},J=()=>({domain:k.domain,a_record:k.a_record,ips:k.ips,quota:k.quota+" "+k.quota_unit,mailboxes:k.mailboxes,email:k.email});return(()=>{const{isEdit:a,row:l}=G;if(a&&l){k.domain=l.domain,k.a_record=l.a_record;const a=d(l.quota);k.quota=s(a.split(" ")[0]),k.quota_unit=a.split(" ")[1],k.mailboxes=l.mailboxes,k.email=l.email}})(),u({onConfirm:async()=>{await(R.value?.validate());const{isEdit:a}=G;a?await t(J()):await n(J()),P("refresh")}}),(a,t)=>{const n=y,d=g,s=o,u=M,r=h,m=i,_=e;return c(),p("div",l,[v(m,{ref_key:"formRef",ref:R,model:f(k),rules:H},{default:x((()=>[v(d,{label:a.$t("Mail.Domain.index_3"),path:"domain"},{default:x((()=>[b("div",j,[v(n,{value:f(k).domain,"onUpdate:value":t[0]||(t[0]=a=>f(k).domain=a),disabled:a.isEdit,placeholder:a.$t("Mail.Domain.index_18")},null,8,["value","disabled","placeholder"])])])),_:1},8,["label"]),v(d,{label:a.$t("Mail.Domain.index_19")},{default:x((()=>[b("div",q,[v(n,{value:f(k).a_record,"onUpdate:value":t[1]||(t[1]=a=>f(k).a_record=a),disabled:a.isEdit,placeholder:a.$t("Mail.Domain.index_20")},null,8,["value","disabled","placeholder"])])])),_:1},8,["label"]),v(d,{label:"IPs"},{default:x((()=>[b("div",D,[v(s,{value:f(k).ips,"onUpdate:value":t[2]||(t[2]=a=>f(k).ips=a),rows:3,disabled:a.isEdit,placeholder:"请输入IPs，一行一个"},null,8,["value","disabled"])])])),_:1}),v(d,{label:a.$t("Mail.Domain.index_21")},{default:x((()=>[v(u,{value:f(k).quota,"onUpdate:value":t[3]||(t[3]=a=>f(k).quota=a),class:"w-200px",min:0,"show-button":!1},null,8,["value"]),b("div",$,[v(r,{value:f(k).quota_unit,"onUpdate:value":t[4]||(t[4]=a=>f(k).quota_unit=a),options:C},null,8,["value"])])])),_:1},8,["label"]),v(d,{label:a.$t("Mail.Domain.index_22")},{default:x((()=>[v(u,{value:f(k).mailboxes,"onUpdate:value":t[5]||(t[5]=a=>f(k).mailboxes=a),class:"w-320px",min:0,"show-button":!1},null,8,["value"])])),_:1},8,["label"]),v(d,{label:a.$t("Mail.Domain.index_7")},{default:x((()=>[b("div",E,[v(n,{value:f(k).email,"onUpdate:value":t[6]||(t[6]=a=>f(k).email=a),placeholder:a.$t("Mail.Domain.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"]),v(_,null,{default:x((()=>[b("li",U,w(a.$t("Mail.Domain.index_24")),1),b("li",null,w(a.$t("Mail.Domain.index_25")),1),b("li",null,w(a.$t("Mail.Domain.index_26")),1)])),_:1})])}}}))}}}));