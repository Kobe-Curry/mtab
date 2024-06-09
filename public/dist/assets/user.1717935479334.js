import{_ as e}from"./defavatar.1717935479334.js";import{r as l,b as a,c as t,d as o,e as i,k as d,h as r,S as n,G as u,j as s,q as p,g as m,m as c,V as g,H as v}from"./index.1717935479334.js";const h={class:"userManager"},f={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},w={class:"mt-4 flex gap-x-4"},_={class:"bg-white p-4 rounded-lg overflow-hidden w-full"},b=["src"],V={key:1,class:"rounded-full m-auto",src:e,style:{width:"40px",height:"40px"}},y={class:"grid grid-cols-2 grid-rows-subgrid gap-y-2 gap-x-2"},k={__name:"user",setup(e){const k={mail:"",password:"",manager:0,nickname:"",status:0},x=l(!1),z=l(Object.assign({},k)),C=l(!1),U=l([]),j=l({mail:"",nickname:""}),I=()=>{z.value=l({mail:"",password:"",manager:""}).value,C.value=!0},O=()=>{n({url:"/admin/userUpdate",method:"post",data:z.value}).then((e=>{1===e.code&&(C.value=!1,D()),v.success(e.msg)}))},S=l({current_page:1,per_page:50,total:0,refresh(e){S.value.current_page=e,D()},sizes(e){S.value.per_page=e,D()}}),q=l([]),P={order:"desc",prop:"id"},D=()=>{n({url:"/admin/UserList",method:"post",data:{search:j.value,page:S.value.current_page,limit:S.value.per_page,sort:P}}).then((e=>{let l=e.data;q.value=l.data,Object.assign(S.value,l)}))},L=({column:e,prop:l,order:a})=>{let t="asc";"descending"===a&&(t="desc"),P.order=t,P.prop=l,D()};return D(),(e,l)=>{const P=a("el-input"),Q=a("el-button"),A=a("el-table-column"),G=a("el-tag"),H=a("el-table"),M=a("el-pagination"),R=a("el-dialog"),B=a("el-form-item"),E=a("el-option"),F=a("el-select"),J=a("el-form"),K=a("el-link");return t(),o("div",h,[i("div",f,[d(P,{modelValue:j.value.mail,"onUpdate:modelValue":l[0]||(l[0]=e=>j.value.mail=e),style:{width:"200px"},placeholder:"邮箱",clearable:""},null,8,["modelValue"]),d(P,{modelValue:j.value.nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>j.value.nickname=e),style:{width:"200px"},placeholder:"昵称",clearable:""},null,8,["modelValue"]),d(Q,{onClick:D,type:"primary"},{default:r((()=>[u("搜索")])),_:1}),d(Q,{type:"danger",onClick:I},{default:r((()=>[u("添加新用户")])),_:1})]),i("div",w,[i("div",_,[d(H,{onSortChange:L,data:q.value,height:"calc(100vh - 200px)"},{default:r((()=>[d(A,{prop:"id",sortable:"custom",label:"用户ID",align:"center","min-width":"100"}),d(A,{prop:"avatar",label:"头像",align:"center","min-width":"70"},{default:r((e=>[e.row.avatar?(t(),o("img",{key:0,class:"rounded-full m-auto",src:s(p)(e.row.avatar),style:{width:"40px",height:"40px"}},null,8,b)):(t(),o("img",V))])),_:1}),d(A,{prop:"nickname","show-overflow-tooltip":"",label:"昵称",align:"center","min-width":"200"}),d(A,{prop:"mail",label:"邮箱",align:"center","min-width":"200"}),d(A,{prop:"login_ip",label:"登录IP",align:"center","min-width":"200"}),d(A,{prop:"login_time",sortable:"custom",label:"上次登录时间",align:"center","min-width":"200"}),d(A,{prop:"manager",label:"账号状态",align:"center","min-width":"100"},{default:r((e=>[0===e.row.status?(t(),m(G,{key:0,type:"info",size:"small"},{default:r((()=>[u("正常")])),_:1})):c("",!0),1===e.row.status?(t(),m(G,{key:1,type:"danger",size:"small"},{default:r((()=>[u("冻结封锁")])),_:1})):c("",!0)])),_:1}),d(A,{prop:"register_ip",label:"注册IP",align:"center","min-width":"200"}),d(A,{prop:"qq_open_id","show-overflow-tooltip":"",label:"QQ OpenId",align:"center","min-width":"200"}),d(A,{prop:"create_time",sortable:"custom",label:"注册时间",align:"center","min-width":"200"}),d(A,{prop:"login_fail_count",sortable:"custom",label:"登录失败次数",align:"center","min-width":"150"}),d(A,{prop:"manager",label:"权限",align:"center","min-width":"100"},{default:r((e=>[0===e.row.manager?(t(),m(G,{key:0,type:"info",size:"small"},{default:r((()=>[u("用户")])),_:1})):c("",!0),1===e.row.manager?(t(),m(G,{key:1,type:"danger",size:"small"},{default:r((()=>[u("管理员")])),_:1})):c("",!0)])),_:1}),d(A,{fixed:"right",label:"操作","min-width":"200",align:"center"},{default:r((e=>[i("div",y,[d(Q,{type:"primary",onClick:l=>{return a=e.row,z.value=Object.assign({},k,a),void(C.value=!0);var a},class:"w-full",style:{"margin-left":"0"},size:"small"},{default:r((()=>[u(" 操作 ")])),_:2},1032,["onClick"]),d(Q,{type:"info",onClick:l=>{return a=e.row,x.value=!0,U.value=[],void n({url:"/admin/userLoginRecord",method:"post",data:{user_id:a.id}}).then((e=>{1===e.code&&(U.value=e.data)}));var a},class:"w-full",style:{"margin-left":"0"},size:"small"},{default:r((()=>[u("登录记录 ")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),d(M,{"page-sizes":[15,20,30,40,50,100],onCurrentChange:S.value.refresh,class:"mt-6",layout:"sizes,total,prev,pager,jumper","page-size":S.value.per_page,onSizeChange:S.value.sizes,total:S.value.total},null,8,["onCurrentChange","page-size","onSizeChange","total"])])]),d(R,{title:"登录记录(最近100条记录)",modelValue:x.value,"onUpdate:modelValue":l[2]||(l[2]=e=>x.value=e),width:1e3,"align-center":"","close-on-click-modal":!1},{default:r((()=>[d(H,{border:"",data:U.value,height:"calc(100vh - 203px)",he:""},{default:r((()=>[d(A,{prop:"ip",label:"登录IP",align:"center",width:"180"}),d(A,{prop:"create_time",label:"登录时间",align:"center",width:"180"}),d(A,{prop:"user_agent",label:"User-Agent",align:"center","min-width":"200"})])),_:1},8,["data"])])),_:1},8,["modelValue"]),d(R,{title:"编辑用户",modelValue:C.value,"onUpdate:modelValue":l[10]||(l[10]=e=>C.value=e),width:600,"align-center":"","close-on-click-modal":!1},{default:r((()=>[d(J,{modelValue:z.value,"onUpdate:modelValue":l[8]||(l[8]=e=>z.value=e),"label-width":"100px","label-position":"top"},{default:r((()=>[d(B,{label:"邮箱"},{default:r((()=>[d(P,{modelValue:z.value.mail,"onUpdate:modelValue":l[3]||(l[3]=e=>z.value.mail=e),placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),d(B,{label:"昵称"},{default:r((()=>[d(P,{modelValue:z.value.nickname,"onUpdate:modelValue":l[4]||(l[4]=e=>z.value.nickname=e),placeholder:"设置昵称"},null,8,["modelValue"])])),_:1}),d(B,{label:"设置密码"},{default:r((()=>[d(P,{modelValue:z.value.password,"onUpdate:modelValue":l[5]||(l[5]=e=>z.value.password=e),placeholder:"请设置新密码,否则请留空"},null,8,["modelValue"])])),_:1}),d(B,{label:"状态"},{default:r((()=>[d(F,{modelValue:z.value.status,"onUpdate:modelValue":l[6]||(l[6]=e=>z.value.status=e),class:"w-full",placeholder:"请选择用户状态"},{default:r((()=>[d(E,{label:"正常",value:0}),d(E,{label:"冻结",value:1})])),_:1},8,["modelValue"])])),_:1}),d(B,{label:"是否管理员"},{default:r((()=>[d(F,{modelValue:z.value.manager,"onUpdate:modelValue":l[7]||(l[7]=e=>z.value.manager=e),class:"w-full",placeholder:"请选择"},{default:r((()=>[d(E,{label:"用户",value:0}),d(E,{label:"管理员",value:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),d(Q,{class:"mt-4 w-full",onClick:O,type:"primary",size:"large"},{default:r((()=>[u("提交")])),_:1}),z.value.id?(t(),m(K,{key:0,class:"mt-6",type:"danger",onClick:l[9]||(l[9]=e=>(async e=>{try{await g.confirm("您确定删除当前用户？删除后数据将全部删除！","危险操作警告"),1===(await n({url:"/admin/userDelete",method:"post",data:{id:e}})).code&&(v.success("已删除当前用户所有数据"),C.value=!1,D())}catch(l){v.info("操作已取消")}})(z.value.id))},{default:r((()=>[u("删除用户")])),_:1})):c("",!0)])),_:1},8,["modelValue"])])}}};export{k as default};