webpackJsonp([43],{613:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(614);new Vue({render:function(t){return t(o.a)}}).$mount("#app")},614:function(t,e,a){"use strict";function o(t){a(615)}var s=(a(616),a(617)),i=a(618),n=a(0),r=o,u=n(s.a,i.a,!1,r,"data-v-ff8bc710",null);e.a=u.exports},615:function(t,e){},616:function(t,e,a){"use strict";var o=a(6),s=a(7),i=a(9),n=a(22),r=a(16),u=a(12),l=a(26),c=a(27);i.a,n.a,r.a,u.a,l.a,c.a},617:function(t,e,a){"use strict";var o=a(6),s=a(7),i=a(9),n=a(22),r=a(16),u=a(12),l=a(26),c=a(27);e.a={components:{ViewBox:i.a,Cell:n.a,Group:r.a,XHeader:u.a,Tabbar:l.a,TabbarItem:c.a},data:function(){return{items:[],px:0}},beforeCreate:function(){},beforeMount:function(){var t=this,e=this;e.$vux.loading.show();var a=o.a.M.urlQuery("id");s.a.costDetail(a).then(function(e){t.items=e.data,t.px=t.items.hstatus?"46px":0}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{gourl:function(t){window.location.href=o.a.M.url("cost/add",{status:2,type:1})},url:function(){return o.a.M.url("home")},homeurl:function(){window.location.href=o.a.M.url("home")}},computed:{}}},618:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%",background:"#f5f5f5"}},[a("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"0px"}},[t.items.hstatus?a("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"物业缴费","left-options":{preventGoBack:!0}},on:{"on-click-back":t.homeurl},slot:"header"},[a("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url()},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),a("div",{staticClass:"property02-head"},[1==t.items.status?a("p",[t._v("本期账单已缴金额合计")]):a("p",[t._v("本期账单未缴金额合计")]),t._v(" "),a("p",[a("span",[t._v(t._s(t.items.total))])]),t._v(" "),a("p",[t._v("房屋："+t._s(t.items.homenumber))])]),t._v(" "),a("group",[a("cell",{attrs:{title:"账单时间",value:t.items.costtime}}),t._v(" "),t._l(t.items.list,function(t,e){return a("cell",{key:e,attrs:{"align-items":"flex-start",title:t.category,value:t.fee}})})],2),t._v(" "),2==t.items.status&&1==t.items._status?a("tabbar",{staticClass:"default_bottom",staticStyle:{"background-color":"#ff9800"},attrs:{slot:"bottom"},slot:"bottom"},[a("tabbar-item",{nativeOn:{click:function(e){t.gourl()}}},[a("span",{staticStyle:{"font-size":"18px",color:"#FFFFFF"},attrs:{slot:"label"},slot:"label"},[t._v("我要缴费")])])],1):t._e()],1)],1)},s=[],i={render:o,staticRenderFns:s};e.a=i}},[613]);