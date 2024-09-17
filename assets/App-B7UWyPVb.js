import{R as er,a as F,j as E,r as Zt,c as Xt}from"./spa-BQ2GZ3oq.js";var rr=Object.defineProperty,nr=(t,e,r)=>e in t?rr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,gt=(t,e,r)=>(nr(t,typeof e!="symbol"?e+"":e,r),r);const or={stringify:t=>t,parse:t=>t},ir={stringify:t=>`${t}`,parse:t=>parseFloat(t)},sr={stringify:t=>t?"true":"false",parse:t=>/^[ty1-9]/i.test(t)},ar={stringify:t=>t.name,parse:(t,e,r)=>{const n=(()=>{if(typeof window<"u"&&t in window)return window[t];if(typeof global<"u"&&t in global)return global[t]})();return typeof n=="function"?n.bind(r):void 0}},cr={stringify:t=>JSON.stringify(t),parse:t=>JSON.parse(t)},Gt={string:or,number:ir,boolean:sr,function:ar,json:cr};function ur(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,r,n)=>`${r}-${n.toLowerCase()}`)}const mt=Symbol.for("r2wc.render"),yt=Symbol.for("r2wc.connected"),W=Symbol.for("r2wc.context"),M=Symbol.for("r2wc.props");function pr(t,e,r){var n,o,i;e.props||(e.props=t.propTypes?Object.keys(t.propTypes):[]);const s=Array.isArray(e.props)?e.props.slice():Object.keys(e.props),a={},c={},h={};for(const u of s){a[u]=Array.isArray(e.props)?"string":e.props[u];const p=ur(u);c[u]=p,h[p]=u}class l extends HTMLElement{constructor(){super(),gt(this,n,!0),gt(this,o),gt(this,i,{}),gt(this,"container"),e.shadow?this.container=this.attachShadow({mode:e.shadow}):this.container=this,this[M].container=this.container;for(const p of s){const d=c[p],m=this.getAttribute(d),y=a[p],C=y?Gt[y]:null;C!=null&&C.parse&&m&&(this[M][p]=C.parse(m,d,this))}}static get observedAttributes(){return Object.keys(h)}connectedCallback(){this[yt]=!0,this[mt]()}disconnectedCallback(){this[yt]=!1,this[W]&&r.unmount(this[W]),delete this[W]}attributeChangedCallback(p,d,m){const y=h[p],C=a[y],v=C?Gt[C]:null;y in a&&v!=null&&v.parse&&m&&(this[M][y]=v.parse(m,p,this),this[mt]())}[(n=yt,o=W,i=M,mt)](){this[yt]&&(this[W]?r.update(this[W],this[M]):this[W]=r.mount(this.container,t,this[M]))}}for(const u of s){const p=c[u],d=a[u];Object.defineProperty(l.prototype,u,{enumerable:!0,configurable:!0,get(){return this[M][u]},set(m){this[M][u]=m;const y=d?Gt[d]:null;if(y!=null&&y.stringify){const C=y.stringify(m,p,this);this.getAttribute(p)!==C&&this.setAttribute(p,C)}else this[mt]()}})}return l}function It(t,e,r,n={}){function o(a,c,h){const l=e.createElement(c,h);if("createRoot"in r){const u=r.createRoot(a);return u.render(l),{container:a,root:u,ReactComponent:c}}if("render"in r)return r.render(l,a),{container:a,ReactComponent:c};throw new Error("Invalid ReactDOM instance provided.")}function i({container:a,root:c,ReactComponent:h},l){const u=e.createElement(h,l);if(c){c.render(u);return}if("render"in r){r.render(u,a);return}}function s({container:a,root:c}){if(c){c.unmount();return}if("unmountComponentAtNode"in r){r.unmountComponentAtNode(a);return}}return pr(t,n,{mount:o,unmount:s,update:i})}function fr({text:t,onClick:e}){const r={margin:"0 10px",height:"50px",width:"160px",backgroundColor:"#405cf5",borderRadius:"6px",fontSize:"100%",padding:"0 25px",cursor:"pointer",color:"#fff",fontWeight:"bold"};return E.jsx("button",{onClick:e,style:r,children:t})}const lr=It(fr,F,er,{props:{text:"string",onClick:"function"}});customElements.get("react-button")||customElements.define("react-button",lr);var _=function(){return _=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_.apply(this,arguments)};function kt(t,e,r){if(r||arguments.length===2)for(var n=0,o=e.length,i;n<o;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}var x="-ms-",at="-moz-",b="-webkit-",Se="comm",jt="rule",Qt="decl",dr="@import",Ce="@keyframes",hr="@layer",Ae=Math.abs,te=String.fromCharCode,Wt=Object.assign;function gr(t,e){return I(t,0)^45?(((e<<2^I(t,0))<<2^I(t,1))<<2^I(t,2))<<2^I(t,3):0}function ke(t){return t.trim()}function D(t,e){return(t=e.exec(t))?t[0]:t}function f(t,e,r){return t.replace(e,r)}function xt(t,e,r){return t.indexOf(e,r)}function I(t,e){return t.charCodeAt(e)|0}function U(t,e,r){return t.slice(e,r)}function T(t){return t.length}function Ee(t){return t.length}function st(t,e){return e.push(t),t}function mr(t,e){return t.map(e).join("")}function se(t,e){return t.filter(function(r){return!D(r,e)})}var _t=1,Z=1,$e=0,O=0,$=0,et="";function Pt(t,e,r,n,o,i,s,a){return{value:t,root:e,parent:r,type:n,props:o,children:i,line:_t,column:Z,length:s,return:"",siblings:a}}function L(t,e){return Wt(Pt("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function J(t){for(;t.root;)t=L(t.root,{children:[t]});st(t,t.siblings)}function yr(){return $}function br(){return $=O>0?I(et,--O):0,Z--,$===10&&(Z=1,_t--),$}function N(){return $=O<$e?I(et,O++):0,Z++,$===10&&(Z=1,_t++),$}function V(){return I(et,O)}function vt(){return O}function Ot(t,e){return U(et,t,e)}function Yt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wr(t){return _t=Z=1,$e=T(et=t),O=0,[]}function xr(t){return et="",t}function Bt(t){return ke(Ot(O-1,Vt(t===91?t+2:t===40?t+1:t)))}function vr(t){for(;($=V())&&$<33;)N();return Yt(t)>2||Yt($)>3?"":" "}function Sr(t,e){for(;--e&&N()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return Ot(t,vt()+(e<6&&V()==32&&N()==32))}function Vt(t){for(;N();)switch($){case t:return O;case 34:case 39:t!==34&&t!==39&&Vt($);break;case 40:t===41&&Vt(t);break;case 92:N();break}return O}function Cr(t,e){for(;N()&&t+$!==57;)if(t+$===84&&V()===47)break;return"/*"+Ot(e,O-1)+"*"+te(t===47?t:N())}function Ar(t){for(;!Yt(V());)N();return Ot(t,O)}function kr(t){return xr(St("",null,null,null,[""],t=wr(t),0,[0],t))}function St(t,e,r,n,o,i,s,a,c){for(var h=0,l=0,u=s,p=0,d=0,m=0,y=1,C=1,v=1,A=0,S="",k=o,R=i,w=n,g=S;C;)switch(m=A,A=N()){case 40:if(m!=108&&I(g,u-1)==58){xt(g+=f(Bt(A),"&","&\f"),"&\f",Ae(h?a[h-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:g+=Bt(A);break;case 9:case 10:case 13:case 32:g+=vr(m);break;case 92:g+=Sr(vt()-1,7);continue;case 47:switch(V()){case 42:case 47:st(Er(Cr(N(),vt()),e,r,c),c);break;default:g+="/"}break;case 123*y:a[h++]=T(g)*v;case 125*y:case 59:case 0:switch(A){case 0:case 125:C=0;case 59+l:v==-1&&(g=f(g,/\f/g,"")),d>0&&T(g)-u&&st(d>32?ce(g+";",n,r,u-1,c):ce(f(g," ","")+";",n,r,u-2,c),c);break;case 59:g+=";";default:if(st(w=ae(g,e,r,h,l,o,a,S,k=[],R=[],u,i),i),A===123)if(l===0)St(g,e,w,w,k,i,u,a,R);else switch(p===99&&I(g,3)===110?100:p){case 100:case 108:case 109:case 115:St(t,w,w,n&&st(ae(t,w,w,0,0,o,a,S,o,k=[],u,R),R),o,R,u,a,n?k:R);break;default:St(g,w,w,w,[""],R,0,a,R)}}h=l=d=0,y=v=1,S=g="",u=s;break;case 58:u=1+T(g),d=m;default:if(y<1){if(A==123)--y;else if(A==125&&y++==0&&br()==125)continue}switch(g+=te(A),A*y){case 38:v=l>0?1:(g+="\f",-1);break;case 44:a[h++]=(T(g)-1)*v,v=1;break;case 64:V()===45&&(g+=Bt(N())),p=V(),l=u=T(S=g+=Ar(vt())),A++;break;case 45:m===45&&T(g)==2&&(y=0)}}return i}function ae(t,e,r,n,o,i,s,a,c,h,l,u){for(var p=o-1,d=o===0?i:[""],m=Ee(d),y=0,C=0,v=0;y<n;++y)for(var A=0,S=U(t,p+1,p=Ae(C=s[y])),k=t;A<m;++A)(k=ke(C>0?d[A]+" "+S:f(S,/&\f/g,d[A])))&&(c[v++]=k);return Pt(t,e,r,o===0?jt:a,c,h,l,u)}function Er(t,e,r,n){return Pt(t,e,r,Se,te(yr()),U(t,2,-2),0,n)}function ce(t,e,r,n,o){return Pt(t,e,r,Qt,U(t,0,n),U(t,n+1,-1),n,o)}function Re(t,e,r){switch(gr(t,e)){case 5103:return b+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+t+t;case 4789:return at+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return b+t+at+t+x+t+t;case 5936:switch(I(t,e+11)){case 114:return b+t+x+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return b+t+x+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return b+t+x+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return b+t+x+t+t;case 6165:return b+t+x+"flex-"+t+t;case 5187:return b+t+f(t,/(\w+).+(:[^]+)/,b+"box-$1$2"+x+"flex-$1$2")+t;case 5443:return b+t+x+"flex-item-"+f(t,/flex-|-self/g,"")+(D(t,/flex-|baseline/)?"":x+"grid-row-"+f(t,/flex-|-self/g,""))+t;case 4675:return b+t+x+"flex-line-pack"+f(t,/align-content|flex-|-self/g,"")+t;case 5548:return b+t+x+f(t,"shrink","negative")+t;case 5292:return b+t+x+f(t,"basis","preferred-size")+t;case 6060:return b+"box-"+f(t,"-grow","")+b+t+x+f(t,"grow","positive")+t;case 4554:return b+f(t,/([^-])(transform)/g,"$1"+b+"$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+x+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+t+t;case 4200:if(!D(t,/flex-|baseline/))return x+"grid-column-align"+U(t,e)+t;break;case 2592:case 3360:return x+f(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,o){return e=o,D(n.props,/grid-\w+-end/)})?~xt(t+(r=r[e].value),"span",0)?t:x+f(t,"-start","")+t+x+"grid-row-span:"+(~xt(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(t,/\d+/))+";":x+f(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?t:x+f(f(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,b+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(t)-1-e>6)switch(I(t,e+1)){case 109:if(I(t,e+4)!==45)break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+at+(I(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~xt(t,"stretch",0)?Re(f(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return f(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,c,h){return x+o+":"+i+h+(s?x+o+"-span:"+(a?c:+c-+i)+h:"")+t});case 4949:if(I(t,e+6)===121)return f(t,":",":"+b)+t;break;case 6444:switch(I(t,I(t,14)===45?18:11)){case 120:return f(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+b+(I(t,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+x+"$2box$3")+t;case 100:return f(t,":",":"+x)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return f(t,"scroll-","scroll-snap-")+t}return t}function Et(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function $r(t,e,r,n){switch(t.type){case hr:if(t.children.length)break;case dr:case Qt:return t.return=t.return||t.value;case Se:return"";case Ce:return t.return=t.value+"{"+Et(t.children,n)+"}";case jt:if(!T(t.value=t.props.join(",")))return""}return T(r=Et(t.children,n))?t.return=t.value+"{"+r+"}":""}function Rr(t){var e=Ee(t);return function(r,n,o,i){for(var s="",a=0;a<e;a++)s+=t[a](r,n,o,i)||"";return s}}function Ir(t){return function(e){e.root||(e=e.return)&&t(e)}}function jr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Qt:t.return=Re(t.value,t.length,r);return;case Ce:return Et([L(t,{value:f(t.value,"@","@"+b)})],n);case jt:if(t.length)return mr(r=t.props,function(o){switch(D(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":J(L(t,{props:[f(o,/:(read-\w+)/,":"+at+"$1")]})),J(L(t,{props:[o]})),Wt(t,{props:se(r,n)});break;case"::placeholder":J(L(t,{props:[f(o,/:(plac\w+)/,":"+b+"input-$1")]})),J(L(t,{props:[f(o,/:(plac\w+)/,":"+at+"$1")]})),J(L(t,{props:[f(o,/:(plac\w+)/,x+"input-$1")]})),J(L(t,{props:[o]})),Wt(t,{props:se(r,n)});break}return""})}}var _r={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},X=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",Ie="active",je="data-styled-version",Nt="6.1.13",ee=`/*!sc*/
`,$t=typeof window<"u"&&"HTMLElement"in window,Pr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),Tt=Object.freeze([]),Q=Object.freeze({});function Or(t,e,r){return r===void 0&&(r=Q),t.theme!==r.theme&&t.theme||e||r.theme}var _e=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tr=/(^-|-$)/g;function ue(t){return t.replace(Nr,"-").replace(Tr,"")}var zr=/(a)(d)/gi,bt=52,pe=function(t){return String.fromCharCode(t+(t>25?39:97))};function qt(t){var e,r="";for(e=Math.abs(t);e>bt;e=e/bt|0)r=pe(e%bt)+r;return(pe(e%bt)+r).replace(zr,"$1-$2")}var Mt,Pe=5381,K=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Oe=function(t){return K(Pe,t)};function Dr(t){return qt(Oe(t)>>>0)}function Fr(t){return t.displayName||t.name||"Component"}function Lt(t){return typeof t=="string"&&!0}var Ne=typeof Symbol=="function"&&Symbol.for,Te=Ne?Symbol.for("react.memo"):60115,Gr=Ne?Symbol.for("react.forward_ref"):60112,Br={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ze={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lr=((Mt={})[Gr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mt[Te]=ze,Mt);function fe(t){return("type"in(e=t)&&e.type.$$typeof)===Te?ze:"$$typeof"in t?Lr[t.$$typeof]:Br;var e}var Hr=Object.defineProperty,Wr=Object.getOwnPropertyNames,le=Object.getOwnPropertySymbols,Yr=Object.getOwnPropertyDescriptor,Vr=Object.getPrototypeOf,de=Object.prototype;function De(t,e,r){if(typeof e!="string"){if(de){var n=Vr(e);n&&n!==de&&De(t,n,r)}var o=Wr(e);le&&(o=o.concat(le(e)));for(var i=fe(t),s=fe(e),a=0;a<o.length;++a){var c=o[a];if(!(c in Mr||r&&r[c]||s&&c in s||i&&c in i)){var h=Yr(e,c);try{Hr(t,c,h)}catch{}}}}return t}function tt(t){return typeof t=="function"}function re(t){return typeof t=="object"&&"styledComponentId"in t}function Y(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function he(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function ct(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Jt(t,e,r){if(r===void 0&&(r=!1),!r&&!ct(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Jt(t[n],e[n]);else if(ct(e))for(var n in e)t[n]=Jt(t[n],e[n]);return t}function ne(t,e){Object.defineProperty(t,"toString",{value:e})}function ut(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var qr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;e>=i;)if((i<<=1)<0)throw ut(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),c=(s=0,r.length);s<c;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r;this.groupSizes[e]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(ee);return r},t}(),Ct=new Map,Rt=new Map,At=1,wt=function(t){if(Ct.has(t))return Ct.get(t);for(;Rt.has(At);)At++;var e=At++;return Ct.set(t,e),Rt.set(e,t),e},Jr=function(t,e){At=e+1,Ct.set(t,e),Rt.set(e,t)},Kr="style[".concat(X,"][").concat(je,'="').concat(Nt,'"]'),Ur=new RegExp("^".concat(X,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zr=function(t,e,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&t.registerName(e,n)},Xr=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(ee),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var c=a.match(Ur);if(c){var h=0|parseInt(c[1],10),l=c[2];h!==0&&(Jr(l,h),Zr(t,l,c[3]),t.getTag().insertRules(h,o)),o.length=0}else o.push(a)}}},ge=function(t){for(var e=document.querySelectorAll(Kr),r=0,n=e.length;r<n;r++){var o=e[r];o&&o.getAttribute(X)!==Ie&&(Xr(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function Qr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fe=function(t){var e=document.head,r=t||e,n=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(X,"]")));return c[c.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(X,Ie),n.setAttribute(je,Nt);var s=Qr();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},tn=function(){function t(e){this.element=Fe(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw ut(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),en=function(){function t(e){this.element=Fe(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),rn=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),me=$t,nn={isServer:!$t,useCSSOMInjection:!Pr},Ge=function(){function t(e,r,n){e===void 0&&(e=Q),r===void 0&&(r={});var o=this;this.options=_(_({},nn),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&$t&&me&&(me=!1,ge(this)),ne(this,function(){return function(i){for(var s=i.getTag(),a=s.length,c="",h=function(u){var p=function(v){return Rt.get(v)}(u);if(p===void 0)return"continue";var d=i.names.get(p),m=s.getGroup(u);if(d===void 0||!d.size||m.length===0)return"continue";var y="".concat(X,".g").concat(u,'[id="').concat(p,'"]'),C="";d!==void 0&&d.forEach(function(v){v.length>0&&(C+="".concat(v,","))}),c+="".concat(m).concat(y,'{content:"').concat(C,'"}').concat(ee)},l=0;l<a;l++)h(l);return c}(o)})}return t.registerId=function(e){return wt(e)},t.prototype.rehydrate=function(){!this.server&&$t&&ge(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(_(_({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new rn(o):n?new tn(o):new en(o)}(this.options),new qr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(wt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(wt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(wt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),on=/&/g,sn=/^\s*\/\/.*$/gm;function Be(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Be(r.children,e)),r})}function an(t){var e,r,n,o=Q,i=o.options,s=i===void 0?Q:i,a=o.plugins,c=a===void 0?Tt:a,h=function(p,d,m){return m.startsWith(r)&&m.endsWith(r)&&m.replaceAll(r,"").length>0?".".concat(e):p},l=c.slice();l.push(function(p){p.type===jt&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(on,r).replace(n,h))}),s.prefix&&l.push(jr),l.push($r);var u=function(p,d,m,y){d===void 0&&(d=""),m===void 0&&(m=""),y===void 0&&(y="&"),e=y,r=d,n=new RegExp("\\".concat(r,"\\b"),"g");var C=p.replace(sn,""),v=kr(m||d?"".concat(m," ").concat(d," { ").concat(C," }"):C);s.namespace&&(v=Be(v,s.namespace));var A=[];return Et(v,Rr(l.concat(Ir(function(S){return A.push(S)})))),A};return u.hash=c.length?c.reduce(function(p,d){return d.name||ut(15),K(p,d.name)},Pe).toString():"",u}var cn=new Ge,Kt=an(),Me=F.createContext({shouldForwardProp:void 0,styleSheet:cn,stylis:Kt});Me.Consumer;F.createContext(void 0);function ye(){return Zt.useContext(Me)}var un=function(){function t(e,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Kt);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,ne(this,function(){throw ut(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Kt),this.name+e.hash},t}(),pn=function(t){return t>="A"&&t<="Z"};function be(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;pn(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Le=function(t){return t==null||t===!1||t===""},He=function(t){var e,r,n=[];for(var o in t){var i=t[o];t.hasOwnProperty(o)&&!Le(i)&&(Array.isArray(i)&&i.isCss||tt(i)?n.push("".concat(be(o),":"),i,";"):ct(i)?n.push.apply(n,kt(kt(["".concat(o," {")],He(i),!1),["}"],!1)):n.push("".concat(be(o),": ").concat((e=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in _r||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function q(t,e,r,n){if(Le(t))return[];if(re(t))return[".".concat(t.styledComponentId)];if(tt(t)){if(!tt(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var o=t(e);return q(o,e,r,n)}var i;return t instanceof un?r?(t.inject(r,n),[t.getName(n)]):[t]:ct(t)?He(t):Array.isArray(t)?Array.prototype.concat.apply(Tt,t.map(function(s){return q(s,e,r,n)})):[t.toString()]}function fn(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(tt(r)&&!re(r))return!1}return!0}var ln=Oe(Nt),dn=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&fn(e),this.componentId=r,this.baseHash=K(ln,r),this.baseStyle=n,Ge.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Y(o,this.staticRulesId);else{var i=he(q(this.rules,e,r,n)),s=qt(K(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=Y(o,s),this.staticRulesId=s}else{for(var c=K(this.baseHash,n.hash),h="",l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u=="string")h+=u;else if(u){var p=he(q(u,e,r,n));c=K(c,p+l),h+=p}}if(h){var d=qt(c>>>0);r.hasNameForId(this.componentId,d)||r.insertRules(this.componentId,d,n(h,".".concat(d),void 0,this.componentId)),o=Y(o,d)}}return o},t}(),We=F.createContext(void 0);We.Consumer;var Ht={};function hn(t,e,r){var n=re(t),o=t,i=!Lt(t),s=e.attrs,a=s===void 0?Tt:s,c=e.componentId,h=c===void 0?function(k,R){var w=typeof k!="string"?"sc":ue(k);Ht[w]=(Ht[w]||0)+1;var g="".concat(w,"-").concat(Dr(Nt+w+Ht[w]));return R?"".concat(R,"-").concat(g):g}(e.displayName,e.parentComponentId):c,l=e.displayName,u=l===void 0?function(k){return Lt(k)?"styled.".concat(k):"Styled(".concat(Fr(k),")")}(t):l,p=e.displayName&&e.componentId?"".concat(ue(e.displayName),"-").concat(e.componentId):e.componentId||h,d=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(n&&o.shouldForwardProp){var y=o.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;m=function(k,R){return y(k,R)&&C(k,R)}}else m=y}var v=new dn(r,p,n?o.componentStyle:void 0);function A(k,R){return function(w,g,rt){var pt=w.attrs,Je=w.componentStyle,Ke=w.defaultProps,Ue=w.foldedComponentIds,Ze=w.styledComponentId,Xe=w.target,Qe=F.useContext(We),tr=ye(),zt=w.shouldForwardProp||tr.shouldForwardProp,oe=Or(g,Qe,Ke)||Q,z=function(lt,ot,dt){for(var it,H=_(_({},ot),{className:void 0,theme:dt}),Ft=0;Ft<lt.length;Ft+=1){var ht=tt(it=lt[Ft])?it(H):it;for(var B in ht)H[B]=B==="className"?Y(H[B],ht[B]):B==="style"?_(_({},H[B]),ht[B]):ht[B]}return ot.className&&(H.className=Y(H.className,ot.className)),H}(pt,g,oe),ft=z.as||Xe,nt={};for(var G in z)z[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&z.theme===oe||(G==="forwardedAs"?nt.as=z.forwardedAs:zt&&!zt(G,ft)||(nt[G]=z[G]));var ie=function(lt,ot){var dt=ye(),it=lt.generateAndInjectStyles(ot,dt.styleSheet,dt.stylis);return it}(Je,z),Dt=Y(Ue,Ze);return ie&&(Dt+=" "+ie),z.className&&(Dt+=" "+z.className),nt[Lt(ft)&&!_e.has(ft)?"class":"className"]=Dt,nt.ref=rt,Zt.createElement(ft,nt)}(S,k,R)}A.displayName=u;var S=F.forwardRef(A);return S.attrs=d,S.componentStyle=v,S.displayName=u,S.shouldForwardProp=m,S.foldedComponentIds=n?Y(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=p,S.target=n?o.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(R){for(var w=[],g=1;g<arguments.length;g++)w[g-1]=arguments[g];for(var rt=0,pt=w;rt<pt.length;rt++)Jt(R,pt[rt],!0);return R}({},o.defaultProps,k):k}}),ne(S,function(){return".".concat(S.styledComponentId)}),i&&De(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function we(t,e){for(var r=[t[0]],n=0,o=e.length;n<o;n+=1)r.push(e[n],t[n+1]);return r}var xe=function(t){return Object.assign(t,{isCss:!0})};function gn(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(tt(t)||ct(t))return xe(q(we(Tt,kt([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?q(n):xe(q(we(n,e)))}function Ut(t,e,r){if(r===void 0&&(r=Q),!e)throw ut(1,e);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return t(e,r,gn.apply(void 0,kt([o],i,!1)))};return n.attrs=function(o){return Ut(t,e,_(_({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Ut(t,e,_(_({},r),o))},n}var Ye=function(t){return Ut(hn,t)},j=Ye;_e.forEach(function(t){j[t]=Ye(t)});const mn=j.div`
  width: 44px;
  height: 44px;
  position: relative;
  margin-left: 18px;
  border-radius: 50%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  background: #1b2c50;
  &:hover {
    background: #2e4c89;
  }
`,yn=j.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 80px;
  cursor: pointer;
  color: white;
`,bn=j.div`
  color: var(--color-white);
  font-family: Heebo;
  font-size: 19px;
  line-height: 28px;
  user-select: none;
  font-weight: 300;
  margin-top: 2px;
  font-family: Heebo;
`;function Ve({text:t}){return E.jsx(yn,{children:E.jsx(mn,{children:E.jsx(bn,{children:t})})})}const wn=It(Ve,F,Xt,{props:{text:"string"}});customElements.get("account-button")||customElements.define("account-button",wn);const xn=j.div`
  min-width: 250px;
  max-width: 250px;
  margin-bottom: 5px;
  transition: 0.3s;
  box-shadow: 0 3px 5px 0 hsla(0, 0%, 85%, .8);
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-snap-align: unset;
  border: 1px solid rgb(var(--rgb-color-border-gainsboro));
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  margin-top: 10px;
`,vn=j.div`
  ${({$url:t})=>t&&`background-image: url(${t})`};
  border-radius: 6px;
  margin: 8px 8px 0;
  width: calc(100% - 16px);
  background-color: #000;
  background-size: 100% 100%;
  height: 132px;
  padding-bottom: var(--channels-thumbnail-bottom-padding);
  position: relative;
`,Sn=j.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px 12px 12px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 20px;
`,Cn=j.div`
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: Heebo;
`,An=j.div`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow-x: overlay;
  scroll-snap-type: x mandatory;
  justify-content: unset;
  min-height: 175px !important;
  width: 96vw;
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;function kn({children:t}){return E.jsx(An,{children:t})}function qe({items:t}){return E.jsx(kn,{children:Array.isArray(t)&&t.map(({title:e,url:r},n)=>E.jsxs(xn,{children:[E.jsx(vn,{$url:r}),E.jsx(Sn,{children:E.jsx(Cn,{children:e})})]},n))})}const En=It(qe,F,Xt,{props:{items:"json"}});customElements.get("collection-cards")||customElements.define("collection-cards",En);function $n(){return[{title:"Fox Sports 1",url:"https://d22cst65zw0ae2.cloudfront.net/channels/FOX_SPORTS_1.png"},{title:"ESPN",url:"https://d22cst65zw0ae2.cloudfront.net/raptor/ESPN.png"},{title:"TNT",url:"https://d22cst65zw0ae2.cloudfront.net/raptor/TNT.png"},{title:"Caffeine TV",url:"https://d22cst65zw0ae2.cloudfront.net/channels/CAFFEINE_TV.png"},{title:"Fox Weather",url:"https://d22cst65zw0ae2.cloudfront.net/channels/FOX_WEATHER.png"}]}function Rn(){const t=$n();return console.log(t),E.jsx(qe,{items:t})}const In=It(Rn,F,Xt,{});customElements.get("recently-viewed-channels")||customElements.define("recently-viewed-channels",In);const jn=j.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);
  font-weight: 500;
  text-align: center;
  background-color: var(--color-menu);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  position: sticky;
  left: 0px;
  top: 0px;
  height: 83px;
  z-index: 103;
  width: 100%;
`,_n=j.img`
  padding-left: 20px;
  cursor: pointer;
`,Pn=j.div`
  margin-right: 20px;
`,On=""+new URL("mediacloud-c_dtOvYE.svg",import.meta.url).href;function Nn(){return E.jsxs(jn,{children:[E.jsx(_n,{src:On}),E.jsx(Pn,{children:E.jsx(Ve,{text:"JK"})})]})}const Tn=j.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin-right: calc(-1 * calc(100vw - 100%));
  max-width: 100%;
  height: 72px;
`,zn=j.div`
  position: sticky;
  background-color: var(--color-white);
  top: 83px;
  z-index: 9;
  transition: top 0.25s ease-in-out;
`,Dn=j.div`
  ${({$isActive:t})=>t&&`
    background-color: rgba(36, 178, 218, .14) !important;
    border-radius: 4px;
`}
  height: 32px;
  white-space: nowrap;
  border: none !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 500;
  height: 32px;
  margin-right: 18px !important;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: Heebo;
  line-height: 30px;
  &:hover {
    background-color: rgba(36, 178, 218, 0.14) !important;
    border-radius: 4px;
  }
`,ve=[{title:"Home",page:"home"},{title:"Assets",page:"assets"},{title:"Collections",page:"collections"},{title:"Replay",page:"replay"},{title:"Svelte",page:"svelte"},{title:"Vue",page:"vue"}];function Fn(){var o;const t=window.location.hostname==="fox-poc.github.io"?"/mediacloud-ux-root-config-poc/":"/",[e,r]=Zt.useState(((o=ve.find(i=>i.page===window.location.pathname.replace(`${t}`,"")))==null?void 0:o.title)||""),n=i=>{r(i.title),window.history.pushState({},e,i.page)};return E.jsx(zn,{children:E.jsx(Tn,{children:ve.map(i=>E.jsx(Dn,{$isActive:i.title===e,onClick:()=>n(i),children:i.title},i.title))})})}function Bn(){return E.jsxs("div",{style:{fontFamily:"Arial, sans-serif"},children:[E.jsx(Nn,{}),E.jsx(Fn,{})]})}export{Bn as default};
