import{r as l,o as s,c as o,a as g,w as h,n as p,u as b,b as t,F as c,d as u,e as m,R as _,t as r}from"./index-a31f418e.js";import{a as x}from"./axios-4a70c6fc.js";const y={class:"bg-white shadow p-6 m-8"},f=t("button",{type:"button"},null,-1),k={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2"},w={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},v={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},B={class:"px-6 py-4"},F=["src"],N={class:"px-6 py-4"},R={__name:"FoodView",setup(V){const n=l([]),d=l(["Nama","Foto","Harga"]);let i={method:"get",maxBodyLength:1/0,url:"http://backend_test.test/api/menu",headers:{}};return x.request(i).then(a=>{n.value=a.data}).catch(a=>{console.log(a)}),(a,L)=>(s(),o("div",y,[g(b(_),{class:p(["text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",a.$route.name==="transaksi"?"text-blue-600":""]),to:"/create-food"},{default:h(()=>[m("Tambah Data")]),_:1},8,["class"]),f,t("table",k,[t("thead",w,[t("tr",null,[(s(!0),o(c,null,u(d.value,e=>(s(),o("th",{scope:"col",class:"px-6 py-3",key:e},r(e),1))),128))])]),t("tbody",null,[(s(!0),o(c,null,u(n.value,e=>(s(),o("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",key:e},[t("th",v,r(e.name),1),t("td",B,[t("img",{src:"http://backend_test.test/storage/"+e.image,class:"w-auto h-40 rounded-full object-cover",alt:""},null,8,F)]),t("td",N,r(e.price),1)]))),128))])])]))}};export{R as default};