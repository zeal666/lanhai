webpackJsonp([41],{739:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(740);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},740:function(t,e,i){"use strict";function n(t){i(741)}var r=(i(742),i(743)),o=i(744),a=i(0),s=n,u=a(r.a,o.a,!1,s,"data-v-3c3b4104",null);e.a=u.exports},741:function(t,e){},742:function(t,e,i){"use strict";var n=i(6),r=i(7),o=i(9),a=i(38),s=i(10);o.a,a.a,s.a},743:function(t,e,i){"use strict";var n=i(6),r=i(7),o=i(9),a=i(38),s=i(10);e.a={components:{ViewBox:o.a,Box:a.a,XButton:s.a},data:function(){return{setting:[]}},beforeCreate:function(){var t=this,e=n.a.M.urlQuery("regionid");r.a.setting(e).then(function(e){t.setting=e.data}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})})},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{url:function(t,e){return n.a.M.url(t,e)},gourlm:function(){window.location.href=this.url("register/m",{regionid:n.a.M.urlQuery("regionid")})},gourlf:function(){window.location.href=this.url("register/f",{regionid:n.a.M.urlQuery("regionid")})},gourlc:function(){window.location.href=this.url("register/c",{regionid:n.a.M.urlQuery("regionid")})}},computed:{}}},744:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",background:"#ffffff"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"80px"}},[i("div",{staticClass:"register-guide-head"},[i("div",[i("img",{staticClass:"register-guide-head-img",attrs:{src:t.setting.headimg}})]),t._v(" "),i("h3",[t._v("欢迎使用"+t._s(t.setting.company))])]),t._v(" "),i("div",{staticClass:"register-guide-content"},[i("box",{attrs:{gap:"10px 10px"}},[i("x-button",{directives:[{name:"show",rawName:"v-show",value:1===t.setting.verity_mobile,expression:"setting.verity_mobile===1"}],attrs:{type:"primary"},nativeOn:{click:function(e){t.gourlf()}}},[t._v("手机号注册\n                ")]),t._v(" "),i("x-button",{directives:[{name:"show",rawName:"v-show",value:1===t.setting.verity_code,expression:"setting.verity_code===1"}],attrs:{type:"primary"},nativeOn:{click:function(e){t.gourlc()}}},[t._v("注册码注册")]),t._v(" "),i("x-button",{directives:[{name:"show",rawName:"v-show",value:0===t.setting.verity_mobile&&0===t.setting.verity_code,expression:"setting.verity_mobile===0 && setting.verity_code===0"}],attrs:{type:"primary"},nativeOn:{click:function(e){t.gourlm()}}},[t._v("我要注册\n                ")])],1)],1)])],1)},r=[],o={render:n,staticRenderFns:r};e.a=o}},[739]);