webpackJsonp([107],{11:function(t,e,s){"use strict";String;var i={name:"box",props:{gap:String}},a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},staticRenderFns:[]},n=s(0)(i,a,!1,null,null,null);e.a=n.exports},428:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),a=s(2),n=s(3),o=s(72),r=s(14),l=s(11),c=s(4),u=(n.a,o.a,r.a,l.a,c.a,{data:function(){return{items:[]}},components:{ViewBox:n.a,Card:o.a,XButton:r.a,Box:l.a,XHeader:c.a},beforeCreate:function(){},beforeMount:function(){var t=this;this.$vux.loading.show();var e=i.a.M.urlQuery("id");a.a.apphouseleaseDetail(e).then(function(e){e&&(t.items=e.data)})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{url:function(t){var e=i.a.M.urlQuery("id");return i.a.M.url(t,{id:e})},postdata:function(){var t=this,e=i.a.M.urlQuery("id");a.a.apphouseleaseDel(e).then(function(e){0==e.err_code&&t.$vux.toast.show({text:"删除成功",onHide:function(){window.location.href=i.a.M.url("xqsys/houselease/list")}})})}},computed:{}}),_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%"}},[s("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[s("x-header",{staticStyle:{"background-color":"#ff9800"},attrs:{title:"家政详情"}},[s("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),s("div",{staticClass:"page article js_show"},[s("div",{staticClass:"page__bd"},[s("article",{staticClass:"weui-article"},[s("section",[s("h3",{staticClass:"title"},[t._v("所属小区："+t._s(t.items.title))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("联系人："+t._s(t.items.realname))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("联系电话："+t._s(t.items.mobile))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("房屋面积："+t._s(t.items.model_area)+"元")]),t._v(" "),s("h3",{staticClass:"title"},[t._v("房屋楼层："+t._s(t.items.house_floor))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("房屋租金："+t._s(t.items.price))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("房屋户型："+t._s(t.items.house_model))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("装修情况："+t._s(t.items.fitment))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("住宅类型："+t._s(t.items.house))]),t._v(" "),1==t.items.category||2==t.items.category?s("h3",{staticClass:"title"},[t._v("押金方式："+t._s(t.items.price_way))]):t._e(),t._v(" "),s("h3",{staticClass:"title"},[t._v("出租方式："+t._s(t.items.way))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("房屋朝向："+t._s(t.items.house_aspect))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("房屋配置："+t._s(t.items.spec))])])])])]),t._v(" "),s("box",{attrs:{gap:"20px 20px"}},[s("x-button",{attrs:{type:"primary",link:t.items.url}},[t._v("编辑")]),t._v(" "),s("x-button",{attrs:{type:"warn"},on:{click:function(e){t.postdata()}}},[t._v("删除")])],1)],1)],1)},staticRenderFns:[]};var v=s(0)(u,_,!1,function(t){s(429)},"data-v-1c31f67f",null).exports;new Vue({render:function(t){return t(v)}}).$mount("#app")},429:function(t,e){},72:function(t,e,s){"use strict";var i=s(50),a=(Object,Object,{name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&Object(i.b)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-panel weui-panel_access"},[t.header&&t.header.title?s("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header.title)},on:{click:function(e){t.$emit("on-click-header")}}}):t._e(),t._v(" "),t._t("header"),t._v(" "),s("div",{staticClass:"weui-panel__bd"},[s("div",{staticClass:"vux-card-content"},[t._t("content")],2)]),t._v(" "),s("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title?s("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:t.onClickFooter}},[s("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()]),t._v(" "),t._t("footer")],2)},staticRenderFns:[]};var o=s(0)(a,n,!1,function(t){s(90)},null,null);e.a=o.exports},90:function(t,e){}},[428]);