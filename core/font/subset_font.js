var S=require("child_process"),t=require("fs-extra"),l=require("os"),_=require("path");const[,,...y]=process.argv,a=y.includes("--minify"),f=process.platform==="win32",r={},T=(n=-1)=>{(0,t.writeJsonSync)(__filename+"on",r,{encoding:"utf8"}),n>-1&&process.exit(n)},g=a?async(n,o)=>{try{o=o.replaceAll('"','\\"'),await new Promise((e,s)=>(0,S.exec)(`pyftsubset ${n.inp} --text="${o}" --layout-features='*' --flavor=woff2 --output-file=${n.out}`,c=>{if(c){const p=c.message.replace(/--text=[^\n]+/,"...");console.error(p),n.err+=p+`
`,s();return}e()}))}catch(e){n.err+=e.message.replace(/--text=[^\n]+/,"...")+`
`}}:n=>(0,t.copy)(n.inp,n.out),i=require("./font.json"),m=[],{username:u}=(0,l.userInfo)(),O="core/font",P=f?`C:/Users/${u}/AppData/Local/Microsoft/Windows/Fonts`:`/Users/${u}/Library/Fonts`,F=f?"C:/Windows/Fonts":"/Library/Fonts";for(const n in i){const o=String(i[n].inp).replace("::PATH_PRJ_FONTS::",O).replace("::PATH_USER_FONTS::",P).replace("::PATH_OS_FONTS::",F),e=`doc/prj/script/${n}${a?".woff2":(0,_.extname)(o)}`,s=r[n]={inp:o,out:e,iSize:1,oSize:1,err:""};if(!(0,t.existsSync)(o)){s.err=`\u5909\u63DB\u5931\u6557\u3067\u3059\u3002\u5165\u529B\u30D5\u30A1\u30A4\u30EB ${i[n].inp.slice(20)} \u304C\u5B58\u5728\u3059\u308B\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044`;continue}m.push(g(s,i[n].txt))}Promise.allSettled(m).then(()=>{for(const n in r){const o=r[n],{inp:e,out:s}=o;if(o.inp=i[n].inp,!(0,t.existsSync)(s)){o.err+=`\u5909\u63DB\u5931\u6557\u3067\u3059\u3002\u51FA\u529B\u30D5\u30A1\u30A4\u30EB ${o.out} \u304C\u5B58\u5728\u3057\u307E\u305B\u3093`;continue}o.iSize=(0,t.statSync)(e).size,o.oSize=(0,t.statSync)(s).size}T(0)});
