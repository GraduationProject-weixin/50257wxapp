(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/storeup/add-or-update"],{2744:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void r(s)}o.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){u(i,n,a,o,c,"next",e)}function c(e){u(i,n,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("aa9d"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:"",type:"",inteltype:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1,type:!1,inteltype:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var r=this;return i(n.default.mark((function a(){var u,i,o,c;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,r.$api.session(u);case 3:if(i=a.sent,r.user=i.data,r.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(r.ruleForm.refid=t.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return r.ruleForm.id=t.id,a.next=11,r.$api.info("storeup",r.ruleForm.id);case 11:i=a.sent,r.ruleForm=i.data;case 13:if(r.cross=t.cross,!t.cross){a.next=49;break}o=e.getStorageSync("crossObj"),a.t0=n.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=49;break}if(c=a.t1.value,"userid"!=c){a.next=23;break}return r.ruleForm.userid=o[c],r.ro.userid=!0,a.abrupt("continue",17);case 23:if("refid"!=c){a.next=27;break}return r.ruleForm.refid=o[c],r.ro.refid=!0,a.abrupt("continue",17);case 27:if("tablename"!=c){a.next=31;break}return r.ruleForm.tablename=o[c],r.ro.tablename=!0,a.abrupt("continue",17);case 31:if("name"!=c){a.next=35;break}return r.ruleForm.name=o[c],r.ro.name=!0,a.abrupt("continue",17);case 35:if("picture"!=c){a.next=39;break}return r.ruleForm.picture=o[c],r.ro.picture=!0,a.abrupt("continue",17);case 39:if("type"!=c){a.next=43;break}return r.ruleForm.type=o[c],r.ro.type=!0,a.abrupt("continue",17);case 43:if("inteltype"!=c){a.next=47;break}return r.ruleForm.inteltype=o[c],r.ro.inteltype=!0,a.abrupt("continue",17);case 47:a.next=17;break;case 49:r.styleChange();case 50:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return i(n.default.mark((function r(){var a,u,i,o,c,s,l,f,d,p;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.ruleForm.userid){r.next=3;break}return t.$utils.msg("用户id不能为空"),r.abrupt("return");case 3:if(t.ruleForm.name){r.next=6;break}return t.$utils.msg("收藏名称不能为空"),r.abrupt("return");case 6:if(t.ruleForm.picture){r.next=9;break}return t.$utils.msg("收藏图片不能为空"),r.abrupt("return");case 9:if(!t.cross){r.next=25;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){r.next=25;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=21;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),r.next=19,t.$api.update("".concat(f),s);case 19:r.next=25;break;case 21:a=Number(e.getStorageSync("userid")),u=s["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!u||!a){r.next=47;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=u,d={page:1,limit:10,crossuserid:a,crossrefid:u},r.next=31,t.$api.list("storeup",d);case 31:if(p=r.sent,!(p.data.total>=i)){r.next=37;break}return t.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!t.ruleForm.id){r.next=42;break}return r.next=40,t.$api.update("storeup",t.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,t.$api.add("storeup",t.ruleForm);case 44:t.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!t.ruleForm.id){r.next=52;break}return r.next=50,t.$api.update("storeup",t.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,t.$api.add("storeup",t.ruleForm);case 54:t.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,r("543d")["default"])},"36da":function(e,t,r){"use strict";r.r(t);var n=r("2744"),a=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a},"93ed":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"9b9e":function(e,t,r){"use strict";r.r(t);var n=r("93ed"),a=r("36da");for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);r("ba7b");var i,o=r("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"745e1fac",null,!1,n["a"],i);t["default"]=c.exports},ba7b:function(e,t,r){"use strict";var n=r("e161"),a=r.n(n);a.a},e161:function(e,t,r){},e4a1:function(e,t,r){"use strict";(function(e){r("4754");n(r("66fd"));var t=n(r("9b9e"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])}},[["e4a1","common/runtime","common/vendor"]]]);