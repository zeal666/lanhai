webpackJsonp([28],{100:function(t,e,i){"use strict";var n=i(38);e.a={name:"sticky",data:function(){return{initTimes:0}},created:function(){this.$vux&&this.$vux.bus&&this.$vux.bus.$on("vux:after-view-enter",this.bindSticky)},activated:function(){this.initTimes>0&&this.bindSticky(),this.initTimes++},mounted:function(){var t=this;this.$nextTick(function(){t.bindSticky()})},beforeDestroy:function(){this.$vux&&this.$vux.bus&&this.$vux.bus.$off("vux:after-view-enter",this.bindSticky)},methods:{bindSticky:function(){var t=this;this.disabled||this.$nextTick(function(){Object(n.a)(t.$el,{scrollBox:t.scrollBox,offset:t.offset,checkStickySupport:void 0===t.checkStickySupport||t.checkStickySupport})})}},props:["scrollBox","offset","checkStickySupport","disabled"]}},101:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-sticky-box"},[t._t("default")],2)},o=[],a={render:n,staticRenderFns:o};e.a=a},294:function(t,e,i){"use strict";function n(t){return new a.a(function(e,i){window.onload=function(){e(BMap)};var n=document.createElement("script");n.type="text/javascript",n.src="https://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",n.onerror=i,document.head.appendChild(n)})}var o=i(333),a=i.n(o);e.a={MP:function(t){return n(t)}}},295:function(t,e,i){"use strict";function n(t){i(311)}var o=(i(312),i(313)),a=i(314),s=i(0),r=n,l=s(o.a,a.a,!1,r,null,null);e.a=l.exports},296:function(t,e,i){/*!
 * vue-infinite-loading v2.4.3
 * (c) 2016-2018 PeachScript
 * MIT License
 */
!function(e,i){t.exports=i()}(0,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e,i){var n=i(6);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,i(3).default)("09280948",n,!0,{})},function(t,e,i){var n=i(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,i(3).default)("65938a1f",n,!0,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");return[i].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([o]).join("\n")}var a;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},o=0;o<e.length;o++){var a=e[o],s=a[0],r={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[s]?n[s].parts.push(r):i.push(n[s]={id:s,parts:[r]})}return i}function o(t,e,i,o){m=i,v=o||{};var s=n(t,e);return a(s),function(e){for(var i=[],o=0;o<s.length;o++){var r=s[o];(l=u[r.id]).refs--,i.push(l)}for(e?a(s=n(t,e)):s=[],o=0;o<i.length;o++){var l;if(0===(l=i[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}}function a(t){for(var e=0;e<t.length;e++){var i=t[e],n=u[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(r(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var a=[];for(o=0;o<i.parts.length;o++)a.push(r(i.parts[o]));u[i.id]={id:i.id,refs:1,parts:a}}}}function s(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function r(t){var e,i,n=document.querySelector("style["+g+'~="'+t.id+'"]');if(n){if(m)return b;n.parentNode.removeChild(n)}if(x){var o=h++;n=p||(p=s()),e=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else n=s(),e=function(t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),v.ssrId&&t.setAttribute(g,e.id),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function l(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var a=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}i.r(e),i.d(e,"default",function(){return o});var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d,u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,m=!1,b=function(){},v=null,g="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),w=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")})},function(t,e){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?t.exports=n=function(t){return i(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)},n(e)}t.exports=n},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e.default=o.a},function(t,e,i){(t.exports=i(2)(!1)).push([t.i,'.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}',""])},function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e.default=o.a},function(t,e,i){(t.exports=i(2)(!1)).push([t.i,".infinite-loading-container[data-v-358985eb]{clear:both;text-align:center}.infinite-loading-container[data-v-358985eb] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-358985eb]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-358985eb]:not(:active):hover{opacity:.8}",""])},function(t,e,i){"use strict";function n(t,e,i,n,o,a,s,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}function o(t){"production"!==m.mode&&console.warn("[Vue-infinite-loading warn]: ".concat(t))}function a(t){console.error("[Vue-infinite-loading error]: ".concat(t))}function s(t){return t.replace(/[A-Z]/g,function(t){return"-".concat(t.toLowerCase())})}function r(t){return t.offsetWidth+t.offsetHeight>0}function l(t){m.mode=t.config.productionTip?"development":"production"}i.r(e);var c={throttleLimit:50,loopCheckTimeout:1e3,loopCheckMaxCalls:10},d=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch(t){}return t}(),u={STATE_CHANGER:["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):","\ntemplate:",'<infinite-loading @infinite="infiniteHandler"></infinite-loading>',"\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...","","more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),INFINITE_EVENT:"`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",IDENTIFIER:"the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."},f={INFINITE_LOOP:["executed the callback function more than ".concat(c.loopCheckMaxCalls," times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"),'\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ',"more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")},p={READY:0,LOADING:1,COMPLETE:2,ERROR:3},h={color:"#666",fontSize:"14px",padding:"10px 0"},m={mode:"development",props:{spinner:"default",distance:100,forceUseInfiniteWrapper:!1},system:c,slots:{noResults:"No results :(",noMore:"No more data :)",error:"Opps, something went wrong :(",errorBtnText:"Retry",spinner:""},WARNINGS:u,ERRORS:f,STATUS:p},b=i(4),v=i.n(b),g={BUBBLES:{render:function(t){return t("span",{attrs:{class:"loading-bubbles"}},Array.apply(Array,Array(8)).map(function(){return t("span",{attrs:{class:"bubble-item"}})}))}},CIRCLES:{render:function(t){return t("span",{attrs:{class:"loading-circles"}},Array.apply(Array,Array(8)).map(function(){return t("span",{attrs:{class:"circle-item"}})}))}},DEFAULT:{render:function(t){return t("i",{attrs:{class:"loading-default"}})}},SPIRAL:{render:function(t){return t("i",{attrs:{class:"loading-spiral"}})}},WAVEDOTS:{render:function(t){return t("span",{attrs:{class:"loading-wave-dots"}},Array.apply(Array,Array(5)).map(function(){return t("span",{attrs:{class:"wave-item"}})}))}}},x=n({name:"Spinner",computed:{spinnerView:function(){return g[(this.$attrs.spinner||"").toUpperCase()]||this.spinnerInConfig},spinnerInConfig:function(){return m.slots.spinner&&"string"==typeof m.slots.spinner?{render:function(){return this._v(m.slots.spinner)}}:"object"===v()(m.slots.spinner)?m.slots.spinner:g[m.props.spinner.toUpperCase()]||g.DEFAULT}}},function(){var t=this.$createElement;return(this._self._c||t)(this.spinnerView,{tag:"component"})},[],!1,function(t){var e=i(5);e.__inject__&&e.__inject__(t)},"46b20d22",null);x.options.__file="Spinner.vue";var w=x.exports,y={timers:[],caches:[],throttle:function(t){var e=this;-1===this.caches.indexOf(t)&&(this.caches.push(t),this.timers.push(setTimeout(function(){t(),e.caches.splice(e.caches.indexOf(t),1),e.timers.shift()},m.system.throttleLimit)))},reset:function(){this.timers.forEach(function(t){clearTimeout(t)}),this.timers.length=0,this.caches=[]}},_={isChecked:!1,timer:null,times:0,track:function(){var t=this;this.times+=1,clearTimeout(this.timer),this.timer=setTimeout(function(){t.isChecked=!0},m.system.loopCheckTimeout),this.times>m.system.loopCheckMaxCalls&&(a(f.INFINITE_LOOP),this.isChecked=!0)}},k={key:"_infiniteScrollHeight",getScrollElm:function(t){return t===window?document.documentElement:t},save:function(t){var e=this.getScrollElm(t);e[this.key]=e.scrollHeight},restore:function(t){var e=this.getScrollElm(t);"number"==typeof e[this.key]&&(e.scrollTop=e.scrollHeight-e[this.key]+e.scrollTop),this.remove(e)},remove:function(t){void 0!==t[this.key]&&delete t[this.key]}},S=n({name:"InfiniteLoading",data:function(){return{scrollParent:null,scrollHandler:null,isFirstLoad:!0,status:p.READY,slots:m.slots}},components:{Spinner:w},computed:{isShowSpinner:function(){return this.status===p.LOADING},isShowError:function(){return this.status===p.ERROR},isShowNoResults:function(){return this.status===p.COMPLETE&&this.isFirstLoad},isShowNoMore:function(){return this.status===p.COMPLETE&&!this.isFirstLoad},slotStyles:function(){var t=this,e={};return Object.keys(m.slots).forEach(function(i){var n=s(i);(!t.$slots[n]&&!m.slots[i].render||t.$slots[n]&&!t.$slots[n][0].tag)&&(e[i]=h)}),e}},props:{distance:{type:Number,default:m.props.distance},spinner:String,direction:{type:String,default:"bottom"},forceUseInfiniteWrapper:{type:[Boolean,String],default:m.props.forceUseInfiniteWrapper},identifier:{default:+new Date},onInfinite:Function},watch:{identifier:function(){this.stateChanger.reset()}},mounted:function(){var t=this;this.$watch("forceUseInfiniteWrapper",function(){t.scrollParent=t.getScrollParent()},{immediate:!0}),this.scrollHandler=function(t){this.status===p.READY&&(t&&t.constructor===Event&&r(this.$el)?y.throttle(this.attemptLoad):this.attemptLoad())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler,d),this.$on("$InfiniteLoading:loaded",function(e){t.isFirstLoad=!1,"top"===t.direction&&t.$nextTick(function(){k.restore(t.scrollParent)}),t.status===p.LOADING&&t.$nextTick(t.attemptLoad.bind(null,!0)),e&&e.target===t||o(u.STATE_CHANGER)}),this.$on("$InfiniteLoading:complete",function(e){t.status=p.COMPLETE,t.$nextTick(function(){t.$forceUpdate()}),t.scrollParent.removeEventListener("scroll",t.scrollHandler,d),e&&e.target===t||o(u.STATE_CHANGER)}),this.$on("$InfiniteLoading:reset",function(e){t.status=p.READY,t.isFirstLoad=!0,k.remove(t.scrollParent),t.scrollParent.addEventListener("scroll",t.scrollHandler,d),setTimeout(function(){y.reset(),t.scrollHandler()},1),e&&e.target===t||o(u.IDENTIFIER)}),this.stateChanger={loaded:function(){t.$emit("$InfiniteLoading:loaded",{target:t})},complete:function(){t.$emit("$InfiniteLoading:complete",{target:t})},reset:function(){t.$emit("$InfiniteLoading:reset",{target:t})},error:function(){t.status=p.ERROR,y.reset()}},this.onInfinite&&o(u.INFINITE_EVENT)},deactivated:function(){this.status===p.LOADING&&(this.status=p.READY),this.scrollParent.removeEventListener("scroll",this.scrollHandler,d)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler,d)},methods:{attemptLoad:function(t){var e=this;this.status!==p.COMPLETE&&r(this.$el)&&this.getCurrentDistance()<=this.distance?(this.status=p.LOADING,"top"===this.direction&&this.$nextTick(function(){k.save(e.scrollParent)}),"function"==typeof this.onInfinite?this.onInfinite.call(null,this.stateChanger):this.$emit("infinite",this.stateChanger),!t||this.forceUseInfiniteWrapper||_.isChecked||_.track()):this.status===p.LOADING&&(this.status=p.READY)},getCurrentDistance:function(){return"top"===this.direction?"number"==typeof this.scrollParent.scrollTop?this.scrollParent.scrollTop:this.scrollParent.pageYOffset:this.$el.getBoundingClientRect().top-(this.scrollParent===window?window.innerHeight:this.scrollParent.getBoundingClientRect().bottom)},getScrollParent:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el;return"string"==typeof this.forceUseInfiniteWrapper&&(t=e.querySelector(this.forceUseInfiniteWrapper)),t||("BODY"===e.tagName?t=window:!this.forceUseInfiniteWrapper&&["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?t=e:(e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper"))&&(t=e)),t||this.getScrollParent(e.parentNode)}},destroyed:function(){!this.status!==p.COMPLETE&&(y.reset(),k.remove(this.scrollParent),this.scrollParent.removeEventListener("scroll",this.scrollHandler,d))}},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infinite-loading-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSpinner,expression:"isShowSpinner"}],staticClass:"infinite-status-prompt",style:t.slotStyles.spinner},[t._t("spinner",[i("spinner",{attrs:{spinner:t.spinner}})])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoResults,expression:"isShowNoResults"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noResults},[t._t("no-results",[t.slots.noResults.render?i(t.slots.noResults,{tag:"component"}):[t._v(t._s(t.slots.noResults))]])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoMore,expression:"isShowNoMore"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noMore},[t._t("no-more",[t.slots.noMore.render?i(t.slots.noMore,{tag:"component"}):[t._v(t._s(t.slots.noMore))]])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowError,expression:"isShowError"}],staticClass:"infinite-status-prompt",style:t.slotStyles.error},[t._t("error",[t.slots.error.render?i(t.slots.error,{tag:"component",attrs:{trigger:t.attemptLoad}}):[t._v("\n        "+t._s(t.slots.error)+"\n        "),i("br"),t._v(" "),i("button",{staticClass:"btn-try-infinite",domProps:{textContent:t._s(t.slots.errorBtnText)},on:{click:t.attemptLoad}})]],{trigger:t.attemptLoad})],2)])},[],!1,function(t){var e=i(7);e.__inject__&&e.__inject__(t)},"358985eb",null);S.options.__file="InfiniteLoading.vue";var C=S.exports;Object.defineProperty(C,"install",{configurable:!1,enumerable:!1,value:function(t,e){Object.assign(m.props,e&&e.props),Object.assign(m.slots,e&&e.slots),Object.assign(m.system,e&&e.system),t.component("infinite-loading",C),l(t)}}),"undefined"!=typeof window&&window.Vue&&(window.Vue.component("infinite-loading",C),l(window.Vue)),e.default=C}])})},311:function(t,e){},312:function(t,e,i){"use strict";Boolean,String},313:function(t,e,i){"use strict";e.a={name:"load-more",props:{showLoading:{type:Boolean,default:!0},tip:String}}},314:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-loadmore weui-loadmore",class:{"weui-loadmore_line":!t.showLoading,"weui-loadmore_dot":!t.showLoading&&!t.tip}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.tip||!t.showLoading,expression:"tip || !showLoading"}],staticClass:"weui-loadmore__tips"},[t._v(t._s(t.tip))])])},o=[],a={render:n,staticRenderFns:o};e.a=a},35:function(t,e,i){"use strict";function n(t){i(98)}var o=(i(99),i(100)),a=i(101),s=i(0),r=n,l=s(o.a,a.a,!1,r,null,null);e.a=l.exports},38:function(t,e,i){"use strict";function n(){var t=window.navigator.userAgent,e=t.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/);return e&&e[2]&&parseInt(e[2].replace(/_/g,"."),10)>=6}function o(){for(var t=["","-webkit-","-ms-","-moz-","-o-"],e="",i=0;i<t.length;i++)e+="position:"+t[i]+"sticky";var n=document.createElement("div"),o=document.body;n.style.cssText="display:none"+e,o.appendChild(n);var a=/sticky/i.test(window.getComputedStyle(n).position);return o.removeChild(n),n=null,a}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.scrollBox||window,a=e.offset||0,s=!0===e.checkStickySupport||!1;if("string"!=typeof i||(i=document.getElementById(i))){var r=t.offsetTop-a;i.removeEventListener("scroll",i.e);var l=function(){return i===window?document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop},c=function(){l()>r?(t.style.top=a+"px",t.classList.add("vux-fixed")):t.classList.remove("vux-fixed")};if(s&&(n()||o()))t.style.top=a+"px",t.classList.add("vux-sticky");else{if(t.classList.contains("vux-fixed")){var d=l();r=function(t){for(var e=t.nextSibling;1!==e.nodeType;)e=e.nextSibling;return e.classList.contains("vux-sticky-fill")?e:t.parentNode}(t).offsetTop-a,d<r&&t.classList.remove("vux-fixed")}else r=t.offsetTop-a;i.e=c,i.addEventListener("scroll",c)}}}},497:function(t,e,i){"use strict";function n(t){i(863)}var o=(i(864),i(865)),a=i(866),s=i(0),r=n,l=s(o.a,a.a,!1,r,null,null);e.a=l.exports},859:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(860);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},860:function(t,e,i){"use strict";function n(t){i(861)}var o=(i(862),i(867)),a=i(868),s=i(0),r=n,l=s(o.a,a.a,!1,r,"data-v-619c06b7",null);e.a=l.exports},861:function(t,e){},862:function(t,e,i){"use strict";var n=i(294),o=i(5),a=i(6),s=i(13),r=i(497),l=i(14),c=i(32),d=i(295),u=i(10),f=i(35),p=i(296),h=i.n(p);s.a,r.a,l.a,c.a,d.a,u.a,f.a,h.a},863:function(t,e){},864:function(t,e,i){"use strict";var n=i(91);n.a,Boolean,String,String,String,Array,Boolean,String,String,Boolean},865:function(t,e,i){"use strict";var n=i(91);e.a={name:"search",mixins:[n.a],props:{required:{type:Boolean,default:!1},placeholder:String,cancelText:String,value:{type:String,default:""},results:{type:Array,default:function(){return[]}},autoFixed:{type:Boolean,default:!0},top:{type:String,default:"0px"},position:{type:String,default:"fixed"},autoScrollToTop:Boolean},created:function(){this.value&&(this.currentValue=this.value)},computed:{fixPosition:function(){return this.isFixed?"absolute"===this.position?"absolute":"fixed":"static"}},methods:{emitEvent:function(){var t=this;this.$nextTick(function(){t.$emit("input",t.currentValue),t.$emit("on-change",t.currentValue)})},onComposition:function(t,e){"start"===e&&(this.onInput=!0),"end"===e&&(this.onInput=!1,this.emitEvent()),"input"===e&&(this.onInput||this.emitEvent())},clear:function(){this.currentValue="",this.emitEvent(),this.isFocus=!0,this.setFocus(),this.autoFixed&&!this.isFixed&&(this.isFixed=!0),this.$emit("on-clear")},cancel:function(){this.isCancel=!0,this.currentValue="",this.emitEvent(),this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(t){this.$emit("result-click",t),this.$emit("on-result-click",t),this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0),this.$emit("on-touch")},setFocus:function(){this.$refs.input.focus()},setBlur:function(){this.$refs.input.blur()},onFocus:function(){this.isFocus=!0,this.$emit("on-focus"),this.touch()},onBlur:function(){this.isFocus=!1,this.$emit("on-blur")}},data:function(){return{onInput:!1,currentValue:"",isCancel:!0,isFocus:!1,isFixed:!1}},watch:{isFixed:function(t){!0===t&&(this.setFocus(),this.isFocus=!0,this.autoScrollToTop&&setTimeout(function(){window.scrollTo(0,0)},150))},value:function(t){this.currentValue=t}}}},866:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-search-box",class:{"vux-search-fixed":t.isFixed},style:{top:t.isFixed?t.top:"",position:t.fixPosition}},[i("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":!t.isCancel||t.currentValue}},[t._t("left"),t._v(" "),i("form",{staticClass:"weui-search-bar__form",attrs:{action:"."},on:{submit:function(e){e.preventDefault(),t.$emit("on-submit",t.value)}}},[i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFixed&&t.autoFixed,expression:"!isFixed && autoFixed"}],staticClass:"vux-search-mask",attrs:{for:"search_input_"+t.uuid},on:{click:t.touch}}),t._v(" "),i("div",{staticClass:"weui-search-bar__box"},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{type:"search",autocomplete:"off",id:"search_input_"+t.uuid,placeholder:t.placeholder,required:t.required},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,compositionstart:function(e){t.onComposition(e,"start")},compositionend:function(e){t.onComposition(e,"end")},input:[function(e){e.target.composing||(t.currentValue=e.target.value)},function(e){t.onComposition(e,"input")}]}}),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-icon-clear",attrs:{href:"javascript:"},on:{click:t.clear}})]),t._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFocus&&!t.value,expression:"!isFocus && !value"}],staticClass:"weui-search-bar__label",attrs:{for:"search_input_"+t.uuid}},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("span",[t._v(t._s(t.placeholder||"搜索"))])])]),t._v(" "),i("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:"},on:{click:t.cancel}},[t._v(t._s(t.cancelText||"取消")+"\n    ")]),t._v(" "),t._t("right")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],staticClass:"weui-cells vux-search_show"},[t._t("default"),t._v(" "),t._l(t.results,function(e){return i("div",{staticClass:"weui-cell weui-cell_access",on:{click:function(i){t.handleResultClick(e)}}},[i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[t._v(t._s(e.title))])])])})],2)])},o=[],a={render:n,staticRenderFns:o};e.a=a},867:function(t,e,i){"use strict";var n=i(294),o=i(5),a=i(6),s=i(13),r=i(497),l=i(14),c=i(32),d=i(295),u=i(10),f=i(35),p=i(296),h=i.n(p);e.a={components:{ViewBox:s.a,Search:r.a,Group:l.a,Cell:c.a,LoadMore:d.a,XHeader:u.a,Sticky:f.a,InfiniteLoading:h.a},data:function(){return{items:[],px:0,hstatus:0,lat:"",lng:"",pageIng:!1,listIng:!1,bdkey:"77E9802d7cfbcde01b5ea17f1388f35d"}},beforeCreate:function(){this.initialize={currentLoaded:!1,currentLoading:!1,pindex:1,psize:200}},beforeMount:function(){var t=this;t.$vux.loading.show("正在加载"),a.a.setting().then(function(e){t.hstatus=e.data.hstatus,t.px=t.hstatus?"46px":"0",t.getLbs(),t.pageIng=!0})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},500)},methods:{onInfinite:function(t){var e=this;if(e.initialize.currentLoading)return!1;e.initialize.currentLoading=!0,console.log(e.lng),a.a.regionList(e.lng,e.lat,e.initialize.pindex).then(function(i){e.initialize.pindex++,e.items=e.items.concat(i.data.list),i.data.list.length>=e.initialize.psize?(e.initialize.currentLoading=!1,t.loaded()):t.complete()})},setFocus:function(){this.$refs.search.setFocus()},getResult:function(t){var e=this;a.a.regionList(e.lng,e.lat,"",t).then(function(t){e.items=t.data.list})},onFocus:function(){console.log("on focus")},onCancel:function(){console.log("on cancel")},url:function(t){return o.a.M.url(t)},getLbs:function(){var t=this;console.log("dingwei","aaaa");var e=window.navigator.userAgent.toLowerCase(),i=e.match(/MicroMessenger/i);console.log("we",i),console.log("liulanqi",i[0]),"micromessenger"===i[0]?wx.ready(function(){wx.checkJsApi({jsApiList:["getLocation"],success:function(t){if(0==t.checkResult.getLocation)return void alert("你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！")}}),wx.getLocation({type:"gcj02",success:function(e){t.lat=e.latitude,t.lng=e.longitude,t.listIng=!0,console.log("wx",e)}})}):t.$nextTick(function(){n.a.MP(t.bdkey).then(function(e){(new e.Geolocation).getCurrentPosition(function(i){new e.Marker(i.point),t.lng=i.point.lng,t.lat=i.point.lat,t.listIng=!0,console.log("baidu",i.point)},{enableHighAccuracy:!0})}).catch(function(t){console.log("baiduERR",t)})})}},computed:{}}},868:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("view-box",{ref:"viewBox",staticClass:"container",class:{hide:!t.pageIng},attrs:{"body-padding-top":t.px,"body-padding-bottom":"0px"}},[i("div",{staticClass:"hd",attrs:{slot:"header"},slot:"header"},[t.hstatus?i("x-header",{attrs:{title:"小区列表"}},[i("a",{attrs:{slot:"right",href:t.url("home")},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),i("search",{ref:"search",attrs:{autoFixed:!1,placeholder:"搜索您想要的小区"},on:{"on-change":t.getResult,"on-focus":t.onFocus,"on-cancel":t.onCancel}})],1),t._v(" "),i("div",{staticClass:"bd"},[i("group",{directives:[{name:"show",rawName:"v-show",value:t.items,expression:"items"}],staticClass:"region-card",attrs:{gutter:"50px"}},t._l(t.items,function(t,e){return i("cell",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"item.title"}],key:e,attrs:{title:t.title,value:t.juli,link:t.url}},[i("div",{staticClass:"region-card-logo",style:{backgroundImage:"url("+t.thumb+")"},attrs:{slot:"icon"},slot:"icon"})])}))],1),t._v(" "),t.listIng?i("infinite-loading",{ref:"infiniteLoading",attrs:{spinner:"bubbles"},on:{infinite:t.onInfinite}},[i("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("已全部加载完…")]),t._v(" "),i("span",{attrs:{slot:"no-results"},slot:"no-results"},[i("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}})],1)]):t._e()],1)],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},91:function(t,e,i){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},98:function(t,e){},99:function(t,e,i){"use strict";i(38)}},[859]);