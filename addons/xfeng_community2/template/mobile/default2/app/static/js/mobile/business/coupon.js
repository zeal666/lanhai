webpackJsonp([91],{683:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(684);new Vue({render:function(t){return t(e.a)}}).$mount("#app")},684:function(t,i,n){"use strict";function e(t){n(685)}var a=(n(686),n(687)),o=n(688),s=n(0),r=e,c=s(a.a,o.a,!1,r,null,null);i.a=c.exports},685:function(t,i){},686:function(t,i,n){"use strict";var e=(n(8),n(3)),a=n(10),o=n(6),s=n(21),r=n(5),c=n(41),l=n(4),d=n(11),u=n(13),p=n(9),f=n(12),v=n.n(f);p.a,a.a,o.a,s.a,r.a,c.a,l.a,d.a,u.a,v.a},687:function(t,i,n){"use strict";var e=(n(8),n(3)),a=n(10),o=n(6),s=n(21),r=n(5),c=n(41),l=n(4),d=n(11),u=n(13),p=n(9),f=n(12),v=n.n(f);i.a={directives:{TransferDom:p.a},components:{ViewBox:a.a,Cell:o.a,Badge:s.a,Group:r.a,XDialog:c.a,XButton:l.a,XHeader:d.a,LoadMore:u.a,InfiniteLoading:v.a},data:function(){return{items:[],openModalIng:!1}},beforeCreate:function(){this.initialize={currentLoaded:!1,currentLoading:!1,pindex:1,psize:20}},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{onInfinite:function(t){var i=this;if(i.initialize.currentLoading)return!1;i.initialize.currentLoading=!0,e.a.appbusinessCoupon(i.initialize.pindex).then(function(n){i.initialize.pindex++,i.items=i.items.concat(n.data.list),n.data.list.length>=i.initialize.psize?(i.initialize.currentLoading=!1,t.loaded()):t.complete()}).catch(function(t){i.$vux.toast.show({type:"warn",text:t.err_msg})})}},computed:{}}},688:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticStyle:{height:"100%"}},[n("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[n("x-header",{staticStyle:{"background-color":"#ff9800"},attrs:{title:"核销记录"}},[n("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),n("div",{staticClass:"weui-panel weui-panel_access"},[n("div",{staticClass:"weui-panel__bd"},t._l(t.items,function(i,e){return n("a",{key:e,staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:i.link}},[n("div",{staticClass:"weui-media-box__bd"},[n("p",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(i.couponsn)}}),t._v(" "),n("p",{staticClass:"weui-media-box__desc",staticStyle:{"-webkit-box-orient":"vertical","margin-top":"10px"}},[t._v("\n                            操作人:"+t._s(i.user)+" 核销时间:"+t._s(i.usetime)+"\n                        ")])]),t._v(" "),n("span",{staticClass:"weui-cell__ft"},[t._v("\n                        已核销\n                    ")])])}))]),t._v(" "),n("div",{staticClass:"clearfloat"}),t._v(" "),n("infinite-loading",{ref:"infiniteLoading",attrs:{spinner:"waveDots"},on:{infinite:t.onInfinite}},[n("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("已全部加载完…")]),t._v(" "),n("span",{attrs:{slot:"no-results"},slot:"no-results"},[n("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}})],1)]),t._v(" "),n("div",{staticClass:"bounce-btn cd-bouncy-nav-trigger",on:{click:function(i){t.openModalIng=!0}}},[n("i",{staticClass:"iconfont icon-caidan"})]),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[t.openModalIng?n("x-dialog",{staticClass:"dialog-demo",model:{value:t.openModalIng,callback:function(i){t.openModalIng=i},expression:"openModalIng"}},[n("div",{staticStyle:{padding:"15px"}},[n("x-button",{attrs:{type:"primary"}},[t._v("核销")])],1),t._v(" "),n("div",{on:{click:function(i){t.openModalIng=!1}}},[n("span",{staticClass:"vux-close"})])]):t._e()],1)],1)],1)},a=[],o={render:e,staticRenderFns:a};i.a=o}},[683]);