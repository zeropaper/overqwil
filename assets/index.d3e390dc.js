import{b as N,r as g,j as e,a as u,F as I,L as X,d as Z,e as ee,u as te}from"./react.14b2d053.js";import{P as O}from"./mantine-prism.bc5c41cb.js";import{B as re,I as oe,T as W,N as ne,a as ie,P as ae,O as le,b as se,G as ce,c as ue}from"./overqwil.4c585c3a.js";import{y as G}from"./mantine-hooks.04d4b29c.js";import{B as m,aL as C,aP as k,a2 as T,aJ as j,aw as de,H as pe,R as me,A as fe,ai as he,aC as ge,ac as A,h as ye,ag as be,s as ve,i as E,k as xe}from"./mantine-core.e5a90dc5.js";import{a as $,i as Se,c as Ce}from"./mantine-styles.040a9c26.js";import{I as we}from"./mantine-core-deps.e45037e1.js";import"./floating-ui-react-dom-interactions.4c83ca2a.js";import"./radix-ui-react-scroll-area.88ef2e89.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();var H,L=N.exports;H=L.createRoot,L.hydrateRoot;const v={colorScheme:"dark",screenEffect:!1,primaryColor:"indigo",primaryShade:6,setColorScheme:()=>{},setScreenEffect:()=>{},setPrimaryColor:()=>{},setPrimaryShade:()=>{}},F=g.exports.createContext(v);function _e({children:t}){const[n,a]=G({key:"app-context",defaultValue:{colorScheme:v.colorScheme,screenEffect:v.screenEffect,primaryColor:v.primaryColor,primaryShade:v.primaryShade}}),l=g.exports.useMemo(()=>({...n,setColorScheme:r=>a(o=>({...o,colorScheme:r})),setScreenEffect:r=>a(o=>({...o,screenEffect:r})),setPrimaryColor:r=>a(o=>({...o,primaryColor:r})),setPrimaryShade:r=>a(o=>({...o,primaryShade:r}))}),[n]);return e(F.Provider,{value:l,children:t})}const J=()=>g.exports.useContext(F),f={value:"md",type:"size",options:["xs","sm","md","lg","xl"]},x={value:!1},M={value:"default value"},B={value:"Label"},w={value:"Placeholder text"},q={value:"Description text"},_=f,P={value:"default",type:"variant",options:["filled","default"]},Pe=Object.freeze(Object.defineProperty({__proto__:null,radius:_,variant:P,defaultValue:M,placeholder:w,disabled:x,size:f},Symbol.toStringTag,{value:"Module"})),Oe=Object.freeze(Object.defineProperty({__proto__:null,description:q,label:B,defaultValue:M,placeholder:w,disabled:x,size:f,radius:_,variant:P},Symbol.toStringTag,{value:"Module"})),Te={value:78},je=Object.freeze(Object.defineProperty({__proto__:null,defaultValue:Te,description:q,label:B,placeholder:w,disabled:x,size:f,radius:_,variant:P},Symbol.toStringTag,{value:"Module"})),ze={value:7},Ie=Object.freeze(Object.defineProperty({__proto__:null,minRows:ze,description:q,label:B,defaultValue:M,placeholder:w,disabled:x,size:f,radius:_,variant:P},Symbol.toStringTag,{value:"Module"})),ke={value:"Aknowledge"},$e=f,Me={value:"default",type:"variant",options:["filled","outline","subtle","default"]},Be={skip:!0,value:"button",type:"button"},qe=Object.freeze(Object.defineProperty({__proto__:null,children:ke,radius:$e,variant:Me,type:Be,size:f},Symbol.toStringTag,{value:"Module"})),Ae={value:"Hello World"},Ee={value:1,options:[1,2,3,4,5].map(t=>t.toString())},Le=Object.freeze(Object.defineProperty({__proto__:null,children:Ae,order:Ee},Symbol.toStringTag,{value:"Module"})),De={value:"Hello World"},Re=Object.freeze(Object.defineProperty({__proto__:null,children:De,withBorder:x},Symbol.toStringTag,{value:"Module"})),Ue=Object.freeze(Object.defineProperty({__proto__:null,Input:Pe,TextInput:Oe,NumberInput:je,Textarea:Ie,Button:qe,Title:Le,Paper:Re},Symbol.toStringTag,{value:"Module"})),D=({fn:t,colors:n,colorScheme:a})=>({display:"flex",alignItems:"center",justifyContent:"center",background:`repeating-conic-gradient(${t.rgba(n.gray[a==="dark"?4:8],.07)} 0% 25%, transparent 0% 50%) 50% / 12px 12px`});function Ve({noBackground:t,children:n}){const{primaryColor:a,primaryShade:l,colorScheme:r,fn:o,spacing:s}=$();return u(m,{sx:{display:"flex",gap:o.size({size:"md",sizes:s}),justifyContent:"space-around",[o.smallerThan("md")]:{flexDirection:"column"},"& > *":{flexGrow:1}},children:[u(m,{children:[e(C,{mb:"lg",children:"Overqwil"}),e(m,{p:"lg",m:"lg",sx:t?{}:D,children:n})]}),u(m,{children:[e(C,{mb:"lg",children:"Original Mantine"}),e(m,{p:"lg",m:"lg",sx:t?{}:D,children:e(Se,{theme:{primaryColor:a,primaryShade:l,colorScheme:r},children:n})})]})]})}function We({code:t,...n}){return u(I,{children:[e(Ve,{...n}),e(O,{children:t,language:"tsx"})]})}const K=Object.freeze(Object.defineProperty({__proto__:null,Button:re,Input:oe,TextInput:W,NumberInput:ne,Textarea:ie,Paper:ae,Title:k},Symbol.toStringTag,{value:"Module"}));function Ge(t,n){return`import { Button } from '@zeropaper/overqwil';

