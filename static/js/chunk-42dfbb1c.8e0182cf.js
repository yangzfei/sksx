(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42dfbb1c"],{"0115":function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{class:{bianhui:t.tanchu}},[n("div",{staticClass:"jjheader"},[n("div",{staticClass:"userjj"},[n("img",{attrs:{src:t.thisjj.userimg,alt:""}}),n("div",[n("p",[t._v(" "+t._s(t.thisjj.username)+" ")]),n("p",[t._v(" "+t._s(t.thisjj.date)+" ")])])]),t._m(0)]),n("div",{staticClass:"jjmain"},[n("p",[t._v(" "+t._s(t.thisjj.tit)+" ")]),n("img",{staticStyle:{width:"100%"},attrs:{src:t.thisjj.img,alt:""}}),n("div",{staticClass:"mian-main",domProps:{innerHTML:t._s(t.thisjj.zhuti)}})]),n("div",{staticClass:"jjmain2"},[t._m(1),n("p",{staticClass:"caidanname"},[t._v(" "+t._s(t.thisjj.cainame)+" ")]),n("div",{staticClass:"caipu"},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.thisjj.yuanliao,expression:"thisjj.yuanliao"}]},[n("span",[t._v("原料")]),t._v(": "),n("span",[t._v(t._s(t.thisjj.yuanliao))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.thisjj.tiaoliao,expression:"thisjj.tiaoliao"}]},[n("span",[t._v("调料")]),t._v(": "),n("span",[t._v(t._s(t.thisjj.tiaoliao))])])]),n("div",{staticClass:"buzhou"},[t._m(2),t._l(t.thisjj.buzhou,(function(i,a){return n("p",{key:a},[t._v(t._s(a+1)+"、"+t._s(i)+"。")])}))],2),n("div",{staticClass:"main2-bottom"},[n("div",[n("img",{directives:[{name:"show",rawName:"v-show",value:!t.dz,expression:"!dz"}],attrs:{src:"/img/chihu/xiangqing/dianzan.png",alt:""},on:{click:function(i){t.dz=!0,t.caozuo.dianzan+=1}}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.dz,expression:"dz"}],attrs:{src:"/img/chihu/xiangqing/dianzan-on.png",alt:""},on:{click:function(i){t.dz=!1,t.caozuo.dianzan-=1}}}),t._v(" "+t._s(t.caozuo.dianzan)+" ")]),n("div",{on:{click:function(i){return t.pinglun()}}},[n("img",{attrs:{src:"/img/chihu/xiangqing/pinglun.png",alt:""}}),t._v(t._s(t.plnum)+" ")]),n("div",[n("img",{directives:[{name:"show",rawName:"v-show",value:!t.sc,expression:"!sc"}],attrs:{src:"/img/chihu/xiangqing/shoucang.png",alt:""},on:{click:function(i){t.sc=!0,t.caozuo.shoucang+=1}}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.sc,expression:"sc"}],attrs:{src:"/img/chihu/xiangqing/shoucang-on.png",alt:""},on:{click:function(i){t.sc=!1,t.caozuo.shoucang-=1}}}),t._v(" "+t._s(t.caozuo.shoucang)+" ")])])]),n("div",{staticClass:"jjbottom"},[n("div",{staticClass:"bottom-main"},[n("div",{on:{click:function(i){return t.fh()}}},[n("img",{attrs:{src:"/img/chihu/xiangqing/fanhui.png",alt:""}})]),t._m(3),n("div",{on:{click:function(i){return t.fenxiang()}}},[n("img",{attrs:{src:"/img/chihu/xiangqing/zhuanfa.png",alt:""}})])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tanchu,expression:"tanchu"}],staticClass:"tanchuceng"},[n("p",[t._v("分享到")]),t._m(4),n("div",{staticClass:"quxiao",on:{click:function(i){return t.quxiao()}}},[t._v(" 取消 ")])])])},s=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"guanzhu"},[n("button",[t._v("关注")])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"main2-top"},[n("div",{staticClass:"main2-tit"},[t._v("风味菜谱")])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("p",[n("span",[t._v("步骤")]),t._v(":")])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("button",[t._v("一键购买所有食材")])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"zhuafa"},[n("div",[n("img",{attrs:{src:"/img/chihu/xiangqing/weixin.png",alt:""}}),n("p",[t._v("微信好友")])]),n("div",[n("img",{attrs:{src:"/img/chihu/xiangqing/pengyouquan.png",alt:""}}),n("p",[t._v("朋友圈")])])])}],e=(n("a9e3"),{name:"chihujj",data:function(){return{thisjj:{},jieshao:{},caozuo:{dianzan:0,pinglun:[],shoucang:0},plnum:0,dz:!1,sc:!1,tanchu:!1}},props:{id:Number},created:function(){var t=this;this.$axios.get("/json/chihujianjie.json").then((function(i){for(var n=0;n<i.data.length;n++)t.$route.query.id==i.data[n].id&&(t.thisjj=i.data[n])})),this.$axios.get("/json/chihucaozuo.json").then((function(i){for(var n=0;n<i.data.length;n++)t.$route.query.id==i.data[n].id&&(t.caozuo=i.data[n],t.plnum=i.data[n].pinglun.length)})).catch((function(t){console.log(t)}))},methods:{pinglun:function(){0==this.plnum?alert("暂无评论！"):this.$router.push({path:"/pinglunqu",query:{id:this.$route.query.id}})},fh:function(){this.$router.go(-1)},fenxiang:function(){this.tanchu=!0;var t=function(t){t.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",t,!1)},quxiao:function(){this.tanchu=!1;var t=function(t){t.preventDefault()};document.body.style.overflow="",document.addEventListener("touchmove",t,!1)}}}),c=e,o=(n("ba15"),n("2877")),r=Object(o["a"])(c,a,s,!1,null,"42fb9b96",null);i["default"]=r.exports},5899:function(t,i){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,i,n){var a=n("1d80"),s=n("5899"),e="["+s+"]",c=RegExp("^"+e+e+"*"),o=RegExp(e+e+"*$"),r=function(t){return function(i){var n=String(a(i));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:r(1),end:r(2),trim:r(3)}},7156:function(t,i,n){var a=n("861d"),s=n("d2bb");t.exports=function(t,i,n){var e,c;return s&&"function"==typeof(e=i.constructor)&&e!==n&&a(c=e.prototype)&&c!==n.prototype&&s(t,c),t}},a9e3:function(t,i,n){"use strict";var a=n("83ab"),s=n("da84"),e=n("94ca"),c=n("6eeb"),o=n("5135"),r=n("c6b6"),u=n("7156"),h=n("c04e"),l=n("d039"),v=n("7c73"),d=n("241c").f,f=n("06cf").f,g=n("9bf2").f,p=n("58a8").trim,m="Number",_=s[m],j=_.prototype,w=r(v(j))==m,b=function(t){var i,n,a,s,e,c,o,r,u=h(t,!1);if("string"==typeof u&&u.length>2)if(u=p(u),i=u.charCodeAt(0),43===i||45===i){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(u.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+u}for(e=u.slice(2),c=e.length,o=0;o<c;o++)if(r=e.charCodeAt(o),r<48||r>s)return NaN;return parseInt(e,a)}return+u};if(e(m,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,z=function(t){var i=arguments.length<1?0:t,n=this;return n instanceof z&&(w?l((function(){j.valueOf.call(n)})):r(n)!=m)?u(new _(b(i)),n,z):b(i)},N=a?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;N.length>E;E++)o(_,x=N[E])&&!o(z,x)&&g(z,x,f(_,x));z.prototype=j,j.constructor=z,c(s,m,z)}},b35a:function(t,i,n){},ba15:function(t,i,n){"use strict";var a=n("b35a"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-42dfbb1c.8e0182cf.js.map