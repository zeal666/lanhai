webpackJsonp([169],{573:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),s=i(2),r=i(3),o=i(81),n=i(104),l=i(17),c=i(98),v=i(4),m=i(54),u=i(61),d=i(16),_=(l.a,r.a,o.a,d.k,n.a,c.a,v.a,m.a,u.a,{directives:{TransferDom:l.a},data:function(){return{item:[],legth:0,sharedata:{},px:0,tagheight:"240px"}},components:{ViewBox:r.a,Swiper:o.a,LnHeader:d.k,Previewer:n.a,SwiperItem:c.a,XHeader:v.a,Tabbar:m.a,TabbarItem:u.a},beforeCreate:function(){},beforeMount:function(){var e=this,t=this;t.$vux.loading.show();var i=a.a.M.urlQuery("id");s.a.houseleaseDetail(i).then(function(i){e.item=i.data,t.px=t.item.hstatus?"46px":"0",t.sharedata={title:t.item.region+t.item.content+t.item.way+t.item.fitment,imgUrl:t.item.images[0].src,desc:t.item.content},wx.ready(function(){wx.onMenuShareAppMessage(t.sharedata),wx.onMenuShareTimeline(t.sharedata),wx.onMenuShareQQ(t.sharedata),wx.onMenuShareWeibo(t.sharedata)})})},mounted:function(){var e=this;setTimeout(function(){e.$vux.loading.hide()},300);var t=window.innerWidth,i=(t=.75*(t>600?600:t))+"px";this.tagheight=i},methods:{gourl:function(e){window.location.href="tel:"+e},show:function(e){console.log(e),this.$refs.previewer.show(e)},options:function(){var e=this;return{getThumbBoundsFn:function(t){var i=e.$el.querySelectorAll(".previewer-demo-img")[t],a=window.pageYOffset||document.documentElement.scrollTop,s=i.getBoundingClientRect();return{x:s.left,y:s.top+a,w:s.width}}}},url:function(){return a.a.M.url("home")}},computed:{}}),w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"100%",background:"#f5f5f5"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":e.px,"body-padding-bottom":"50px"}},[e.item.hstatus?i("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"房屋租赁详情"},slot:"header"},[i("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:e.url()},slot:"right"},[e._v("首页")])]):e._e(),e._v(" "),i("swiper",{attrs:{"show-desc-mask":!1,height:e.tagheight}},e._l(e.item.images,function(t,a){return i("swiper-item",{key:a,staticClass:"swiper-demo-img",nativeOn:{click:function(t){e.show(a)}}},[i("img",{attrs:{src:t.src}})])})),e._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("previewer",{ref:"previewer",attrs:{list:e.item.images,options:e.options}})],1),e._v(" "),i("div",{staticClass:"weui-flex lease-detail-price"},[i("div",{staticClass:"weui-flex__item"},[i("div",{staticClass:"lease-tit"},[i("span",[e._v(e._s(e.item.price)+"\n                    "),1==e.item.category||2==e.item.category?i("samp",[e._v("元/月")]):e._e(),e._v(" "),3==e.item.category||4==e.item.category?i("samp",[e._v("万/套")]):e._e()])]),e._v(" "),i("p",{staticClass:"lease-jianjie"},[e._v(e._s(e.item.house_model)+" | "+e._s(e.item.model_area)+"m² | "+e._s(e.item.fitment))])])]),e._v(" "),i("div",{staticClass:"weui-form-preview lease-detail-preview"},[i("div",{staticClass:"weui-form-preview__hd"},[i("div",{staticClass:"weui-form-preview__item"},[i("label",{},[e._v("房屋信息")])])]),e._v(" "),i("div",{staticClass:"weui-form-preview__bd"},[i("ul",{staticClass:"lease-detail-info"},[i("li",[e._v("类型："+e._s(e.item.house))]),e._v(" "),i("li",[e._v("朝向："+e._s(e.item.house_aspect))]),e._v(" "),i("li",[e._v("楼层："+e._s(e.item.house_floor))]),e._v(" "),i("li",[3==e.item.category||4==e.item.category?i("span",[e._v("建筑年代：")]):i("span",[e._v("可入住：")]),e._v("\n                        "+e._s(e.item.checktime)+"\n                    ")]),e._v(" "),1==e.item.status?i("li",[e._v("是否成交：已成交")]):e._e(),e._v(" "),0==e.item.status?i("li",[e._v("是否成交：未成交")]):e._e(),e._v(" "),i("li",[e._v("发布时间："+e._s(e.item.createtime))])])])]),e._v(" "),i("div",{staticClass:"weui-form-preview lease-detail-preview"},[i("div",{staticClass:"weui-form-preview__hd"},[i("div",{staticClass:"weui-form-preview__item"},[i("label",{},[e._v("配置设施")])])]),e._v(" "),i("div",{staticClass:"weui-form-preview__bd"},[i("ul",{staticClass:"lease-detail-allocation  "},[i("ul",e._l(e.item.list,function(t,a){return i("li",[i("i",{class:t.icon}),e._v(e._s(t.title))])}))])])]),e._v(" "),i("div",{staticClass:"weui-form-preview lease-detail-preview"},[i("div",{staticClass:"weui-form-preview__hd"},[i("div",{staticClass:"weui-form-preview__item"},[i("label",{},[e._v("房源描述")])])]),e._v(" "),i("div",{staticClass:"weui-form-preview__bd"},[i("ul",{staticClass:"lease-detail-allocation"},[e._v("\n                    "+e._s(e.item.content)+"\n                ")])])]),e._v(" "),i("tabbar",{staticClass:"default_bottom",staticStyle:{"background-color":"#ff9800"},attrs:{slot:"bottom"},slot:"bottom"},[i("tabbar-item",{nativeOn:{click:function(t){e.gourl(e.item.tmobile)}}},[i("span",{staticStyle:{"font-size":"18px",color:"#FFFFFF"},attrs:{slot:"label"},slot:"label"},[e._v("我要看房")])])],1)],1)],1)},staticRenderFns:[]};var p=i(0)(_,w,!1,function(e){i(574)},"data-v-10d99444",null).exports;new Vue({render:function(e){return e(p)}}).$mount("#app")},574:function(e,t){}},[573]);