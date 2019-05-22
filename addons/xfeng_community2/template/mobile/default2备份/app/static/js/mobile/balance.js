webpackJsonp([41],{20:function(t,e,i){"use strict";function n(t){if(!("string"==typeof t||t instanceof String))throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default},22:function(t,e,i){t.exports={default:i(52),__esModule:!0}},23:function(t,e,i){"use strict";var n=i(47);e.a={mixins:[n.a],props:{required:{type:Boolean,default:!1}},created:function(){this.handleChangeEvent=!1},computed:{dirty:{get:function(){return!this.pristine},set:function(t){this.pristine=!t}},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){!0===this.pristine&&(this.pristine=!1),this.handleChangeEvent||(this.$emit("on-change",t),this.$emit("input",t))}},data:function(){return{errors:{},pristine:!0,touched:!1}}}},30:function(t,e,i){"use strict";function n(t){i(64)}var r=(i(65),i(66)),a=i(67),s=i(0),o=n,u=s(r.a,a.a,!1,o,null,null);e.a=u.exports},31:function(t,e,i){"use strict";function n(t){i(68)}var r=(i(69),i(73)),a=i(74),s=i(0),o=n,u=s(r.a,a.a,!1,o,null,null);e.a=u.exports},32:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if((0,s.default)(t),e=(0,u.default)(e,f),e.require_display_name||e.allow_display_name){var i=t.match(p);if(i)t=i[1];else if(e.require_display_name)return!1}var n=t.split("@"),r=n.pop(),a=n.join("@"),o=r.toLowerCase();if("gmail.com"!==o&&"googlemail.com"!==o||(a=a.replace(/\./g,"").toLowerCase()),!(0,c.default)(a,{max:64})||!(0,c.default)(r,{max:254}))return!1;if(!(0,d.default)(r,{require_tld:e.require_tld}))return!1;if('"'===a[0])return a=a.slice(1,a.length-1),e.allow_utf8_local_part?x.test(a):m.test(a);for(var l=e.allow_utf8_local_part?g:v,h=a.split("."),y=0;y<h.length;y++)if(!l.test(h[y]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=i(20),s=n(a),o=i(33),u=n(o),l=i(70),c=n(l),h=i(71),d=n(h),f={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},p=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,m=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,g=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e.default},33:function(t,e,i){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];for(var i in e)void 0===t[i]&&(t[i]=e[i]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default},34:function(t,e,i){"use strict";function n(t,e,i){if((0,a.default)(t),i&&i.strictMode&&!t.startsWith("+"))return!1;if(e in s)return s[e].test(t);if("any"===e){for(var n in s)if(s.hasOwnProperty(n)){var r=s[n];if(r.test(t))return!0}return!1}throw new Error("Invalid locale '"+e+"'")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var r=i(20),a=function(t){return t&&t.__esModule?t:{default:t}}(r),s={"ar-AE":/^((\+?971)|0)?5[024568]\d{7}$/,"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-EG":/^((\+?20)|0)?1[012]\d{8}$/,"ar-JO":/^(\+?962|0)?7[789]\d{7}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"be-BY":/^(\+?375)?(24|25|29|33|44)\d{7}$/,"bg-BG":/^(\+?359|0)?8[789]\d{7}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"da-DK":/^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"el-GR":/^(\+?30|0)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[6789]\d{9}$/,"en-KE":/^(\+?254|0)?[7]\d{8}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"en-RW":/^(\+?250|0)?[7]\d{8}$/,"en-SG":/^(\+65)?[89]\d{7}$/,"en-TZ":/^(\+?255|0)?[67]\d{8}$/,"en-UG":/^(\+?256|0)?[7]\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"et-EE":/^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,"fa-IR":/^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,"fo-FO":/^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"id-ID":/^(\+?62|0[1-9])[\s|\d]+$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,"kk-KZ":/^(\+?7|8)?7\d{9}$/,"kl-GL":/^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"ko-KR":/^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,"lt-LT":/^(\+370|8)\d{8}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sk-SK":/^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"th-TH":/^(\+66|66|0)\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"uk-UA":/^(\+?38|8)?0\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[3456789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};s["en-CA"]=s["en-US"],s["fr-BE"]=s["nl-BE"],s["zh-HK"]=s["en-HK"],t.exports=e.default},349:function(t,e,i){"use strict";function n(t){i(391)}var r=(i(392),i(393)),a=i(394),s=i(0),o=n,u=s(r.a,a.a,!1,o,null,null);e.a=u.exports},35:function(t,e,i){"use strict";var n=i(72),r=i.n(n);e.a=r.a},36:function(t,e,i){var n,r;!function(a,s){n=s,void 0!==(r="function"==typeof n?n.call(e,i,e,t):n)&&(t.exports=r)}(0,function(){var t=[9,16,17,18,36,37,38,39,40,91,92,93],e=function(e){for(var i=0,n=t.length;i<n;i++)if(e==t[i])return!1;return!0},i=function(t){return t=t||{},t={delimiter:t.delimiter||".",lastOutput:t.lastOutput,precision:t.hasOwnProperty("precision")?t.precision:2,separator:t.separator||",",showSignal:t.showSignal,suffixUnit:t.suffixUnit&&" "+t.suffixUnit.replace(/[\s]/g,"")||"",unit:t.unit&&t.unit.replace(/[\s]/g,"")+" "||"",zeroCents:t.zeroCents},t.moneyPrecision=t.zeroCents?0:t.precision,t},n=function(t,e,i){for(;e<t.length;e++)"9"!==t[e]&&"A"!==t[e]&&"S"!==t[e]||(t[e]=i);return t},r=function(t){this.elements=t};r.prototype.unbindElementToMask=function(){for(var t=0,e=this.elements.length;t<e;t++)this.elements[t].lastOutput="",this.elements[t].onkeyup=!1,this.elements[t].onkeydown=!1,this.elements[t].value.length&&(this.elements[t].value=this.elements[t].value.replace(/\D/g,""))},r.prototype.bindElementToMask=function(t){for(var i=this,n=function(n){n=n||window.event;var r=n.target||n.srcElement;e(n.keyCode)&&setTimeout(function(){i.opts.lastOutput=r.lastOutput,r.value=a[t](r.value,i.opts),r.lastOutput=r.value,r.setSelectionRange&&i.opts.suffixUnit&&r.setSelectionRange(r.value.length,r.value.length-i.opts.suffixUnit.length)},0)},r=0,s=this.elements.length;r<s;r++)this.elements[r].lastOutput="",this.elements[r].onkeyup=n,this.elements[r].value.length&&(this.elements[r].value=a[t](this.elements[r].value,this.opts))},r.prototype.maskMoney=function(t){this.opts=i(t),this.bindElementToMask("toMoney")},r.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},r.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},r.prototype.maskPattern=function(t){this.opts={pattern:t},this.bindElementToMask("toPattern")},r.prototype.unMask=function(){this.unbindElementToMask()};var a=function(t){if(!t)throw new Error("VanillaMasker: There is no element to bind.");var e="length"in t?t.length?t:[]:[t];return new r(e)};return a.toMoney=function(t,e){if(e=i(e),e.zeroCents){e.lastOutput=e.lastOutput||"";var n="("+e.separator+"[0]{0,"+e.precision+"})",r=new RegExp(n,"g"),a=t.toString().replace(/[\D]/g,"").length||0,s=e.lastOutput.toString().replace(/[\D]/g,"").length||0;t=t.toString().replace(r,""),a<s&&(t=t.slice(0,t.length-1))}var o=t.toString().replace(/[\D]/g,""),u=new RegExp("^(0|\\"+e.delimiter+")"),l=new RegExp("(\\"+e.separator+")$"),c=o.substr(0,o.length-e.moneyPrecision),h=c.substr(0,c.length%3),d=new Array(e.precision+1).join("0");c=c.substr(c.length%3,c.length);for(var f=0,p=c.length;f<p;f++)f%3==0&&(h+=e.delimiter),h+=c[f];h=h.replace(u,""),h=h.length?h:"0";var v="";if(!0===e.showSignal&&(v=t<0||t.startsWith&&t.startsWith("-")?"-":""),!e.zeroCents){var m=o.length-e.precision,g=o.substr(m,e.precision),x=g.length;d=(d+g).slice(-(e.precision>x?e.precision:x))}return(e.unit+v+h+e.separator+d).replace(l,"")+e.suffixUnit},a.toPattern=function(t,e){var i,r="object"==typeof e?e.pattern:e,a=r.replace(/\W/g,""),s=r.split(""),o=t.toString().replace(/\W/g,""),u=o.replace(/\W/g,""),l=0,c=s.length,h="object"==typeof e?e.placeholder:void 0;for(i=0;i<c;i++){if(l>=o.length){if(a.length==u.length)return s.join("");if(void 0!==h&&a.length>u.length)return n(s,i,h).join("");break}if("9"===s[i]&&o[l].match(/[0-9]/)||"A"===s[i]&&o[l].match(/[a-zA-Z]/)||"S"===s[i]&&o[l].match(/[0-9a-zA-Z]/))s[i]=o[l++];else if("9"===s[i]||"A"===s[i]||"S"===s[i])return void 0!==h?n(s,i,h).join(""):s.slice(0,i).join("")}return s.join("").substr(0,i)},a.toNumber=function(t){return t.toString().replace(/(?!^-)[^0-9]/g,"")},a.toAlphaNumeric=function(t){return t.toString().replace(/[^a-z0-9 ]+/i,"")},a})},391:function(t,e){},392:function(t,e,i){"use strict";var n=i(76);n.a,Boolean,String,String,String,Array,Boolean,String,String,Boolean},393:function(t,e,i){"use strict";var n=i(76);e.a={name:"search",mixins:[n.a],props:{required:{type:Boolean,default:!1},placeholder:String,cancelText:String,value:{type:String,default:""},results:{type:Array,default:function(){return[]}},autoFixed:{type:Boolean,default:!0},top:{type:String,default:"0px"},position:{type:String,default:"fixed"},autoScrollToTop:Boolean},created:function(){this.value&&(this.currentValue=this.value)},computed:{fixPosition:function(){return this.isFixed?"absolute"===this.position?"absolute":"fixed":"static"}},methods:{emitEvent:function(){var t=this;this.$nextTick(function(){t.$emit("input",t.currentValue),t.$emit("on-change",t.currentValue)})},onComposition:function(t,e){"start"===e&&(this.onInput=!0),"end"===e&&(this.onInput=!1,this.emitEvent()),"input"===e&&(this.onInput||this.emitEvent())},clear:function(){this.currentValue="",this.emitEvent(),this.isFocus=!0,this.setFocus(),this.autoFixed&&!this.isFixed&&(this.isFixed=!0),this.$emit("on-clear")},cancel:function(){this.isCancel=!0,this.currentValue="",this.emitEvent(),this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(t){this.$emit("result-click",t),this.$emit("on-result-click",t),this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0),this.$emit("on-touch")},setFocus:function(){this.$refs.input.focus()},setBlur:function(){this.$refs.input.blur()},onFocus:function(){this.isFocus=!0,this.$emit("on-focus"),this.touch()},onBlur:function(){this.isFocus=!1,this.$emit("on-blur")}},data:function(){return{onInput:!1,currentValue:"",isCancel:!0,isFocus:!1,isFixed:!1}},watch:{isFixed:function(t){!0===t&&(this.setFocus(),this.isFocus=!0,this.autoScrollToTop&&setTimeout(function(){window.scrollTo(0,0)},150))},value:function(t){this.currentValue=t}}}},394:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-search-box",class:{"vux-search-fixed":t.isFixed},style:{top:t.isFixed?t.top:"",position:t.fixPosition}},[i("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":!t.isCancel||t.currentValue}},[t._t("left"),t._v(" "),i("form",{staticClass:"weui-search-bar__form",attrs:{action:"."},on:{submit:function(e){e.preventDefault(),t.$emit("on-submit",t.value)}}},[i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFixed&&t.autoFixed,expression:"!isFixed && autoFixed"}],staticClass:"vux-search-mask",attrs:{for:"search_input_"+t.uuid},on:{click:t.touch}}),t._v(" "),i("div",{staticClass:"weui-search-bar__box"},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{type:"search",autocomplete:"off",id:"search_input_"+t.uuid,placeholder:t.placeholder,required:t.required},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,compositionstart:function(e){t.onComposition(e,"start")},compositionend:function(e){t.onComposition(e,"end")},input:[function(e){e.target.composing||(t.currentValue=e.target.value)},function(e){t.onComposition(e,"input")}]}}),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-icon-clear",attrs:{href:"javascript:"},on:{click:t.clear}})]),t._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFocus&&!t.value,expression:"!isFocus && !value"}],staticClass:"weui-search-bar__label",attrs:{for:"search_input_"+t.uuid}},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("span",[t._v(t._s(t.placeholder||"搜索"))])])]),t._v(" "),i("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:"},on:{click:t.cancel}},[t._v(t._s(t.cancelText||"取消")+"\n    ")]),t._v(" "),t._t("right")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],staticClass:"weui-cells vux-search_show"},[t._t("default"),t._v(" "),t._l(t.results,function(e){return i("div",{staticClass:"weui-cell weui-cell_access",on:{click:function(i){t.handleResultClick(e)}}},[i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[t._v(t._s(e.title))])])])})],2)])},r=[],a={render:n,staticRenderFns:r};e.a=a},47:function(t,e,i){"use strict";function n(){return Math.random().toString(36).substring(3,8)}e.a={mounted:function(){},data:function(){return{uuid:n()}}}},52:function(t,e,i){i(53),t.exports=i(19).Object.keys},53:function(t,e,i){var n=i(291),r=i(285);i(54)("keys",function(){return function(t){return r(n(t))}})},54:function(t,e,i){var n=i(37),r=i(19),a=i(284);t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],s={};s[t]=e(i),n(n.S+n.F*a(function(){i(1)}),"Object",s)}},64:function(t,e){},649:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(650);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},65:function(t,e,i){"use strict";String,Boolean},650:function(t,e,i){"use strict";function n(t){i(651)}var r=(i(652),i(653)),a=i(654),s=i(0),o=n,u=s(r.a,a.a,!1,o,"data-v-89a3183a",null);e.a=u.exports},651:function(t,e){},652:function(t,e,i){"use strict";var n=i(8),r=i(3),a=i(10),s=i(349),o=i(11),u=i(5),l=i(6),c=i(31),h=i(4);a.a,s.a,o.a,u.a,l.a,c.a,h.a},653:function(t,e,i){"use strict";var n=i(8),r=i(3),a=i(10),s=i(349),o=i(11),u=i(5),l=i(6),c=i(31),h=i(4);e.a={data:function(){return{list:[],result:[],credit:0,value:"",money:""}},components:{ViewBox:a.a,Search:s.a,XHeader:o.a,Group:u.a,Cell:l.a,XInput:c.a,XButton:h.a},beforeCreate:function(){},beforeMount:function(){this.$vux.loading.show(),this._getUserInfo()},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{onUp:function(){var t=this,e={keyword:this.value,type:2,price:this.money};return e.keyword?e.price?void r.a.appCashUp(e).then(function(e){0===e.err_code&&(t.value="",t.money="",t.credit=0,t.$vux.toast.show({text:"充值成功"}))}):void this.$vux.toast.show({text:"请输入充值金额",type:"text",width:"12em"}):void this.$vux.toast.show({text:"请搜索需要充值的用户",type:"text",width:"12em"})},getResult:function(t){this.value=t,this._getSearch(t)},_getSearch:function(t){var e=this,i={keyword:t,type:2};r.a.appCashSearch(i).then(function(t){e.credit=t.data.credit})},_getUserInfo:function(){var t=this;r.a.getUserInfo().then(function(e){0===e.err_code&&(t.list=e.data)})},url:function(t){return n.a.M.url(t)}},computed:{}}},654:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0px","body-padding-bottom":"0px"}},[i("x-header",{staticStyle:{"background-color":"#F7624B"},attrs:{title:"余额充值"}},[i("a",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"right",href:t.url("xqsys/home")},slot:"right"},[t._v("首页")])]),t._v(" "),i("div",{staticClass:"ln-hd"},[i("div",{staticClass:"ln-hd-top"}),t._v(" "),i("div",{staticClass:"ln-hd-box row"},[i("div",{staticClass:"ln-hd-img"},[i("img",{attrs:{src:t.list.headimg}})]),t._v(" "),i("div",{staticClass:"col"},[i("div",{staticClass:"name"},[t._v(t._s(t.list.username))]),t._v(" "),i("div",{staticClass:"type"},[t._v(t._s(t.list.appname))])])])]),t._v(" "),i("search",{ref:"search",attrs:{"auto-fixed":!1},on:{"on-change":t.getResult},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("group",[i("cell",{attrs:{title:"当前余额"}},[i("span",[t._v(t._s(t.credit)+"元")])])],1),t._v(" "),i("group",{attrs:{title:"充值余额"}},[i("x-input",{attrs:{placeholder:"请输入充值金额","show-clear":!1},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),t._v(" "),i("x-button",{staticClass:"ln-btn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.onUp(e)}}},[t._v(" 充值")])],1)],1)},r=[],a={render:n,staticRenderFns:r};e.a=a},66:function(t,e,i){"use strict";e.a={name:"icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}},67:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:[t.className,t.isMsg?"weui-icon_msg":""]})},r=[],a={render:n,staticRenderFns:r};e.a=a},68:function(t,e){},69:function(t,e,i){"use strict";var n=i(22),r=i.n(n),a=i(23),s=i(30),o=i(63),u=i(25),l=i(32),c=i.n(l),h=i(34),d=i.n(h),f=i(35),p=i(36),v=i.n(p),m={email:{fn:c.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return d()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};a.a,s.a,u.a,o.a,String,String,String,String,Number,String,Boolean,Boolean,String,String,String,Function,Number,Number,Boolean,String,String,String,String,String,String,Boolean,String,Number,String,String,String,Boolean},70:function(t,e,i){"use strict";function n(t,e){(0,s.default)(t);var i=void 0,n=void 0;"object"===(void 0===e?"undefined":r(e))?(i=e.min||0,n=e.max):(i=arguments[1],n=arguments[2]);var a=encodeURI(t).split(/%..|./).length-1;return a>=i&&(void 0===n||a<=n)}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n;var a=i(20),s=function(t){return t&&t.__esModule?t:{default:t}}(a);t.exports=e.default},71:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){(0,s.default)(t),e=(0,u.default)(e,l),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var i=t.split(".");if(e.require_tld){var n=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(n))return!1}for(var r,a=0;a<i.length;a++){if(r=i[a],e.allow_underscores&&(r=r.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r))return!1;if(/[\uff01-\uff5e]/.test(r))return!1;if("-"===r[0]||"-"===r[r.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=i(20),s=n(a),o=i(33),u=n(o),l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default},72:function(t,e,i){(function(e){function i(t,e,i){function r(e){var i=v,n=m;return v=m=void 0,S=e,x=t.apply(n,i)}function a(t){return S=t,y=setTimeout(c,e),F?r(t):x}function u(t){var i=t-$,n=t-S,r=e-i;return E?b(r,g-n):r}function l(t){var i=t-$,n=t-S;return void 0===$||i>=e||i<0||E&&n>=g}function c(){var t=w();if(l(t))return h(t);y=setTimeout(c,u(t))}function h(t){return y=void 0,k&&v?r(t):(v=m=void 0,x)}function d(){void 0!==y&&clearTimeout(y),S=0,v=$=m=y=void 0}function f(){return void 0===y?x:h(w())}function p(){var t=w(),i=l(t);if(v=arguments,m=this,$=t,i){if(void 0===y)return a($);if(E)return y=setTimeout(c,e),r($)}return void 0===y&&(y=setTimeout(c,e)),x}var v,m,g,x,y,$,S=0,F=!1,E=!1,k=!0;if("function"!=typeof t)throw new TypeError(o);return e=s(e)||0,n(i)&&(F=!!i.leading,E="maxWait"in i,g=E?_(s(i.maxWait)||0,e):g,k="trailing"in i?!!i.trailing:k),p.cancel=d,p.flush=f,p}function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==typeof t}function a(t){return"symbol"==typeof t||r(t)&&y.call(t)==l}function s(t){if("number"==typeof t)return t;if(a(t))return u;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var i=d.test(t);return i||f.test(t)?p(t.slice(2),i?2:8):h.test(t)?u:+t}var o="Expected a function",u=NaN,l="[object Symbol]",c=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),x=Object.prototype,y=x.toString,_=Math.max,b=Math.min,w=function(){return g.Date.now()};t.exports=i}).call(e,i(296))},73:function(t,e,i){"use strict";var n=i(22),r=i.n(n),a=i(23),s=i(30),o=i(63),u=i(25),l=i(32),c=i.n(l),h=i(34),d=i.n(h),f=i(35),p=i(36),v=i.n(p),m={email:{fn:c.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return d()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e.a={name:"x-input",created:function(){var t=this;this.currentValue=void 0===this.value||null===this.value?"":this.mask?this.maskValue(this.value):this.value,!this.required||void 0!==this.currentValue&&""!==this.currentValue||(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=Object(f.a)(function(){t.$emit("on-change",t.currentValue)},this.debounce))},beforeMount:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0),this.$slots&&this.$slots["right-full-height"]&&(this.hasRightFullHeightSlot=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel(),window.removeEventListener("resize",this.scrollIntoView)},mixins:[a.a],components:{Icon:s.a,InlineDesc:u.a,Toast:o.a},props:{title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String,labelWidth:String,mask:String,shouldToastError:{type:Boolean,default:!0}},computed:{labelStyles:function(){return{width:this.labelWidthComputed||this.$parent.labelWidth||this.labelWidthComputed,textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidthComputed:function(){var t=this.title.replace(/[^x00-xff]/g,"00").length/2+1;if(t<10)return t+"em"},hasErrors:function(){return r()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}},showWarn:function(){return!this.novalidate&&!this.equalWith&&!this.valid&&this.firstError&&(this.touched||this.forceShowError)}},mounted:function(){window.addEventListener("resize",this.scrollIntoView)},methods:{scrollIntoView:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;/iphone/i.test(navigator.userAgent),"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||setTimeout(function(){t.$refs.input.scrollIntoViewIfNeeded(!0)},e)},onClickErrorIcon:function(){this.shouldToastError&&this.firstError&&(this.showErrorToast=!0),this.$emit("on-click-error-icon",this.firstError)},maskValue:function(t){return this.mask?v.a.toPattern(t,this.mask):t},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=t,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.focus(),this.$emit("on-click-clear-icon")},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},focusHandler:function(t){var e=this;this.$emit("on-focus",this.currentValue,t),this.isFocus=!0,setTimeout(function(){e.$refs.input.scrollIntoViewIfNeeded(!1)},1e3)},onBlur:function(t){this.setTouched(),this.validate(),this.isFocus=!1,this.$emit("on-blur",this.currentValue,t)},onKeyUp:function(t){"Enter"===t.key&&(t.target.blur(),this.$emit("on-enter",this.currentValue,t))},getError:function(){var t=r()(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var t=m[this.isType];if(t){var e=this.currentValue;if("china-mobile"===this.isType&&"999 9999 9999"===this.mask&&(e=this.currentValue.replace(/\s+/g,"")),this.valid=t.fn(e),!this.valid)return this.forceShowError=!0,this.errors.format=t.msg+"格式不对哦~",void this.getError();delete this.errors.format}}if("function"==typeof this.isType){var i=this.isType(this.currentValue);if(this.valid=i.valid,!this.valid)return this.errors.format=i.msg,this.forceShowError=!0,void this.getError();delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void this.getError();delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))},_getInputMaskSelection:function(t,e,i,n){if(!this.mask||n&&0===e)return t;if(0===e&&(e=this.lastDirection),e>0){if(!this.mask.substr(t-e,1).match(/[9SA]/))return this._getInputMaskSelection(t+1,e,i,!0)}return t}},data:function(){return{hasRightFullHeightSlot:!1,hasRestrictedLabel:!1,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:"",showErrorToast:!1,isFocus:!1}},watch:{mask:function(t){t&&this.currentValue&&(this.currentValue=this.maskValue(this.currentValue))},valid:function(){this.getError()},value:function(t){this.currentValue=t},equalWith:function(t){t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(t,e){var i=this;!this.equalWith&&t&&this.validateEqual(),t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate();var n=this.$refs.input.selectionStart,r=t.length-e.length;n=this._getInputMaskSelection(n,r,this.maskValue(t)),this.lastDirection=r,this.$emit("input",this.maskValue(t)),this.$nextTick(function(){i.$refs.input.selectionStart!==n&&(i.$refs.input.selectionStart=n,i.$refs.input.selectionEnd=n),i.currentValue!==i.maskValue(t)&&(i.currentValue=i.maskValue(t))}),this._debounce?this._debounce():this.$emit("on-change",t)}}}},74:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":t.showWarn,disabled:t.disabled,"vux-x-input-has-right-full":t.hasRightFullHeightSlot}},[i("div",{staticClass:"weui-cell__hd"},[t.hasRestrictedLabel?i("div",{style:t.labelStyles},[t._t("restricted-label")],2):t._e(),t._v(" "),t._t("label",[t.title?i("label",{staticClass:"weui-label",class:t.labelClass,style:{width:t.labelWidth||t.$parent.labelWidth||t.labelWidthComputed,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight},attrs:{for:"vux-x-input-"+t.uuid},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:t.placeholderAlign?"vux-x-input-placeholder-"+t.placeholderAlign:""},[t.type&&"text"!==t.type?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"text",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),"number"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"number",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"email",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"password"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"password",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"tel",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.hasRightFullHeightSlot&&!t.equalWith&&t.showClear&&""!==t.currentValue&&!t.readonly&&!t.disabled&&t.isFocus,expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{type:"clear"},nativeOn:{click:function(e){return t.clear(e)}}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.showWarn,expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:t.valid?"":t.firstError},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}),t._v(" "),!t.novalidate&&t.hasLengthEqual&&t.dirty&&t.equalWith&&!t.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}):t._e(),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.novalidate&&t.equalWith&&t.equalWith===t.currentValue&&t.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"success"===t.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"error"===t.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),t._v(" "),t._t("right"),t._v(" "),t.hasRightFullHeightSlot?i("div",{staticClass:"vux-x-input-right-full"},[t._t("right-full-height")],2):t._e()],2),t._v(" "),i("toast",{attrs:{type:"text",width:"auto",time:600},model:{value:t.showErrorToast,callback:function(e){t.showErrorToast=e},expression:"showErrorToast"}},[t._v(t._s(t.firstError))])],1)},r=[],a={render:n,staticRenderFns:r};e.a=a},76:function(t,e,i){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}}},[649]);