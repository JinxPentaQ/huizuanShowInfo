(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-234f89aa"],{"38ff":function(t,a,e){},"5c60":function(t,a,e){"use strict";e("38ff")},8385:function(t,a,e){t.exports=e.p+"img/lineg.04b25b10.png"},ee09:function(t,a,e){"use strict";e.r(a);var s,i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"white_bg"},[a("div",{staticStyle:{padding:"14px 24px 0 24px"}},[t._m(0),a("div",{staticClass:"qr"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.qrVisible,expression:"qrVisible"}],attrs:{id:"qr"}}),a("img",{directives:[{name:"show",rawName:"v-show",value:0==t.qrVisible,expression:"qrVisible == false"}],staticClass:"qr_img",attrs:{src:t.orderInfo.pay_local,alt:""}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.qrVisible,expression:"qrVisible == false"}],staticClass:"download"},[a("a",{staticStyle:{color:"#07c160"},attrs:{href:t.orderInfo.pay_local,download:""}},[a("van-button",{staticStyle:{width:"50%"},attrs:{plain:"",hairline:"",type:"primary",size:"small"}},[t._v("保存二维码")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.qrVisible,expression:"qrVisible == true"}],staticClass:"download"},[a("van-button",{staticStyle:{width:"50%"},attrs:{plain:"",hairline:"",type:"primary",size:"small"},on:{click:t.savePic}},[t._v("保存二维码")])],1),a("p",{staticClass:"qr_tips"},[t._v("请使用微信付款")]),a("p",{staticClass:"amount"},[a("span",{staticClass:"amount_tips"},[t._v("支付时请输入此金额")]),a("span",{staticClass:"amount_amount"},[a("strong",[a("label",[t._v("￥"+t._s(t.orderInfo.order_amount))])])])]),a("a",{staticClass:"open_btn",attrs:{href:"weixin://dl"}},[a("van-button",{attrs:{type:"primary",round:""}},[t._v("打开微信")])],1)]),a("div",{staticStyle:{"font-size":"14px",color:"#ff976a",margin:"8px 10px"}},[a("van-icon",{staticStyle:{"padding-top":"5px"},attrs:{name:"warning"}}),a("span",{staticStyle:{"vertical-align":"bottom","padding-left":"5px"}},[t._v("转账备注必填，否则不能及时到账")])],1),a("img",{staticStyle:{height:"20px",width:"100%"},attrs:{src:e("8385"),alt:""}}),a("div",{staticStyle:{padding:"0 24px 10px 24px"}},[t._m(1),t._m(2),a("p",{staticClass:"orderInfo"},[t._v(" 订单编号： "),a("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.orderInfo.order_no))])]),a("p",{staticClass:"orderInfo"},[t._v(" 有效期： "),a("span",[a("van-count-down",{staticStyle:{display:"inline-block",color:"#F56C6C"},attrs:{time:t.sec,format:" mm 分 ss 秒"},on:{finish:t.finish}})],1)])])])])},n=[function(){var t=this,a=t._self._c;return a("p",{staticClass:"title"},[a("strong",[t._v("订单信息")])])},function(){var t=this,a=t._self._c;return a("p",{staticClass:"title"},[a("strong",[t._v("订单状态")])])},function(){var t=this,a=t._self._c;return a("p",{staticClass:"orderInfo"},[t._v(" 订单类型： "),a("span",[t._v("微信")])])}],o=e("ade3"),r=(e("c194"),e("7744")),c=(e("66b9"),e("b650")),l=(e("e7e5"),e("d399")),d=(e("c3a6"),e("ad06")),p=(e("0653"),e("34e9")),m=(e("414a"),e("7a82")),u=(e("14d9"),e("e25e"),e("ac1f"),e("5319"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("9861"),e("d044")),f=e.n(u),v={components:(s={},Object(o["a"])(s,m["a"].name,m["a"]),Object(o["a"])(s,p["a"].name,p["a"]),Object(o["a"])(s,d["a"].name,d["a"]),Object(o["a"])(s,l["a"].name,l["a"]),Object(o["a"])(s,c["a"].name,c["a"]),Object(o["a"])(s,r["a"].name,r["a"]),s),data:function(){return{orderInfo:{amount:""},qrVisible:!1,sec:3e5,timer:""}},methods:{getData:function(){var t=this,a=this;a.$axios.get("Task/Comment_CommonController.getOrder?orderNo="+this.$route.query.time).then((function(a){a.data.data.status>2?(t.$router.push({path:"end"}),clearInterval(t.timer)):(t.orderInfo=a.data.data,t.sec=parseInt(new Date(t.orderInfo.end_time.replace(/\//g,"-")).getTime())-(new Date).getTime(),t.qr())})).catch((function(t){console.log(t)}))},finish:function(){this.sec=3e5},qr:function(){new f.a("qr",{width:195,height:195,text:this.orderInfo.pay_local})},savePic:function(){var t=document.getElementById("qr").getElementsByTagName("canvas"),a=document.createElement("a");a.href=t[0].toDataURL("image/png"),a.download="付款二维码",a.click(),l["a"].success("下载成功")},downCom:function(){this.downloadByBlob(this.orderInfo.pay_local,"收款二维码")},downloadByBlob:function(t,a){var e=this,s=new Image;s.setAttribute("crossOrigin","anonymous"),s.src=t,s.onload=function(){var t=document.createElement("canvas");t.width=s.width,t.height=s.height;var i=t.getContext("2d");i.drawImage(s,0,0,s.width,s.height),t.toBlob((function(t){var s=URL.createObjectURL(t);e.download(s,a),URL.revokeObjectURL(s)}))}},onCopy:function(){l["a"].success("复制成功")},onError:function(){l["a"].fail("复制失败请重试！！")}},created:function(){this.getData()},mounted:function(){this.timer=setInterval(this.getData,5e3)}},h=v,w=(e("5c60"),e("2877")),_=Object(w["a"])(h,i,n,!1,null,"562e2627",null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-234f89aa.e526f77a.js.map