function Demo() {
  return (
    <Button
      ${t.join(`
      `)}
    >
      ${n||"Button"}
    </Button>
  );
}`}function He(t,n){return`import { Paper } from '@zeropaper/overqwil';

function Demo() {
  return (
    <Paper
      ${t.join(`
      `)}
    >
      ${n||"Paper"}
    </Paper>
  );
}`}function Fe(t){return`import { Input } from '@zeropaper/overqwil';

function Demo() {
  return (
    <Input
      ${t.join(`
      `)}
    >
  );
}`}function Je(t){return`import { TextInput } from '@zeropaper/overqwil';

function Demo() {
  return (
    <TextInput
      ${t.join(`
      `)}
    >
  );
}`}function Ke(t){return`import { NumberInput } from '@zeropaper/overqwil';

function Demo() {
  return (
    <NumberInput
      ${t.join(`
      `)}
    >
  );
}`}function Qe(t){return`import { Textarea } from '@zeropaper/overqwil';

function Demo() {
  return (
    <Textarea
      ${t.join(`
      `)}
    >
  );
}`}function Ye(t,n){return`import { Title } from '@zeropaper/overqwil';

function Demo() {
  return (
    <Title
      ${t.join(`
      `)}
    >
      ${n||"Title"}
    </Title>
  );
}`}const Ne=Object.freeze(Object.defineProperty({__proto__:null,Button:Ge,Paper:He,Input:Fe,TextInput:Je,NumberInput:Ke,Textarea:Qe,Title:Ye},Symbol.toStringTag,{value:"Module"})),R=Ue,Xe=Ne;function Ze(t){let n;return[Object.entries(t).reduce((l,[r,o])=>{if(r==="children")return n=o,l;const s=typeof o;return s==="string"&&l.push(`${r}="${o}"`),s==="boolean"&&o&&l.push(`${r}`),s==="number"&&l.push(`${r}={${o}}`),l},[]),n]}function et(t,n){return function(){const l=Object.entries(R[t]).reduce((i,[c,d])=>(i[c]=d.value,i),{}),[r,o]=G({key:t,defaultValue:l}),s=(i,c)=>o(d=>({...d,[i]:c}));function y([i,c]){const{value:d,type:p=typeof d,options:Q=[],skip:Y=!1}=c;if(Y)return null;switch(p){case"variant":case"size":return u(m,{mb:"md",children:[e(C,{component:"label",mr:"sm",size:"sm",sx:{width:"clamp(90px, 33%, 150px)",display:"inline-block",textAlign:"right"},children:i}),e(de,{title:i,onChange:h=>s(i,h),value:r[i],data:Q.map(h=>({value:h,label:h})),size:"sm"})]},i);case"boolean":return e(j,{label:i,size:"sm",mb:"sm",onChange:()=>s(i,!r[i]),checked:!!r[i]},i);case"string":default:return e(W,{label:i,size:"sm",radius:"md",mb:"sm",onChange:({target:h})=>s(i,h.value),value:r[i]},i)}}return u(I,{children:[e(k,{children:t}),e(T,{position:"apart",grow:!0,children:e(m,{mb:"lg",children:Object.entries(R[t]).map(y)})}),e(We,{code:Xe[t](...Ze(r)),children:e(n,{...r})})]})}}const tt=Ce({logo:{maxWidth:"100%",maxHeight:"100%",aspectRatio:"1"}});function rt({children:t}){const{classes:n}=tt();return u(pe,{p:"md",height:90,sx:a=>({display:"flex",gap:a.spacing.md,alignItems:"center","& > .end":{marginLeft:"auto"}}),children:[e("a",{style:{aspectRatio:"1",height:"100%"},href:"/",children:e(le,{className:n.logo})}),t]})}function ot(){const{colorScheme:t,setColorScheme:n,screenEffect:a,setScreenEffect:l,setPrimaryColor:r,primaryShade:o,setPrimaryShade:s}=J(),[y,i]=g.exports.useState(!1),c=$(),d=Object.keys(c.colors).map(p=>e(me,{title:p,sx:p===c.primaryColor?{border:"2px solid currentColor"}:{},size:c.spacing.lg,onClick:()=>r(p),color:c.fn.themeColor(p,c.fn.primaryShade(typeof o[t]=="number"?o[t]:o))},p));return u(I,{children:[e(fe,{title:"Settings",className:"end",onClick:()=>i(!0),children:e(we,{})}),u(he,{opened:y,onClose:()=>i(!1),overlayColor:t==="dark"?c.colors.dark[9]:c.colors.gray[2],overlayOpacity:.25,overlayBlur:3,children:[u(T,{mb:"md",position:"apart",children:[e(j,{label:"Screen Effect",checked:a,onChange:()=>l(!a)}),e(j,{label:"Dark Mode",checked:t==="dark",onChange:()=>n(t==="dark"?"light":"dark")})]}),u(m,{mb:"md",children:[e(C,{component:"label",children:"Primary Color"}),e(T,{position:"center",my:"sm",spacing:"xs",noWrap:!0,children:d})]}),e(ge,{sx:{width:"100%"},label:"Primary Shade",value:c.fn.primaryShade(),onChange:p=>s(p),min:0,max:9})]})]})}function nt(){return e(A,{withPadding:!0,children:Object.keys(K).map(t=>e(A.Item,{children:e(ye,{component:X,to:`/${t.toLowerCase()}`,children:t})},t))})}function it({children:t}){const{colorScheme:n,screenEffect:a,primaryColor:l,primaryShade:r}=J(),o=$(),[s,y]=g.exports.useState(!1),i=u(rt,{children:[e(be,{largerThan:"sm",styles:{display:"none"},children:e(ve,{opened:s,onClick:()=>y(d=>!d),size:"sm",color:o.colors.gray[6],mr:"xl"})}),e(k,{children:"Overqwil"}),e(ot,{})]}),c=e(E,{hiddenBreakpoint:"sm",hidden:!s,width:{sm:200,lg:300},children:e(E.Section,{children:e(nt,{})})});return u(se,{theme:{colorScheme:n,primaryColor:l,primaryShade:r},withNormalizeCSS:!0,withGlobalStyles:!0,children:[e(ce,{noScreenEffect:!a}),e(xe,{header:i,navbarOffsetBreakpoint:"sm",navbar:c,children:t})]})}const{Box:at,Text:S,Title:b,Anchor:U}=ue;function lt(){return u(at,{sx:{maxWidth:800,marginLeft:"auto",marginRight:"auto"},children:[e(b,{pb:"xl",mb:"lg",children:"A futuristic take on the Mantine UI library."}),u(S,{size:"lg",children:["This project is aimed at providing a futuristic theming system based on"," ",e(U,{href:"https://mantine.dev",children:"Mantine UI"})," components for React."]}),u(S,{size:"lg",children:["It is also aimed as an example on how to customize a UI system like Mantine UI or ",e(U,{href:"https://mui.com/",children:"Material UI"})," ","(since they are similar) with a company branding.",e("br",{}),"The project is still in its early stages, but you can already see it in action."]}),e(b,{order:2,mt:"xl",mb:"lg",children:"Usage"}),e(S,{size:"lg",children:"Overqwil is aimed at being used the same way as Mantine UI, but with a different theme."}),e(b,{order:3,mt:"xl",mb:"lg",children:"Add the provider"}),e(O,{language:"tsx",children:`import { OverqwilProvider } from '@zeropaper/overqwil';

