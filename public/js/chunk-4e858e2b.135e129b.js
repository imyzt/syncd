(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e858e2b"],{"07d6":function(t,e,s){},3635:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layer-global"},[s("header",{staticClass:"layer-header"},[t._m(0),s("div",{staticClass:"header-right"},[s("span",{staticClass:"r-item"},[s("el-dropdown",{attrs:{trigger:"click"}},[s("span",{staticClass:"item app-cursor"},[s("i",{staticClass:"iconfont icon-question-circle-fill"}),s("i",{staticClass:"iconfont small icon-arrow-down"})]),s("el-dropdown-menu",{staticClass:"app-header-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[s("a",{staticClass:"app-dropdown-link",attrs:{href:"https://github.com/dreamans/syncd/issues",target:"_blank"}},[s("el-dropdown-item",[s("i",{staticClass:"iconfont small left icon-help"}),t._v(t._s(t.$t("help")))])],1),s("a",{staticClass:"app-dropdown-link",attrs:{href:"https://github.com/dreamans/syncd",target:"_blank"}},[s("el-dropdown-item",[s("i",{staticClass:"iconfont small left icon-pull-request"}),t._v(t._s(t.$t("contribute_to_syncd")))])],1)])],1)],1),s("span",{staticClass:"r-item"},[s("el-dropdown",{attrs:{trigger:"click"},on:{command:t.userSettingHandler}},[s("span",{staticClass:"item app-cursor"},[s("img",{staticClass:"avatar",attrs:{src:t.$store.getters["account/getAvatar"]}}),s("i",{staticClass:"iconfont small icon-arrow-down"})]),s("el-dropdown-menu",{staticClass:"app-header-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{staticClass:"text"},[s("i",{staticClass:"iconfont small left icon-user"}),t._v(t._s(t.$store.getters["account/getUserName"]))]),s("el-dropdown-item",{attrs:{command:"setting",divided:""}},[s("i",{staticClass:"iconfont small left icon-setting"}),t._v(t._s(t.$t("personal_setting")))]),s("el-dropdown-item",{attrs:{command:"password"}},[s("i",{staticClass:"iconfont small left icon-key"}),t._v(t._s(t.$t("change_password")))]),s("el-dropdown-item",{attrs:{command:"logout",divided:""}},[s("i",{staticClass:"iconfont small left icon-logout"}),t._v(t._s(t.$t("sign_out")))])],1)],1)],1)])]),s("section",{staticClass:"layer-container"},[s("aside",{staticClass:"layer-aside"},[s("ScrollBar",[s("el-menu",{staticClass:"aside-menu",attrs:{"default-active":t.activeMenu,router:!0,"unique-opened":!0}},[t._l(t.AppMenu,function(e){return[e.children&&e.children.length>1?s("el-submenu",{key:e.name,attrs:{index:e.name}},[s("template",{slot:"title"},[e.meta.icon?s("span",{staticClass:"iconfont left",class:e.meta.icon}):t._e(),s("span",[t._v(t._s(e.meta.title))])]),t._l(e.children,function(e){return[e.meta&&e.meta.hide?t._e():s("el-menu-item",{key:e.name,attrs:{route:{name:e.name},index:e.name}},[s("i",{staticClass:"iconfont small left"},[s("svg",{attrs:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{d:"M384.023552 384.083968l256.016384 0 0 256.016384-256.016384 0 0-256.016384Z"}})])]),s("span",[t._v(t._s(e.meta.title))])])]})],2):e.children&&1==e.children.length?s("el-menu-item",{key:e.children[0].name,attrs:{route:{name:e.children[0].name},index:e.children[0].name}},[e.children[0].meta.icon?s("i",{staticClass:"iconfont left",class:e.children[0].meta.icon}):t._e(),s("span",[t._v(t._s(e.children[0].meta.title))])]):t._e()]})],2)],1)],1),s("main",{staticClass:"layer-main"},[s("el-breadcrumb",{staticClass:"bread-crumb",attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"iconfont small icon-breadcrumbs"})]),t._l(t.breadcrumb,function(e){return s("el-breadcrumb-item",{key:e},[t._v(t._s(e))])})],2),s("div",{staticClass:"container"},[s("router-view"),s("div",{staticClass:"app-cpy"},[s("p",[t._v("\n                    ©️ "+t._s((new Date).getFullYear())+" "),s("a",{attrs:{href:"https://github.com/dreamans/syncd",target:"_blank"}},[t._v("Syncd")]),t._v(". All Rights Reserved. MIT License.\n                    ")])])],1)],1)]),s("el-dialog",{attrs:{width:t.$root.DialogSmallWidth,title:"个人设置",visible:t.settingDialogVisible},on:{"update:visible":function(e){t.settingDialogVisible=e},close:t.closeUserSettingDialogHandler}},[s("el-form",{ref:"settingDialogRef",staticClass:"app-form",attrs:{model:t.settingForm,size:"medium","label-width":"80px"}},[s("el-form-item",{attrs:{label:t.$t("role")}},[t._v("\n                "+t._s(t.$store.getters["account/getRoleName"])+"\n            ")]),s("el-form-item",{attrs:{label:t.$t("avatar")}},[s("img",{staticClass:"app-avatar normal",attrs:{src:t.$store.getters["account/getAvatar"]}}),t._v("\n                 "),s("a",{staticClass:"app-link",attrs:{href:"http://cn.gravatar.com/support/activating-your-account/",target:"_blank"}},[s("i",{staticClass:"iconfont small left icon-question"}),t._v("如何修改头像")])]),s("el-form-item",{attrs:{label:t.$t("username")}},[s("el-input",{attrs:{value:t.$store.getters["account/getUserName"],disabled:!0}}),s("span",{staticClass:"app-input-help"},[s("i",{staticClass:"el-icon-info"}),t._v(" 修改用户名请联系管理员")])],1),s("el-form-item",{attrs:{label:t.$t("email")}},[s("el-input",{attrs:{value:t.$store.getters["account/getEmail"],disabled:!0}}),s("span",{staticClass:"app-input-help"},[s("i",{staticClass:"el-icon-info"}),t._v(" 修改邮箱请联系管理员")])],1),s("el-form-item",{attrs:{label:t.$t("truename"),prop:"truename"}},[s("el-input",{model:{value:t.settingForm.truename,callback:function(e){t.$set(t.settingForm,"truename",e)},expression:"settingForm.truename"}})],1),s("el-form-item",{attrs:{label:t.$t("mobile"),prop:"mobile"}},[s("el-input",{model:{value:t.settingForm.mobile,callback:function(e){t.$set(t.settingForm,"mobile",e)},expression:"settingForm.mobile"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:t.closeUserSettingDialogHandler}},[t._v(t._s(t.$t("cancel")))]),s("el-button",{attrs:{loading:t.btnLoading,size:"small",type:"primary"},on:{click:t.dialogUserSettingSubmitHandler}},[t._v(t._s(t.$t("enter")))])],1)],1),s("el-dialog",{attrs:{width:t.$root.DialogSmallWidth,title:"修改密码",visible:t.passwordDialogVisible},on:{"update:visible":function(e){t.passwordDialogVisible=e},close:t.closePasswordSettingDialogHandler}},[s("el-form",{ref:"passwordDialogRef",staticClass:"app-form",attrs:{model:t.passwordForm,size:"medium","label-width":"80px"}},[s("el-form-item",{attrs:{label:t.$t("current_password"),prop:"password",rules:[{min:6,max:20,message:this.$t("strlen_between",{min:6,max:20}),trigger:"blur"},{required:!0,message:this.$t("current_password_cannot_empty"),trigger:"blur"}]}},[s("el-input",{attrs:{type:"password",placeholder:t.$t("please_input_password_length_limit"),autocomplete:"off"},model:{value:t.passwordForm.password,callback:function(e){t.$set(t.passwordForm,"password",e)},expression:"passwordForm.password"}})],1),s("el-form-item",{attrs:{label:t.$t("new_password"),prop:"new_password",rules:[{min:6,max:20,message:this.$t("strlen_between",{min:6,max:20}),trigger:"blur"},{required:!0,message:this.$t("new_password_cannot_empty"),trigger:"blur"}]}},[s("el-input",{attrs:{type:"password",placeholder:t.$t("please_input_password_length_limit"),autocomplete:"off"},model:{value:t.passwordForm.new_password,callback:function(e){t.$set(t.passwordForm,"new_password",e)},expression:"passwordForm.new_password"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:t.closePasswordSettingDialogHandler}},[t._v(t._s(t.$t("cancel")))]),s("el-button",{attrs:{loading:t.btnLoading,size:"small",type:"primary"},on:{click:t.dialogPasswordSettingSubmitHandler}},[t._v(t._s(t.$t("enter")))])],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-left"},[n("img",{staticClass:"logo",attrs:{src:s("3680")}})])}],a=s("5176"),r=s.n(a),o=(s("ac6a"),s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{wheel:function(e){return e.preventDefault(),t.handleScroll(e)}}},[s("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{top:t.top+"px"}},[t._t("default")],2)])}),l=[],c=(s("cadf"),s("551c"),s("097d"),0),u={data:function(){return{top:0}},methods:{handleScroll:function(t){var e=3*-t.deltaY||t.wheelDelta,s=this.$refs.scrollContainer,n=s.offsetHeight,i=this.$refs.scrollWrapper,a=i.offsetHeight;e>0?this.top=Math.min(0,this.top+e):n-c<a?this.top<-(a-n+c)?this.top=this.top:this.top=Math.max(this.top+e,n-a-c):this.top=0}}},d=u,m=(s("72f3"),s("2877")),p=Object(m["a"])(d,o,l,!1,null,"d88310be",null);p.options.__file="index.vue";var f=p.exports,g=s("a18c"),h=s("1c06"),b=s("7ded"),w=s("c24f"),_={data:function(){return{breadcrumb:[],activeMenu:"",btnLoading:!1,settingDialogVisible:!1,settingForm:{},passwordDialogVisible:!1,passwordForm:{}}},computed:{AppMenu:function(){var t=[];this.$route.name;return g["b"].forEach(function(e){var s=[],n=r()({},e);e.children.forEach(function(t){s.push(t)}),n.children=s,t.push(n)}),g["b"]}},watch:{"$route.name":function(){this.breadcrumbItems(),this.initActiveMenu()}},components:{ScrollBar:f},methods:{userSettingHandler:function(t){var e=this;switch(t){case"logout":Object(b["c"])().then(function(t){e.$router.push({name:"login"})});break;case"setting":this.showUserSettingDialogHandler();break;case"password":this.showPasswordSettingDialogHandler();break}},showPasswordSettingDialogHandler:function(){this.passwordDialogVisible=!0},closePasswordSettingDialogHandler:function(){this.passwordDialogVisible=!1},dialogPasswordSettingSubmitHandler:function(){var t=this,e=this;this.$refs.passwordDialogRef.validate(function(s){if(!s)return!1;var n={password:t.$root.Md5Sum(e.passwordForm.password),new_password:t.$root.Md5Sum(e.passwordForm.new_password)};t.btnLoading=!0,Object(w["m"])(n).then(function(e){t.$root.MessageSuccess(function(){t.btnLoading=!1,t.closePasswordSettingDialogHandler()})}).catch(function(e){e.code==h["a"].CODE_ERR_USER_OR_PASS_WRONG&&t.$message({message:"当前密码错误，请重新输入",type:"warning"}),t.btnLoading=!1})})},showUserSettingDialogHandler:function(){this.settingForm={truename:this.$store.getters["account/getTrueName"],mobile:this.$store.getters["account/getMobile"]},this.settingDialogVisible=!0},closeUserSettingDialogHandler:function(){this.settingDialogVisible=!1},dialogUserSettingSubmitHandler:function(){var t=this;this.btnLoading=!0,Object(w["n"])(this.settingForm).then(function(e){t.$root.MessageSuccess(function(){t.btnLoading=!1,t.closeUserSettingDialogHandler()}),t.$store.dispatch("account/userSetting",{mobile:t.settingForm.mobile,truename:t.settingForm.truename})}).catch(function(e){t.btnLoading=!1})},initActiveMenu:function(){this.activeMenu=this.$route.name},breadcrumbItems:function(){var t=this,e=[];this.AppMenu.forEach(function(s){s.children.forEach(function(n){n.name==t.$route.name&&(s.meta.title&&e.push(s.meta.title),e.push(n.meta.title))})}),this.breadcrumb=e},initLoginStatus:function(){var t=this;Object(b["b"])().then(function(e){e.is_login?t.$store.dispatch("account/status",{user_id:e.user_id,username:e.username,email:e.email,mobile:e.mobile,privilege:e.privilege?e.privilege:[],role_name:e.role_name,truename:e.truename}):(t.$message.error("用户未登录",1),t.$router.push({name:"login"}))}).catch(function(e){t.$message.error("用户未登录",1),t.$router.push({name:"login"})})}},mounted:function(){this.initLoginStatus(),this.breadcrumbItems(),this.initActiveMenu()}},v=_,S=Object(m["a"])(v,n,i,!1,null,null,null);S.options.__file="Layer.vue";e["default"]=S.exports},3680:function(t,e,s){t.exports=s.p+"img/logo.8ba55f46.png"},5176:function(t,e,s){t.exports=s("51b6")},"72f3":function(t,e,s){"use strict";var n=s("07d6"),i=s.n(n);i.a},"7ded":function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a}),s.d(e,"c",function(){return r});var n=s("ead3");function i(t){return Object(n["b"])("/login",t)}function a(){return Object(n["a"])("/login/status")}function r(){return Object(n["b"])("/logout")}},"7f7f":function(t,e,s){var n=s("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in i||s("9e1e")&&n(i,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},ac6a:function(t,e,s){for(var n=s("cadf"),i=s("0d58"),a=s("2aba"),r=s("7726"),o=s("32e9"),l=s("84f2"),c=s("2b4c"),u=c("iterator"),d=c("toStringTag"),m=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(p),g=0;g<f.length;g++){var h,b=f[g],w=p[b],_=r[b],v=_&&_.prototype;if(v&&(v[u]||o(v,u,m),v[d]||o(v,d,b),l[b]=m,w))for(h in n)v[h]||a(v,h,n[h],!0)}},c24f:function(t,e,s){"use strict";s.d(e,"j",function(){return i}),s.d(e,"h",function(){return a}),s.d(e,"f",function(){return r}),s.d(e,"c",function(){return o}),s.d(e,"k",function(){return l}),s.d(e,"a",function(){return c}),s.d(e,"i",function(){return u}),s.d(e,"l",function(){return d}),s.d(e,"g",function(){return m}),s.d(e,"e",function(){return p}),s.d(e,"d",function(){return f}),s.d(e,"b",function(){return g}),s.d(e,"n",function(){return h}),s.d(e,"m",function(){return b});var n=s("ead3");function i(){return Object(n["a"])("/user/role/privlist")}function a(t){return Object(n["b"])("/user/role/add",t)}function r(t){return Object(n["a"])("/user/role/list",t)}function o(t){return Object(n["a"])("/user/role/detail",t)}function l(t){return Object(n["b"])("/user/role/update",t)}function c(t){return Object(n["b"])("/user/role/delete",t)}function u(t){return Object(n["b"])("/user/add",t)}function d(t){return Object(n["b"])("/user/update",t)}function m(t){return Object(n["a"])("/user/list",t)}function p(t){return Object(n["a"])("/user/exists",t)}function f(t){return Object(n["a"])("/user/detail",t)}function g(t){return Object(n["b"])("/user/delete",t)}function h(t){return Object(n["b"])("/user/my/setting",t)}function b(t){return Object(n["b"])("/user/my/password",t)}}}]);
//# sourceMappingURL=chunk-4e858e2b.135e129b.js.map