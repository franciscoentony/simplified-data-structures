(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55838,(e,t,i)=>{"use strict";var n=e.r(71645),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useState,l=n.useEffect,a=n.useLayoutEffect,o=n.useDebugValue;function d(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!r(e,i)}catch(e){return!0}}var u="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),n=s({inst:{value:i,getSnapshot:t}}),r=n[0].inst,u=n[1];return a(function(){r.value=i,r.getSnapshot=t,d(r)&&u({inst:r})},[e,i,t]),l(function(){return d(r)&&u({inst:r}),e(function(){d(r)&&u({inst:r})})},[e]),o(i),i};i.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},2239,(e,t,i)=>{"use strict";t.exports=e.r(55838)},38352,10101,85765,24088,81115,e=>{"use strict";let t,i;var n,r=e.i(43476),s=e.i(71645),l=e.i(68757),a=e.i(49721);e.s(["default",0,function({onFechar:e,...t}){let[i,n]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=setTimeout(()=>{n(!1)},4e3);return()=>clearTimeout(e)},[]),(0,r.jsx)("div",{children:i&&(0,r.jsxs)("div",{className:"fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-purple-700 text-white font-normal px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4",children:[(0,r.jsxs)("span",{children:["A ",t.estrutura," está cheia. Remova um item para adicionar."]}),(0,r.jsx)("button",{onClick:e,className:"bg-black/20 hover:bg-black/40 w-10 h-10 p-2 rounded-full cursor-pointer",children:(0,r.jsx)(a.FontAwesomeIcon,{icon:l.faXmark})})]})})}],38352),e.s(["default",0,function({titulo:e,descricao:t}){return(0,r.jsxs)("div",{className:"w-full mb-20 text-start",children:[(0,r.jsx)("h1",{className:"text-4xl font-semibold",children:e}),(0,r.jsx)("p",{className:"text-stone-400 mt-2",children:t})]})}],10101),e.s(["default",0,function({...e}){let[t,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{setTimeout(()=>{i(!0)},500)},[]),(0,r.jsxs)("div",{className:`w-auto px-3 py-1.5 rounded-xl flex items-center select-none bg-stone-500/30 duration-300 ${t?"opacity-100":"opacity-0"}`,children:[(0,r.jsx)(a.FontAwesomeIcon,{icon:l.faCaretLeft,className:"text-base md:text-lg mr-1"}),(0,r.jsxs)("p",{className:"text-sm md:text-lg whitespace-nowrap font-bold",children:["Índice ",e.indice]})]})}],85765);var o=e.i(42010);let d=(0,o.tv)({slots:{base:"breadcrumbs",item:"breadcrumbs__item",link:"breadcrumbs__link",separator:"breadcrumbs__separator"}});var u=e.i(23316);e.i(47167);class c{constructor(e){this.value=null,this.level=0,this.hasChildNodes=!1,this.rendered=null,this.textValue="",this["aria-label"]=void 0,this.index=0,this.parentKey=null,this.prevKey=null,this.nextKey=null,this.firstChildKey=null,this.lastChildKey=null,this.props={},this.colSpan=null,this.colIndex=null,this.type=this.constructor.type,this.key=e}get childNodes(){throw Error("childNodes is not supported")}clone(){let e=new this.constructor(this.key);return e.value=this.value,e.level=this.level,e.hasChildNodes=this.hasChildNodes,e.rendered=this.rendered,e.textValue=this.textValue,e["aria-label"]=this["aria-label"],e.index=this.index,e.parentKey=this.parentKey,e.prevKey=this.prevKey,e.nextKey=this.nextKey,e.firstChildKey=this.firstChildKey,e.lastChildKey=this.lastChildKey,e.props=this.props,e.render=this.render,e.colSpan=this.colSpan,e.colIndex=this.colIndex,e}filter(e,t,i){let n=this.clone();return t.addDescendants(n,e),n}}class h extends c{filter(e,t,i){let[n,r]=x(e,t,this.firstChildKey,i),s=this.clone();return s.firstChildKey=n,s.lastChildKey=r,s}}class p extends c{static{this.type="header"}}class m extends c{static{this.type="loader"}}class f extends h{static{this.type="item"}filter(e,t,i){if(i(this.textValue,this)){let i=this.clone();return t.addDescendants(i,e),i}return null}}class b extends h{static{this.type="section"}filter(e,t,i){let n=super.filter(e,t,i);if(n&&null!==n.lastChildKey){let t=e.getItem(n.lastChildKey);if(t&&"header"!==t.type)return n}return null}}class y{get size(){return this.itemCount}getKeys(){return this.keyMap.keys()}*[Symbol.iterator](){let e=null!=this.firstKey?this.keyMap.get(this.firstKey):void 0;for(;e;)yield e,e=null!=e.nextKey?this.keyMap.get(e.nextKey):void 0}getChildren(e){let t=this.keyMap;return{*[Symbol.iterator](){let i=t.get(e),n=i?.firstChildKey!=null?t.get(i.firstChildKey):null;for(;n;)yield n,n=null!=n.nextKey?t.get(n.nextKey):void 0}}}getKeyBefore(e){let t=this.keyMap.get(e);if(!t)return null;if(null!=t.prevKey){for(t=this.keyMap.get(t.prevKey);t&&"item"!==t.type&&null!=t.lastChildKey;)t=this.keyMap.get(t.lastChildKey);return t?.key??null}return t.parentKey}getKeyAfter(e){let t=this.keyMap.get(e);if(!t)return null;if("item"!==t.type&&null!=t.firstChildKey)return t.firstChildKey;for(;t;){if(null!=t.nextKey)return t.nextKey;if(null!=t.parentKey)t=this.keyMap.get(t.parentKey);else break}return null}getFirstKey(){return this.firstKey}getLastKey(){let e=null!=this.lastKey?this.keyMap.get(this.lastKey):null;for(;e?.lastChildKey!=null;)e=this.keyMap.get(e.lastChildKey);return e?.key??null}getItem(e){return this.keyMap.get(e)??null}at(){throw Error("Not implemented")}clone(){let e=new this.constructor;return e.keyMap=new Map(this.keyMap),e.firstKey=this.firstKey,e.lastKey=this.lastKey,e.itemCount=this.itemCount,e}addNode(e){if(this.frozen)throw Error("Cannot add a node to a frozen collection");"item"===e.type&&null==this.keyMap.get(e.key)&&this.itemCount++,this.keyMap.set(e.key,e)}addDescendants(e,t){for(let i of(this.addNode(e),t.getChildren(e.key)))this.addDescendants(i,t)}removeNode(e){if(this.frozen)throw Error("Cannot remove a node to a frozen collection");let t=this.keyMap.get(e);null!=t&&"item"===t.type&&this.itemCount--,this.keyMap.delete(e)}commit(e,t,i=!1){if(this.frozen)throw Error("Cannot commit a frozen collection");this.firstKey=e,this.lastKey=t,this.frozen=!i}filter(e){let t=new this.constructor,[i,n]=x(this,t,this.firstKey,e);return t?.commit(i,n),t}constructor(){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.frozen=!1,this.itemCount=0}}function x(e,t,i,n){if(null==i)return[null,null];let r=null,s=null,l=e.getItem(i);for(;null!=l;){let i=l.filter(e,t,n);null!=i&&(i.nextKey=null,s&&(i.prevKey=s.key,s.nextKey=i.key),null==r&&(r=i),t.addNode(i),s=i),l=l.nextKey?e.getItem(l.nextKey):null}if(s&&"separator"===s.type){let e=s.prevKey;t.removeNode(s.key),e?(s=t.getItem(e)).nextKey=null:s=null}return[r?.key??null,s?.key??null]}class g{constructor(e){this._firstChild=null,this._lastChild=null,this._previousSibling=null,this._nextSibling=null,this._parentNode=null,this._minInvalidChildIndex=null,this.ownerDocument=e}*[Symbol.iterator](){let e=this.firstChild;for(;e;)yield e,e=e.nextSibling}get firstChild(){return this._firstChild}set firstChild(e){this._firstChild=e,this.ownerDocument.markDirty(this)}get lastChild(){return this._lastChild}set lastChild(e){this._lastChild=e,this.ownerDocument.markDirty(this)}get previousSibling(){return this._previousSibling}set previousSibling(e){this._previousSibling=e,this.ownerDocument.markDirty(this)}get nextSibling(){return this._nextSibling}set nextSibling(e){this._nextSibling=e,this.ownerDocument.markDirty(this)}get parentNode(){return this._parentNode}set parentNode(e){this._parentNode=e,this.ownerDocument.markDirty(this)}get isConnected(){return this.parentNode?.isConnected||!1}invalidateChildIndices(e){(null==this._minInvalidChildIndex||!this._minInvalidChildIndex.isConnected||e.index<this._minInvalidChildIndex.index)&&(this._minInvalidChildIndex=e,this.ownerDocument.markDirty(this))}updateChildIndices(){let e=this._minInvalidChildIndex;for(;e;)e.index=e.previousSibling?e.previousSibling.index+1:0,e=e.nextSibling;this._minInvalidChildIndex=null}appendChild(e){e.parentNode&&e.parentNode.removeChild(e),null==this.firstChild&&(this.firstChild=e),this.lastChild?(this.lastChild.nextSibling=e,e.index=this.lastChild.index+1,e.previousSibling=this.lastChild):(e.previousSibling=null,e.index=0),e.parentNode=this,e.nextSibling=null,this.lastChild=e,this.ownerDocument.markDirty(this),this.isConnected&&this.ownerDocument.queueUpdate()}insertBefore(e,t){if(null==t)return this.appendChild(e);e.parentNode&&e.parentNode.removeChild(e),e.nextSibling=t,e.previousSibling=t.previousSibling,e.index=t.index-1,this.firstChild===t?this.firstChild=e:t.previousSibling&&(t.previousSibling.nextSibling=e),t.previousSibling=e,e.parentNode=t.parentNode,this.invalidateChildIndices(e),this.isConnected&&this.ownerDocument.queueUpdate()}removeChild(e){e.parentNode===this&&(this._minInvalidChildIndex===e&&(this._minInvalidChildIndex=null),e.nextSibling&&(this.invalidateChildIndices(e.nextSibling),e.nextSibling.previousSibling=e.previousSibling),e.previousSibling&&(e.previousSibling.nextSibling=e.nextSibling),this.firstChild===e&&(this.firstChild=e.nextSibling),this.lastChild===e&&(this.lastChild=e.previousSibling),e.parentNode=null,e.nextSibling=null,e.previousSibling=null,e.index=0,this.ownerDocument.markDirty(e),this.isConnected&&this.ownerDocument.queueUpdate())}addEventListener(){}removeEventListener(){}get previousVisibleSibling(){let e=this.previousSibling;for(;e&&e.isHidden;)e=e.previousSibling;return e}get nextVisibleSibling(){let e=this.nextSibling;for(;e&&e.isHidden;)e=e.nextSibling;return e}get firstVisibleChild(){let e=this.firstChild;for(;e&&e.isHidden;)e=e.nextSibling;return e}get lastVisibleChild(){let e=this.lastChild;for(;e&&e.isHidden;)e=e.previousSibling;return e}}class v extends g{constructor(e,t){super(t),this.nodeType=8,this.isMutated=!0,this._index=0,this.isHidden=!1,this.node=null}get index(){return this._index}set index(e){this._index=e,this.ownerDocument.markDirty(this)}get level(){return this.parentNode instanceof v?this.parentNode.level+ +(this.parentNode.node?.type==="item"):0}getMutableNode(){return null==this.node?null:(this.isMutated||(this.node=this.node.clone(),this.isMutated=!0),this.ownerDocument.markDirty(this),this.node)}updateNode(){let e=this.nextVisibleSibling,t=this.getMutableNode();if(null!=t&&(t.index=this.index,t.level=this.level,t.parentKey=this.parentNode instanceof v?this.parentNode.node?.key??null:null,t.prevKey=this.previousVisibleSibling?.node?.key??null,t.nextKey=e?.node?.key??null,t.hasChildNodes=!!this.firstChild,t.firstChildKey=this.firstVisibleChild?.node?.key??null,t.lastChildKey=this.lastVisibleChild?.node?.key??null,(null!=t.colSpan||null!=t.colIndex)&&e)){let i=(t.colIndex??t.index)+(t.colSpan??1);null!=e.node&&i!==e.node.colIndex&&(e.getMutableNode().colIndex=i)}}setProps(e,t,i,n,r){let s,{value:l,textValue:a,id:o,...d}=e;if(null==this.node?(s=new i(o??`react-aria-${++this.ownerDocument.nodeId}`),this.node=s):s=this.getMutableNode(),d.ref=t,s.props=d,s.rendered=n,s.render=r,s.value=l,e["aria-label"]&&(s["aria-label"]=e["aria-label"]),s.textValue=a||("string"==typeof d.children?d.children:"")||e["aria-label"]||"",null!=o&&o!==s.key)throw Error("Cannot change the id of an item");null!=d.colSpan&&(s.colSpan=d.colSpan),this.isConnected&&this.ownerDocument.queueUpdate()}get style(){let e=this;return{get display(){return e.isHidden?"none":""},set display(value){let t="none"===value;if(e.isHidden!==t){(e.parentNode?.firstVisibleChild===e||e.parentNode?.lastVisibleChild===e)&&e.ownerDocument.markDirty(e.parentNode);let i=e.previousVisibleSibling,n=e.nextVisibleSibling;i&&e.ownerDocument.markDirty(i),n&&e.ownerDocument.markDirty(n),e.isHidden=t,e.ownerDocument.markDirty(e)}}}}hasAttribute(){}setAttribute(){}setAttributeNS(){}removeAttribute(){}}class C extends g{constructor(e){super(null),this.nodeType=11,this.ownerDocument=this,this.dirtyNodes=new Set,this.isSSR=!1,this.nodeId=0,this.nodesByProps=new WeakMap,this.nextCollection=null,this.subscriptions=new Set,this.queuedRender=!1,this.inSubscription=!1,this.collection=e,this.nextCollection=e}get isConnected(){return!0}createElement(e){return new v(e,this)}getMutableCollection(){return this.nextCollection||(this.nextCollection=this.collection.clone()),this.nextCollection}markDirty(e){this.dirtyNodes.add(e)}addNode(e){if(e.isHidden||null==e.node)return;let t=this.getMutableCollection();if(!t.getItem(e.node.key))for(let t of e)this.addNode(t);t.addNode(e.node)}removeNode(e){for(let t of e)this.removeNode(t);e.node&&this.getMutableCollection().removeNode(e.node.key)}getCollection(){return this.inSubscription||(this.queuedRender=!1,this.updateCollection()),this.collection}updateCollection(){for(let e of this.dirtyNodes)e instanceof v&&(!e.isConnected||e.isHidden)?this.removeNode(e):e.updateChildIndices();for(let e of this.dirtyNodes)e instanceof v?(e.isConnected&&!e.isHidden&&(e.updateNode(),this.addNode(e)),e.node&&this.dirtyNodes.delete(e),e.isMutated=!1):this.dirtyNodes.delete(e);this.nextCollection&&(this.nextCollection.commit(this.firstVisibleChild?.node?.key??null,this.lastVisibleChild?.node?.key??null,this.isSSR),this.isSSR||(this.collection=this.nextCollection,this.nextCollection=null))}queueUpdate(){if(0!==this.dirtyNodes.size&&!this.queuedRender){for(let e of(this.queuedRender=!0,this.inSubscription=!0,this.isSSR||(this.collection=this.collection.clone()),this.subscriptions))e();this.inSubscription=!1}}subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}resetAfterSSR(){this.isSSR&&(this.isSSR=!1,this.firstChild=null,this.lastChild=null,this.nodeId=0)}}function k(e){let{children:t,items:i,idScope:n,addIdAndValue:r,dependencies:l=[]}=e,a=(0,s.useMemo)(()=>new WeakMap,l);return(0,s.useMemo)(()=>{if(i&&"function"==typeof t){let e=[];for(let l of i){let i=a.get(l);if(!i){let e=(i=t(l)).props.id??l.key??l.id;if(null==e)throw Error("Could not determine key for item");null!=n&&null==i.props.id&&(e=n+":"+e),i=(0,s.cloneElement)(i,r?{key:e,id:e,value:l}:{key:e}),a.set(l,i)}e.push(i)}return e}if("function"!=typeof t)return t},[t,i,a,n,r])}var S=e.i(62918),N=e.i(41975),w=e.i(43221),K=e.i(74080),D=e.i(2239);let I=(0,s.createContext)(!1),P=(0,s.createContext)(null);function E(e){if((0,s.useContext)(P))return e.content;let{collection:t,document:i}=function(e){let[t]=(0,s.useState)(()=>new C(e?.()||new y));return{collection:j((0,s.useCallback)(e=>t.subscribe(e),[t]),(0,s.useCallback)(()=>{let e=t.getCollection();return t.isSSR&&t.resetAfterSSR(),e},[t]),(0,s.useCallback)(()=>(t.isSSR=!0,t.getCollection()),[t])),document:t}}(e.createCollection);return s.default.createElement(s.default.Fragment,null,s.default.createElement(N.Hidden,null,s.default.createElement(P.Provider,{value:i},e.content)),s.default.createElement(M,{render:e.children,collection:t}))}function M({collection:e,render:t}){return t(e)}let j="function"==typeof s.default.useSyncExternalStore?s.default.useSyncExternalStore:function(e,t,i){let n=(0,w.useIsSSR)(),r=(0,s.useRef)(n);r.current=n;let l=(0,s.useCallback)(()=>r.current?i():t(),[t,i]);return(0,D.useSyncExternalStore)(e,l)},R=(0,s.createContext)(null),_=(0,s.createContext)(null);function V(e){let t=(0,s.useContext)(_),i=(t?.dependencies||[]).concat(e.dependencies),n=e.idScope??t?.idScope,r=k({...e,idScope:n,dependencies:i,addIdAndValue:!0});return(0,s.useContext)(P)&&(r=s.default.createElement(z,null,r)),t=(0,s.useMemo)(()=>({dependencies:i,idScope:n}),[n,...i]),s.default.createElement(_.Provider,{value:t},r)}function z({children:e}){let t=(0,s.useContext)(P),i=(0,s.useMemo)(()=>s.default.createElement(P.Provider,{value:null},s.default.createElement(I.Provider,{value:!0},e)),[e]);return(0,w.useIsSSR)()?s.default.createElement(R.Provider,{value:t},i):(0,K.createPortal)(i,t)}function A(e,t,i){return k({items:t?e.getChildren(t.key):e,dependencies:[i],children(t){if("content"===t.type)return s.default.createElement(s.default.Fragment,null);let n=t.render(t);return i&&"item"===t.type?s.default.createElement(s.default.Fragment,null,i({type:"item",key:t.key,dropPosition:"before"}),n,function(e,t,i){let n=t.key,r=e.getKeyAfter(n),l=null!=r?e.getItem(r):null;for(;null!=l&&"item"!==l.type;)l=null!=(r=e.getKeyAfter(l.key))?e.getItem(r):null;let a=null!=t.nextKey?e.getItem(t.nextKey):null;for(;null!=a&&"item"!==a.type;)a=null!=a.nextKey?e.getItem(a.nextKey):null;let o=[];if(null==a){let n=t;for(;n?.type==="item"&&(!l||n.parentKey!==l.parentKey&&l.level<n.level);){let t=i({type:"item",key:n.key,dropPosition:"after"});(0,s.isValidElement)(t)&&o.push((0,s.cloneElement)(t,{key:`${n.key}-after`})),n=null!=n.parentKey?e.getItem(n.parentKey):null}}return o}(e,t,i)):n}})}let L=(0,s.createContext)({CollectionRoot:({collection:e,renderDropIndicator:t})=>A(e,null,t),CollectionBranch:({collection:e,parent:t,renderDropIndicator:i})=>A(e,t,i)});var B=e.i(71356),T=e.i(63499),F=e.i(75975),H=e.i(14232),O=e.i(83222),U=e.i(33336);let q=(0,s.createContext)(null),W=(0,s.forwardRef)(function(e,t){[e,t]=(0,u.useContextProps)(e,t,q);let i=e.href&&!e.isDisabled?"a":"span",{linkProps:n,isPressed:r}=function(e,t){let{elementType:i="a",onPress:n,onPressStart:r,onPressEnd:s,onClick:l,isDisabled:a,...o}=e,d={};"a"!==i&&(d={role:"link",tabIndex:a?void 0:0});let{focusableProps:u}=(0,S.useFocusable)(e,t),{pressProps:c,isPressed:h}=(0,H.usePress)({onPress:n,onPressStart:r,onPressEnd:s,onClick:l,isDisabled:a,ref:t}),p=(0,B.filterDOMProps)(o,{labelable:!0}),m=(0,F.mergeProps)(u,c),f=(0,T.useRouter)(),b=(0,T.useLinkProps)(e);return{isPressed:h,linkProps:(0,F.mergeProps)(p,b,{...m,...d,"aria-disabled":a||void 0,"aria-current":e["aria-current"],onClick:t=>{c.onClick?.(t),(0,T.handleLinkClick)(t,f,e.href,e.routerOptions)}})}}({...e,elementType:i},t),l=u.dom[i],{hoverProps:a,isHovered:o}=(0,U.useHover)(e),{focusProps:d,isFocused:c,isFocusVisible:h}=(0,O.useFocusRing)(),p=(0,u.useRenderProps)({...e,defaultClassName:"react-aria-Link",values:{isCurrent:!!e["aria-current"],isDisabled:e.isDisabled||!1,isPressed:r,isHovered:o,isFocused:c,isFocusVisible:h}}),m=(0,B.filterDOMProps)(e,{global:!0});return delete m.onClick,s.default.createElement(l,{ref:t,slot:e.slot||void 0,...(0,F.mergeProps)(m,p,n,a,d),"data-focused":c||void 0,"data-hovered":o||void 0,"data-pressed":r||void 0,"data-focus-visible":h||void 0,"data-current":!!e["aria-current"]||void 0,"data-disabled":e.isDisabled||void 0},p.children)});var X={};X={"ar-AE":{breadcrumbs:"عناصر الواجهة"},"bg-BG":{breadcrumbs:"Трохи хляб"},"cs-CZ":{breadcrumbs:"Popis cesty"},"da-DK":{breadcrumbs:"Brødkrummer"},"de-DE":{breadcrumbs:"Breadcrumbs"},"el-GR":{breadcrumbs:"Πλοηγήσεις breadcrumb"},"en-US":{breadcrumbs:"Breadcrumbs"},"es-ES":{breadcrumbs:"Migas de pan"},"et-EE":{breadcrumbs:"Lingiread"},"fi-FI":{breadcrumbs:"Navigointilinkit"},"fr-FR":{breadcrumbs:"Chemin de navigation"},"he-IL":{breadcrumbs:"שבילי ניווט"},"hr-HR":{breadcrumbs:"Navigacijski putovi"},"hu-HU":{breadcrumbs:"Morzsamenü"},"it-IT":{breadcrumbs:"Breadcrumb"},"ja-JP":{breadcrumbs:"パンくずリスト"},"ko-KR":{breadcrumbs:"탐색 표시"},"lt-LT":{breadcrumbs:"Naršymo kelias"},"lv-LV":{breadcrumbs:"Atpakaļceļi"},"nb-NO":{breadcrumbs:"Navigasjonsstier"},"nl-NL":{breadcrumbs:"Broodkruimels"},"pl-PL":{breadcrumbs:"Struktura nawigacyjna"},"pt-BR":{breadcrumbs:"Caminho detalhado"},"pt-PT":{breadcrumbs:"Categorias"},"ro-RO":{breadcrumbs:"Miez de pâine"},"ru-RU":{breadcrumbs:"Навигация"},"sk-SK":{breadcrumbs:"Navigačné prvky Breadcrumbs"},"sl-SI":{breadcrumbs:"Drobtine"},"sr-SP":{breadcrumbs:"Putanje navigacije"},"sv-SE":{breadcrumbs:"Sökvägar"},"tr-TR":{breadcrumbs:"İçerik haritaları"},"uk-UA":{breadcrumbs:"Навігаційна стежка"},"zh-CN":{breadcrumbs:"导航栏"},"zh-TW":{breadcrumbs:"導覽列"}};var Y=e.i(24470);let G=(0,s.createContext)(null),$=(0,s.forwardRef)(function(e,t){[e,t]=(0,u.useContextProps)(e,t,G);let{CollectionRoot:i}=(0,s.useContext)(L),{navProps:n}=function(e){var t;let{"aria-label":i,...n}=e,r=(0,Y.useLocalizedStringFormatter)((t=X)&&t.__esModule?t.default:t,"@react-aria/breadcrumbs");return{navProps:{...(0,B.filterDOMProps)(n,{labelable:!0}),"aria-label":i||r.format("breadcrumbs")}}}(e),r=(0,B.filterDOMProps)(e,{global:!0,labelable:!0});return s.default.createElement(E,{content:s.default.createElement(V,e)},l=>s.default.createElement(u.dom.ol,{render:e.render,ref:t,...(0,F.mergeProps)(r,n),slot:e.slot||void 0,style:e.style,className:e.className??"react-aria-Breadcrumbs"},s.default.createElement(G.Provider,{value:e},s.default.createElement(i,{collection:l}))))});class J extends c{static{this.type="item"}}let Z=(n=function(e,t,i){let n=null==i.nextKey,{isDisabled:r,onAction:l}=(0,u.useSlottedContext)(G),a=(0,u.useRenderProps)({...i.props,children:i.rendered,values:{isDisabled:r||n,isCurrent:n},defaultClassName:"react-aria-Breadcrumb"}),o=(0,B.filterDOMProps)(e,{global:!0,labelable:!0});return delete o.id,s.default.createElement(u.dom.li,{...o,...a,ref:t,"data-disabled":r||n||void 0,"data-current":n||void 0},s.default.createElement(q.Provider,{value:{"aria-current":n?"page":null,isDisabled:r||n,onPress:()=>l?.(i.key)}},a.children))},t=({node:e})=>n(e.props,e.props.ref,e),(i=(0,s.forwardRef)((e,i)=>{let r=(0,s.useContext)(S.FocusableContext);if(!(0,s.useContext)(I)){if(n.length>=3)throw Error(n.name+" cannot be rendered outside a collection.");return n(e,i)}return function(e,t,i,n,r){"string"==typeof e&&(e=function(e){return class extends c{static{this.type=e}}}(e));let l=(0,s.useCallback)(s=>{s?.setProps(t,i,e,n,r)},[t,i,n,r,e]),a=(0,s.useContext)(R);if(a){let s=a.ownerDocument.nodesByProps.get(t);return s||((s=a.ownerDocument.createElement(e.type)).setProps(t,i,e,n,r),a.appendChild(s),a.ownerDocument.updateCollection(),a.ownerDocument.nodesByProps.set(t,s)),null}return s.default.createElement(e.type,{ref:l},null)}(J,e,i,"children"in e?e.children:null,e=>s.default.createElement(S.FocusableContext.Provider,{value:r},s.default.createElement(t,{node:e})))})).displayName=n.name,i);var Q=e.i(59381),ee=e.i(92557);let et=(0,o.tv)({slots:{base:"link",icon:"link__icon"}});var ei=e.i(55590);let en=(0,s.createContext)({}),er=({children:e,className:t,...i})=>{let n=s.default.useMemo(()=>et(),[]);return(0,r.jsx)(en,{value:{slots:n},children:(0,r.jsx)(W,{...i,className:(0,Q.composeTwRenderProps)(t,n?.base()),children:t=>(0,r.jsx)(r.Fragment,{children:"function"==typeof e?e(t):e})})})},es=Object.assign(er,{Root:er,Icon:({children:e,className:t,...i})=>{let{slots:n}=(0,s.useContext)(en);return(0,r.jsx)(ei.dom.span,{className:(0,Q.composeSlotClassName)(n?.icon,t),"data-default-icon":e?void 0:"true","data-slot":"link-icon",...i,children:e??(0,r.jsx)(ee.ExternalLinkIcon,{"data-slot":"link-default-icon"})})}}),el=(0,s.createContext)({}),ea=({children:e,className:t,separator:i,...n})=>{let l=s.default.useMemo(()=>d({}),[]);return(0,r.jsx)(el.Provider,{value:{slots:l,separator:i},children:(0,r.jsx)($,{"data-slot":"breadcrumbs",...n,className:(0,Q.composeSlotClassName)(l.base,t),children:e})})},eo=Object.assign(ea,{Root:ea,Item:({children:e,className:t,...i})=>{let{separator:n,slots:l}=(0,s.useContext)(el);return(0,r.jsx)(Z,{className:(0,Q.composeTwRenderProps)(t,l?.item()),"data-slot":"breadcrumbs-item",...i,children:({isCurrent:t})=>"function"==typeof e?e({}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(es,{className:l?.link(),...i,children:e}),!t&&(n?s.default.isValidElement(n)?s.default.cloneElement(n,{className:l?.separator(),"data-slot":"breadcrumbs-separator"}):n:(0,r.jsx)(ee.IconChevronRight,{className:l?.separator(),"data-slot":"breadcrumbs-separator"}))]})})}});e.s(["Breadcrumbs",0,eo],24088);var ed=e.i(97053);let eu=ed.default.div.withConfig({displayName:"BgUniverse2__StyledWrapper",componentId:"sc-dedf8d73-0"})`
  .uiverse-midnight-sky {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: 500px;
    overflow: hidden;
    background-color: #050505;
    position: fixed;
    left: 0;
    z-index: -100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Base Sky Layer */
  .uiverse-midnight-sky .sky-canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: #050505;
  }

  /* Generic star layer style */
  .uiverse-midnight-sky .stars {
    position: absolute;
    inset: 0;
    background-repeat: repeat;
    pointer-events: none;
  }

  /* Layer 1: Small fast twinkling stars - High density */
  .uiverse-midnight-sky .stars-1 {
    background-image: radial-gradient(1px 1px at 10% 10%, #fff, transparent),
      radial-gradient(1px 1px at 30% 20%, #fff, transparent),
      radial-gradient(1px 1px at 50% 50%, #fff, transparent),
      radial-gradient(1px 1px at 70% 30%, #fff, transparent),
      radial-gradient(1px 1px at 90% 10%, #fff, transparent);
    background-size: 200px 200px;
    animation: twinkle 3s ease-in-out infinite;
  }

  /* Layer 2: Medium slower twinkling stars */
  .uiverse-midnight-sky .stars-2 {
    background-image: radial-gradient(1.5px 1.5px at 20% 40%, #fff, transparent),
      radial-gradient(1.5px 1.5px at 60% 85%, #fff, transparent),
      radial-gradient(1.5px 1.5px at 85% 65%, #fff, transparent);
    background-size: 300px 300px;
    animation: twinkle 5s ease-in-out infinite 1s;
  }

  /* Layer 3: Larger, very slow twinkling stars */
  .uiverse-midnight-sky .stars-3 {
    background-image: radial-gradient(2px 2px at 40% 70%, #fff, transparent),
      radial-gradient(2px 2px at 10% 80%, #fff, transparent),
      radial-gradient(2px 2px at 80% 40%, #fff, transparent);
    background-size: 400px 400px;
    animation: twinkle 7s ease-in-out infinite 2s;
  }

  /* Meteor / Shooting Star Layer */
  .uiverse-midnight-sky .meteor {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5);
    opacity: 0;
    pointer-events: none;
  }

  /* Meteor Tail */
  .uiverse-midnight-sky .meteor::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  /* Meteor Instances with staggered starts */
  .uiverse-midnight-sky .m1 {
    top: 10%;
    left: 110%;
    animation: shoot 8s linear infinite;
  }
  .uiverse-midnight-sky .m2 {
    top: 30%;
    left: 110%;
    animation: shoot 12s linear infinite 4s;
  }
  .uiverse-midnight-sky .m3 {
    top: 50%;
    left: 110%;
    animation: shoot 10s linear infinite 2s;
  }

  /* The Moon */
  .uiverse-midnight-sky .moon {
    position: absolute;
    top: 10%;
    right: 10%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 15px 15px 0 0 #fdfbd3;
    filter: drop-shadow(0 0 15px rgba(253, 251, 211, 0.4));
    z-index: 10;
  }

  @media (max-width: 768px) {
    .uiverse-midnight-sky .moon {
      top: 5%;
      right: 5%;
      width: 50px;
      height: 50px;
      box-shadow: 10px 10px 0 0 #fdfbd3;
    }
  }

  /* Twinkle Animation */
  @keyframes twinkle {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }

  /* Shooting Star Animation - Using % instead of vw/vh */
  @keyframes shoot {
    0% {
      transform: translateX(0) translateY(0) rotate(-35deg);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    15% {
      transform: translateX(-1500px) translateY(1000px) rotate(-35deg);
      opacity: 0;
    }
    100% {
      transform: translateX(-1500px) translateY(1000px) rotate(-35deg);
      opacity: 0;
    }
  }`;e.s(["default",0,()=>(0,r.jsx)(eu,{children:(0,r.jsx)("div",{className:"uiverse-midnight-sky",children:(0,r.jsxs)("div",{className:"sky-canvas",children:[(0,r.jsx)("div",{className:"stars stars-1"}),(0,r.jsx)("div",{className:"stars stars-2"}),(0,r.jsx)("div",{className:"stars stars-3"}),(0,r.jsx)("div",{className:"meteor m1"}),(0,r.jsx)("div",{className:"meteor m2"}),(0,r.jsx)("div",{className:"meteor m3"}),(0,r.jsx)("div",{className:"moon"})]})})})],81115)}]);