webpackJsonp([36],{1060:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1061);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},1061:function(t,e,i){"use strict";function n(t){i(1062)}var a=(i(1063),i(1064)),s=i(1065),o=i(0),r=n,l=o(a.a,s.a,!1,r,"data-v-1e391906",null);e.a=l.exports},1062:function(t,e){},1063:function(t,e,i){"use strict";var n=i(3),a=i(4),s=i(7),o=i(17),r=i(391),l=i(35),c=i(9),d=i(31),u=i(32),f=i(39),p=i(29),h=i.n(p);s.a,o.a,r.a,l.a,c.a,d.a,u.a,f.a,h.a},1064:function(t,e,i){"use strict";var n=i(3),a=i(4),s=i(7),o=i(17),r=i(391),l=i(35),c=i(9),d=i(31),u=i(32),f=i(39),p=i(29),h=i.n(p);e.a={components:{ViewBox:s.a,Badge:o.a,Search:r.a,Sticky:l.a,XHeader:c.a,Flexbox:d.a,FlexboxItem:u.a,LoadMore:f.a,InfiniteLoading:h.a},data:function(){return{items:[],categoryItems:[],tagIndex:0,carttotal:0,categoryname:"全部商品",hstatus:0,px:0}},beforeCreate:function(){this.initialize={currentLoaded:!1,currentLoading:!1,pindex:1,psize:20}},beforeMount:function(){var t=this;t.$vux.loading.show();a.a.categoryList(5).then(function(e){t.categoryItems=e.data.list}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})}),t.tagIndex=n.a.M.urlQuery("cid")},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{itemClick:function(t,e){var i=this;this.tagIndex=t,this.categoryname=e,this.items=[],this.initialize.currentLoading=!1,this.initialize.pindex=1,this.$nextTick(function(){i.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")})},onInfinite:function(t){var e=this;if(e.initialize.currentLoading)return!1;e.initialize.currentLoading=!0,a.a.shoppingList(e.tagIndex,e.initialize.pindex).then(function(i){e.initialize.pindex++,e.items=e.items.concat(i.data.list),e.hstatus=i.data.hstatus,e.px=e.hstatus?"46px":"0",e.carttotal=i.data.carttotal,i.data.list.length?(e.initialize.currentLoading=!1,t.loaded()):t.complete()}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},addcar:function(t){var e=this,i={id:t};a.a.shoppingUpdate(i).then(function(t){e.$vux.loading.hide(),e.$vux.toast.text("添加成功,在购物车等亲","middle"),e.carttotal=t.data.total}).catch(function(t){self.$vux.toast.show({type:"warn",text:t.err_msg})})},setFocus:function(){this.$refs.search.setFocus()},getResult:function(t){var e=this;console.log("on-change",t),a.a.shoppingList(this.tagIndex,"",t).then(function(t){e.items=t.data.list}).catch(function(t){self.$vux.toast.show({type:"warn",text:t.err_msg})})},onFocus:function(){console.log("on focus")},onCancel:function(){console.log("on cancel")},gourl:function(t){window.location.href=t},url:function(t){return n.a.M.url(t)}},computed:{}}},1065:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"0px"}},[t.hstatus?i("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"小区超市"},slot:"header"},[i("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("home")},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),i("sticky",{ref:"sticky",attrs:{"scroll-box":"vux_view_box_body","check-sticky-support":!1,disabled:t.disabled}},[i("search",{ref:"search",staticStyle:{position:"absolute","z-index":"100"},attrs:{autoFixed:!1,placeholder:"搜索您想要的商品"},on:{"on-change":t.getResult,"on-focus":t.onFocus,"on-cancel":t.onCancel}})],1),t._v(" "),i("a",{staticClass:"shopcar barrage",attrs:{id:"shopCart",href:t.url("shopping/mycart")}},[i("span",{staticClass:"shopcar-img"}),t._v(" "),i("badge",{staticClass:"default_bage",attrs:{text:t.carttotal}})],1),t._v(" "),i("section",{staticClass:"aui-scroll-contents"},[i("div",{staticClass:"aui-scroll-box",style:t.hstatus?"padding-top:44px":""},[i("div",{staticClass:"aui-scroll-nav"},[i("a",{staticClass:"aui-scroll-item",class:{"aui-crt crt":0===t.tagIndex},attrs:{href:"#"},on:{click:function(e){t.itemClick(0)}}},[i("div",{staticClass:"aui-scroll-item-icon"}),t._v(" "),i("div",{staticClass:"aui-scroll-item-text"},[t._v("全部商品")])]),t._v(" "),t._l(t.categoryItems,function(e,n){return i("a",{key:n,staticClass:"aui-scroll-item",class:{"aui-crt crt":e.id===t.tagIndex},attrs:{href:"#"},on:{click:function(i){t.itemClick(e.id,e.name)}}},[i("div",{staticClass:"aui-scroll-item-icon"}),t._v(" "),i("div",{staticClass:"aui-scroll-item-text"},[t._v(t._s(e.name))])])})],2),t._v(" "),i("div",{staticClass:"aui-scroll-content"},[i("div",{staticClass:"aui-scroll-content-item"},[i("h2",{staticClass:"aui-scroll-content-title",domProps:{innerHTML:t._s(t.categoryname)}}),t._v(" "),t._l(t.items,function(e,n){return i("a",{key:n,staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:"javascript:void(0);"}},[i("div",{staticClass:"weui-media-box__hd",on:{click:function(i){t.gourl(e.link)}}},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.thumb}})]),t._v(" "),i("div",{staticClass:"weui-media-box__bd",on:{click:function(i){t.gourl(e.link)}}},[i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"aui-shop-price"},[t._v("￥"+t._s(e.marketprice)+"\n\n                                    "),i("del",[t._v("￥"+t._s(e.productprice))])])]),t._v(" "),i("span",{staticClass:"aui-add-car addcar ",on:{click:function(i){i.stopPropagation(),t.addcar(e.id)}}})])}),t._v(" "),i("div",{staticClass:"clearfloat"}),t._v(" "),i("infinite-loading",{ref:"infiniteLoading",attrs:{spinner:"waveDots"},on:{infinite:t.onInfinite}},[i("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("已全部加载完…")]),t._v(" "),i("span",{attrs:{slot:"no-results"},slot:"no-results"},[i("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}})],1)])],2)])])])],1)],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},112:function(t,e){},113:function(t,e,i){"use strict";Boolean,String},114:function(t,e,i){"use strict";e.a={name:"load-more",props:{showLoading:{type:Boolean,default:!0},tip:String}}},115:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-loadmore weui-loadmore",class:{"weui-loadmore_line":!t.showLoading,"weui-loadmore_dot":!t.showLoading&&!t.tip}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.tip||!t.showLoading,expression:"tip || !showLoading"}],staticClass:"weui-loadmore__tips"},[t._v(t._s(t.tip))])])},a=[],s={render:n,staticRenderFns:a};e.a=s},17:function(t,e,i){"use strict";function n(t){i(46)}var a=(i(47),i(48)),s=i(49),o=i(0),r=n,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},29:function(t,e,i){/*!
 * vue-infinite-loading v2.4.0
 * (c) 2016-2018 PeachScript
 * MIT License
 */
!function(e,i){t.exports=i()}(window,function(){return function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)e.d(n,a,function(e){return t[e]}.bind(null,a));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=9)}([function(t,e,i){var n=i(6);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,i(3).default)("5d77b852",n,!0,{})},function(t,e,i){var n=i(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,i(3).default)("cc73c0c2",n,!0,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var a=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n);return[i].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([a]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(n[s]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},a=0;a<e.length;a++){var s=e[a],o=s[0],r={id:t+":"+a,css:s[1],media:s[2],sourceMap:s[3]};n[o]?n[o].parts.push(r):i.push(n[o]={id:o,parts:[r]})}return i}function a(t,e,i,a){h=i,b=a||{};var o=n(t,e);return s(o),function(e){for(var i=[],a=0;a<o.length;a++){var r=o[a];(l=d[r.id]).refs--,i.push(l)}for(e?s(o=n(t,e)):o=[],a=0;a<i.length;a++){var l;if(0===(l=i[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete d[l.id]}}}}function s(t){for(var e=0;e<t.length;e++){var i=t[e],n=d[i.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](i.parts[a]);for(;a<i.parts.length;a++)n.parts.push(r(i.parts[a]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(r(i.parts[a]));d[i.id]={id:i.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,i,n=document.querySelector("style["+v+'~="'+t.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(g){var a=p++;n=f||(f=o()),e=l.bind(null,n,a,!1),i=l.bind(null,n,a,!0)}else n=o(),e=function(t,e){var i=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),b.ssrId&&t.setAttribute(v,e.id),a&&(i+="\n/*# sourceURL="+a.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function l(t,e,i,n){var a=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,a);else{var s=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}i.r(e),i.d(e,"default",function(){return a});var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},b=null,v="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),x=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?t.exports=n=function(t){return i(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)},n(e)}t.exports=n},function(t,e,i){"use strict";var n=i(0);i.n(n).a},function(t,e,i){(t.exports=i(2)(!1)).push([t.i,'.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}',""])},function(t,e,i){"use strict";var n=i(1);i.n(n).a},function(t,e,i){(t.exports=i(2)(!1)).push([t.i,".infinite-loading-container[data-v-1ff3c730]{clear:both;text-align:center}.infinite-loading-container[data-v-1ff3c730] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-1ff3c730]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-1ff3c730]:not(:active):hover{opacity:.8}",""])},function(t,e,i){"use strict";function n(t,e,i,n,a,s,o,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}function a(t){"production"!==h.mode&&console.warn("[Vue-infinite-loading warn]: ".concat(t))}function s(t){console.error("[Vue-infinite-loading error]: ".concat(t))}function o(t){return t.replace(/[A-Z]/g,function(t){return"-".concat(t.toLowerCase())})}function r(t){h.mode=t.config.productionTip?"development":"production"}i.r(e);var l={throttleLimit:50,loopCheckTimeout:1e3,loopCheckMaxCalls:10},c=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch(t){}return t}(),d={STATE_CHANGER:["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):","\ntemplate:",'<infinite-loading @infinite="infiniteHandler"></infinite-loading>',"\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...","","more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),INFINITE_EVENT:"`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",IDENTIFIER:"the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."},u={INFINITE_LOOP:["executed the callback function more than ".concat(l.loopCheckMaxCalls," times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"),'\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ',"more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")},f={READY:0,LOADING:1,COMPLETE:2,ERROR:3},p={color:"#666",fontSize:"14px",padding:"10px 0"},h={mode:"development",props:{spinner:"default",distance:100,forceUseInfiniteWrapper:!1},system:l,slots:{noResults:"No results :(",noMore:"No more data :)",error:"Opps, something went wrong :(",errorBtnText:"Retry",spinner:""},WARNINGS:d,ERRORS:u,STATUS:f},m=i(4),b=i.n(m),v={BUBBLES:{render:function(t){return t("span",{attrs:{class:"loading-bubbles"}},Array.apply(Array,Array(8)).map(function(){return t("span",{attrs:{class:"bubble-item"}})}))}},CIRCLES:{render:function(t){return t("span",{attrs:{class:"loading-circles"}},Array.apply(Array,Array(8)).map(function(){return t("span",{attrs:{class:"circle-item"}})}))}},DEFAULT:{render:function(t){return t("i",{attrs:{class:"loading-default"}})}},SPIRAL:{render:function(t){return t("i",{attrs:{class:"loading-spiral"}})}},WAVEDOTS:{render:function(t){return t("span",{attrs:{class:"loading-wave-dots"}},Array.apply(Array,Array(5)).map(function(){return t("span",{attrs:{class:"wave-item"}})}))}}},g={name:"Spinner",computed:{spinnerView:function(){return v[(this.$attrs.spinner||"").toUpperCase()]||this.spinnerInConfig},spinnerInConfig:function(){return h.slots.spinner&&"string"==typeof h.slots.spinner?{render:function(){return this._v(h.slots.spinner)}}:"object"===b()(h.slots.spinner)?h.slots.spinner:v[h.props.spinner.toUpperCase()]||v.DEFAULT}}};i(5);var x=n(g,function(){var t=this.$createElement;return(this._self._c||t)(this.spinnerView,{tag:"component"})},[],!1,null,"46b20d22",null);x.options.__file="Spinner.vue";var w=x.exports,y={caches:[],throttle:function(t){var e=this;-1===this.caches.indexOf(t)&&(this.caches.push(t),setTimeout(function(){t(),e.caches.splice(e.caches.indexOf(t),1)},h.system.throttleLimit))},reset:function(){this.caches=[]}},_={isChecked:!1,timer:null,times:0,track:function(){var t=this;this.times+=1,clearTimeout(this.timer),this.timer=setTimeout(function(){t.isChecked=!0},h.system.loopCheckTimeout),this.times>h.system.loopCheckMaxCalls&&(s(u.INFINITE_LOOP),this.isChecked=!0)}},k={key:"_infiniteScrollHeight",getScrollElm:function(t){return t===window?document.documentElement:t},save:function(t){var e=this.getScrollElm(t);e[this.key]=e.scrollHeight},restore:function(t){var e=this.getScrollElm(t);"number"==typeof e[this.key]&&(e.scrollTop=e.scrollHeight-e[this.key]+e.scrollTop),this.remove(e)},remove:function(t){void 0!==t[this.key]&&delete t[this.key]}},C={name:"InfiniteLoading",data:function(){return{scrollParent:null,scrollHandler:null,isFirstLoad:!0,status:f.READY,slots:h.slots}},components:{Spinner:w},computed:{isShowSpinner:function(){return this.status===f.LOADING},isShowError:function(){return this.status===f.ERROR},isShowNoResults:function(){return this.status===f.COMPLETE&&this.isFirstLoad},isShowNoMore:function(){return this.status===f.COMPLETE&&!this.isFirstLoad},slotStyles:function(){var t=this,e={};return Object.keys(h.slots).forEach(function(i){var n=o(i);(!t.$slots[n]&&!h.slots[i].render||t.$slots[n]&&!t.$slots[n][0].tag)&&(e[i]=p)}),e}},props:{distance:{type:Number,default:h.props.distance},spinner:String,direction:{type:String,default:h.props.direction},forceUseInfiniteWrapper:{type:[Boolean,String],default:h.props.forceUseInfiniteWrapper},identifier:{default:+new Date},onInfinite:Function},watch:{identifier:function(){this.stateChanger.reset()}},mounted:function(){var t=this;this.$watch("forceUseInfiniteWrapper",function(){t.scrollParent=t.getScrollParent()},{immediate:!0}),this.scrollHandler=function(t){this.status===f.READY&&(t&&t.constructor===Event?y.throttle(this.attemptLoad):this.attemptLoad())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler,c),this.$on("$InfiniteLoading:loaded",function(e){t.isFirstLoad=!1,"top"===t.direction&&t.$nextTick(function(){k.restore(t.scrollParent)}),t.status===f.LOADING&&t.$nextTick(t.attemptLoad.bind(null,!0)),e&&e.target===t||a(d.STATE_CHANGER)}),this.$on("$InfiniteLoading:complete",function(e){t.status=f.COMPLETE,t.$nextTick(function(){t.$forceUpdate()}),t.scrollParent.removeEventListener("scroll",t.scrollHandler,c),e&&e.target===t||a(d.STATE_CHANGER)}),this.$on("$InfiniteLoading:reset",function(e){t.status=f.READY,t.isFirstLoad=!0,y.reset(),k.remove(t.scrollParent),t.scrollParent.addEventListener("scroll",t.scrollHandler,c),setTimeout(t.scrollHandler,1),e&&e.target===t||a(d.IDENTIFIER)}),this.stateChanger={loaded:function(){t.$emit("$InfiniteLoading:loaded",{target:t})},complete:function(){t.$emit("$InfiniteLoading:complete",{target:t})},reset:function(){t.$emit("$InfiniteLoading:reset",{target:t})},error:function(){t.status=f.ERROR,y.reset()}},this.onInfinite&&a(d.INFINITE_EVENT)},deactivated:function(){this.status===f.LOADING&&(this.status=f.READY),this.scrollParent.removeEventListener("scroll",this.scrollHandler,c)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler,c)},methods:{attemptLoad:function(t){var e=this,i=this.getCurrentDistance();this.status!==f.COMPLETE&&i<=this.distance&&this.$el.offsetWidth+this.$el.offsetHeight>0?(this.status=f.LOADING,"top"===this.direction&&this.$nextTick(function(){k.save(e.scrollParent)}),"function"==typeof this.onInfinite?this.onInfinite.call(null,this.stateChanger):this.$emit("infinite",this.stateChanger),!t||this.forceUseInfiniteWrapper||_.isChecked||_.track()):this.status===f.LOADING&&(this.status=f.READY)},getCurrentDistance:function(){return"top"===this.direction?"number"==typeof this.scrollParent.scrollTop?this.scrollParent.scrollTop:this.scrollParent.pageYOffset:this.$el.getBoundingClientRect().top-(this.scrollParent===window?window.innerHeight:this.scrollParent.getBoundingClientRect().bottom)},getScrollParent:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el;return"string"==typeof this.forceUseInfiniteWrapper&&(t=e.querySelector(this.forceUseInfiniteWrapper)),t||("BODY"===e.tagName?t=window:!this.forceUseInfiniteWrapper&&["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?t=e:(e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper"))&&(t=e)),t||this.getScrollParent(e.parentNode)}},destroyed:function(){!this.status!==f.COMPLETE&&(y.reset(),k.remove(this.scrollParent),this.scrollParent.removeEventListener("scroll",this.scrollHandler,c))}},S=(i(7),n(C,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infinite-loading-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSpinner,expression:"isShowSpinner"}],staticClass:"infinite-status-prompt",style:t.slotStyles.spinner},[t._t("spinner",[i("spinner",{attrs:{spinner:t.spinner}})])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoResults,expression:"isShowNoResults"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noResults},[t._t("no-results",[t.slots.noResults.render?i(t.slots.noResults,{tag:"component"}):[t._v(t._s(t.slots.noResults))]])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoMore,expression:"isShowNoMore"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noMore},[t._t("no-more",[t.slots.noMore.render?i(t.slots.noMore,{tag:"component"}):[t._v(t._s(t.slots.noMore))]])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowError,expression:"isShowError"}],staticClass:"infinite-status-prompt",style:t.slotStyles.error},[t._t("error",[t.slots.error.render?i(t.slots.error,{tag:"component",attrs:{trigger:t.attemptLoad}}):[t._v("\n        "+t._s(t.slots.error)+"\n        "),i("br"),t._v(" "),i("button",{staticClass:"btn-try-infinite",domProps:{textContent:t._s(t.slots.errorBtnText)},on:{click:t.attemptLoad}})]],{trigger:t.attemptLoad})],2)])},[],!1,null,"1ff3c730",null));S.options.__file="InfiniteLoading.vue";var E=S.exports;Object.defineProperty(E,"install",{configurable:!1,enumerable:!1,value:function(t,e){Object.assign(h.props,e&&e.props),Object.assign(h.slots,e&&e.slots),Object.assign(h.system,e&&e.system),t.component("infinite-loading",E),r(t)}}),"undefined"!=typeof window&&window.Vue&&(window.Vue.component("infinite-loading",E),r(window.Vue)),e.default=E}])})},35:function(t,e,i){"use strict";function n(t){i(96)}var a=(i(97),i(98)),s=i(99),o=i(0),r=n,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},38:function(t,e,i){"use strict";function n(){var t=window.navigator.userAgent,e=t.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/);return e&&e[2]&&parseInt(e[2].replace(/_/g,"."),10)>=6}function a(){for(var t=["","-webkit-","-ms-","-moz-","-o-"],e="",i=0;i<t.length;i++)e+="position:"+t[i]+"sticky";var n=document.createElement("div"),a=document.body;n.style.cssText="display:none"+e,a.appendChild(n);var s=/sticky/i.test(window.getComputedStyle(n).position);return a.removeChild(n),n=null,s}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.scrollBox||window,s=e.offset||0,o=!0===e.checkStickySupport||!1;if("string"!=typeof i||(i=document.getElementById(i))){var r=t.offsetTop-s;i.removeEventListener("scroll",i.e);var l=function(){return i===window?document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop},c=function(){l()>r?(t.style.top=s+"px",t.classList.add("vux-fixed")):t.classList.remove("vux-fixed")};if(o&&(n()||a()))t.style.top=s+"px",t.classList.add("vux-sticky");else{if(t.classList.contains("vux-fixed")){var d=l();r=function(t){for(var e=t.nextSibling;1!==e.nodeType;)e=e.nextSibling;return e.classList.contains("vux-sticky-fill")?e:t.parentNode}(t).offsetTop-s,d<r&&t.classList.remove("vux-fixed")}else r=t.offsetTop-s;i.e=c,i.addEventListener("scroll",c)}}}},39:function(t,e,i){"use strict";function n(t){i(112)}var a=(i(113),i(114)),s=i(115),o=i(0),r=n,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},391:function(t,e,i){"use strict";function n(t){i(448)}var a=(i(449),i(450)),s=i(451),o=i(0),r=n,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},448:function(t,e){},449:function(t,e,i){"use strict";var n=i(50);n.a,Boolean,String,String,String,Array,Boolean,String,String,Boolean},450:function(t,e,i){"use strict";var n=i(50);e.a={name:"search",mixins:[n.a],props:{required:{type:Boolean,default:!1},placeholder:String,cancelText:String,value:{type:String,default:""},results:{type:Array,default:function(){return[]}},autoFixed:{type:Boolean,default:!0},top:{type:String,default:"0px"},position:{type:String,default:"fixed"},autoScrollToTop:Boolean},created:function(){this.value&&(this.currentValue=this.value)},computed:{fixPosition:function(){return this.isFixed?"absolute"===this.position?"absolute":"fixed":"static"}},methods:{emitEvent:function(){var t=this;this.$nextTick(function(){t.$emit("input",t.currentValue),t.$emit("on-change",t.currentValue)})},onComposition:function(t,e){"start"===e&&(this.onInput=!0),"end"===e&&(this.onInput=!1,this.emitEvent()),"input"===e&&(this.onInput||this.emitEvent())},clear:function(){this.currentValue="",this.emitEvent(),this.isFocus=!0,this.setFocus(),this.autoFixed&&!this.isFixed&&(this.isFixed=!0),this.$emit("on-clear")},cancel:function(){this.isCancel=!0,this.currentValue="",this.emitEvent(),this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(t){this.$emit("result-click",t),this.$emit("on-result-click",t),this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0),this.$emit("on-touch")},setFocus:function(){this.$refs.input.focus()},setBlur:function(){this.$refs.input.blur()},onFocus:function(){this.isFocus=!0,this.$emit("on-focus"),this.touch()},onBlur:function(){this.isFocus=!1,this.$emit("on-blur")}},data:function(){return{onInput:!1,currentValue:"",isCancel:!0,isFocus:!1,isFixed:!1}},watch:{isFixed:function(t){!0===t&&(this.setFocus(),this.isFocus=!0,this.autoScrollToTop&&setTimeout(function(){window.scrollTo(0,0)},150))},value:function(t){this.currentValue=t}}}},451:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-search-box",class:{"vux-search-fixed":t.isFixed},style:{top:t.isFixed?t.top:"",position:t.fixPosition}},[i("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":!t.isCancel||t.currentValue}},[t._t("left"),t._v(" "),i("form",{staticClass:"weui-search-bar__form",attrs:{action:"."},on:{submit:function(e){e.preventDefault(),t.$emit("on-submit",t.value)}}},[i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFixed&&t.autoFixed,expression:"!isFixed && autoFixed"}],staticClass:"vux-search-mask",attrs:{for:"search_input_"+t.uuid},on:{click:t.touch}}),t._v(" "),i("div",{staticClass:"weui-search-bar__box"},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{type:"search",autocomplete:"off",id:"search_input_"+t.uuid,placeholder:t.placeholder,required:t.required},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,compositionstart:function(e){t.onComposition(e,"start")},compositionend:function(e){t.onComposition(e,"end")},input:[function(e){e.target.composing||(t.currentValue=e.target.value)},function(e){t.onComposition(e,"input")}]}}),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-icon-clear",attrs:{href:"javascript:"},on:{click:t.clear}})]),t._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFocus&&!t.value,expression:"!isFocus && !value"}],staticClass:"weui-search-bar__label",attrs:{for:"search_input_"+t.uuid}},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("span",[t._v(t._s(t.placeholder||"搜索"))])])]),t._v(" "),i("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:"},on:{click:t.cancel}},[t._v(t._s(t.cancelText||"取消")+"\n    ")]),t._v(" "),t._t("right")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],staticClass:"weui-cells vux-search_show"},[t._t("default"),t._v(" "),t._l(t.results,function(e){return i("div",{staticClass:"weui-cell weui-cell_access",on:{click:function(i){t.handleResultClick(e)}}},[i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[t._v(t._s(e.title))])])])})],2)])},a=[],s={render:n,staticRenderFns:a};e.a=s},46:function(t,e){},47:function(t,e,i){"use strict";String,Number},48:function(t,e,i){"use strict";e.a={name:"badge",props:{text:[String,Number]}}},49:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},a=[],s={render:n,staticRenderFns:a};e.a=s},50:function(t,e,i){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},96:function(t,e){},97:function(t,e,i){"use strict";i(38)},98:function(t,e,i){"use strict";var n=i(38);e.a={name:"sticky",data:function(){return{initTimes:0}},created:function(){this.$vux&&this.$vux.bus&&this.$vux.bus.$on("vux:after-view-enter",this.bindSticky)},activated:function(){this.initTimes>0&&this.bindSticky(),this.initTimes++},mounted:function(){var t=this;this.$nextTick(function(){t.bindSticky()})},beforeDestroy:function(){this.$vux&&this.$vux.bus&&this.$vux.bus.$off("vux:after-view-enter",this.bindSticky)},methods:{bindSticky:function(){var t=this;this.disabled||this.$nextTick(function(){Object(n.a)(t.$el,{scrollBox:t.scrollBox,offset:t.offset,checkStickySupport:void 0===t.checkStickySupport||t.checkStickySupport})})}},props:["scrollBox","offset","checkStickySupport","disabled"]}},99:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-sticky-box"},[t._t("default")],2)},a=[],s={render:n,staticRenderFns:a};e.a=s}},[1060]);