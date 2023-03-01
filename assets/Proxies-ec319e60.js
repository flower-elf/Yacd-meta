import{r as x,R as Z,i as L,j as s,b as u,B as g,h as b,W as qe,c as w,X as Ue,Y as ye,Z as me,d as P,_ as He,F as I,$ as Ge,a0 as _e,a1 as ee,J as be,D as Ke,x as j,a2 as Ye,a3 as Ve,a4 as X,G as Ze,a5 as ge,a6 as te,a7 as ne,a8 as Xe,a9 as Je,u as re,aa as Qe,ab as we,ac as et,g as xe,C as Ce,E as se,ad as tt,m as ie,M as nt,ae as rt,af as ot,ag as st,ah as it}from"./index-105ee7af.js";import{C as at}from"./chevron-down-b91477a4.js";import{F as ct,p as lt,A as ut,I as dt}from"./Fab-fc6dba12.js";import{R as ht,T as ft}from"./TextFitler-8d899441.js";import{f as pt}from"./index-84fa0cb3.js";import{R as vt}from"./rotate-cw-b86718e4.js";import{S as yt}from"./Select-2d836143.js";import"./debounce-c1ba2006.js";function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function mt(e,t){if(e==null)return{};var n=_t(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _t(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var oe=x.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=e.size,i=o===void 0?24:o,a=mt(e,["color","size"]);return Z.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),Z.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});oe.propTypes={color:L.string,size:L.oneOfType([L.string,L.number])};oe.displayName="Zap";const R=oe,bt="_FlexCenter_1380a_1",gt={FlexCenter:bt};function wt({children:e}){return s("div",{className:gt.FlexCenter,children:e})}const{useRef:ae,useEffect:xt}=b;function Ct({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=ae(null),r=ae(null);return xt(()=>{n.current.focus()},[]),u("div",{onKeyDown:i=>{i.keyCode===39?r.current.focus():i.keyCode===37&&n.current.focus()},children:[s("h2",{children:"Close Connections?"}),s("p",{children:"Click 'Yes' to close those connections that are still using the old selected proxy in this group"}),s("div",{style:{height:30}}),u(wt,{children:[s(g,{onClick:e,ref:n,children:"Yes"}),s("div",{style:{width:20}}),s(g,{onClick:t,ref:r,children:"No"})]})]})}const Ot="_header_1y9js_1",Pt="_arrow_1y9js_8",kt="_isOpen_1y9js_13",Et="_btn_1y9js_20",Tt="_qty_1y9js_25",E={header:Ot,arrow:Pt,isOpen:kt,btn:Et,qty:Tt};function Oe({name:e,type:t,toggle:n,isOpen:r,qty:o}){const i=x.useCallback(a=>{a.preventDefault(),(a.key==="Enter"||a.key===" ")&&n()},[n]);return u("div",{className:E.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:i,role:"button",children:[s("div",{children:s(qe,{name:e,type:t})}),typeof o=="number"?s("span",{className:E.qty,children:o}):null,s(g,{kind:"minimal",onClick:n,className:E.btn,title:"Toggle collapsible section",children:s("span",{className:w(E.arrow,{[E.isOpen]:r}),children:s(at,{size:20})})})]})}const{useMemo:St}=b;function Rt(e,t){return e.filter(n=>{const r=t[n];return r===void 0?!0:r.number!==0})}const N=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const n=t&&t.type;return n&&me.indexOf(n)>-1?-1:999999},Mt={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((r,o)=>{const i=N(t[r],n&&n[r]),a=N(t[o],n&&n[o]);return i-a}),LatencyDesc:(e,t,n)=>e.sort((r,o)=>{const i=N(t[r],n&&n[r]);return N(t[o],n&&n[o])-i}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function At(e,t){const n=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return n.length===0?e:e.filter(r=>{let o=0;for(;o<n.length;o++){const i=n[o];if(r.toLowerCase().indexOf(i)>-1)return!0}return!1})}function Lt(e,t,n,r,o,i){let a=[...e];return n&&(a=Rt(e,t)),typeof r=="string"&&r!==""&&(a=At(a,r)),Mt[o](a,t,i)}function Pe(e,t,n,r,o){const[i]=Ue(ye);return St(()=>Lt(e,t,n,i,r,o),[e,t,n,i,r,o])}const Nt="_header_1g0y5_1",Dt="_zapWrapper_1g0y5_5",ke={header:Nt,zapWrapper:Dt},Ee={Right:39,Left:37,Enter:13,Space:32},Bt="_proxy_1nf9l_4",$t="_now_1nf9l_25",Ft="_error_1nf9l_29",zt="_selectable_1nf9l_32",It="_proxyType_1nf9l_40",jt="_udpType_1nf9l_50",Wt="_tfoType_1nf9l_61",qt="_row_1nf9l_65",Ut="_proxyName_1nf9l_71",Ht="_proxySmall_1nf9l_82",y={proxy:Bt,now:$t,error:Ft,selectable:zt,proxyType:It,udpType:jt,tfoType:Wt,row:qt,proxyName:Ut,proxySmall:Ht},Gt="_proxyLatency_1s3c2_4",Kt={proxyLatency:Gt};function Yt({number:e,color:t}){return s("span",{className:Kt.proxyLatency,style:{color:t},children:u("span",{children:[e," ms"]})})}const{useMemo:B}=b,T={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function Te({number:e}={},t){const n={good:t?800:200,normal:t?1500:500};return e===0?T.na:e<n.good?T.good:e<n.normal?T.normal:typeof e=="number"?T.bad:T.na}function Vt(e,t,n){return me.indexOf(t)>-1?"linear-gradient(135deg, white 15%, #999 15% 30%, white 30% 45%, #999 45% 60%, white 60% 75%, #999 75% 90%, white 90% 100%)":Te(e,n)}function Zt({now:e,name:t,proxy:n,latency:r,httpsLatencyTest:o,isSelectable:i,onClick:a}){const c=B(()=>Vt(r,n.type,o),[r,n]),l=B(()=>{let h=t;return r&&typeof r.number=="number"&&(h+=" "+r.number+" ms"),h},[t,r]),f=x.useCallback(()=>{i&&a&&a(t)},[t,a,i]),d=x.useCallback(h=>{h.keyCode===Ee.Enter&&f()},[f]);return s("div",{title:l,className:w(y.proxySmall,{[y.selectable]:i}),style:{background:c,scale:e?"1.6":"1"},onClick:f,onKeyDown:d,role:i?"menuitem":"",children:e&&s("div",{className:y.now})})}function Xt(e){return e==="Shadowsocks"?"SS":e}const Jt=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Qt({children:e,label:t,"aria-label":n}){const[r,o]=He();return u(I,{children:[x.cloneElement(e,r),s(Ge,{...o,label:t,"aria-label":n,position:Jt})]})}function en({now:e,name:t,proxy:n,latency:r,httpsLatencyTest:o,isSelectable:i,onClick:a}){var v;const c=B(()=>Te(r,o),[r]),l=x.useCallback(()=>{i&&a&&a(t)},[t,a,i]);function f(_,C){return _?C?"XUDP":"UDP":""}function d(_){return _?s("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2962",width:"10",height:"10",children:s("path",{d:"M648.093513 719.209284l-1.492609-40.940127 31.046263-26.739021c202.73892-174.805813 284.022131-385.860697 255.70521-561.306199-176.938111-28.786027-389.698834 51.857494-563.907604 254.511123l-26.31256 30.619803-40.38573-0.938211c-60.557271-1.407317-111.903014 12.79379-162.822297 47.0385l189.561318 127.084977-37.95491 68.489421c-9.126237 16.461343-0.554398 53.307457 29.084549 82.818465 29.5963 29.511008 67.380626 38.381369 83.287571 29.852176l68.318836-36.760822 127.639376 191.267156c36.163779-52.11337 50.450177-103.629696 48.189941-165.039887zM994.336107 16.105249l10.490908 2.686696 2.64405 10.405615c47.46496 178.089552-1.023503 451.492838-274.170913 686.898568 4.051367 111.263324-35.396151 200.222809-127.255561 291.741051l-15.779008 15.693715-145.934494-218.731157c-51.217805 27.59194-128.790816 10.405616-183.93205-44.522388-55.226525-55.013296-72.41285-132.287785-43.498885-184.529093L0.002773 430.325513l15.736362-15.65107c89.300652-88.959484 178.64395-128.108481 289.011709-125.549722C539.730114 15.806727 815.56422-31.061189 994.336107 16.105249zM214.93844 805.098259c28.572797 28.572797 22.346486 79.49208-12.537914 114.376479C156.428175 965.489735 34.034254 986.002445 34.034254 986.002445s25.331704-127.084978 66.612998-168.323627c34.8844-34.8844 85.633099-41.281295 114.291188-12.580559zM661.01524 298.549479a63.968948 63.968948 0 1 0 0 127.937897 63.968948 63.968948 0 0 0 0-127.937897z","p-id":"2963"})}):""}const h=x.useCallback(_=>{_.keyCode===Ee.Enter&&l()},[l]),m=B(()=>w(y.proxy,{[y.now]:e,[y.error]:r&&r.error,[y.selectable]:i}),[i,e,r]),p=(r==null?void 0:r.number)??((v=n.history[n.history.length-1])==null?void 0:v.delay);return u("div",{tabIndex:0,className:m,onClick:l,onKeyDown:h,role:i?"menuitem":"",children:[u("div",{className:w(y.proxyName,y.row),children:[s(Qt,{label:t,"aria-label":`proxy name: ${t}`,children:s("span",{children:t})}),s("span",{className:y.proxyType,style:{paddingLeft:4,opacity:e?.6:.2},children:f(n.udp,n.xudp)})]}),u("div",{className:y.row,children:[u("div",{className:y.row,children:[s("span",{className:y.proxyType,style:{paddingRight:4,opacity:e?.6:.2},children:Xt(n.type)}),d(n.tfo)]}),p?s(Yt,{number:p,color:c}):null]})]})}const Se=(e,{name:t})=>{const n=_e(e),r=ee(e),o=be(e);return{proxy:n[t],latency:r[t],httpsLatencyTest:o.startsWith("https://")}},tn=P(Se)(en),nn=P(Se)(Zt),rn="_list_16726_4",on="_detail_16726_10",sn="_summary_16726_19",$={list:rn,detail:on,summary:sn};function Re({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){const o=e;return s("div",{className:w($.list,$.detail),children:o.map(i=>s(tn,{onClick:r,isSelectable:n,name:i,now:i===t},i))})}function Me({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){return s("div",{className:w($.list,$.summary),children:e.map(o=>s(nn,{onClick:r,isSelectable:n,name:o,now:o===t},o))})}const{createElement:an,useCallback:K,useMemo:cn,useState:ln}=b;function un(){return s("div",{className:ke.zapWrapper,children:s(R,{size:16})})}function dn({name:e,all:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,proxies:i,type:a,now:c,isOpen:l,latencyTestUrl:f,apiConfig:d,dispatch:h}){const m=Pe(t,n,r,o,i),{data:p}=Ke(["/version",d],()=>Ze("/version",d)),v=cn(()=>["Selector",p.meta&&"Fallback"].includes(a),[a,p.meta]),{app:{updateCollapsibleIsOpen:_},proxies:{requestDelayForProxies:C}}=j(),q=K(()=>{_("proxyGroup",e,!l)},[l,_,e]),U=K(A=>{v&&h(Ye(d,e,A))},[d,h,e,v]),[H,M]=ln(!1),G=K(async()=>{M(!0);try{p.meta===!0?(await Ve(d,e,f),await h(X(d))):(await C(d,m),await h(X(d)))}catch{}M(!1)},[m,d,h,e,p.meta]);return u("div",{className:ke.group,children:[u("div",{style:{display:"flex",alignItems:"center"},children:[s(Oe,{name:e,type:a,toggle:q,qty:m.length,isOpen:l}),s(g,{title:"Test latency",kind:"minimal",onClick:G,isLoading:H,children:s(un,{})})]}),an(l?Re:Me,{all:m,now:c,isSelectable:v,itemOnTapCallback:U})]})}const hn=P((e,{name:t,delay:n})=>{const r=_e(e),o=ge(e),i=te(e),a=ne(e),c=be(e),l=r[t],{all:f,type:d,now:h}=l;return{all:f,delay:n,hideUnavailableProxies:a,proxySortBy:i,proxies:r,type:d,now:h,isOpen:o[`proxyGroup:${t}`],latencyTestUrl:c}})(dn),{useCallback:Ae,useState:fn}=b;function pn({dispatch:e,apiConfig:t,name:n}){return Ae(()=>e(Xe(t,n)),[t,e,n])}function vn({dispatch:e,apiConfig:t,names:n}){const[r,o]=fn(!1);return[Ae(async()=>{if(!r){o(!0);try{await e(Je(t,n))}catch{}o(!1)}},[t,e,n,r]),r]}const{useState:yn,useCallback:mn}=b;function _n({isLoading:e}){return e?s(dt,{children:s(R,{width:16,height:16})}):s(R,{width:16,height:16})}function bn({dispatch:e,apiConfig:t}){const[n,r]=yn(!1);return[mn(()=>{n||(r(!0),e(Qe(t)).then(()=>r(!1),()=>r(!1)))},[t,e,n]),n]}function gn({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:r}=re(),[o,i]=bn({dispatch:e,apiConfig:t}),[a,c]=vn({apiConfig:t,dispatch:e,names:n.map(l=>l.name)});return s(ct,{icon:s(_n,{isLoading:i}),onClick:o,text:r("Test Latency"),style:lt,children:n.length>0?s(ut,{text:r("update_all_proxy_provider"),onClick:a,children:s(ht,{isRotating:c})}):null})}var Le=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),Q=typeof window<"u"&&typeof document<"u"&&window.document===document,F=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),wn=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(F):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),xn=2;function Cn(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&c()}function a(){wn(i)}function c(){var l=Date.now();if(n){if(l-o<xn)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=l}return c}var On=20,Pn=["top","right","bottom","left","width","height","size","weight"],kn=typeof MutationObserver<"u",En=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Cn(this.refresh.bind(this),On)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Q||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),kn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Q||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=Pn.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Ne=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},O=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||F},De=W(0,0,0,0);function z(e){return parseFloat(e)||0}function ce(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+z(i)},0)}function Tn(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=z(a)}return n}function Sn(e){var t=e.getBBox();return W(0,0,t.width,t.height)}function Rn(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return De;var r=O(e).getComputedStyle(e),o=Tn(r),i=o.left+o.right,a=o.top+o.bottom,c=z(r.width),l=z(r.height);if(r.boxSizing==="border-box"&&(Math.round(c+i)!==t&&(c-=ce(r,"left","right")+i),Math.round(l+a)!==n&&(l-=ce(r,"top","bottom")+a)),!An(e)){var f=Math.round(c+i)-t,d=Math.round(l+a)-n;Math.abs(f)!==1&&(c-=f),Math.abs(d)!==1&&(l-=d)}return W(o.left,o.top,c,l)}var Mn=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof O(e).SVGGraphicsElement}:function(e){return e instanceof O(e).SVGElement&&typeof e.getBBox=="function"}}();function An(e){return e===O(e).document.documentElement}function Ln(e){return Q?Mn(e)?Sn(e):Rn(e):De}function Nn(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return Ne(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function W(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Dn=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=W(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Ln(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Bn=function(){function e(t,n){var r=Nn(n);Ne(this,{target:t,contentRect:r})}return e}(),$n=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Le,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof O(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Dn(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof O(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Bn(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Be=typeof WeakMap<"u"?new WeakMap:new Le,$e=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=En.getInstance(),r=new $n(t,n,this);Be.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){$e.prototype[e]=function(){var t;return(t=Be.get(this))[e].apply(t,arguments)}});var Fn=function(){return typeof F.ResizeObserver<"u"?F.ResizeObserver:$e}();const{memo:zn,useState:In,useRef:Fe,useEffect:ze}=Z;function jn(e){const t=Fe();return ze(()=>void(t.current=e),[e]),t.current}function Wn(){const e=Fe(),[t,n]=In({height:0});return ze(()=>{const r=new Fn(([o])=>n(o.contentRect));return e.current&&r.observe(e.current),()=>r.disconnect()},[]),[e,t]}const qn={initialOpen:{height:"auto",transition:{duration:0}},open:e=>({height:e,opacity:1,visibility:"visible",transition:{duration:.3}}),closed:{height:0,opacity:0,visibility:"hidden",overflowY:"hidden",transition:{duration:.3}}},Un={open:{},closed:{}},le=zn(({children:e,isOpen:t})=>{const r=we.read().motion,o=jn(t),[i,{height:a}]=Wn();return s("div",{children:s(r.div,{animate:t&&o===t?"initialOpen":t?"open":"closed",custom:a,variants:qn,children:s(r.div,{variants:Un,ref:i,children:e})})})}),Hn="_updatedAt_sis46_4",Gn="_body_sis46_11",Kn="_actionFooter_sis46_20",Yn="_refresh_sis46_30",S={updatedAt:Hn,body:Gn,actionFooter:Kn,refresh:Yn},{useState:Vn,useCallback:ue}=b;function Zn({name:e,proxies:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,vehicleType:i,updatedAt:a,subscriptionInfo:c,isOpen:l,dispatch:f,apiConfig:d}){const h=Pe(t,n,r,o),[m,p]=Vn(!1),v=pn({dispatch:f,apiConfig:d,name:e}),_=ue(async()=>{p(!0),await f(et(d,e)),p(!1)},[d,f,e,p]),{app:{updateCollapsibleIsOpen:C}}=j(),q=ue(()=>{C("proxyProvider",e,!l)},[l,C,e]),U=pt(new Date(a),new Date),H=c?de(c.Total):0,M=c?de(c.Download+c.Upload):0,G=c?((c.Download+c.Upload)/c.Total*100).toFixed(2):0,A=()=>{if(c.Expire===0)return"Null";const k=new Date(c.Expire*1e3),Ie=k.getFullYear()+"-",je=(k.getMonth()+1<10?"0"+(k.getMonth()+1):k.getMonth()+1)+"-",We=k.getDate()+" ";return Ie+je+We};return u("div",{className:S.body,children:[u("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[s(Oe,{name:e,toggle:q,type:i,isOpen:l,qty:h.length}),s(g,{kind:"minimal",start:s(he,{}),onClick:v}),s(g,{kind:"minimal",start:s(R,{size:16}),onClick:_,isLoading:m})]}),c&&s("div",{className:S.updatedAt,children:u("small",{children:[M," / ",H," ( ",G,"% )    Expire: ",A()," "]})}),s("div",{className:S.updatedAt,children:u("small",{children:["Updated ",U," ago"]})}),u(le,{isOpen:l,children:[s(Re,{all:h}),u("div",{className:S.actionFooter,children:[s(g,{text:"Update",start:s(he,{}),onClick:v}),s(g,{text:"Health Check",start:s(R,{size:16}),onClick:_,isLoading:m})]})]}),s(le,{isOpen:!l,children:s(Me,{all:h})})]})}const Xn={rest:{scale:1},pressed:{scale:.95}},Jn={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function de(e,t=2){if(!+e)return"0 Bytes";const n=1024,r=t<0?0:t,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/Math.pow(n,i)).toFixed(r))} ${o[i]}`}function he(){const t=we.read().motion;return s(t.div,{className:S.refresh,variants:Xn,initial:"rest",whileHover:"hover",whileTap:"pressed",children:s(t.div,{className:"flexCenter",variants:Jn,children:s(vt,{size:16})})})}const Qn=(e,{proxies:t,name:n})=>{const r=ne(e),o=ee(e),i=ge(e),a=xe(e),c=te(e);return{apiConfig:a,proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:c,isOpen:i[`proxyProvider:${n}`]}},er=P(Qn)(Zn);function tr({items:e}){return e.length===0?null:u(I,{children:[s(Ce,{title:"Proxy Provider"}),s("div",{children:e.map(t=>s(er,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt,subscriptionInfo:t.subscriptionInfo},t.name))})]})}const nr="_labeledInput_cmki0_1",Y={labeledInput:nr},rr=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:fe}=b;function or({appConfig:e}){const{app:{updateAppConfig:t}}=j(),n=fe(i=>{t("proxySortBy",i.target.value)},[t]),r=fe(i=>{t("hideUnavailableProxies",i)},[t]),{t:o}=re();return u(I,{children:[u("div",{className:Y.labeledInput,children:[s("span",{children:o("sort_in_grp")}),s("div",{children:s(yt,{options:rr.map(i=>[i[0],o(i[1])]),selected:e.proxySortBy,onChange:n})})]}),s("hr",{}),u("div",{className:Y.labeledInput,children:[s("span",{children:o("hide_unavail_proxies")}),s("div",{children:s(se,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),u("div",{className:Y.labeledInput,children:[s("span",{children:o("auto_close_conns")}),s("div",{children:s(se,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:i=>t("autoCloseOldConns",i)})})]})]})}const sr=e=>{const t=te(e),n=ne(e),r=tt(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:r}}},ir=P(sr)(or),ar="_overlay_uuk3b_1",cr="_cnt_uuk3b_5",lr="_afterOpen_uuk3b_16",V={overlay:ar,cnt:cr,afterOpen:lr},{useMemo:ur}=b;function pe({isOpen:e,onRequestClose:t,children:n}){const r=ur(()=>({base:w(ie.content,V.cnt),afterOpen:V.afterOpen,beforeClose:""}),[]);return s(nt,{isOpen:e,onRequestClose:t,className:r,overlayClassName:w(ie.overlay,V.overlay),children:n})}function dr({color:e="currentColor",size:t=24}){return u("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M2 6h9M18.5 6H22"}),s("circle",{cx:"16",cy:"6",r:"2"}),s("path",{d:"M22 18h-9M6 18H2"}),s("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const hr="_topBar_15n7g_4",fr="_topBarRight_15n7g_16",pr="_textFilterContainer_15n7g_25",vr="_group_15n7g_32",D={topBar:hr,topBarRight:fr,textFilterContainer:pr,group:vr},{useState:yr,useEffect:mr,useCallback:ve,useRef:_r}=b;function br({dispatch:e,groupNames:t,delay:n,proxyProviders:r,apiConfig:o,showModalClosePrevConns:i}){const a=_r({}),c=ve(()=>{a.current.startAt=Date.now(),e(X(o)).then(()=>{a.current.completeAt=Date.now()})},[o,e]);mr(()=>{c();const v=()=>{a.current.startAt&&Date.now()-a.current.startAt>3e4&&c()};return window.addEventListener("focus",v,!1),()=>window.removeEventListener("focus",v,!1)},[c]);const[l,f]=yr(!1),d=ve(()=>{f(!1)},[]),{proxies:{closeModalClosePrevConns:h,closePrevConnsAndTheModal:m}}=j(),{t:p}=re();return u(I,{children:[s(pe,{isOpen:l,onRequestClose:d,children:s(ir,{})}),u("div",{className:D.topBar,children:[s(Ce,{title:p("Proxies")}),u("div",{className:D.topBarRight,children:[s("div",{className:D.textFilterContainer,children:s(ft,{textAtom:ye,placeholder:p("Search")})}),s(rt,{label:p("settings"),children:s(g,{kind:"minimal",onClick:()=>f(!0),children:s(dr,{size:16})})})]})]}),s("div",{children:t.map(v=>s("div",{className:D.group,children:s(hn,{name:v,delay:n,apiConfig:o,dispatch:e})},v))}),s(tr,{items:r}),s("div",{style:{height:60}}),s(gn,{dispatch:e,apiConfig:o,proxyProviders:r}),s(pe,{isOpen:i,onRequestClose:h,children:s(Ct,{onClickPrimaryButton:()=>m(o),onClickSecondaryButton:h})})]})}const gr=e=>({apiConfig:xe(e),groupNames:ot(e),proxyProviders:st(e),delay:ee(e),showModalClosePrevConns:it(e)}),Sr=P(gr)(br);export{Sr as default};
