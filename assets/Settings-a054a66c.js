import{u as le}from"./settings-c4a625c0.js";import{p as I,I as A,a4 as ae,m as J,a5 as te,C as oe,v as B,X as T,J as $,c as f,a6 as ne,a7 as ue,L as c,x as G,h as t,o as se,a8 as ie,a9 as E,r as re,Y as X,y as de,Z as ce,aa as fe,S as _,ab as ve,ac as me,ad as L,N as Ve,ae as N,n as ye,af as be,R as Y,s as Se,d as x,e as Ce,f as b,V as ge,u as U,ag as M,i as d,a1 as j,a2 as _e,t as Ie}from"./index-e430ecb0.js";import{V as P,a as he}from"./VRow-538bab23.js";import{V as Z,b as ke,c as q,d as Re}from"./VInput-cbb3f9ad.js";const z=Symbol.for("vuetify:selection-control-group"),w=I({color:String,disabled:Boolean,defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:A,trueIcon:A,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:ae},...J(),...te(),...oe()},"SelectionControlGroup"),Pe=I({...w({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ae=B()({name:"VSelectionControlGroup",props:Pe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:i}=s;const l=T(e,"modelValue"),o=$(),v=f(()=>e.id||`v-selection-control-group-${o}`),n=f(()=>e.name||v.value),a=new Set;return ne(z,{modelValue:l,forceUpdate:()=>{a.forEach(u=>u())},onForceUpdate:u=>{a.add(u),se(()=>{a.delete(u)})}}),ue({[e.defaultsTarget]:{color:c(e,"color"),disabled:c(e,"disabled"),density:c(e,"density"),error:c(e,"error"),inline:c(e,"inline"),modelValue:l,multiple:f(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:c(e,"falseIcon"),trueIcon:c(e,"trueIcon"),readonly:c(e,"readonly"),ripple:c(e,"ripple"),type:c(e,"type"),valueComparator:c(e,"valueComparator")}}),G(()=>{var u;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(u=i.default)==null?void 0:u.call(i)])}),{}}}),K=I({label:String,trueValue:null,falseValue:null,value:null,...J(),...w()},"VSelectionControl");function Be(e){const s=ve(z,void 0),{densityClasses:i}=me(e),l=T(e,"modelValue"),o=f(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=f(()=>e.falseValue!==void 0?e.falseValue:!1),n=f(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=f({get(){const V=s?s.modelValue.value:l.value;return n.value?V.some(m=>e.valueComparator(m,o.value)):e.valueComparator(V,o.value)},set(V){if(e.readonly)return;const m=V?o.value:v.value;let r=m;n.value&&(r=V?[...L(l.value),m]:L(l.value).filter(y=>!e.valueComparator(y,o.value))),s?s.modelValue.value=r:l.value=r}}),{textColorClasses:u,textColorStyles:g}=Ve(f(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=f(()=>a.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:i,trueValue:o,falseValue:v,model:a,textColorClasses:u,textColorStyles:g,icon:h}}const Q=B()({name:"VSelectionControl",directives:{Ripple:ie},inheritAttrs:!1,props:K(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const{group:o,densityClasses:v,icon:n,model:a,textColorClasses:u,textColorStyles:g,trueValue:h}=Be(e),V=$(),m=f(()=>e.id||`input-${V}`),r=E(!1),y=E(!1),S=re();o==null||o.onForceUpdate(()=>{S.value&&(S.value.checked=a.value)});function k(C){r.value=!0,(!N||N&&C.target.matches(":focus-visible"))&&(y.value=!0)}function R(){r.value=!1,y.value=!1}function p(C){e.readonly&&o&&ye(()=>o.forceUpdate()),a.value=C.target.checked}return G(()=>{var D,O;const C=l.label?l.label({label:e.label,props:{for:m.value}}):e.label,[W,ee]=X(i);return t("div",_({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},v.value,e.class]},W,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",u.value],style:g.value},[(D=l.default)==null?void 0:D.call(l),de(t("div",{class:["v-selection-control__input"]},[n.value&&t(fe,{key:"icon",icon:n.value},null),t("input",_({ref:S,checked:a.value,disabled:e.disabled,id:m.value,onBlur:R,onFocus:k,onInput:p,"aria-disabled":e.readonly,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},ee),null),(O=l.input)==null?void 0:O.call(l,{model:a,textColorClasses:u,textColorStyles:g,props:{onFocus:k,onBlur:R,id:m.value}})]),[[ce("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&t(Z,{for:m.value,clickable:!0},{default:()=>[C]})])}),{isFocused:r,input:S}}}),Ge=I({...K({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),F=B()({name:"VRadio",props:Ge(),setup(e,s){let{slots:i}=s;return G(()=>t(Q,_(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),i)),{}}});const pe=I({height:{type:[Number,String],default:"auto"},...ke(),...be(w(),["multiple"]),trueIcon:{type:A,default:"$radioOn"},falseIcon:{type:A,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),H=B()({name:"VRadioGroup",inheritAttrs:!1,props:pe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const o=$(),v=f(()=>e.id||`radio-group-${o}`),n=T(e,"modelValue");return G(()=>{const[a,u]=X(i),[g,h]=q.filterProps(e),[V,m]=Q.filterProps(e),r=l.label?l.label({label:e.label,props:{for:v.value}}):e.label;return t(q,_({class:["v-radio-group",e.class],style:e.style},a,g,{modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,id:v.value}),{...l,default:y=>{let{id:S,messagesId:k,isDisabled:R,isReadonly:p}=y;return t(Y,null,[r&&t(Z,{id:S.value},{default:()=>[r]}),t(Ae,_(V,{id:S.value,"aria-describedby":k.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:R.value,readonly:p.value,"aria-labelledby":r?S.value:void 0,multiple:!1},u,{modelValue:n.value,"onUpdate:modelValue":C=>n.value=C}),l)])}})}),{}}}),xe=d("h1",null,"通知",-1),Ue=d("h1",null,"設定",-1),Fe=d("thead",null,[d("tr",null,[d("th",null,"名稱"),d("th",null,"試聽"),d("th",null,"選擇")])],-1),Te=["src"],Ee={__name:"Settings",setup(e){const s=le(),{selectedAlarm:i,alarms:l,notify:o}=Se(s);return(v,n)=>(x(),Ce(ge,null,{default:b(()=>[t(he,null,{default:b(()=>[t(P,{cols:"12"},{default:b(()=>[xe]),_:1}),t(P,{cols:"12"},{default:b(()=>[t(H,{inline:"",modelValue:U(o),"onUpdate:modelValue":n[0]||(n[0]=a=>M(o)?o.value=a:null)},{default:b(()=>[t(F,{label:"開啟",value:!0}),t(F,{label:"關閉",value:!1})]),_:1},8,["modelValue"])]),_:1}),t(P,{cols:"12"},{default:b(()=>[Ue]),_:1}),t(P,{cols:"12"},{default:b(()=>[t(Re,null,{default:b(()=>[Fe,d("tbody",null,[(x(!0),j(Y,null,_e(U(l),a=>(x(),j("tr",{key:a.id},[d("td",null,Ie(a.name),1),d("td",null,[d("audio",{src:a.file,controls:""},null,8,Te)]),d("td",null,[t(H,{modelValue:U(i),"onUpdate:modelValue":n[1]||(n[1]=u=>M(i)?i.value=u:null)},{default:b(()=>[t(F,{value:a.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Ee as default};
