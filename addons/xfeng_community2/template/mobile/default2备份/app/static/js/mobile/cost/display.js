webpackJsonp([61],{118:function(t,e){},119:function(t,e,a){"use strict";Boolean,Boolean,String,Number,Array},120:function(t,e,a){"use strict";e.a={name:"x-switch",methods:{toBoolean:function(t){if(this.valueMap){return 1===this.valueMap.indexOf(t)}return t},toRaw:function(t){return this.valueMap?this.valueMap[t?1:0]:t}},props:{disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(t){var e=this.toRaw(t);this.$emit("input",e),this.$emit("on-change",e)},value:function(t){this.currentValue=this.toBoolean(t)}}}},121:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"inline-x-switch weui-switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{change:function(e){var a=t.currentValue,i=e.target,n=!!i.checked;if(Array.isArray(a)){var s=t._i(a,null);i.checked?s<0&&(t.currentValue=a.concat([null])):s>-1&&(t.currentValue=a.slice(0,s).concat(a.slice(s+1)))}else t.currentValue=n}}})},n=[],s={render:i,staticRenderFns:n};e.a=s},17:function(t,e,a){"use strict";function i(t){a(118)}var n=(a(119),a(120)),s=a(121),l=a(0),r=i,u=l(n.a,s.a,!1,r,null,null);e.a=u.exports},812:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(813);new Vue({render:function(t){return t(i.a)}}).$mount("#app")},813:function(t,e,a){"use strict";function i(t){a(814),a(815)}var n=(a(816),a(817)),s=a(818),l=a(0),r=i,u=l(n.a,s.a,!1,r,"data-v-40112e0d",null);e.a=u.exports},814:function(t,e){},815:function(t,e){},816:function(t,e,a){"use strict";var i=a(8),n=a(3),s=a(13),l=a(6),r=a(5),u=a(17),c=a(4),v=a(12),o=a.n(v);s.a,l.a,o.a,r.a,u.a,c.a},817:function(t,e,a){"use strict";var i=a(8),n=a(3),s=a(13),l=a(6),r=a(5),u=a(17),c=a(4),v=a(12),o=a.n(v);e.a={components:{LoadMore:s.a,Cell:l.a,InfiniteLoading:o.a,Group:r.a,InlineXSwitch:u.a,XButton:c.a},data:function(){return{currentLoading:!1,pIndex:1,list:[]}},beforeMount:function(){},methods:{printFun:function(t){var e=this;n.a.appcostPrint(t).then(function(t){0===t.err_code&&e.$vux.toast.show({text:"正在打印"})})},payFun:function(t){var e=this,a={id:this.list[t].id,paytype:this.list[t].paytype,remark:this.list[t].remark};n.a.appcostUpdate(a).then(function(a){0===a.err_code&&(e.list[t].status=1,e.$vux.toast.show({text:"状态已改"}))})},onInfinite:function(t){var e=this;if(this.currentLoading)return!1;this.currentLoading=!0,n.a.appcostDisplay(this.pIndex,i.a.M.urlQuery("id")).then(function(a){var i=a.data;e.pIndex++,e.list=e.list.concat(i),console.log("list",e.list),e.currentLoading=!1,i.length?t.loaded():t.complete()})}},computed:{}}},818:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[t.list&&t.list.length?a("div",t._l(t.list,function(e,i){return a("group",{key:i,staticClass:"ln-group",attrs:{gutter:"10px"}},[e.title||e.homenumber?a("cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title)+t._s(e.homenumber))])]):t._e(),t._v(" "),a("div",{staticClass:"ln-preview vux-1px-t"},[e.username?a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("用户姓名")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[t._v(t._s(e.username))])]):t._e(),t._v(" "),e.mobile?a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("用户电话")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[t._v(t._s(e.mobile))])]):t._e(),t._v(" "),e.total?a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("费用")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[t._v(t._s(e.total)+"元")])]):t._e(),t._v(" "),e.paytype?a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("支付方式")]),t._v(" "),"1"===e.paytype?a("span",{staticClass:"ln-preview-item_value"},[t._v("余额")]):t._e(),t._v(" "),"2"===e.paytype?a("span",{staticClass:"ln-preview-item_value"},[t._v("微信支付")]):t._e(),t._v(" "),"3"===e.paytype?a("span",{staticClass:"ln-preview-item_value"},[t._v("货到付款")]):t._e(),t._v(" "),"4"===e.paytype?a("span",{staticClass:"ln-preview-item_value"},[t._v("支付宝")]):t._e(),t._v(" "),"5"===e.paytype?a("span",{staticClass:"ln-preview-item_value"},[t._v("现金")]):t._e(),t._v(" "),"6"===e.paytype?a("span",{staticClass:"ln-preview-item_value"},[t._v("银联刷卡")]):t._e()]):t._e(),t._v(" "),e.paytime?a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("支付时间")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[t._v(t._s(e.paytime))])]):t._e(),t._v(" "),e.costtime?a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("费用时间")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[t._v(t._s(e.costtime))])]):t._e(),t._v(" "),e.remark?a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("备注")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[t._v(t._s(e.remark))])]):t._e(),t._v(" "),a("div",{staticClass:"ln-preview-item"},[a("label",{staticClass:"ln-preview-item_label"},[t._v("支付状态")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[1===e.status?a("x-button",{attrs:{mini:"",type:"primary",disabled:""}},[t._v("已支付")]):a("x-button",{attrs:{mini:"",type:"primary"},nativeOn:{click:function(e){t.payFun(i)}}},[t._v("未支付")])],1)]),t._v(" "),a("div",{staticClass:"ln-preview-item",staticStyle:{"margin-top":"5px"}},[a("label",{staticClass:"ln-preview-item_label"},[t._v("单据打印")]),t._v(" "),a("span",{staticClass:"ln-preview-item_value"},[a("x-button",{attrs:{mini:"",type:"primary"},nativeOn:{click:function(a){t.printFun(e.id)}}},[t._v("单据打印")])],1)])])],1)})):t._e(),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{spinner:"waveDots"},on:{infinite:t.onInfinite}},[a("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("已全部加载完…")]),t._v(" "),a("span",{attrs:{slot:"no-results"},slot:"no-results"},[a("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}})],1)])],1)},n=[],s={render:i,staticRenderFns:n};e.a=s}},[812]);