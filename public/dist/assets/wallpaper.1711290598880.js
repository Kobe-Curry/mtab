import{u as e,r as a,b as t,c as l,d as s,e as o,j as n,k as c,h as i,C as m,a3 as d,E as r,as as u}from"./index.1711290598880.js";import{a as f}from"./href.1711290598880.js";import"./dialog.1711290598880.js";const g={class:"theme-control space-y-2"},b={class:"labelItem relative"},p=["src"],h={class:"absolute bottom-7 w-full flex justify-center left-0"},k={class:"labelItem h-11"},v=o("span",{class:"flex-shrink-0"},"背景模糊值",-1),x={class:"labelItem h-11"},C=o("span",{class:"flex-shrink-0"},"遮罩透明度",-1),w={__name:"wallpaper",setup(w){const I=e(),_=a(""),j=e=>{1===e.code&&(I.state.config.theme.backgroundImage=e.data.url,I.commit("updateConfig"))},y=()=>{f("tab://background"),r.emit("openController",!1)},V=()=>{I.state.config.theme.backgroundImage=u.theme.backgroundImage,I.commit("updateConfig")};return(e,a)=>{var r,u;const f=t("el-button"),w=t("el-upload"),U=t("el-slider");return l(),s("div",g,[o("div",b,[o("img",{class:"rounded-lg w-full",style:{"aspect-ratio":"10 / 5.625","object-fit":"cover"},ref_key:"image",ref:_,src:null==(u=null==(r=n(I).state.config)?void 0:r.theme)?void 0:u.backgroundImage,alt:"壁纸"},null,8,p),o("div",h,[c(w,{class:"upload-demo","show-file-list":!1,"on-success":j,action:n(d)+n(I).state.site.upload},{default:i((()=>[c(f,{class:"bg-black border-none text-white mr-3"},{default:i((()=>[m("上传")])),_:1})])),_:1},8,["action"]),c(f,{class:"bg-black border-none text-white",onClick:y},{default:i((()=>[m("在线壁纸")])),_:1}),c(f,{class:"bg-black border-none text-white",onClick:V},{default:i((()=>[m("默认")])),_:1})])]),o("div",k,[v,c(U,{class:"w-9/12 ml-4",onChange:a[0]||(a[0]=e=>n(I).commit("updateConfig")),max:20,modelValue:n(I).state.config.theme.blur,"onUpdate:modelValue":a[1]||(a[1]=e=>n(I).state.config.theme.blur=e)},null,8,["modelValue"])]),o("div",x,[C,c(U,{class:"w-9/12 ml-4",onChange:a[2]||(a[2]=e=>n(I).commit("updateConfig")),max:1,step:.01,modelValue:n(I).state.config.theme.opacity,"onUpdate:modelValue":a[3]||(a[3]=e=>n(I).state.config.theme.opacity=e)},null,8,["step","modelValue"])])])}}};export{w as default};