webpackJsonp([24],{14:function(t,e,i){"use strict";function n(t){if(!("string"==typeof t||t instanceof String))throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default},227:function(t,e){},228:function(t,e,i){"use strict";var n=i(22),r=i.n(n),a=i(44),o=i.n(a),s=i(49),l=i(64),u=function(t,e){var i=o()(e,function(e){return e.key===t});return i?i.value:t};s.a,l.a,String,String,Array,String,String,Boolean,String,Number,Object,Boolean,Array},229:function(t,e,i){"use strict";var n=i(22),r=i.n(n),a=i(44),o=i.n(a),s=i(49),l=i(64),u=function(t,e){var i=o()(e,function(e){return e.key===t});return i?i.value:t};e.a={name:"selector",mixins:[s.a],created:function(){void 0!==this.value&&(this.currentValue=this.value)},beforeMount:function(){this.isIOS=/iPad|iPhone|iPod/.test(window.navigator.userAgent)},computed:{fixIos:function(){return!this.placeholder&&this.isEmptyValue(this.value)&&this.isIOS&&this.title},color:function(){return this.showPlaceholder?"#A9A9A9":""},processOptions:function(){var t=this;if(!this.options.length)return[];var e="object"===r()(this.options[0]);return e&&!this.valueMap?this.options:e&&this.valueMap?this.options.map(function(e){return{key:e[t.valueMap[0]],value:e[t.valueMap[1]]}}):this.options.map(function(t){return{key:t,value:t}})},showPlaceholder:function(){return!(!this.isEmptyValue(this.value)||!this.placeholder)},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{isEmptyValue:function(t){return void 0===t||""===t||null===t},cleanStyle:l.a,getFullValue:function(){var t=this;return this.value&&this.options.length?"object"!==r()(this.options[0])?this.value:this.valueMap?this.options.filter(function(e){return e[t.valueMap[0]]===t.value}):this.options.filter(function(e){return e.key===t.value}):null}},filters:{findByKey:u},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},props:{title:String,direction:String,options:{type:Array,required:!0},name:String,placeholder:String,readonly:Boolean,value:[String,Number,Object,Boolean],valueMap:{type:Array,validator:function(t){return!(!t.length||2!==t.length)}}},data:function(){return{currentValue:"",isIOS:!1}}}},230:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-selector weui-cell",class:{"weui-cell_select":!t.readonly,"weui-cell_select-after":t.title}},[t.title?i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label",class:t.labelClass,style:t.cleanStyle({width:t.$parent.labelWidth,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight}),attrs:{for:"vux-selector-"+t.uuid},domProps:{innerHTML:t._s(t.title)}})]):t._e(),t._v(" "),t.readonly?i("div",{staticClass:"weui-cell__ft vux-selector-readonly"},[t._v("\n    "+t._s(t._f("findByKey")(t.value,t.processOptions))+"\n  ")]):i("div",{staticClass:"weui-cell__bd"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-select",style:t.cleanStyle({direction:t.direction,color:t.color}),attrs:{id:"vux-selector-"+t.uuid,name:t.name},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentValue=e.target.multiple?i:i[0]}}},[t.showPlaceholder?i("option",{domProps:{value:null===t.value?"null":"",selected:t.isEmptyValue(t.value)&&!!t.placeholder}},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),t.fixIos?i("option",{attrs:{disabled:""}}):t._e(),t._v(" "),t._l(t.processOptions,function(e){return i("option",{domProps:{value:e.key}},[t._v(t._s(e.value))])})],2)])])},r=[],a={render:n,staticRenderFns:r};e.a=a},263:function(t,e,i){"use strict";function n(t){return new a.a(function(e,i){window.onload=function(){e(BMap)};var n=document.createElement("script");n.type="text/javascript",n.src="https://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",n.onerror=i,document.head.appendChild(n)})}var r=i(291),a=i.n(r);e.a={MP:function(t){return n(t)}}},35:function(t,e,i){"use strict";function n(t){i(65)}var r=(i(66),i(70)),a=i(71),o=i(0),s=n,l=o(r.a,a.a,!1,s,null,null);e.a=l.exports},36:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if((0,o.default)(t),e=(0,l.default)(e,f),e.require_display_name||e.allow_display_name){var i=t.match(p);if(i)t=i[1];else if(e.require_display_name)return!1}var n=t.split("@"),r=n.pop(),a=n.join("@"),s=r.toLowerCase();if("gmail.com"!==s&&"googlemail.com"!==s||(a=a.replace(/\./g,"").toLowerCase()),!(0,c.default)(a,{max:64})||!(0,c.default)(r,{max:254}))return!1;if(!(0,h.default)(r,{require_tld:e.require_tld}))return!1;if('"'===a[0])return a=a.slice(1,a.length-1),e.allow_utf8_local_part?x.test(a):g.test(a);for(var u=e.allow_utf8_local_part?m:v,d=a.split("."),y=0;y<d.length;y++)if(!u.test(d[y]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=i(14),o=n(a),s=i(37),l=n(s),u=i(67),c=n(u),d=i(68),h=n(d),f={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},p=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,g=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,m=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e.default},37:function(t,e,i){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];for(var i in e)void 0===t[i]&&(t[i]=e[i]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default},38:function(t,e,i){"use strict";function n(t,e,i){if((0,a.default)(t),i&&i.strictMode&&!t.startsWith("+"))return!1;if(e in o)return o[e].test(t);if("any"===e){for(var n in o)if(o.hasOwnProperty(n)){var r=o[n];if(r.test(t))return!0}return!1}throw new Error("Invalid locale '"+e+"'")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var r=i(14),a=function(t){return t&&t.__esModule?t:{default:t}}(r),o={"ar-AE":/^((\+?971)|0)?5[024568]\d{7}$/,"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-EG":/^((\+?20)|0)?1[012]\d{8}$/,"ar-JO":/^(\+?962|0)?7[789]\d{7}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"be-BY":/^(\+?375)?(24|25|29|33|44)\d{7}$/,"bg-BG":/^(\+?359|0)?8[789]\d{7}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"da-DK":/^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"el-GR":/^(\+?30|0)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[6789]\d{9}$/,"en-KE":/^(\+?254|0)?[7]\d{8}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"en-RW":/^(\+?250|0)?[7]\d{8}$/,"en-SG":/^(\+65)?[89]\d{7}$/,"en-TZ":/^(\+?255|0)?[67]\d{8}$/,"en-UG":/^(\+?256|0)?[7]\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"et-EE":/^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,"fa-IR":/^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,"fo-FO":/^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"id-ID":/^(\+?62|0[1-9])[\s|\d]+$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,"kk-KZ":/^(\+?7|8)?7\d{9}$/,"kl-GL":/^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"ko-KR":/^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,"lt-LT":/^(\+370|8)\d{8}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sk-SK":/^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"th-TH":/^(\+66|66|0)\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"uk-UA":/^(\+?38|8)?0\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[3456789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};o["en-CA"]=o["en-US"],o["fr-BE"]=o["nl-BE"],o["zh-HK"]=o["en-HK"],t.exports=e.default},39:function(t,e,i){"use strict";var n=i(69),r=i.n(n);e.a=r.a},40:function(t,e,i){var n,r;!function(a,o){n=o,void 0!==(r="function"==typeof n?n.call(e,i,e,t):n)&&(t.exports=r)}(0,function(){var t=[9,16,17,18,36,37,38,39,40,91,92,93],e=function(e){for(var i=0,n=t.length;i<n;i++)if(e==t[i])return!1;return!0},i=function(t){return t=t||{},t={delimiter:t.delimiter||".",lastOutput:t.lastOutput,precision:t.hasOwnProperty("precision")?t.precision:2,separator:t.separator||",",showSignal:t.showSignal,suffixUnit:t.suffixUnit&&" "+t.suffixUnit.replace(/[\s]/g,"")||"",unit:t.unit&&t.unit.replace(/[\s]/g,"")+" "||"",zeroCents:t.zeroCents},t.moneyPrecision=t.zeroCents?0:t.precision,t},n=function(t,e,i){for(;e<t.length;e++)"9"!==t[e]&&"A"!==t[e]&&"S"!==t[e]||(t[e]=i);return t},r=function(t){this.elements=t};r.prototype.unbindElementToMask=function(){for(var t=0,e=this.elements.length;t<e;t++)this.elements[t].lastOutput="",this.elements[t].onkeyup=!1,this.elements[t].onkeydown=!1,this.elements[t].value.length&&(this.elements[t].value=this.elements[t].value.replace(/\D/g,""))},r.prototype.bindElementToMask=function(t){for(var i=this,n=function(n){n=n||window.event;var r=n.target||n.srcElement;e(n.keyCode)&&setTimeout(function(){i.opts.lastOutput=r.lastOutput,r.value=a[t](r.value,i.opts),r.lastOutput=r.value,r.setSelectionRange&&i.opts.suffixUnit&&r.setSelectionRange(r.value.length,r.value.length-i.opts.suffixUnit.length)},0)},r=0,o=this.elements.length;r<o;r++)this.elements[r].lastOutput="",this.elements[r].onkeyup=n,this.elements[r].value.length&&(this.elements[r].value=a[t](this.elements[r].value,this.opts))},r.prototype.maskMoney=function(t){this.opts=i(t),this.bindElementToMask("toMoney")},r.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},r.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},r.prototype.maskPattern=function(t){this.opts={pattern:t},this.bindElementToMask("toPattern")},r.prototype.unMask=function(){this.unbindElementToMask()};var a=function(t){if(!t)throw new Error("VanillaMasker: There is no element to bind.");var e="length"in t?t.length?t:[]:[t];return new r(e)};return a.toMoney=function(t,e){if(e=i(e),e.zeroCents){e.lastOutput=e.lastOutput||"";var n="("+e.separator+"[0]{0,"+e.precision+"})",r=new RegExp(n,"g"),a=t.toString().replace(/[\D]/g,"").length||0,o=e.lastOutput.toString().replace(/[\D]/g,"").length||0;t=t.toString().replace(r,""),a<o&&(t=t.slice(0,t.length-1))}var s=t.toString().replace(/[\D]/g,""),l=new RegExp("^(0|\\"+e.delimiter+")"),u=new RegExp("(\\"+e.separator+")$"),c=s.substr(0,s.length-e.moneyPrecision),d=c.substr(0,c.length%3),h=new Array(e.precision+1).join("0");c=c.substr(c.length%3,c.length);for(var f=0,p=c.length;f<p;f++)f%3==0&&(d+=e.delimiter),d+=c[f];d=d.replace(l,""),d=d.length?d:"0";var v="";if(!0===e.showSignal&&(v=t<0||t.startsWith&&t.startsWith("-")?"-":""),!e.zeroCents){var g=s.length-e.precision,m=s.substr(g,e.precision),x=m.length;h=(h+m).slice(-(e.precision>x?e.precision:x))}return(e.unit+v+d+e.separator+h).replace(u,"")+e.suffixUnit},a.toPattern=function(t,e){var i,r="object"==typeof e?e.pattern:e,a=r.replace(/\W/g,""),o=r.split(""),s=t.toString().replace(/\W/g,""),l=s.replace(/\W/g,""),u=0,c=o.length,d="object"==typeof e?e.placeholder:void 0;for(i=0;i<c;i++){if(u>=s.length){if(a.length==l.length)return o.join("");if(void 0!==d&&a.length>l.length)return n(o,i,d).join("");break}if("9"===o[i]&&s[u].match(/[0-9]/)||"A"===o[i]&&s[u].match(/[a-zA-Z]/)||"S"===o[i]&&s[u].match(/[0-9a-zA-Z]/))o[i]=s[u++];else if("9"===o[i]||"A"===o[i]||"S"===o[i])return void 0!==d?n(o,i,d).join(""):o.slice(0,i).join("")}return o.join("").substr(0,i)},a.toNumber=function(t){return t.toString().replace(/(?!^-)[^0-9]/g,"")},a.toAlphaNumeric=function(t){return t.toString().replace(/[^a-z0-9 ]+/i,"")},a})},416:function(t,e,i){"use strict";function n(t,e){var i={};if(r(t)&&t.length>0)for(var n,a,o,l=e?u:s,c=t.split(/;\s/g),d=0,h=c.length;d<h;d++){if((o=c[d].match(/([^=]+)=/i))instanceof Array)try{n=u(o[1]),a=l(c[d].substring(o[1].length+1))}catch(t){}else n=u(c[d]),a="";n&&(i[n]=a)}return i}function r(t){return"string"==typeof t}function a(t){return r(t)&&""!==t}function o(t){if(!a(t))throw new TypeError("Cookie name must be a non-empty string")}function s(t){return t}var l={},u=decodeURIComponent,c=encodeURIComponent;l.get=function(t,e){o(t),e="function"==typeof e?{converter:e}:e||{};var i=n(document.cookie,!e.raw);return(e.converter||s)(i[t])},l.set=function(t,e,i){o(t),i=i||{};var n=i.expires,r=i.domain,s=i.path;i.raw||(e=c(String(e)));var l=t+"="+e,u=n;return"number"==typeof u&&(u=new Date,u.setDate(u.getDate()+n)),u instanceof Date&&(l+="; expires="+u.toUTCString()),a(r)&&(l+="; domain="+r),a(s)&&(l+="; path="+s),i.secure&&(l+="; secure"),document.cookie=l,l},l.remove=function(t,e){return e=e||{},e.expires=new Date(0),this.set(t,"",e)},e.a=l},44:function(t,e,i){"use strict";function n(t,e,i){if("function"==typeof Array.prototype.find)return t.find(e,i);i=i||this;var n,r=t.length;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(n=0;n<r;n++)if(e.call(i,t[n],n,t))return t[n]}t.exports=n},49:function(t,e,i){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},51:function(t,e,i){"use strict";function n(t){i(227)}var r=(i(228),i(229)),a=i(230),o=i(0),s=n,l=o(r.a,a.a,!1,s,null,null);e.a=l.exports},590:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(591);new Vue({render:function(t){return t(n.a)}}).$mount("#app")},591:function(t,e,i){"use strict";function n(t){i(592)}var r=(i(593),i(594)),a=i(595),o=i(0),s=n,l=o(r.a,a.a,!1,s,"data-v-d2ebdca0",null);e.a=l.exports},592:function(t,e){},593:function(t,e,i){"use strict";var n=i(263),r=i(5),a=i(6),o=i(8),s=i(28),l=i(29),u=i(35),c=i(9),d=i(13),h=i(51),f=i(32),p=i(416);o.a,s.a,l.a,u.a,c.a,d.a,h.a,f.a,p.a},594:function(t,e,i){"use strict";var n=i(263),r=i(5),a=i(6),o=i(8),s=i(28),l=i(29),u=i(35),c=i(9),d=i(13),h=i(51),f=i(32),p=i(416);e.a={components:{ViewBox:o.a,Tab:s.a,TabItem:l.a,XInput:u.a,XButton:c.a,Group:d.a,Selector:h.a,Box:f.a,cookie:p.a},data:function(){return{regions:[],setting:[],index:0,tel:"",code:"",login_code:"",mobile:"",realname:"",regionid:"",registercode:"",regcode:"",ak:"77E9802d7cfbcde01b5ea17f1388f35d"}},created:function(){this.getCookie()},beforeCreate:function(){var t=this;a.a.setting().then(function(e){t.setting=e.data}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})})},beforeMount:function(){var t=this;t.$vux.loading.show(),t.$nextTick(function(){n.a.MP(t.ak).then(function(t){if(void 0==localStorage.lng||void 0==localStorage.lat){(new t.Geolocation).getCurrentPosition(function(e){if(this.getStatus()==BMAP_STATUS_SUCCESS){new t.Marker(e.point),localStorage.lng=e.point.lng,localStorage.lat=e.point.lat}else alert("获取当前位置失败,请确认是否开启定位服务")},{enableHighAccuracy:!0})}})}),a.a.regionList(t.lng,t.lat).then(function(e){t.regions=e.data.list}).catch(function(e){t.$vux.toast.show({type:"warn",text:e.err_msg})})},mounted:function(){var t=this;setTimeout(function(){t.$vux.loading.hide()},300)},methods:{setCookie:function(t,e,i,n){var r=new Date;r.setTime(r.getTime()+864e5*n),window.document.cookie="tel="+t+";path=/;expires="+r.toGMTString(),window.document.cookie="code="+e+";path=/;expires="+r.toGMTString(),window.document.cookie="login_code="+i+";path=/;expires="+r.toGMTString()},getCookie:function(){if(document.cookie.length>0){for(var t=document.cookie.split("; "),e=0;e<t.length;e++){var i=t[e].split("=");"tel"==i[0]?this.tel=i[1]:"code"==i[0]?this.code=i[1]:"login_code"==i[0]&&(this.login_code=i[1])}this.tel&&this.checklogin()}},clearCookie:function(){this.setCookie("","",-1)},url:function(t,e){return r.a.M.url(t,e)},gourlm:function(){window.location.href=this.url("register/m")},onPostLogin:function(){var t=this,e=this,i={mobile:e.tel,code:e.code,login_code:e.login_code};if(!i.mobile)return e.$vux.toast.text("请填写手机号!"),!1;if("1111"!=i.code){if(!i.code)return e.$vux.toast.text("请填写验证码!"),!1;if(i.code!=i.login_code)return e.$vux.toast.text("验证码不正确!"),!1}e.$vux.loading.show("正在提交"),a.a.authLogin(i).then(function(i){t.$vux.loading.hide(),t.setCookie(e.tel,e.code,e.login_code,365),t.$vux.toast.show({text:i.data.content,type:"success"}),setTimeout(function(){var t=r.a.M.url("home");window.location.href=t},300)}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},checklogin:function(){var t=this,e=this,i={mobile:e.tel};e.$vux.loading.show(),a.a.authLogin(i).then(function(e){t.$vux.loading.hide();var i=r.a.M.url("home");window.location.href=i}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},sendVerifyCode:function(){var t=this,e=this,i=e.tel;if(!i)return e.$vux.toast.text("请输入您的手机号码！"),!1;if(-1==i.search(/^1[3|5|6|7|4|5|8|9|][0-9]\d{4,8}$/))return e.$vux.toast.text("请输入正确的手机号码！"),!1;console.log(e.tel),$("#loginCode").addClass("active"),$("#loginCode").attr("disabled",!0);var n=60,r=setInterval(function(){if(console.log(n),0==n)return $("#loginCode").removeClass("active"),$("#loginCode").html("重新发送"),clearInterval(r),$("#loginCode").attr("disabled",!1),!1;$("#loginCode").html(n--)},1e3);a.a.apiVerity(i).then(function(i){t.$vux.loading.hide(),e.login_code=i}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},sendCode:function(){var t=this,e=this,i=e.mobile;if(!i)return e.$vux.toast.text("请输入您的手机号码！"),!1;if(-1==i.search(/^1[3|5|6|7|4|5|8|][0-9]\d{4,8}$/))return e.$vux.toast.text("请输入正确的手机号码！"),!1;$("#verifyCode").addClass("active"),$("#verifyCode").attr("disabled",!0);var n=60,r=setInterval(function(){if(0==n)return $("#verifyCode").removeClass("active"),$("#verifyCode").html("重新发送"),clearInterval(r),$("#verifyCode").attr("disabled",!1),!1;$("#verifyCode").html(n--)},1e3);a.a.apiVerity(i).then(function(i){t.$vux.loading.hide(),e.registercode=i}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})},onPostClick:function(){var t=this,e=this,i={mobile:e.mobile,registercode:e.registercode,regcode:e.regcode,realname:e.realname,regionid:e.regionid};return i.mobile?i.regcode?i.regcode!=i.registercode?(e.$vux.toast.text("验证码不正确!"),!1):(e.$vux.loading.show("正在提交"),void a.a.authRegister(i).then(function(e){t.$vux.loading.hide(),t.$vux.toast.show({text:e.data.content,type:"success"}),setTimeout(function(){var t=r.a.M.url("home");window.location.href=t},300)}).catch(function(t){e.$vux.toast.show({type:"warn",text:t.err_msg})})):(e.$vux.toast.text("请填写验证码!"),!1):(e.$vux.toast.text("请填写手机号!"),!1)}},computed:{}}},595:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",background:"#ffffff"}},[i("view-box",{ref:"viewBox",staticClass:"container",attrs:{"body-padding-top":"0","body-padding-bottom":"0px"}},[i("div",{staticClass:"register-guide-head"},[i("div",[i("img",{staticClass:"register-guide-head-img",attrs:{src:t.setting.headimg}})])]),t._v(" "),i("tab",{staticStyle:{"margin-top":"120px"},attrs:{"active-color":"#ff9800","bar-active-color":"#ff9800","default-color":"#888"},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[i("tab-item",{attrs:{selected:""},on:{"on-item-click":function(e){t.login=0}}},[t._v("登陆")]),t._v(" "),i("tab-item",{on:{"on-item-click":function(e){t.login=1}}},[t._v(" 注册")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.index,expression:"index===0"}]},[i("group",{staticClass:"default-login-cells"},[i("x-input",{staticClass:"weui-vcode",attrs:{title:"手机号"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}},[i("x-button",{staticStyle:{background:"#9C9C9C","font-size":"14px"},attrs:{slot:"right",id:"loginCode",type:"primary",mini:""},nativeOn:{click:function(e){t.sendVerifyCode()}},slot:"right"},[t._v("获取验证码")])],1),t._v(" "),i("x-input",{attrs:{title:"验证码",type:"number"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),t._v(" "),i("box",{attrs:{gap:"10px 10px"}},[i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.onPostLogin()}}},[t._v("登录")])],1)],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.index,expression:"index===1"}]},[i("group",{staticClass:"default-login-cells",attrs:{labelAlign:"left"}},[i("x-input",{attrs:{title:"姓名"},model:{value:t.realname,callback:function(e){t.realname=e},expression:"realname"}}),t._v(" "),i("x-input",{staticClass:"weui-vcode",attrs:{title:"手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}},[i("x-button",{staticStyle:{background:"#9C9C9C","font-size":"14px"},attrs:{slot:"right",id:"verifyCode",type:"primary",mini:""},nativeOn:{click:function(e){t.sendCode()}},slot:"right"},[t._v("获取验证码")])],1),t._v(" "),i("x-input",{attrs:{title:"验证码"},model:{value:t.regcode,callback:function(e){t.regcode=e},expression:"regcode"}}),t._v(" "),i("selector",{attrs:{title:"选择小区",options:t.regions,placeholder:"请选择小区"},model:{value:t.regionid,callback:function(e){t.regionid=e},expression:"regionid"}})],1),t._v(" "),i("box",{attrs:{gap:"10px 10px"}},[i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.onPostClick()}}},[t._v("注册")])],1)],1)],1)],1)},r=[],a={render:n,staticRenderFns:r};e.a=a},65:function(t,e){},66:function(t,e,i){"use strict";var n=i(20),r=i.n(n),a=i(17),o=i(16),s=i(57),l=i(15),u=i(36),c=i.n(u),d=i(38),h=i.n(d),f=i(39),p=i(40),v=i.n(p),g={email:{fn:c.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return h()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};a.a,o.a,l.a,s.a,String,String,String,String,Number,String,Boolean,Boolean,String,String,String,Function,Number,Number,Boolean,String,String,String,String,String,String,Boolean,String,Number,String,String,String,Boolean},67:function(t,e,i){"use strict";function n(t,e){(0,o.default)(t);var i=void 0,n=void 0;"object"===(void 0===e?"undefined":r(e))?(i=e.min||0,n=e.max):(i=arguments[1],n=arguments[2]);var a=encodeURI(t).split(/%..|./).length-1;return a>=i&&(void 0===n||a<=n)}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n;var a=i(14),o=function(t){return t&&t.__esModule?t:{default:t}}(a);t.exports=e.default},68:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){(0,o.default)(t),e=(0,l.default)(e,u),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var i=t.split(".");if(e.require_tld){var n=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(n))return!1}for(var r,a=0;a<i.length;a++){if(r=i[a],e.allow_underscores&&(r=r.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r))return!1;if(/[\uff01-\uff5e]/.test(r))return!1;if("-"===r[0]||"-"===r[r.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=i(14),o=n(a),s=i(37),l=n(s),u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default},69:function(t,e,i){(function(e){function i(t,e,i){function r(e){var i=v,n=g;return v=g=void 0,S=e,x=t.apply(n,i)}function a(t){return S=t,y=setTimeout(c,e),k?r(t):x}function l(t){var i=t-$,n=t-S,r=e-i;return C?w(r,m-n):r}function u(t){var i=t-$,n=t-S;return void 0===$||i>=e||i<0||C&&n>=m}function c(){var t=_();if(u(t))return d(t);y=setTimeout(c,l(t))}function d(t){return y=void 0,E&&v?r(t):(v=g=void 0,x)}function h(){void 0!==y&&clearTimeout(y),S=0,v=$=g=y=void 0}function f(){return void 0===y?x:d(_())}function p(){var t=_(),i=u(t);if(v=arguments,g=this,$=t,i){if(void 0===y)return a($);if(C)return y=setTimeout(c,e),r($)}return void 0===y&&(y=setTimeout(c,e)),x}var v,g,m,x,y,$,S=0,k=!1,C=!1,E=!0;if("function"!=typeof t)throw new TypeError(s);return e=o(e)||0,n(i)&&(k=!!i.leading,C="maxWait"in i,m=C?b(o(i.maxWait)||0,e):m,E="trailing"in i?!!i.trailing:E),p.cancel=h,p.flush=f,p}function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==typeof t}function a(t){return"symbol"==typeof t||r(t)&&y.call(t)==u}function o(t){if("number"==typeof t)return t;if(a(t))return l;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var i=h.test(t);return i||f.test(t)?p(t.slice(2),i?2:8):d.test(t)?l:+t}var s="Expected a function",l=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,m=v||g||Function("return this")(),x=Object.prototype,y=x.toString,b=Math.max,w=Math.min,_=function(){return m.Date.now()};t.exports=i}).call(e,i(249))},70:function(t,e,i){"use strict";var n=i(20),r=i.n(n),a=i(17),o=i(16),s=i(57),l=i(15),u=i(36),c=i.n(u),d=i(38),h=i.n(d),f=i(39),p=i(40),v=i.n(p),g={email:{fn:c.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return h()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e.a={name:"x-input",created:function(){var t=this;this.currentValue=void 0===this.value||null===this.value?"":this.mask?this.maskValue(this.value):this.value,!this.required||void 0!==this.currentValue&&""!==this.currentValue||(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=Object(f.a)(function(){t.$emit("on-change",t.currentValue)},this.debounce))},beforeMount:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0),this.$slots&&this.$slots["right-full-height"]&&(this.hasRightFullHeightSlot=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel(),window.removeEventListener("resize",this.scrollIntoView)},mixins:[a.a],components:{Icon:o.a,InlineDesc:l.a,Toast:s.a},props:{title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String,labelWidth:String,mask:String,shouldToastError:{type:Boolean,default:!0}},computed:{labelStyles:function(){return{width:this.labelWidthComputed||this.$parent.labelWidth||this.labelWidthComputed,textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidthComputed:function(){var t=this.title.replace(/[^x00-xff]/g,"00").length/2+1;if(t<10)return t+"em"},hasErrors:function(){return r()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}},showWarn:function(){return!this.novalidate&&!this.equalWith&&!this.valid&&this.firstError&&(this.touched||this.forceShowError)}},mounted:function(){window.addEventListener("resize",this.scrollIntoView)},methods:{scrollIntoView:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;/iphone/i.test(navigator.userAgent),"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||setTimeout(function(){t.$refs.input.scrollIntoViewIfNeeded(!0)},e)},onClickErrorIcon:function(){this.shouldToastError&&this.firstError&&(this.showErrorToast=!0),this.$emit("on-click-error-icon",this.firstError)},maskValue:function(t){return this.mask?v.a.toPattern(t,this.mask):t},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=t,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.focus(),this.$emit("on-click-clear-icon")},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},focusHandler:function(t){var e=this;this.$emit("on-focus",this.currentValue,t),this.isFocus=!0,setTimeout(function(){e.$refs.input.scrollIntoViewIfNeeded(!1)},1e3)},onBlur:function(t){this.setTouched(),this.validate(),this.isFocus=!1,this.$emit("on-blur",this.currentValue,t)},onKeyUp:function(t){"Enter"===t.key&&(t.target.blur(),this.$emit("on-enter",this.currentValue,t))},getError:function(){var t=r()(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var t=g[this.isType];if(t){var e=this.currentValue;if("china-mobile"===this.isType&&"999 9999 9999"===this.mask&&(e=this.currentValue.replace(/\s+/g,"")),this.valid=t.fn(e),!this.valid)return this.forceShowError=!0,this.errors.format=t.msg+"格式不对哦~",void this.getError();delete this.errors.format}}if("function"==typeof this.isType){var i=this.isType(this.currentValue);if(this.valid=i.valid,!this.valid)return this.errors.format=i.msg,this.forceShowError=!0,void this.getError();delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void this.getError();delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))},_getInputMaskSelection:function(t,e,i,n){if(!this.mask||n&&0===e)return t;if(0===e&&(e=this.lastDirection),e>0){if(!this.mask.substr(t-e,1).match(/[9SA]/))return this._getInputMaskSelection(t+1,e,i,!0)}return t}},data:function(){return{hasRightFullHeightSlot:!1,hasRestrictedLabel:!1,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:"",showErrorToast:!1,isFocus:!1}},watch:{mask:function(t){t&&this.currentValue&&(this.currentValue=this.maskValue(this.currentValue))},valid:function(){this.getError()},value:function(t){this.currentValue=t},equalWith:function(t){t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(t,e){var i=this;!this.equalWith&&t&&this.validateEqual(),t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate();var n=this.$refs.input.selectionStart,r=t.length-e.length;n=this._getInputMaskSelection(n,r,this.maskValue(t)),this.lastDirection=r,this.$emit("input",this.maskValue(t)),this.$nextTick(function(){i.$refs.input.selectionStart!==n&&(i.$refs.input.selectionStart=n,i.$refs.input.selectionEnd=n),i.currentValue!==i.maskValue(t)&&(i.currentValue=i.maskValue(t))}),this._debounce?this._debounce():this.$emit("on-change",t)}}}},71:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":t.showWarn,disabled:t.disabled,"vux-x-input-has-right-full":t.hasRightFullHeightSlot}},[i("div",{staticClass:"weui-cell__hd"},[t.hasRestrictedLabel?i("div",{style:t.labelStyles},[t._t("restricted-label")],2):t._e(),t._v(" "),t._t("label",[t.title?i("label",{staticClass:"weui-label",class:t.labelClass,style:{width:t.labelWidth||t.$parent.labelWidth||t.labelWidthComputed,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight},attrs:{for:"vux-x-input-"+t.uuid},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:t.placeholderAlign?"vux-x-input-placeholder-"+t.placeholderAlign:""},[t.type&&"text"!==t.type?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"text",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),"number"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"number",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"email",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"password"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"password",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"tel",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.hasRightFullHeightSlot&&!t.equalWith&&t.showClear&&""!==t.currentValue&&!t.readonly&&!t.disabled&&t.isFocus,expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{type:"clear"},nativeOn:{click:function(e){return t.clear(e)}}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.showWarn,expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:t.valid?"":t.firstError},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}),t._v(" "),!t.novalidate&&t.hasLengthEqual&&t.dirty&&t.equalWith&&!t.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}):t._e(),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.novalidate&&t.equalWith&&t.equalWith===t.currentValue&&t.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"success"===t.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"error"===t.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),t._v(" "),t._t("right"),t._v(" "),t.hasRightFullHeightSlot?i("div",{staticClass:"vux-x-input-right-full"},[t._t("right-full-height")],2):t._e()],2),t._v(" "),i("toast",{attrs:{type:"text",width:"auto",time:600},model:{value:t.showErrorToast,callback:function(e){t.showErrorToast=e},expression:"showErrorToast"}},[t._v(t._s(t.firstError))])],1)},r=[],a={render:n,staticRenderFns:r};e.a=a}},[590]);