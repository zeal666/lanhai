webpackJsonp([114],{11:function(t,e,s){"use strict";String;var a={name:"box",props:{gap:String}},i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},staticRenderFns:[]},n=s(0)(a,i,!1,null,null,null);e.a=n.exports},358:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),i=s(2),n=s(3),r=s(72),o=s(14),c=s(11),l=s(4),u=s(16),d=(n.a,r.a,o.a,c.a,l.a,u.q,{data:function(){return{items:[],status:"",recommand:"",pics:[]}},components:{ViewBox:n.a,Card:r.a,XButton:o.a,Box:c.a,XHeader:l.a,LnUploader:u.q},beforeCreate:function(){},beforeMount:function(){var t=this;this.$vux.loading.show();var e=a.a.M.urlQuery("id");i.a.appbusinessGoodDetail(e,"detail").then(function(e){e&&(t.items=e.data,1==e.data.status?t.status="是":t.status="否",1==e.data.recommand?t.recommand="是":t.recommand="否",t.pics=e.data.thumbs)})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{url:function(t){var e=a.a.M.urlQuery("id");return a.a.M.url(t,{id:e})},postdata:function(){var t=this,e=a.a.M.urlQuery("id");i.a.appbusinessGoodDetail(e,"del").then(function(e){0==e.err_code&&t.$vux.toast.show({text:"删除成功",onHide:function(){window.location.href=a.a.M.url("xqsys/business/goods")}})})}},computed:{}}),_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%"}},[s("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[s("x-header",{staticStyle:{"background-color":"#F7624B"},attrs:{title:"商品详情"}},[s("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),s("div",{staticClass:"page article js_show"},[s("div",{staticClass:"page__bd"},[s("article",{staticClass:"weui-article"},[s("section",[s("h3",{staticClass:"title"},[t._v("商家名称："+t._s(t.items.sjname))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("商品说明："+t._s(t.items.title))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("团购说明："+t._s(t.items.instruction))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("商品库存："+t._s(t.items.total))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("商品原价："+t._s(t.items.productprice)+"元")]),t._v(" "),s("h3",{staticClass:"title"},[t._v("团购价："+t._s(t.items.marketprice)+"元")]),t._v(" "),s("h3",{staticClass:"title"},[t._v("是否上架："+t._s(t.status))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("店铺推荐："+t._s(t.recommand))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("抢购详情："+t._s(t.items.content))]),t._v(" "),s("h3",{staticClass:"title"},[t._v("购买须知："+t._s(t.items.description))]),t._v(" "),s("ln-uploader",{attrs:{title:"",desc:"",items:t.pics,count:0}})],1)])])]),t._v(" "),s("box",{attrs:{gap:"20px 20px"}},[s("x-button",{attrs:{type:"primary",link:t.items.url}},[t._v("修改商品")]),t._v(" "),s("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.postdata()}}},[t._v("删除商品")])],1)],1)],1)},staticRenderFns:[]};var v=s(0)(d,_,!1,function(t){s(359)},"data-v-d62f8b0e",null).exports;new Vue({render:function(t){return t(v)}}).$mount("#app")},359:function(t,e){},72:function(t,e,s){"use strict";var a=s(50),i=(Object,Object,{name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&Object(a.b)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-panel weui-panel_access"},[t.header&&t.header.title?s("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header.title)},on:{click:function(e){t.$emit("on-click-header")}}}):t._e(),t._v(" "),t._t("header"),t._v(" "),s("div",{staticClass:"weui-panel__bd"},[s("div",{staticClass:"vux-card-content"},[t._t("content")],2)]),t._v(" "),s("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title?s("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:t.onClickFooter}},[s("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()]),t._v(" "),t._t("footer")],2)},staticRenderFns:[]};var r=s(0)(i,n,!1,function(t){s(90)},null,null);e.a=r.exports},90:function(t,e){}},[358]);