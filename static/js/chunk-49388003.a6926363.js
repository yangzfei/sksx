(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49388003"],{ab81:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"denglu"},[s("div",{staticClass:"denglu-dl"},[t._v("登录")]),s("div",{staticClass:"denglu-inp"},[s("div",{staticClass:"inp inp1"},[s("img",{attrs:{src:"/img/login-user.png",alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"user",placeholder:"手机号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"inp inp2"},[s("img",{attrs:{src:"/img/login-yzm.png",alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.yanzhengma,expression:"yanzhengma"}],attrs:{type:"text",name:"yzm",placeholder:"验证码"},domProps:{value:t.yanzhengma},on:{input:function(e){e.target.composing||(t.yanzhengma=e.target.value)}}}),s("button",{staticClass:"btn-default btn"},[t._v("获取验证码")])])]),s("div",{staticClass:"yzm"},[s("div",{staticClass:"yzm-yzm",on:{click:t.tanChu}},[t._v("未收到验证码？")])]),s("div",{staticClass:"accept"},[s("input",{attrs:{type:"checkbox"},on:{click:t.mychecked}}),t._m(0)]),s("div",{staticClass:"denglu-btn"},[s("button",{staticClass:"btn-default btn",on:{click:t.submit}},[t._v("登录")])]),s("div",{staticClass:"qtdl"},[s("div",{staticClass:"left"},[s("router-link",{attrs:{to:"/loginPassword"}},[t._v("账号密码登录")])],1),s("div",{staticClass:"right"},[s("router-link",{attrs:{to:"/register"}},[t._v("还没有账号? 注册")])],1)])]),s("div",{staticClass:"bj"},[s("div",{staticClass:"top"},[t._v("快速登录")]),s("div",{staticClass:"bottom"},[s("ul",t._l(t.loginLogo,(function(t,e){return s("li",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tanchuceng"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tanchu"},[t._m(1),s("div",{staticClass:"tanchu-bottom"},[s("div",{on:{click:t.tanChuFalse}},[t._v("取消")]),s("div",[t._v("现在接听")])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v("我已同意并阅读"),s("a",{attrs:{href:"#"}},[t._v("《食客生鲜用户注册协议》")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tanchu-top"},[s("p",[t._v("我们将电话语音告知您验证码")]),s("p",[t._v("如仍未接到电话，请拨打客服电话")]),s("p",[t._v("400-730-0770")])])}],i={name:"login",data:function(){return{loginLogo:["/img/weixin.png"],show:!1,username:null,yanzhengma:1234,len:11,checked:!1}},methods:{tanChu:function(){this.show=!0;var t=function(t){t.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",t,!1)},tanChuFalse:function(){this.show=!1;var t=function(t){t.preventDefault()};document.body.style.overflow="",document.addEventListener("touchmove",t,!1)},mychecked:function(){this.checked=!this.checked,console.log(this.checked)},submit:function(){var t=this,e=/[a-zA-Z0-9]{8,16}/;this.username?this.username.length==this.len?1234==this.yanzhengma?e.test(this.password)?this.checked?this.$axios.get("/json/users.json").then((function(e){for(var s in console.log(e.data),e.data){if(t.username==e.data[s].username){var a=e.data[s];t.$store.commit("addUser",a),console.log(t.$store.state.user),alert("登陆成功"),t.$router.push("/");break}s==e.data.length-1&&(console.log("用户名不存在，请注册后登陆"),alert("用户名不存在，请注册后登陆"))}})).catch((function(t){console.log(t)})):console.log("请阅读并同意协议"):console.log("密码格式错误，必须包涵数字、字母，并且在8-16位"):console.log("验证码错误"):console.log("用户名格式错误"):alert("输入账号为空！")}}},o=i,c=(s("d71a"),s("2877")),l=Object(c["a"])(o,a,n,!1,null,"3fc99f04",null);e["default"]=l.exports},d71a:function(t,e,s){"use strict";var a=s("d8be"),n=s.n(a);n.a},d8be:function(t,e,s){}}]);
//# sourceMappingURL=chunk-49388003.a6926363.js.map