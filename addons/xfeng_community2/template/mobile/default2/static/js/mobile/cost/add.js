webpackJsonp([31],{13:function(t,e,i){"use strict";var n=i(49);e.a={mixins:[n.a],props:{required:{type:Boolean,default:!1}},created:function(){this.handleChangeEvent=!1},computed:{dirty:{get:function(){return!this.pristine},set:function(t){this.pristine=!t}},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){!0===this.pristine&&(this.pristine=!1),this.handleChangeEvent||(this.$emit("on-change",t),this.$emit("input",t))}},data:function(){return{errors:{},pristine:!0,touched:!1}}}},15:function(t,e,i){t.exports={default:i(55),__esModule:!0}},247:function(t,e,i){"use strict";function n(t){i(261)}var a=(i(262),i(267)),r=i(268),s=i(0),c=n,o=s(a.a,r.a,!1,c,null,null);e.a=o.exports},248:function(t,e,i){"use strict";function n(t){i(263)}var a=(i(264),i(265)),r=i(266),s=i(0),c=n,o=s(a.a,r.a,!1,c,null,null);e.a=o.exports},249:function(t,e,i){"use strict";i.d(e,"d",function(){return r}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return c}),i.d(e,"c",function(){return u});var n=i(28),a=i.n(n),r=function(t){return"object"===(void 0===t?"undefined":a()(t))?t.value:t},s=function(t){return"object"===(void 0===t?"undefined":a()(t))?t.key:t},c=function(t){return"object"===(void 0===t?"undefined":a()(t))?t.inlineDesc:""},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];if(!t.length)return e;if("string"==typeof t[0])return e;var i=t.filter(function(t){return t.key===e});return i.length?i[0].value||i[0].label:e},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(e){return o(t,e)})}},250:function(t,e,i){"use strict";t.exports=function(t){if(!Array.isArray(t))throw new TypeError("Expected Array, got "+typeof t);for(var e,i,n=t.length,a=t.slice();n;)e=Math.floor(Math.random()*n--),i=a[n],a[n]=a[e],a[e]=i;return a}},261:function(t,e){},262:function(t,e,i){"use strict";function n(t){return JSON.parse(c()(t))}var a=i(15),r=i.n(a),s=i(21),c=i.n(s),o=i(13),u=i(248),l=i(20),d=i(19),h=i(249),f=i(250),v=i.n(f);u.a,l.a,d.a,h.d,h.b,o.a,String,Boolean,String,Boolean,Array,Array,Number,Number,Boolean,Boolean,Boolean,String,Boolean,h.d,h.b,h.a},263:function(t,e){},264:function(t,e,i){"use strict";String},265:function(t,e,i){"use strict";e.a={name:"tip",props:{align:{type:String,default:"left"}}}},266:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-group-tip",style:{"text-align":t.align}},[t._t("default")],2)},a=[],r={render:n,staticRenderFns:a};e.a=r},267:function(t,e,i){"use strict";function n(t){return JSON.parse(c()(t))}var a=i(15),r=i.n(a),s=i(21),c=i.n(s),o=i(13),u=i(248),l=i(20),d=i(19),h=i(249),f=i(250),v=i.n(f);e.a={name:"checklist",components:{Tip:u.a,Icon:l.a,InlineDesc:d.a},filters:{getValue:h.d,getKey:h.b},mixins:[o.a],props:{name:String,showError:Boolean,title:String,required:{type:Boolean,default:!1},options:{type:Array,required:!0},value:{type:Array,default:function(){return[]}},max:Number,min:Number,fillMode:Boolean,randomOrder:Boolean,checkDisabled:{type:Boolean,default:!0},labelPosition:{type:String,default:"right"},disabled:Boolean},data:function(){return{currentValue:[],currentOptions:this.options,tempValue:""}},beforeUpdate:function(){if(this.isRadio){var t=this.currentValue.length;t>1&&(this.currentValue=[this.currentValue[t-1]]);var e=n(this.currentValue);this.tempValue=e.length?e[0]:""}},created:function(){this.handleChangeEvent=!0,this.value&&(this.currentValue=this.value,this.isRadio&&(this.tempValue=this.isRadio?this.value[0]:this.value)),this.randomOrder?this.currentOptions=v()(this.options):this.currentOptions=this.options},methods:{getValue:h.d,getKey:h.b,getInlineDesc:h.a,getFullValue:function(){var t=Object(h.c)(this.options,this.value);return this.currentValue.map(function(e,i){return{value:e,label:t[i]}})},isDisabled:function(t){return!!this.checkDisabled&&(this._max>1&&(-1===this.currentValue.indexOf(t)&&this.currentValue.length===this._max))}},computed:{isRadio:function(){return void 0!==this.max&&1===this.max},_total:function(){return this.fillMode?this.options.length+1:this.options.length},_min:function(){if(!this.required&&!this.min)return 0;if(!this.required&&this.min)return Math.min(this._total,this.min);if(this.required){if(this.min){var t=Math.max(1,this.min);return Math.min(this._total,t)}return 1}},_max:function(){return(this.required||this.max)&&this.max?this.max>this._total?this._total:this.max:this._total},valid:function(){return this.currentValue.length>=this._min&&this.currentValue.length<=this._max}},watch:{tempValue:function(t){var e=t?[t]:[];this.$emit("input",e),this.$emit("on-change",e,Object(h.c)(this.options,e))},value:function(t){c()(t)!==c()(this.currentValue)&&(this.currentValue=t)},options:function(t){this.currentOptions=t},currentValue:function(t){var e=n(t);if(!this.isRadio){this.$emit("input",e),this.$emit("on-change",e,Object(h.c)(this.options,e));var i={};this._min&&(this.required?this.currentValue.length<this._min&&(i={min:this._min}):this.currentValue.length&&this.currentValue.length<this._min&&(i={min:this._min})),!this.valid&&this.dirty&&r()(i).length?this.$emit("on-error",i):this.$emit("on-clear-error")}}}}},268:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.disabled?"vux-checklist-disabled":""},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"weui-cells__title"},[t._v(t._s(t.title))]),t._v(" "),t._t("after-title"),t._v(" "),i("div",{staticClass:"weui-cells weui-cells_checkbox"},t._l(t.currentOptions,function(e,n){return i("label",{staticClass:"weui-cell weui-check_label",class:{"vux-checklist-label-left":"left"===t.labelPosition},attrs:{for:"checkbox_"+t.uuid+"_"+n}},[i("div",{staticClass:"weui-cell__hd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"checkbox",name:"vux-checkbox-"+t.uuid,id:t.disabled?"":"checkbox_"+t.uuid+"_"+n,disabled:t.isDisabled(t.getKey(e))},domProps:{value:t.getKey(e),checked:Array.isArray(t.currentValue)?t._i(t.currentValue,t.getKey(e))>-1:t.currentValue},on:{change:function(i){var n=t.currentValue,a=i.target,r=!!a.checked;if(Array.isArray(n)){var s=t.getKey(e),c=t._i(n,s);a.checked?c<0&&(t.currentValue=n.concat([s])):c>-1&&(t.currentValue=n.slice(0,c).concat(n.slice(c+1)))}else t.currentValue=r}}}),t._v(" "),i("i",{staticClass:"weui-icon-checked vux-checklist-icon-checked"})]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:t._s(t.getValue(e))}}),t._v(" "),t.getInlineDesc(e)?i("inline-desc",[t._v(t._s(t.getInlineDesc(e)))]):t._e()],1)])})),t._v(" "),t._t("footer")],2)},a=[],r={render:n,staticRenderFns:a};e.a=r},49:function(t,e,i){"use strict";function n(){return Math.random().toString(36).substring(3,8)}e.a={mounted:function(){},data:function(){return{uuid:n()}}}},55:function(t,e,i){i(56),t.exports=i(14).Object.keys},56:function(t,e,i){var n=i(240),a=i(236);i(57)("keys",function(){return function(t){return a(n(t))}})},57:function(t,e,i){var n=i(25),a=i(14),r=i(231);t.exports=function(t,e){var i=(a.Object||{})[t]||Object[t],s={};s[t]=e(i),n(n.S+n.F*r(function(){i(1)}),"Object",s)}},601:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(602);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},602:function(t,e,i){"use strict";function n(t){i(603)}var a=(i(604),i(605)),r=i(606),s=i(0),c=n,o=s(a.a,r.a,!1,c,"data-v-60a0370b",null);e.a=o.exports},603:function(t,e){},604:function(t,e,i){"use strict";var n=i(6),a=i(7),r=i(9),s=i(16),c=i(247),o=i(22),u=i(12),l=i(26),d=i(27);r.a,s.a,c.a,o.a,u.a,l.a,d.a},605:function(t,e,i){"use strict";var n=i(6),a=i(7),r=i(9),s=i(16),c=i(247),o=i(22),u=i(12),l=i(26),d=i(27);e.a={components:{ViewBox:r.a,Group:s.a,Checklist:c.a,Cell:o.a,XHeader:u.a,Tabbar:l.a,TabbarItem:d.a},data:function(){return{items:[],setting:[],allchecked:!0,checked:[],price:"0.00",credit:"0.00",ids:"",px:0,userinfo:[]}},beforeCreate:function(){var t=this;a.a.userInfo().then(function(e){t.userinfo=e.data,t.credit=t.userinfo.credit1}).catch(function(t){self.$vux.toast.show({type:"warn",text:t.err_msg})})},beforeMount:function(){var t=this,e=this;e.$vux.loading.show(),a.a.costList(2,"",1).then(function(i){t.items=i.data.list,t.setting=i.data,t.px=t.setting.hstatus?"46px":0,e.price=i.data.price,console.log(t.items),e.items.forEach(function(t){e.checked.push(t.id)})}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{checkedAll:function(){var t=this;if(this.allchecked)t.checked=[],t.price="0.00";else{t.checked=[];var e=0;t.items.forEach(function(i){t.checked.push(i.id),e+=Number(i.total)}),t.price=Number(e)}},singleSelect:function(){var t=this;t.price="0.00";var e=0;$('input[name="layout[]"]:checked').each(function(){console.log(1),console.log($(this).data("price")),e+=Number($(this).data("price"))}),t.price=Number(e)},pay:function(){var t=this;if(""==!t.checked&&!t.checked)return t.$vux.toast.text("未选择缴费项目！"),!1;var e=t.checked.join(",");a.a.costAdd(e,t.credit).then(function(t){window.location.href=t.data.url}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})})},url:function(){return n.a.M.url("home")}},computed:{},filters:{keepTwoNum:function(t){return t=Number(t),t.toFixed(2)}}}},606:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",background:"#f5f5f5"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":t.px,"body-padding-bottom":"50px"}},[t.setting.hstatus?i("x-header",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0","z-index":"100"},attrs:{slot:"header",title:"物业缴费"},slot:"header"},[i("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url()},slot:"right"},[t._v("首页")])]):t._e(),t._v(" "),i("div",{staticClass:"weui-panel weui-panel_access",staticStyle:{"margin-top":"0px"}},[i("div",{staticClass:"weui-panel__bd"},[i("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:"javascript:void(0);"}},[i("div",{staticClass:"weui-media-box__bd"},[i("p",{staticClass:"weui-media-box__title"},[t._v("房屋："+t._s(t.setting.address))]),t._v(" "),i("p",{staticClass:"weui-media-box__desc",attrs:{id:"price"}},[t._v("未缴费用合计："+t._s(t._f("keepTwoNum")(t.price)))])])])])]),t._v(" "),i("group",{staticClass:"default-add-tit",attrs:{title:"选择缴纳的费用"}},[i("cell",[i("span",{attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"default-checkbox-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.allchecked,expression:"allchecked"}],staticClass:"magic-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allchecked)?t._i(t.allchecked,null)>-1:t.allchecked},on:{click:t.checkedAll,change:function(e){var i=t.allchecked,n=e.target,a=!!n.checked;if(Array.isArray(i)){var r=t._i(i,null);n.checked?r<0&&(t.allchecked=i.concat([null])):r>-1&&(t.allchecked=i.slice(0,r).concat(i.slice(r+1)))}else t.allchecked=a}}}),t._v(" "),i("span")]),t._v(" "),i("label",{attrs:{for:"checkAll"}},[t._v("全选")])]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("p",[t._v("费用合计")]),t._v(" "),i("p",{staticClass:"color_y"},[t._v("￥"),i("span",{staticClass:"total"},[t._v(t._s(t._f("keepTwoNum")(t.price)))])]),t._v(" "),i("input",{attrs:{type:"hidden",id:"total"}})])]),t._v(" "),t._l(t.items,function(e,n){return"0.00"!==e.total?i("cell",{key:n},[i("span",{attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"default-checkbox-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"magic-checkbox",attrs:{type:"checkbox",name:"layout[]","data-price":e.total},domProps:{value:e.id,checked:Array.isArray(t.checked)?t._i(t.checked,e.id)>-1:t.checked},on:{change:[function(i){var n=t.checked,a=i.target,r=!!a.checked;if(Array.isArray(n)){var s=e.id,c=t._i(n,s);a.checked?c<0&&(t.checked=n.concat([s])):c>-1&&(t.checked=n.slice(0,c).concat(n.slice(c+1)))}else t.checked=r},function(e){t.singleSelect()}]}}),t._v(" "),i("span")]),t._v(" "),i("label",{attrs:{for:""}},[t._v(t._s(e.costtime))])]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("p",[t._v("本期欠缴费用")]),t._v(" "),i("p",{staticClass:"color_y"},[t._v("￥"),i("span",{staticClass:"total"},[t._v(t._s(e.total))])])])]):t._e()}),t._v(" "),t.setting.credit?i("cell",[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n                抵扣积分:\n                ")]),t._v(" "),i("div",{staticClass:"weui-cell__bd color_y"},[i("span",{domProps:{textContent:t._s(t.credit)}})])]):t._e(),t._v(" "),i("input",{attrs:{type:"hidden",id:"ids"},domProps:{value:t.checked}})],2),t._v(" "),i("tabbar",{staticClass:"default_bottom",staticStyle:{"background-color":"#ff9800"},attrs:{slot:"bottom"},slot:"bottom"},[i("tabbar-item",{nativeOn:{click:function(e){t.pay()}}},[i("span",{staticStyle:{"font-size":"18px",color:"#FFFFFF"},attrs:{slot:"label"},slot:"label"},[t._v("缴费")])])],1)],1)],1)},a=[],r={render:n,staticRenderFns:a};e.a=r}},[601]);