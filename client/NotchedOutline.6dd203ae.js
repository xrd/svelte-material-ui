import{S as t,i as n,s as e,m as o,k as r,K as i,x as a,L as s,w as c,d as u,a5 as l,Z as f,_ as d,Q as p,$ as h,a0 as y,a1 as _,B as v,a7 as m,O as E,e as g,b,f as C,U as L,v as O,V as A,a8 as P,a9 as I,W as N,X as w,Y as T,n as D,j as H,a as S,c as j,l as $}from"./client.ab23c404.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var W=function(t,n){return(W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function R(t,n){function e(){this.constructor=t}W(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var k=function(){return(k=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function B(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return a}function x(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(B(arguments[n]));return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),V=function(){function t(t,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];this.root_=t,this.initialize.apply(this,x(e)),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new F({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var o;void 0===e&&(e=!1),"function"==typeof CustomEvent?o=new CustomEvent(t,{bubbles:e,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root_.dispatchEvent(o)},t}(),M={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},G=function(t){function n(e){var o=t.call(this,k({},n.defaultAdapter,e))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return R(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return M},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.getWidth=function(){return this.adapter_.getWidth()},n.prototype.shake=function(t){var e=n.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},n.prototype.float=function(t){var e=n.cssClasses,o=e.LABEL_FLOAT_ABOVE,r=e.LABEL_SHAKE;t?this.adapter_.addClass(o):(this.adapter_.removeClass(o),this.adapter_.removeClass(r))},n.prototype.handleShakeAnimationEnd_=function(){var t=n.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},n}(F),K=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return R(n,t),n.attachTo=function(t){return new n(t)},n.prototype.shake=function(t){this.foundation_.shake(t)},n.prototype.float=function(t){this.foundation_.float(t)},n.prototype.getWidth=function(){return this.foundation_.getWidth()},n.prototype.getDefaultFoundation=function(){var t=this;return new G({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},getWidth:function(){return t.root_.scrollWidth},registerInteractionHandler:function(n,e){return t.listen(n,e)},deregisterInteractionHandler:function(n,e){return t.unlisten(n,e)}})},n}(V);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function U(t){let n,e,o,i,s;const l=t[13].default,f=m(l,t,t[12],null);let d=[{class:"mdc-floating-label "+t[1]},t[2]||t[6]&&t[6].id?{for:t[2]||t[6]&&t[6].id}:{},E(t[7],["use","class","for","wrapped"])],h={};for(let t=0;t<d.length;t+=1)h=p(h,d[t]);return{c(){n=g("label"),f&&f.c(),this.h()},l(t){n=b(t,"LABEL",{class:!0});var e=C(n);f&&f.l(e),e.forEach(u),this.h()},h(){L(n,h)},m(a,c){r(a,n,c),f&&f.m(n,null),t[15](n),i=!0,s=[O(e=A.call(null,n,t[0])),O(o=t[5].call(null,n))]},p(t,o){f&&f.p&&4096&o&&f.p(P(l,t,t[12],null),I(l,t[12],o,null)),L(n,N(d,[2&o&&{class:"mdc-floating-label "+t[1]},68&o&&(t[2]||t[6]&&t[6].id?{for:t[2]||t[6]&&t[6].id}:{}),128&o&&E(t[7],["use","class","for","wrapped"])])),e&&w(e.update)&&1&o&&e.update.call(null,t[0])},i(t){i||(c(f,t),i=!0)},o(t){a(f,t),i=!1},d(e){e&&u(n),f&&f.d(e),t[15](null),T(s)}}}function z(t){let n,e,o,i,s;const l=t[13].default,f=m(l,t,t[12],null);let d=[{class:"mdc-floating-label "+t[1]},E(t[7],["use","class","wrapped"])],h={};for(let t=0;t<d.length;t+=1)h=p(h,d[t]);return{c(){n=g("span"),f&&f.c(),this.h()},l(t){n=b(t,"SPAN",{class:!0});var e=C(n);f&&f.l(e),e.forEach(u),this.h()},h(){L(n,h)},m(a,c){r(a,n,c),f&&f.m(n,null),t[14](n),i=!0,s=[O(e=A.call(null,n,t[0])),O(o=t[5].call(null,n))]},p(t,o){f&&f.p&&4096&o&&f.p(P(l,t,t[12],null),I(l,t[12],o,null)),L(n,N(d,[2&o&&{class:"mdc-floating-label "+t[1]},128&o&&E(t[7],["use","class","wrapped"])])),e&&w(e.update)&&1&o&&e.update.call(null,t[0])},i(t){i||(c(f,t),i=!0)},o(t){a(f,t),i=!1},d(e){e&&u(n),f&&f.d(e),t[14](null),T(s)}}}function q(t){let n,e,l,f;const d=[z,U],p=[];function h(t,n){return t[3]?0:1}return n=h(t),e=p[n]=d[n](t),{c(){e.c(),l=o()},l(t){e.l(t),l=o()},m(t,e){p[n].m(t,e),r(t,l,e),f=!0},p(t,[o]){let r=n;n=h(t),n===r?p[n].p(t,o):(i(),a(p[r],1,1,()=>{p[r]=null}),s(),e=p[n],e||(e=p[n]=d[n](t),e.c()),c(e,1),e.m(l.parentNode,l))},i(t){f||(c(e),f=!0)},o(t){a(e),f=!1},d(t){p[n].d(t),t&&u(l)}}}function Q(t,n,e){const o=y(_);let r,i,{use:a=[]}=n,{class:s=""}=n,{for:c=""}=n,{wrapped:u=!1}=n,m=l("SMUI:generic:input:props")||{};f(()=>{i=new K(r)}),d(()=>{i&&i.destroy()});let{$$slots:E={},$$scope:g}=n;return t.$set=t=>{e(7,n=p(p({},n),h(t))),"use"in t&&e(0,a=t.use),"class"in t&&e(1,s=t.class),"for"in t&&e(2,c=t.for),"wrapped"in t&&e(3,u=t.wrapped),"$$scope"in t&&e(12,g=t.$$scope)},n=h(n),[a,s,c,u,r,o,m,n,function(t,...n){return i.shake(t,...n)},function(t,...n){return i.float(t,...n)},function(...t){return i.getWidth(...t)},i,g,E,function(t){v[t?"unshift":"push"](()=>{e(4,r=t)})},function(t){v[t?"unshift":"push"](()=>{e(4,r=t)})}]}class X extends t{constructor(t){super(),n(this,t,Q,q,e,{use:0,class:1,for:2,wrapped:3,shake:8,float:9,getWidth:10})}get shake(){return this.$$.ctx[8]}get float(){return this.$$.ctx[9]}get getWidth(){return this.$$.ctx[10]}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Y=function(t,n){return(Y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function Z(t,n){function e(){this.constructor=t}Y(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var J=function(){return(J=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function tt(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return a}function nt(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(tt(arguments[n]));return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var et=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),ot=function(){function t(t,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];this.root_=t,this.initialize.apply(this,nt(e)),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new et({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var o;void 0===e&&(e=!1),"function"==typeof CustomEvent?o=new CustomEvent(t,{bubbles:e,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root_.dispatchEvent(o)},t}(),rt={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},it=function(t){function n(e){var o=t.call(this,J({},n.defaultAdapter,e))||this;return o.transitionEndHandler_=function(t){return o.handleTransitionEnd(t)},o}return Z(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return rt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},n.prototype.activate=function(){this.adapter_.removeClass(rt.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(rt.LINE_RIPPLE_ACTIVE)},n.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},n.prototype.deactivate=function(){this.adapter_.addClass(rt.LINE_RIPPLE_DEACTIVATING)},n.prototype.handleTransitionEnd=function(t){var n=this.adapter_.hasClass(rt.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&n&&(this.adapter_.removeClass(rt.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(rt.LINE_RIPPLE_DEACTIVATING))},n}(et),at=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Z(n,t),n.attachTo=function(t){return new n(t)},n.prototype.activate=function(){this.foundation_.activate()},n.prototype.deactivate=function(){this.foundation_.deactivate()},n.prototype.setRippleCenter=function(t){this.foundation_.setRippleCenter(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new it({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},hasClass:function(n){return t.root_.classList.contains(n)},setStyle:function(n,e){return t.root_.style.setProperty(n,e)},registerEventHandler:function(n,e){return t.listen(n,e)},deregisterEventHandler:function(n,e){return t.unlisten(n,e)}})},n}(ot);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function st(t){let n,e,o,i,a=[{class:"\n    mdc-line-ripple\n    "+t[1]+"\n    "+(t[2]?"mdc-line-ripple--active":"")+"\n  "},E(t[5],["use","class","active"])],s={};for(let t=0;t<a.length;t+=1)s=p(s,a[t]);return{c(){n=g("div"),this.h()},l(t){n=b(t,"DIV",{class:!0}),C(n).forEach(u),this.h()},h(){L(n,s)},m(a,s){r(a,n,s),t[10](n),i=[O(e=A.call(null,n,t[0])),O(o=t[4].call(null,n))]},p(t,[o]){L(n,N(a,[6&o&&{class:"\n    mdc-line-ripple\n    "+t[1]+"\n    "+(t[2]?"mdc-line-ripple--active":"")+"\n  "},32&o&&E(t[5],["use","class","active"])])),e&&w(e.update)&&1&o&&e.update.call(null,t[0])},i:D,o:D,d(e){e&&u(n),t[10](null),T(i)}}}function ct(t,n,e){const o=y(_);let r,i,{use:a=[]}=n,{class:s=""}=n,{active:c=!1}=n;return f(()=>{i=new at(r)}),d(()=>{i&&i.destroy()}),t.$set=t=>{e(5,n=p(p({},n),h(t))),"use"in t&&e(0,a=t.use),"class"in t&&e(1,s=t.class),"active"in t&&e(2,c=t.active)},n=h(n),[a,s,c,r,o,n,function(...t){return i.activate(...t)},function(...t){return i.deactivate(...t)},function(t,...n){return i.setRippleCenter(t,...n)},i,function(t){v[t?"unshift":"push"](()=>{e(3,r=t)})}]}class ut extends t{constructor(t){super(),n(this,t,ct,st,e,{use:0,class:1,active:2,activate:6,deactivate:7,setRippleCenter:8})}get activate(){return this.$$.ctx[6]}get deactivate(){return this.$$.ctx[7]}get setRippleCenter(){return this.$$.ctx[8]}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var lt=function(t,n){return(lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function ft(t,n){function e(){this.constructor=t}lt(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var dt=function(){return(dt=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function pt(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return a}function ht(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(pt(arguments[n]));return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yt=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),_t=function(){function t(t,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];this.root_=t,this.initialize.apply(this,ht(e)),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new yt({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var o;void 0===e&&(e=!1),"function"==typeof CustomEvent?o=new CustomEvent(t,{bubbles:e,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root_.dispatchEvent(o)},t}(),vt={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},mt=function(t){function n(e){var o=t.call(this,dt({},n.defaultAdapter,e))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return ft(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return vt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.getWidth=function(){return this.adapter_.getWidth()},n.prototype.shake=function(t){var e=n.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},n.prototype.float=function(t){var e=n.cssClasses,o=e.LABEL_FLOAT_ABOVE,r=e.LABEL_SHAKE;t?this.adapter_.addClass(o):(this.adapter_.removeClass(o),this.adapter_.removeClass(r))},n.prototype.handleShakeAnimationEnd_=function(){var t=n.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},n}(yt),Et={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},gt={NOTCH_ELEMENT_PADDING:8},bt={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},Ct=function(t){function n(e){return t.call(this,dt({},n.defaultAdapter,e))||this}return ft(n,t),Object.defineProperty(n,"strings",{get:function(){return Et},enumerable:!0,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return bt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return gt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),n.prototype.notch=function(t){var e=n.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=gt.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(e)},n.prototype.closeNotch=function(){var t=n.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},n}(yt),Lt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return ft(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root_.querySelector(Et.NOTCH_ELEMENT_SELECTOR);var t=this.root_.querySelector("."+mt.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root_.classList.add(bt.OUTLINE_UPGRADED),requestAnimationFrame((function(){t.style.transitionDuration=""}))):this.root_.classList.add(bt.NO_LABEL)},n.prototype.notch=function(t){this.foundation_.notch(t)},n.prototype.closeNotch=function(){this.foundation_.closeNotch()},n.prototype.getDefaultFoundation=function(){var t=this;return new Ct({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},setNotchWidthProperty:function(n){return t.notchElement_.style.setProperty("width",n+"px")},removeNotchWidthProperty:function(){return t.notchElement_.style.removeProperty("width")}})},n}(_t);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ot(t){let n,e;const o=t[11].default,i=m(o,t,t[10],null);return{c(){n=g("div"),i&&i.c(),this.h()},l(t){n=b(t,"DIV",{class:!0});var e=C(n);i&&i.l(e),e.forEach(u),this.h()},h(){H(n,"class","mdc-notched-outline__notch")},m(t,o){r(t,n,o),i&&i.m(n,null),e=!0},p(t,n){i&&i.p&&1024&n&&i.p(P(o,t,t[10],null),I(o,t[10],n,null))},i(t){e||(c(i,t),e=!0)},o(t){a(i,t),e=!1},d(t){t&&u(n),i&&i.d(t)}}}function At(t){let n,e,o,l,f,d,h,y,_,v=!t[3]&&Ot(t),m=[{class:"\n    mdc-notched-outline\n    "+t[1]+"\n    "+(t[2]?"mdc-notched-outline--notched":"")+"\n    "+(t[3]?"mdc-notched-outline--no-label":"")+"\n  "},E(t[6],["use","class","notched","noLabel"])],P={};for(let t=0;t<m.length;t+=1)P=p(P,m[t]);return{c(){n=g("div"),e=g("div"),o=S(),v&&v.c(),l=S(),f=g("div"),this.h()},l(t){n=b(t,"DIV",{class:!0});var r=C(n);e=b(r,"DIV",{class:!0}),C(e).forEach(u),o=j(r),v&&v.l(r),l=j(r),f=b(r,"DIV",{class:!0}),C(f).forEach(u),r.forEach(u),this.h()},h(){H(e,"class","mdc-notched-outline__leading"),H(f,"class","mdc-notched-outline__trailing"),L(n,P)},m(i,a){r(i,n,a),$(n,e),$(n,o),v&&v.m(n,null),$(n,l),$(n,f),t[12](n),y=!0,_=[O(d=A.call(null,n,t[0])),O(h=t[5].call(null,n))]},p(t,[e]){t[3]?v&&(i(),a(v,1,1,()=>{v=null}),s()):v?(v.p(t,e),c(v,1)):(v=Ot(t),v.c(),c(v,1),v.m(n,l)),L(n,N(m,[14&e&&{class:"\n    mdc-notched-outline\n    "+t[1]+"\n    "+(t[2]?"mdc-notched-outline--notched":"")+"\n    "+(t[3]?"mdc-notched-outline--no-label":"")+"\n  "},64&e&&E(t[6],["use","class","notched","noLabel"])])),d&&w(d.update)&&1&e&&d.update.call(null,t[0])},i(t){y||(c(v),y=!0)},o(t){a(v),y=!1},d(e){e&&u(n),v&&v.d(),t[12](null),T(_)}}}function Pt(t,n,e){const o=y(_);let r,i,{use:a=[]}=n,{class:s=""}=n,{notched:c=!1}=n,{noLabel:u=!1}=n;f(()=>{i=new Lt(r)}),d(()=>{i&&i.destroy()});let{$$slots:l={},$$scope:m}=n;return t.$set=t=>{e(6,n=p(p({},n),h(t))),"use"in t&&e(0,a=t.use),"class"in t&&e(1,s=t.class),"notched"in t&&e(2,c=t.notched),"noLabel"in t&&e(3,u=t.noLabel),"$$scope"in t&&e(10,m=t.$$scope)},n=h(n),[a,s,c,u,r,o,n,function(t,...n){return i.notch(t,...n)},function(...t){return i.closeNotch(...t)},i,m,l,function(t){v[t?"unshift":"push"](()=>{e(4,r=t)})}]}class It extends t{constructor(t){super(),n(this,t,Pt,At,e,{use:0,class:1,notched:2,noLabel:3,notch:7,closeNotch:8})}get notch(){return this.$$.ctx[7]}get closeNotch(){return this.$$.ctx[8]}}export{X as F,ut as L,It as N};
