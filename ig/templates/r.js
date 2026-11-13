const {chromium}=require('/home/claude/node_modules/playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const f of fs.readdirSync('.').filter(x=>/^[ps]\d+\.html$/.test(x))){const s=f[0]==='s';const p=await b.newPage({viewport:{width:1080,height:s?1920:1350}});await p.goto('file://'+process.cwd()+'/'+f);await p.waitForTimeout(250);await p.screenshot({path:f.replace('.html','.png')});await p.close();}
await b.close()})();
