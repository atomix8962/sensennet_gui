(function(){"use strict";var e={5796:function(e,n,t){var o=t(9242),r=t(3396);function i(e,n){const t=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(t,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(o,{class:"view_router"})],64)}var a=t(89);const u={},s=(0,a.Z)(u,[["render",i]]);var l=s,c=t(2483);const d=e=>((0,r.dD)("data-v-d3f28300"),e=e(),(0,r.Cn)(),e),f={class:"demo-control-panel"},p=d((()=>(0,r._)("label",{for:"scaleObj"},"Scaling Objects:",-1))),v=d((()=>(0,r._)("label",{for:"forceEnabled"},"Automatic Node Positioning:",-1)));function m(e,n,t,i,a,u){const s=(0,r.up)("v-network-graph");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",f,[p,(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=e=>a.config.view.scalingObjects=e),name:"scaleObj"},null,512),[[o.e8,a.config.view.scalingObjects]]),v,(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":n[1]||(n[1]=e=>a.d3ForceEnabled=e),name:"forceEnabled"},null,512),[[o.e8,a.d3ForceEnabled]])]),(0,r.Wm)(s,{class:"graph",nodes:a.data["nodes"],edges:a.data["edges"],layouts:a.data["layouts"],"zoom-level":a.zoomLevel,"onUpdate:zoomLevel":n[2]||(n[2]=e=>a.zoomLevel=e),configs:a.config},null,8,["nodes","edges","layouts","zoom-level","configs"])],64)}var g=t(4384),b=t(4870),h=t(8701);const y=(0,b.iH)(1.5),w=(0,b.qj)(g.Kl({view:{layoutHandler:new h.y({positionFixedByDrag:!1,positionFixedByClickWithAltKey:!0}),scalingObjects:!0,minZoomLevel:.1,maxZoomLevel:16}}));var j={name:"SensennetGraph",components:{VNetworkGraph:g.tI},props:{graph:String},mounted(){this.get_node(),this.timer=setInterval(this.get_node,3e4)},beforeUnmount(){clearInterval(this.timer)},data(){return{data:(0,b.qj)({}),config:w,zoomLevel:y,timer:"",d3ForceEnabled:(0,r.Fl)({get:()=>w.view.layoutHandler instanceof h.y,set:e=>{w.view.layoutHandler=e?new h.y:new g.XP}})}},methods:{get_node(){let e=new XMLHttpRequest;e.open("GET",this.graph,!0),e.onload=function(){var n=JSON.parse(e.responseText);this.data["nodes"]=(0,b.qj)(n["nodes"]),this.data["edges"]=(0,b.qj)(n["edges"]),this.data["layouts"]=(0,b.qj)(n["layouts"])},e.send()}}};const O=(0,a.Z)(j,[["render",m],["__scopeId","data-v-d3f28300"]]);var k=O;const _=[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,4335))}],E=(0,c.p7)({history:(0,c.PO)("ssngwtd.loria.fr/dist/"),routes:_});var x=E;(0,o.ri)(l).use(x).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.0cdee609.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="sensennet_gui:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="ssngwtd.loria.fr/dist/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],s=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(s)var c=s(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunksensennet_gui"]=self["webpackChunksensennet_gui"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(5796)}));o=t.O(o)})();
//# sourceMappingURL=app.64dee414.js.map