function App() {
  return (
    <OverqwilProvider theme={/* optional customization */}>
      {/* Your app content */}
    </OverqwilProvider>
  );
}`}),e(b,{order:3,mt:"xl",mb:"lg",children:"Use the components"}),e(O,{language:"tsx",children:`import { Button } from '@zeropaper/overqwil';

function SomeComponent() {
  return <Button>Click me</Button>;
}`}),e(b,{order:2,mt:"xl",mb:"lg",children:"Technique used"}),e(S,{size:"lg",children:"In order to customize the theme is a combination of SVG images generation, style overrides and CSS variables."})]})}function z({component:t,...n}){return e(_e,{children:e(it,{children:e(t,{...n})})})}function st(){const t=te();return console.error(t),e("div",{children:"Dang!"})}const V=e(z,{component:st}),ct=Z([{path:"/",element:e(z,{component:lt}),errorElement:V},...Object.entries(K).map(([t,n])=>({path:`/${t.toLowerCase()}`,element:e(z,{component:et(t,n)}),errorElement:V}))],{basename:"/"});function ut(){return e(ee,{router:ct})}function dt(){return typeof window<"u"&&window._appContainer||(window._appContainer=H(document.getElementById("root"))),window._appContainer}dt().render(e(g.exports.StrictMode,{children:e(ut,{})}));
