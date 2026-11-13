const {chromium}=require('/home/claude/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const n of ['p4','p5']){const p=await b.newPage({viewport:{width:1080,height:1350}});await p.goto('file:///home/claude/posts/'+n+'.html');await p.waitForTimeout(400);await p.screenshot({path:'/home/claude/posts/post_'+n+'.png'});}
await b.close()})();
