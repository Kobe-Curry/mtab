import{aw as e,u as l,r as a,b as t,c as A,d as s,k as o,h as u,j as d,U as n,g as m,D as i,m as r,G as c,e as p,x as v,S as f,H as g,W as b,i as h,v as V,a1 as P,F as w,f as x,a2 as y,n as _,T as z}from"./index.1717935479334.js";import{_ as S}from"./wangEditor.1717935479334.js";const U=p("h2",{class:"mb-4"},"站点信息配置",-1),T=["src"],N=p("h2",{class:"mb-4"},"关于我们 （前端设置关于我们的地方展示以及其他可能需要的地方展示）",-1),D=p("div",{class:"text-red-500"}," *该配置项需要有一定的前端基础，请勿乱写，否则可能造成页面样式错乱，如果您没有开发基础或者相关的知识经验，请勿配置此项，不配置不会影响程序使用。 ",-1),k={key:0,class:"absolute inset-0 w-full flex-col flex justify-center items-center h-full bg-black z-20 bg-opacity-50 rounded-lg cursor-no-drop"},M=[p("div",{class:"text-4xl font-bold text-white"}," 此功能属于高级版本请获取授权后使用 ",-1),p("a",{href:"https://mtab.cc/pricing.html",target:"_blank",class:"mt-6 text-xs p-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ml-8 text-white"},"获取订阅授权解锁更多功能",-1)],R=p("h2",{class:"mb-4"},"用户添加标签主动推送功能",-1),Q=p("div",{class:"text-red-500"}," *审核时请注意检查用户提交内容是否违规或者有涉及到隐私内容，请谨慎对待，尊重用户隐私权 ",-1),E=p("div",{class:"text-red-500"}," *默认不勾选针对用户友好，默认勾选针对用户不友好！所以我不推荐默认勾选 ",-1),W=p("h2",{class:"mb-4"},"其他配置",-1),O=p("div",{class:"text-red-500"},"*生产环境应该保持关闭，否则会导致网站的一些信息泄露",-1),I={class:"flex",style:{width:"100%"}},G={style:{width:"60px"}},C={style:{width:"100%"}},L={class:"flex"},X={__name:"base",setup(b){e("user_id"),e("token");const h=l(),V=a({logo:"",title:"",is_push_link_store:"0",email:"",backgroundImage:"",assets_host:"",remote_avatar:"",keywords:"",upload_size:2,defaultTab:"",description:"",customHead:"",qqGroup:"",pwa:"0",customAbout:"",app_debug:"0",touristUpload:"1",is_push_link_status:"0",is_push_link_store_tips:"勾选此选项程序会同时提交至在线标签库，等待管理员审核通过后可全站点展示您添加的标签",theme_color:"#141414"}),P=e=>{1===e.code&&(V.value.logo=e.data.url)},w=async()=>{const e=await f({url:"/setting/refreshCache"});g.success(e.msg)},x=()=>{h.state.site.logo=V.value.logo,f({url:"/Setting/saveSetting",method:"post",data:{form:V.value}}).then((e=>{g.success(e.msg),1===e.code&&y()}))},y=()=>{f({url:"/Setting/getSetting",method:"post",data:{role:["logo","title","email","keywords","backgroundImage","assets_host","remote_avatar","defaultTab","recordNumber","description","customHead","qqGroup","upload_size","is_push_link_store_tips","is_push_link_store","touristUpload","app_debug","is_push_link_status","pwa","customAbout","theme_color"]}}).then((e=>{1===e.code&&(Object.assign(V.value,e.data),V.value.upload_size=parseFloat(V.value.upload_size))}))};return y(),(e,l)=>{const a=t("el-icon"),f=t("el-upload"),g=t("el-form-item"),b=t("el-input"),y=t("el-card"),_=t("el-option"),z=t("el-select"),S=t("el-slider"),X=t("el-color-picker"),Y=t("el-button"),J=t("el-form");return A(),s("div",null,[o(J,{modelValue:V.value,"onUpdate:modelValue":l[17]||(l[17]=e=>V.value=e),"label-position":"top"},{default:u((()=>[o(y,null,{default:u((()=>[U,o(g,{label:"站点logo (建议尺寸严格设置为144x144px) 后续PWA等其他场景可能会用到"},{default:u((()=>[o(f,{class:"avatar-uploader","show-file-list":!1,"on-success":P,action:d(n)+d(h).state.site.upload},{default:u((()=>{var e,l;return[(null==(e=V.value)?void 0:e.logo)?(A(),s("img",{key:0,src:null==(l=V.value)?void 0:l.logo,class:"avatar",alt:""},null,8,T)):(A(),m(a,{key:1,class:"avatar-uploader-icon"},{default:u((()=>[o(d(i))])),_:1}))]})),_:1},8,["action"])])),_:1}),o(g,{label:"站点名称"},{default:u((()=>[o(b,{modelValue:V.value.title,"onUpdate:modelValue":l[0]||(l[0]=e=>V.value.title=e),placeholder:"站点名称"},null,8,["modelValue"])])),_:1}),o(g,{label:"站点关键字"},{default:u((()=>[o(b,{modelValue:V.value.keywords,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value.keywords=e),placeholder:"站点关键字用,隔开"},null,8,["modelValue"])])),_:1}),o(g,{label:"站点介绍"},{default:u((()=>[o(b,{modelValue:V.value.description,"onUpdate:modelValue":l[2]||(l[2]=e=>V.value.description=e),placeholder:"站点介绍"},null,8,["modelValue"])])),_:1}),o(g,{label:"自定义Head代码"},{default:u((()=>[o(b,{type:"textarea",rows:"5",modelValue:V.value.customHead,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value.customHead=e),placeholder:"请粘贴html文本内容"},null,8,["modelValue"])])),_:1})])),_:1}),o(y,{class:"mt-4"},{default:u((()=>[N,o(g,{label:"站点联系邮箱"},{default:u((()=>[o(b,{modelValue:V.value.email,"onUpdate:modelValue":l[4]||(l[4]=e=>V.value.email=e),placeholder:"联系客服邮箱"},null,8,["modelValue"])])),_:1}),o(g,{label:"QQ交流群"},{default:u((()=>[o(b,{modelValue:V.value.qqGroup,"onUpdate:modelValue":l[5]||(l[5]=e=>V.value.qqGroup=e),placeholder:"请输入QQ交流群号"},null,8,["modelValue"])])),_:1}),o(g,{label:"自定义前台关于我们区域的内容，HTML+CSS  (请勿写入JavaScript脚本，不会运行)"},{default:u((()=>[o(b,{rows:"10",type:"textarea",modelValue:V.value.customAbout,"onUpdate:modelValue":l[6]||(l[6]=e=>V.value.customAbout=e),placeholder:"可以自定义个性化的HTML+CSS代码，会在前台个人中心关于我们的地方展示"},null,8,["modelValue"]),D])),_:1})])),_:1}),o(y,{class:"mt-4 relative"},{default:u((()=>[d(h).state.site.auth?r("",!0):(A(),s("div",k,M)),R,o(g,{label:"是否允许用户推送至在线商城库"},{default:u((()=>[o(z,{class:"w-full",modelValue:V.value.is_push_link_store,"onUpdate:modelValue":l[7]||(l[7]=e=>V.value.is_push_link_store=e)},{default:u((()=>[o(_,{label:"关闭",value:"0"},{default:u((()=>[c("关闭")])),_:1}),o(_,{label:"开启",value:"1"},{default:u((()=>[c("开启")])),_:1})])),_:1},8,["modelValue"]),Q])),_:1}),o(g,{label:"用户提交按钮的提示语"},{default:u((()=>[o(b,{modelValue:V.value.is_push_link_store_tips,"onUpdate:modelValue":l[8]||(l[8]=e=>V.value.is_push_link_store_tips=e),placeholder:"请输入QQ交流群号"},null,8,["modelValue"])])),_:1}),o(g,{label:"默认提交按钮的状态"},{default:u((()=>[o(z,{class:"w-full",modelValue:V.value.is_push_link_status,"onUpdate:modelValue":l[9]||(l[9]=e=>V.value.is_push_link_status=e)},{default:u((()=>[o(_,{label:"不勾选",value:"0"},{default:u((()=>[c("不勾选")])),_:1}),o(_,{label:"勾选",value:"1"},{default:u((()=>[c("勾选")])),_:1})])),_:1},8,["modelValue"]),E])),_:1})])),_:1}),o(y,{class:"mt-4"},{default:u((()=>[W,o(g,{label:"程序调试模式"},{default:u((()=>[o(z,{class:"w-full",modelValue:V.value.app_debug,"onUpdate:modelValue":l[10]||(l[10]=e=>V.value.app_debug=e)},{default:u((()=>[o(_,{label:"关闭",value:"0"},{default:u((()=>[c("关闭")])),_:1}),o(_,{label:"开启",value:"1"},{default:u((()=>[c("开启")])),_:1})])),_:1},8,["modelValue"]),O])),_:1}),d(false)?(A(),m(g,{key:0,label:"资源cdn域名"},{default:u((()=>[o(b,{modelValue:V.value.assets_host,"onUpdate:modelValue":l[11]||(l[11]=e=>V.value.assets_host=e),placeholder:"文件cdn域名,一般留空即可!"},null,8,["modelValue"])])),_:1})):r("",!0),o(g,{label:"标签LOGO生成API（自建请修改API地址）"},{default:u((()=>[o(b,{modelValue:V.value.remote_avatar,"onUpdate:modelValue":l[12]||(l[12]=e=>V.value.remote_avatar=e),placeholder:"https://avatar.mtab.cc/6.x/thumbs/png?seed="},null,8,["modelValue"])])),_:1}),o(g,{label:"是否允许游客上传文件"},{default:u((()=>[o(z,{class:"w-full",modelValue:V.value.touristUpload,"onUpdate:modelValue":l[13]||(l[13]=e=>V.value.touristUpload=e)},{default:u((()=>[o(_,{label:"不允许",value:"0"},{default:u((()=>[c("不允许")])),_:1}),o(_,{label:"允许",value:"1"},{default:u((()=>[c("允许")])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(g,{label:"文件上传尺寸限制(推荐限制在2MB左右)"},{default:u((()=>[p("div",I,[p("div",G,v(V.value.upload_size<1?1e3*V.value.upload_size+"KB":V.value.upload_size+"MB"),1),p("div",C,[o(S,{class:"w-full",modelValue:V.value.upload_size,"onUpdate:modelValue":l[14]||(l[14]=e=>V.value.upload_size=e),"format-tooltip":e=>e<1?1e3*e+"KB":e+"MB",min:.1,max:8,step:.01},null,8,["modelValue","format-tooltip","min","step"])])])])),_:1}),o(g,{label:"开启网站PWA （在开启前请确保您已知晓PWA的功能和用途，如不了解请不要开启，不开启也不影响使用。关闭后已安装的用户不会受到影响，需要手动卸载！）"},{default:u((()=>[o(z,{class:"w-full",modelValue:V.value.pwa,"onUpdate:modelValue":l[15]||(l[15]=e=>V.value.pwa=e)},{default:u((()=>[o(_,{label:"停用PWA",value:"0"},{default:u((()=>[c("停用PWA")])),_:1}),o(_,{label:"启用PWA",value:"1"},{default:u((()=>[c("启用PWA")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"1"==V.value.pwa?(A(),m(g,{key:1,label:"PWA窗口主题颜色(修改后针对已安装的用户不会立即生效，浏览器会一般24小时左右才会更新，望须知！)"},{default:u((()=>[o(X,{modelValue:V.value.theme_color,"onUpdate:modelValue":l[16]||(l[16]=e=>V.value.theme_color=e)},null,8,["modelValue"])])),_:1})):r("",!0)])),_:1}),p("div",L,[o(Y,{size:"large",class:"mt-4 w-full",type:"primary",onClick:x},{default:u((()=>[c("保存配置文件")])),_:1}),o(Y,{size:"large",class:"mt-4 w-40",type:"danger",onClick:w},{default:u((()=>[c("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}},Y={class:"flex flex-col",style:{height:"calc(100vh - 100px)"}},J={class:"mt-4"},q=p("div",{class:"text-base text-gray-700 mb-2"},"公告标题（非必填）",-1),B={class:"mt-4"},H=p("div",{class:"text-base text-gray-700 mb-2"},[c("请选择公告的状态 "),p("b",{class:"text-red-500"},"*")],-1),Z={class:"mt-6 flex"},F={__name:"notify",setup(e){const l=a(""),d=a(""),n=a("0"),m=()=>{b({customClass:"globalNotify",dangerouslyUseHTMLString:!0,title:d.value,message:l.value,duration:3e4})},i=async()=>{const e=await f({url:"/Setting/saveSetting",method:"post",data:{form:{globalNotify:JSON.stringify({html:l.value,title:d.value,status:n.value})}}});1===e.code?g.success(e.msg):g.warning(e.msg)};return f({url:"/Setting/getSetting",method:"post",data:{role:["globalNotify"]}}).then((e=>{if(1===e.code){const{globalNotify:t=!1}=e.data;if(t)try{let e=JSON.parse(t);const{html:a="",title:A="",status:s=0}=e;l.value=a,d.value=A,n.value=s}catch(a){console.log(a)}}})),(e,a)=>{const r=t("el-input"),v=t("el-option"),f=t("el-select"),g=t("el-button");return A(),s("div",Y,[o(S,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["modelValue"]),p("div",J,[q,o(r,{clearable:"",size:"large",modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e),placeholder:"请设置一个标题吧！不是必须设置项，不设置则不展示标题。"},null,8,["modelValue"])]),p("div",B,[H,o(f,{placeholder:"请选择公告的状态",modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=e=>n.value=e),size:"large"},{default:u((()=>[o(v,{value:"0",label:"隐藏"}),o(v,{value:"1",label:"展示"})])),_:1},8,["modelValue"])]),p("div",Z,[o(g,{class:"w-full",size:"large",onClick:i,type:"primary"},{default:u((()=>[c("保存公告")])),_:1}),o(g,{class:"w-60",size:"large",onClick:m,type:"success"},{default:u((()=>[c("预览公告")])),_:1})])])}}};const j=p("h2",{class:"mb-4 flex gap-2 items-center"},[p("img",{style:{width:"20px",height:"20px"},src:"data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFRDAzMDFGQTRERjExRTdBOERFRDM3QzM0QkNFNDU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFRDAzMDIwQTRERjExRTdBOERFRDM3QzM0QkNFNDU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REVEMDMwMURBNERGMTFFN0E4REVEMzdDMzRCQ0U0NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REVEMDMwMUVBNERGMTFFN0E4REVEMzdDMzRCQ0U0NTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7byXusAAAK8ElEQVR42uRXeXAUVRr/Xl/TMz2ZyUyOCWESAiEGSLiWhAQEJRARCYiCgKvFobUrWNaulFrK7rKo5a7ueq2iBV5AsARFDtldQZc7SCALgYQjEMhBIPfJTJLunr7e29eTLVdZ9m//2J7qmp6erv6+9zu+73uIEAI/5cHAT3z85AlwPfs/+/4HoR8XcgLf3w99rAx8+jiweCewusaTkr1T1TNlM8X8GWXStHv2GO2tYFkWKFs3bMRVFydCxrBz1rO/WUFcTlkMhcBZUQOWbgGOjwUpMwsQwwKLMOzu9ECF7IGAy4LRowYDd3tcKDAsB1b3DTD6QmD23Awan769n/SqbKS+vNfMSJrgGDSkFpd+N9s6tf9xbAGgiy3ZMSdPrQF3jIzjYsEy9ABWNEBCoP3796LbIHDrDcTRW5g4QFH8NJFWoeEacLpCsGAhJtXfyUhxNWzV+alM7KB6osgJ4oT8T4gZ8Vm6lsZo2KFnpgCuu5Rj7Nj4hdWnis4FS1ehtIxdLMYUYMuG+ZYECP5BdATWza4UdefmD4zmKznozul/YvNmvg+xQrMjFHqB8DQLpSsIFQcWR47vWcU6JQDT6mMdUgcXzDxu4XDQUMIdaN/Od0lLUzqY9O/y40+z987ZJWsmVCoeuNTHgMD/IAEBO4CSCYRnAUkuiBz7arleeWI2K1AmLpz6JZuWUW2eujCNvVZRRHqasgAPSJehcOKbUeGATQG+eobSxjzNJqaXsSkZJXzaHUfU40dWOKdO+/CUzJHtN1yQEBcPOlFB+AEMKHJgL1C4wWqrAyY5jqJk+uT1L1YzwdRSPivvW3xs++9JuCvI0MUyPBPlEdEsiDkQnNDfURANug56D+s2g/TZjNyv+dyC4sbcZSXvNzl9l6+3STPSvJ0WWO1ul8eMEUwYkZkMHLHTpwolsgpINQGlem+KS1feT65WzTX3b3wHkYiT8TL2I3TVGJCdfIy/AyWPOoq9iSepYhrB5cFGqC+ZbWu4S2+oLmL6ZQlXnZ5jyf3xXaMeLPFwzngnwz/8zuHGR5wCdAyL6y0pGOn7ZJzAnkXapZOgHT9apO4sXsUHk2vFufd/QXrDiermV7ZzTio8Bw1OozD2Mp1OlZny6FpIGfopcIkdZn8XiD0tgPwB0GQMrBAD4POOVLe/tdWsqRqPFQB+3vKnWwqXrKv3ZMGJut6HX9t79XOgehAFLvLsnOG/YEDuFdS9W181G64U6uePrcTNnUO13RveYzkLIX5g5SwNjgLBRmb+b2fwOXPeBIQ7CChAUkaDlTAEiKEDoifhKTXB4GWu4IFXkW05W2yNtVNGhmshVHsVQha/2+cWO0DgIGJicdORhjVcf1s3bznd9ZTYMfzEgm1mTXkB7m4PcBR2ZFNOYSei1M/NXrXIDI4oU5EFjs46MLypEkqbopqeRGyF24Dpbqeep6bq6gImout2KSF2ndVMLdKqQnKGD9JMPjViWh4q1qiATIw5BpwuWVy4/EHXwiUrhOHZJ/Dl4wsYMerI6GmLC+XP/ZDLHFt2PTAC2hODwBrqOIZl0h1YIw5TodqIAHYjQD4/sMGhYNVXLIsqnOqFG593QB2ZAa7UABysavmjqhMxaiETw/TMuH2M0NwGILgAT5z5kRXuVnCfIiEa2S7LCFPoY+P62Lw5Gzo8AWhNTAfcXDcGCdJ9wojJVZzRTaDhJGClJ2pl3NcD5t6Pf2edPzzfdokjc/R3Sv7crTdS82HL6dDqA9WhRSBQTg0C8V5n26JJwTc4s71lgnHu6kxCzYPMUDDaE2wbUX8R20+S91yko6vuQnAIe6HZGDO6ZMsaS3JcNDuuWwIn0lVSiHgKWWvDROv03hfw+dPzGXpLmHDn5+Gfv/Tk10KG8LcjbWv3netaDTxVs2ZAik+of3JW1qN9rvgmTv5221aoqc0UJ/+slBmSesXC/y4uZODbofeGw9dOwe6MFcO9mpofH2p2G5er11h9YQ8O3HGFdF4PsJ1fFpJrF6eQXpqLx3tDm/LwixfynyjeISfn7CxrX9/Q2p8b5ZPCnj3Yc+S5aUnLJL+3sYNwwCGeU+2YuC/M4e7OSLSw0MDIsrOg10KCxI2bRy808TtdmtWdu3xd3FfPZ/JnD60CfGigwbCgWPFph7XC2dsqUwv/up/P9u2vE4vL6lsfsRSDtzn380zHrDFJ63KHxL3hdVl6v0FrDnUJ55m9+DE562IBx/BuYDCxubNrk50xYghoPd3ZbpZPXOiDS+UKchQmrvzVE8vyVmc0npIdPc0kEshQ2/ypVqOY5ixVYvLOdOJv2rvkHJC7owgOixMujAt4i9P9zOdZg3ytnX2YWtAEizrBDsPxg1MqHamBSs7pp/X8fJ6OmFfA5oFmjW0ftnfEo5N7lmb7B7/5XDB30RtN7OZfRyYWk+R8lUs0FWyYghHS4qFfBdA1mr0JyW6mIT1ROpwpMXuGBVz7h4isFgi1AGcicNKq5qX2iNg9gfoUyacPAunsBrX0yELexcfq5QdXWNcvT2AlRIsQipZfxp903b3ipZzG9Mldf5cyaVcjWV39MElRjNFtYd3p57Ca4UJdJKJd8cUwV9K9Uk2/jBWmpwOGyy0wKZaBeE1xYJoIlTptkrbLBoYDpFwuA3nTBy/L24rXCqPSq6X5S1+SP/7DVoY3WIa3k6CPUqy44eMOivMeW9AWl9J7QhwMPb5hYIg+KO+SITNGgEmJIlRfa6PNSYN0SwepqRbS6y9AAolARIk8hEeknuMSE2rANH88D/C9IVu5rTYhxsW6EdqEa2O5yYXbrEPfLCEeiihlA1Ek9OrKQlN572hCwfyn5sfFn1Rry6GHkyA31Aw8nQs8lK1U0MEPIrjdsaD3dQMbbk/uOXn0L2zmyLqYqfm7sEH9SdgfD0CR0yW0iGC+5+N330JamOV8SWf5WTO/1jev22FWVUxFdoWz+z/VBKHaQIJgsCMm7BCSMvdxMd4zutnZwuiaYqoKIWkZEqeJyUS1spQrFTPM8tOLnVNn7JGeWv0EtZYVXc2tE5h8+Bi1Aw9GdzMwVhc1vgcMTb4D1dZOMipLZ+iVx5cw1C6I0mELMzoLGANDCRFFnXFI3QixN2nRsocuP+7tTbDCGm/TJtxVuNF5z7z1zvE5Z4mq3nYoRPKRkujEaoRaATkx8P4ACr/z6meR0pKHXPcU/RFZukM/V/o49N1MsoPa3o0Gt9+FB067U9v2jSZGr9lAco1QMGuDXl+fZ1y9epdv7ZtjGLfURSzrv4dS0S9ELxy+IG2ntJtZFo97QklY1gT5q90vOxYveB29/NZY7h+HHrCaaoqslmtjQQknE03n7RnTnhVoKdZQvL+F9Q2qQGPHf8l7EiP9xR9+YLR3J0XnwqqKIum+wi0DKNySACOwP5qZCYP0mGUrHiS843UsSTpbVPQauONCTGr2P/X2tklCTsFHENE1zDv7QbsZoroYzvI8bR2CB+uYlwrv306brOBsbFpnHTz4uJST97Yja9R2W8jgEG4zlpP/bEvs6mfDhESh13n39JWaJIGARXC0RkALh4ap3xxabrjpk7xD9z6z9m7X5Nyy8JZNf+7btf15ohJgB8W1OkZmP8P6PLpz+r2vMUNHreMEkKO13W4ut9mH3n5rhnF0yqFqBEv0g+aLA2vI0EpXft4m4kmoc9993yfusTllkV46c+XdtZ44Yxv5oUMrxMkz37aSh2GDtm5LVuw9hkyi1vvfG2D0f787/pcAAwAwtTs7N8++1QAAAABJRU5ErkJggg=="}),c("ICP备案信息")],-1),K=p("h2",{class:"mb-4 flex gap-2 items-center"},[p("img",{style:{width:"20px",height:"20px"},src:"data:image/x-icon;base64,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"}),c("公安备案信息")],-1),$={class:"mb-4 flex gap-2 items-center"},ee={style:{width:"25px",height:"25px"},t:"1709128256898",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8037",width:"128",height:"128"},le=[p("path",{d:"M871.7 762.53l-86.62 17.86a48.26 48.26 0 0 0-31.35 22l-46.41 75.29a24.78 24.78 0 0 1-41.4 1.21L513.54 661.22a24.78 24.78 0 0 1 6.09-34.52L700.1 500.33a24.78 24.78 0 0 1 34.52 6.08L887 724a24.79 24.79 0 0 1-15.3 38.53z",fill:"#3AAF09","p-id":"8038"},null,-1),p("path",{d:"M154.59 762.53l86.62 17.86a48.26 48.26 0 0 1 31.35 22L319 877.63a24.79 24.79 0 0 0 41.41 1.21l152.34-217.62a24.78 24.78 0 0 0-6.08-34.52L326.19 500.33a24.78 24.78 0 0 0-34.52 6.08L139.29 724a24.79 24.79 0 0 0 15.3 38.53z",fill:"#3AAF09","p-id":"8039"},null,-1),p("path",{d:"M513.25 425.25m-317.35 0a317.35 317.35 0 1 0 634.7 0 317.35 317.35 0 1 0-634.7 0Z",fill:"#24D316","p-id":"8040"},null,-1),p("path",{d:"M526.94 634.27c-129.09 0-231.08-118.23-203.39-252.09 16.18-78.18 76.38-140.46 154.26-158.24 67.95-15.51 135.15 1.75 185 44.91a14.3 14.3 0 0 1 0.68 20.9l-29.34 29.35a14.32 14.32 0 0 1-19.26 0.89A138 138 0 0 0 389.07 431.4c2.69 73.72 63.5 132.87 137.87 132.87a136.9 136.9 0 0 0 88-31.69 14.28 14.28 0 0 1 19.22 0.94l29.34 29.34a14.32 14.32 0 0 1-0.76 21 206.42 206.42 0 0 1-135.8 50.41z",fill:"#E1FFC7","p-id":"8041"},null,-1)],ae=p("h2",{class:"mb-4 flex gap-2 items-center"},"状态控制",-1),te={class:"flex"},Ae={__name:"copyright",setup(e){const l=a({recordNumber:"",copyright:"",beianMps:"",mobileRecordNumber:"0",loginCloseRecordNumber:"0"}),d=async()=>{const e=await f({url:"/setting/refreshCache"});g.success(e.msg)},n=()=>{f({url:"/Setting/saveSetting",method:"post",data:{form:l.value}}).then((e=>{g.success(e.msg),1===e.code&&m()}))},m=()=>{f({url:"/Setting/getSetting",method:"post",data:{role:["recordNumber","copyright","beianMps","mobileRecordNumber","loginCloseRecordNumber"]}}).then((e=>{1===e.code&&(l.value=Object.assign(l.value,e.data))}))};return m(),(e,a)=>{const m=t("el-input"),i=t("el-form-item"),r=t("el-card"),v=t("el-option"),f=t("el-select"),g=t("el-button"),b=t("el-form");return A(),s("div",null,[o(b,{modelValue:l.value,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value=e),"label-position":"top"},{default:u((()=>[o(r,{class:"mt-4"},{default:u((()=>[j,o(i,{label:"站点ICP备案信息"},{default:u((()=>[o(m,{modelValue:l.value.recordNumber,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.recordNumber=e),placeholder:"请输入备案号"},null,8,["modelValue"])])),_:1})])),_:1}),o(r,{class:"mt-4"},{default:u((()=>[K,o(i,{label:"站点公安备案信息"},{default:u((()=>[o(m,{modelValue:l.value.beianMps,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.beianMps=e),placeholder:"请输入备案号"},null,8,["modelValue"])])),_:1})])),_:1}),o(r,{class:"mt-4"},{default:u((()=>[p("h2",$,[p("div",null,[(A(),s("svg",ee,le))]),c(" 站点版权信息 ")]),o(i,{label:"请输入站点版权信息"},{default:u((()=>[o(m,{modelValue:l.value.copyright,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.copyright=e),placeholder:"请输入文字或者富文本内容，请勿插入js脚本等"},null,8,["modelValue"])])),_:1})])),_:1}),o(r,{class:"mt-4"},{default:u((()=>[ae,o(i,{label:"是否开启手机版展示备案信息"},{default:u((()=>[o(f,{modelValue:l.value.mobileRecordNumber,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.mobileRecordNumber=e)},{default:u((()=>[o(v,{label:"关闭",value:"0"}),o(v,{label:"开启",value:"1"})])),_:1},8,["modelValue"])])),_:1}),o(i,{label:"登录后备案版权展示状态(关闭后PC和手机同时不展示)"},{default:u((()=>[o(f,{modelValue:l.value.loginCloseRecordNumber,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.loginCloseRecordNumber=e)},{default:u((()=>[o(v,{label:"关闭",value:"0"}),o(v,{label:"开启",value:"1"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),p("div",te,[o(g,{size:"large",class:"mt-4 w-full",type:"primary",onClick:n},{default:u((()=>[c("保存配置文件")])),_:1}),o(g,{size:"large",class:"mt-4 w-40",type:"danger",onClick:d},{default:u((()=>[c("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}};const se={class:"mb-4 flex items-center"},oe=p("img",{width:"22",height:"22",class:"mr-2",src:"/dist/assets/auth.1717935479334.svg",alt:"订阅授权码"},null,-1),ue={key:0,href:"https://mtab.cc/pricing.html",target:"_blank",class:"text-xs p-1 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl ml-8 text-white"},de=p("div",{class:"mt-2 text-red-500 text-sm"},"* 使用问题或授权问题可以在官网添加客服或者QQ群。QQ群号：694155153",-1),ne={class:"flex"},me={__name:"auth",setup(n){e("user_id"),e("token");l();const i=a({authCode:"",authServer:""}),v=async()=>{const e=await f({url:"/setting/refreshCache"});g.success(e.msg)},b=async()=>{f({url:"/Setting/saveSetting",method:"post",data:{form:i.value}}).then((e=>{g.success("保存完毕！请刷新程序页面"),1===e.code&&h()}))},h=()=>{f({url:"/Setting/getSetting",method:"post",data:{role:["authCode","authServer"]}}).then((e=>{1===e.code&&Object.assign(i.value,e.data)}))};return h(),(e,l)=>{const a=t("el-input"),n=t("el-form-item"),f=t("el-card"),g=t("el-button"),h=t("el-form");return A(),s("div",null,[o(h,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=e=>i.value=e),"label-position":"top"},{default:u((()=>[o(f,{class:"mt-4"},{default:u((()=>[p("h2",se,[oe,c(" 高级订阅配置 "),i.value.authCode?r("",!0):(A(),s("a",ue,"获取订阅授权解锁更多功能"))]),o(n,{label:"授权码配置"},{default:u((()=>[o(a,{modelValue:i.value.authCode,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value.authCode=e),placeholder:"请输入授权码"},null,8,["modelValue"]),de])),_:1}),d(false)?(A(),m(n,{key:0,label:"授权服务器"},{default:u((()=>[o(a,{modelValue:i.value.authServer,"onUpdate:modelValue":l[1]||(l[1]=e=>i.value.authServer=e),placeholder:"一般留空即可!默认无需填写"},null,8,["modelValue"])])),_:1})):r("",!0)])),_:1}),p("div",ne,[o(g,{size:"large",class:"mt-4 w-full",type:"primary",onClick:b},{default:u((()=>[c("验证并保存")])),_:1}),o(g,{size:"large",class:"mt-4 w-40",type:"danger",onClick:v},{default:u((()=>[c("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}};const ie=p("h2",{class:"mb-4"},"邮件服务器配置（如使用25端口,需要检查服务器商是否允许25端口）",-1),re=p("div",{class:"text-red-500 text-sm"},"* 需要在您的邮箱设置里开启smtp功能才可以发送邮件，然后查看smtp的服务器地址",-1),ce=p("div",{class:"text-red-500 text-sm"},"* 开启smtp的邮箱账号",-1),pe=p("div",{class:"text-red-500 text-sm"},"* 有些邮箱的smtp需要使用单独提供的授权码，不能使用密码。请根据所使用邮箱的smtp相关文档填写 ",-1),ve=p("div",{class:"text-red-500 text-sm"},"* 由于安全需要，主流服务器厂商都直接屏蔽了25端口，所以请选择使用465端口",-1),fe={class:"flex gap-4 w-full"},ge=p("div",{style:{position:"absolute",right:"15px",width:"max-content",top:"-35px"}},[p("span",{style:{"font-size":"13px",color:"#dd4a68","margin-right":"50px"}},"内置常量 验证码：{$code}      发送时间：{$time}"),p("span",null,"模板效果预览")],-1),be=["innerHTML"],he=p("div",{class:"text-red-500 text-sm"},"* 使用smtp请务必配置好您的站点信息（站点名称），否则无法发送邮件。 ",-1),Ve={class:"flex"},Pe={__name:"smtp",setup(d){e("user_id"),e("token"),l();const n=a({smtp_host:"",smtp_email:"",smtp_password:"",smtp_port:"",smtp_code_template:""}),m=async()=>{const e=await f({url:"/setting/refreshCache"});g.success(e.msg)},i=e=>{let l=e.replace("{$code}","123456");return l=l.replace("{$time}","1997-01-01 00:00:00"),l},r=()=>{f({url:"/Setting/saveSetting",method:"post",data:{form:n.value}}).then((e=>{g.success(e.msg),1===e.code&&v()}))},v=()=>{f({url:"/Setting/getSetting",method:"post",data:{role:["smtp_host","smtp_email","smtp_password","smtp_port","smtp_code_template"]}}).then((e=>{1===e.code&&Object.assign(n.value,e.data)}))};return v(),(e,l)=>{const a=t("el-input"),d=t("el-form-item"),v=t("el-card"),f=t("el-button"),g=t("el-form");return A(),s("div",null,[o(g,{modelValue:n.value,"onUpdate:modelValue":l[5]||(l[5]=e=>n.value=e),"label-position":"top"},{default:u((()=>[o(v,{class:"mt-4"},{default:u((()=>[ie,o(d,{label:"SMTP HOST"},{default:u((()=>[o(a,{type:"text",modelValue:n.value.smtp_host,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value.smtp_host=e),placeholder:"邮件服务器地址"},null,8,["modelValue"]),re])),_:1}),o(d,{label:"邮箱账号"},{default:u((()=>[o(a,{modelValue:n.value.smtp_email,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value.smtp_email=e),placeholder:"发件人邮箱"},null,8,["modelValue"]),ce])),_:1}),o(d,{label:"邮箱授权码/密码"},{default:u((()=>[o(a,{modelValue:n.value.smtp_password,"onUpdate:modelValue":l[2]||(l[2]=e=>n.value.smtp_password=e),placeholder:"授权码/密码"},null,8,["modelValue"]),pe])),_:1}),o(d,{label:"发件端口"},{default:u((()=>[o(a,{modelValue:n.value.smtp_port,"onUpdate:modelValue":l[3]||(l[3]=e=>n.value.smtp_port=e),placeholder:"25/109/110/143/465/995/993/994"},null,8,["modelValue"]),ve])),_:1}),o(d,{label:"验证码邮件模板"},{default:u((()=>[p("div",fe,[o(a,{type:"textarea",rows:"14",modelValue:n.value.smtp_code_template,"onUpdate:modelValue":l[4]||(l[4]=e=>n.value.smtp_code_template=e),placeholder:"请输入模板文字或者粘贴设计好的富文本html代码   不设置的话程序则使用默认的邮件模板"},null,8,["modelValue"]),ge,p("div",{class:"border w-3/5 p-2",style:{"border-radius":"6px"},innerHTML:i(n.value.smtp_code_template)},null,8,be)])])),_:1}),he])),_:1}),p("div",Ve,[o(f,{size:"large",class:"mt-4 w-full",type:"primary",onClick:r},{default:u((()=>[c("保存配置文件")])),_:1}),o(f,{size:"large",class:"mt-4 w-40",type:"danger",onClick:m},{default:u((()=>[c("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}};const we={class:"relative pb-0.5",style:{"min-height":"calc(100vh - 95px)"}},xe={key:0,class:"absolute w-full flex-col flex justify-center items-center h-full bg-black z-20 bg-opacity-50 rounded-lg"},ye=[p("div",{class:"text-4xl font-bold text-white"}," 此功能属于高级版本请获取授权后使用 ",-1),p("a",{href:"https://mtab.cc/pricing.html",target:"_blank",class:"mt-6 text-xs p-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ml-8 text-white"},"获取订阅授权解锁更多功能",-1)],_e=p("h2",{class:"mb-4"},"QQ互联登录配置",-1),ze=p("div",{class:"text-sm text-emerald-600"},"QQ互联审核时请务必开启，并填写下方内容，否则无法通过",-1),Se=p("div",{class:"text-sm text-emerald-600"},"申请QQ互联的登录回调地址,请将该地址复制粘贴到QQ互联的登录回调地址中; ",-1),Ue=p("div",{class:"text-blue-500"},"QQ互联申请的网站网址：https://connect.qq.com/",-1),Te=p("div",{class:"text-blue-500"},"腾讯应用开放平台认证网址：https://connect.qq.com/",-1),Ne=p("div",{class:"text-blue-500 text-sm mt-2"},[c("个人主体可能第一次需要在QQ互联注册完提交认证后紧接着去腾讯应用开放平台做一个 "),p("b",null,"人脸识别"),c("，然后补充信息，"),p("b",null,"不需要绑定银行卡"),c("，识别完成后续"),p("u",null,"全在QQ互联操作，创建网站，填写信息即可带等审核，审核期间请务必开启QQ登录，并且把审核的应用的appid和appkey填写在后台，不然审核不过去")],-1),De={class:"flex"},ke={__name:"oAuth",setup(e){const d=a(null);l();const n="https://"+location.hostname+"/qq_login",i=a({qq_login:"0",qq_login_appid:"",qq_login_appkey:""}),r=async()=>{const e=await f({url:"/setting/refreshCache"});g.success(e.msg)},v=()=>{f({url:"/Setting/saveSetting",method:"post",data:{form:i.value}}).then((e=>{g.success(e.msg),1===e.code&&b()}))},b=()=>{f({url:"/Setting/getSetting",method:"post",data:{role:["qq_login","qq_login_appid","qq_login_appkey"]}}).then((e=>{1===e.code&&Object.assign(i.value,e.data),d.value=e.success}))};return b(),(e,l)=>{const a=t("el-option"),f=t("el-select"),g=t("el-form-item"),b=t("el-input"),P=t("el-card"),w=t("el-button"),x=t("el-form");return h((A(),s("div",we,[d.value?(A(),m(x,{key:1,modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=e=>i.value=e),"label-position":"top"},{default:u((()=>[o(P,{class:"mt-4"},{default:u((()=>[_e,o(g,{label:"功能状态"},{default:u((()=>[o(f,{class:"w-full",modelValue:i.value.qq_login,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value.qq_login=e)},{default:u((()=>[o(a,{label:"停用登录",value:"0"},{default:u((()=>[c("停用登录")])),_:1}),o(a,{label:"开启登录",value:"1"},{default:u((()=>[c("开启登录")])),_:1})])),_:1},8,["modelValue"]),ze])),_:1}),o(g,{label:"QQ开放平台应用AppId"},{default:u((()=>[o(b,{type:"text",modelValue:i.value.qq_login_appid,"onUpdate:modelValue":l[1]||(l[1]=e=>i.value.qq_login_appid=e),placeholder:"请输入应用appid"},null,8,["modelValue"])])),_:1}),o(g,{label:"QQ开放平台应用AppKey"},{default:u((()=>[o(b,{type:"text",modelValue:i.value.qq_login_appkey,"onUpdate:modelValue":l[2]||(l[2]=e=>i.value.qq_login_appkey=e),placeholder:"请输入应用appkey"},null,8,["modelValue"])])),_:1}),o(g,{label:"QQ互联申请时程序回调地址(无需编辑，固定内容)"},{default:u((()=>[o(b,{type:"text",value:n,placeholder:"无需编辑，固定内容"}),Se])),_:1}),Ue,Te,Ne])),_:1}),p("div",De,[o(w,{size:"large",class:"mt-4 w-full",type:"primary",onClick:v},{default:u((()=>[c("保存配置文件")])),_:1}),o(w,{size:"large",class:"mt-4 w-40",type:"danger",onClick:r},{default:u((()=>[c("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])):(A(),s("div",xe,ye))],512)),[[V,null!==d.value]])}}},Me={class:"flex flex-col",style:{height:"calc(100vh - 100px)"}},Re={class:"mt-6 flex"},Qe={__name:"privacy",setup(e){const l=a(""),d=location.protocol+"//"+location.host,n=async()=>{const e=await f({url:"/Setting/saveSetting",method:"post",data:{form:{privacy:l.value}}});1===e.code?g.success(e.msg):g.warning(e.msg)};return f({url:"/Setting/getSetting",method:"post",data:{role:["privacy"]}}).then((e=>{if(1===e.code){const{privacy:a=""}=e.data;a&&(l.value=a)}})),(e,a)=>{const m=t("el-button");return A(),s("div",Me,[o(S,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["modelValue"]),p("div",{class:"text-red-500 text-sm mt-4"},"* 一般提供登录服务的程序都需要有隐私政策协议，故请您认真填写，如果您是个人使用且不提供大众使用，可以不用设置此项。不会写怎么办？去copy同类产品的呀，记得改名字！！！ 协议访问地址为 "+v(d)+"/privacy.html "),p("div",Re,[o(m,{class:"w-full",size:"large",onClick:n,type:"primary"},{default:u((()=>[c("保存协议")])),_:1})])])}}},Ee={class:"setting-tab bg-white p-2 rounded-lg flex flex-wrap gap-y-2 text-sm"},We=["onClick"],Oe={class:"manager-setting mt-4"},Ie={__name:"setting",setup(e){const l=P({name:"基础设置",component:X}),a=[{name:"基础设置",component:X},{name:"邮件配置",component:Pe},{name:"公告管理",component:F},{name:"备案与版权",component:Ae},{name:"第三方登录",component:ke},{name:"隐私政策",component:Qe},{name:"订阅与授权",component:me}];return(e,t)=>(A(),s(w,null,[p("div",Ee,[(A(),s(w,null,x(a,(e=>o(z,null,{default:u((()=>[p("div",{onClick:a=>(e=>{l.value=e})(e),class:_([{"bg-blue-400 text-white":d(l).name===e.name},"px-6 py-1.5 rounded-md cursor-pointer"])},v(e.name),11,We)])),_:2},1024))),64))]),p("div",Oe,[(A(),m(y(d(l).component)))])],64))}};export{Ie as default};