webpackJsonp([48],{30:function(t,e,i){"use strict";var a=(i(70),i(71)),s=i(72),l=i(0),c=l(a.a,s.a,!1,null,null,null);e.a=c.exports},70:function(t,e,i){"use strict";String},71:function(t,e,i){"use strict";e.a={name:"box",props:{gap:String}}},72:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},s=[],l={render:a,staticRenderFns:s};e.a=l},757:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(758);new Vue({render:function(t){return t(a.a)}}).$mount("#app")},758:function(t,e,i){"use strict";function a(t){i(759)}var s=(i(760),i(761)),l=i(762),c=i(0),n=a,_=c(s.a,l.a,!1,n,"data-v-73c70c30",null);e.a=_.exports},759:function(t,e){},760:function(t,e,i){"use strict";var a=i(3),s=i(4),l=i(7),c=i(30),n=i(9),_=i(12);l.a,c.a,n.a,_.a},761:function(t,e,i){"use strict";var a=i(3),s=i(4),l=i(7),c=i(30),n=i(9),_=i(12);e.a={components:{ViewBox:l.a,Box:c.a,XHeader:n.a,XButton:_.a},data:function(){return{id:"",item:[],sharedata:{},title:"联系司机",px:0}},beforeCreate:function(){var t=this,e=a.a.M.urlQuery("id");t.id=4,s.a.carDetail(e).then(function(e){t.item=e.data,t.px=t.item.hstatus?"50px":"0",t.sharedata={title:t.item.regionname+t.item.start_position+"至"+t.item.end_position+t.item.title+"拼车",imgUrl:t.item.avatar,desc:""},wx.ready(function(){wx.onMenuShareAppMessage(t.sharedata),wx.onMenuShareTimeline(t.sharedata),wx.onMenuShareQQ(t.sharedata),wx.onMenuShareWeibo(t.sharedata)}),2==t.item.type?t.title="联系司机":t.title="联系乘客"}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})})},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{goUrl:function(t){window.location.href=t},url:function(){return a.a.M.url("home")}},computed:{}}},762:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",background:"#ffffff"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"0px"}},[t.item.hstatus?i("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:t.item.title},slot:"header"},[i("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url()},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),i("div",{staticClass:"car-detail-contain"},[i("div",{staticClass:"weui-cells car-detail-cells"},[i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("拼车状态:")])]),t._v(" "),i("div",{staticClass:"weui-cell__bd",staticStyle:{color:"#ff9800"}},[t._v(t._s(1==t.item.status?"拼车完成":"拼车未完成"))])]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("称呼:")])]),t._v(" "),t.item.realname?i("div",{staticClass:"weui-cell__bd"},[t._v(t._s(t.item.realname))]):t._e(),t._v(" "),""==t.item.realname?i("div",{staticClass:"weui-cell__bd"},[t._v("L"+t._s(t.item.id))]):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("起点:")])]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(t.item.start_position)+"\n                    ")])]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("终点:")])]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(t.item.end_position)+"\n                    ")])]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd",attrs:{id:"carItem02"}},[1==t.item.type?i("label",{staticClass:"weui-form-preview__label"},[t._v("需要座位:")]):t._e(),t._v(" "),2==t.item.type?i("label",{staticClass:"weui-form-preview__label"},[t._v("剩余座位:")]):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(t.item.seat)+"位\n                    ")])]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("出发时间:")])]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(t.item.gotime)+"\n                    ")])]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("返回时间:")])]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(t.item.backtime)+"\n                    ")])]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("发布时间:")])]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(t.item.createtime)+"\n                    ")])]),t._v(" "),i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-form-preview__label"},[t._v("价格:")])]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(t.item.sprice)+"元/位\n                    ")])])]),t._v(" "),i("box",{attrs:{gap:"10px 10px"}},[i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.goUrl(t.item.url)}}},[t._v(t._s(t.title))])],1)],1)],1)],1)},s=[],l={render:a,staticRenderFns:s};e.a=l}},[757]);