webpackJsonp([44],{576:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(577);new Vue({render:function(t){return t(i.a)}}).$mount("#app")},577:function(t,e,a){"use strict";function i(t){a(578)}var s=(a(579),a(580)),n=a(581),r=a(0),o=i,u=r(s.a,n.a,!1,o,"data-v-12275a61",null);e.a=u.exports},578:function(t,e){},579:function(t,e,a){"use strict";var i=a(6),s=a(7),n=a(9),r=a(12);n.a,r.a},580:function(t,e,a){"use strict";var i=a(6),s=a(7),n=a(9),r=a(12);e.a={components:{ViewBox:n.a,XHeader:r.a},data:function(){return{items:[],px:0}},beforeCreate:function(){},beforeMount:function(){var t=this,e=this;e.$vux.loading.show();var a=i.a.M.urlQuery("id");s.a.announcementDetail(a).then(function(a){t.items=a.data,e.px=t.items.hstatus?"40px":"0",e.sharedata={title:e.items.regiontitle+e.items.title,imgUrl:e.items.thumb[0],desc:e.items.reason},wx.ready(function(){wx.onMenuShareAppMessage(e.sharedata),wx.onMenuShareTimeline(e.sharedata),wx.onMenuShareQQ(e.sharedata),wx.onMenuShareWeibo(e.sharedata)})}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{url:function(){return i.a.M.url("home")}},computed:{}}},581:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%","background-color":"#fff"}},[a("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"0px"}},[t.items.hstatus?a("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"小区公告"},slot:"header"},[a("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url()},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),a("div",{staticClass:"page article js_show"},[a("div",{staticClass:"page__bd"},[a("article",{staticClass:"weui-article"},[a("section",[a("h2",[t._v(t._s(t.items.title))]),t._v(" "),a("h3",{staticClass:"title"},[t._v(t._s(t.items.createtime))]),t._v(" "),a("section",[t.items.thumb?a("p",t._l(t.items.thumb,function(t,e){return a("img",{attrs:{src:t}})})):t._e(),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.items.reason)}})])])])])])],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n}},[576]);