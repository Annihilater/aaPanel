const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index198.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang.js?v=1732601582185","js/naive.js?v=1732601582185","js/vue.js?v=1732601582185","js/__commonjsHelpers__.js?v=1732601582185","js/common.js?v=1732601582185","js/page_layout.js?v=1732601582185","js/public.js?v=1732601582185","css/public.css?v=1732601582185","css/page_layout.css?v=1732601582185","js/index.js?v=1732601582185","css/index80.css?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185","css/index14.css?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185","js/useModal3.js?v=1732601582185","css/index71.css?v=1732601582185"])))=>i.map(i=>d[i]);
import{a8 as e,i as a,I as t,c as s}from"./page_layout.js?v=1732601582185";import{_ as i}from"./index.js?v=1732601582185";import{_ as n}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{h as o,d as r,f as d}from"./public.js?v=1732601582185";import{u as p}from"./useModal3.js?v=1732601582185";import{bo as u,bL as _,bJ as c,aa as f}from"./naive.js?v=1732601582185";import{d as m,W as g,M as b,O as x,X as W,Y as w,c as y,Z as h,R as A,a6 as v}from"./vue.js?v=1732601582185";const j=()=>e.post("/plugin?action=a&name=btwaf&s=reg_domains"),O=t=>e.post("/plugin?action=a&name=btwaf&s=add_reg_tions",t,{requestOptions:{loading:a.global.t("Waf.Api.area_32"),successMessage:!0}}),k=t=>e.post("/plugin?action=a&name=btwaf&s=".concat(0===t.select?"edit_reg_tions":"edit_city"),{id:t.id,open:t.open,status:t.status},{requestOptions:{loading:a.global.t("Waf.Api.area_34"),successMessage:!0}}),M=m({__name:"index",setup(m){const j=v((()=>s((()=>import("./index198.js?v=1732601582185")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])))),{t:O}=g(),M=o(O("Waf.Area.index_1"),{onRefresh:()=>{C()}}),q=()=>{M.show=!0},{table:E,columns:L,setLoading:z}=r([{key:"region",title:O("Waf.Area.index_2"),minWidth:300,render:e=>Object.entries(e.region).filter((([,e])=>1==e)).map((([e])=>e)).join(", ")},{key:"open",title:O("Waf.Area.index_3"),minWidth:80,render:(e,a)=>b(u,{value:e.open,size:"small",onUpdateValue:async t=>{await k({select:e.select,id:a,open:t,status:e.status}),e.open=t}},null)},{key:"status",title:O("Waf.Area.index_4"),width:"14%",render:(e,a)=>b("div",{class:"w-210px"},[b(_,{value:e.status,size:"small",options:[{label:O("Waf.Area.index_5"),value:200},{label:O("Waf.Area.index_6"),value:404},{label:O("Waf.Area.index_7"),value:403},{label:O("Waf.Area.index_8"),value:444},{label:O("Waf.Area.index_9"),value:502},{label:O("Waf.Area.index_10"),value:503}],onUpdateValue:async t=>{await k({select:e.select,id:a,open:e.open,status:t}),e.status=t}},null)])},{key:"site",title:O("Waf.Area.index_11"),minWidth:260,render:e=>Object.entries(e.site).filter((([,e])=>1==e)).map((([e])=>"allsite"===e?O("Waf.Area.index_12"):e)).join(", ")},{key:"types",title:O("Waf.Area.index_13"),minWidth:90,render:e=>"refuse"===e.types?O("Waf.Area.index_15"):O("Waf.Area.index_14")},d({width:120,options:(t,s)=>[{label:O("Waf.Area.index_16"),onClick:()=>{p({path:"/www/server/btwaf/html/".concat(t.reqfile)})}},{label:O("Public.Btn.Del"),onClick:async()=>{var i;await(i={select:t.select,id:s},e.post("/plugin?action=a&name=btwaf&s=".concat(0===i.select?"del_reg_tions":"del_city"),{id:i.id},{requestOptions:{loading:a.global.t("Waf.Api.area_33"),successMessage:!0}})),C()}}]})]),C=async()=>{try{z(!0);const{message:a}=await e.post("/btwaf/get_reg_tions.json");t(a)&&(a.forEach(((e,a)=>{e.forEach((e=>{e.select=a}))})),E.data=a.reduce(((e,a)=>e.concat(a)),[]))}finally{z(!1)}};return C(),(e,a)=>{const t=f,s=l,o=n,r=i,d=c;return x(),W(d,{class:"p-16px"},{default:w((()=>[b(o,null,{toolsLeft:w((()=>[b(t,{type:"primary",onClick:q},{default:w((()=>[y(h(e.$t("Waf.Area.index_1")),1)])),_:1})])),table:w((()=>[b(s,{loading:A(E).loading,data:A(E).data,columns:A(L)},null,8,["loading","data","columns"])])),_:1}),b(r,{show:A(M).show,"onUpdate:show":a[0]||(a[0]=e=>A(M).show=e),title:A(M).title,data:A(M).data,width:720,"min-height":454,footer:!0,component:A(j)},null,8,["show","title","data","component"])])),_:1})}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{O as a,j as g,q as i};