!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("pui",["vue"],t):"object"==typeof exports?exports.pui=t(require("vue")):e.pui=t(e.vue)}(window,(function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t,o){var n=o(3),i=o(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={injectType:"singletonStyleTag",attributes:{context:"pui"},insert:"head",singleton:!0};n(i,r);e.exports=i.locals||{}},function(e,t,o){var n=o(3),i=o(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={injectType:"singletonStyleTag",attributes:{context:"pui"},insert:"head",singleton:!0};n(i,r);e.exports=i.locals||{}},function(e,t,o){var n=o(3),i=o(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={injectType:"singletonStyleTag",attributes:{context:"pui"},insert:"head",singleton:!0};n(i,r);e.exports=i.locals||{}},function(e,t,o){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function c(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function u(e,t){for(var o={},n=[],i=0;i<e.length;i++){var r=e[i],u=t.base?r[0]+t.base:r[0],l=o[u]||0,p="".concat(u," ").concat(l);o[u]=l+1;var s=c(p),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==s?(a[s].references++,a[s].updater(d)):a.push({identifier:p,updater:h(d,t),references:1}),n.push(p)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,s=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function d(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,o){var n=o.css,i=o.media,r=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var b=null,g=0;function h(e,t){var o,n,i;if(t.singleton){var r=g++;o=b||(b=l(t)),n=d.bind(null,o,r,!1),i=d.bind(null,o,r,!0)}else o=l(t),n=f.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=c(o[n]);a[i].references--}for(var r=u(e,t),l=0;l<o.length;l++){var p=c(o[l]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}o=r}}}},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var i=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),r=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(r).concat([i]).join("\n")}var a,c,u;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&i[u[0]]||(o&&(u[2]?u[2]="".concat(o," and ").concat(u[2]):u[2]=o),t.push(u))}},t}},function(t,o){t.exports=e},function(e,t,o){"use strict";var n=o(0);o.n(n).a},function(e,t,o){var n=o(4)(!1);n.push([e.i,".gui-checkbox{position:relative;display:inline-block;padding-left:22px;padding-right:2px;height:30px;line-height:30px}.gui-checkbox-input{width:22px;height:100%;position:absolute;left:0;top:0;opacity:0}.gui-checkbox-label{position:relative;margin-bottom:0;vertical-align:top;height:30px;display:inline-block;white-space:nowrap}.gui-checkbox-label::before{position:absolute;top:7px;left:-20px;display:block;width:16px;height:16px;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.gui-checkbox .gui-checkbox-label::before{border-radius:3px}.gui-checkbox-input:disabled~.gui-checkbox-label::before{background-color:#e9ecef}.gui-checkbox-input:checked~.gui-checkbox-label::before{color:#fff;border-color:#0077cf;background-color:#0077cf}.gui-checkbox-input:focus~.gui-checkbox-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.gui-checkbox-input:focus:not(:checked)~.gui-checkbox-label::before{border-color:#80bdff}.gui-checkbox-input:disabled~.gui-checkbox-label{color:#6c757d}.gui-checkbox-input:not(:disabled):active~.gui-checkbox-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.gui-checkbox-label::after{position:absolute;top:7px;left:-20px;display:block;width:16px;height:16px;content:\"\";background-position:center center;background-repeat:no-repeat;background-size:10px 10px;background-clip:border-box}.gui-checkbox .gui-checkbox-input:checked~.gui-checkbox-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\")}.gui-checkbox .gui-checkbox-input:indeterminate~.gui-checkbox-label::before{border-color:#0077cf;background-color:#0077cf}.gui-checkbox .gui-checkbox-input:not(:checked)~.gui-checkbox-label:hover::before{border-color:#888}.gui-checkbox .gui-checkbox-input:indeterminate~.gui-checkbox-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.gui-checkbox .gui-checkbox-input:disabled:checked~.gui-checkbox-label::before{background-color:rgba(0,123,255,.5)}.gui-checkbox .gui-checkbox-input:disabled:indeterminate~.gui-checkbox-label::before{background-color:rgba(0,123,255,.5)}",""]),e.exports=n},function(e,t,o){"use strict";var n=o(1);o.n(n).a},function(e,t,o){var n=o(4)(!1);n.push([e.i,".gui-input{display:flex;flex-direction:row}.gui-input input{margin:0;font-size:inherit;overflow:visible}.gui-input-label{height:25px;line-height:25px;padding-right:5px;display:inline-block}.gui-input-input{display:inline-block;padding:2px 5px;height:25px;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:5px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.gui-input-input:hover{border:1px solid #aaa}.gui-input-input:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}",""]),e.exports=n},function(e,t,o){"use strict";var n=o(2);o.n(n).a},function(e,t,o){var n=o(4)(!1);n.push([e.i,".gui-popup{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:1000}.gui-popup-close{position:absolute;top:20%;right:20%;width:40px;height:40px;border-radius:20px;background:#fff;cursor:pointer;font-size:20px;text-align:center;margin-top:-15px;margin-right:-15px;line-height:40px}.gui-popup-main{background:#fff;border-radius:10px;position:absolute;left:20%;right:20%;top:20%;bottom:20%;overflow:hidden;padding:20px;box-sizing:border-box;display:flex;flex-direction:column}.gui-popup-header{border-bottom:2px solid #333;padding-bottom:10px;font-size:18px;font-weight:bold}.gui-popup-content{width:100%;flex:1;overflow-y:auto;position:relative}.gui-popup-label{font-size:16px;font-weight:bold;margin-top:10px}.gui-popup-item{padding:5px 5px;border-bottom:1px solid #f5f5f5;position:relative}.gui-popup-item:hover{background-color:#f5f5f5}.gui-popup-line{word-break:break-word;overflow-wrap:break-word;word-wrap:break-word}.gui-popup-tip{color:#666;word-break:break-all;overflow-wrap:break-word;word-wrap:break-word}.gui-popup-arrow{display:inline-block;width:16px;height:16px;pointer-events:none;background-repeat:no-repeat;background-position:center center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%23333' d='M3,2V11Q3,13,5,13H12.5L10.5,15H12L14.5,12.5L12,10H10.5L12.5,12H5Q4,12,4,11V2z'/%3e%3c/svg%3e\")}.gui-popup-table{margin-top:5px;position:relative;border-collapse:collapse;width:100%}.gui-popup-table th,.gui-popup-table td{text-align:left;border:1px solid #eee;padding:5px 5px}.gui-popup-nowrap{white-space:nowrap}",""]),e.exports=n},function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"gui-checkbox"},[o("input",{staticClass:"gui-checkbox-input",attrs:{id:e.id,type:"checkbox"},domProps:{checked:e.value},on:{change:function(t){return e.$emit("change",t.target.checked)}}}),e._v(" "),o("label",{staticClass:"gui-checkbox-label",attrs:{for:e.id}},[e._t("default")],2)])};n._withStripped=!0;var i=function(e,t){return"number"!=typeof e&&(e=parseFloat(e)),isNaN(e)&&(e=0),t&&(e=Math.round(e)),e},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=Math.random().toString().substr(2);return e&&(o=o.substr(0,i(e))),t+o},a={model:{prop:"value",event:"change"},props:{value:{type:Boolean,default:!1}},data:function(){return{id:r(8,"checkbox-")}}};o(6);function c(e,t,o,n,i,r,a,c){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):i&&(u=c?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var p=l.render;l.render=function(e,t){return u.call(t),p(e,t)}}else{var s=l.beforeCreate;l.beforeCreate=s?[].concat(s,u):[u]}return{exports:e,options:l}}var u=c(a,n,[],!1,null,null,null);u.options.__file="src/components/checkbox/checkbox.vue";var l=u.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"gui-input"},[o("label",{staticClass:"gui-input-label"},[e._t("default")],2),e._v(" "),o("input",{directives:[{name:"select",rawName:"v-select"}],staticClass:"gui-input-input",style:{width:e.width},attrs:{placeholder:e.placeholder,title:e.title},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])};p._withStripped=!0;var s={directives:{select:function(e){e.addEventListener("focus",(function(t){e.select()}))}},model:{prop:"value",event:"input"},props:{value:{type:String,default:""},placeholder:{type:String,default:""},title:{type:String,default:""},width:{type:String,default:"80px"}}},d=(o(8),c(s,p,[],!1,null,null,null));d.options.__file="src/components/input/input.vue";var f=d.exports,b=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"gui-popup"},[t("div",{staticClass:"gui-popup-main"},[t("div",{staticClass:"gui-popup-header"},[this._v("\n            "+this._s(this.title)+"\n        ")]),this._v(" "),t("div",{staticClass:"gui-popup-content"},[this._t("default")],2)]),this._v(" "),t("div",{staticClass:"gui-popup-close"},[this._v("\n        X\n    ")])])};b._withStripped=!0;var g=o(5),h=o.n(g);var v={props:{title:{type:String,default:""}},mounted:function(){var e=this;this.$el.parentNode||document.body.appendChild(this.$el);var t=function t(o){var n=e.$el.querySelector(".gui-popup-main");n===o.target||n.contains(o.target)||(document.removeEventListener("click",t),e.$destroy())};setTimeout((function(){document.addEventListener("click",t)}),100)},beforeDestroy:function(){var e=this.$el.parentNode;e&&e.removeChild(this.$el)}};v.create=function(e,t){return function(e,t,o){var n=this,i=r(16,"ref-");return new h.a({render:function(o){return"function"==typeof t&&(t=t.call(n,o)),t.ref=i,o(e,t)}}).$mount(o).$refs[i]}(v,e,t)};var x=v,m=(o(10),c(x,b,[],!1,null,null,null));m.options.__file="src/components/popup/popup.vue";var k=m.exports;t.default={PuiCheckbox:l,PuiInput:f,PuiPopup:k}}])}));
//# sourceMappingURL=pui.js.map