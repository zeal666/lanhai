webpackJsonp([68],{1191:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(1192);new Vue({render:function(t){return t(a.a)}}).$mount("#app")},1192:function(t,i,e){"use strict";function a(t){e(1193)}var n=(e(1194),e(1195)),s=e(1196),o=e(0),r=a,c=o(n.a,s.a,!1,r,null,null);i.a=c.exports},1193:function(t,i){},1194:function(t,i,e){"use strict";var a=e(8),n=e(3),s=e(10),o=e(6),r=e(21),c=e(5),l=e(41),u=e(4),d=e(11),p=e(13),f=e(9),_=e(12),v=e.n(_);f.a,s.a,o.a,r.a,c.a,l.a,u.a,d.a,p.a,v.a},1195:function(t,i,e){"use strict";var a=e(8),n=e(3),s=e(10),o=e(6),r=e(21),c=e(5),l=e(41),u=e(4),d=e(11),p=e(13),f=e(9),_=e(12),v=e.n(_);i.a={directives:{TransferDom:f.a},components:{ViewBox:s.a,Cell:o.a,Badge:r.a,Group:c.a,XDialog:l.a,XButton:u.a,XHeader:d.a,LoadMore:p.a,InfiniteLoading:v.a},data:function(){return{items:[],openModalIng:!1}},beforeCreate:function(){this.initialize={currentLoaded:!1,currentLoading:!1,pindex:1,psize:20}},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{onInfinite:function(t){var i=this;if(i.initialize.currentLoading)return!1;i.initialize.currentLoading=!0,n.a.appshoppingList(i.initialize.pindex).then(function(e){i.initialize.pindex++,i.items=i.items.concat(e.data),e.data.length>=i.initialize.psize?(i.initialize.currentLoading=!1,t.loaded()):t.complete()}).catch(function(t){i.$vux.toast.show({type:"warn",text:t.err_msg})})},url:function(t){return a.a.M.url(t)},goUrl:function(t){window.location.href=this.url(t)}},computed:{}}},1196:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{height:"100%"}},[e("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[e("x-header",{staticStyle:{"background-color":"#ff9800"},attrs:{title:"商品列表"}},[e("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),e("div",{staticClass:"weui-panel weui-panel_access"},[e("div",{staticClass:"weui-panel__bd"},t._l(t.items,function(i,a){return e("a",{key:a,staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:i.link}},[i.src?e("div",{staticClass:"weui-media-box__hd"},[e("img",{staticClass:"weui-media-box__thumb",attrs:{src:i.src,alt:""}})]):t._e(),t._v(" "),e("div",{staticClass:"weui-media-box__bd"},[e("p",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(i.title)}}),t._v(" "),e("p",{staticClass:"weui-media-box__desc",staticStyle:{"-webkit-box-orient":"vertical","margin-top":"10px"}},[t._v("\n                            销售价:"+t._s(i.marketprice)+"   市场价:"+t._s(i.productprice)+"\n                        ")]),t._v(" "),e("p",{staticClass:"weui-media-box__desc",staticStyle:{"-webkit-box-orient":"vertical","margin-top":"10px"},domProps:{innerHTML:t._s(i.createtime)}})]),t._v(" "),e("span",{staticClass:"weui-cell__ft"},[1==i.status?e("span",[t._v("上架")]):e("span",[t._v("下架")])])])}))]),t._v(" "),e("div",{staticClass:"clearfloat"}),t._v(" "),e("infinite-loading",{ref:"infiniteLoading",attrs:{spinner:"waveDots"},on:{infinite:t.onInfinite}},[e("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("已全部加载完…")]),t._v(" "),e("span",{attrs:{slot:"no-results"},slot:"no-results"},[e("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}})],1)]),t._v(" "),e("div",{staticClass:"bounce-btn cd-bouncy-nav-trigger",on:{click:function(i){t.goUrl("xqsys/shop/add")}}},[e("i",{staticClass:"iconfont icon-jia1"})])],1)],1)},n=[],s={render:a,staticRenderFns:n};i.a=s}},[1191]);