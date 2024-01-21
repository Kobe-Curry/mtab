import{r as l,u as a,q as e,o as t,b as u,c as s,d as o,e as r,k as i,h as d,a1 as n,j as c,V as v,i as p,v as m,am as x,p as g,m as b,F as f,f as h,X as y,L as w}from"./index.1705848582155.js";const k={class:"customBox"},_={class:"flex gap-4 w-full"},V={class:"flex gap-4 w-full"},C={class:"col-span-2 h-16 flex"},j={class:"iconsel absolute z-10"},z=["src"],U={class:"iconsel absolute z-10"},I=["src"],E={class:"bgColorPicker"},L=["onClick"],O={key:0,class:"touming"},R={key:0,style:{"font-size":"20px",color:"#ff0000",inset:"-5px 3px",position:"relative"}},P={key:0,style:{"font-size":"20px",color:"#d9d9d9",inset:"-5px 3px",position:"relative"}},S=r("span",{class:"ml-6 text-xs text-red-500"},"开启后会以程序内窗口形式打开，可能存在第三方禁止此方式访问",-1),q={class:"w-full pl-20 mt-10 flex pr-4"},B={__name:"custom",props:{data:{type:Object}},setup(B){var F;const G=B,M=["rgba(0,0,0,0)","#fff","rgb(22, 129, 255)","rgb(251, 190, 35)","rgb(252, 69, 72)","rgb(75, 60, 54)","rgb(125, 172, 104)","rgb(2, 51, 115)","rgb(200, 172, 112)","rgb(55, 33, 40)","rgb(5, 64, 146)"],X=l(!1),A=l(1),D=l=>{A.value=l},H=l(!1),J=a(),K={id:"",name:"",src:"",url:"",size:"1x1",type:"icon",sort:99999,app:0,bgColor:null},N=l(Object.assign({},K));(null==(F=G.data)?void 0:F.id)&&(N.value=G.data);const Q=async()=>{var l;H.value=!0;try{const l=await y({url:"/linkStore/getIcon",method:"post",data:{url:N.value.url}});if(1===l.code)return N.value.src=l.data.src,N.value.name=l.data.name,void(H.value=!1)}catch(a){}try{const a=await y({url:"/api/getIcon",method:"post",data:{url:N.value.url}});1===a.code?(N.value.src=a.data.src,a.data.name&&(N.value.name=null==(l=a.data)?void 0:l.name.substring(0,20))):w.error(a.msg)}catch(a){console.error("Error fetching data:",a),w.error("获取网站数据失败,请手动设置")}H.value=!1},T=l=>{1===l.code?N.value.src=l.data.url:w.error(l.msg)},W=async()=>{if(""===N.value.name||""===N.value.url)return w.warning("请设置标签信息");if(H.value=!0,"tab"===N.value.url.slice(0,3)||1===N.value.app||"http"!==N.value.url.slice(0,4)&&(N.value.url="http://"+N.value.url),2===A.value)try{const l=await y({url:"api/getIcon",method:"post",data:{avatar:N.value.name}});1===l.code&&(N.value.src=l.data.src)}catch(l){}""===N.value.id?(N.value.id="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(l){var a=16*Math.random()|0;return("x"==l?a:3&a|8).toString(16)})),J.state.link.push(N.value),J.commit("updateLink")):(J.commit("setLink",N.value),e.emit("refreshGroup")),H.value=!1,e.emit("closePlugin"),X.value=!1};return e.on("linkEdit",((l={})=>{l&&(N.value=Object.assign({},K)),X.value=!0})),t((()=>{e.off("linkEdit".open)})),(l,a)=>{const e=u("el-input"),t=u("el-button"),y=u("el-form-item"),w=u("el-upload"),B=u("el-icon"),F=u("el-color-picker"),G=u("el-switch"),X=u("el-form");return s(),o("div",k,[r("div",null,[i(X,{"label-position":"right","label-width":"80px",class:"w-full pr-4 mt-4"},{default:d((()=>[i(y,{label:"标签网址"},{default:d((()=>[r("div",_,[i(e,{class:"input_div w-full",modelValue:N.value.url,"onUpdate:modelValue":a[0]||(a[0]=l=>N.value.url=l),"show-word-limit":"",maxlength:"255",placeholder:"请输入带http开头的网址"},null,8,["modelValue"]),i(t,{type:"primary",onClick:Q,loading:H.value},{default:d((()=>[n("获取图标")])),_:1},8,["loading"])])])),_:1}),i(y,{label:"标签名称"},{default:d((()=>[i(e,{maxlength:"100",class:"input_div","show-word-limit":"",modelValue:N.value.name,"onUpdate:modelValue":a[1]||(a[1]=l=>N.value.name=l),placeholder:"标签名称"},null,8,["modelValue"])])),_:1}),i(y,{label:"标签简介"},{default:d((()=>[i(e,{class:"input_div",maxlength:"200","show-word-limit":"",type:"textarea",rows:"2",modelValue:N.value.tips,"onUpdate:modelValue":a[2]||(a[2]=l=>N.value.tips=l),placeholder:"简单介绍标签（非必填）"},null,8,["modelValue"])])),_:1}),i(y,{label:"标签图标"},{default:d((()=>[r("div",V,[i(e,{class:"input_div",modelValue:N.value.src,"onUpdate:modelValue":a[3]||(a[3]=l=>N.value.src=l),placeholder:"请上传或粘贴标签图标地址,支持png,jpg,ico,svg,webp格式"},null,8,["modelValue"]),i(w,{class:"upload-demo","show-file-list":!1,"on-success":T,action:c(v)+c(J).state.site.upload},{default:d((()=>[i(t,{type:"danger"},{default:d((()=>[n("手动上传")])),_:1})])),_:1},8,["action"])])])),_:1}),i(y,{label:"选择图标"},{default:d((()=>[r("div",C,[N.value.src?(s(),o("div",{key:0,class:"relative",onClick:a[4]||(a[4]=l=>D(1))},[p(r("div",j,[i(B,null,{default:d((()=>[i(c(x))])),_:1})],512),[[m,1===A.value]]),r("img",{src:N.value.src,class:"mr-3",style:g({width:"60px",height:"60px",backgroundColor:N.value.bgColor,borderRadius:"var(--iconRadius)"})},null,12,z)])):b("",!0),r("div",{class:"relative",onClick:a[5]||(a[5]=l=>D(2))},[p(r("div",U,[i(B,null,{default:d((()=>[i(c(x))])),_:1})],512),[[m,2===A.value]]),r("img",{src:c(v)+"/api/renderIco?seed="+N.value.name,class:"mr-3 bg-slate-100",style:{width:"60px",height:"60px","border-radius":"var(--iconRadius)"}},null,8,I)])])])),_:1}),i(y,{label:"背景颜色"},{default:d((()=>[r("ul",E,[(s(),o(f,null,h(M,(l=>r("li",{onClick:a=>{return e=l,void(N.value.bgColor=e);var e}},["rgba(0,0,0,0)"===l?(s(),o("div",O,[l===N.value.bgColor?(s(),o("b",R,"√")):b("",!0)])):(s(),o("div",{key:1,style:g({backgroundColor:l})},[l===N.value.bgColor?(s(),o("b",P,"√")):b("",!0)],4))],8,L))),64))]),i(F,{"show-alpha":"",modelValue:N.value.bgColor,"onUpdate:modelValue":a[6]||(a[6]=l=>N.value.bgColor=l)},null,8,["modelValue"])])),_:1}),i(y,{label:"内嵌窗口"},{default:d((()=>[i(G,{"active-value":1,"inactive-value":0,modelValue:N.value.app,"onUpdate:modelValue":a[7]||(a[7]=l=>N.value.app=l)},null,8,["modelValue"]),S])),_:1})])),_:1}),r("div",q,[i(t,{type:"primary",size:"large",class:"w-full",onClick:W},{default:d((()=>[n("保存")])),_:1})])])])}}};export{B as default};