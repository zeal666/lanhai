webpackJsonp([55],{100:function(t,e,i){"use strict";function a(t){i(138)}var s=(i(139),i(140)),o=i(141),n=i(0),r=a,c=n(s.a,o.a,!1,r,null,null);e.a=c.exports},138:function(t,e){},139:function(t,e,i){"use strict";var a=i(12),s=i.n(a),o=i(1);String,Object,Array,String},140:function(t,e,i){"use strict";var a=i(12),s=i.n(a),o=i(1);e.a={name:"panel",props:{header:String,footer:Object,list:Array,type:{type:String,default:"1"}},methods:{onImgError:function(t,e){this.$emit("on-img-error",JSON.parse(s()(t)),e),t.fallbackSrc&&(e.target.src=t.fallbackSrc)},getUrl:function(t){return Object(o.a)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),Object(o.b)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),Object(o.b)(t.url,this.$router)}}}},141:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header)},on:{click:t.onClickHeader}},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[t._t("body",["1"===t.type?t._l(t.list,function(e){return i("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])])}):t._e(),t._v(" "),"2"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])}):t._e(),t._v(" "),"3"===t.type?[i("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[i("div",{staticClass:"weui-cells"},t._l(t.list,function(e){return i("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-cell__hd"},[i("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),i("span",{staticClass:"weui-cell__ft"})])}))])]:t._e(),t._v(" "),"4"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}}),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e(),t._v(" "),"5"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-media-box_appmsg"},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])]),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title&&"3"!==t.type?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:t.getUrl(t.footer.url)},on:{click:function(e){return e.preventDefault(),t.onClickFooter(e)}}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()])])},s=[],o={render:a,staticRenderFns:s};e.a=o},19:function(t,e,i){"use strict";var a=(i(49),i(50)),s=i(51),o=i(0),n=o(a.a,s.a,!1,null,null,null);e.a=n.exports},49:function(t,e,i){"use strict";var a=i(10),s=i(23);s.a,a.a,Boolean,String,String,Object,String},50:function(t,e,i){"use strict";var a=i(10),s=i(23);e.a={name:"tabbar-item",components:{Badge:s.a},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[a.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},51:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():i("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?i("sup",[i("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},s=[],o={render:a,staticRenderFns:s};e.a=o},873:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(874);new Vue({render:function(t){return t(a.a)}}).$mount("#app")},874:function(t,e,i){"use strict";function a(t){i(875)}var s=(i(876),i(877)),o=i(878),n=i(0),r=a,c=n(s.a,o.a,!1,r,"data-v-99e93c22",null);e.a=c.exports},875:function(t,e){},876:function(t,e,i){"use strict";var a=i(4),s=i(5),o=i(8),n=i(100),r=i(20),c=i(9),l=i(29),_=i(19);o.a,n.a,r.a,c.a,l.a,_.a},877:function(t,e,i){"use strict";var a=i(4),s=i(5),o=i(8),n=i(100),r=i(20),c=i(9),l=i(29),_=i(19);e.a={components:{ViewBox:o.a,Panel:n.a,Group:r.a,XHeader:c.a,Tabbar:l.a,TabbarItem:_.a},data:function(){return{item:[],px:0}},beforeCreate:function(){},beforeMount:function(){var t=this,e=this;e.$vux.loading.show();var i=a.a.M.urlQuery("id");s.a.marketDetail(i).then(function(i){e.item=i.data,e.px=t.item.hstatus?"46px":"0",e.sharedata={title:e.item.region+e.item.title,imgUrl:e.item.images[0],desc:e.item.description},wx.ready(function(){wx.onMenuShareAppMessage(e.sharedata),wx.onMenuShareTimeline(e.sharedata),wx.onMenuShareQQ(e.sharedata),wx.onMenuShareWeibo(e.sharedata)})}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{call:function(t){window.location.href="tel:"+t},url:function(){return a.a.M.url("home")}},computed:{}}},878:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",background:"#f5f5f5"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"50px"}},[t.item.hstatus?i("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:t.item.title},slot:"header"},[i("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url()},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),i("group",{attrs:{gutter:"1px"}},[i("panel",[i("div",{attrs:{slot:"body"},slot:"body"},[i("ul",{staticClass:"market-list"},[i("li",{staticClass:"market-item"},[i("a",{attrs:{href:"#"}},[i("div",{staticClass:"weui-media-box weui-media-box_appmsg"},[i("div",{staticClass:"weui-media-box__hd market-item-hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:t.item.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"weui-media-box__bd market-item-bd"},[i("p",[i("span",{staticClass:"weui-media-box__title"},[t._v(t._s(t.item.realname))]),t._v(" "),i("span",{staticClass:"market-item-approve"},[t._v("认证住户")]),t._v(" "),i("del",{staticClass:"market-item-price",staticStyle:{color:"#ccc"}},[t._v("￥"+t._s(t.item.yprice))])]),t._v(" "),i("p",{staticClass:"weui-media-box__desc market-item-desc"},[t._v("来自"+t._s(t.item.regionname)+" "),i("span",{staticClass:"market-item-time",staticStyle:{"font-size":"14px",color:"#999",right:"0"}},[t._v(t._s(t.item.createtime))])])])]),t._v(" "),i("div",{staticClass:"market-item-contain"},[i("h3",{staticStyle:{color:"#F7624B","font-weight":"normal"}},[t._v("￥"+t._s(t.item.zprice)+"元")]),t._v(" "),i("p",{staticClass:"market-item-text weui-media-box__desc",staticStyle:{"font-size":"16px"}},[t._v(t._s(t.item.title)+"-"+t._s(t.item.description))]),t._v(" "),t._l(t.item.images,function(t,e){return i("img",{key:e,attrs:{src:t}})})],2)])])])])])],1),t._v(" "),i("tabbar",{staticClass:"default_bottom",staticStyle:{"background-color":"#F7624B"},attrs:{slot:"bottom"},nativeOn:{click:function(e){t.call(t.item.tmobile)}},slot:"bottom"},[i("tabbar-item",[i("span",{staticStyle:{"font-size":"18px",color:"#ffffff"},attrs:{slot:"label"},slot:"label"},[t._v("我想要")])])],1)],1)],1)},s=[],o={render:a,staticRenderFns:s};e.a=o}},[873]);