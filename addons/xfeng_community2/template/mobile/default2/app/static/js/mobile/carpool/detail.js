webpackJsonp([53],{26:function(t,e,a){"use strict";var i=(a(38),a(39)),s=a(40),n=a(0),o=n(i.a,s.a,!1,null,null,null);e.a=o.exports},289:function(t,e,a){"use strict";function i(t){a(314)}var s=(a(315),a(316)),n=a(317),o=a(0),r=i,c=o(s.a,n.a,!1,r,null,null);e.a=c.exports},314:function(t,e){},315:function(t,e,a){"use strict";var i=a(16);Object,Object},316:function(t,e,a){"use strict";var i=a(16);e.a={name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&Object(i.b)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}},317:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-panel weui-panel_access"},[t.header&&t.header.title?a("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header.title)},on:{click:function(e){t.$emit("on-click-header")}}}):t._e(),t._v(" "),t._t("header"),t._v(" "),a("div",{staticClass:"weui-panel__bd"},[a("div",{staticClass:"vux-card-content"},[t._t("content")],2)]),t._v(" "),a("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title?a("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:t.onClickFooter}},[a("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()]),t._v(" "),t._t("footer")],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},38:function(t,e,a){"use strict";String},39:function(t,e,a){"use strict";e.a={name:"box",props:{gap:String}}},40:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},780:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(781);new Vue({render:function(t){return t(i.a)}}).$mount("#app")},781:function(t,e,a){"use strict";function i(t){a(782)}var s=(a(783),a(784)),n=a(785),o=a(0),r=i,c=o(s.a,n.a,!1,r,"data-v-f6178208",null);e.a=c.exports},782:function(t,e){},783:function(t,e,a){"use strict";var i=a(8),s=a(3),n=a(10),o=a(289),r=a(4),c=a(26),l=a(11);n.a,o.a,r.a,c.a,l.a},784:function(t,e,a){"use strict";var i=a(8),s=a(3),n=a(10),o=a(289),r=a(4),c=a(26),l=a(11);e.a={components:{ViewBox:n.a,Card:o.a,XButton:r.a,Box:c.a,XHeader:l.a},data:function(){return{items:[],seat:"",type:""}},beforeCreate:function(){},beforeMount:function(){var t=this,e=this;e.$vux.loading.show();var a=i.a.M.urlQuery("id");s.a.appcarDetail(a).then(function(e){e&&(t.items=e.data,1==t.items.type&&(t.seat="剩余座位",t.type="司机"),2==t.items.type&&(t.seat="需要座位",t.type="乘客"))}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{url:function(t){var e=i.a.M.urlQuery("id");return i.a.M.url(t,{id:e})},postdata:function(){var t=this,e=i.a.M.urlQuery("id");s.a.appcarDel(e).then(function(e){t.$vux.toast.show({text:"删除成功",onHide:function(){window.location.href=i.a.M.url("xqsys/carpool/list")}})}).catch(function(t){self.$vux.toast.show({type:"warn",text:t.err_msg})})},toblack:function(){var t=this,e=i.a.M.urlQuery("id");s.a.appcarToBlack(e).then(function(e){t.$vux.toast.show({text:"操作成功",onHide:function(){window.location.href=i.a.M.url("xqsys/carpool/list")}})}).catch(function(t){self.$vux.toast.show({type:"warn",text:t.err_msg})})}},computed:{}}},785:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[a("x-header",{staticStyle:{"background-color":"#ff9800"},attrs:{title:"车辆详情"}},[a("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),a("div",{staticClass:"page article js_show"},[a("div",{staticClass:"page__bd"},[a("article",{staticClass:"weui-article"},[a("section",[a("h2",[t._v(t._s(t.items.title))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("联系人："+t._s(t.items.realname))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("联系电话："+t._s(t.items.mobile))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("所属小区："+t._s(t.items.regionname))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("拼车身份："+t._s(t.type))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("出发地点："+t._s(t.items.start_position))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("目的地："+t._s(t.items.end_position))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("出发时间："+t._s(t.items.gotime))]),t._v(" "),a("h3",{staticClass:"title"},[t._v("返回时间："+t._s(t.items.backtime))]),t._v(" "),a("h3",{staticClass:"title"},[t._v(t._s(t.seat)+"："+t._s(t.items.seat))])])])])]),t._v(" "),a("box",{attrs:{gap:"20px 20px"}},[0==t.items.black?a("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.toblack()}}},[t._v("加入黑名单")]):t._e(),t._v(" "),1==t.items.black?a("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.toblack()}}},[t._v("解除屏蔽")]):t._e(),t._v(" "),a("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.postdata()}}},[t._v("删除")])],1)],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n}},[780]);