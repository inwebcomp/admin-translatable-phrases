!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=2)}([function(t,e,r){var n=r(5);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(7)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){t.exports=r(3)},function(t,e,r){t.exports=r(9)},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=u;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",f="suspendedYield",p="executing",h="completed",d={};function v(){}function y(){}function g(){}var m={};m[a]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(S([])));_&&_!==r&&n.call(_,a)&&(m=_);var w=g.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var s=l(t[r],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=w.constructor=g,g.constructor=y,g[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(c(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";var n=r(0);r.n(n).a},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".tabs[data-v-709e2df1] {\n  background-color: #FFF;\n}\n.tabs .tab[data-v-709e2df1] {\n  color: #000;\n  flex: 0;\n  font-weight: normal;\n  padding: 0 32px;\n}\n.tabs .tab--active[data-v-709e2df1] {\n  border-bottom: 2px solid var(--accent);\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[r].concat(a).concat([o]).join("\n")}var i;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(t,e,r){var n,o,a={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,u=0,f=[],p=r(8);function h(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(b(n.parts[i],e))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(b(n.parts[i],e));a[n.id]={id:n.id,refs:1,parts:s}}}}function d(t,e){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}function v(t,e){var r=c(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),f.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,r);r.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return m(e,t.attrs),v(t,e),e}function m(t,e){Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])}))}function b(t,e){var r,n,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=u++;r=l||(l=g(e)),n=x.bind(null,r,i,!1),o=x.bind(null,r,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),v(t,e),e}(e),n=C.bind(null,r,e),o=function(){y(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(e),n=L.bind(null,r),o=function(){y(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=d(t,e);return h(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var i=r[o];(s=a[i.id]).refs--,n.push(s)}t&&h(d(t,e),e);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var _,w=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function x(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function L(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function C(t,e,r){var n=r.css,o=r.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(n=p(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var i,s,c="tool/translatable-phrases",l={props:{selectedLocale:{type:String,default:""}},data:function(){return{loading:!0,parsing:!1,groups:[],locales:[],activeTab:0}},mounted:function(){this.fetch()},watch:{selectedLocale:function(){this.fetch()}},methods:{fetch:(i=o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=this).loading=!0,App.api.request({url:c+""+(e.selectedLocale?"/"+e.selectedLocale:"")}).then((function(t){e.groups=t.groups,e.locales=t.locales,e.loading=!1}));case 3:case"end":return t.stop()}}),t,this)})),s=function(){var t=this,e=arguments;return new Promise((function(r,n){var o=i.apply(t,e);function s(t){a(o,r,n,s,c,"next",t)}function c(t){a(o,r,n,s,c,"throw",t)}s(void 0)}))},function(){return s.apply(this,arguments)}),parsePhrases:function(){var t=this;t.loading=!0,t.parsing=!0,App.api.request({method:"post",url:c+"/parse"}).then((function(e){t.$toasted.show(e.message,{type:"success"}),t.fetch(),t.loading=!1,t.parsing=!1}))},save:function(t,e,r){var n=this;n.activeGroup.phrases[e][t]!=r&&App.api.request({method:"post",url:c+"/save",data:{locale:t,original:e,phrase:r,group:this.activeGroup.name}}).then((function(o){n.$toasted.show(o.message,{type:"success"}),n.activeGroup.phrases[e][t]=r}))},changeLanguage:function(t){t?this.$router.push({name:"admin-translatable-phrases",params:{selectedLocale:t}}):this.$router.push({name:"admin-translatable-phrases"})}},computed:{allLocales:function(){var t=[{value:"",title:this.__("All")}];return this.locales.forEach((function(e){t.push({value:e,title:e})})),t},activeGroup:function(){return this.groups[this.activeTab]}}};r(4);var u=function(t,e,r,n,o,a,i,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-8"},[r("app-button",{staticClass:"float-right",attrs:{small:"",type:"accent"},nativeOn:{click:function(e){return t.parsePhrases(e)}}},[t._v("\n        "+t._s(this.parsing?t.__("Parsing ..."):t.__("Parse phrases"))+"\n    ")]),t._v(" "),r("div",{staticClass:"float-right mr-4 flex"},[r("form-label",{staticClass:"float-left mr-2",staticStyle:{"margin-top":".6rem"}},[t._v(t._s(t.__("Language"))+":")]),t._v(" "),r("app-select",{attrs:{small:"",search:!1,options:t.allLocales,value:t.selectedLocale},on:{input:t.changeLanguage}})],1),t._v(" "),r("heading",{staticClass:"mb-6"},[t._v("\n        "+t._s(t.__("Phrases Translations"))+" "),t.selectedLocale?r("span",{staticClass:"capitalize"},[t._v(t._s("("+t.selectedLocale+")"))]):t._e()]),t._v(" "),r("div",{staticClass:"tabs border-b border-grey-light"},t._l(t.groups,(function(e,n){return r("div",{key:n,staticClass:"tab",class:{"tab--active":t.activeTab==n},on:{click:function(e){t.activeTab=n}}},[t._v(t._s(e.title))])})),0),t._v(" "),r("card",[t.loading?[r("loading-view")]:t._e(),t._v(" "),t.loading?t._e():[r("div",{staticClass:"editable-list bg-white shadow-md rounded"},[r("table",{staticClass:"text-left w-full border-collapse"},[r("thead",[r("tr",t._l([t.__("Original"),t.__("Translation")],(function(e,n){return r("th",{key:n,staticClass:"py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light",domProps:{innerHTML:t._s(e)}})})),0)]),t._v(" "),t.activeGroup?r("tbody",t._l(t.activeGroup.phrases,(function(e,n){return r("tr",{key:n,staticClass:"hover:bg-grey-lighter"},[r("td",{staticClass:"py-4 px-6 border-b border-grey-light w-1/2"},[t._v(t._s(n))]),t._v(" "),r("td",{staticClass:"py-1 px-6 border-b border-grey-light w-1/2"},t._l(e,(function(e,o){return r("div",{staticClass:"pl-8 relative my-2"},[t.selectedLocale?t._e():r("form-label",{staticClass:"capitalize absolute pin-l font-normal",attrs:{labelFor:e+o}},[t._v(t._s(o)+"\n                                ")]),t._v(" "),r("text-input",{attrs:{id:e+o,value:e,full:"",small:""},on:{blur:function(e){return t.save(o,n,e.target.value)}}})],1)})),0)])})),0):t._e()])]),t._v(" "),Object.keys(t.groups).length?t._e():r("div",{staticClass:"flex justify-center items-center px-6 py-8"},[r("div",{staticClass:"text-center"},[r("svg",{staticClass:"mb-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"65",height:"51",viewBox:"0 0 65 51"}},[r("g",{attrs:{id:"Page-1",fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{id:"05-blank-state",fill:"#A8B9C5","fill-rule":"nonzero",transform:"translate(-779 -695)"}},[r("path",{attrs:{id:"Combined-Shape",d:"M835 735h2c.552285 0 1 .447715 1 1s-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1s-1-.447715-1-1v-2h-2c-.552285 0-1-.447715-1-1s.447715-1 1-1h2v-2c0-.552285.447715-1 1-1s1 .447715 1 1v2zm-5.364125-8H817v8h7.049375c.350333-3.528515 2.534789-6.517471 5.5865-8zm-5.5865 10H785c-3.313708 0-6-2.686292-6-6v-30c0-3.313708 2.686292-6 6-6h44c3.313708 0 6 2.686292 6 6v25.049375c5.053323.501725 9 4.765277 9 9.950625 0 5.522847-4.477153 10-10 10-5.185348 0-9.4489-3.946677-9.950625-9zM799 725h16v-8h-16v8zm0 2v8h16v-8h-16zm34-2v-8h-16v8h16zm-52 0h16v-8h-16v8zm0 2v4c0 2.209139 1.790861 4 4 4h12v-8h-16zm18-12h16v-8h-16v8zm34 0v-8h-16v8h16zm-52 0h16v-8h-16v8zm52-10v-4c0-2.209139-1.790861-4-4-4h-44c-2.209139 0-4 1.790861-4 4v4h52zm1 39c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z"}})])])]),t._v(" "),r("h3",{staticClass:"text-base text-80 font-normal mb-6"},[t._v("\n                        "+t._s(t.__("No translatable phrases"))+"\n                    ")]),t._v(" "),r("app-button",{attrs:{small:"",type:"accent"},nativeOn:{click:function(e){return t.parsePhrases(e)}}},[t._v("\n                        "+t._s(t.__("Parse phrases"))+"\n                    ")])],1)])]],2)],1)}),[],!1,null,"709e2df1",null).exports;App.booting((function(t,e){e.addRoutes([{name:"translatable-phrases",path:"/translatable-phrases/:selectedLocale?",components:{default:u,header:t.component("app-header"),sidebar:t.component("app-sidebar")},props:{default:!0}}])}))}]);