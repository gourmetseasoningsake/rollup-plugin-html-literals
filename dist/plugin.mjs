import{minifyHTMLLiterals as o}from"minify-html-literals";import{createFilter as f}from"@rollup/pluginutils";var s=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(n)for(var t of n(r))y.call(r,t)&&l(e,t,r[t]);return e},b=(e,r)=>m(e,c(r)),O=(e={})=>{e.minifyHTMLLiterals||(e.minifyHTMLLiterals=o),e.filter||(e.filter=f(e.include,e.exclude));const r=e.options||{};return{name:"html-literals",transform(t,i){if(!e.filter(i))return null;try{return e.minifyHTMLLiterals(t,b(u({},r),{fileName:i}))}catch(a){e.failOnError?this.error(a.message):this.warn(a.message)}}}};export{O as default};