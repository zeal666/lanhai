webpackJsonp([27],{15:function(t,e,i){"use strict";function n(t){i(68)}var a=(i(69),i(70)),s=i(71),r=i(0),o=n,u=r(a.a,s.a,!1,o,null,null);e.a=u.exports},19:function(t,e,i){"use strict";function n(t){i(56)}var a=(i(57),i(58)),s=i(59),r=i(0),o=n,u=r(a.a,s.a,!1,o,null,null);e.a=u.exports},20:function(t,e,i){"use strict";var n=(i(60),i(61)),a=i(62),s=i(0),r=s(n.a,a.a,!1,null,null,null);e.a=r.exports},22:function(t,e,i){"use strict";function n(t){i(63)}var a=(i(64),i(65)),s=i(66),r=i(0),o=n,u=r(a.a,s.a,!1,o,null,null);e.a=u.exports},23:function(t,e,i){"use strict";var n=(i(67),i(72)),a=i(73),s=i(0),r=s(n.a,a.a,!1,null,null,null);e.a=r.exports},56:function(t,e){},57:function(t,e,i){"use strict";Number,String,String,String,String,String},58:function(t,e,i){"use strict";e.a={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},59:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},a=[],s={render:n,staticRenderFns:a};e.a=s},60:function(t,e,i){"use strict";var n=["-moz-box-","-webkit-box-",""];Number,String,Number,String},61:function(t,e,i){"use strict";var n=["-moz-box-","-webkit-box-",""];e.a={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<n.length;i++)t[n[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},62:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},a=[],s={render:n,staticRenderFns:a};e.a=s},63:function(t,e){},64:function(t,e,i){"use strict";var n=i(4);n.b,String},65:function(t,e,i){"use strict";var n=i(4);e.a={mounted:function(){},name:"tabbar",mixins:[n.b],props:{iconClass:String}}},66:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},a=[],s={render:n,staticRenderFns:a};e.a=s},67:function(t,e,i){"use strict";var n=i(4),a=i(15);a.a,n.a,Boolean,String,String,Object,String},68:function(t,e){},69:function(t,e,i){"use strict";String,Number},70:function(t,e,i){"use strict";e.a={name:"badge",props:{text:[String,Number]}}},71:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},a=[],s={render:n,staticRenderFns:a};e.a=s},72:function(t,e,i){"use strict";var n=i(4),a=i(15);e.a={name:"tabbar-item",components:{Badge:a.a},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[n.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},73:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():i("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?i("sup",[i("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},a=[],s={render:n,staticRenderFns:a};e.a=s},927:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(928);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},928:function(t,e,i){"use strict";function n(t){i(929)}var a=(i(930),i(931)),s=i(932),r=i(0),o=n,u=r(a.a,s.a,!1,o,"data-v-ce8e0b90",null);e.a=u.exports},929:function(t,e){},930:function(t,e,i){"use strict";var n=i(5),a=i(6),s=i(13),r=i(14),o=i(32),u=i(10),c=i(22),l=i(23),d=i(21),f=i(19),v=i(20),h=i(9),p=i(291),g=i(17);s.a,r.a,o.a,u.a,c.a,l.a,d.a,f.a,v.a,h.a,p.a,g.a},931:function(t,e,i){"use strict";var n=i(5),a=i(6),s=i(13),r=i(14),o=i(32),u=i(10),c=i(22),l=i(23),d=i(21),f=i(19),v=i(20),h=i(9),p=i(291),g=i(17);e.a={components:{ViewBox:s.a,Group:r.a,Cell:o.a,XHeader:u.a,Tabbar:c.a,TabbarItem:l.a,Icon:d.a,Flexbox:f.a,FlexboxItem:v.a,XButton:h.a,XDialog:p.a,Box:g.a},data:function(){return{items:[],setting:[],px:0,guideShow:!1}},beforeCreate:function(){var t=this,e=this;a.a.roomList().then(function(i){e.setting=i.data,e.px=t.setting.hstatus?"46px":"0",i.data.list.length?e.items=i.data.list:t.guideShow=!0}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{verity:function(t,e){var e=1==e?0:1,i={id:t,enable:e};a.a.roomChange(i).then(function(t){location.reload()}).catch(function(t){self.$vux.toast.show({type:"warn",text:t.err_msg})})},url:function(t,e){return n.a.M.url(t,e)},gourl:function(t,e){window.location.href=this.url(t,e)}},computed:{}}},932:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"50px"}},[t.setting.hstatus?n("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"我的房屋"},slot:"header"},[n("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("home")},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),n("group",{attrs:{gutter:"1px"}},t._l(t.items,function(e,a){return n("div",{key:a},[n("cell",[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",[t._v(t._s(t.setting.region)+t._s(e.address)+" "),1==e.enable?n("span",{staticClass:"mopren",staticStyle:{display:"inline-block"}},[t._v("（默认）")]):t._e()])]),t._v(" "),n("div",{staticClass:"img-left",on:{click:function(i){t.verity(e.id,e.enable)}}},[n("img",{attrs:{src:i(933)}})])])],1)})),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("x-dialog",{staticClass:"dialog-demo",attrs:{"dialog-transition":"vux-dialog1"},model:{value:t.guideShow,callback:function(e){t.guideShow=e},expression:"guideShow"}},[n("p",{staticClass:"default-guide-tit"},[n("icon",{attrs:{type:"warn"}}),t._v("\n                    没有绑定的房屋请绑定\n                ")],1),t._v(" "),n("box",{staticClass:"default-guide-show",attrs:{gap:"10px 15px"}},[n("flexbox",[n("flexbox-item",[n("x-button",{nativeOn:{click:function(e){t.gourl("home")}}},[t._v("取消")])],1),t._v(" "),n("flexbox-item",[n("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.gourl("room/add")}}},[t._v("确定")])],1)],1)],1)],1)],1),t._v(" "),n("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.items,expression:"items"}],staticClass:"default_bottom",staticStyle:{"background-color":"#F7624B"},attrs:{slot:"bottom"},slot:"bottom"},[n("tabbar-item",{nativeOn:{click:function(e){t.gourl("room/add")}}},[n("span",{staticStyle:{"font-size":"18px",color:"#FFFFFF"},attrs:{slot:"label"},slot:"label"},[t._v("添加房屋号")])])],1)],1)],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},933:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACwElEQVRYR8WXXVIaQRDHf53C55ATgCcInkA4QbACz+oJ1BtwA+UEJs+7KfAEkBPoDdQTBJ+hMqnuHXRgP9gFUuwLRdXU9K+//t0jHPiTA9unEoDr0wJOcXQNXGjbr2Pq/4+Z8yBjXso6VgrAfafLJ26BJo5XhDGOGY4nb7iFUDcwoQG84LiU2IMV0BQCuC5Natybp46fLBhs8s6i5LhGOLfILDiTMbM8hlwAf9EE4ZU53U2G1w0Y/JFFqoHQkchHa+1gJoDP9aN6LTEXZfOZAVGnxh3wLQ8iBeDD/gg87GI8hHE9fhjEguP1dKQB+lY4dYms4vfyuS51jpji+CMxnfDSFQBf7SPmRlq6lcpQBmnthN2xCtAzo9NNofcenUvEsIzx5RmfikYYhXeAd8IN3nvjE5WhqmnKsvEB0OMauJaYZp5XoXHmtIv6O/eOJMp3Elt3fEixS4rvSSIDSX2efgS8bWvcVLtvhlsSJTIepkCrVPM/yOnnZy9KW3ke1MFAlTULwPGXM/nFOAXQNxX7qhGyGVDue5KYm9RdmmrhSiKO1yNQBmBYAWC2zPOaKK3UWvkUqJDo4J3T2ab4yqSguAiXarYjhNeCusTJTrHahkFuMjthDxCuoA1V+3UIneSNTmujAEIiTsrVY3KqUIjsQBUprnGRVWRFQBZ+oblswZUUeIA2wuS/DKMeyd2O/GHkw6TF+HnXal9pvSRtOj/eQu9TEQhyrHo9kojLKjnOO+t6Jm4tFrQ2LiRBsWgkdDe42bbvfcHegy0hKr/JFh18xUspJj7PwGVRZ2S2bJLzWxxfELqVltJ31Upyp+E7BdvrhptAfKtdgS2zv/1GXX0tX9Nv9UanpILoo0OhZogfTI66tpeG2R4vatgx2PlhkppkyUNFXz/J08z55UUMSr3Uh8i4yj5Z6mm2j07Iu+PgAP8ARQtCMCzEfQUAAAAASUVORK5CYII="}},[927]);