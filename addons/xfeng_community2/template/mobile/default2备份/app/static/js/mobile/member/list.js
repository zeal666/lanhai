webpackJsonp([77],{994:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(995);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},995:function(t,i,e){"use strict";function n(t){e(996)}var a=(e(997),e(998)),o=e(999),r=e(0),s=n,l=r(a.a,o.a,!1,s,null,null);i.a=l.exports},996:function(t,i){},997:function(t,i,e){"use strict";var n=e(8),a=e(3),o=e(10),r=e(6),s=e(21),l=e(5),c=e(11),u=e(13),d=e(12),f=e.n(d);o.a,r.a,s.a,l.a,c.a,u.a,f.a},998:function(t,i,e){"use strict";var n=e(8),a=e(3),o=e(10),r=e(6),s=e(21),l=e(5),c=e(11),u=e(13),d=e(12),f=e.n(d);i.a={components:{ViewBox:o.a,Cell:r.a,Badge:s.a,Group:l.a,XHeader:c.a,LoadMore:u.a,InfiniteLoading:f.a},data:function(){return{items:[]}},beforeCreate:function(){this.initialize={currentLoaded:!1,currentLoading:!1,pindex:1,psize:20}},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{onInfinite:function(t){var i=this;if(i.initialize.currentLoading)return!1;i.initialize.currentLoading=!0,a.a.appuserList(i.initialize.pindex).then(function(e){i.initialize.pindex++,i.items=i.items.concat(e.data),e.data.length>=i.initialize.psize?(i.initialize.currentLoading=!1,t.loaded()):t.complete()}).catch(function(t){i.$vux.toast.show({type:"warn",text:t.err_msg})})},url:function(t){return n.a.M.url(t)}},computed:{}}},999:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{height:"100%"}},[e("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[e("x-header",{staticStyle:{"background-color":"#F7624B"},attrs:{title:"小区列表"}},[e("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),e("group",t._l(t.items,function(i,n){return e("cell",{key:n,attrs:{link:i.url}},[i.thumb?e("img",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{slot:"icon",src:i.thumb,width:"24",height:"24"},slot:"icon"}):t._e(),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(i.title))])]),t._v(" "),e("badge",{attrs:{text:i.total}})],1)})),t._v(" "),e("div",{staticClass:"clearfloat"}),t._v(" "),e("infinite-loading",{ref:"infiniteLoading",attrs:{spinner:"waveDots"},on:{infinite:t.onInfinite}},[e("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("已全部加载完…")]),t._v(" "),e("span",{attrs:{slot:"no-results"},slot:"no-results"},[e("load-more",{attrs:{"show-loading":!1,tip:"暂无数据","background-color":"#fbf9fe"}})],1)])],1)],1)},a=[],o={render:n,staticRenderFns:a};i.a=o}},[994]);