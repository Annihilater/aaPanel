import{_ as t}from"./index68.js?v=1721298337096";import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{j as s,ab as l,B as i}from"./index.js?v=1721298337096";import{aB as r,R as u}from"./site2.js?v=1721298337096";import{l as n,ad as o,d,r as f,f as p,S as _,Z as c,P as m,V as x,_ as v,W as h,q as g,a3 as b}from"./vue.js?v=1721298337096";import{_ as k}from"./Checkbox.js?v=1721298337096";const S={class:"w-300px"},C={class:"w-300px"},w={class:"w-300px"},$={class:"flex flex-col"},j=v("br",null,null,-1),H=n({__name:"form",props:{site:{}},emits:["changeHotlink"],setup(n,{expose:H,emit:y}){const{t:R}=o(),T=y,U=d(n,"site"),E=f(null),L=p({fix:"",domains:"",return_rule:"",status:!1,http_status:!1}),P={fix:{trigger:["blur","change"],validator:()=>""!==L.fix.trim()||new Error(R("Site.RulesError.Suffix"))},return_rule:{trigger:["blur","change"],validator:()=>""!==L.return_rule.trim()||new Error(R("Site.RulesError.AntiTheft"))}},A=()=>{q()},B=()=>{q()},q=async()=>{var t;await(null==(t=E.value)?void 0:t.validate()),await r({id:U.value.id,name:U.value.name,fix:L.fix,domains:L.domains.trim().split("\n").join(","),return_rule:L.return_rule,status:L.status,http_status:L.http_status}),T("changeHotlink",L.status),z()},z=async()=>{const{message:t}=await u({id:U.value.id,name:U.value.name});s(t)&&(L.fix=t.fix,L.domains=t.domains.split(",").join("\n"),L.return_rule=t.return_rule,L.status=t.status,L.http_status="true"===t.http_status||!0===t.http_status)};return z(),H({init:z}),(s,r)=>{const u=l,n=e,o=k,d=i,f=a,p=t;return _(),c("div",null,[m(f,{ref_key:"formRef",ref:E,class:"px-8px",model:h(L),rules:P},{default:x((()=>[m(n,{label:s.$t("Site.Lable.Suffix"),path:"fix"},{default:x((()=>[v("div",S,[m(u,{value:h(L).fix,"onUpdate:value":r[0]||(r[0]=t=>h(L).fix=t),disabled:h(L).status,placeholder:""},null,8,["value","disabled"])])])),_:1},8,["label"]),m(n,{label:s.$t("Site.Lable.Access")},{default:x((()=>[v("div",C,[m(u,{value:h(L).domains,"onUpdate:value":r[1]||(r[1]=t=>h(L).domains=t),type:"textarea",autosize:{minRows:6,maxRows:6},placeholder:""},null,8,["value"])])])),_:1},8,["label"]),m(n,{label:s.$t("Site.Lable.Response"),path:"return_rule"},{default:x((()=>[v("div",w,[m(u,{value:h(L).return_rule,"onUpdate:value":r[2]||(r[2]=t=>h(L).return_rule=t),disabled:h(L).status,placeholder:""},null,8,["value","disabled"])])])),_:1},8,["label"]),m(n,{label:" "},{default:x((()=>[v("div",$,[m(o,{checked:h(L).status,"onUpdate:checked":[r[3]||(r[3]=t=>h(L).status=t),A]},{default:x((()=>[g(b(s.$t("Site.Config.HotlinkConfig.Protection")),1)])),_:1},8,["checked"]),m(o,{checked:h(L).http_status,"onUpdate:checked":[r[4]||(r[4]=t=>h(L).http_status=t),B],class:"mt-16px"},{default:x((()=>[g(b(s.$t("Site.Config.HotlinkConfig.HTTP")),1)])),_:1},8,["checked"])])])),_:1}),m(n,{label:" ","show-feedback":!1},{default:x((()=>[m(d,{type:"primary",onClick:q},{default:x((()=>[g(b(s.$t("Site.Cert.Save")),1)])),_:1})])),_:1})])),_:1},8,["model"]),m(p,{class:"mt-20px"},{default:x((()=>[v("li",null,[g(b(s.$t("Site.Config.HotlinkConfig.Tips.0")),1),j,g(" "+b(s.$t("Site.Config.HotlinkConfig.Tips.1")),1)]),v("li",null,b(s.$t("Site.Config.HotlinkConfig.Tips.2")),1),v("li",null,b(s.$t("Site.Config.HotlinkConfig.Tips.3")),1)])),_:1})])}}});export{H as _};
