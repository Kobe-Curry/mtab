import{ah as l,r as a,u as e,J as t,o as u,b as s,c as o,d as r,e as i,k as d,h as n,G as c,j as v,a3 as p,i as m,v as x,aA as g,q as b,p as f,m as h,F as w,f as y,Z as k,H as _}from"./index.1713442796762.js";const V={class:"customBox pb-6"},C={class:"flex gap-4 w-full"},j={class:"flex gap-4 w-full"},z={class:"col-span-2 h-16 flex"},U={class:"iconsel absolute z-10"},G=["src"],I={class:"iconsel absolute z-10"},E=["src"],L={class:"bgColorPicker"},O=["onClick"],R={key:0,class:"touming"},P={key:0,style:{"font-size":"20px",color:"#ff0000",inset:"-5px 3px",position:"relative"}},S={key:0,style:{"font-size":"20px",color:"#d9d9d9",inset:"-5px 3px",position:"relative"}},q=i("span",{class:"ml-6 text-xs text-red-500"},"内嵌窗口形式打开，存在第三方兼容问题，请酌情使用",-1),A={class:"w-full xs:pl-20 mt-10 flex"},B={__name:"custom",props:{data:{type:Object}},setup(B){var F;const H=B,J={userid:l("user_id"),token:l("token")},M=window.innerWidth,W=["rgba(0,0,0,0)","#fff","rgb(22, 129, 255)","rgb(251, 190, 35)","rgb(252, 69, 72)","rgb(75, 60, 54)","rgb(125, 172, 104)","rgb(2, 51, 115)","rgb(200, 172, 112)","rgb(55, 33, 40)","rgb(5, 64, 146)"],Z=a(!1),D=a(1),K=l=>{D.value=l},N=a(!1),Q=e(),T={id:"",name:"",src:"",url:"",size:"1x1",type:"icon",sort:99999,app:0,bgColor:null,pageGroup:""},X=a(Object.assign({},T));(null==(F=H.data)?void 0:F.id)&&(X.value=H.data);const Y=async()=>{var l;N.value=!0;try{const l=await k({url:"/LinkStore/getIcon",method:"post",data:{url:X.value.url}});if(1===l.code)return X.value.src=l.data.src,X.value.name=l.data.name,void(N.value=!1)}catch(a){}try{const a=await k({url:"/api/getIcon",method:"post",data:{url:X.value.url}});1===a.code?(X.value.src=a.data.src,a.data.name&&(X.value.name=null==(l=a.data)?void 0:l.name.substring(0,20))):_.error(a.msg)}catch(a){console.error("Error fetching data:",a),_.error("获取网站数据失败,请手动设置")}N.value=!1},$=l=>{1===l.code?X.value.src=l.data.url:_.warning(l.msg)},ll=async()=>{if(""===X.value.name||""===X.value.url)return _.warning("请设置标签信息");if(N.value=!0,"tab"===X.value.url.slice(0,3)||1===X.value.app||"http"!==X.value.url.slice(0,4)&&(X.value.url="http://"+X.value.url),2===D.value)try{const l=await k({url:"/api/getIcon",method:"post",data:{avatar:X.value.name}});1===l.code&&(X.value.src=l.data.src)}catch(l){}""===X.value.id?(X.value.id="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(l){var a=16*Math.random()|0;return("x"==l?a:3&a|8).toString(16)})),X.value.pageGroup=Q.state.pageGroup,Q.state.link.push(X.value),Q.commit("updateLink")):(Q.commit("setLink",X.value),t.emit("refreshGroup")),N.value=!1,t.emit("closePlugin"),Z.value=!1};return t.on("linkEdit",((l={})=>{l&&(X.value=Object.assign({},T)),Z.value=!0})),u((()=>{t.off("linkEdit".open)})),(l,a)=>{const e=s("el-input"),t=s("el-button"),u=s("el-form-item"),k=s("el-upload"),_=s("el-icon"),B=s("el-color-picker"),F=s("el-switch"),H=s("el-form");return o(),r("div",V,[i("div",null,[d(H,{"label-position":v(M)<500?"top":"right","label-width":"80px",class:"w-full mt-4"},{default:n((()=>[d(u,{label:"标签网址"},{default:n((()=>[i("div",C,[d(e,{class:"input_div w-full",modelValue:X.value.url,"onUpdate:modelValue":a[0]||(a[0]=l=>X.value.url=l),"show-word-limit":"",maxlength:"255",placeholder:"请输入带http开头的网址"},null,8,["modelValue"]),d(t,{type:"primary",onClick:Y,loading:N.value},{default:n((()=>[c("获取图标")])),_:1},8,["loading"])])])),_:1}),d(u,{label:"标签名称"},{default:n((()=>[d(e,{maxlength:"100",class:"input_div","show-word-limit":"",modelValue:X.value.name,"onUpdate:modelValue":a[1]||(a[1]=l=>X.value.name=l),placeholder:"标签名称"},null,8,["modelValue"])])),_:1}),d(u,{label:"标签简介"},{default:n((()=>[d(e,{class:"input_div",maxlength:"200","show-word-limit":"",type:"textarea",rows:"2",modelValue:X.value.tips,"onUpdate:modelValue":a[2]||(a[2]=l=>X.value.tips=l),placeholder:"简单介绍标签（非必填）"},null,8,["modelValue"])])),_:1}),d(u,{label:"标签图标"},{default:n((()=>[i("div",j,[d(e,{class:"input_div",modelValue:X.value.src,"onUpdate:modelValue":a[3]||(a[3]=l=>X.value.src=l),placeholder:"请上传或粘贴标签图标地址,支持png,jpg,ico,svg,webp格式"},null,8,["modelValue"]),d(k,{class:"upload-demo","show-file-list":!1,"on-success":$,headers:J,action:v(p)+v(Q).state.site.upload},{default:n((()=>[d(t,{type:"danger"},{default:n((()=>[c("手动上传")])),_:1})])),_:1},8,["action"])])])),_:1}),d(u,{label:"选择图标"},{default:n((()=>[i("div",z,[X.value.src?(o(),r("div",{key:0,class:"relative",onClick:a[4]||(a[4]=l=>K(1))},[m(i("div",U,[d(_,null,{default:n((()=>[d(v(g))])),_:1})],512),[[x,1===D.value]]),i("img",{src:v(b)(X.value.src),class:"mr-3",style:f({width:"60px",height:"60px",backgroundColor:X.value.bgColor,borderRadius:"var(--iconRadius)"})},null,12,G)])):h("",!0),i("div",{class:"relative",onClick:a[5]||(a[5]=l=>K(2))},[m(i("div",I,[d(_,null,{default:n((()=>[d(v(g))])),_:1})],512),[[x,2===D.value]]),i("img",{src:v(p)+"/api/renderIco?seed="+X.value.name,class:"mr-3 bg-slate-100",style:{width:"60px",height:"60px","border-radius":"var(--iconRadius)"}},null,8,E)])])])),_:1}),d(u,{label:"背景颜色"},{default:n((()=>[i("ul",L,[(o(),r(w,null,y(W,(l=>i("li",{onClick:a=>{return e=l,void(X.value.bgColor=e);var e}},["rgba(0,0,0,0)"===l?(o(),r("div",R,[l===X.value.bgColor?(o(),r("b",P,"√")):h("",!0)])):(o(),r("div",{key:1,style:f({backgroundColor:l})},[l===X.value.bgColor?(o(),r("b",S,"√")):h("",!0)],4))],8,O))),64)),d(B,{"show-alpha":"",modelValue:X.value.bgColor,"onUpdate:modelValue":a[6]||(a[6]=l=>X.value.bgColor=l)},null,8,["modelValue"])])])),_:1}),d(u,{label:"内嵌窗口"},{default:n((()=>[d(F,{"active-value":1,"inactive-value":0,modelValue:X.value.app,"onUpdate:modelValue":a[7]||(a[7]=l=>X.value.app=l)},null,8,["modelValue"]),q])),_:1})])),_:1},8,["label-position"]),i("div",A,[d(t,{type:"primary",size:"large",class:"w-full",onClick:ll},{default:n((()=>[c("保存")])),_:1})])])])}}};export{B as default};