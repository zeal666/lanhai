webpackJsonp([39],{656:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(657);new Vue({render:function(t){return t(a.a)}}).$mount("#app")},657:function(t,e,n){"use strict";function a(t){n(658)}var i=(n(659),n(660)),o=n(661),r=n(0),s=a,u=r(i.a,o.a,!1,s,"data-v-713af8d2",null);e.a=u.exports},658:function(t,e){},659:function(t,e,n){"use strict";var a=n(5),i=n(6),o=n(8),r=n(11);o.a,r.a},660:function(t,e,n){"use strict";var a=n(5),i=n(6),o=n(8),r=n(11);e.a={components:{ViewBox:o.a,XHeader:r.a},data:function(){return{items:[],px:0}},beforeCreate:function(){var t=this;i.a.companyDetail().then(function(e){t.items=e.data,t.px=t.items.hstatus?"50px":"0"}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})})},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{url:function(){return a.a.M.url("home")}},computed:{}}},661:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",background:"#ffffff"}},[n("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"0px"}},[t.items.hstatus?n("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"关于我们"},slot:"header"},[n("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url()},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),n("div",{staticClass:"weui-article",domProps:{innerHTML:t._s(t.items.reason)}})],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o}},[656]);