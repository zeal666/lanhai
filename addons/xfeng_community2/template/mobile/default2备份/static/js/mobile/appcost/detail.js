webpackJsonp([110],{101:function(t,e,a){"use strict";var n=a(8),i=a(48),l=(n.a,String,Boolean,Boolean,String,Number,String,Boolean,Number,Boolean,Array,{name:"x-switch",components:{InlineDesc:n.a},computed:{labelStyle:function(){var t=/<\/?[^>]*>/.test(this.title),e=Math.min(t?5:this.title.length+1,14)+"em";return Object(i.a)({display:"block",width:this.$parent.labelWidth||e,textAlign:this.$parent.labelAlign})},labelClass:function(){return{"vux-cell-justify":this.$parent&&"justify"===this.$parent.labelAlign}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)},toBoolean:function(t){return this.valueMap?1===this.valueMap.indexOf(t):t},toRaw:function(t){return this.valueMap?this.valueMap[t?1:0]:t}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean,valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(t){var e=this.toRaw(t);this.$emit("input",e),this.$emit("on-change",e)},value:function(t){this.currentValue=this.toBoolean(t)}}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[a("div",{staticClass:"weui-cell__bd"},[a("label",{staticClass:"weui-label",class:t.labelClass,style:t.labelStyle,domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.inlineDesc?a("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],1),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{change:function(e){var a=t.currentValue,n=e.target,i=!!n.checked;if(Array.isArray(a)){var l=t._i(a,null);n.checked?l<0&&(t.currentValue=a.concat([null])):l>-1&&(t.currentValue=a.slice(0,l).concat(a.slice(l+1)))}else t.currentValue=i}}}),t._v(" "),t.preventDefault?a("div",{staticClass:"vux-x-switch-overlay",on:{click:t.onClick}}):t._e()])])},staticRenderFns:[]};var s=a(0)(l,r,!1,function(t){a(119)},null,null);e.a=s.exports},11:function(t,e,a){"use strict";String;var n={name:"box",props:{gap:String}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{margin:this.gap}},[this._t("default")],2)},staticRenderFns:[]},l=a(0)(n,i,!1,null,null,null);e.a=l.exports},119:function(t,e){},385:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),i=a(2),l=a(3),r=a(10),s=a(13),u=a(14),o=a(11),c=a(101),v=a(4),d=(l.a,r.a,s.a,u.a,o.a,c.a,v.a,{data:function(){return{item:[]}},components:{ViewBox:l.a,Group:r.a,Cell:s.a,XButton:u.a,Box:o.a,XSwitch:c.a,XHeader:v.a},beforeCreate:function(){var t=this,e=n.a.M.urlQuery("id");i.a.costDetail(e).then(function(e){e&&(t.item=e.data)})},beforeMount:function(){this.$vux.loading.show()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{},computed:{}}),h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"10px"}},[a("x-header",{staticStyle:{"background-color":"#F7624B"},attrs:{title:"费用详情"}},[a("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),a("group",[a("cell",{attrs:{title:"小区名称",value:t.item.title}}),t._v(" "),a("cell",{attrs:{title:"费用时间",value:t.item.costtime}}),t._v(" "),a("cell",{attrs:{title:"导入时间"}},[a("div",[a("span",[t._v(t._s(t.item.createtime))])])]),t._v(" "),a("x-switch",{attrs:{title:"费用显示",value:!0}}),t._v(" "),a("x-switch",{attrs:{title:"在线支付",value:!0}})],1),t._v(" "),a("box",{attrs:{gap:"10px 10px"}},[a("x-button",{attrs:{type:"primary"}},[t._v("查看列表")]),t._v(" "),a("x-button",{attrs:{gradients:["#A644FF","#FC5BC4"]}},[t._v("订单管理")]),t._v(" "),a("x-button",{attrs:{gradients:["#FF5E3A","#FF9500"]}},[t._v("设置授权时间")]),t._v(" "),a("x-button",{attrs:{type:"warn"}},[t._v("删除")])],1)],1)],1)},staticRenderFns:[]};var p=a(0)(d,h,!1,function(t){a(386)},null,null).exports;new Vue({render:function(t){return t(p)}}).$mount("#app")},386:function(t,e){}},[385]);