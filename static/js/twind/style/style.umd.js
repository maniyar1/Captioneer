(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports,require('twind'),require('twind/css')):typeof define==='function'&&define.amd?define(['exports','twind','twind/css'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.twindStyle={},g.twind,g.twindCss));}(this,(function(exports, twind, css){'use strict';var $=Object.prototype.hasOwnProperty;var B=Object.getOwnPropertySymbols,N=Object.prototype.propertyIsEnumerable;var f=Object.assign;var b=(e,t)=>{var s={};for(var n in e)$.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&B)for(var n of B(e))t.indexOf(n)<0&&N.call(e,n)&&(s[n]=e[n]);return s};var g=(e,t)=>!!~e.indexOf(t);var P=e=>e.replace(/[A-Z]/g,"-$&").toLowerCase(),d=(e,t)=>{for(;typeof e=="function";)e=e(t);return e};var D=(e,t)=>!g("@:&",e[0])&&(g("rg",(typeof t)[5])||Array.isArray(t)),u=(e,t,s)=>t?Object.keys(t).reduce((n,r)=>{let l=d(t[r],s);return D(r,l)?n[P(r)]=l:n[r]=r[0]=="@"&&g("figa",r[1])?(n[r]||[]).concat(l):u(n[r]||{},l,s),n},e):e;var I=(e,t)=>e.reduce((s,n)=>(typeof n=="string"&&(n=twind.apply(n)),typeof n=="function"?u(s,d(n,t),t):n?u(s,n,t):s),{}),w=(e,t)=>({[e[0]=="@"?e:`@screen ${e}`]:typeof t=="string"?twind.apply(t):t}),M=(e={},t)=>{let{base:s,variants:n={},defaults:r,matches:l=[]}=e,x=twind.hash(JSON.stringify([t==null?void 0:t.className,s,n,r,l])),C=(t?t.className+" ":"")+x,h=(t||"")+"."+x;return Object.defineProperties(v=>{let m=f(f({},r),v),{tw:j,css:O,class:k,className:R}=m,y=b(m,["tw","css","class","className"]),o=[t&&t(y),{_:C+(R?" "+R:"")+(k?" "+k:"")},s];return Object.keys(n).forEach(c=>{let S=n[c],a=y[c];a===Object(a)?Object.keys(a).forEach(i=>{let p=S[a[i]];o.push(i=="initial"?p:w(i,p));}):o.push(S[a]);}),l.forEach(c=>{let S=o.push(c.use)-1;Object.keys(c).every(a=>{let i=y[a],p=String(c[a]);return i===Object(i)?(Object.keys(i).forEach(V=>{V!="initial"&&p==String(i[V])&&o.push(w(V,o[S]));}),!0):a=="use"||p==String(i)})||(o.length=S);}),o.push(twind.apply(j),O),twind.directive(I,o)},{toString:{value:()=>h},className:{value:C},selector:{value:h}})},E=(e,t)=>typeof e=="function"?M(t,e):M(e);Object.keys(css).forEach(function(k){if(k!=='default')Object.defineProperty(exports,k,{enumerable:true,get:function(){return css[k];}});});exports.style=E;Object.defineProperty(exports,'__esModule',{value:true});})));//# sourceMappingURL=style.umd.js.map