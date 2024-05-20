import{r as e,a as l,u as a,b as t,K as o,c as u,d,e as s,i,F as r,f as n,v as c,k as p,h as m,g as v,m as f,Z as h,H as b,ao as g,ap as w,Y as y,n as x,x as V,j as _,al as k,l as C,ak as U,T as z,G as j,p as S,a3 as A,aq as O,a1 as L}from"./index.1713442796762.js";import{S as W}from"./sortable.esm.1713442796762.js";const E={class:"flex gap-2 h-full"},F={class:"flex flex-col flex-shrink-0 bg-white w-52 px-2 py-4 rounded-lg",style:{height:"calc(100vh - 30px)"}},I={class:"h-full relative overflow-y-scroll leftScrollBackground"},T={class:"space-y-1 mb-4",id:"list"},q=["onClick","data-id"],B={class:"flex items-center pr-1"},D={key:0,class:"flex items-center gap-2"},G={class:"sticky bottom-0 flex justify-center"},K={class:"linkstoreAdmin flex-1",style:{width:"calc(100% - 220px)"}},R={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},H={class:"ml-auto"},M={class:"mt-2 p-4 bg-white rounded-lg overflow-hidden w-full"},P=["src"],Y={style:{display:"flex","align-items":"center",width:"100%"}},Z=["src"],$=s("div",{class:"text-xs mt-1 text-red-500"},"* 如果用户在添加自定义标签时，如果商城有匹配的域名，则直接使用商城的标签信息，不会去抓取目标图标了。",-1),J={class:"w-full relative"},N={key:0,class:"absolute w-full flex-col flex justify-center items-center h-full bg-black z-20 bg-opacity-50 rounded-lg cursor-no-drop"},Q=[s("div",{class:"text-4xl font-bold text-white"}," 此功能属于高级版本请获取授权后使用 ",-1),s("a",{href:"https://mtab.cc/pricing.html",target:"_blank",class:"mt-6 text-xs p-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ml-8 text-white"},"获取订阅授权解锁更多功能",-1)],X={class:"border p-4 rounded-lg flex gap-x-4 w-full"},ee={class:"flex gap-x-2"},le={class:"border p-4 mt-4 rounded-lg flex gap-x-4 w-full"},ae={class:"bgColorPicker"},te=["onClick"],oe={key:0,class:"touming"},ue={key:0,style:{"font-size":"20px",color:"#ff0000",inset:"-5px 3px",position:"relative"}},de={key:0,style:{"font-size":"20px",color:"#d9d9d9",inset:"-5px 3px",position:"relative"}},se=s("div",{class:"mb-2"}," 分类名称 ",-1),ie={class:"flex mt-6 mb-2"},re={__name:"linkstore",setup(re){const ne=e(!1);let ce=null;const pe=e(0),me=e(!0),ve=e(),fe=e([]),he=e=>{fe.value=e},be=async()=>{await h({url:"/Link/refreshWebAppCache"}),b.success("用户端WebApp刷新完毕，用户刷新后可看到最新数据")};l((()=>{let e=document.getElementById("list");if(e){const l={animation:200,delay:500,delayOnTouchOnly:!0,draggable:".item",onUpdate:function(e){let l=ce.toArray(),a=[],t=l.length;l.forEach(((e,l)=>{a.push({id:parseInt(e),sort:t-l})})),h({url:"/LinkStore/sortFolder",method:"post",data:a}).then((e=>{e.code}))}};ce=W.create(e,l)}}));const ge={id:"",name:"",sort:0},we=e(Object.assign({},ge)),ye=e([]),xe=["rgba(0,0,0,0)","#fff","rgb(22, 129, 255)","rgb(251, 190, 35)","rgb(252, 69, 72)","rgb(75, 60, 54)","rgb(125, 172, 104)","rgb(2, 51, 115)","rgb(200, 172, 112)","rgb(55, 33, 40)","rgb(5, 64, 146)"],Ve=()=>{me.value=!0,h({url:"/LinkStore/getFolder"}).then((e=>{ye.value=e.data,ye.value.unshift({id:0,name:"全部标签"})})).finally((e=>{me.value=!1}))};Ve();const _e=e({name:"",area:""}),ke=()=>{b.success("还未建设完成，请耐心等待！")},Ce=(e="")=>{if(e){e=e.split(",");const l=[];return e.forEach((e=>{const a=ye.value.find((l=>l.id.toString()===e));a&&l.push(a.name)})),l.join(",")}return""},Ue=e(!1),ze=a(),je=e(!1),Se=e({}),Ae={immersion:0,width:1200,height:700,controllerColor:"#ffffff",maximize:1,minimization:1,resize:1,userEdit:0},Oe=()=>{Se.value={area:[],custom:Object.assign({},Ae)},pe.value>0&&(Se.value.area=[pe.value.toString()]),je.value=!0},Le=(e={})=>{we.value=0===e?Object.assign({},ge):Object.assign({},e),Ue.value=!0,setTimeout((()=>{document.querySelector(".autofocus input").click()}),200)},We=()=>{h({url:"/LinkStore/createFolder",method:"post",data:{type:"edit",info:we.value}}).then((e=>{b.success(e.msg),1===e.code&&(Ve(),Ue.value=!1)}))},Ee=e=>{y.confirm("是否删除选中的标签？","删除提示").then((l=>{h({url:"/LinkStore/del",method:"post",data:{ids:"object"==typeof e?e:[e]}}).then((e=>{b.success(e.msg),He()}))})).catch((()=>{b.warning("已取消操作")}))},Fe=()=>{if(fe.value.length>0){let e=[];fe.value.forEach((l=>{e.push(l.id)})),Ee(e)}},Ie=()=>{const l=e([]);let a=[];ye.value.forEach((e=>{a.push(g(w,{label:e.name,value:e.id}))})),y({title:"请选择移动的分类","close-on-click-modal":!1,draggable:!0,"custom-style":{width:"100%"},message:()=>g(O,{modelValue:l.value,multiple:!0,placeholder:"请选择移动的分类可多选",class:"w-full","onUpdate:modelValue":e=>{l.value=e}},(()=>a))}).then((e=>{let a={link:fe.value.map((e=>e.id)),area:l.value.join(",")};h({url:"/LinkStore/moveFolder",method:"post",data:a}).then((e=>{He(),b.success(e.msg)}))})).catch((e=>{b.warning("已取消操作")}))},Te=e=>{1===e.code&&(Se.value.src=e.data.url)};let qe=e(!1);const Be=async()=>{qe.value=!0;try{const e=await h({url:"/Api/getIcon",method:"post",data:{url:Se.value.url}});1===e.code?(Se.value.src=e.data.src,Se.value.tips=e.data.name.substring(0,30)):b.error("获取网站数据失败,请手动设置")}catch(e){console.error("Error fetching data:",e),b.error("获取网站数据失败,请手动设置")}qe.value=!1},De=()=>{let e=Object.assign({},Se.value);e.area&&(e.area=e.area.join(",")),h({url:"/LinkStore/add",method:"post",data:{form:e}}).then((e=>{b.success(e.msg),je.value=!1,He()}))},Ge=e({current_page:1,per_page:50,total:0,refresh(e){Ge.value.current_page=e,He()},sizes(e){Ge.value.per_page=e,He()}}),Ke=e([]),Re={order:"desc",prop:"id"},He=()=>{h({url:"/LinkStore/ListManager",method:"post",data:{search:_e.value,page:Ge.value.current_page,limit:Ge.value.per_page,sort:Re}}).then((e=>{Ke.value=e.data.data,Object.assign(Ge.value,e.data),ne.value=e.auth}))},Me=({column:e,prop:l,order:a})=>{let t="asc";"descending"===a&&(t="desc"),Re.order=t,Re.prop=l,He()};return He(),(e,l)=>{const a=t("el-icon"),g=t("el-button"),W=t("el-input"),re=t("el-tooltip"),ce=t("el-table-column"),ge=t("el-tag"),qe=t("el-table"),Re=t("el-pagination"),Pe=t("el-form-item"),Ye=t("el-upload"),Ze=t("el-switch"),$e=t("el-color-picker"),Je=t("el-input-number"),Ne=t("el-form"),Qe=t("el-dialog"),Xe=t("el-link"),el=o("loading");return u(),d(r,null,[s("div",E,[i((u(),d("div",F,[s("div",I,[i(s("div",T,[(u(!0),d(r,null,n(ye.value,(e=>(u(),v(z,null,{default:m((()=>[s("div",{onClick:l=>(e=>{pe.value=e.id,_e.value.area=e.id,He()})(e),"data-id":null==e?void 0:e.id,class:x(["relative item px-3 py-1.5 text-sm rounded-sm cursor-pointer flex overflow-hidden justify-between items-center",{"bg-slate-200 text-blue-400":pe.value==e.id}])},[s("div",B,[s("span",null,V(e.name),1)]),e.id?(u(),d("div",D,[p(a,{class:"hover:text-blue-600",onClick:C((l=>Le(e)),["stop"])},{default:m((()=>[p(_(k))])),_:2},1032,["onClick"]),p(a,{class:"cursor-move"},{default:m((()=>[p(_(U))])),_:1})])):f("",!0)],10,q)])),_:2},1024)))),256))],512),[[c,ye.value.length]]),i(s("div",G,[p(g,{class:"w-11/12",type:"primary",onClick:l[0]||(l[0]=e=>Le(0))},{default:m((()=>[j("创建标签分类")])),_:1})],512),[[c,!me.value]])])])),[[el,me.value]]),s("div",K,[s("div",R,[p(W,{modelValue:_e.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>_e.value.name=e),style:{width:"200px"},placeholder:"名称搜索",clearable:""},null,8,["modelValue"]),p(g,{onClick:He,type:"primary"},{default:m((()=>[j("搜索")])),_:1}),p(g,{type:"danger",onClick:Oe},{default:m((()=>[j("添加新标签")])),_:1}),p(g,{style:{background:"lightseagreen",color:"#F3F3F3"},round:"",onClick:ke},{default:m((()=>[j(" 公共标签库 ")])),_:1}),s("div",H,[ne.value?(u(),v(re,{key:0,content:"当你的WebApp有变更时，<br/>可以通过此按钮强制刷新所有用户的WebApp缓存，<br/>以保证用户看到最新的WebApp内容","raw-content":""},{default:m((()=>[p(g,{type:"success",round:"",onClick:be},{default:m((()=>[j("刷新用户WebApp缓存")])),_:1})])),_:1})):f("",!0),fe.value.length>0?(u(),v(g,{key:1,type:"danger",onClick:Fe,round:""},{default:m((()=>[j("批量删除")])),_:1})):f("",!0),fe.value.length>0?(u(),v(g,{key:2,type:"primary",onClick:Ie,round:""},{default:m((()=>[j("批量分类")])),_:1})):f("",!0)])]),s("div",M,[p(qe,{onSelectionChange:he,ref_key:"multipleTableRef",ref:ve,onSortChange:Me,height:"calc(100vh - 190px)",stripe:"",data:Ke.value},{default:m((()=>[p(ce,{type:"selection",width:"30",align:"center"}),p(ce,{fixed:"left",sortable:"custom",prop:"id",label:"ID",align:"center",width:"100"}),p(ce,{prop:"name",label:"网站名称",sortable:"custom",align:"center",width:"200"}),p(ce,{prop:"src",label:"LOGO",align:"center",width:"80"},{default:m((e=>[s("img",{style:S([{backgroundColor:e.row.bgColor},{"max-width":"100%","max-height":"100%"}]),src:e.row.src,class:"logoiconRadius",alt:"Logo"},null,12,P)])),_:1}),p(ce,{prop:"url","show-overflow-tooltip":"",label:"域名链接",align:"center",width:"260"}),p(ce,{prop:"domain",label:"Domain",align:"center",width:"260"}),p(ce,{prop:"app",label:"是否WebApp",align:"center",width:"140"},{default:m((e=>[1===e.row.app?(u(),v(ge,{key:0},{default:m((()=>[j("WebApp")])),_:1})):(u(),v(ge,{key:1,type:"info"},{default:m((()=>[j("标签")])),_:1}))])),_:1}),p(ce,{prop:"area",width:"200px","show-overflow-tooltip":"",label:"分类",align:"center"},{default:m((e=>[j(V(Ce(e.row.area)),1)])),_:1}),p(ce,{prop:"tips",label:"简介",align:"center",width:"300"}),p(ce,{sortable:"custom",prop:"install_num",label:"安装量(次)",align:"center",width:"150"}),p(ce,{prop:"create_time",sortable:"custom",label:"创建时间",align:"center",width:"200"}),p(ce,{fixed:"right",label:"操作",align:"center",width:"150"},{default:m((e=>[p(g,{type:"primary",size:"small",onClick:l=>(e=>{Se.value=Object.assign({},e),Se.value.custom=Object.assign(Object.assign({},Ae),e.custom);const l=e.area.split(",");l.length>0&&""!==l[0]?Se.value.area=l:Se.value.area=[],je.value=!0})(e.row)},{default:m((()=>[j("操作")])),_:2},1032,["onClick"]),p(g,{type:"danger",size:"small",onClick:l=>Ee(e.row.id)},{default:m((()=>[j("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),p(Re,{"page-size":Ge.value.per_page,onSizeChange:Ge.value.sizes,onCurrentChange:Ge.value.refresh,"page-sizes":[15,20,30,40,50,100],class:"mt-6",layout:"sizes,total,prev,pager,jumper",total:Ge.value.total},null,8,["page-size","onSizeChange","onCurrentChange","total"])]),p(Qe,{modelValue:je.value,"onUpdate:modelValue":l[22]||(l[22]=e=>je.value=e),title:"编辑标签",width:1e3,"close-on-click-modal":!1,top:"5vh"},{default:m((()=>[p(Ne,{modelValue:Se.value,"onUpdate:modelValue":l[21]||(l[21]=e=>Se.value=e),"label-position":"top"},{default:m((()=>[p(Pe,{label:"名称"},{default:m((()=>[p(W,{modelValue:Se.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>Se.value.name=e),"show-word-limit":"",maxlength:"50",placeholder:"请输入网站title或名称"},null,8,["modelValue"])])),_:1}),p(Pe,{label:"网址"},{default:m((()=>[p(W,{modelValue:Se.value.url,"onUpdate:modelValue":l[3]||(l[3]=e=>Se.value.url=e),"show-word-limit":"",maxlength:"251",placeholder:"请输入网址,请携带http协议"},null,8,["modelValue"])])),_:1}),p(Pe,{label:"logo"},{default:m((()=>[s("div",Y,[Se.value.src?(u(),d("img",{key:0,src:Se.value.src,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,Z)):f("",!0),p(W,{modelValue:Se.value.src,"onUpdate:modelValue":l[4]||(l[4]=e=>Se.value.src=e),placeholder:"标签图标地址(120x120)px尺寸最佳"},{append:m((()=>[p(Ye,{class:"upload-demo","show-file-list":!1,"on-success":Te,action:_(A)+_(ze).state.site.upload},{default:m((()=>[p(g,{type:"primary"},{default:m((()=>[j("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"]),p(g,{type:"primary",style:{width:"100px","margin-left":"15px"},onClick:Be},{default:m((()=>[j("抓取图标")])),_:1})])])),_:1}),p(Pe,{label:"域名"},{default:m((()=>[p(W,{modelValue:Se.value.domain,"onUpdate:modelValue":l[5]||(l[5]=e=>Se.value.domain=e),"show-word-limit":"",maxlength:"251",placeholder:"请输入域名多个可以用,隔开。域名不要携带http协议"},null,8,["modelValue"]),$])),_:1}),p(Pe,{label:"分类"},{default:m((()=>[p(_(O),{modelValue:Se.value.area,"onUpdate:modelValue":l[6]||(l[6]=e=>Se.value.area=e),multiple:!0,placeholder:"分类选择可多选",class:"w-full"},{default:m((()=>[(u(!0),d(r,null,n(ye.value,(e=>(u(),v(z,{key:e.id},{default:m((()=>[e.id>0?(u(),v(_(w),{key:0,label:e.name,value:`${e.id}`},null,8,["label","value"])):f("",!0)])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),p(Pe,{label:"简介"},{default:m((()=>[p(W,{modelValue:Se.value.tips,"onUpdate:modelValue":l[7]||(l[7]=e=>Se.value.tips=e),placeholder:"请简单介绍一下建议30字符以内","show-word-limit":"",maxlength:"200"},null,8,["modelValue"])])),_:1}),p(Pe,{label:"是否为WebApp"},{default:m((()=>[p(Ze,{"active-value":1,"inactive-value":0,modelValue:Se.value.app,"onUpdate:modelValue":l[8]||(l[8]=e=>Se.value.app=e)},null,8,["modelValue"])])),_:1}),1===Se.value.app?(u(),v(Pe,{key:0,label:"WebApp自定义配置（可选配置项）"},{default:m((()=>[s("div",J,[ne.value?f("",!0):(u(),d("div",N,Q)),s("div",X,[p(Pe,{class:"w-full",label:"窗口宽度"},{default:m((()=>[p(W,{disabled:!ne.value,modelValue:Se.value.custom.width,"onUpdate:modelValue":l[9]||(l[9]=e=>Se.value.custom.width=e),placeholder:"窗口打开时默认宽度尺寸"},{append:m((()=>[j("px")])),_:1},8,["disabled","modelValue"])])),_:1}),p(Pe,{class:"w-full",label:"窗口高度"},{default:m((()=>[p(W,{disabled:!ne.value,modelValue:Se.value.custom.height,"onUpdate:modelValue":l[10]||(l[10]=e=>Se.value.custom.height=e),placeholder:"窗口打开时默认高度尺寸"},{append:m((()=>[j("px")])),_:1},8,["disabled","modelValue"])])),_:1}),p(Pe,{class:"w-full",label:"控制栏颜色"},{default:m((()=>[s("div",ee,[p(W,{disabled:!ne.value,modelValue:Se.value.custom.controllerColor,"onUpdate:modelValue":l[11]||(l[11]=e=>Se.value.custom.controllerColor=e),placeholder:"请输入hex格式颜色值"},null,8,["disabled","modelValue"]),p($e,{"color-format":"hex",modelValue:Se.value.custom.controllerColor,"onUpdate:modelValue":l[12]||(l[12]=e=>Se.value.custom.controllerColor=e)},null,8,["modelValue"])])])),_:1}),p(Pe,{class:"w-full",label:"窗口模式"},{default:m((()=>[p(_(O),{disabled:!ne.value,modelValue:Se.value.custom.immersion,"onUpdate:modelValue":l[13]||(l[13]=e=>Se.value.custom.immersion=e)},{default:m((()=>[p(_(w),{label:"标准窗口",value:0}),p(_(w),{label:"沉浸式窗口",value:1})])),_:1},8,["disabled","modelValue"])])),_:1})]),s("div",le,[p(Pe,{class:"w-full",label:"最小化支持"},{default:m((()=>[p(_(O),{disabled:!ne.value,modelValue:Se.value.custom.minimization,"onUpdate:modelValue":l[14]||(l[14]=e=>Se.value.custom.minimization=e)},{default:m((()=>[p(_(w),{label:"不支持",value:0}),p(_(w),{label:"支持",value:1})])),_:1},8,["disabled","modelValue"])])),_:1}),p(Pe,{class:"w-full",label:"最大化支持"},{default:m((()=>[p(_(O),{disabled:!ne.value,modelValue:Se.value.custom.maximize,"onUpdate:modelValue":l[15]||(l[15]=e=>Se.value.custom.maximize=e)},{default:m((()=>[p(_(w),{label:"不支持",value:0}),p(_(w),{label:"支持",value:1})])),_:1},8,["disabled","modelValue"])])),_:1}),p(Pe,{class:"w-full",label:"尺寸调整"},{default:m((()=>[p(_(O),{disabled:!ne.value,modelValue:Se.value.custom.resize,"onUpdate:modelValue":l[16]||(l[16]=e=>Se.value.custom.resize=e)},{default:m((()=>[p(_(w),{label:"不支持",value:0}),p(_(w),{label:"支持",value:1})])),_:1},8,["disabled","modelValue"])])),_:1}),p(Pe,{class:"w-full",label:"用户编辑权限"},{default:m((()=>[p(_(O),{disabled:!ne.value,modelValue:Se.value.custom.userEdit,"onUpdate:modelValue":l[17]||(l[17]=e=>Se.value.custom.userEdit=e)},{default:m((()=>[p(_(w),{label:"不允许",value:0}),p(_(w),{label:"允许编辑",value:1})])),_:1},8,["disabled","modelValue"])])),_:1})])])])),_:1})):f("",!0),p(Pe,{label:"背景颜色"},{default:m((()=>[s("ul",ae,[(u(),d(r,null,n(xe,(e=>s("li",{onClick:l=>{return a=e,void(Se.value.bgColor=a);var a}},["rgba(0,0,0,0)"===e?(u(),d("div",oe,[e===Se.value.bgColor?(u(),d("b",ue,"√")):f("",!0)])):(u(),d("div",{key:1,style:S({backgroundColor:e})},[e===Se.value.bgColor?(u(),d("b",de,"√")):f("",!0)],4))],8,te))),64))]),p($e,{"show-alpha":"",modelValue:Se.value.bgColor,"onUpdate:modelValue":l[18]||(l[18]=e=>Se.value.bgColor=e)},null,8,["modelValue"])])),_:1}),p(Pe,{label:"标签添加量（热度）"},{default:m((()=>[p(Je,{modelValue:Se.value.install_num,"onUpdate:modelValue":l[19]||(l[19]=e=>Se.value.install_num=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1}),p(Pe,{label:"排行"},{default:m((()=>[p(Je,{modelValue:Se.value.hot,"onUpdate:modelValue":l[20]||(l[20]=e=>Se.value.hot=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),p(g,{type:"primary",class:"w-full",onClick:De},{default:m((()=>[j("保存")])),_:1})])),_:1},8,["modelValue"])])]),p(Qe,{modelValue:Ue.value,"onUpdate:modelValue":l[26]||(l[26]=e=>Ue.value=e),width:"500px",title:"标签分类编辑"},{default:m((()=>[se,p(W,{onKeypress:l[23]||(l[23]=L(C((()=>{}),["stop"]),["enter"])),modelValue:we.value.name,"onUpdate:modelValue":l[24]||(l[24]=e=>we.value.name=e),class:"autofocus mb-4","show-word-limit":"",maxlength:"50",placeholder:"请输入分类名称"},null,8,["modelValue"]),we.value.id?(u(),v(Xe,{key:0,type:"danger",onClick:l[25]||(l[25]=e=>{return l={id:we.value.id},void y.confirm("是否删除当前标签分类","危险警告").then((e=>{h({url:"/LinkStore/createFolder",method:"post",data:{type:"del",id:l.id}}).then((e=>{b.success(e.msg),1===e.code&&(Ve(),Ue.value=!1)}))}));var l})},{default:m((()=>[j("删除该分类 ")])),_:1})):f("",!0),s("div",ie,[p(g,{class:"m-auto w-2/5",type:"primary",onClick:We},{default:m((()=>[j("保存")])),_:1})])])),_:1},8,["modelValue"])],64)}}};export{re as default};