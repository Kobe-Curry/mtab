import{u as e,r as a,ah as t,b as o,c as l,d as s,e as n,j as c,q as i,k as r,h as d,G as m,a3 as u,H as g,J as f,Z as b}from"./index.1713442796762.js";import{a as p}from"./href.1713442796762.js";import"./dialog.1713442796762.js";const h={class:"theme-control space-y-2"},k={class:"labelItem relative"},w=["src"],y=["src"],v={class:"absolute bottom-7 w-full flex justify-center left-0"},x={class:"labelItem h-11"},C=n("span",{class:"flex-shrink-0"},"背景模糊值",-1),_={class:"labelItem h-11"},j=n("span",{class:"flex-shrink-0"},"遮罩透明度",-1),I={__name:"wallpaper",setup(I){const V=e(),M=a(""),U={userid:t("user_id"),token:t("token")},q=e=>{1===e.code?(V.state.config.theme.backgroundImage=e.data.url,V.state.config.theme.backgroundMime=0,V.commit("updateConfig")):g.warning(e.msg)},B=()=>{p("tab://background"),f.emit("openController",!1)},D=async()=>{const e=await b({url:"/api/DefBg"});V.state.config.theme.backgroundImage=e.data.background,V.state.config.theme.backgroundMime=e.data.mime,V.commit("updateConfig")};return(e,a)=>{var t,g;const f=o("el-button"),b=o("el-upload"),p=o("el-slider");return l(),s("div",h,[n("div",k,[0===c(V).state.config.theme.backgroundMime?(l(),s("img",{key:0,class:"rounded-lg w-full",style:{"aspect-ratio":"10 / 5.625","object-fit":"cover"},ref_key:"image",ref:M,src:c(i)(null==(g=null==(t=c(V).state.config)?void 0:t.theme)?void 0:g.backgroundImage),alt:"壁纸"},null,8,w)):(l(),s("video",{key:1,ref_key:"image",ref:M,controlsList:"nodownload nofullscreen noremoteplayback",class:"rounded-lg w-full",style:{"aspect-ratio":"10 / 5.625","object-fit":"cover"},src:c(i)(c(V).state.config.theme.backgroundImage),autoplay:"",loop:"",muted:""},null,8,y)),n("div",v,[r(b,{headers:U,class:"upload-demo","show-file-list":!1,"on-success":q,action:c(u)+c(V).state.site.upload},{default:d((()=>[r(f,{class:"bg-black border-none text-white mr-3"},{default:d((()=>[m("上传")])),_:1})])),_:1},8,["action"]),r(f,{class:"bg-black border-none text-white",onClick:B},{default:d((()=>[m("在线壁纸")])),_:1}),r(f,{class:"bg-black border-none text-white",onClick:D},{default:d((()=>[m("默认")])),_:1})])]),n("div",x,[C,r(p,{class:"w-9/12 ml-4",onChange:a[0]||(a[0]=e=>c(V).commit("updateConfig")),max:20,modelValue:c(V).state.config.theme.blur,"onUpdate:modelValue":a[1]||(a[1]=e=>c(V).state.config.theme.blur=e)},null,8,["modelValue"])]),n("div",_,[j,r(p,{class:"w-9/12 ml-4",onChange:a[2]||(a[2]=e=>c(V).commit("updateConfig")),max:1,step:.01,modelValue:c(V).state.config.theme.opacity,"onUpdate:modelValue":a[3]||(a[3]=e=>c(V).state.config.theme.opacity=e)},null,8,["step","modelValue"])])])}}};export{I as default};