"use strict";(self["webpackChunkHixNav"]=self["webpackChunkHixNav"]||[]).push([[157],{7157:function(t,e,n){n.r(e),n.d(e,{default:function(){return r}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"install"},[n("div",{staticClass:"install-main"},[t._m(0),n("h3",{staticClass:"main-label"},[t._v("配置数据库")]),n("el-form",{ref:"form",attrs:{model:t.config,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"数据库地址"}},[n("el-input",{model:{value:t.config.addr,callback:function(e){t.$set(t.config,"addr",e)},expression:"config.addr"}})],1),n("el-form-item",{attrs:{label:"数据库名称"}},[n("el-input",{model:{value:t.config.dbname,callback:function(e){t.$set(t.config,"dbname",e)},expression:"config.dbname"}})],1),n("el-form-item",{attrs:{label:"数据库账号"}},[n("el-input",{model:{value:t.config.account,callback:function(e){t.$set(t.config,"account",e)},expression:"config.account"}})],1),n("el-form-item",{attrs:{label:"数据库密码"}},[n("el-input",{attrs:{type:"password"},model:{value:t.config.password,callback:function(e){t.$set(t.config,"password",e)},expression:"config.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.onSubmit(!0)}}},[t._v("保存")]),n("a",{staticStyle:{margin:"0 10px"},attrs:{href:"/"}},[n("el-button",{attrs:{type:"plain",size:"small"}},[t._v("回到首页")])],1)],1)],1)],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{"text-decoration":"none",color:"#000"},attrs:{href:"/"}},[a("img",{staticClass:"install-logo",attrs:{src:n(6949),alt:"logo"}})])}],i=(n(8862),{name:"InstallView",data:function(){return{config:{addr:"127.0.0.1:3306",dbname:"hixnav",account:"root",isMigrate:!1}}},methods:{onSubmit:function(t){var e=this;this.config.isMigrate=t,this.$store.dispatch("config/dbMigrate",JSON.stringify(this.config)).then((function(t){console.log(t),0==t.code&&(e.$message.success("success"),e.$router.push("/"))})).catch((function(t){console.log(t)}))}}}),o=i,l=n(1001),c=(0,l.Z)(o,a,s,!1,null,"29ce4e8a",null),r=c.exports},6949:function(t,e,n){t.exports=n.p+"assets/img/logo.8fc44113.png"}}]);
//# sourceMappingURL=157-legacy.907a910a.js.map