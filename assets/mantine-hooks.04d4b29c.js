import{r as c,R as F}from"./react.14b2d053.js";const C=["mousedown","touchstart"];function ge(e,t,n){const o=c.exports.useRef();return c.exports.useEffect(()=>{const r=s=>{const{target:u}=s!=null?s:{};if(Array.isArray(n)){const i=(u==null?void 0:u.hasAttribute("data-ignore-outside-clicks"))||!document.body.contains(u);n.every(a=>!!a&&!a.contains(u))&&!i&&e()}else o.current&&!o.current.contains(u)&&e()};return(t||C).forEach(s=>document.addEventListener(s,r)),()=>{(t||C).forEach(s=>document.removeEventListener(s,r))}},[o,e,n]),o}function ve({timeout:e=2e3}={}){const[t,n]=c.exports.useState(null),[o,r]=c.exports.useState(!1),[s,u]=c.exports.useState(null),i=m=>{clearTimeout(s),u(setTimeout(()=>r(!1),e)),r(m)};return{copy:m=>{"clipboard"in navigator?navigator.clipboard.writeText(m).then(()=>i(!0)).catch(l=>n(l)):n(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{r(!1),n(null),clearTimeout(s)},error:t,copied:o}}function W(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function _(e,t){return typeof t=="boolean"?t:typeof window<"u"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function B(e,t,{getInitialValueInEffect:n}={getInitialValueInEffect:!0}){const[o,r]=c.exports.useState(n?!1:_(e,t)),s=c.exports.useRef();return c.exports.useEffect(()=>{if("matchMedia"in window)return s.current=window.matchMedia(e),r(s.current.matches),W(s.current,u=>r(u.matches))},[e]),o}function R(e,t,n){return Math.min(Math.max(e,t),n)}const H=typeof document<"u"?c.exports.useLayoutEffect:c.exports.useEffect;function U(e,t){const n=c.exports.useRef(!1);c.exports.useEffect(()=>()=>{n.current=!1},[]),c.exports.useEffect(()=>{if(n.current)return e();n.current=!0},t)}function xe({opened:e,shouldReturnFocus:t=!0}){const n=c.exports.useRef(),o=()=>{var r;n.current&&"focus"in n.current&&typeof n.current.focus=="function"&&((r=n.current)==null||r.focus())};return U(()=>{let r=-1;const s=u=>{u.key==="Tab"&&window.clearTimeout(r)};return document.addEventListener("keydown",s),e?n.current=document.activeElement:t&&(r=window.setTimeout(o,10)),()=>{window.clearTimeout(r),document.removeEventListener("keydown",s)}},[e,t]),o}const $=/input|select|textarea|button|object/,M="a, input, select, textarea, button, object, [tabindex]";function k(e){return e.style.display==="none"}function j(e){if(e.getAttribute("aria-hidden")||e.getAttribute("hidden")||e.getAttribute("type")==="hidden")return!1;let n=e;for(;n&&n!==document.body;){if(k(n))return!1;n=n.parentNode}return!0}function N(e){let t=e.getAttribute("tabindex");return t===null&&(t=void 0),parseInt(t,10)}function L(e){const t=e.nodeName.toLowerCase(),n=!Number.isNaN(N(e));return($.test(t)&&!e.disabled||e instanceof HTMLAnchorElement&&e.href||n)&&j(e)}function P(e){const t=N(e);return(Number.isNaN(t)||t>=0)&&L(e)}function q(e){return Array.from(e.querySelectorAll(M)).filter(P)}function z(e,t){const n=q(e);if(!n.length){t.preventDefault();return}if(!(n[t.shiftKey?0:n.length-1]===document.activeElement||e===document.activeElement))return;t.preventDefault();const s=n[t.shiftKey?n.length-1:0];s&&s.focus()}function J(e,t="body > :not(script)"){const n=Array.from(document.querySelectorAll(t)).map(o=>{if(o.contains(e))return;const r=o.getAttribute("aria-hidden");return(r===null||r==="false")&&o.setAttribute("aria-hidden","true"),{node:o,ariaHidden:r}});return()=>{n.forEach(o=>{!o||(o.ariaHidden===null?o.node.removeAttribute("aria-hidden"):o.node.setAttribute("aria-hidden",o.ariaHidden))})}}function Ee(e=!0){const t=c.exports.useRef(),n=c.exports.useRef(null),o=c.exports.useCallback(r=>{if(!!e)if(n.current&&n.current(),r){const s=u=>{n.current=J(u);let i=r.querySelector("[data-autofocus]");if(!i){const f=Array.from(r.querySelectorAll(M));i=f.find(P)||f.find(L)||null,!i&&L(r)&&(i=r)}i&&i.focus({preventScroll:!0})};setTimeout(()=>{r.ownerDocument&&s(r)}),t.current=r}else t.current=null},[e]);return c.exports.useEffect(()=>{if(!e)return;const r=s=>{s.key==="Tab"&&t.current&&z(t.current,s)};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[e]),o}const K=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,V=F["useId".toString()]||(()=>{});function Y(){const[e,t]=c.exports.useState("");return H(()=>{t(K())},[]),e}function Q(){const e=V();return e?`mantine-${e.replace(/:/g,"")}`:""}function Se(e){return typeof e=="string"?e:Q()||Y()}function T(e,t,n){c.exports.useEffect(()=>(window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)),[])}function X(e,t){try{return JSON.stringify(e)}catch{throw new Error(`@mantine/hooks ${t}: Failed to serialize the value`)}}function G(e){try{return JSON.parse(e)}catch{return e}}function Z(e,t){const n=e==="localStorage"?"mantine-local-storage":"mantine-session-storage";return function({key:r,defaultValue:s=void 0,getInitialValueInEffect:u=!0,deserialize:i=G,serialize:f=a=>X(a,t)}){const a=c.exports.useCallback(d=>{if(typeof window>"u"||!(e in window)||d)return s!=null?s:"";const w=window[e].getItem(r);return w!==null?i(w):s!=null?s:""},[r,s]),[m,l]=c.exports.useState(a(u)),g=c.exports.useCallback(d=>{d instanceof Function?l(w=>{const v=d(w);return window[e].setItem(r,f(v)),window.dispatchEvent(new CustomEvent(n,{detail:{key:r,value:d(w)}})),v}):(window[e].setItem(r,f(d)),window.dispatchEvent(new CustomEvent(n,{detail:{key:r,value:d}})),l(d))},[r]),p=c.exports.useCallback(()=>{window[e].removeItem(r)},[]);return T("storage",d=>{var w;d.storageArea===window[e]&&d.key===r&&l(i((w=d.newValue)!=null?w:void 0))}),T(n,d=>{d.detail.key===r&&l(d.detail.value)}),c.exports.useEffect(()=>{s!==void 0&&m===void 0&&g(s)},[s,m,g]),c.exports.useEffect(()=>{u&&l(a())},[]),[m===void 0?s:m,g,p]}}function be(e){return Z("localStorage","use-local-storage")(e)}function ee(e,t){typeof e=="function"?e(t):typeof e=="object"&&e!==null&&"current"in e&&(e.current=t)}function te(...e){return t=>{e.forEach(n=>ee(n,t))}}function ye(...e){return c.exports.useCallback(te(...e),e)}const Re=e=>({x:R(e.x,0,1),y:R(e.y,0,1)});function Te(e,t,n="ltr"){const o=c.exports.useRef(),r=c.exports.useRef(!1),s=c.exports.useRef(!1),u=c.exports.useRef(0),[i,f]=c.exports.useState(!1);return c.exports.useEffect(()=>{r.current=!0},[]),c.exports.useEffect(()=>{const a=({x:h,y:b})=>{cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>{if(r.current&&o.current){o.current.style.userSelect="none";const E=o.current.getBoundingClientRect();if(E.width&&E.height){const A=R((h-E.left)/E.width,0,1);e({x:n==="ltr"?A:1-A,y:R((b-E.top)/E.height,0,1)})}}})},m=()=>{document.addEventListener("mousemove",w),document.addEventListener("mouseup",p),document.addEventListener("touchmove",x),document.addEventListener("touchend",p)},l=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",p)},g=()=>{!s.current&&r.current&&(s.current=!0,typeof(t==null?void 0:t.onScrubStart)=="function"&&t.onScrubStart(),f(!0),m())},p=()=>{s.current&&r.current&&(s.current=!1,f(!1),l(),setTimeout(()=>{typeof(t==null?void 0:t.onScrubEnd)=="function"&&t.onScrubEnd()},0))},d=h=>{g(),w(h)},w=h=>a({x:h.clientX,y:h.clientY}),v=h=>{h.cancelable&&h.preventDefault(),g(),x(h)},x=h=>{h.cancelable&&h.preventDefault(),a({x:h.changedTouches[0].clientX,y:h.changedTouches[0].clientY})};return o.current.addEventListener("mousedown",d),o.current.addEventListener("touchstart",v,{passive:!1}),()=>{o.current&&(o.current.removeEventListener("mousedown",d),o.current.removeEventListener("touchstart",v))}},[n,e]),{ref:o,active:i}}function ne({value:e,defaultValue:t,finalValue:n,onChange:o=()=>{}}){const[r,s]=c.exports.useState(t!==void 0?t:n),u=i=>{s(i),o==null||o(i)};return e!==void 0?[e,o,!0]:[r,u,!1]}function S(e,t){const n=t-e+1;return Array.from({length:n},(o,r)=>r+e)}const y="dots";function Ae({total:e,siblings:t=1,boundaries:n=1,page:o,initialPage:r=1,onChange:s}){const[u,i]=ne({value:o,onChange:s,defaultValue:r,finalValue:r}),f=d=>{d<=0?i(1):d>e?i(e):i(d)},a=()=>f(u+1),m=()=>f(u-1),l=()=>f(1),g=()=>f(e);return{range:c.exports.useMemo(()=>{if(t*2+3+n*2>=e)return S(1,e);const w=Math.max(u-t,n),v=Math.min(u+t,e-n),x=w>n+2,h=v<e-(n+1);if(!x&&h){const b=t*2+n+2;return[...S(1,b),y,...S(e-(n-1),e)]}if(x&&!h){const b=n+1+2*t;return[...S(1,n),y,...S(e-b,e)]}return[...S(1,n),y,...S(w,v),y,...S(e-n+1,e)]},[e,t,u]),active:u,setPage:f,next:a,previous:m,first:l,last:g}}function re(e,t){return B("(prefers-reduced-motion: reduce)",e,t)}const oe=e=>e<.5?2*e*e:-1+(4-2*e)*e,se=({axis:e,target:t,parent:n,alignment:o,offset:r,isList:s})=>{if(!t||!n&&typeof document>"u")return 0;const u=!!n,f=(n||document.body).getBoundingClientRect(),a=t.getBoundingClientRect(),m=l=>a[l]-f[l];if(e==="y"){const l=m("top");if(l===0)return 0;if(o==="start"){const p=l-r;return p<=a.height*(s?0:1)||!s?p:0}const g=u?f.height:window.innerHeight;if(o==="end"){const p=l+r-g+a.height;return p>=-a.height*(s?0:1)||!s?p:0}return o==="center"?l-g/2+a.height/2:0}if(e==="x"){const l=m("left");if(l===0)return 0;if(o==="start"){const p=l-r;return p<=a.width||!s?p:0}const g=u?f.width:window.innerWidth;if(o==="end"){const p=l+r-g+a.width;return p>=-a.width||!s?p:0}return o==="center"?l-g/2+a.width/2:0}return 0},ce=({axis:e,parent:t})=>{if(!t&&typeof document>"u")return 0;const n=e==="y"?"scrollTop":"scrollLeft";if(t)return t[n];const{body:o,documentElement:r}=document;return o[n]+r[n]},ue=({axis:e,parent:t,distance:n})=>{if(!t&&typeof document>"u")return;const o=e==="y"?"scrollTop":"scrollLeft";if(t)t[o]=n;else{const{body:r,documentElement:s}=document;r[o]=n,s[o]=n}};function Le({duration:e=1250,axis:t="y",onScrollFinish:n,easing:o=oe,offset:r=0,cancelable:s=!0,isList:u=!1}={}){const i=c.exports.useRef(0),f=c.exports.useRef(0),a=c.exports.useRef(!1),m=c.exports.useRef(null),l=c.exports.useRef(null),g=re(),p=()=>{i.current&&cancelAnimationFrame(i.current)},d=c.exports.useCallback(({alignment:v="start"}={})=>{var x;a.current=!1,i.current&&p();const h=(x=ce({parent:m.current,axis:t}))!=null?x:0,b=se({parent:m.current,target:l.current,axis:t,alignment:v,offset:r,isList:u})-(m.current?0:h);function E(){f.current===0&&(f.current=performance.now());const D=performance.now()-f.current,I=g||e===0?1:D/e,O=h+b*o(I);ue({parent:m.current,axis:t,distance:O}),!a.current&&I<1?i.current=requestAnimationFrame(E):(typeof n=="function"&&n(),f.current=0,i.current=0,p())}E()},[m.current]),w=()=>{s&&(a.current=!0)};return T("wheel",w,{passive:!0}),T("touchmove",w,{passive:!0}),c.exports.useEffect(()=>p,[]),{scrollableRef:m,targetRef:l,scrollIntoView:d,cancel:p}}const ie={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function ae(){const e=c.exports.useRef(0),t=c.exports.useRef(null),[n,o]=c.exports.useState(ie),r=c.exports.useMemo(()=>typeof window<"u"?new ResizeObserver(s=>{const u=s[0];u&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{t.current&&o(u.contentRect)}))}):null,[]);return c.exports.useEffect(()=>(t.current&&r.observe(t.current),()=>{r.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t.current]),[t,n]}function Ie(){const[e,{width:t,height:n}]=ae();return{ref:e,width:t,height:n}}function de(){if(typeof window>"u"||typeof document>"u")return 0;const e=parseInt(window.getComputedStyle(document.body).paddingRight,10),t=window.innerWidth-document.documentElement.clientWidth;return e+t}const fe=({disableBodyPadding:e})=>{const t=e?null:de();return`body {
        --removed-scroll-width: ${t}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${t?"padding-right: var(--removed-scroll-width) !important;":""}
        `};function le(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function me(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}function pe(){const e=document.createElement("style");return e.type="text/css",e.setAttribute("mantine-scroll-lock",""),e}function Ce(e,t={disableBodyPadding:!1}){const[n,o]=c.exports.useState(e||!1),r=c.exports.useRef(0),{disableBodyPadding:s}=t,u=c.exports.useRef(null),i=()=>{r.current=window.scrollY;const a=fe({disableBodyPadding:s}),m=pe();le(m,a),me(m),u.current=m},f=()=>{!(u!=null&&u.current)||(u.current.parentNode.removeChild(u.current),u.current=null)};return c.exports.useEffect(()=>(n?i():f(),f),[n]),c.exports.useEffect(()=>{e!==void 0&&o(e)},[e]),c.exports.useEffect(()=>{e===void 0&&typeof window<"u"&&window.document.body.style.overflow==="hidden"&&o(!0)},[o]),[n,o]}function he(){const{userAgent:e}=window.navigator,t=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,n=/(Win32)|(Win64)|(Windows)|(WinCE)/i,o=/(iPhone)|(iPad)|(iPod)/i;return t.test(e)?"macos":o.test(e)?"ios":n.test(e)?"windows":/Android/i.test(e)?"android":/Linux/i.test(e)?"linux":"undetermined"}function Me(){return typeof window<"u"?he():"undetermined"}function Ne(e,t){const[n,o]=c.exports.useState(e),r=()=>{var i;n||(o(!0),(i=t==null?void 0:t.onOpen)==null||i.call(t))},s=()=>{var i;n&&(o(!1),(i=t==null?void 0:t.onClose)==null||i.call(t))};return[n,{open:r,close:s,toggle:()=>{n?s():r()}}]}function Pe(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{t.current=e},[e]),t.current}function De(){return`mantine-${Math.random().toString(36).slice(2,11)}`}export{Se as a,ne as b,U as c,re as d,H as e,ye as f,Ee as g,xe as h,ge as i,Te as j,Re as k,Ce as l,te as m,ee as n,Ne as o,Pe as p,Le as q,De as r,R as s,Me as t,ve as u,Ae as v,ae as w,Ie as x,be as y};
