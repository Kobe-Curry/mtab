import{r as l,at as e,u as a,e as t,D as s,a as u,b as o,d as i,f as r,l as d,i as n,J as c,k as v,X as p,j as m,aU as b,v as g,p as f,t as h,q as x,F as _,g as k,h as w,y,W as V,K as C}from"./index.2b069cd0.1728957723508.js";import{u as j}from"./index.1a2caf2f.1728957723508.js";import{T as U}from"./textIcon.0916bdb5.1728957723508.js";import"./wapp.a63bf8f2.1728957723508.js";import"./sortable.esm.be6d7286.1728957723508.js";import"./dialog.6641baf3.1728957723508.js";import"./app.5951bbb3.1728957723508.js";import"./index.be48ffa7.1728957723508.js";import"./wangEditor.78bb1bc8.1728957723508.js";import"./defavatar.b7fde12c.1728957723508.js";import"./noLogo.3fb1a3c4.1728957723508.js";/* empty css                                                                 */const z={class:"customBox relative pb-6 overflow-y-scroll"},I={class:"flex gap-4 w-full"},L={class:"flex gap-4 w-full"},E={class:"col-span-2 h-16 flex"},G={class:"iconsel absolute z-20"},O={class:"iconsel absolute z-10"},R=["src"],B={class:"iconsel absolute z-10"},P=["src"],S={class:"bgColorPicker"},T=["onClick"],W={key:0,class:"touming"},q={key:0,style:{"font-size":"20px",color:"#ff0000",inset:"-5px 3px",position:"relative"}},D={key:0,style:{"font-size":"20px",color:"#d9d9d9",inset:"-5px 3px",position:"relative"}},F={class:"whitespace-break-spaces",style:{"line-height":"16px"}},J={class:"w-full xs:pl-20 mt-6 flex"},K={__name:"custom",props:{data:{type:Object,default:()=>{}}},setup(K){var X;const A=l(""),H=l(!1),M={userid:e("user_id"),token:e("token"),"Up-Type":"icon"},N=window.innerWidth,Q=["rgba(0,0,0,0)","#fff","rgb(22, 129, 255)","rgb(251, 190, 35)","rgb(252, 69, 72)","rgb(75, 60, 54)","rgb(125, 172, 104)","rgb(2, 51, 115)","rgb(200, 172, 112)","rgb(55, 33, 40)","rgb(5, 64, 146)"],Y=l(!1),Z=l(2),$=l=>{Z.value=l},ll=K,el=l(!1),al=a(),tl={id:"",name:"",src:"",url:"",size:"1x1",type:"icon",sort:99999,app:0,tips:"",bgColor:null,pageGroup:""},sl=l(Object.assign({},tl));(null==(X=ll.data)?void 0:X.id)&&(sl.value=Object.assign(sl.value,ll.data)),/^txt:/.test(sl.value.src)?(A.value=sl.value.src.replace(/txt:/,""),sl.value.src="",Z.value=3):sl.value.src&&(Z.value=1);const ul=async()=>{var l;el.value=!0;try{const l=await V({url:"/LinkStore/getIcon",method:"post",data:{url:sl.value.url}});if(1===l.code)return sl.value.src=l.data.src,sl.value.name=l.data.name,el.value=!1,void(Z.value=1)}catch(e){}try{const e=await V({url:"/api/getIcon",method:"post",data:{url:sl.value.url}});1===e.code?(sl.value.src=e.data.src,e.data.name&&(sl.value.name=null==(l=e.data)?void 0:l.name.substring(0,20)),Z.value=1):C.error(e.msg)}catch(e){console.error("Error fetching data:",e),C.error("获取网站数据失败,请手动设置")}el.value=!1},ol=l=>{1===l.code?(sl.value.src=l.data.url,Z.value=1):C.warning(l.msg)},il=async()=>{if(""===sl.value.name||""===sl.value.url)return C.warning("请设置标签信息");if(el.value=!0,"tab"===sl.value.url.slice(0,3)||1===sl.value.app||"http"!==sl.value.url.slice(0,4)&&(sl.value.url="http://"+sl.value.url),3===Z.value&&(sl.value.src="txt:"+A.value),2===Z.value)try{const l=await V({url:"/api/getIcon",method:"post",data:{avatar:sl.value.url}});1===l.code&&(sl.value.src=l.data.src)}catch(l){}""===sl.value.id?(H.value&&V({url:"/LinkStore/push",method:"post",data:sl.value}).finally((l=>{})),sl.value.id=j(),sl.value.pageGroup=al.state.pageGroup,al.state.link.push(sl.value),al.commit("updateLink")):(al.commit("setLink",sl.value),t.emit("refreshGroup")),el.value=!1,t.emit("closePlugin"),Y.value=!1};return t.on("linkEdit",((l={})=>{l&&(sl.value=Object.assign({},tl)),Y.value=!0})),s((()=>{t.off("linkEdit".open)})),(l,e)=>{const a=u("el-input"),t=u("el-button"),s=u("el-form-item"),V=u("el-upload"),C=u("el-icon"),j=u("el-color-picker"),K=u("el-switch"),X=u("el-checkbox"),Y=u("el-form");return o(),i("div",z,[r("div",null,[d(Y,{"label-position":v(N)<500?"top":"right","label-width":"80px",class:"w-full mt-4"},{default:n((()=>[d(s,{label:"标签网址"},{default:n((()=>[r("div",I,[d(a,{class:"input_div w-full",modelValue:sl.value.url,"onUpdate:modelValue":e[0]||(e[0]=l=>sl.value.url=l),"show-word-limit":"",maxlength:"1000",placeholder:"请输入带http开头的网址"},null,8,["modelValue"]),d(t,{type:"primary",onClick:ul,loading:el.value},{default:n((()=>e[11]||(e[11]=[c("获取图标")]))),_:1},8,["loading"])])])),_:1}),d(s,{label:"标签名称"},{default:n((()=>[d(a,{maxlength:"100",class:"input_div","show-word-limit":"",modelValue:sl.value.name,"onUpdate:modelValue":e[1]||(e[1]=l=>sl.value.name=l),placeholder:"标签名称"},null,8,["modelValue"])])),_:1}),d(s,{label:"标签简介"},{default:n((()=>[d(a,{class:"input_div",maxlength:"200","show-word-limit":"",rows:"1",modelValue:sl.value.tips,"onUpdate:modelValue":e[2]||(e[2]=l=>sl.value.tips=l),placeholder:"简单介绍标签（非必填）"},null,8,["modelValue"])])),_:1}),d(s,{label:"文字图标"},{default:n((()=>[d(a,{class:"input_div",maxlength:"200","show-word-limit":"",rows:"1",modelValue:A.value,"onUpdate:modelValue":e[3]||(e[3]=l=>A.value=l),placeholder:"请输入1-5个字符的图标内容（可选项，当标签图标获取不到可使用文字图标代替）"},null,8,["modelValue"])])),_:1}),d(s,{label:"标签图标"},{default:n((()=>[r("div",L,[d(a,{class:"input_div",modelValue:sl.value.src,"onUpdate:modelValue":e[4]||(e[4]=l=>sl.value.src=l),placeholder:"请上传或粘贴标签图标地址,支持png,jpg,ico,svg,webp格式"},null,8,["modelValue"]),d(V,{class:"upload-demo","show-file-list":!1,"on-success":ol,headers:M,action:v(p)+v(al).state.site.upload},{default:n((()=>[d(t,{type:"danger"},{default:n((()=>e[12]||(e[12]=[c("手动上传")]))),_:1})])),_:1},8,["action"])])])),_:1}),d(s,{label:"选择图标"},{default:n((()=>[r("div",E,[A.value?(o(),i("div",{key:0,class:"relative mr-3",onClick:e[5]||(e[5]=l=>$(3))},[m(r("div",G,[d(C,null,{default:n((()=>[d(v(b))])),_:1})],512),[[g,3===Z.value]]),d(U,{style:{width:"60px",height:"60px",border:"2px solid #d9d9d9"},text:"txt:"+A.value,bgColor:sl.value.bgColor},null,8,["text","bgColor"])])):f("",!0),sl.value.src?(o(),i("div",{key:1,class:"relative",onClick:e[6]||(e[6]=l=>$(1))},[m(r("div",O,[d(C,null,{default:n((()=>[d(v(b))])),_:1})],512),[[g,1===Z.value]]),r("img",{src:v(h)(sl.value.src),class:"mr-3",style:x({width:"60px",height:"60px",backgroundColor:sl.value.bgColor,borderRadius:"var(--iconRadius)"})},null,12,R)])):f("",!0),r("div",{class:"relative",onClick:e[7]||(e[7]=l=>$(2))},[m(r("div",B,[d(C,null,{default:n((()=>[d(v(b))])),_:1})],512),[[g,2===Z.value]]),r("img",{src:v(p)+"/api/renderIco?seed="+encodeURI(sl.value.url),class:"mr-3 bg-slate-100",style:{width:"60px",height:"60px","border-radius":"var(--iconRadius)"}},null,8,P)])])])),_:1}),d(s,{label:"背景颜色"},{default:n((()=>[r("ul",S,[(o(),i(_,null,k(Q,(l=>r("li",{onClick:e=>{return a=l,void(sl.value.bgColor=a);var a}},["rgba(0,0,0,0)"===l?(o(),i("div",W,[l===sl.value.bgColor?(o(),i("b",q,"√")):f("",!0)])):(o(),i("div",{key:1,style:x({backgroundColor:l})},[l===sl.value.bgColor?(o(),i("b",D,"√")):f("",!0)],4))],8,T))),64)),d(j,{"show-alpha":"",modelValue:sl.value.bgColor,"onUpdate:modelValue":e[8]||(e[8]=l=>sl.value.bgColor=l)},null,8,["modelValue"])])])),_:1}),d(s,{label:"内嵌窗口"},{default:n((()=>[d(K,{"active-value":1,"inactive-value":0,modelValue:sl.value.app,"onUpdate:modelValue":e[9]||(e[9]=l=>sl.value.app=l)},null,8,["modelValue"]),e[13]||(e[13]=r("span",{class:"ml-6 text-xs text-red-500"},"内嵌窗口形式打开，第三方可能不兼容",-1))])),_:1}),"1"===v(al).state.site.is_push_link_store&&""===sl.value.id?(o(),w(s,{key:0,label:"推送标签"},{default:n((()=>[d(X,{checked:Boolean(parseInt(v(al).state.site.is_push_link_status)),modelValue:H.value,"onUpdate:modelValue":e[10]||(e[10]=l=>H.value=l)},{default:n((()=>[r("div",F,y(v(al).state.site.is_push_link_store_tips),1)])),_:1},8,["checked","modelValue"])])),_:1})):f("",!0)])),_:1},8,["label-position"]),r("div",J,[d(t,{type:"primary",size:"default",class:"w-full",onClick:il},{default:n((()=>e[14]||(e[14]=[c("保存")]))),_:1})])])])}}};export{K as default};