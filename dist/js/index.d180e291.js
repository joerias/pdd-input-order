var y=Object.defineProperty;var ee=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var L=(s,e,t)=>(ee(s,typeof e!="symbol"?e+"":e,t),t),N=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var T=(s,e,t)=>(N(s,e,"read from private field"),t?t.call(s):e.get(s)),R=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},j=(s,e,t,o)=>(N(s,e,"write to private field"),o?o.call(s,t):e.set(s,t),t),G=(s,e,t,o)=>({set _(r){j(s,e,r,t)},get _(){return T(s,e,o)}}),M=(s,e,t)=>(N(s,e,"access private method"),t);import{G as F,Z as te,d as w,ag as z,o as C,c as D,U as S,O as P,F as J,S as I,T as X,u as O,i as oe,I as K,R as A,M as U,a7 as re,a as V,ar as ae}from"./@vue.00b359f1.js";import{E as ne,i as le}from"./element-plus.1c255a1b.js";import{E as H}from"./exceljs.d8eebc5a.js";import"./lodash-es.36eb724a.js";import"./@vueuse.608bdfb3.js";import"./@element-plus.ecdfba5d.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.463e5e5e.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./escape-html.1d60d822.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.682dc3ac.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const n={仅导入txt按钮描述:"导入TXT仅查看",导入txt按钮描述:"导入TXT -> 生成原始EXCEL",导入txt表格标题:"导入TXT数据预览",导入excel按钮描述:"导入已填物流EXCEL -> 生成批量上传EXCEL",导入excel表格标题:"导入EXCEL订单信息预览",生成原始excel文件名:{1:"-第一版-SG",2:"-第二版-SG"},txt数据间隔符:"==========",分解txt表格字段:{订单号:"订单号",商品:"商品",姓名:"姓名",电话:"电话",地址:"地址"},组装excel表格字段:{商品:"商品",数量:"数量",价格:"价格",店铺:"店铺"},组装excel表格版本:{1:"第一版",2:"第二版"},组装excel表格款式:{全套:"软皮活页夹+彩色打印纸",书皮:"软皮活页夹"},组装excel表格颜色:{绿:"绿",蓝:"蓝",粉:"粉"},组装excel表格价格:{全套:48,书皮:15},组装excel表格店铺:{1:"店1",2:"店2",3:"店3"},errMsg:{上传txt:"上传txt格式异常"},补价地区:["甘肃","宁夏","青海","内蒙"],补价:3};class se{constructor(e){L(this,"value");this.value=e}output(e){const t=this.value.getFullYear(),o=this.value.getMonth()+1,r=this.value.getDate();return e?`${t}${e}${o}${e}${r}`:`${t}年${o}月${r}日`}}class ie{calc(e){return e.reduce((t,o)=>t+Number(o[n.组装excel表格字段.价格])*o[n.组装excel表格字段.数量],0)}}var B,E,W,Y;class ce{constructor(){R(this,W);R(this,B,void 0);R(this,E,void 0)}async documentImport(){try{[G(this,B)._]=await window.showOpenFilePicker();const o=(await(await T(this,B).getFile()).text()).split(`\r
`).filter(i=>i).map(i=>i.replace(/^\s+|\s+$/g,""));let r=[];o.forEach((i,l)=>{i==="="&&r.push(l)});const a=M(this,W,Y).call(this,r,o,Object.keys(n.分解txt表格字段).length);if(a){ne.error(`${n.errMsg.上传txt} ${a}`);return}return o}catch{}}async generate(e){const t=e.filter(c=>c!=="="),o=[],r=Object.keys(n.分解txt表格字段).length;for(let c=0;c<t.length;c+=r){const h={};t.slice(c,c+r).forEach((d,p)=>{switch(p){case 0:h[n.分解txt表格字段.订单号]=d;break;case 1:h[n.分解txt表格字段.商品]=d;break;case 2:h[n.分解txt表格字段.姓名]=d;break;case 3:h[n.分解txt表格字段.电话]=d;break;case 4:h[n.分解txt表格字段.地址]=d;const $=e.findIndex(x=>x===d),v=e.slice(0,$);let _=v.indexOf("="),m=1;for(;_!==-1;)m++,_=v.indexOf("=",_+1);h.shop=m;break}}),o.push(h)}const a=[],i=[],l=[],u=[],f=[],g=[],b=[],k=[];o.forEach(c=>{const h=c.商品.includes("升级款")?n.组装excel表格版本[2]:n.组装excel表格版本[1],d=c.商品.includes("+软皮活页夹")?n.组装excel表格款式.全套:n.组装excel表格款式.书皮,p=c.商品.includes("绿")?n.组装excel表格颜色.绿:c.商品.includes("粉")?n.组装excel表格颜色.粉:c.商品.includes("蓝")?n.组装excel表格颜色.蓝:"异常",$=c.商品.includes("!")?c.商品.split("!")[1]*1:1;let v=!1;n.补价地区.find(Q=>{c.地址.includes(Q)&&(v=!0)});const _=(d===n.组装excel表格款式.全套?n.组装excel表格价格.全套:n.组装excel表格价格.书皮)+(v?n.补价:0),m=n.组装excel表格店铺[c.shop],x={物流单号:"",[n.分解txt表格字段.姓名]:c.姓名,[n.分解txt表格字段.电话]:c.电话,[n.分解txt表格字段.地址]:c.地址,[n.组装excel表格字段.商品]:`${h} ${d} ${p}`,[n.组装excel表格字段.数量]:$,[n.组装excel表格字段.价格]:_,[n.分解txt表格字段.订单号]:c.订单号,[n.组装excel表格字段.店铺]:m};if(h===n.组装excel表格版本[1])if(d===n.组装excel表格款式.全套)switch(p){case n.组装excel表格颜色.绿:i.push(x);break;case n.组装excel表格颜色.粉:l.push(x);break;case n.组装excel表格颜色.蓝:u.push(x);break}else a.push(x);else if(d===n.组装excel表格款式.全套)switch(p){case n.组装excel表格颜色.绿:g.push(x);break;case n.组装excel表格颜色.粉:b.push(x);break;case n.组装excel表格颜色.蓝:k.push(x);break}else f.push(x)}),j(this,E,{ver1Cover:a,ver1SuitGreen:i,ver1SuitPink:l,ver1SuitBlue:u,ver2Cover:f,ver2SuitGreen:g,ver2SuitPink:b,ver2SuitBlue:k})}getCollectData(){const{ver1Cover:e,ver1SuitGreen:t,ver1SuitPink:o,ver1SuitBlue:r,ver2Cover:a,ver2SuitGreen:i,ver2SuitPink:l,ver2SuitBlue:u}=T(this,E);return[...e,...t,...o,...r,...a,...i,...l,...u]}getShopsData(){const{ver1Cover:e,ver1SuitGreen:t,ver1SuitPink:o,ver1SuitBlue:r,ver2Cover:a,ver2SuitGreen:i,ver2SuitPink:l,ver2SuitBlue:u}=T(this,E);return{1:[...e,...t,...o,...r],2:[...a,...i,...l,...u]}}}B=new WeakMap,E=new WeakMap,W=new WeakSet,Y=function(e,t,o){if(e.length===0){if(t.length%o!==0)return"当前数据仅为默认店铺，且录入数据条目不成对"}else for(let r=0;r<=e.length;r++)switch(r){case 0:if(e[r]%o!==0)return"当前数据为多组店铺，其中第1组数据条目不成对";break;case e.length:if((t.length-e[r-1]-1)%o!==0)return"当前数据为多组店铺，其中最后一组数据条目不成对";break;default:if((e[r]-e[r-1]-1)%o!==0)return`当前数据为多组店铺，其中第${r+1}组数据条目不成对`;break}};class ue{constructor(e){L(this,"blob");L(this,"worksheet");L(this,"header");this.blob=e,this.worksheet=void 0,this.header=[]}readFile(){return new Promise((e,t)=>{let o=new FileReader;this.blob?(o.readAsArrayBuffer(this.blob),o.onload=r=>{e(r.target.result)}):t("上传文件异常!")})}async getWorkBook(){let e=await this.readFile();return await new H.Workbook().xlsx.load(e)}async getWorkSheet(e=0){return(await this.getWorkBook()).getWorksheet(e)}async importExcel(e){const{i:t=1,header:o}=e,a=(await this.getWorkBook()).getWorksheet(t),i=[];return a.getSheetValues().filter(l=>!!(l!=null&&l.length)).forEach(l=>{l.shift();let u={};l.forEach((f,g)=>{u[o[g]]=f}),i.push(u)}),i}async exportExcel(e){const{name:t,sheetName:o="Sheet1",title:r="",titleStyle:a,subTitle:i="",subTitleStyle:l,header:u,customHeader:f,headerStyle:g,data:b,cellStyle:k,mergeList:c=[],password:h=""}=e,d=new H.Workbook;d.creator="",d.created=new Date,this.worksheet=d.addWorksheet(o,{properties:{tabColor:{argb:"FF00FF00"}}}),this.header=u??Object.keys(b[0]);let p=1;r&&p++,i&&p++,this.setCells(b,f,k),this.getTitle(r,a),this.getSubTitle(i,l),this.setHeaderStyle(p,b,g),this.handleDealExcel(h,c,p),d.xlsx.writeBuffer().then($=>{const v=new se(new Date);let _=new Blob([$],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});const m=document.createElement("a");m.href=URL.createObjectURL(_),m.download=v.output("-")+t+".xlsx",document.body.appendChild(m),m.click(),document.body.removeChild(m),window.URL.revokeObjectURL(m.href)})}merge(e,t){const o=[];return e.forEach(r=>{o.push(...t.map(a=>({...a,...r})))}),o}setCells(e,t,o){var a,i;const r=[];this.header.forEach((l,u)=>{r.push({header:t?t[u]:l,key:l,width:o.singleWidth?o.singleWidth[u]:(o==null?void 0:o.width)||20})}),this.worksheet.columns=r,(a=this.worksheet)==null||a.addRows(e),(i=this.worksheet)==null||i.eachRow({includeEmpty:!0},(l,u)=>{l.height=(o==null?void 0:o.height)||20}),this.worksheet.columns.forEach(l=>{l.font=(o==null?void 0:o.font)||{name:"微软雅黑"},l.alignment=(o==null?void 0:o.alignment)||{vertical:"middle",horizontal:"left",wrapText:!0}})}getTitle(e,t){var o,r;if(e){(o=this.worksheet)==null||o.spliceRows(1,0,[e]),(r=this.worksheet)==null||r.mergeCells(1,1,1,this.header.length);const a=this.worksheet.getRow(1);a.height=(t==null?void 0:t.height)||40,a.font=(t==null?void 0:t.font)||{name:"微软雅黑",size:20,bold:!0},a.fill=(t==null?void 0:t.fill)||{bgColor:{argb:"FFFFFF00"},type:"pattern",pattern:"none"},a.alignment=(t==null?void 0:t.alignment)||{horizontal:"center",vertical:"middle"}}}getSubTitle(e,t){var o,r;if(e){(o=this.worksheet)==null||o.spliceRows(2,0,[e]),(r=this.worksheet)==null||r.mergeCells(2,1,2,this.header.length);const a=this.worksheet.getRow(2);a.height=(t==null?void 0:t.height)||20,a.font=(t==null?void 0:t.font)||{name:"微软雅黑",size:14},a.fill=(t==null?void 0:t.fill)||{bgColor:{argb:"FFFFFF00"},type:"pattern",pattern:"none"},a.alignment=(t==null?void 0:t.alignment)||{horizontal:"right",vertical:"middle"}}}setHeaderStyle(e,t,o){this.worksheet.autoFilter={from:{row:e,column:1},to:{row:t.length,column:this.header.length}};let r=this.worksheet.getRow(e);r.height=o==null?void 0:o.height,r==null||r.eachCell(a=>{a.fill=(o==null?void 0:o.fill)||{type:"pattern",pattern:"solid",fgColor:{argb:"dde0e7"}},a.font=(o==null?void 0:o.font)||{name:"微软雅黑"}})}handleDealExcel(e,t,o){var r;e&&((r=this.worksheet)==null||r.protect(e,{autoFilter:!0,selectLockedCells:!1})),t.forEach(a=>{var u;const i=a.startRow+o,l=a.endRow+o;(u=this.worksheet)==null||u.mergeCells(i,a.startColumn,l,a.endColumn)}),this.worksheet.views=[{state:"frozen",xSplit:0,ySplit:o}]}}const he=F({name:"import-txt"}),de=F({...he,emits:["transitionList"],setup(s,{emit:e}){const t=new ce,o=new ie,r=new ue,a=te([]),i=w([]),l=w({}),u=w(0),f=w(!1),g=w(!1),b=async c=>{k(c,!0);try{const h=await t.documentImport();t.generate(h).then(()=>{if(i.value=t.getCollectData(),u.value=o.calc(i.value),e("transitionList",i.value,u.value,c),c===2){l.value=t.getShopsData();for(const d in l.value)l.value[d].length>0&&r.exportExcel({name:n.生成原始excel文件名[d],data:l.value[d],cellStyle:{singleWidth:[20,15,15,70,40,5,5,30,10]},mergeList:a})}})}catch(h){console.log(h)}finally{k(c,!1)}},k=(c,h)=>{c===1?f.value=h:g.value=h};return(c,h)=>{const d=z("el-button");return C(),D(J,null,[S(d,{size:"large",type:"success",plain:"",loading:f.value,onClick:h[0]||(h[0]=p=>b(1))},{default:P(()=>[I(X(O(n).仅导入txt按钮描述),1)]),_:1},8,["loading"]),S(d,{size:"large",type:"warning",plain:"",loading:g.value,onClick:h[1]||(h[1]=p=>b(2))},{default:P(()=>[I(X(O(n).导入txt按钮描述),1)]),_:1},8,["loading"])],64)}}}),pe=F({name:"tables"}),fe=F({...pe,props:{data:null,label:null,total:{default:0},borderColor:{default:"blue"}},setup(s){const e=s,t=oe(()=>e.total?`${e.label}  总价:${e.total}`:e.label);return(o,r)=>{const a=z("el-table-column"),i=z("el-table");return e.data.length!==0?(C(),D("div",{key:0,class:K(["box mt10",e.borderColor])},[S(i,{data:e.data,border:"",stripe:""},{default:P(()=>[S(a,{align:"center",label:O(t)},{default:P(()=>[e.data.length>3?(C(),U(a,{key:0,type:"index",width:"40",align:"center"})):A("",!0),(C(!0),D(J,null,re(Object.keys(e.data[0]),(l,u)=>(C(),U(a,{prop:l,label:l,key:u},null,8,["prop","label"]))),128))]),_:1},8,["label"])]),_:1},8,["data"])],2)):A("",!0)}}});const Z=(s,e)=>{const t=s.__vccOpts||s;for(const[o,r]of e)t[o]=r;return t},q=Z(fe,[["__scopeId","data-v-426ddbd0"]]),ge={class:"btns"},me={class:"w96per mauto"},xe=F({name:"app"}),be=F({...xe,setup(s){const e=w([]),t=w(0),o=w(""),r=(i,l,u)=>{e.value=i,t.value=l,o.value=u===1?"green":"yellow"},a=w([]);return(i,l)=>(C(),D("div",{class:K(["container",{data:e.value.length>0}])},[V("div",ge,[S(de,{onTransitionList:l[0]||(l[0]=(u,f,g)=>r(u,f,g))})]),V("div",me,[S(q,{data:e.value,total:t.value,label:O(n).导入txt表格标题,borderColor:o.value},null,8,["data","total","label","borderColor"]),S(q,{data:a.value,label:O(n).导入excel按钮描述},null,8,["data","label"])])],2))}});const we=Z(be,[["__scopeId","data-v-f1333961"]]),ke=ae(we);ke.use(le).mount("#app");
