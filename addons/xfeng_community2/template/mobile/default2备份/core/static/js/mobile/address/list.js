webpackJsonp([26],{15:function(t,e,a){"use strict";function s(t){a(68)}var i=(a(69),a(70)),n=a(71),r=a(0),c=s,o=r(i.a,n.a,!1,c,null,null);e.a=o.exports},22:function(t,e,a){"use strict";function s(t){a(63)}var i=(a(64),a(65)),n=a(66),r=a(0),c=s,o=r(i.a,n.a,!1,c,null,null);e.a=o.exports},23:function(t,e,a){"use strict";var s=(a(67),a(72)),i=a(73),n=a(0),r=n(s.a,i.a,!1,null,null,null);e.a=r.exports},323:function(t,e,a){"use strict";function s(t){a(335)}var i=(a(336),a(337)),n=a(338),r=a(0),c=s,o=r(i.a,n.a,!1,c,null,null);e.a=o.exports},328:function(t,e,a){"use strict";function s(t){a(351)}var i=(a(352),a(353)),n=a(354),r=a(0),c=s,o=r(i.a,n.a,!1,c,null,null);e.a=o.exports},335:function(t,e){},336:function(t,e,a){"use strict";Array,Boolean},337:function(t,e,a){"use strict";e.a={name:"cell-form-preview",props:{list:Array,borderIntent:{type:Boolean,default:!0}}}},338:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell vux-cell-form-preview",class:{"vux-cell-no-border-intent":!t.borderIntent}},[a("div",{staticClass:"weui-form-preview__bd"},t._l(t.list,function(e){return a("div",{staticClass:"weui-form-preview__item"},[a("label",{staticClass:"weui-form-preview__label",domProps:{innerHTML:t._s(e.label)}}),t._v(" "),a("span",{staticClass:"weui-form-preview__value",domProps:{innerHTML:t._s(e.value)}})])}))])},i=[],n={render:s,staticRenderFns:i};e.a=n},351:function(t,e){},352:function(t,e,a){"use strict";var s=a(21);s.a,Boolean,String},353:function(t,e,a){"use strict";var s=a(21);e.a={name:"check-icon",components:{Icon:s.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}}},354:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-check-icon",on:{click:t.updateValue}},[a("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===t.type&&t.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),t._v(" "),a("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===t.type&&t.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),t._v(" "),a("icon",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],attrs:{type:"circle"}}),t._v(" "),a("span",[t._t("default")],2)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},618:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(619);new Vue({render:function(t){return t(s.a)}}).$mount("#app")},619:function(t,e,a){"use strict";function s(t){a(620)}var i=(a(621),a(622)),n=a(623),r=a(0),c=s,o=r(i.a,n.a,!1,c,"data-v-5dad59ad",null);e.a=o.exports},620:function(t,e){},621:function(t,e,a){"use strict";var s=a(5),i=a(6),n=a(13),r=a(323),c=a(328),o=a(10),u=a(22),l=a(23);n.a,r.a,c.a,o.a,u.a,l.a},622:function(t,e,a){"use strict";var s=a(5),i=a(6),n=a(13),r=a(323),c=a(328),o=a(10),u=a(22),l=a(23);e.a={components:{ViewBox:n.a,CellFormPreview:r.a,CheckIcon:c.a,XHeader:o.a,Tabbar:u.a,TabbarItem:l.a},data:function(){return{items:[],hstatus:0,show:!1,px:0,checkData:!1}},beforeCreate:function(){var t=this;i.a.addressList().then(function(e){var a=e.data.list;a.forEach(function(t,e){1==t.enable&&(a[e].ischeck=!0)}),t.items=a,t.hstatus=e.data.hstatus,t.px=t.hstatus?"50px":"0"}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})})},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{url:function(t){return s.a.M.url(t)},gourl:function(t){window.location.href=this.url(t)},del:function(t){var e=this,a={id:t};i.a.addressDel(a).then(function(t){e.$vux.loading.hide(),e.$vux.toast.show({text:"提交成功",type:"success"}),setTimeout(function(){var t=s.a.M.url("address");window.location.href=t},300)}).catch(function(t){this.$vux.toast.show({type:"warn",text:t.err_msg})})},gohomeurl:function(){return s.a.M.url("home")},change:function(t,e){var a=this;if(1==e)return this.$vux.toast.text("至少得保持一个默认地址！"),!1;var s=1==e?0:1,n={id:t,enable:s};i.a.addressChange(n).then(function(s){if(0==s.err_code){console.log(e);var i=a.items;console.log(i),i.forEach(function(a,s){if(1==e){if(t==a.id)return i[s].ischeck=!1,i[s].enable=0,!0}else if(1==a.enable&&(i[s].ischeck=!1,i[s].enable=0),t==a.id)return i[s].ischeck=!0,i[s].enable=1,!0}),a.items=i,console.log(a.items)}}).catch(function(t){this.$vux.toast.show({type:"warn",text:t.err_msg})})}},computed:{}}},623:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%",background:"#ffffff"}},[s("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"50px"}},[t.hstatus?s("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"我的地址"},slot:"header"},[s("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.gohomeurl()},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),t._l(t.items,function(e,i){return s("div",{key:i,staticClass:"weui-form-preview"},[s("div",{staticClass:"weui-form-preview__bd"},[s("div",{staticClass:"weui-form-preview__item address_item"},[s("label",{staticClass:"weui-form-preview__label"},[t._v(t._s(e.realname))]),t._v(" "),s("span",{staticClass:"weui-form-preview__value"},[t._v(t._s(e.mobile))])]),t._v(" "),s("div",{staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[t._v(t._s(e.city)+t._s(e.address))])])]),t._v(" "),s("div",{staticClass:"address_btn_ft"},[s("div",{staticClass:"address_btn_left",on:{click:function(a){t.change(e.id,e.enable)}}},[s("check-icon",{attrs:{value:e.ischeck},on:{"update:value":function(a){t.$set(e,"ischeck",a)}}},[t._v("默认地址")])],1),t._v(" "),s("div",{staticClass:"address_btn_right"},[s("a",{staticClass:"address_edit_btn",attrs:{href:e.url}},[s("img",{attrs:{src:a(624)}}),t._v("\n                        编辑\n                    ")]),t._v(" "),s("a",{staticClass:"address_edit_btn",attrs:{href:"javascript:;"},on:{click:function(a){t.del(e.id)}}},[s("img",{attrs:{src:a(625)}}),t._v("\n                        删除\n                    ")])])])])}),t._v(" "),s("tabbar",{staticClass:"default_bottom",staticStyle:{"background-color":"#F7624B"},attrs:{slot:"bottom"},slot:"bottom"},[s("tabbar-item",{nativeOn:{click:function(e){t.gourl("address/add")}}},[s("span",{staticStyle:{"font-size":"18px",color:"#FFFFFF"},attrs:{slot:"label"},slot:"label"},[t._v("添加新地址")])])],1)],2)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},624:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB6ElEQVRYR+2X7XEaMRCG91UFuILYFQRXEFxB4gqMG2BPFZgOhGggpAI7FUAHTjpwCbiBXc96dJnDHARJl+FP7h/D6p5HH7erBZ35wZn5tCewXC4bEbkDMM6RE5Fr7/2vvjEhhDGAR/tPVb33/qmN2xEwuKrOiWghIpscAe99b3yCrwH8JKIXInoQkdtWYkcgxrgFMJ/NZosc+KHYLpyZpxYXY5yrKjdNc2G/PwqoiNwcmk2OVB+8FSCihplH/0zgEDyEMHXOfT+2BdUrcAL83nu/6j2EMcYqgVz4oFtQAh9MoBQ+iEANvFqgFl4lMAS8WGAoeJFADTyEMHLO3TFzLMoD9gIAzwAuu9Wvk+F2kszH1B1CmDjn1sz8pwRk1QIrJERkRWWjql9V9YaIxim9HoWbTJVACOHSZp/q+SrGuDIJACMR+Su8WsCANltmHttMAAQAVyLSdHP7sYpZvAJ28Jxzz1bFAHwB0BDRjwTfnlqmiwVijLbnn98/G+BVRKYld4YigXYQEb3aVY2Z7SAWPUUC6eRP0qztTlf8FAkU03oG/hc4ZQW2Od917vak8/TNcklvLUhd0YP1BgB6u5xcaBuvqhNVtcbHsmZ/Z2TBqTuyRPOpFHZg3G8RmXfhe+V4YOBJrzt7d/wGKUI2PyrTXboAAAAASUVORK5CYII="},625:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZUlEQVRYR+2W0VHDMAyGJU/QDWg3KBPQTgBs0Alie4NuIJQJskG7ARkhGzRswAKROXMJF0paOzl6gTv7xQ+W5d+fZMkIMw+c+XxIAv4XgTzPjYg8IuJmKHeccyUiHrXWHJtb0QSYeQ8AOxHxc33hgKVSyq8XWms/B8cYAU5E7q211TWvRLRRSr1qraN8RxmNdcrMUWL9RX4IICKP8RRkN8FARFbW2m/hiyIw4azoLX9fADMXiFhlWfbSXYuZaxF56hKSiNaIeDDGrHo2n68g9BqCBJi5BICy76hNsq211q/BUJK2zzYJSAQSgUTgNgT8x6RpmsJa+94WogUA+MpY3KISHgGgCpXU8+7zm5Vw75x7MMZso1scADBzhYhFv4cM7Q/2AiJaKKVq59xBKfWF+JoYEdkh4rOILLswXbIPCmhj7D8pvhuuAeAuQOLNh0xEzPnnYxKBMdin2EYRmOI4dk8SMDuBDwKRTDCAS+vmAAAAAElFTkSuQmCC"},63:function(t,e){},64:function(t,e,a){"use strict";var s=a(4);s.b,String},65:function(t,e,a){"use strict";var s=a(4);e.a={mounted:function(){},name:"tabbar",mixins:[s.b],props:{iconClass:String}}},66:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},67:function(t,e,a){"use strict";var s=a(4),i=a(15);i.a,s.a,Boolean,String,String,Object,String},68:function(t,e){},69:function(t,e,a){"use strict";String,Number},70:function(t,e,a){"use strict";e.a={name:"badge",props:{text:[String,Number]}}},71:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},i=[],n={render:s,staticRenderFns:i};e.a=n},72:function(t,e,a){"use strict";var s=a(4),i=a(15);e.a={name:"tabbar-item",components:{Badge:i.a},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[s.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},73:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():a("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?a("sup",[a("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},i=[],n={render:s,staticRenderFns:i};e.a=n}},[618]);