webpackJsonp([94],{660:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(661);new Vue({render:function(t){return t(a.a)}}).$mount("#app")},661:function(t,i,e){"use strict";function a(t){e(662)}var n=(e(663),e(664)),o=e(665),s=e(0),r=a,l=s(n.a,o.a,!1,r,null,null);i.a=l.exports},662:function(t,i){},663:function(t,i,e){"use strict";var a=e(8),n=e(3),o=e(10),s=e(6),r=e(21),l=e(5),c=e(41),u=e(4),d=e(9),f=e(11),p=e(13),v=e(12),_=e.n(v);d.a,o.a,s.a,r.a,l.a,c.a,u.a,f.a,p.a,_.a},664:function(t,i,e){"use strict";var a=e(8),n=e(3),o=e(10),s=e(6),r=e(21),l=e(5),c=e(41),u=e(4),d=e(9),f=e(11),p=e(13),v=e(12),_=e.n(v);i.a={directives:{TransferDom:d.a},components:{ViewBox:o.a,Cell:s.a,Badge:r.a,Group:l.a,XDialog:c.a,XButton:u.a,XHeader:f.a,LoadMore:p.a,InfiniteLoading:_.a},data:function(){return{items:[],openModalIng:!1}},beforeCreate:function(){this.initialize={currentLoaded:!1,currentLoading:!1,pindex:1,psize:20}},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{onInfinite:function(t){var i=this;if(i.initialize.currentLoading)return!1;i.initialize.currentLoading=!0;var e=a.a.M.urlQuery("regionid");n.a.appbuildDisplay(i.initialize.pindex,e).then(function(e){i.initialize.pindex++,i.items=i.items.concat(e.data.list),e.data.list.length>=i.initialize.psize?(i.initialize.currentLoading=!1,t.loaded()):t.complete()}).catch(function(t){i.$vux.toast.show({type:"warn",text:t.err_msg})})},url:function(t){return a.a.M.url(t)},goUrl:function(t){window.location.href=this.url(t)}},computed:{}}},665:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{height:"100%"}},[e("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[e("x-header",{staticStyle:{"background-color":"#F7624B"},attrs:{title:"楼宇列表"}},[e("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),e("div",{staticClass:"weui-panel weui-panel_access"},[e("div",{staticClass:"weui-panel__bd"},t._l(t.items,function(i,a){return e("a",{key:a,staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:i.link}},[e("div",{staticClass:"weui-media-box__bd"},[e("p",{staticClass:"weui-media-box__desc",staticStyle:{"-webkit-box-orient":"vertical","margin-top":"10px"}},[i.area?e("span",[t._v(t._s(i.area)+"区")]):t._e(),t._v("\n                            "+t._s(i.buildtitle)+"栋\n                        ")]),t._v(" "),e("p",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(i.title)}})]),t._v(" "),e("span",{staticClass:"weui-cell__ft"})])}))]),t._v(" "),e("div",{staticClass:"clearfloat"}),t._v(" "),e("infinite-loading",{ref:"infiniteLoading",attrs:{spinner:"waveDots"},on:{infinite:t.onInfinite}},[e("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("已全部加载完…")]),t._v(" "),e("span",{attrs:{slot:"no-results"},slot:"no-results"},[e("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}})],1)]),t._v(" "),e("div",{staticClass:"bounce-btn cd-bouncy-nav-trigger",on:{click:function(i){t.goUrl("xqsys/build/add")}}},[e("i",{staticClass:"iconfont icon-jia1"})])],1)],1)},n=[],o={render:a,staticRenderFns:n};i.a=o}},[660]);